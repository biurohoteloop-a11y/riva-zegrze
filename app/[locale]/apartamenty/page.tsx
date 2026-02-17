'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'; // ← KLUCZOWY IMPORT
import { useTranslations } from 'next-intl';
import Navigation from '../../components/layout/Navigation';
import { 
  Compass, 
  Calendar, 
  Waves, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X, 
  Users, 
  Bed, 
  Maximize, 
  Wifi, 
  Coffee, 
  Tv, 
  Wind 
} from 'lucide-react';

export default function RoomsPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f1f1ed]">
        <RoomsHero />
        <RoomsGrid />
      </main>
      <MinimalFooter />
    </>
  );
}

function RoomsHero() {
  const t = useTranslations('roomsPage.hero');
  const heroRef = useRef(null);

  useEffect(() => {
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { jarallax } = await import('jarallax');
          jarallax(heroRef.current, { 
            speed: 0.6,
            imgSrc: '/images/gallery/baner-pokoje/t3s-riva-zegrze-0446-m.jpg',
            imgSize: 'cover',
            imgPosition: 'center 60%',
          });
        } catch (error) {
          console.error('Jarallax error:', error);
        }
      }
    };

    const timer = setTimeout(() => {
      initParallax();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (heroRef.current && typeof window !== 'undefined') {
        try {
          const { jarallax } = require('jarallax');
          jarallax(heroRef.current, 'destroy');
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="jarallax relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden" 
      data-jarallax 
      data-speed="0.6"
    >
      <div className="absolute inset-0 bg-[#0f0e0f]/40 z-10" />
      
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.4em] uppercase font-light opacity-80 mb-4 block">
          {t('label')}
        </span>
        <h1 
          className="text-4xl md:text-7xl font-light mb-6 tracking-[0.15em] leading-tight" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t('title')}
        </h1>
        <p className="text-sm md:text-base font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}


function AnimatedButton({ 
  children, 
  href, 
  className = '' 
}: { 
  children: React.ReactNode; 
  href: string; 
  className?: string 
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;

    if (!button || !fill) return;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');

        const handleMouseEnter = () => {
          gsap.to(fill, {
            scaleX: 1,
            duration: 0.6,
            ease: 'power3.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(fill, {
            scaleX: 0,
            duration: 0.6,
            ease: 'power3.out'
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      } catch (error) {
        console.error('GSAP button animation error:', error);
      }
    };

    initGSAP();
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`relative overflow-hidden px-10 py-4 border border-[#8a968f] text-[#8a968f] text-xs tracking-[0.2em] uppercase font-light inline-flex items-center justify-center gap-2 group ${className}`}
    >
      <span
        ref={fillRef}
        className="absolute inset-0 bg-[#8a968f] origin-left z-0"
        style={{ transform: 'scaleX(0)' }}
      />
      
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </a>
  );
}

function RoomsGrid() {
  const t = useTranslations('roomsPage.roomsGrid');
  const roomsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const roomKeys = ['c1', 'c4', 'c7', 'd1', 'd4', 'd7', 'b10'];

  const roomMeta: Record<string, { image: string; link: string }> = {
    c1:  { image: '/images/rooms/t3s-rivazegrze-3107-m.jpg', link: '/apartamenty/apartament-c1' },
    c4:  { image: '/images/rooms/t3s-rivazegrze-3500-m.jpg', link: '/apartamenty/apartament-c4' },
    c7:  { image: '/images/rooms/img_3650.jpg',              link: '/apartamenty/apartament-c7' },
    d1:  { image: '/images/rooms/img_3622.jpg',              link: '/apartamenty/apartament-d1' },
    d4:  { image: '/images/rooms/img_3620.jpg',              link: '/apartamenty/apartament-d4' },
    d7:  { image: '/images/rooms/d4.jpg',                    link: '/apartamenty/apartament-d7' },
    b10: { image: '/images/rooms/img_4647.jpg',              link: '/apartamenty/apartament-deluxe-b10' },
  };

  const benefitIcons = [
    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  ];

  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const roomCards = roomsRef.current?.querySelectorAll('.room-card');
          
          if (roomCards) {
            gsap.fromTo(
              roomCards,
              { opacity: 0, y: 60, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                  trigger: roomsRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                }
              }
            );

            roomCards?.forEach((card) => {
              const img = card.querySelector('.room-image');
              if (img) {
                card.addEventListener('mouseenter', () => {
                  gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
                });
                card.addEventListener('mouseleave', () => {
                  gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
                });
              }
            });
          }

          if (bannerRef.current) {
            gsap.fromTo(
              bannerRef.current,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: bannerRef.current,
                  start: 'top 75%',
                  toggleActions: 'play none none none',
                }
              }
            );

            const benefits = bannerRef.current.querySelectorAll('.benefit-item');
            gsap.fromTo(
              benefits,
              { opacity: 0, x: -15 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: bannerRef.current,
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                }
              }
            );
          }

        } catch (error) {
          console.error('GSAP animation error:', error);
        }
      }
    };

    initAnimations();

    return () => {
      if (typeof window !== 'undefined') {
        const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#f7f6f4]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT - Rooms List */}
          <div ref={roomsRef} className="lg:col-span-8 space-y-16">
            {roomKeys.map((key, idx) => (
              <div
                key={idx}
                className="room-card grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 border-b border-[#d4d6ce] last:border-0"
              >
                <div className="relative">
                  <div className="relative bg-white p-3 shadow-lg">
                    <div className="relative h-[400px] overflow-hidden group border border-[#e8e6e1]">
                      <img
                        src={roomMeta[key].image}
                        alt={t(`rooms.${key}.name`)}
                        className="room-image w-full h-full object-cover transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 shadow-md">
                        <span className="text-xs font-light text-[#0f0e0f]">
                          {t(`rooms.${key}.price`)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl font-light text-[#0f0e0f] mb-4 leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {t(`rooms.${key}.name`)}
                    </h3>

                    <div className="flex items-center gap-6 text-sm text-[#6e7a73] mb-6 font-light">
                      <span className="flex items-center gap-2">
                        <Maximize size={16} strokeWidth={1.5} />
                        {t(`rooms.${key}.size`)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users size={16} strokeWidth={1.5} />
                        {t(`rooms.${key}.guests`)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Bed size={16} strokeWidth={1.5} />
                        {t(`rooms.${key}.beds`)}
                      </span>
                    </div>

                    <p className="text-[#6e7a73] leading-relaxed mb-6 font-light">
                      {t(`rooms.${key}.description`)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {['amenity1', 'amenity2', 'amenity3', 'amenity4'].map((aKey, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-[#d4d6ce] text-xs text-[#6e7a73] font-light"
                        >
                          {t(`rooms.${key}.${aKey}`)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatedButton href={roomMeta[key].link} className="w-full">
                    {t('viewDetailsButton')}
                  </AnimatedButton>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - PROMO BANNER */}
          <div className="lg:col-span-4">
            <div ref={bannerRef} className="sticky top-32">
              <div className="bg-white border border-[#d4d6ce] shadow-sm">
                
                {/* Image Header */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src="/images/gallery/baner-kontakt/zdjecie-kontakt.jpg"
                    alt={t('banner.imageAlt')}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0f]/50 via-[#0f0e0f]/20 to-transparent" />
                  
                  {/* Marketing Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-md">
                    <p className="text-xs text-[#6e7a73] font-light tracking-wide leading-tight text-center">
                      {t('banner.badge')}<br/>
                      <span className="text-[#0f0e0f] font-normal">{t('banner.badgeHighlight')}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  
                  {/* Headline */}
                  <h3 
                    className="text-2xl lg:text-3xl font-light text-[#0f0e0f] mb-2 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {t('banner.titleLine1')}<br/>
                    {t('banner.titleLine2')}
                  </h3>

                  <p className="text-[#6e7a73] text-sm font-light mb-6 leading-relaxed">
                    {t('banner.description')}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    {[1, 2, 3, 4, 5].map((num, i) => (
                      <div key={i} className="benefit-item flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#8a968f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={benefitIcons[i]} />
                        </svg>
                        <span className="text-sm text-[#6e7a73] font-light leading-relaxed">
                          {t(`banner.benefit${num}`)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Info Box */}
                  <div className="bg-[#f7f6f4] border border-[#d4d6ce] p-4 mb-6">
                    <p className="text-xs text-[#6e7a73] font-light leading-relaxed">
                      <strong className="font-normal text-[#0f0e0f]">{t('banner.infoTitle')}</strong>{' '}
                      {t('banner.infoText')}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-[#d4d6ce] space-y-3">
                    <a 
                      href="tel:+48510038038" 
                      className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#0f0e0f] transition-colors group"
                    >
                      <svg className="w-5 h-5 text-[#8a968f] group-hover:text-[#0f0e0f] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <span>+48 510 038 038</span>
                    </a>
                    <a 
                      href="mailto:wynajem@rivazegrze.pl" 
                      className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#0f0e0f] transition-colors group"
                    >
                      <svg className="w-5 h-5 text-[#8a968f] group-hover:text-[#0f0e0f] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span>wynajem@rivazegrze.pl</span>
                    </a>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 pt-6 border-t border-[#d4d6ce] text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#8a968f]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-[#6e7a73] font-light">
                      {t('banner.trustText')}{' '}
                      <strong className="font-normal text-[#0f0e0f]">{t('banner.trustHighlight')}</strong>
                    </p>
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

function MinimalFooter() {
  const t = useTranslations('footer');
  
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
              {t('brand.tagline')}
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
              <span className="text-xs text-[#8a968f]">{t('brand.bookingRating')}</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              {t('navigation.title')}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t('navigation.apartments'), href: '/rooms' },
                { label: t('navigation.reservationInfo'), href: '/informacje-o-rezerwacji' },
                { label: t('navigation.wellness'), href: '/activities' },
                { label: t('navigation.gallery'), href: '/galeria' },
                { label: t('navigation.about'), href: '/about' },
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
              {t('contact.title')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#6e7a73] font-light group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="group-hover:text-[#1a4d2e] transition-colors">
                  {t('contact.addressName')}<br />
                  {t('contact.addressStreet')}<br />
                  {t('contact.addressCity')}
                </span>
              </li>
              <li>
                <a href={`tel:${t('contact.phone')}`} className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>{t('contact.phone')}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${t('contact.email')}`} className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>{t('contact.email')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER & SOCIAL */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              {t('newsletter.title')}
            </h4>
            <p className="text-sm text-[#6e7a73] mb-4 font-light">
              {t('newsletter.description')}
            </p>
            
            {/* Newsletter Form */}
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('newsletter.emailPlaceholder')}
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
                {t('newsletter.socialTitle')}
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: t('newsletter.instagram') },
                  { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: t('newsletter.facebook') }
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

        {/* BOTTOM BAR */}
        <div className="border-t border-[#d4d6ce] pt-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
            <p className="text-xs text-[#8a968f] font-light text-center sm:text-left">
              {t('legal.copyright', { year: new Date().getFullYear() })}
            </p>
            <a 
              href="https://hoteler.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light group"
            >
              <span>{t('legal.madeWith')}</span>
              <svg className="w-3 h-3 text-[#AB8A62] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{t('legal.by')}</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
            {[
              { label: t('legal.privacy'), href: '/polityka-prywatnosci' },
              { label: t('legal.terms'), href: '/regulamin' },
              { label: t('legal.reservationInfo'), href: '/informacje-o-rezerwacji' },
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

          <div className="text-center pt-4 border-t border-[#d4d6ce]/50">
            <p className="text-xs text-[#8a968f] font-light">
              <span className="font-medium text-[#6e7a73]">{t('legal.companyName')}</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className="font-medium text-[#6e7a73]">{t('legal.nip')}</span> {t('legal.nipNumber')}
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}