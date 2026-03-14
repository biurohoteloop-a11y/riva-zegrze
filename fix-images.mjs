import { readFile, writeFile } from 'fs/promises';

const filePath = './app/components/sections/HomePageClient.tsx';

async function main() {
  let content = await readFile(filePath, 'utf-8');
  
  // Zamiana 1 - feature.image
  content = content.replace(
    `<img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />`,
    `<Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />`
  );

  // Zamiana 2 - item.url (wieloliniowa)
  content = content.replace(
    `<img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"`,
    `<Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
  );

  await writeFile(filePath, content, 'utf-8');
  console.log('✅ Zamiany wykonane!');
  
  // Weryfikacja
  const updated = await readFile(filePath, 'utf-8');
  const imgTags = [...updated.matchAll(/<img /g)];
  const imageTags = [...updated.matchAll(/<Image /g)];
  console.log(`📊 Pozostałe <img>: ${imgTags.length}`);
  console.log(`📊 Komponenty <Image>: ${imageTags.length}`);
}

main();
