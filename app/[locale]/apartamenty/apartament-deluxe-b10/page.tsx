'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navigation from '../../../components/layout/Navigation';
import { useTranslations } from 'next-intl';
import { 
  Navigation as SwiperNavigation, 
  Pagination, 
  EffectFade, 
  Autoplay 
} from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { 
  X,Menu,Compass,Waves, Users, Bed, Maximize, Wifi, Coffee, 
  Tv, Wind, Bath, Utensils, Check, Star, Quote, 
  ChevronLeft, ChevronRight, Calendar, MapPin, 
  Sparkles, Eye, Phone, Mail, Instagram, Facebook,
  Droplets, Dumbbell, Home, Anchor, Clock, CarFront
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'react-photo-view/dist/react-photo-view.css';

// ============================================
// DANE APARTAMENTU B10 DELUXE
// ============================================
const apartmentData = {
  name: 'Apartament B10 Deluxe',
  tagline: 'z 1 sypialnią, tarasem i widokiem na wodę',
  subtitle: 'Przestronny apartament Deluxe z dużym tarasem i panoramicznym widokiem na Jezioro Zegrzyńskie, położony na 3 piętrze',
  price: {
    from: 900,
    currency: 'zł',
    period: 'noc',
    note: '* Cena obowiązuje przy rezerwacji minimum 3 dób. Przy pobytach krótszych (1–2 noce) obowiązuje dopłata zgodnie z cennikiem.'
  },
  specs: {
    size: '68 m²',
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    floor: '3 piętro',
    terrace: 'Tak - przestronny taras',
    parking: 'Bezpłatny + garaż 75 zł/doba'
  },
  
  description: `Przestronny apartament Deluxe z dużym tarasem i panoramicznym widokiem na Jezioro Zegrzyńskie, położony na 3 piętrze. Idealna propozycja dla gości ceniących komfort, przestrzeń i wyjątkowe położenie nad wodą.`,
  
  fullDescription: `Apartament B10 Deluxe o powierzchni 68 m² to największy apartament w ofercie, zapewniający wyjątkowy komfort i swobodę pobytu dla maksymalnie czterech osób. Układ apartamentu jest taki sam jak w pozostałych apartamentach – obejmuje oddzielną sypialnię, salon z rozkładaną sofą, funkcjonalny aneks kuchenny oraz prywatną łazienkę z prysznicem – jednak większy metraż daje znacznie więcej przestrzeni do wypoczynku i codziennego użytkowania.

Największym atutem apartamentu jest przestronny taras położony na 3 piętrze, z którego rozciąga się piękny widok na Jezioro Zegrzyńskie. To idealne miejsce na poranną kawę, relaks w ciągu dnia lub wieczorny odpoczynek z widokiem na wodę i zachody słońca.`,

  aboutProperty: {
    title: 'O obiekcie',
    paragraphs: [
      'Apartament znajduje się na terenie Riva Zegrze, kompleksu położonego bezpośrednio przy plaży nad Jeziorem Zegrzyńskim. Goście mają dostęp do krytego, podgrzewanego basenu, siłowni, prywatnej plaży, mariny oraz zaplecza do sportów wodnych.',
      
      'Okolica sprzyja aktywnemu wypoczynkowi – dostępne są trasy spacerowe i rowerowe, kajaki, rowerki wodne, a w niedalekiej odległości znajduje się pole golfowe w Rajszewie. Dogodny dojazd z Warszawy sprawia, że apartament B10 Deluxe doskonale sprawdzi się zarówno na dłuższy wypoczynek, jak i wyjątkowy weekend nad wodą.'
    ],
    features: [
      {
        icon: MapPin,
        title: 'Lokalizacja',
        description: 'Bezpośrednio przy plaży nad Jeziorem Zegrzyńskim, 3 piętro z widokiem na wodę.'
      },
      {
        icon: Droplets,
        title: 'Basen',
        description: 'Dostęp do krytego, podgrzewanego basenu przez cały rok.'
      },
      {
        icon: Dumbbell,
        title: 'Siłownia',
        description: 'W pełni wyposażona siłownia dla wszystkich gości.'
      }
    ]
  },
  
  // NAJWAŻNIEJSZE ATUTY Z IKONAMI (8 elementów)
  highlights: [
    { icon: Home, label: 'Taras', description: 'Przestronny taras z widokiem na jezioro' },
    { icon: Eye, label: 'Widok na jezioro', description: 'Panoramiczny widok na Jezioro Zegrzyńskie' },
    { icon: MapPin, label: '3 piętro', description: 'Najwyższe piętro z najlepszymi widokami' },
    { icon: Droplets, label: 'Basen kryty', description: 'Podgrzewany przez cały rok' },
    { icon: Dumbbell, label: 'Siłownia', description: 'W pełni wyposażona' },
    { icon: Sparkles, label: 'Prywatna plaża', description: 'Bezpośredni dostęp' },
    { icon: Anchor, label: 'Marina', description: 'Dostęp do przystani' },
    { icon: Maximize, label: '68 m²', description: 'Największy apartament w ofercie' },
  ],

  // WAŻNE INFORMACJE
  importantInfo: [
    { icon: Clock, label: 'Zameldowanie', value: '15:00 - 22:00', note: 'Samodzielne zameldowanie - kody dostępu przesyłane w dniu przyjazdu' },
    { icon: Clock, label: 'Wymeldowanie', value: 'do 11:00', note: '' },
    { icon: Star, label: 'Cisza nocna', value: '22:00 - 7:00', note: 'Obowiązuje w godzinach nocnych' },
    { icon: Check, label: 'Zakaz imprez', value: 'Brak imprez', note: 'Zakaz organizowania imprez, w tym wieczorów panieńskich i kawalerskich' },
    { icon: CarFront, label: 'Parking', value: 'Bezpłatne miejsca przed budynkiem', note: 'Miejsce w garażu: 75 zł/doba (po wcześniejszej rezerwacji)' },
  ],

  // WYPOSAŻENIE - pełna lista
  amenities: [
    { icon: Coffee, label: 'Lodówka' },
    { icon: Utensils, label: 'Zmywarka' },
    { icon: Coffee, label: 'Piekarnik' },
    { icon: Coffee, label: 'Czajnik' },
    { icon: Wind, label: 'Pralka' },
    { icon: Wind, label: 'Suszarka' },
    { icon: Wifi, label: 'WiFi' },
    { icon: Tv, label: 'Telewizor' },
  ],

  gallery: [
    '/images/gallery/apartments/b10/IMG_4644.jpg',
    '/images/gallery/apartments/b10/IMG_4650.jpg',
    '/images/gallery/apartments/b10/IMG_4652.jpg',
    '/images/gallery/apartments/b10/IMG_4662.jpg',
    '/images/gallery/apartments/b10/IMG_4666.jpg',
    '/images/gallery/apartments/b10/IMG_4670.jpg',
],


  surroundingsGallery: [
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0430-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0610-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0903-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-4158-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-4175-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-RG-3669-m.jpg',
  ],

  reviews: [
    {
      name: 'Magdalena Lewandowska',
      date: 'Grudzień 2024',
      rating: 5,
      comment: 'Apartament B10 to prawdziwa perła! Widoki zapierają dech, przestrzeń ogromna, a wyposażenie na najwyższym poziomie. Najlepszy wybór!',
      avatar: 'ML'
    },
    {
      name: 'Tomasz Wiśniewski',
      date: 'Listopad 2024',
      rating: 5,
      comment: 'Wyjątkowe miejsce na weekend. Taras z widokiem na Zegrze to coś niesamowitego. 68 m² to luksus, polecamy gorąco!',
      avatar: 'TW'
    },
    {
      name: 'Karolina Mazur',
      date: 'Październik 2024',
      rating: 5,
      comment: 'Przepiękny, przestronny apartament z najlepszymi widokami w całym kompleksie. Wszystko idealne - od lokalizacji po wyposażenie!',
      avatar: 'KM'
    }
  ]
};

// MAIN, Navigation, HeroGallery - identyczne strukturalnie

export default function ApartmentB10DeluxePage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f7f6f4]">
        <HeroGallery />
        <ApartmentDetails />
        <ImportantInfoSection />
    
        <SurroundingsGallery />
        <ReviewsSection />
        <CTAWithFooter />
      </main>
    </>
  );
}

function HeroGallery() {
  const t = useTranslations('apartmentB10');
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo('.hero-badge', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.2 });
          gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 });
          gsap.fromTo('.hero-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.6 });
          gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.8 });
          gsap.fromTo('.spec-card', { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 1.0 });
          gsap.fromTo('.price-box', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 1.4 });

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-20 bg-gradient-to-b from-[#f1f1ed] to-[#f7f6f4]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="flex items-center gap-2 text-xs text-[#8a968f] mb-8">
          <a href="/" className="hover:text-[#4a6b5e] transition-colors">{t('hero.breadcrumb.home')}</a>
          <span>/</span>
          <a href="/apartamenty" className="hover:text-[#4a6b5e] transition-colors">{t('hero.breadcrumb.apartments')}</a>
          <span>/</span>
          <span className="text-[#4a6b5e]">{t('hero.breadcrumb.current')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d4d6ce] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#4a6b5e]" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.2em] text-[#4a6b5e] uppercase">{t('hero.badge')}</span>
            </div>

            <h1 
              className="hero-title text-5xl lg:text-6xl xl:text-7xl font-light text-[#4a6b5e] mb-4 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('hero.title')}
            </h1>

            <p className="hero-tagline text-xl text-[#4a6b5e] font-light mb-2 leading-relaxed">
              {t('hero.tagline')}
            </p>

            <p className="hero-subtitle text-base text-[#8a968f] font-light mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Maximize, label: t('hero.specs.size.label'), value: t('hero.specs.size.value') },
                { icon: Users, label: t('hero.specs.guests.label'), value: t('hero.specs.guests.value') },
                { icon: Bed, label: t('hero.specs.bedrooms.label'), value: t('hero.specs.bedrooms.value') },
                { icon: Bath, label: t('hero.specs.bathrooms.label'), value: t('hero.specs.bathrooms.value') },
              ].map((spec, idx) => (
                <div key={idx} className="spec-card flex items-center gap-3 p-4 bg-white border border-[#d4d6ce] group hover:border-[#4a6b5e] transition-all duration-300">
                  <spec.icon className="w-5 h-5 text-[#4a6b5e] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <span className="text-xs text-[#8a968f] uppercase tracking-wide">{spec.label}</span>
                    <span className="text-sm text-[#4a6b5e] font-medium">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="price-box flex flex-col gap-2 mb-8 p-6 bg-white border-l-4 border-[#4a6b5e]">
              <div className="flex items-baseline gap-3">
                <span className="text-sm tracking-[0.2em] text-[#8a968f] uppercase">{t('hero.price.from')}</span>
                <span className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('hero.price.amount')}
                </span>
                <span className="text-lg text-[#6e7a73]">{t('hero.price.currency')} / {t('hero.price.period')}</span>
              </div>
              <p className="text-xs text-[#8a968f] italic">{t('hero.price.note')}</p>
            </div>

          </div>

          <div className="order-1 lg:order-2">
            <PhotoProvider>
              <div className="space-y-4">
                
                <Swiper
                  modules={[SwiperNavigation, Pagination, EffectFade, Autoplay]}
                  effect="fade"
                  spaceBetween={10}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  pagination={{ 
                    clickable: true,
                    el: '.swiper-pagination-custom',
                  }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  className="relative h-[500px] lg:h-[600px] bg-white p-3 shadow-2xl"
                >
                  {apartmentData.gallery.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <PhotoView src={img}>
                        <div className="relative h-full cursor-pointer group">
                          <img
                            src={img}
                            alt={`${t('hero.title')} - ${t('hero.gallery.imageAlt')} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                          </div>
                        </div>
                      </PhotoView>
                    </SwiperSlide>
                  ))}

                  <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-all group shadow-lg">
                    <ChevronLeft className="w-6 h-6 text-[#4a6b5e] group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-all group shadow-lg">
                    <ChevronRight className="w-6 h-6 text-[#4a6b5e] group-hover:scale-110 transition-transform" />
                  </button>

                  <div className="absolute bottom-6 right-6 z-10 px-4 py-2 bg-white/95 backdrop-blur-sm text-sm text-[#6e7a73]">
                    <span className="text-[#4a6b5e] font-medium">{activeIndex + 1}</span> / {apartmentData.gallery.length}
                  </div>

                  <div className="swiper-pagination-custom absolute bottom-6 left-6 z-10"></div>
                </Swiper>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {apartmentData.gallery.map((img, idx) => (
                    <div 
                      key={idx}
                      className={`h-20 cursor-pointer border-2 transition-all ${
                        activeIndex === idx ? 'border-[#4a6b5e]' : 'border-[#d4d6ce] hover:border-[#4a6b5e]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${t('hero.gallery.thumbnailAlt')} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </PhotoProvider>
          </div>

        </div>
      </div>
    </section>
  );
}


// ============================================
// ============================================
// ============================================
// 2. APARTMENT DETAILS WITH CALENDAR
// ============================================
function ApartmentDetails() {
  const t = useTranslations('apartmentB10');
  const sectionRef = useRef<HTMLElement>(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  // Load Hotres scripts
  useEffect(() => {
    const loadHotresScripts = async () => {
      const win = window as any;
      
      // jQuery
      if (!win.jQuery) {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        await new Promise((resolve) => {
          jqueryScript.onload = resolve;
        });
      }

      // Hotres V4
      const hotresScript = document.createElement('script');
      hotresScript.src = 'https://panel.hotres.pl/public/api/hotres_v4.js';
      hotresScript.async = true;
      document.body.appendChild(hotresScript);

      hotresScript.onload = () => {
        if (win.createHotres) {
          win.createHotres({
            oid: 5226,
            lang: 'pl',
            tid: '43220', // ✅ B10 apartment ID
            action: 'room/calendar'
          });
          setCalendarLoaded(true);
        }
      };
    };

    loadHotresScripts();

    return () => {
      const scripts = document.querySelectorAll('script[src*="hotres"], script[src*="jquery"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo('.section-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
          gsap.fromTo('.highlight-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
          gsap.fromTo('.feature-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.features-grid', start: 'top 75%' } });

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* LEFT - Description */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* O apartamencie */}
            <div>
              <h2 
                className="section-heading text-3xl lg:text-4xl font-light text-[#4a6b5e] mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('details.aboutTitle')}
              </h2>
              <p className="text-base text-[#6e7a73] leading-relaxed font-light mb-6">
                {t('details.description')}
              </p>
              <p className="text-base text-[#6e7a73] leading-relaxed font-light" style={{ whiteSpace: 'pre-line' }}>
                {t('details.fullDescription')}
              </p>
            </div>

            {/* Najważniejsze atuty Z IKONAMI */}
            <div>
              <h3 className="text-xl font-light text-[#0f0e0f] mb-6">
                {t('details.highlightsTitle')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Home, key: 'terrace' },
                  { icon: Eye, key: 'lakeView' },
                  { icon: MapPin, key: 'floor' },
                  { icon: Droplets, key: 'pool' },
                  { icon: Dumbbell, key: 'gym' },
                  { icon: Sparkles, key: 'beach' },
                  { icon: Anchor, key: 'marina' },
                  { icon: Maximize, key: 'size' },
                ].map((highlight, idx) => (
                  <div 
                    key={idx} 
                    className="highlight-item group flex flex-col items-center text-center gap-3 p-4 bg-[#f7f6f4] border border-[#d4d6ce] hover:border-[#4a6b5e] transition-all duration-300"
                  >
                    <highlight.icon 
                      className="w-10 h-10 text-[#AB8A62] group-hover:scale-110 transition-transform" 
                      strokeWidth={1}
                    />
                    <h4 className="text-sm font-light text-[#0f0e0f] tracking-wide group-hover:text-[#AB8A62] transition-colors">
                      {t(`details.highlights.${highlight.key}.label`)}
                    </h4>
                    <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                      {t(`details.highlights.${highlight.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* O Obiekcie */}
            <div className="pt-8 border-t border-[#d4d6ce]">
              <h2 
                className="section-heading text-3xl lg:text-4xl font-light text-[#4a6b5e] mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('details.aboutProperty.title')}
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                  {t('details.aboutProperty.paragraph1')}
                </p>
                <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                  {t('details.aboutProperty.paragraph2')}
                </p>
              </div>

              <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: MapPin, index: 0 },
                  { icon: Droplets, index: 1 },
                  { icon: Dumbbell, index: 2 }
                ].map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-card group bg-[#f7f6f4] p-6 border border-[#d4d6ce] hover:border-[#4a6b5e] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-[#d4d6ce] flex items-center justify-center mb-4 group-hover:border-[#AB8A62] group-hover:bg-gradient-to-br group-hover:from-[#f4e4c1] group-hover:to-[#AB8A62] transition-all">
                      <feature.icon className="w-6 h-6 text-[#4a6b5e] group-hover:text-[#8b6914] transition-colors" strokeWidth={1} />
                    </div>
                    <h4 className="text-base font-medium text-[#0f0e0f] mb-2">
                      {t(`details.aboutProperty.features.${feature.index}.title`)}
                    </h4>
                    <p className="text-sm text-[#6e7a73] leading-relaxed font-light">
                      {t(`details.aboutProperty.features.${feature.index}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ✅ RIGHT - KALENDARZ DOSTĘPNOŚCI B10 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-white to-[#f7f6f4] p-8 border border-[#d4d6ce] shadow-xl rounded-lg">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a6b5e] to-[#8a968f] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-2xl font-light text-[#4a6b5e]" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('details.calendar.title')}
                </h3>
              </div>

              {/* Loading State */}
              {!calendarLoaded && (
                <div className="calendar-skeleton">
                  <div className="skeleton-header"></div>
                  <div className="skeleton-grid">
                    {[...Array(35)].map((_, i) => (
                      <div key={i} className="skeleton-day"></div>
                    ))}
                  </div>
                </div>
              )}

              {/* ✅ Hotres Calendar Container */}
              <div 
                id="hotresContainer" 
                className="hotres-calendar-wrapper"
                style={{
                  opacity: calendarLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
                suppressHydrationWarning
              ></div>

            </div>
          </div>

        </div>
      </div>

      {/* ✅ PREMIUM CALENDAR STYLES */}
      <style jsx global>{`
        .hotres-calendar-wrapper {
          min-height: 400px;
        }

        .calendar-skeleton {
          animation: fadeIn 0.3s ease;
        }

        .skeleton-header {
          height: 40px;
          background: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          margin-bottom: 16px;
          border-radius: 4px;
        }

        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .skeleton-day {
          height: 40px;
          background: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        #hotresContainer table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 4px;
        }

        #hotresContainer th {
          padding: 12px 8px;
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          color: #4a6b5e;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: transparent;
          border: none;
        }

        #hotresContainer td {
          padding: 0;
          text-align: center;
          border: none;
        }

        #hotresContainer td div,
        #hotresContainer td a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          font-size: 13px;
          font-weight: 400;
          color: #0f0e0f;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        #hotresContainer td.available div,
        #hotresContainer td.available a {
          background: #e8f5e9;
          border-color: #c8e6c9;
          color: #2e7d32;
        }

        #hotresContainer td.available:hover div,
        #hotresContainer td.available:hover a {
          background: #c8e6c9;
          border-color: #4a6b5e;
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(74, 107, 94, 0.2);
        }

        #hotresContainer td.reserved div,
        #hotresContainer td.reserved a,
        #hotresContainer td.unavailable div,
        #hotresContainer td.unavailable a {
          background: #ffebee;
          border-color: #ffcdd2;
          color: #c62828;
          cursor: not-allowed;
        }

        #hotresContainer td.checkin div,
        #hotresContainer td.checkin a,
        #hotresContainer td.checkout div,
        #hotresContainer td.checkout a {
          background: #fff3e0;
          border-color: #ffe0b2;
          color: #e65100;
        }

        #hotresContainer td.today div,
        #hotresContainer td.today a {
          border: 2px solid #4a6b5e !important;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          #hotresContainer td div,
          #hotresContainer td a {
            min-height: 32px;
            font-size: 12px;
          }

          #hotresContainer th {
            font-size: 10px;
            padding: 8px 4px;
          }
        }
      `}</style>
    </section>
  );
}



// ============================================
function ImportantInfoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('apartmentB10.importantInfo');

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');

          gsap.registerPlugin(ScrollTrigger);

          const items = sectionRef.current.querySelectorAll('.info-item');

          gsap.fromTo(
            items,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
            }
          );
        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  const infoItems = [
    { icon: Clock, key: 'checkin' },
    { icon: Clock, key: 'checkout' },
    { icon: Star, key: 'quietHours' },
    { icon: Check, key: 'noParties' },
    { icon: CarFront, key: 'parking' }
  ] as const;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f7f6f4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            {t('subtitle')}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* GRID 3+2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {infoItems.slice(0, 3).map((info, idx) => (
            <div
              key={idx}
              className="info-item bg-white p-6 border border-[#d4d6ce] hover:border-[#4a6b5e] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7f6f4] border border-[#d4d6ce] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#4a6b5e]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-[#0f0e0f] mb-2">
                    {t(`items.${info.key}.label`)}
                  </h3>
                  <p className="text-sm text-[#4a6b5e] font-medium mb-1">
                    {t(`items.${info.key}.value`)}
                  </p>
                  {t(`items.${info.key}.note`) && (
                    <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                      {t(`items.${info.key}.note`)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {infoItems.slice(3).map((info, idx) => (
            <div
              key={idx + 3}
              className="info-item bg-white p-6 border border-[#d4d6ce] hover:border-[#4a6b5e] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7f6f4] border border-[#d4d6ce] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#4a6b5e]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-[#0f0e0f] mb-2">
                    {t(`items.${info.key}.label`)}
                  </h3>
                  <p className="text-sm text-[#4a6b5e] font-medium mb-1">
                    {t(`items.${info.key}.value`)}
                  </p>
                  {t(`items.${info.key}.note`) && (
                    <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                      {t(`items.${info.key}.note`)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No parties policy box */}
        <div className="mt-8 p-6 bg-white border-l-4 border-[#AB8A62]">
          <div className="flex items-start gap-4">
            <Star className="w-6 h-6 text-[#AB8A62] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-base font-medium text-[#0f0e0f] mb-2">
                {t('noPartiesPolicy.title')}
              </h4>
              <p className="text-sm text-[#6e7a73] leading-relaxed font-light">
                {t('noPartiesPolicy.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================
function SurroundingsGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('apartmentB10.surroundingsGallery');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const galleryItems = sectionRef.current.querySelectorAll('.surroundings-item');
          
          gsap.fromTo(
            galleryItems,
            { opacity: 0, scale: 0.9, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              stagger: {
                amount: 0.6,
                from: "start",
                ease: "power2.out"
              },
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              }
            }
          );

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % apartmentData.surroundingsGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 
          ? apartmentData.surroundingsGallery.length - 1 
          : selectedImage - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28" style={{ backgroundColor: '#d4d5cf' }}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#6e7a73] font-light block mb-4">
              {t('subtitle')}
            </span>
            <h2 
              className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('title')}
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apartmentData.surroundingsGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openModal(idx)}
                className="surroundings-item relative group cursor-pointer bg-white p-2 shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3] overflow-hidden"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt={t('imageAlt', { number: idx + 1 })}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <Eye className="w-5 h-5" strokeWidth={1.5} />
                      <span className="text-sm font-light">{t('viewFullImage')}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-[#4a6b5e] font-medium">
                      {t('imageCounter', { current: idx + 1, total: apartmentData.surroundingsGallery.length })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#4a6b5e] to-transparent" />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 flex items-center justify-center"
          style={{ 
            zIndex: 100, 
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(8px)',
            animation: 'modalFadeIn 0.3s ease-out'
          }}
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('closeGallery')}
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Left */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('previousPhoto')}
          >
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Navigation Right */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('nextPhoto')}
          >
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Counter */}
          <div 
            className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-light"
            style={{ zIndex: 50 }}
          >
            {t('imageCounter', { current: selectedImage + 1, total: apartmentData.surroundingsGallery.length })}
          </div>

          {/* Image */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedImage}
              src={apartmentData.surroundingsGallery[selectedImage]}
              alt={t('imageAlt', { number: selectedImage + 1 })}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              style={{ animation: 'imageScaleIn 0.4s ease-out' }}
            />
          </div>

          {/* Caption */}
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-light max-w-2xl text-center"
            style={{ zIndex: 50 }}
          >
            <MapPin className="w-4 h-4 inline-block mr-2" strokeWidth={1.5} />
            {t('location')}
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes imageScaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}



// ============================================
function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('apartmentB10.reviews');

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const reviewCards = sectionRef.current.querySelectorAll('.review-card');
          
          gsap.fromTo(
            reviewCards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              }
            }
          );

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  // Parse reviews from translations
  const reviews = [
    {
      name: t('items.0.name'),
      date: t('items.0.date'),
      avatar: t('items.0.avatar'),
      rating: 5,
      comment: t('items.0.comment')
    },
    {
      name: t('items.1.name'),
      date: t('items.1.date'),
      avatar: t('items.1.avatar'),
      rating: 5,
      comment: t('items.1.comment')
    },
    {
      name: t('items.2.name'),
      date: t('items.2.date'),
      avatar: t('items.2.avatar'),
      rating: 5,
      comment: t('items.2.comment')
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            {t('subtitle')}
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e] mb-4" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('title')}
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
              ))}
            </div>
            <span className="text-2xl font-light text-[#0f0e0f]">{t('rating')}</span>
            <span className="text-sm text-[#8a968f]">{t('basedOn', { count: reviews.length })}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="review-card bg-[#f7f6f4] p-8 border border-[#d4d6ce] relative group hover:border-[#8a968f] transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#AB8A62] opacity-20 absolute top-6 right-6" strokeWidth={1} />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a6b5e] to-[#6c7a72] flex items-center justify-center text-white font-medium">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0f0e0f]">{review.name}</h4>
                    <p className="text-xs text-[#8a968f]">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-sm text-[#6e7a73] leading-relaxed font-light">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function CTAWithFooter() {
  const t = useTranslations('apartmentB10');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const start = sectionTop - windowHeight;
      const end = sectionTop + sectionHeight / 3;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative text-white overflow-hidden">
      
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src="/images/gallery/apartments/c1/sunset-hero.jpg"
          alt="Riva Zegrze"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollProgress * 0.1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3d35]/70 via-[#2a3d35]/85 to-[#1a2820]/95" style={{ zIndex: 10 }} />
      </div>

      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none transform -translate-y-full"
        style={{ zIndex: 20, opacity: 1 - scrollProgress * 0.3 }}
      >
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z" fill="#d4d5cf">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z;M0,60 Q360,30 720,60 T1440,60 L1440,0 L0,0 Z;M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z" />
          </path>
        </svg>
      </div>

      <div className="relative" style={{ zIndex: 20 }}>
        
        {/* CTA */}
        <div className="cta-content max-w-[1000px] mx-auto px-6 lg:px-12 text-center py-24 lg:py-32">
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#AB8A62]" strokeWidth={1} />
              <span className="text-xs tracking-[0.25em] uppercase text-white/90 font-light">
                {t('cta.badge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-white drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('cta.title')} <br />
              <span className="text-[#AB8A62]">{t('cta.titleHighlight')}</span>
            </h2>

            <p className="text-base md:text-lg font-light mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
              {t('cta.description')}
              <strong className="font-medium text-white"> {t('cta.descriptionHighlight')}</strong> {t('cta.descriptionEnd')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              
              <button className="flex items-center gap-3 px-10 py-5 bg-white text-[#2a3d35] hover:bg-[#AB8A62] hover:text-white transition-all duration-300 text-sm tracking-[0.15em] uppercase group shadow-2xl font-light">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span>{t('cta.bookButton')}</span>
              </button>

              <a href="tel:+48510038038" className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm tracking-[0.15em] uppercase group font-light">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
                <span>{t('cta.phoneButton')}</span>
              </a>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/70">
              {[
                t('cta.trustBadges.payment'),
                t('cta.trustBadges.cancellation'),
                t('cta.trustBadges.bestPrice'),
                t('cta.trustBadges.noCosts')
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs tracking-wide">
                  <Check className="w-4 h-4 text-[#AB8A62]" strokeWidth={2} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* SEPARATOR */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 my-12">
          <motion.div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
        </div>

        {/* FOOTER */}
        <footer className="footer-content py-16 lg:py-20">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
              
              {/* BRAND */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
                  <span className="text-2xl font-light tracking-[0.15em] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    RIVA ZEGRZE
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                  {t('footer.brand.description')}
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-xs text-white/50 font-light">{t('footer.brand.rating')}</span>
                </div>
              </div>

              {/* DISCOVER */}
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  {t('footer.discover.title')}
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: t('footer.discover.apartments'), href: '/apartamenty' },
                    { label: t('footer.discover.specialOffer'), href: '/offers' },
                    { label: t('footer.discover.activities'), href: '/activities' },
                    { label: t('footer.discover.gallery'), href: '/galeria' },
                    { label: t('footer.discover.about'), href: '/about' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors font-light inline-flex items-center gap-2 group">
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
                  {t('footer.contact.title')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-white/70 font-light">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" strokeWidth={1} />
                    <span style={{ whiteSpace: 'pre-line' }}>
                      {t('footer.contact.address')}
                    </span>
                  </li>
                  <li>
                    <a href={`tel:${t('footer.contact.phone')}`} className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Phone className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>{t('footer.contact.phone')}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${t('footer.contact.email')}`} className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Mail className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>{t('footer.contact.email')}</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* NEWSLETTER */}
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  {t('footer.newsletter.title')}
                </h4>
                <p className="text-sm text-white/70 mb-4 font-light">
                  {t('footer.newsletter.description')}
                </p>
                
                <form className="mb-8">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t('footer.newsletter.placeholder')}
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#AB8A62] focus:bg-white/15 transition-all font-light"
                    />
                    <button type="submit" className="px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#8b6914] transition-colors">
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                </form>

                <div className="space-y-3">
                  <h5 className="text-xs tracking-[0.2em] uppercase font-light text-white/60">
                    {t('footer.newsletter.socialMedia')}
                  </h5>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, label: 'Instagram', href: '#' },
                      { icon: Facebook, label: 'Facebook', href: '#' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className="w-10 h-10 border border-white/20 hover:border-[#AB8A62] flex items-center justify-center transition-all duration-300 text-white/60 hover:text-[#AB8A62] hover:bg-white/5 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/50 font-light">
                {t('footer.bottom.copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex gap-8">
                {[
                  { label: t('footer.bottom.privacy'), href: '/privacy' },
                  { label: t('footer.bottom.terms'), href: '/terms' },
                  { label: t('footer.bottom.cookies'), href: '/cookies' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="text-xs text-white/50 hover:text-white/80 transition-colors font-light">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}
