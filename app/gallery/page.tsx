// app/gallery/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

// ============================================
// DANE GALERII
// ============================================
const galleryImages = [
  // APARTAMENTY
  { 
    id: 1, 
    src: '/gallery/apartamenty/apartament-01.jpg', 
    alt: 'Apartament Deluxe', 
    category: 'apartamenty' 
  },
  { 
    id: 2, 
    src: '/gallery/apartamenty/apartament-02.jpg', 
    alt: 'Apartament Standard', 
    category: 'apartamenty' 
  },
  { 
    id: 3, 
    src: '/gallery/apartamenty/apartament-03.jpg', 
    alt: 'Apartament Premium', 
    category: 'apartamenty' 
  },
  
  // SIŁOWNIA
  { 
    id: 4, 
    src: '/gallery/silownia/silownia-01.jpg', 
    alt: 'Siłownia - strefa cardio', 
    category: 'silownia' 
  },
  { 
    id: 5, 
    src: '/gallery/silownia/silownia-02.jpg', 
    alt: 'Siłownia - strefa siłowa', 
    category: 'silownia' 
  },
  { 
    id: 6, 
    src: '/gallery/silownia/silownia-03.jpg', 
    alt: 'Siłownia - widok ogólny', 
    category: 'silownia' 
  },
  
  // OKOLICA
  { 
    id: 7, 
    src: '/gallery/okolica/okolica-01.jpg', 
    alt: 'Widok na góry', 
    category: 'okolica' 
  },
  { 
    id: 8, 
    src: '/gallery/okolica/okolica-02.jpg', 
    alt: 'Okoliczne atrakcje', 
    category: 'okolica' 
  },
  { 
    id: 9, 
    src: '/gallery/okolica/okolica-03.jpg', 
    alt: 'Krajobraz okolicy', 
    category: 'okolica' 
  },
];

// KATEGORIE - 4 TABY
const categories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'apartamenty', label: 'Apartamenty' },
  { id: 'silownia', label: 'Siłownia' },
  { id: 'okolica', label: 'Okolica' },
]; 

// ============================================
// GŁÓWNY KOMPONENT
// ============================================
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Galeria Hotelu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-800/50 to-navy-900/60" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10 animate-fade-up">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light">
            ODKRYJ NASZ HOTEL
          </p>
          <h1 className="text-5xl md:text-7xl font-display mb-4 text-center">
            GALERIA
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl font-light">
            Zobacz elegancję i komfort Hotel Premium
          </p>
        </div>
      </section>

      {/* ==================== FILTER SECTION - 4 TABY ==================== */}
      <section className="py-12 px-4 bg-ocean-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedImage(null);
                }}
                className={`px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-ocean-900 text-white shadow-lg scale-105'
                    : 'bg-white text-navy-700 hover:bg-ocean-100 border border-ocean-200 hover:border-ocean-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY GRID ==================== */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Licznik zdjęć */}
          <div className="text-center mb-8">
            <p className="text-navy-600 text-sm tracking-wider uppercase">
              Wyświetlono {filteredImages.length} {filteredImages.length === 1 ? 'zdjęcie' : filteredImages.length < 5 ? 'zdjęcia' : 'zdjęć'}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden bg-ocean-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-light mb-2">
                      {image.alt}
                    </p>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-wider uppercase rounded">
                      {categories.find(cat => cat.id === image.category)?.label || image.category}
                    </span>
                  </div>
                </div>

                {/* Icon zoom */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-ocean-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Brak wyników */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy-500 text-lg">Brak zdjęć w tej kategorii</p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== LIGHTBOX ==================== */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-navy-900/96 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl md:text-5xl hover:text-ocean-300 transition-colors z-50 w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij"
          >
            ×
          </button>
          
          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              className="absolute left-2 md:left-8 text-white text-4xl md:text-6xl hover:text-ocean-300 transition-colors z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              onClick={handlePrevious}
              aria-label="Poprzednie"
            >
              ‹
            </button>
          )}
          
          {/* Next Button */}
          {selectedImage < filteredImages.length - 1 && (
            <button
              className="absolute right-2 md:right-8 text-white text-4xl md:text-6xl hover:text-ocean-300 transition-colors z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              onClick={handleNext}
              aria-label="Następne"
            >
              ›
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full max-w-6xl aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Image Info */}
          <div className="absolute bottom-8 left-0 right-0 text-center px-4">
            <p className="text-white text-lg md:text-xl font-light mb-2">
              {filteredImages[selectedImage].alt}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-block px-3 py-1 bg-ocean-600/40 backdrop-blur-sm text-white text-xs tracking-wider uppercase rounded">
                {categories.find(cat => cat.id === filteredImages[selectedImage].category)?.label || filteredImages[selectedImage].category}
              </span>
              <p className="text-ocean-300 text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CTA SECTION ==================== */}
      <section className="bg-gradient-ocean text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-light">
            PRZEŻYJ TO SAM
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Gotowy na Swoje Wspomnienia?
          </h2>
          <p className="text-lg mb-10 text-ocean-100 font-light leading-relaxed">
            Zarezerwuj pobyt i doświadcz luksusu oraz spokoju na własnej skórze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/rooms" 
              className="px-8 py-4 bg-white text-ocean-900 hover:bg-ocean-50 transition-colors duration-300 text-sm tracking-wider uppercase font-medium shadow-lg hover:shadow-xl"
            >
              ODKRYJ POKOJE
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-ocean-900 transition-colors duration-300 text-sm tracking-wider uppercase font-medium"
            >
              SKONTAKTUJ SIĘ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
