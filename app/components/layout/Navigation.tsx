'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Compass,
  Waves,
  Phone,
  Calendar,
  Menu,
  X
} from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const tNav = useTranslations('navItems');
  const locale = useLocale();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);

  const imageKeys: Record<string, string> = {
    about: '/images/about/hero/T3S-RivaZegrze-0620-m.jpg',
    apartments: '/images/gallery/baner-pokoje/t3s-riva-zegrze-0446-m.jpg',
    reservation: '/images/gallery/okolica/T3S-RivaZegrze-4183-m.jpg',
    activities: '/images/gallery/aktywnosci/kajaki.jpeg',
    gallery: '/images/gallery/okolica/T3S-RivaZegrze-4168-m.jpg',
    contact: '/images/gallery/okolica/T3S-RivaZegrze-0940-m.jpg',
  };

  const navItems = [
    { key: 'about', label: tNav('about'), href: `/${locale}/about`, hasImage: true },
    { key: 'apartments', label: tNav('apartments'), href: `/${locale}/apartamenty`, hasImage: true },
    { key: 'reservation', label: tNav('reservation'), href: `/${locale}/rezerwacja`, hasImage: true },
    { key: 'activities', label: tNav('activities'), href: `/${locale}/activities`, hasImage: true },
    { key: 'gallery', label: tNav('gallery'), href: `/${locale}/galeria`, hasImage: true },
    { key: 'contact', label: tNav('contact'), href: `/${locale}/contact`, hasImage: true },
    { key: 'companyInfo', label: tNav('companyInfo'), href: `/${locale}/dane-firmy`, hasImage: false },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMegaMenuOpen) {
      setHoveredItem('about');
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined' && menuRef.current && contentRef.current) {
      if (isMegaMenuOpen) {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            menuRef.current,
            { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
            { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 0.7, ease: 'power2.inOut' }
          );
          gsap.fromTo(
            contentRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power1.out' }
          );
          gsap.fromTo(
            linksRef.current.filter(Boolean),
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power1.out', delay: 0.5 }
          );
        }, menuRef);
        return () => ctx.revert();
      } else if (menuRef.current) {
        gsap.to(menuRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in'
        });
      }
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMegaMenuOpen(false);
    };
    if (isMegaMenuOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    if (isMegaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('overflow-y');
    }
    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('overflow-y');
    };
}, [isMegaMenuOpen]);


  const handleNavClick = (href: string) => {
    setIsMegaMenuOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 150);
  };

  return (
    <>
      {/* TOP NAV BAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/10 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 sm:gap-3 group z-50"
            >
              <Waves
                className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors ${
                  isScrolled ? 'text-[#AB8A62]' : 'text-white'
                }`}
                strokeWidth={1}
              />
              <span
                className={`text-lg sm:text-2xl font-light tracking-[0.15em] transition-colors ${
                  isScrolled ? 'text-[#1a4d2e]' : 'text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                RIVA ZEGRZE
              </span>
            </Link>

            {/* Desktop: LANGUAGE + MENU + CTA */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">

              <LanguageSwitcher isScrolled={isScrolled} />

              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`flex items-center gap-2 xl:gap-3 text-[10px] xl:text-xs tracking-[0.25em] px-4 xl:px-6 py-2.5 xl:py-3 border transition-all duration-300 ${
                  isMegaMenuOpen
                    ? 'border-[#AB8A62] bg-[#AB8A62] text-white'
                    : isScrolled
                      ? 'border-[#AB8A62] text-[#AB8A62] hover:bg-[#AB8A62] hover:text-white'
                      : 'border-white/60 text-white hover:bg-white/10'
                }`}
              >
                {isMegaMenuOpen ? (
                  <>
                    <X className="w-3.5 h-3.5 xl:w-4 xl:h-4" strokeWidth={1.5} />
                    <span>{t('close')}</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-3.5 h-3.5 xl:w-4 xl:h-4" strokeWidth={1.5} />
                    <span>{t('menu')}</span>
                  </>
                )}
              </button>

              <Link
                href={`/${locale}/rezerwacja`}
                className={`flex items-center gap-2 text-[10px] xl:text-xs tracking-[0.2em] px-4 xl:px-6 py-2.5 xl:py-3 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#AB8A62] text-white hover:bg-[#967447]'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" strokeWidth={1.5} />
                <span>{t('book')}</span>
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 right-0 h-0.5 transition-all duration-300 ${
                    isMegaMenuOpen
                      ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#AB8A62]'
                      : isScrolled
                        ? 'top-1 bg-[#6e7a73]'
                        : 'top-1 bg-white'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 transition-all duration-300 ${
                    isMegaMenuOpen
                      ? 'opacity-0 scale-0'
                      : isScrolled
                        ? 'opacity-100 bg-[#6e7a73]'
                        : 'opacity-100 bg-white'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-0.5 transition-all duration-300 ${
                    isMegaMenuOpen
                      ? 'top-1/2 -translate-y-1/2 -rotate-45 bg-[#AB8A62]'
                      : isScrolled
                        ? 'bottom-1 bg-[#6e7a73]'
                        : 'bottom-1 bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MEGA MENU */}
      {isMegaMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40"
          style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        >
          <div className="absolute inset-0 flex">
            <div
              className="w-full lg:w-1/2 relative"
              style={{
                background: 'linear-gradient(135deg, #f1f1ed 0%, #e8e9e4 50%, #d4d6ce 100%)'
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #6e7a73 1px, transparent 1px),
                    linear-gradient(to bottom, #6e7a73 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-[#8a968f]" />
          </div>

          <div
            ref={contentRef}
            className="relative h-full flex items-center"
          >
            <div className="w-full h-full flex flex-col lg:flex-row">

              {/* LEFT SIDE - Navigation Links */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24 py-20 lg:py-0">

                <div className="mb-12 lg:mb-16">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#8a968f] font-light block">
                    {t('menuLabel')}
                  </span>
                </div>

                <nav className="space-y-1 mb-auto">
                  {navItems.map((item, idx) => (
                    <button
                      key={item.key}
                      ref={(el) => { linksRef.current[idx] = el; }}
                      onClick={() => handleNavClick(item.href)}
                      onMouseEnter={() => setHoveredItem(item.key)}
                      onMouseLeave={() => setHoveredItem('about')}
                      className="group w-full flex items-center gap-4 lg:gap-6 py-4 lg:py-5 border-b border-[#e8e9e4] hover:border-[#AB8A62] transition-all duration-300"
                    >
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-[#d4d6ce] group-hover:bg-[#AB8A62] transition-all duration-300" />
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#AB8A62] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                      </div>
                      <div className="w-8 lg:w-12 h-px bg-[#d4d6ce] group-hover:w-16 lg:group-hover:w-20 group-hover:bg-[#AB8A62] transition-all duration-300" />
                      <span
                        className="flex-1 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-[#1a4d2e] group-hover:text-[#AB8A62] transition-colors duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {item.label}
                      </span>
                      {item.hasImage && (
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6 text-[#8a968f] group-hover:text-[#AB8A62] group-hover:translate-x-2 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </button>
                  ))}
                </nav>

                <div className="mb-8 flex justify-start">
                  <LanguageSwitcher isScrolled={true} />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-12 lg:mt-16 pt-8 border-t border-[#e8e9e4]">
                  <Link
                    href={`/${locale}/rezerwacja`}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="flex items-center gap-3 text-xs tracking-[0.25em] px-8 py-4 bg-[#AB8A62] text-white hover:bg-[#967447] transition-all"
                  >
                    <Calendar className="w-4 h-4" strokeWidth={1.5} />
                    <span>{t('bookStay')}</span>
                  </Link>
                  <a
                    href="tel:+48510038038"
                    className="flex items-center gap-2 text-sm text-[#6e7a73] hover:text-[#AB8A62] transition-colors"
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    <span>+48 510 038 038</span>
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE - OBRAZKI */}
              <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                {hoveredItem && imageKeys[hoveredItem] ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center animate-fadeIn"
                    style={{
                      backgroundImage: `url(${imageKeys[hoveredItem]})`,
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f0e0f]/40 via-[#0f0e0f]/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-12">
                      <div className="text-center">
                        <p className="text-[10px] tracking-[0.4em] uppercase mb-6 opacity-70">
                          {t('preview')}
                        </p>
                        <h3
                          className="text-5xl xl:text-6xl font-light mb-8 leading-tight drop-shadow-lg"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {navItems.find(item => item.key === hoveredItem)?.label || ''}
                        </h3>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-px bg-white/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                          <div className="w-16 h-px bg-white/40" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-white/30" />
                    <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-white/30" />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #d4d6ce 0%, #b6b9af 100%)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[#6e7a73]">
                        <Compass className="w-24 h-24 mx-auto mb-8 opacity-20" strokeWidth={0.5} />
                        <p className="text-sm tracking-[0.3em] uppercase opacity-40">
                          {t('menuLabel')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          <button
            onClick={() => setIsMegaMenuOpen(false)}
            className="hidden lg:flex fixed top-8 right-8 items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 group transition-all duration-300 z-50"
            aria-label={t('close')}
          >
            <X
              className="w-6 h-6 text-white/60 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
              strokeWidth={1.5}
            />
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      ` }} />
    </>
  );
}
