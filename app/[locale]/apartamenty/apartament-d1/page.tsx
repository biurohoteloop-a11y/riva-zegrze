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
  X, Menu, Compass, Waves, Users, Bed, Maximize, Wifi, Coffee, 
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
// DANE STATYCZNE (nie tłumaczone)
// ============================================
const apartmentImages = {
  gallery: [
    '/images/gallery/apartments/d1/IMG_3617.jpg',
    '/images/gallery/apartments/d1/IMG_3623.jpg',
    '/images/gallery/apartments/d1/IMG_3625.jpg',
    '/images/gallery/apartments/d1/IMG_3626.jpg',
    '/images/gallery/apartments/d1/IMG_3627.jpg',
    '/images/gallery/apartments/d1/IMG_3630.jpg',
  ],
  surroundings: [
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0430-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0610-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-0903-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-4158-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-4175-m.jpg',
    '/images/gallery/apartments/c1/T3S-RivaZegrze-RG-3669-m.jpg',
  ]
};

const featureIcons = [MapPin, Droplets, Dumbbell];
const importantInfoIcons = [Clock, Clock, Star, Check, CarFront];

// ============================================
// MAIN COMPONENT
// ============================================
export default function ApartmentD1Page() {
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

// ============================================
// 1. HERO GALLERY
// ============================================
function HeroGallery() {
 const t = useTranslations();
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

  const specs = [
    { icon: Maximize, label: t('apartmentD1.hero.specs.size.label'), value: t('apartmentD1.hero.specs.size.value') },
    { icon: Users, label: t('apartmentD1.hero.specs.guests.label'), value: t('apartmentD1.hero.specs.guests.value') },
    { icon: Bed, label: t('apartmentD1.hero.specs.bedrooms.label'), value: t('apartmentD1.hero.specs.bedrooms.value') },
    { icon: Bath, label: t('apartmentD1.hero.specs.bathrooms.label'), value: t('apartmentD1.hero.specs.bathrooms.value') },
  ];

  return (
    <section ref={heroRef} className="relative pt-20 bg-gradient-to-b from-[#f1f1ed] to-[#f7f6f4]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="flex items-center gap-2 text-xs text-[#8a968f] mb-8">
          <a href="/" className="hover:text-[#4a6b5e] transition-colors">{t('apartmentD1.hero.breadcrumb.home')}</a>
          <span>/</span>
          <a href="/apartamenty" className="hover:text-[#4a6b5e] transition-colors">{t('apartmentD1.hero.breadcrumb.apartments')}</a>
          <span>/</span>
          <span className="text-[#4a6b5e]">{t('apartmentD1.hero.breadcrumb.current')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d4d6ce] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#4a6b5e]" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.2em] text-[#4a6b5e] uppercase">{t('apartmentD1.hero.badge')}</span>
            </div>

            <h1 
              className="hero-title text-5xl lg:text-6xl xl:text-7xl font-light text-[#4a6b5e] mb-4 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('apartmentD1.hero.title')}
            </h1>

            <p className="hero-tagline text-xl text-[#4a6b5e] font-light mb-2 leading-relaxed">
              {t('apartmentD1.hero.tagline')}
            </p>

            <p className="hero-subtitle text-base text-[#8a968f] font-light mb-8 leading-relaxed">
              {t('apartmentD1.hero.subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec, idx) => (
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
                <span className="text-sm tracking-[0.2em] text-[#8a968f] uppercase">{t('apartmentD1.hero.price.from')}</span>
                <span className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t('apartmentD1.hero.price.amount')}
                </span>
                <span className="text-lg text-[#6e7a73]">{t('apartmentD1.hero.price.currency')} / {t('apartmentD1.hero.price.period')}</span>
              </div>
              <p className="text-xs text-[#8a968f] italic">{t('apartmentD1.hero.price.note')}</p>
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
                  {apartmentImages.gallery.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <PhotoView src={img}>
                        <div className="relative h-full cursor-pointer group">
                          <img
                            src={img}
                            alt={`${t('apartmentD1.hero.title')} - ${idx + 1}`}
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
                    <span className="text-[#4a6b5e] font-medium">{activeIndex + 1}</span> / {apartmentImages.gallery.length}
                  </div>

                  <div className="swiper-pagination-custom absolute bottom-6 left-6 z-10"></div>
                </Swiper>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {apartmentImages.gallery.map((img, idx) => (
                    <div 
                      key={idx}
                      className={`h-20 cursor-pointer border-2 transition-all ${
                        activeIndex === idx ? 'border-[#4a6b5e]' : 'border-[#d4d6ce] hover:border-[#4a6b5e]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${t('apartmentD1.hero.thumbnailAlt')} ${idx + 1}`}
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
// 2. APARTMENT DETAILS WITH CALENDAR
// ============================================
function ApartmentDetails() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    const loadHotresScripts = async () => {
      const win = window as any;
      
      if (!win.jQuery) {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        await new Promise((resolve) => {
          jqueryScript.onload = resolve;
        });
      }

      const hotresScript = document.createElement('script');
      hotresScript.src = 'https://panel.hotres.pl/public/api/hotres_v4.js';
      hotresScript.async = true;
      document.body.appendChild(hotresScript);

      hotresScript.onload = () => {
        if (win.createHotres) {
          win.createHotres({
            oid: 5226,
            lang: 'pl',
            tid: '43215',
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

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo('.section-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
          gsap.fromTo('.highlight-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
          gsap.fromTo('.feature-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.features-grid', start: 'top 75%' } });

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initGSAP();
  }, []);

  const highlights = [
    t('apartmentD1.details.highlights.0'),
    t('apartmentD1.details.highlights.1'),
    t('apartmentD1.details.highlights.2'),
    t('apartmentD1.details.highlights.3'),
    t('apartmentD1.details.highlights.4'),
    t('apartmentD1.details.highlights.5'),
  ];

  const features = [0, 1, 2].map((idx) => ({
    icon: featureIcons[idx],
    title: t(`apartmentD1.details.aboutProperty.features.${idx}.title`),
    description: t(`apartmentD1.details.aboutProperty.features.${idx}.description`),
  }));

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <h2 
                className="section-heading text-3xl lg:text-4xl font-light text-[#4a6b5e] mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('apartmentD1.details.aboutTitle')}
              </h2>
              <p className="text-base text-[#6e7a73] leading-relaxed font-light mb-6">
                {t('apartmentD1.details.description')}
              </p>
              <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                {t('apartmentD1.details.fullDescription')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-[#0f0e0f] mb-6">
                {t('apartmentD1.details.highlightsTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item flex items-start gap-3 p-4 bg-[#f7f6f4] border-l-2 border-[#4a6b5e]">
                    <Check className="w-5 h-5 text-[#4a6b5e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-[#6e7a73]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#d4d6ce]">
              <h2 
                className="section-heading text-3xl lg:text-4xl font-light text-[#4a6b5e] mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('apartmentD1.details.aboutProperty.title')}
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                  {t('apartmentD1.details.aboutProperty.paragraph1')}
                </p>
                <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                  {t('apartmentD1.details.aboutProperty.paragraph2')}
                </p>
              </div>

              <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-card group bg-[#f7f6f4] p-6 border border-[#d4d6ce] hover:border-[#4a6b5e] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-[#d4d6ce] flex items-center justify-center mb-4 group-hover:border-[#AB8A62] group-hover:bg-gradient-to-br group-hover:from-[#f4e4c1] group-hover:to-[#AB8A62] transition-all">
                      <feature.icon className="w-6 h-6 text-[#4a6b5e] group-hover:text-[#8b6914] transition-colors" strokeWidth={1} />
                    </div>
                    <h4 className="text-base font-medium text-[#0f0e0f] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#6e7a73] leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

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
                  {t('apartmentD1.details.calendar.title')}
                </h3>
              </div>

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

        #hotresContainer .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          margin-bottom: 16px;
        }

        #hotresContainer .calendar-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 400;
          color: #4a6b5e;
          margin: 0;
        }

        #hotresContainer .calendar-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #d4d6ce;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        #hotresContainer .calendar-nav-btn:hover {
          background: #4a6b5e;
          border-color: #4a6b5e;
          color: white;
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
// 3. IMPORTANT INFO SECTION
// ============================================
function ImportantInfoSection() {
 const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

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

  const importantInfo = [0, 1, 2, 3, 4].map((idx) => ({
    icon: importantInfoIcons[idx],
    label: t(`apartmentD1.importantInfo.items.${idx}.label`),
    value: t(`apartmentD1.importantInfo.items.${idx}.value`),
    note: t(`apartmentD1.importantInfo.items.${idx}.note`),
  }));

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f7f6f4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            {t('apartmentD1.importantInfo.subtitle')}
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('apartmentD1.importantInfo.title')}
          </h2>
        </div>

        {/* GRID 3+2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {importantInfo.slice(0, 3).map((info, idx) => (
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
                    {info.label}
                  </h3>
                  <p className="text-sm text-[#4a6b5e] font-medium mb-1">
                    {info.value}
                  </p>
                  {info.note && (
                    <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                      {info.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ostatnie 2 wycentrowane */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {importantInfo.slice(3).map((info, idx) => (
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
                    {info.label}
                  </h3>
                  <p className="text-sm text-[#4a6b5e] font-medium mb-1">
                    {info.value}
                  </p>
                  {info.note && (
                    <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                      {info.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zakaz imprez */}
        <div className="mt-8 p-6 bg-white border-l-4 border-[#AB8A62]">
          <div className="flex items-start gap-4">
            <Star className="w-6 h-6 text-[#AB8A62] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-base font-medium text-[#0f0e0f] mb-2">
                {t('apartmentD1.importantInfo.noParties.title')}
              </h4>
              <p className="text-sm text-[#6e7a73] leading-relaxed font-light">
                {t('apartmentD1.importantInfo.noParties.description')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================
// 5. SURROUNDINGS GALLERY
// ============================================
function SurroundingsGallery() {
   const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
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
      setSelectedImage((selectedImage + 1) % apartmentImages.surroundings.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 
          ? apartmentImages.surroundings.length - 1 
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
              {t('apartmentD1.surroundings.subtitle')}
            </span>
            <h2 
              className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('apartmentD1.surroundings.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apartmentImages.surroundings.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openModal(idx)}
                className="surroundings-item relative group cursor-pointer bg-white p-2 shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3] overflow-hidden"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt={`${t('apartmentD1.surroundings.imageAlt')} ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <Eye className="w-5 h-5" strokeWidth={1.5} />
                      <span className="text-sm font-light">{t('apartmentD1.surroundings.viewFull')}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-[#4a6b5e] font-medium">
                      {idx + 1} / {apartmentImages.surroundings.length}
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
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('apartmentD1.surroundings.closeGallery')}
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('apartmentD1.surroundings.prevImage')}
          >
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group"
            style={{ zIndex: 50 }}
            aria-label={t('apartmentD1.surroundings.nextImage')}
          >
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div 
            className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-light"
            style={{ zIndex: 50 }}
          >
            {selectedImage + 1} / {apartmentImages.surroundings.length}
          </div>

          <div 
            className="relative max-w-7xl max-h-[90vh] mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedImage}
              src={apartmentImages.surroundings[selectedImage]}
              alt={`${t('apartmentD1.surroundings.imageAlt')} ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              style={{ animation: 'imageScaleIn 0.4s ease-out' }}
            />
          </div>

          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-light max-w-2xl text-center"
            style={{ zIndex: 50 }}
          >
            <MapPin className="w-4 h-4 inline-block mr-2" strokeWidth={1.5} />
            {t('apartmentD1.surroundings.location')}
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
// 6. REVIEWS SECTION
// ============================================
function ReviewsSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

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

  const reviews = [0, 1, 2].map((idx) => ({
    name: t(`apartmentD1.reviews.items.${idx}.name`),
    date: t(`apartmentD1.reviews.items.${idx}.date`),
    rating: 5,
    comment: t(`apartmentD1.reviews.items.${idx}.comment`),
    avatar: t(`apartmentD1.reviews.items.${idx}.avatar`),
  }));

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            {t('apartmentD1.reviews.subtitle')}
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e] mb-4" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('apartmentD1.reviews.title')}
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
              ))}
            </div>
            <span className="text-2xl font-light text-[#0f0e0f]">5.0</span>
            <span className="text-sm text-[#8a968f]">{t('apartmentD1.reviews.basedOn')}</span>
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

// ============================================
// 7. CTA + FOOTER
// ============================================
function CTAWithFooter() {
  const t = useTranslations();
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

  const ctaBadges = [
    t('apartmentD1.cta.badges.0'),
    t('apartmentD1.cta.badges.1'),
    t('apartmentD1.cta.badges.2'),
    t('apartmentD1.cta.badges.3'),
  ];

  const footerLinks = [
    { label: t('apartmentD1.footer.discover.apartments'), href: '/apartamenty' },
    { label: t('apartmentD1.footer.discover.specialOffer'), href: '/offers' },
    { label: t('apartmentD1.footer.discover.activities'), href: '/activities' },
    { label: t('apartmentD1.footer.discover.gallery'), href: '/galeria' },
    { label: t('apartmentD1.footer.discover.about'), href: '/about' },
  ];

  const bottomLinks = [
    { label: t('apartmentD1.footer.bottom.privacy'), href: '/privacy' },
    { label: t('apartmentD1.footer.bottom.terms'), href: '/terms' },
    { label: t('apartmentD1.footer.bottom.cookies'), href: '/cookies' },
  ];

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
        
        <div className="cta-content max-w-[1000px] mx-auto px-6 lg:px-12 text-center py-24 lg:py-32">
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#AB8A62]" strokeWidth={1} />
              <span className="text-xs tracking-[0.25em] uppercase text-white/90 font-light">{t('apartmentD1.cta.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-white drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}
              dangerouslySetInnerHTML={{ __html: t('apartmentD1.cta.title') }}
            />

            <p className="text-base md:text-lg font-light mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('apartmentD1.cta.description') }}
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              
              <button className="flex items-center gap-3 px-10 py-5 bg-white text-[#2a3d35] hover:bg-[#AB8A62] hover:text-white transition-all duration-300 text-sm tracking-[0.15em] uppercase group shadow-2xl font-light">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span>{t('apartmentD1.cta.bookButton')}</span>
              </button>

              <a href="tel:+48510038038" className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm tracking-[0.15em] uppercase group font-light">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
                <span>{t('apartmentD1.cta.callButton')}</span>
              </a>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/70">
              {ctaBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs tracking-wide">
                  <Check className="w-4 h-4 text-[#AB8A62]" strokeWidth={2} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 my-12">
          <motion.div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
        </div>

        <footer className="footer-content py-16 lg:py-20">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
                  <span className="text-2xl font-light tracking-[0.15em] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    RIVA ZEGRZE
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                  {t('apartmentD1.footer.brand.description')}
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-xs text-white/50 font-light">{t('apartmentD1.footer.brand.rating')}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  {t('apartmentD1.footer.discover.title')}
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors font-light inline-flex items-center gap-2 group">
                        <span className="w-0 group-hover:w-4 h-px bg-[#AB8A62] transition-all duration-300"></span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  {t('apartmentD1.footer.contact.title')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-white/70 font-light">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" strokeWidth={1} />
                    <span dangerouslySetInnerHTML={{ __html: t('apartmentD1.footer.contact.address').replace(/\n/g, '<br/>') }} />
                  </li>
                  <li>
                    <a href={`tel:${t('apartmentD1.footer.contact.phone')}`} className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Phone className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>{t('apartmentD1.footer.contact.phone')}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${t('apartmentD1.footer.contact.email')}`} className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Mail className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>{t('apartmentD1.footer.contact.email')}</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  {t('apartmentD1.footer.newsletter.title')}
                </h4>
                <p className="text-sm text-white/70 mb-4 font-light">
                  {t('apartmentD1.footer.newsletter.description')}
                </p>
                
                <form className="mb-8">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t('apartmentD1.footer.newsletter.placeholder')}
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#AB8A62] focus:bg-white/15 transition-all font-light"
                    />
                    <button type="submit" className="px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#8b6914] transition-colors">
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                </form>

                <div className="space-y-3">
                  <h5 className="text-xs tracking-[0.2em] uppercase font-light text-white/60">
                    {t('apartmentD1.footer.newsletter.socialMedia')}
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

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/50 font-light">
                {t('apartmentD1.footer.bottom.copyright').replace('{year}', new Date().getFullYear().toString())}
              </p>
              <div className="flex gap-8">
                {bottomLinks.map((item) => (
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
