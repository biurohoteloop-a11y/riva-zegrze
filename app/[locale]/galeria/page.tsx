'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, XCircle } from 'lucide-react';
import Navigation from '../../components/layout/Navigation';

// ============================================
// 🎯 DANE GALERII - WSZYSTKIE 56 ZDJĘĆ
// ============================================
const galleryImages = [
  { id: 1, url: '/images/gallery/apartamenty/D4.jpg', category: 'Apartamenty', title: 'Apartament Deluxe' },
  { id: 2, url: '/images/gallery/apartamenty/IMG_3614.jpg', category: 'Apartamenty', title: 'Luksusowy Salon' },
  { id: 3, url: '/images/gallery/apartamenty/IMG_3615.jpg', category: 'Apartamenty', title: 'Nowoczesna Sypialnia' },
  { id: 4, url: '/images/gallery/apartamenty/IMG_3616.jpg', category: 'Apartamenty', title: 'Elegancka Łazienka' },
  { id: 5, url: '/images/gallery/apartamenty/IMG_3617.jpg', category: 'Apartamenty', title: 'Przestronny Pokój' },
  { id: 6, url: '/images/gallery/apartamenty/IMG_3620.jpg', category: 'Apartamenty', title: 'Apartament Premium' },
  { id: 7, url: '/images/gallery/apartamenty/IMG_3621.jpg', category: 'Apartamenty', title: 'Komfortowa Przestrzeń' },
  { id: 8, url: '/images/gallery/apartamenty/IMG_3622.jpg', category: 'Apartamenty', title: 'Salon z Aneksem' },
  { id: 9, url: '/images/gallery/apartamenty/IMG_3648.jpg', category: 'Apartamenty', title: 'Strefa Dzienna' },
  { id: 10, url: '/images/gallery/apartamenty/IMG_3649.jpg', category: 'Apartamenty', title: 'Sypialnia Standard' },
  { id: 11, url: '/images/gallery/apartamenty/IMG_3650.jpg', category: 'Apartamenty', title: 'Wykończenie Premium' },
  { id: 12, url: '/images/gallery/apartamenty/IMG_3651.jpg', category: 'Apartamenty', title: 'Apartament Rodzinny' },
  { id: 13, url: '/images/gallery/apartamenty/IMG_3653.jpg', category: 'Apartamenty', title: 'Przestrzeń Relaksu' },
  { id: 14, url: '/images/gallery/apartamenty/IMG_4644.jpg', category: 'Apartamenty', title: 'Nowoczesny Design' },
  { id: 15, url: '/images/gallery/apartamenty/IMG_4647.jpg', category: 'Apartamenty', title: 'Apartament Widokowy' },
  { id: 16, url: '/images/gallery/apartamenty/IMG_4649.jpg', category: 'Apartamenty', title: 'Strefa Nocna' },
  { id: 17, url: '/images/gallery/apartamenty/IMG_4650.jpg', category: 'Apartamenty', title: 'Elegancki Wystrój' },
  { id: 18, url: '/images/gallery/apartamenty/IMG_4651.jpg', category: 'Apartamenty', title: 'Apartament Komfortowy' },
  { id: 19, url: '/images/gallery/apartamenty/IMG_4658.jpg', category: 'Apartamenty', title: 'Studio Apartment' },
  { id: 20, url: '/images/gallery/apartamenty/IMG_4659.jpg', category: 'Apartamenty', title: 'Jasna Przestrzeń' },
  { id: 21, url: '/images/gallery/apartamenty/IMG_4661.jpg', category: 'Apartamenty', title: 'Apartament Loftowy' },
  { id: 22, url: '/images/gallery/apartamenty/IMG_4665.jpg', category: 'Apartamenty', title: 'Przytulna Sypialnia' },
  { id: 23, url: '/images/gallery/apartamenty/IMG_4666.jpg', category: 'Apartamenty', title: 'Minimalistyczny Styl' },
  { id: 24, url: '/images/gallery/apartamenty/T3S-RivaZegrze-3107-m.jpg', category: 'Apartamenty', title: 'Penthouse Suite' },
  { id: 25, url: '/images/gallery/apartamenty/T3S-RivaZegrze-3296-m.jpg', category: 'Apartamenty', title: 'Ekskluzywny Apartament' },
  { id: 26, url: '/images/gallery/apartamenty/T3S-RivaZegrze-3311-m.jpg', category: 'Apartamenty', title: 'Wnętrze Premium' },
  { id: 27, url: '/images/gallery/apartamenty/T3S-RivaZegrze-3334-m.jpg', category: 'Apartamenty', title: 'Apartament z Widokiem' },
  { id: 28, url: '/images/gallery/apartamenty/T3S-RivaZegrze-3500-m.jpg', category: 'Apartamenty', title: 'Luksusowe Wnętrze' },
  // SIŁOWNIA I BASEN
  { id: 29, url: '/images/gallery/silownia/hantle silownia.jpg', category: 'Siłownia i Basen', title: 'Strefa Cardio' },
  { id: 30, url: '/images/gallery/silownia/rowerki silownia.jpg', category: 'Siłownia i Basen', title: 'Strefa Siłowa' },
  { id: 31, url: '/images/gallery/silownia/T3S-RivaZegrze-3376-m.jpg', category: 'Siłownia i Basen', title: 'Sprzęt Fitness' },
  { id: 32, url: '/images/gallery/silownia/T3S-RivaZegrze-3411-m.jpg', category: 'Siłownia i Basen', title: 'Sala Treningowa' },
  { id: 33, url: '/images/gallery/silownia/T3S-RivaZegrze-3689-m.jpg', category: 'Siłownia i Basen', title: 'Nowoczesny Wystrój' },
  { id: 34, url: '/images/gallery/silownia/T3S-RivaZegrze-3796-m.jpg', category: 'Siłownia i Basen', title: 'Basen Wewnętrzny' },
  { id: 35, url: '/images/gallery/silownia/T3S-RivaZegrze-4404-m.jpg', category: 'Siłownia i Basen', title: 'Sprzęt Profesjonalny' },
  { id: 36, url: '/images/gallery/silownia/T3S-RivaZegrze-RG-3885-m.jpg', category: 'Siłownia i Basen', title: 'Strefa Rozciągania' },
  { id: 37, url: '/images/gallery/silownia/T3S-RivaZegrze-RG-3969-m.jpg', category: 'Siłownia i Basen', title: 'Hantle i Ciężary' },
  { id: 38, url: '/images/gallery/silownia/widok silownia.jpg', category: 'Siłownia i Basen', title: 'Przestrzeń Fitness' },
  { id: 39, url: '/images/gallery/silownia/wnetrze silowni.jpg', category: 'Siłownia i Basen', title: 'Panorama Siłowni' },
  // OKOLICA
  { id: 40, url: '/images/gallery/okolica/T3S-RivaZegrze-0412-m.jpg', category: 'Okolica', title: 'Widok na Zalew' },
  { id: 41, url: '/images/gallery/okolica/T3S-RivaZegrze-0430-m.jpg', category: 'Okolica', title: 'Panorama Jeziora' },
  { id: 42, url: '/images/gallery/okolica/T3S-RivaZegrze-0440-m.jpg', category: 'Okolica', title: 'Zachód Słońca' },
  { id: 43, url: '/images/gallery/okolica/T3S-RivaZegrze-0446-m.jpg', category: 'Okolica', title: 'Marina Zegrze' },
  { id: 44, url: '/images/gallery/okolica/T3S-RivaZegrze-0610-m.jpg', category: 'Okolica', title: 'Jezioro o Wschodzie' },
  { id: 45, url: '/images/gallery/okolica/T3S-RivaZegrze-0620-m.jpg', category: 'Okolica', title: 'Ogród z Tarasem' },
  { id: 46, url: '/images/gallery/okolica/T3S-RivaZegrze-0760-m.jpg', category: 'Okolica', title: 'Taras z Widokiem' },
  { id: 47, url: '/images/gallery/okolica/T3S-RivaZegrze-0903-m.jpg', category: 'Okolica', title: 'Basen Outdoor' },
  { id: 48, url: '/images/gallery/okolica/T3S-RivaZegrze-0940-m.jpg', category: 'Okolica', title: 'Plaża Prywatna' },
  { id: 49, url: '/images/gallery/okolica/T3S-RivaZegrze-2957-m.jpg', category: 'Okolica', title: 'Przystań Jachtowa' },
  { id: 50, url: '/images/gallery/okolica/T3S-RivaZegrze-3941-m.jpg', category: 'Okolica', title: 'Ścieżki Spacerowe' },
  { id: 51, url: '/images/gallery/okolica/T3S-RivaZegrze-3992-m.jpg', category: 'Okolica', title: 'Widok Wieczorny' },
  { id: 52, url: '/images/gallery/okolica/T3S-RivaZegrze-4158-m.jpg', category: 'Okolica', title: 'Natura Dookoła' },
  { id: 53, url: '/images/gallery/okolica/T3S-RivaZegrze-4168-m.jpg', category: 'Okolica', title: 'Elewacja Hotelu' },
  { id: 54, url: '/images/gallery/okolica/T3S-RivaZegrze-4175-m.jpg', category: 'Okolica', title: 'Wejście Główne' },
  { id: 55, url: '/images/gallery/okolica/T3S-RivaZegrze-4183-m.jpg', category: 'Okolica', title: 'Otoczenie Zielone' },
  { id: 56, url: '/images/gallery/okolica/T3S-RivaZegrze-RG-3669-m.jpg', category: 'Okolica', title: 'Krajobraz nad Zalewem' },
];

// ============================================
// 🎯 MAIN PAGE COMPONENT
// ============================================
export default function GaleriaPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f1f1ed]">
        <GalleryHero />
        <GalleryGrid />
      </main>
      {/* <MinimalFooter /> */}
    </>
  );
}

// ============================================
// 🎯 GALLERY HERO
// ============================================
function GalleryHero() {
  const t = useTranslations('galleryPage.hero');
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        const { jarallax } = await import('jarallax');

        jarallax(heroRef.current, {
          speed: 0.6,
          imgSrc: '/images/gallery/baner-galeria/zdjecie-na-baner.jpg',
          imgSize: 'cover',
          imgPosition: 'center center',
        });
      }
    };

    initParallax();
  }, []);

  return (
    <section
      ref={heroRef}
      className="jarallax relative h-[70vh] flex items-center justify-center overflow-hidden"
      data-jarallax
      data-speed="0.6"
      data-jarallax-img="/images/gallery/baner-galeria/zdjecie-na-baner.jpg"
    >
      <div className="absolute inset-0 bg-[#0f0e0f]/50 z-10" />

      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.4em] uppercase font-light opacity-80 mb-4 block">
          {t('label')}
        </span>

        <h1
          className="text-5xl md:text-7xl font-light mb-6 tracking-[0.15em] leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t('title')}
        </h1>

        <p className="text-base font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}

// ============================================
// 🎯 GALLERY GRID
// ============================================
function GalleryGrid() {
  const t = useTranslations('galleryPage.grid');
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Mapowanie filtrów na klucze kategorii w danych
  const categoryMap: Record<string, string> = {
    all: 'all',
    apartments: 'Apartamenty',
    gym: 'Siłownia i Basen',
    surroundings: 'Okolica',
  };

  // Mapowanie kategorii z danych na klucze tłumaczeń
  const categoryTranslationMap: Record<string, string> = {
    'Apartamenty': 'categoryApartments',
    'Siłownia i Basen': 'categoryGym',
    'Okolica': 'categorySurroundings',
  };

  const filterButtons = [
    { key: 'all', label: t('filterAll') },
    { key: 'apartments', label: t('filterApartments') },
    { key: 'gym', label: t('filterGym') },
    { key: 'surroundings', label: t('filterSurroundings') },
  ];

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === categoryMap[filter]);

  // GSAP Animations
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');

          gsap.registerPlugin(ScrollTrigger);

          const images = gridRef.current?.querySelectorAll('.gallery-item');

          if (images) {
            gsap.fromTo(
              images,
              { opacity: 0, y: 60, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: 'top 80%',
                  end: 'bottom 20%',
                },
              }
            );
          }
        } catch (error) {
          console.error('GSAP animation error:', error);
        }
      }
    };

    initAnimations();
  }, [filter]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);

  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Helper — przetłumacz kategorię z danych
  const getTranslatedCategory = (category: string) => {
    const key = categoryTranslationMap[category];
    return key ? t(key) : category;
  };

  return (
    <section className="py-24 lg:py-32 bg-[#f7f6f4]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`text-xs tracking-[0.2em] px-6 py-3 border transition-all font-light ${
                filter === btn.key
                  ? 'bg-[#8a968f] text-white border-[#8a968f]'
                  : 'border-[#d4d6ce] text-[#6e7a73] hover:border-[#8a968f] hover:text-[#8a968f]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="gallery-item group relative aspect-square overflow-hidden cursor-pointer bg-white border border-[#e8e6e1]"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={image.url}
                alt={getTranslatedCategory(image.category)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
                loading="lazy"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#0f0e0f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <span className="text-xs tracking-[0.35em] uppercase font-light">
                  {getTranslatedCategory(image.category)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white"
          >
            <XCircle size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={filteredImages[currentImage]?.url || ''}
              alt={getTranslatedCategory(filteredImages[currentImage]?.category || '')}
              fill
              className="object-contain"
              quality={95}
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white text-xs tracking-[0.3em] uppercase p-6">
              {getTranslatedCategory(filteredImages[currentImage]?.category || '')} {t('lightboxSeparator')} {currentImage + 1} {t('lightboxOf')}{' '}
              {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Minimal Footer – Riva Zegrze - Professional Pastel Version - MOBILE OPTIMIZED
function MinimalFooter() {
  return (
    <footer className="bg-[#f1f1ed] text-[#1a4d2e] py-20 border-t border-[#d4d6ce]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
              </svg>
              <span
                className="text-2xl font-light tracking-[0.15em] text-[#1a4d2e]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                RIVA ZEGRZE
              </span>
            </div>
            <p className="text-sm text-[#6e7a73] leading-relaxed font-light mb-6">
              Kameralne apartamenty nad wodą. Spokój, komfort i bezpośrednia
              rezerwacja w wyjątkowej lokalizacji pod Warszawą.
            </p>
            
            {/* Awards/Certifications */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#AB8A62]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-[#8a968f]">Booking.com</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Odkryj
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Apartamenty', href: '/rooms' },
                { label: 'Informacje o rezerwacji', href: '/informacje-o-rezerwacji' },
                { label: 'Wellness & Spa', href: '/activities' },
                { label: 'Galeria', href: '/galeria' },
                { label: 'O Nas', href: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#6e7a73] hover:text-[#1a4d2e] transition-colors font-light inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#AB8A62] transition-all duration-300"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> 

          {/* CONTACT */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#6e7a73] font-light group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="group-hover:text-[#1a4d2e] transition-colors">
                  Riva Zegrze<br />
                  Rybaki 11<br />
                  05-130 Zegrze Południowe
                </span>
              </li>
              <li>
                <a href="tel:+48510038038" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+48 510 038 038</span>
                </a>
              </li>
              <li>
                <a href="mailto:wynajem@rivazegrze.pl" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>wynajem@rivazegrze.pl</span>
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER & SOCIAL */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Newsletter
            </h4>
            <p className="text-sm text-[#6e7a73] mb-4 font-light">
              Bądź na bieżąco z ofertami specjalnymi
            </p>
            
            {/* Newsletter Form */}
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Twój e-mail"
                  className="flex-1 px-4 py-3 bg-white border border-[#d4d6ce] text-sm text-[#6e7a73] placeholder:text-[#b6b9af] focus:outline-none focus:border-[#AB8A62] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#967447] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Social */}
            <div className="space-y-3">
              <h5 className="text-xs tracking-[0.2em] uppercase font-light text-[#8a968f]">
                Social Media
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: 'Instagram' },
                  { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-[#d4d6ce] hover:border-[#AB8A62] flex items-center justify-center transition-all duration-300 text-[#8a968f] hover:text-[#AB8A62] hover:bg-white group"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - ✅ MOBILE OPTIMIZED */}
        <div className="border-t border-[#d4d6ce] pt-8">
          
          {/* Copyright i Made by - zawsze na górze */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
            <p className="text-xs text-[#8a968f] font-light text-center sm:text-left">
              © {new Date().getFullYear()} Riva Zegrze. Wszystkie prawa zastrzeżone.
            </p>
            <a 
              href="https://hoteler.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light group"
            >
              <span>Made with</span>
              <svg className="w-3 h-3 text-[#AB8A62] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">by Hoteler</span>
            </a>
          </div>

          {/* Linki prawne - stack na mobile, row na desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
            {[
              { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
              { label: 'Regulamin', href: '/regulamin' },
              { label: 'Informacje o rezerwacji', href: '/informacje-o-rezerwacji' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#AB8A62] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* NIP - osobna linia na dole, wyśrodkowana */}
          <div className="text-center pt-4 border-t border-[#d4d6ce]/50">
            <p className="text-xs text-[#8a968f] font-light">
              <span className="font-medium text-[#6e7a73]">Open One Sp. z o.o. S.k.</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className="font-medium text-[#6e7a73]">NIP:</span> 5242877732
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
