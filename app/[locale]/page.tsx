'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Waves, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Calendar, Star, Compass } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Navigation from '../components/layout/Navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';



// Dynamiczny import jarallax - tylko po stronie klienta
let jarallax: any = null;
if (typeof window !== 'undefined') {
  import('jarallax').then((module) => {
    jarallax = module.jarallax;
  });
}


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Dodaj to na początku pliku page.tsx, po interfejsach
interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  color: string;
}

const cardColors = [
  "linear-gradient(135deg, #8a968f 0%, #6e7a73 100%)",
  "linear-gradient(135deg, #b6b9af 0%, #8a968f 100%)",
  "linear-gradient(135deg, #c8cabe 0%, #a3a89d 100%)",
  "linear-gradient(135deg, #d4d6ce 0%, #b6b9af 100%)",
  "linear-gradient(135deg, #8a968f 0%, #71847b 100%)",
  "linear-gradient(135deg, #a3a89d 0%, #8a968f 100%)",
  "linear-gradient(135deg, #b6b9af 0%, #9ca193 100%)",
  "linear-gradient(135deg, #c8cabe 0%, #b6b9af 100%)",
  "linear-gradient(135deg, #8a968f 0%, #6e7a73 100%)",
  "linear-gradient(135deg, #9ca193 0%, #8a968f 100%)",
];

const testimonialKeys = [
  "item1", "item2", "item3", "item4", "item5",
  "item6", "item7", "item8", "item9", "item10",
] as const;


export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <IntroSection />
        <RoomsShowcase />
        <AdditionalHero />
        <ExperienceParallax />
        <FeaturesSection />
        <InstagramGallery />
        <WellnessGrid />
        <TestimonialsSection />
        <LocationSection />  {/* <- NOWA SEKCJA */}
        <GallerySection />  
        <MinimalFooter />
      </main>
    </>
  );
}
// ============================================
// MEGA MENU - FINAL VERSION
// ============================================
function HeroSection() {
  const t = useTranslations('hero');

  const slides = [
    '/images/hero/T3S-RivaZegrze-0760-m.jpg',
    '/images/hero/T3S-RivaZegrze-0620-m.jpg',
    '/images/hero/T3S-RivaZegrze-3689-m.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const [hotresReady, setHotresReady] = useState(false);

  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const bookingRef = useRef(null);

  // ============================================
  // HOTRES — PROSTY I DZIAŁA (jak na WordPress)
  // ============================================
  useEffect(() => {
    // Sprawdź czy skrypt już nie jest załadowany
    const existing = document.querySelector('script[src*="hotres_popup"]');
    if (existing) return;

    // Załaduj RAZ i nie ruszaj
    const script = document.createElement('script');
    script.src = 'https://panel.hotres.pl/public/api/hotres_popup.js';
    script.async = true;
    document.body.appendChild(script);

    // Czekaj aż HotRes wyrenderuje content, potem pokaż
    let checkCount = 0;
    const interval = setInterval(() => {
      checkCount++;
      const bars = Array.from(document.querySelectorAll('.hotresSearchBar'));
      const hasContent = bars.some(
        (bar) => bar.children.length > 0
      );

      if (hasContent) {
        setHotresReady(true);
        clearInterval(interval);
      }

      // Stop po 30s
      if (checkCount > 150) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // ============================================
  // GSAP ENTRY ANIMATION
  // ============================================
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

          tl.fromTo('.hero-overlay', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1.5 });
          tl.fromTo(labelRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=1.2');
          tl.fromTo(titleRef.current, { y: 100, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1.2 }, '-=0.8');
          tl.fromTo(descRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.6');
          tl.fromTo(bookingRef.current, { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, '-=0.5');
        } catch (error) {
          console.error('GSAP animation error:', error);
        }
      }
    };
    initAnimations();
  }, []);

  // ============================================
  // SLIDER
  // ============================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">

        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={src}
              alt={`Riva Zegrze ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                animation: index === current ? 'kenBurns 15s ease-out forwards' : 'none',
              }}
            />
          </div>
        ))}

        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">

          <span
            ref={labelRef}
            className="inline-block text-xs tracking-[0.4em] uppercase font-light text-white/90 mb-6"
          >
            {t('label')}
          </span>

          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-8 tracking-[0.1em] leading-none text-white drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('title')}
          </h1>

          <p
            ref={descRef}
            className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-16 text-white/85 drop-shadow-lg"
          >
            {t('description')}
          </p>

          {/* HOTRES DESKTOP */}
          <div
            ref={bookingRef}
            className="hidden lg:block max-w-5xl mx-auto hotres-wrapper"
            style={{
              opacity: hotresReady ? 1 : 0,
              transform: hotresReady ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <div
              className="hotresSearchBar showHotres"
              data-button={t('checkDates')}
              data-oid="5226"
              data-lang="pl"
              data-action="bookingbar"
              suppressHydrationWarning
            />
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* HOTRES MOBILE */}
      <section className="lg:hidden bg-[#f7f6f4] py-6 px-4">
        <div
          className="max-w-sm mx-auto"
          style={{
            opacity: hotresReady ? 1 : 0,
            transform: hotresReady ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div
            className="hotresSearchBar showHotres"
            data-button={t('checkDates')}
            data-oid="5226"
            data-lang="pl"
            data-action="bookingbar"
            suppressHydrationWarning
          />
        </div>
      </section>

      <style jsx global>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .hotresSearchBar {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          cursor: pointer;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          border-radius: 14px;
          height: 68px;
          overflow: hidden;
          min-width: 420px;
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .hotresSearchBar::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 1px;
          background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.15) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .hotresSearchBar:hover {
          background: rgba(255, 255, 255, 0.18);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.28);
        }

        .hotresSearchBar > div {
          flex: 1;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          color: #ffffff;
          transition: background 0.3s ease;
          height: 100%;
          position: relative;
        }

        .hotresSearchBar > div:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hotresSearchBar > div:not(:last-child):hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .hotresSearchBar > div:last-child {
          flex: 0 0 auto;
          padding: 0;
          border-right: none;
        }

        .hotresSearchBar .arrival {
          position: relative;
        }

        .hotresSearchBar .arrival::after,
        .hotresSearchBar .arrival::before {
          content: '';
          position: absolute;
          right: -11px;
          width: 6px;
          height: 6px;
          border-right: 1.5px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.5);
        }

        .hotresSearchBar .arrival::after {
          top: calc(50% - 7px);
          transform: rotate(-45deg);
        }

        .hotresSearchBar .arrival::before {
          top: calc(50% + 1px);
          transform: rotate(135deg);
        }

        .hotresSearchBar .day {
          font-size: 26px;
          font-weight: 300;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .hotresSearchBar .month {
          font-size: 10px;
          line-height: 1.2;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
        }

        .hotresSearchBar .month small {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.6);
          display: block;
          letter-spacing: 0.08em;
          margin-top: 1px;
        }

        .hotresSearchBar button {
          height: 68px;
          width: 160px;
          border-radius: 0 13px 13px 0;
          text-transform: uppercase;
          font-size: 9px;
          letter-spacing: 0.12em;
          font-weight: 500;
          background: linear-gradient(135deg,
            rgba(171, 138, 98, 0.92) 0%,
            rgba(150, 116, 71, 0.92) 100%);
          color: #ffffff;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .hotresSearchBar button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent);
          transition: left 0.6s ease;
        }

        .hotresSearchBar button:hover {
          background: linear-gradient(135deg,
            rgba(150, 116, 71, 0.98) 0%,
            rgba(171, 138, 98, 0.98) 100%);
          box-shadow:
            0 3px 12px rgba(171, 138, 98, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: translateX(1px);
        }

        .hotresSearchBar button:hover::before {
          left: 100%;
        }

        .hotresSearchBar button:active {
          transform: translateX(0) scale(0.98);
        }

        @media (max-width: 1024px) {
          .hotresSearchBar {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(30px);
            border-radius: 18px;
            height: auto;
            flex-direction: column;
            padding: 24px;
            gap: 16px;
            max-width: 100%;
            border: 1px solid rgba(212, 214, 206, 0.25);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
          }

          .hotresSearchBar::before {
            display: none;
          }

          .hotresSearchBar > div {
            width: 100%;
            flex: none;
            padding: 18px;
            border-right: none;
            border-bottom: 1px solid rgba(212, 214, 206, 0.2);
            color: #0f0e0f;
          }

          .hotresSearchBar > div:not(:last-child):hover {
            background: rgba(212, 214, 206, 0.12);
          }

          .hotresSearchBar > div:last-child {
            border-bottom: none;
            padding: 0;
            width: 100%;
          }

          .hotresSearchBar .arrival::after,
          .hotresSearchBar .arrival::before {
            display: none;
          }

          .hotresSearchBar .day {
            font-size: 32px;
            color: #0f0e0f;
            text-shadow: none;
          }

          .hotresSearchBar .month {
            font-size: 11px;
            color: #6e7a73;
          }

          .hotresSearchBar .month small {
            font-size: 10px;
            color: #AB8A62;
          }

          .hotresSearchBar button {
            width: 100%;
            height: 52px;
            border-radius: 12px;
            font-size: 10px;
            letter-spacing: 0.15em;
          }
        }
      `}</style>
    </>
  );
}






function IntroSection() {
  const t = useTranslations('intro');

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      });
    };
    initAOS();
  }, []);

  return (
    <section className="py-32 lg:py-40 bg-[#f1f1ed]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <span className="text-xs tracking-[0.4em] uppercase mb-6 block text-[#AB8A62]">
              {t('label')}
            </span>

            <h2
              className="text-4xl md:text-5xl xl:text-[3.5rem] font-light leading-[1.15] mb-8"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#4A6B5E'
              }}
            >
              {t('title')} <br /> {t('titleBreak')}
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-px bg-[#AB8A62] mb-0" />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-8 lg:pt-12" data-aos="fade-left" data-aos-delay="200">
            <p className="text-lg md:text-xl leading-relaxed font-light text-[#6e7a73]">
              {t('desc1')}
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light text-[#6e7a73]">
              {t('desc2')}
            </p>
          </div>
        </div>

        {/* ICONS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32" data-aos="fade-up" data-aos-delay="400">
          
          {/* Icon 1 - Lokalizacja */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-[#AB8A62] mb-6">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#AB8A62] mb-3 font-light">
              {t('location')}
            </h4>
            <p className="text-sm text-[#6e7a73] leading-relaxed max-w-xs mx-auto font-light">
              {t('locationDesc')}
            </p>
          </div>

          {/* Icon 2 - Rekreacja */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-[#AB8A62] mb-6">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#AB8A62] mb-3 font-light">
              {t('recreation')}
            </h4>
            <p className="text-sm text-[#6e7a73] leading-relaxed max-w-xs mx-auto font-light">
              {t('recreationDesc')}
            </p>
          </div>

          {/* Icon 3 - Standard */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-[#AB8A62] mb-6">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-[#AB8A62] mb-3 font-light">
              {t('standard')}
            </h4>
            <p className="text-sm text-[#6e7a73] leading-relaxed max-w-xs mx-auto font-light">
              {t('standardDesc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}



// ============================================
// ============================================
// Rooms Showcase - Z LOKALNYMI ZDJĘCIAMI
// ============================================
function RoomsShowcase() {
  const t = useTranslations('rooms');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apartmentKeys = ['c1', 'c4', 'c7', 'd1', 'd4', 'd7', 'b10'] as const;

  // Mapowanie klucza na URL apartamentu
  const apartmentUrls: Record<string, string> = {
    c1: `/${locale}/apartamenty/apartament-c1`,
    c4: `/${locale}/apartamenty/apartament-c4`,
    c7: `/${locale}/apartamenty/apartament-c7`,
    d1: `/${locale}/apartamenty/apartament-d1`,
    d4: `/${locale}/apartamenty/apartament-d4`,
    d7: `/${locale}/apartamenty/apartament-d7`,
    b10: `/${locale}/apartamenty/apartament-deluxe-b10`,
  };

  const imageMap: Record<string, string> = {
    c1: '/images/rooms/t3s-rivazegrze-3107-m.jpg',
    c4: '/images/rooms/t3s-rivazegrze-3500-m.jpg',
    c7: '/images/rooms/img_3650.jpg',
    d1: '/images/rooms/img_3622.jpg',
    d4: '/images/rooms/img_3620.jpg',
    d7: '/images/rooms/d4.jpg',
    b10: '/images/rooms/img_4647.jpg',
  };

  const apartments = apartmentKeys.map((key) => ({
    key,
    image: imageMap[key],
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    size: t(`${key}.size`),
    guests: t(`${key}.guests`),
    bedrooms: t(`${key}.bedrooms`),
    bathrooms: t(`${key}.bathrooms`),
    price: t(`${key}.price`),
  }));

  useEffect(() => {
    let scrollTriggerInstance: any = null;

    const initHorizontalScroll = () => {
      if (typeof window === 'undefined') return;

      const section = sectionRef.current;
      const horizontal = horizontalRef.current;
      
      if (!section || !horizontal) return;

      // Czekamy aż DOM się ustabilizuje
      const timer = setTimeout(() => {
        try {
          const cards = horizontal.querySelectorAll('.room-card');
          
          const totalWidth = Array.from(cards).reduce<number>((acc, card) => {
            const element = card as HTMLElement;
            return acc + element.offsetWidth + 24;
          }, 0);
          
          const scrollDistance = totalWidth - window.innerWidth;
          const isMobile = window.innerWidth < 1024;
          const scrollMultiplier = isMobile ? 0.8 : 1.2;

          // Kill previous instances
          ScrollTrigger.getAll().forEach((t: any) => {
            if (t.trigger === section) t.kill();
          });

          scrollTriggerInstance = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollDistance * scrollMultiplier}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(horizontal, {
                x: -scrollDistance * progress,
                duration: 0,
                ease: 'none'
              });

              const newIndex = Math.min(
                Math.floor(progress * apartments.length),
                apartments.length - 1
              );
              setCurrentIndex(newIndex);
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
          });

          // Double refresh for stability
          ScrollTrigger.refresh();
          setTimeout(() => ScrollTrigger.refresh(), 500);

        } catch (error) {
          console.error('ScrollTrigger error:', error);
        }
      }, 500);

      return () => clearTimeout(timer);
    };

    initHorizontalScroll();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [apartments.length]);

  return (
    <section ref={sectionRef} className="relative bg-[#f7f6f4] overflow-hidden">
      
      {/* HEADER - Fixed/Pinned */}
      <div className="text-center py-16 px-6">
        <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] mb-4 block">
          {t('label')}
        </span>
        <h2
          className="text-4xl md:text-6xl font-light"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            color: '#4A6B5E'
          }}
        >
          {t('title')}
        </h2>
        
        {/* Scroll Hint */}
        <div className="flex items-center justify-center gap-2 text-[#AB8A62] text-xs tracking-[0.2em] uppercase mt-8 animate-bounce">
          <span>{t('scrollHint')}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="relative overflow-visible py-12">
        <div ref={horizontalRef} className="flex gap-6 pl-6 lg:pl-12 pr-6 lg:pr-12 will-change-transform">
          
          {apartments.map((apt, idx) => (
            <div 
              key={apt.key} 
              className={`room-card shrink-0 w-[85vw] lg:w-[70vw] ${
                idx === apartments.length - 1 ? 'mr-0' : ''
              }`}
            >
              
              {/* MOBILE LAYOUT */}
              <div className="lg:hidden bg-white shadow-2xl overflow-hidden">
                <div className="relative h-[280px] overflow-hidden group">
                  <img
                    src={apt.image}
                    alt={apt.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="bg-[#6e7a73] text-white p-5">
                  <h3
                    className="text-2xl font-light mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {apt.title}
                  </h3>

                  <p className="text-[#e8e9e4] text-sm leading-relaxed mb-4">
                    {apt.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <InfoItem icon={<SizeIcon />} label={t('size')} value={apt.size} />
                    <InfoItem icon={<GuestsIcon />} label={t('guests')} value={apt.guests} />
                    <InfoItem icon={<BedroomsIcon />} label={t('bedrooms')} value={apt.bedrooms} />
                    <InfoItem icon={<BathroomsIcon />} label={t('bathrooms')} value={apt.bathrooms} />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-base text-white font-light">{apt.price}</span>
                    <Link 
                      href={apartmentUrls[apt.key]}
                      className="bg-transparent border-2 border-white text-white px-5 py-2 text-xs tracking-wider uppercase hover:bg-white hover:text-[#6e7a73] transition-all duration-300 inline-block text-center"
                    >
                      {t('book')}
                    </Link>
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT */}
              <div className="hidden lg:grid lg:grid-cols-2 bg-white shadow-2xl overflow-hidden h-[550px] lg:h-[600px]">
                
                {/* Image Side - SZTYWNA WYSOKOŚĆ */}
                <div className="relative h-full overflow-hidden group">
                  <img
                    src={apt.image}
                    alt={apt.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Info Side - FLEX + SPACE-BETWEEN */}
                <div className="bg-[#6e7a73] text-white flex flex-col justify-between p-6 lg:p-8 xl:p-10 h-full overflow-y-auto">
                  
                  {/* GÓRNA CZĘŚĆ (Title + Description + Icons) */}
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl xl:text-5xl font-light mb-3 lg:mb-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {apt.title}
                    </h3>

                    <p 
                      className="text-[#e8e9e4] text-sm lg:text-base leading-relaxed mb-5 lg:mb-6"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {apt.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <InfoItem icon={<SizeIcon />} label={t('size')} value={apt.size} />
                      <InfoItem icon={<GuestsIcon />} label={t('guests')} value={apt.guests} />
                      <InfoItem icon={<BedroomsIcon />} label={t('bedrooms')} value={apt.bedrooms} />
                      <InfoItem icon={<BathroomsIcon />} label={t('bathrooms')} value={apt.bathrooms} />
                    </div>
                  </div>

                  {/* DOLNA CZĘŚĆ (Price + Button) - ZAWSZE NA DOLE */}
                  <div className="flex items-center justify-between pt-5 lg:pt-6 border-t border-white/20 mt-5 lg:mt-6">
                    <span className="text-lg lg:text-xl xl:text-2xl text-white font-light">{apt.price}</span>
                    <Link
                      href={apartmentUrls[apt.key]}
                      className="bg-transparent border-2 border-white text-white px-5 py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3 text-xs lg:text-sm tracking-wider uppercase hover:bg-white hover:text-[#6e7a73] transition-all duration-300 whitespace-nowrap inline-block text-center"
                    >
                      {t('book')}
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 pb-12">
        {apartments.map((apt, idx) => (
          <div
            key={apt.key}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-12 bg-[#AB8A62]' 
                : 'w-8 bg-[#d4d6ce]'
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}

// Reusable Info Item Component
function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-white flex-shrink-0">{icon}</div>
      <div>
        <div className="text-xs text-white/60 uppercase tracking-wider">{label}</div>
        <div className="text-sm mt-1">{value}</div>
      </div>
    </div>
  );
}

// SVG Icons
function SizeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function BedroomsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function BathroomsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}


// Additional Hero Section - WITH TRANSLATIONS
function AdditionalHero() {
  const t = useTranslations();

  // Initialize AOS
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      });
    };
    initAOS();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">

        {/* MOBILE VERSION */}
        <div className="lg:hidden space-y-12">
          <div className="text-center" data-aos="fade-up">
            <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] mb-4 block">
              {t('additional.label')}
            </span>
            <h2
              className="text-3xl md:text-4xl font-light leading-tight mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#4A6B5E'
              }}
            >
              {t('additional.title')}<br />{t('additional.titleBreak')}
            </h2>
          </div>

          <div className="relative h-[350px]" data-aos="fade-right" data-aos-delay="100">
            <img
              src="/images/additional-hero/apart.jpeg"
              alt={t('additional.imgApartAlt')}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

          <div className="relative h-[350px]" data-aos="fade-left" data-aos-delay="200">
            <img
              src="/images/additional-hero/T3S-RivaZegrze-4228-m.jpg"
              alt={t('additional.imgRivaAlt')}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

          <div className="bg-[#F5F3EF] p-8" data-aos="fade-up" data-aos-delay="300">
            <p className="text-[#8a968f] leading-relaxed mb-8 text-center">
              {t('additional.descMobile')}
            </p>

            <div className="space-y-6">
              <div className="text-center py-6 border-t border-gray-300">
                <div 
                  className="text-4xl font-light text-[#6E7A73] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('additional.stat1Value')}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                  {t('additional.stat1Label')}
                </div>
              </div>

              <div className="text-center py-6 border-t border-gray-300">
                <div 
                  className="text-4xl font-light text-[#6E7A73] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('additional.stat2Value')}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                  {t('additional.stat2Label')}
                </div>
              </div>

              <div className="text-center py-6 border-t border-gray-300">
                <div 
                  className="text-4xl font-light text-[#6E7A73] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('additional.stat3Value')}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                  {t('additional.stat3Label')}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-28 h-28 border-2 border-[#AB8A62] rounded-full mx-auto" data-aos="zoom-in" data-aos-delay="400">
            <div className="text-center">
              <div className="text-xs tracking-[0.2em] uppercase text-[#AB8A62]">
                {t('additional.since')}
              </div>
              <div className="text-xl font-light text-[#6E7A73]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('additional.sinceYear')}
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION - Premium Overlapping Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN - Text & Badge & Large Image */}
          <div className="col-span-5 relative">
            <div className="mb-16" data-aos="fade-right">
              <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] mb-6 block">
                {t('additional.label')}
              </span>
              
              <h2
                className="text-5xl xl:text-6xl font-light leading-tight mb-12"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#4A6B5E'
                }}
              >
                {t('additional.title')}<br />{t('additional.titleBreak')}
              </h2>

              {/* Circular Badge */}
              <div className="inline-flex items-center justify-center w-36 h-36 border-2 border-[#AB8A62] rounded-full">
                <div className="text-center">
                  <div className="text-xs tracking-[0.2em] uppercase text-[#AB8A62] mb-1">
                    {t('additional.since')}
                  </div>
                  <div className="text-3xl font-light text-[#6E7A73]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {t('additional.sinceYear')}
                  </div>
                </div>
              </div>
            </div>

            {/* Large Bottom Image */}
            <div className="relative h-[450px] shadow-2xl mt-8 overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
              <img
                src="/images/additional-hero/apart.jpeg"
                alt={t('additional.imgApartAlt')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Overlapping Images & Stats */}
          <div className="col-span-7 relative">
            
            {/* Top Right Image - Overlaps slightly */}
            <div className="relative h-[400px] ml-auto w-[85%] shadow-2xl z-10 overflow-hidden group" data-aos="fade-left" data-aos-delay="100">
              <img
                src="/images/additional-hero/T3S-RivaZegrze-4228-m.jpg"
                alt={t('additional.imgRivaAlt')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Stats Panel - Overlaps bottom of image */}
            <div className="relative bg-[#F5F3EF] p-12 xl:p-16 -mt-24 mr-16 shadow-xl z-20" data-aos="fade-up" data-aos-delay="300">
              <p className="text-[#8a968f] leading-relaxed mb-12 text-lg">
                {t('additional.descDesktop')}
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-[#AB8A62] pl-8" data-aos="fade-right" data-aos-delay="400">
                  <div 
                    className="text-6xl font-light text-[#6E7A73] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t('additional.stat1Value')}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                    {t('additional.stat1Label')}
                  </div>
                </div>

                <div className="border-l-2 border-[#AB8A62] pl-8" data-aos="fade-right" data-aos-delay="500">
                  <div 
                    className="text-6xl font-light text-[#6E7A73] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t('additional.stat2Value')}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                    {t('additional.stat2Label')}
                  </div>
                </div>

                <div className="border-l-2 border-[#AB8A62] pl-8" data-aos="fade-right" data-aos-delay="600">
                  <div 
                    className="text-6xl font-light text-[#6E7A73] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t('additional.stat3Value')}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#8a968f]">
                    {t('additional.stat3Label')}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



// ExperienceParallax - WITH TRANSLATIONS
function ExperienceParallax() {
  const t = useTranslations();
  const sectionRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initParallax = async () => {
      if (typeof window === 'undefined' || !sectionRef.current || !isMounted) return;

      try {
        const { jarallax } = await import('jarallax');
        
        if (sectionRef.current && isMounted) {
          jarallax(sectionRef.current, {
            speed: 0.6,
            imgSrc: '/images/experience/T3S-RivaZegrze-RG-3669-m.jpg',
            imgPosition: '50% 50%',
          });
        }
      } catch (error) {
        console.error('Jarallax error:', error);
      }
    };

    const timer = setTimeout(() => {
      initParallax();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      
      if (sectionRef.current && typeof window !== 'undefined') {
        try {
          const { jarallax } = require('jarallax');
          jarallax(sectionRef.current, 'destroy');
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="jarallax relative h-[70vh] lg:h-[85vh] w-full flex items-center justify-center overflow-hidden"
      data-jarallax
      data-speed="0.6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0f]/40 via-transparent to-[#0f0e0f]/60 z-10" />
      <div className="absolute inset-0 bg-[#0f0e0f]/10 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center text-[#e8e9e4]">
        <div className="max-w-4xl mx-auto">
          <span className="block text-[10px] md:text-xs tracking-[0.6em] uppercase mb-8 font-bold text-[#e8e9e4]/80">
            {t('experience.label')}
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-10 tracking-tight">
            {t('experience.title')} <br /> 
            <span className="italic font-normal">{t('experience.titleItalic')}</span>
          </h2>

          <p className="max-w-xl mx-auto text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12 text-[#e8e9e4]/90">
            {t('experience.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#booking"
              className="w-full sm:w-auto px-10 py-5 bg-[#8a968f] text-[#e8e9e4] text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#7d8a83] hover:scale-105 shadow-xl"
            >
              {t('experience.bookDirect')}
            </a>
            
            <a 
              href="#packages"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-[#b6b9af]/30 text-[#e8e9e4] text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#e8e9e4]/10"
            >
              {t('experience.viewPackages')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Premium Features Section - WITH TRANSLATIONS
function FeaturesSection() {
  const t = useTranslations();
  const [activeHover, setActiveHover] = useState<string>('view');

  // Initialize AOS
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
    };
    initAOS();
  }, []);

  const featureIds = ['view', 'pool', 'gym', 'apartments'] as const;

  const features = featureIds.map((id) => ({
    id,
    label: t(`features.${id}.label`),
    title: t(`features.${id}.title`),
    description: t(`features.${id}.description`),
    image: {
      view: '/images/features/widok.jpeg',
      pool: '/images/features/T3S-RivaZegrze-4404-m.jpg',
      gym: '/images/features/2.jpg',
      apartments: '/images/features/IMG_2750.jpg',
    }[id],
  }));

  const activeFeature = features.find(f => f.id === activeHover);

  return (
    <section className="relative bg-[#f1f1ed] py-32 lg:py-40">
      {/* Simple Vertical Line Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#d4d6ce]"></div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-20 px-12 lg:px-24 items-start">
        
        {/* LEFT SIDE - Content */}
        <div>
          {/* Header */}
          <div className="mb-20" data-aos="fade-up">
            <span className="text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-6 block font-light">
              {t('features.label')}
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-[#4A6B5E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('features.title')}
            </h2>
            <p className="text-[#8a968f] text-base max-w-xl mt-4 leading-relaxed">
              {t('features.hoverHint')}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-0" data-aos="fade-up" data-aos-delay="100">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveHover(feature.id)}
                className={`group relative py-10 border-b border-[#d4d6ce] transition-all duration-500 cursor-pointer ${
                  activeHover === feature.id ? 'bg-white/40 -mx-8 px-8' : ''
                }`}
              >
                <div className="flex items-start gap-8">
                  <span 
                    className={`text-5xl lg:text-6xl font-light transition-all duration-500 flex-shrink-0 ${
                      activeHover === feature.id ? 'text-[#AB8A62]' : 'text-[#d4d6ce]'
                    }`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    0{index + 1}
                  </span>

                  <div className="flex-1 pt-2">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#8a968f] font-light block mb-3">
                      {feature.label}
                    </span>

                    <h3 
                      className={`text-3xl lg:text-4xl font-light mb-2 transition-colors duration-300 ${
                        activeHover === feature.id ? 'text-[#4A6B5E]' : 'text-[#6E7A73]'
                      }`}
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {feature.title}
                    </h3>

                    <p className={`text-[#8a968f] text-base leading-relaxed transition-all duration-300 ${
                      activeHover === feature.id ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
            <a
              href="/apartamenty"
              className="inline-block px-10 py-4 border-2 border-[#8a968f] text-[#6e7a73] text-xs tracking-[0.2em] uppercase font-light hover:bg-[#6E7A73] hover:text-white hover:border-[#6E7A73] transition-all duration-500"
            >
              {t('features.viewApartments')}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Static Image */}
        <div className="sticky top-32" data-aos="fade-left" data-aos-delay="200">
          <div className="relative">
            <div className="relative bg-white shadow-2xl p-4">
              <div className="relative w-full h-[600px] overflow-hidden">
                {features.map((feature) => (
                  <img
                    key={feature.id}
                    src={feature.image}
                    alt={feature.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      activeHover === feature.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-[#AB8A62]" />
              <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-[#AB8A62]" />
              <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-[#AB8A62]" />
              <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-[#AB8A62]" />
            </div>

            {activeFeature && (
              <div className="absolute bottom-8 left-8 bg-white/95 px-6 py-3 backdrop-blur-sm shadow-lg transition-all duration-500">
                <span 
                  className="text-[#4A6B5E] text-sm tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {activeFeature.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-6">
        <div className="mb-12" data-aos="fade-up">
          <span className="text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-4 block font-light">
            {t('features.label')}
          </span>
          <h2
            className="text-4xl font-light mb-4 text-[#4A6B5E]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('features.title')}
          </h2>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="border-b border-[#d4d6ce] pb-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-6 mb-4">
                <span 
                  className="text-4xl font-light text-[#d4d6ce] flex-shrink-0"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  0{index + 1}
                </span>

                <div className="flex-1">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#8a968f] font-light block mb-2">
                    {feature.label}
                  </span>

                  <h3 
                    className="text-2xl font-light mb-2 text-[#6E7A73]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-[#8a968f] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="relative w-full h-48 mt-4">
                <div className="relative bg-white shadow-lg p-2 h-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-[#AB8A62]" />
                  <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-[#AB8A62]" />
                  <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-[#AB8A62]" />
                  <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-[#AB8A62]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Mobile */}
        <div className="mt-12 text-center">
          <a
            href="/apartamenty"
            className="inline-block px-8 py-3 border-2 border-[#8a968f] text-[#6e7a73] text-xs tracking-[0.2em] uppercase font-light hover:bg-[#6E7A73] hover:text-white hover:border-[#6E7A73] transition-all duration-500"
          >
            {t('features.viewApartments')}
          </a>
        </div>
      </div>
    </section>
  );
}


function InstagramGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('gallery');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: '/images/instagram/T3S-RivaZegrze-0940-m.jpg',
      span: 'lg:col-span-2 lg:row-span-2',
      aspect: 'aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[900px]',
      title: t('items.item1.title')
    },
    {
      id: 2,
      type: 'text',
      content: t('items.item2.content'),
      span: 'lg:col-span-1 lg:row-span-1',
      bg: 'bg-[#AB8A62]/5',
      title: t('items.item2.title')
    },
    {
      id: 3,
      type: 'video',
      url: '/videos/rower-compressed.mp4',
      span: 'lg:col-span-1 lg:row-span-2',
      aspect: 'aspect-[9/16] lg:h-[900px]',
      title: t('items.item3.title')
    },
    {
      id: 4,
      type: 'image',
      url: '/images/instagram/kajaki.jpg',
      span: 'lg:col-span-1 lg:row-span-1',
      aspect: 'aspect-square lg:h-[430px]',
      title: t('items.item4.title')
    },
    {
      id: 5,
      type: 'text',
      content: t('items.item5.content'),
      span: 'lg:col-span-1 lg:row-span-1',
      bg: 'bg-[#2C2C2C] text-white',
      title: t('items.item5.title')
    },
    {
      id: 6,
      type: 'video',
      url: '/videos/kajak-compressed.mp4',
      span: 'lg:col-span-3 lg:row-span-1',
      aspect: 'aspect-[21/9] lg:h-[430px]',
      title: t('items.item6.title')
    }
  ];

  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const items = sectionRef.current?.querySelectorAll('.gallery-item');
          
          if (items) {
            gsap.fromTo(
              items,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1.4,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top 85%',
                }
              }
            );
          }
        } catch (error) {
          console.error('GSAP Initialization Error:', error);
        }
      }
    };

    initAnimations();
  }, []);

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
      
      video.load();
    });
    
    return () => {
      videos.forEach(video => {
        video.removeEventListener('ended', () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FDFBF9] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="w-full px-4 sm:px-12 lg:px-20">
        
        {/* Branding & Nature-Focused Heading */}
        <div className="mb-20 sm:mb-28 text-center lg:text-left gallery-item max-w-[2000px] mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.7em] text-[#AB8A62] font-bold mb-6 block">
            {t('label')}
          </span>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-serif leading-[1.0] tracking-tight" style={{ color: '#4A6B5E' }}>
            {t('title')} <span className="italic font-normal">{t('titleItalic')}</span>
          </h2>
        </div>

        {/* FULL WIDTH Nature-Focused Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-12 w-full max-w-[2400px] mx-auto items-stretch">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item relative group overflow-hidden transition-all duration-1000 ease-in-out ${item.span}`}
            >
              {item.type === 'image' && (
                <div className={`relative w-full h-full ${item.aspect} overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] bg-gray-100`}>
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/[0.02]" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute bottom-0 left-0 p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-white text-[10px] uppercase tracking-[0.4em] font-semibold">{item.title}</span>
                  </div>
                </div>
              )}

              {item.type === 'video' && (
                <div className={`relative w-full h-full ${item.aspect} overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.03)] bg-gray-100`}>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute top-10 right-10">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-white text-[10px] uppercase tracking-[0.4em] font-semibold">{item.title}</span>
                  </div>
                </div>
              )}

              {item.type === 'text' && (
                <div className={`flex flex-col justify-center p-12 sm:p-20 h-full min-h-[400px] ${item.bg} transition-all duration-1000 border border-black/[0.01] hover:border-[#AB8A62]/20`}>
                  <span className="text-[9px] uppercase tracking-[0.5em] text-[#AB8A62] mb-10 block font-bold">
                    {item.title}
                  </span>
                  <p className="text-2xl sm:text-3xl font-serif italic leading-[1.5] text-current/90 tracking-tight">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <div className="w-12 h-[1px] bg-[#AB8A62]/40 mt-12" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Exclusive Branding CTA */}
        <div className="mt-32 sm:mt-48 border-t border-black/[0.03] pt-20 sm:pt-32 text-center gallery-item max-w-7xl mx-auto group">
          <p className="text-[#AB8A62] group-hover:text-gray-400 text-[10px] tracking-[0.6em] uppercase mb-12 font-bold transition-colors duration-700">
            {t('cta.label')}
          </p>
          <a 
            href="#instagram" 
            className="inline-flex items-center space-x-8 text-3xl sm:text-6xl font-serif text-gray-400 hover:text-[#AB8A62] transition-colors duration-1000 relative"
          >
            <span className="relative pb-4">
              {t('cta.handle')}
              <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#AB8A62] transition-all duration-1000 group-hover:w-full" />
            </span>
            <svg 
              className="w-12 h-12 sm:w-20 sm:h-20 transform transition-transform duration-1000 group-hover:rotate-45" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.4"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


// ============================================

function WellnessGrid() {
  const t = useTranslations('wellness');

  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-quart',
        });
      } catch (error) {
        console.error('AOS Init Error:', error);
      }
    };
    initAOS();
  }, []);

  const featureTags = [
    t('pool.tags.tag1'),
    t('pool.tags.tag2'),
    t('pool.tags.tag3'),
    t('pool.tags.tag4'),
  ];

  const gymFeatures = [
    t('gymCard.features.feature1'),
    t('gymCard.features.feature2'),
    t('gymCard.features.feature3'),
  ];

  const stats = [
    { number: t('stats.stat1Value'), label: t('stats.stat1Label') },
    { number: t('stats.stat2Value'), label: t('stats.stat2Label') },
    { number: t('stats.stat3Value'), label: t('stats.stat3Label') },
    { number: t('stats.stat4Value'), label: t('stats.stat4Label') },
  ];

  return (
    <section className="py-24 lg:py-40 bg-[#f8f8f6] relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #8a968f 1px, transparent 0)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl mb-20 lg:mb-32">
          <span
            className="inline-block text-[10px] tracking-[0.6em] uppercase text-[#AB8A62] font-bold mb-8 relative"
            data-aos="fade-right"
          >
            {t('label')}
            <div className="absolute -bottom-3 left-0 w-12 h-px bg-[#AB8A62]/40" />
          </span>

          <h2
            className="text-4xl md:text-6xl lg:text-8xl font-serif leading-[1.1] mb-10 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ color: '#4A6B5E' }}
          >
            {t('title')} <br />{' '}
            <span className="italic font-normal">{t('titleItalic')}</span>
          </h2>

          <p
            className="text-[#6e7a73] text-lg lg:text-xl max-w-2xl leading-relaxed font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('description')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT – BIG IMAGE CARD (POOL & SPA) */}
          <div className="lg:col-span-8 group" data-aos="fade-up">
            <div className="relative overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/[0.02]">
              <div className="relative overflow-hidden aspect-[16/10] lg:aspect-[16/9]">
                <img
                  src="/images/wellness/T3S-RivaZegrze-3376-m.jpg"
                  alt={t('pool.imgAlt')}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="p-10 lg:p-16">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-[#AB8A62] font-bold mb-6">
                  <div className="w-8 h-px bg-[#AB8A62]/30" />
                  {t('pool.label')}
                </div>

                <h3 className="text-3xl lg:text-5xl font-serif text-[#1a4d2e] mb-8 leading-tight">
                  {t('pool.title')}
                </h3>

                <p className="text-base lg:text-lg text-[#6e7a73] leading-relaxed mb-10 max-w-2xl font-light">
                  {t('pool.description')}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-4">
                  {featureTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2.5 bg-[#f1f1ed] text-[#6e7a73] text-[10px] uppercase tracking-widest font-semibold border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – SMALLER CARDS */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-16">
            {/* Gym Card */}
            <div
              className="relative group bg-white shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/[0.02]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/wellness/3.jpg"
                  alt={t('gym.imgAlt')}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="text-[9px] tracking-[0.4em] uppercase text-[#AB8A62] font-bold mb-4">
                  {t('gym.label')}
                </div>
                <h4 className="text-2xl font-serif text-[#1a4d2e] tracking-tight">
                  {t('gym.title')}
                </h4>
              </div>
            </div>

            {/* Fitness Card */}
            <div
              className="bg-[#71847b] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />

              <h4 className="text-3xl lg:text-4xl font-serif mb-8 leading-tight">
                {t('gymCard.title')}
              </h4>

              <p className="text-white/70 text-base leading-relaxed mb-10 font-light">
                {t('gymCard.description')}
              </p>

              <ul className="space-y-5 mb-12">
                {gymFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80">
                    <div className="w-1 h-1 bg-[#AB8A62] rounded-full" />
                    <span className="text-sm tracking-wide font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#activities"
                className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold group"
              >
                <span>{t('gymCard.cta')}</span>
                <div className="w-8 h-px bg-white/30 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mt-32 lg:mt-48 pt-20 border-t border-black/5"
          data-aos="fade-up"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-left group">
              <div className="text-4xl lg:text-5xl font-serif text-[#1a4d2e] mb-4 group-hover:text-[#AB8A62] transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#6e7a73] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Budujemy tablicę testimonials z tłumaczeń
  const testimonials: Testimonial[] = testimonialKeys.map((key, index) => ({
    id: index + 1,
    name: t(`items.${key}.name`),
    text: t(`items.${key}.text`),
    date: t(`items.${key}.date`),
    rating: 5,
    color: cardColors[index],
  }));

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    const cards = Array.from(scrollerContent.children);

    cards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      scrollerContent.appendChild(clone);
    });

    const totalWidth = scrollerContent.scrollWidth / 2;

    const tl = gsap.to(scrollerContent, {
      x: -totalWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    const handleMouseEnter = () => {
      gsap.to(tl, { timeScale: 0, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(tl, { timeScale: 1, duration: 0.5 });
    };

    scrollerContent.addEventListener("mouseenter", handleMouseEnter);
    scrollerContent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      scrollerContent.removeEventListener("mouseenter", handleMouseEnter);
      scrollerContent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f6f4] via-[#e8e9e4] to-[#f1f1ed]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #6e7a73 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #6e7a73 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4d6ce] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8a968f] rounded-full opacity-15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c8cabe] rounded-full opacity-10 blur-3xl" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <span className="text-sm tracking-[0.3em] text-[#6e7a73] uppercase mb-4 block font-medium">
              {t("label")}
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-[#0f0e0f] mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-[#6e7a73] max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#f7f6f4] via-[#f7f6f4]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#f7f6f4] via-[#f7f6f4]/80 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollerRef}
            className="flex gap-6"
            style={{
              width: "fit-content",
              willChange: "transform",
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`original-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-white/60 backdrop-blur-sm border border-[#b6b9af]/30 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[#6e7a73]">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-lg font-medium text-[#0f0e0f]">
                  {t("bottom.rating")}
                </span>
              </div>

              <div className="hidden md:block w-[1px] h-6 bg-[#b6b9af]" />

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-[#0f0e0f]">
                  {t("bottom.reviews")}
                </span>
              </div>

              <div className="hidden md:block w-[1px] h-6 bg-[#b6b9af]" />

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-[#0f0e0f]">
                  {t("bottom.recommendation")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="relative flex-shrink-0 w-[420px] h-[300px] bg-white/90 backdrop-blur-sm border border-[#b6b9af]/50 rounded-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white group"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl"
        style={{ background: testimonial.color }}
      />

      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg" />

      <div className="flex gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] drop-shadow-sm"
          />
        ))}
      </div>

      <p className="text-[#0f0e0f] leading-relaxed mb-6 text-[15px] line-clamp-4 group-hover:text-[#555e59] transition-colors duration-300">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-[#0f0e0f] text-base mb-1">
              {testimonial.name}
            </h4>
            <p className="text-xs text-[#6e7a73] font-medium">
              {testimonial.date}
            </p>
          </div>

          <div
            className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border-2 border-[#D4AF37] shadow-lg"
            style={{ background: testimonial.color }}
          >
            <span className="text-[#D4AF37] text-3xl font-serif font-bold leading-none">&ldquo;</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-inner" />
    </div>
  );
}
// Location Section - Real Riva Zegrze Locations with Dynamic Maps
function LocationSection() {
  const t = useTranslations('location');
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize AOS
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
    };
    initAOS();
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const locationKeys = ['golf', 'sailing', 'reserve', 'bike', 'marina'] as const;

  const locationIcons: Record<string, React.ReactNode> = {
    golf: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    sailing: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    reserve: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    bike: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
      </svg>
    ),
    marina: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  };

  const mapPositions: Record<string, { mapPosition: { top: string; left: string }; mapPositionMobile: { top: string; left: string } }> = {
    golf: { mapPosition: { top: '22%', left: '35%' }, mapPositionMobile: { top: '18%', left: '28%' } },
    sailing: { mapPosition: { top: '38%', left: '68%' }, mapPositionMobile: { top: '35%', left: '72%' } },
    reserve: { mapPosition: { top: '48%', left: '28%' }, mapPositionMobile: { top: '45%', left: '22%' } },
    bike: { mapPosition: { top: '62%', left: '52%' }, mapPositionMobile: { top: '58%', left: '50%' } },
    marina: { mapPosition: { top: '58%', left: '64%' }, mapPositionMobile: { top: '55%', left: '65%' } },
  };

  const mapUrls: Record<string, string> = {
    golf: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.428628045551!2d20.940029!3d52.48394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec4b7004b0896%3A0x47004b0896ee9e5!2sGolfowa%2044%2C%2005-110%20Rajszew!5e0!3m2!1spl!2spl!4v1736123456789!5m2!1spl!2spl",
    sailing: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25000!2d20.990556!3d52.469167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI4JzA5LjAiTiAyMMKwNTknMjYuMCJF!5e0!3m2!1spl!2spl!4v1234567890",
    reserve: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25000!2d20.992039!3d52.46163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI3JzQxLjkiTiAyMMKwNTknMzEuMyJF!5e0!3m2!1spl!2spl!4v1234567890",
    bike: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d20.988889!3d52.454722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI3JzE3LjAiTiAyMMKwNTknMjAuMCJF!5e0!3m2!1spl!2spl!4v1234567890",
    marina: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d20.989722!3d52.454167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec8b30732e6c9%3A0x5c5db36d47a5a0e4!2sRybaki%2011%2C%2005-130%20Zegrze%20Po%C5%82udniowe!5e0!3m2!1spl!2spl!4v1736123456789!5m2!1spl!2spl",
  };

  const defaultMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39017.89!2d20.970!3d52.460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec8b30732e6c9%3A0x5c5db36d47a5a0e4!2sZegrze%20Reservoir!5e0!3m2!1sen!2spl!4v1234567890";

  return (
    <section className="relative w-full bg-[#f1f1ed] py-12 md:py-16 lg:py-20">
      
      {/* Full Width Container with max height */}
      <div className="relative w-full h-[140vh] md:h-[120vh] lg:h-screen flex flex-col lg:flex-row">
        
        {/* LEFT PANEL - Locations List - 50% */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-full bg-[#d4d6ce]/40 backdrop-blur-sm relative z-10 overflow-y-auto">
          <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-12 xl:p-16 py-8 lg:py-12">
            
            {/* Header */}
            <div className="mb-6 lg:mb-10">
              <span className="text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-2 block font-light">
                {t('label')}
              </span>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#6E7A73] mb-3 lg:mb-4 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('title')}<br />
                {t('titleBreak')}
              </h2>
            </div>

            {/* Locations List */}
            <div className="space-y-1 max-w-xl">
              {locationKeys.map((key) => (
                <button
                  key={key}
                  onMouseEnter={() => setActiveLocation(key)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onClick={() => setActiveLocation(activeLocation === key ? null : key)}
                  className={`w-full text-left p-3 md:p-4 lg:p-5 transition-all duration-300 border-l-2 rounded-r-sm ${
                    activeLocation === key
                      ? 'bg-white/90 border-l-[#AB8A62] shadow-sm'
                      : 'bg-transparent border-l-transparent hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 transition-colors duration-300 ${
                      activeLocation === key ? 'text-[#AB8A62]' : 'text-[#8a968f]'
                    }`}>
                      {locationIcons[key]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className={`text-sm md:text-base font-light transition-colors duration-300 ${
                          activeLocation === key ? 'text-[#1a4d2e] font-medium' : 'text-[#6e7a73]'
                        }`}>
                          {t(`locations.${key}.title`)}
                        </h3>
                        <span className={`text-xs md:text-sm font-medium flex-shrink-0 transition-colors duration-300 ${
                          activeLocation === key ? 'text-[#AB8A62]' : 'text-[#8a968f]'
                        }`}>
                          {t(`locations.${key}.distance`)}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-[#8a968f] leading-relaxed mb-0.5">
                        {t(`locations.${key}.description`)}
                      </p>
                      <p className="text-xs text-[#8a968f]/70">
                        {t(`locations.${key}.address`)}
                      </p>
                    </div>

                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT - Dynamic Map - 50% */}
        <div className="w-full lg:w-1/2 h-[80vh] lg:h-full relative bg-[#f7f6f4]">
          
          {/* Dynamic Google Maps Embed */}
          <iframe
            key={activeLocation || 'default'}
            src={activeLocation 
              ? mapUrls[activeLocation]
              : defaultMap
            }
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 transition-opacity duration-500"
          />

          {/* Overlay Info Card when location is active */}
          {activeLocation && (
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-sm pointer-events-none z-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-[#8a968f] text-white p-6 md:p-8 border-l-4 border-[#f1f1ed] shadow-2xl">
                <div className="flex items-center gap-3 mb-3 text-[#f1f1ed]">
                  {locationIcons[activeLocation]}
                  <span className="text-xs tracking-widest uppercase font-light">{t('activePoint')}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-light mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(`locations.${activeLocation}.title`)}
                </h4>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {t(`locations.${activeLocation}.description`)}
                </p>
                <div className="text-3xl font-light text-[#f1f1ed]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(`locations.${activeLocation}.distance`)}
                </div>
              </div>
            </div>
          )}

          {/* Top Badge */}
          <div className="absolute top-8 left-8 pointer-events-none z-20">
            <div className="bg-[#8a968f] text-white px-4 py-2 md:px-6 md:py-3 font-serif text-xs md:text-sm tracking-widest uppercase shadow-lg">
              {t('badge')}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Gallery Section - Full Width, No Padding
function GallerySection() {
  const images = [
    '/images/gallery/IMG_2749.jpg',
    '/images/gallery/T3S-RivaZegrze-4168-m.jpg',
    '/images/gallery/T3S-RivaZegrze-3158-m.jpg',
    '/images/gallery/T3S-RivaZegrze-3549-m.jpg',
    '/images/gallery/T3S-RivaZegrze-3334-m.jpg',
    '/images/gallery/T3S-RivaZegrze-3500-m.jpg',
    '/images/gallery/rower wodny 1.jpg',
    '/images/gallery/T3S-RivaZegrze-3796-m.jpg',
  ];

  return (
    <section className="w-full">
      {/* Title Section with padding */}
      <div className="py-20 bg-white text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4 block">@RIVA</span>
      </div>

      {/* Gallery Grid - No gaps, full width */}
      <div className="grid grid-cols-4 md:grid-cols-8 w-full">
        {images.map((image, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden cursor-pointer aspect-square"
          >
            <img
              src={image}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-all duration-500" />
          </div>
        ))}
      </div>
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
                 Apartamenty Riva Zegrze<br />
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





