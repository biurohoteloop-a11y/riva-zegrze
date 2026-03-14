import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public';
const MAX_WIDTH = 1920;
const QUALITY = 75;

async function getAllImages(dir) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      const subFiles = await getAllImages(fullPath);
      files.push(...subFiles);
    } else {
      const ext = extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function compressImage(filePath) {
  const sizeBefore = (await stat(filePath)).size;
  const ext = extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';
  
  try {
    let pipeline = sharp(filePath).resize(MAX_WIDTH, null, { 
      withoutEnlargement: true 
    });
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: QUALITY, progressive: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toFile(tempPath);
    } else if (ext === '.webp') {
      await pipeline.webp({ quality: QUALITY }).toFile(tempPath);
    }
    
    const sizeAfter = (await stat(tempPath)).size;
    
    if (sizeAfter < sizeBefore) {
      await rename(tempPath, filePath);
      const saved = ((sizeBefore - sizeAfter) / 1024 / 1024).toFixed(2);
      const pct = Math.round((1 - sizeAfter/sizeBefore) * 100);
      console.log(`✅ ${basename(filePath)}: ${(sizeBefore/1024/1024).toFixed(2)}MB → ${(sizeAfter/1024/1024).toFixed(2)}MB (oszczędność: ${saved}MB, ${pct}%)`);
    } else {
      // Plik już był skompresowany, usuń temp
      const { unlink } = await import('fs/promises');
      await unlink(tempPath);
      console.log(`⏭️  ${basename(filePath)}: już skompresowany, pomijam`);
    }
  } catch (err) {
    console.error(`❌ Błąd przy ${filePath}:`, err.message);
    try {
      const { unlink } = await import('fs/promises');
      await unlink(tempPath);
    } catch {}
  }
}

async function main() {
  console.log('🔍 Szukam obrazów w /public...\n');
  const images = await getAllImages(INPUT_DIR);
  console.log(`📸 Znaleziono ${images.length} obrazów\n`);
  
  let totalBefore = 0;
  for (const img of images) {
    totalBefore += (await stat(img)).size;
  }
  
  console.log(`📦 Łączny rozmiar przed: ${(totalBefore/1024/1024).toFixed(2)}MB\n`);
  console.log('🚀 Rozpoczynam kompresję...\n');
  
  for (const img of images) {
    await compressImage(img);
  }
  
  let totalAfter = 0;
  for (const img of images) {
    totalAfter += (await stat(img)).size;
  }
  
  const saved = ((totalBefore - totalAfter)/1024/1024).toFixed(2);
  console.log(`\n✨ GOTOWE!`);
  console.log(`📦 Przed: ${(totalBefore/1024/1024).toFixed(2)}MB`);
  console.log(`📦 Po:    ${(totalAfter/1024/1024).toFixed(2)}MB`);
  console.log(`💾 Zaoszczędzono: ${saved}MB`);
}

main();
