'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Waves, 
  Menu, 
  X, 
  MapPin, 
  Navigation as NavigationIcon, 
  ExternalLink, 
  Ship, 
  TreePine, 
  Bike, 
  Anchor, 
  Award, 
  Sailboat, 
  Instagram,
  Facebook
} from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f1f1ed]">
        <ActivitiesHero />
        <LocationsGrid />
        <ExperiencesCTA />
      </main>
      <MinimalFooter />
    </>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'STRONA GŁÓWNA', href: '/' },
    { label: 'O NAS', href: '/about' },
    { label: 'POKOJE', href: '/rooms' },
    { label: 'AKTYWNOŚCI', href: '/activities' },
    { label: 'GALERIA', href: '/galeria' },
    { label: 'KONTAKT', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/10 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <Waves 
                className={`w-8 h-8 transition-colors ${
                  isScrolled ? 'text-[#AB8A62]' : 'text-white'
                }`}
                strokeWidth={1}
              />
              <span 
                className={`text-2xl font-light tracking-[0.15em] transition-colors ${
                  isScrolled ? 'text-[#1a4d2e]' : 'text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                RIVA ZEGRZE
              </span>
            </a>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <a 
                    href={item.href} 
                    className={`text-xs tracking-[0.2em] font-light transition-colors relative py-2 ${
                      isScrolled ? 'text-[#6e7a73] hover:text-[#1a4d2e]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {/* Animated Underline */}
                    <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#AB8A62]' : 'bg-white'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Przycisk REZERWUJ */}
            <div className="hidden lg:flex items-center gap-6">
              <button 
                className={`flex items-center gap-2 text-xs tracking-[0.2em] px-6 py-3 border transition-all duration-300 group ${
                  isScrolled 
                    ? 'border-[#AB8A62] text-[#AB8A62] hover:bg-[#AB8A62] hover:text-white' 
                    : 'border-white/60 text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>REZERWUJ</span>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-[#0f0e0f]" strokeWidth={2} />
              ) : (
                <Menu 
                  className={`w-7 h-7 ${isScrolled ? 'text-[#6e7a73]' : 'text-white'}`}
                  strokeWidth={2}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#f1f1ed]/98 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#0f0e0f] text-3xl font-light hover:text-[#AB8A62] transition-colors relative group"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                animation: isMobileMenuOpen ? `fadeIn 0.5s ease-out ${idx * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              {item.label}
              {/* Mobile Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#AB8A62] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 flex items-center gap-2 text-xs tracking-[0.2em] px-10 py-4 border border-[#AB8A62] text-[#AB8A62] hover:bg-[#AB8A62] hover:text-white backdrop-blur-sm transition-all"
            style={{
              animation: isMobileMenuOpen ? 'fadeIn 0.5s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>REZERWUJ</span>
          </button>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}


// ============================================


// ============================================
// Hero Section - Z animated scroll arrow
// ============================================
function ActivitiesHero() {
  const heroRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { jarallax } = await import('jarallax');
          jarallax(heroRef.current, { 
            speed: 0.6,
            imgSrc: '/images/gallery/aktywnosci/kajaki.jpeg',
            imgSize: 'cover',
            imgPosition: 'center 60%',
          });
        } catch (error) {
          console.error('Jarallax error:', error);
        }
      }
    };

    // ✨ GSAP Arrow Animation
    const initArrowAnimation = async () => {
      if (typeof window !== 'undefined' && arrowRef.current) {
        try {
          const { gsap } = await import('gsap');
          
          // Bounce animation - infinite loop
          gsap.to(arrowRef.current, {
            y: 15,
            duration: 1.2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true
          });

          // Fade in on load
          gsap.fromTo(
            arrowRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
          );

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    const timer = setTimeout(() => {
      initParallax();
      initArrowAnimation();
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

  // Smooth scroll function
  const scrollToContent = () => {
    const nextSection = document.querySelector('#activities-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="jarallax relative h-[70vh] flex items-center justify-center overflow-hidden" 
      data-jarallax 
      data-speed="0.6"
    >
      {/* Jarallax sam doda zdjęcie */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0f]/50 via-[#0f0e0f]/40 to-[#0f0e0f]/60 z-10" />
      
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.4em] uppercase font-light opacity-80 mb-4 block">
          Odkryj Okolicę
        </span>
        <h1 
          className="text-5xl md:text-7xl font-light mb-6 tracking-[0.15em] leading-tight" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Aktywności<br />i Atrakcje
        </h1>
        <p className="text-base font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
          Wyjątkowe miejsca i doświadczenia w sercu Mazowsza
        </p>
      </div>

      {/* ✨ ANIMATED SCROLL ARROW */}
      <button
        ref={arrowRef}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer group"
        aria-label="Przewiń w dół"
      >
        {/* Text hint */}
        <span className="text-white text-[10px] tracking-[0.3em] uppercase font-light opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          Przewiń w dół
        </span>
        
        {/* Circle with arrow */}
        <div className="w-12 h-12 rounded-full border-2 border-white/40 backdrop-blur-sm flex items-center justify-center group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-300">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </section>
  );
}


// ============================================

// ============================================
// ============================================
// BENTO GRID - Z 2-step interaction (mobile)
// ============================================
function LocationsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const activities = [
    {
      id: 1,
      category: 'SPORTY WODNE',
      title: 'Skutery Wodne',
      distance: '0.5 km',
      description: 'Największa wypożyczalnia nad Zalewem. Skutery 90-300 KM dla rodzin i miłośników adrenaliny.',
      image: '/images/gallery/aktywnosci/skuter.jpeg',
      icon: <Ship size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/hWZ3vY8pzQD6qK7c9', // Skutery Zegrze, Rybaki 1
      gridClass: 'md:col-span-2 lg:col-span-2'
    },
    {
      id: 2,
      category: 'GOLF',
      title: 'Pole Golfowe Rajszew',
      distance: '5 km',
      description: '18 dołków, driving range i profesjonalni instruktorzy.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070',
      icon: <Award size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/7mK2rY9tXnJ8vK3z6', // First Warsaw Golf, Rajszew
      gridClass: ''
    },
    {
      id: 3,
      category: 'ŻEGLARSTWO',
      title: 'Akademia Żeglarska',
      distance: '3 km',
      description: 'Nauka żeglowania, wypożyczalnia sprzętu, kursy dla początkujących.',
      image: '/images/gallery/aktywnosci/lodka.jpeg',
      icon: <Sailboat size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/3pN6uT8hKmL9wJ4e8', // Akademia Żeglarska Mila
      gridClass: ''
    },
    {
      id: 4,
      category: 'PRZYRODA',
      title: 'Wieliszewskie Łęgi',
      distance: '4 km',
      description: 'Rezerwat z unikalną fauną i florą. Idealne na spacery i obserwację ptaków.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070',
      icon: <TreePine size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/5jD8mR2qLnK7tH9u9', // Rezerwat Wieliszewskie Łęgi
      gridClass: ''
    },
    {
      id: 5,
      category: 'ROWER',
      title: 'Trasa Rowerowa VM-O',
      distance: '0 km',
      description: 'Trasa Obwodowa tuż obok. Poranny jogging lub wieczorny rower.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070',
      icon: <Bike size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/8kM4pQ7sYnR9wL2x7', // Trakt rowerowy Zegrze
      gridClass: ''
    },
    {
      id: 6,
      category: 'MARINA',
      title: 'Marina Riva Zegrze',
      distance: '0 km',
      description: 'Prywatna przystań z dostępem do łodzi, kajaków i sprzętu wodnego.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070',
      icon: <Anchor size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/2nT9jK6hRmP8vH3u6', // Riva Zegrze, Rybaki 11
      gridClass: 'md:col-span-2 lg:col-span-1'
    },
    {
      id: 7,
      category: 'KULTURA',
      title: 'Twierdza Modlin',
      distance: '12 km',
      description: 'Historyczna twierdza napoleońska z XIX wieku. Wycieczki z przewodnikiem.',
      image: '/images/gallery/aktywnosci/twierdza.jpeg',
      icon: <MapPin size={24} strokeWidth={1.5} />,
      mapLink: 'https://maps.app.goo.gl/4mK7qY8tZnL9wJ5e9', // Twierdza Modlin
      gridClass: 'md:col-span-2 lg:col-span-2'
    }
  ];

  // ========================================
  // GSAP Animations
  // ========================================
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          // ✨ ANIMACJA NAGŁÓWKA
          if (headerRef.current) {
            const subtitle = headerRef.current.querySelector('.header-subtitle');
            const title = headerRef.current.querySelector('.header-title');
            const description = headerRef.current.querySelector('.header-description');

            gsap.fromTo(
              [subtitle, title, description],
              { 
                opacity: 0, 
                y: 50,
                filter: 'blur(10px)'
              },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                  trigger: headerRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                }
              }
            );
          }

          // ✨ ANIMACJA KART
          const cards = gridRef.current?.querySelectorAll('.activity-card');
          
          if (cards) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 60, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: 'top 75%',
                  toggleActions: 'play none none none',
                }
              }
            );
          }

        } catch (error) {
          console.error('GSAP error:', error);
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

  // ========================================
  // 2-STEP INTERACTION HANDLER
  // ========================================
  const handleCardClick = (e: React.MouseEvent, activityId: number, mapLink: string) => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile) {
      // MOBILE: 2-step interaction
      if (activeCard === activityId) {
        // Drugi klik - idź do mapy
        window.open(mapLink, '_blank');
      } else {
        // Pierwszy klik - podświetl kartę
        e.preventDefault();
        setActiveCard(activityId);
      }
    } else {
      // DESKTOP: bezpośrednie przejście
      window.open(mapLink, '_blank');
    }
  };

  return (
    <section 
      id="activities-content"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      
      {/* ========================================== */}
      {/* PASTELOWE TŁO Z WZORAMI */}
      {/* ========================================== */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#f1f1ed] via-[#e8e9e4] to-[#d4d6ce]" />
      
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#b6b9af" />
              <circle cx="0" cy="0" r="1" fill="#b6b9af" />
              <circle cx="60" cy="60" r="1" fill="#b6b9af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #8a968f 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #c8cabe 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute bottom-0 -left-20 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #71847b 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #b6b9af 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      <svg className="hidden lg:block absolute top-1/4 left-0 w-full h-1/2 opacity-10 pointer-events-none" viewBox="0 0 1000 500" fill="none">
        <path d="M0,250 Q250,200 500,250 T1000,250" stroke="#6e7a73" strokeWidth="1" />
        <path d="M0,280 Q250,230 500,280 T1000,280" stroke="#8a968f" strokeWidth="0.8" />
        <path d="M0,220 Q250,170 500,220 T1000,220" stroke="#71847b" strokeWidth="0.6" />
      </svg>

      {/* ========================================== */}
      {/* OUTLINE ICONS */}
      {/* ========================================== */}
      
      <svg className="hidden lg:block absolute top-[280px] left-[8%] w-[280px] h-[280px] opacity-[0.06] pointer-events-none z-10" viewBox="0 0 200 200" fill="none" stroke="#6e7a73" strokeWidth="1.5">
        <ellipse cx="100" cy="100" rx="70" ry="20" strokeWidth="2.5" />
        <ellipse cx="100" cy="100" rx="60" ry="15" strokeWidth="1.5" opacity="0.6" />
        <line x1="35" y1="100" x2="165" y2="100" strokeWidth="1.5" opacity="0.5" />
        <ellipse cx="100" cy="100" rx="22" ry="9" strokeWidth="2" opacity="0.7" />
        <path d="M30,100 L22,97 L22,103 Z" strokeWidth="2" fill="#6e7a73" opacity="0.5" />
        <path d="M170,100 L178,97 L178,103 Z" strokeWidth="2" fill="#6e7a73" opacity="0.5" />
        <line x1="65" y1="65" x2="135" y2="135" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="60" cy="60" rx="13" ry="20" transform="rotate(-45 60 60)" strokeWidth="2.5" />
        <ellipse cx="140" cy="140" rx="13" ry="20" transform="rotate(-45 140 140)" strokeWidth="2.5" />
        <path d="M15,118 Q25,115 35,118 T55,118 T75,118" opacity="0.6" strokeWidth="2" />
        <path d="M125,118 Q135,115 145,118 T165,118 T185,118" opacity="0.6" strokeWidth="2" />
      </svg>

      <svg className="hidden lg:block absolute top-[220px] right-[5%] w-[320px] h-[320px] opacity-[0.06] pointer-events-none z-10" viewBox="0 0 200 200" fill="none" stroke="#71847b" strokeWidth="1.8">
        <circle cx="50" cy="140" r="35" strokeWidth="3" />
        <circle cx="150" cy="140" r="35" strokeWidth="3" />
        <circle cx="50" cy="140" r="28" strokeWidth="1.5" opacity="0.6" />
        <circle cx="150" cy="140" r="28" strokeWidth="1.5" opacity="0.6" />
        <path d="M50,140 L100,75 L122,98 L150,140 M100,75 L100,52 M94,52 L106,52" strokeWidth="3.5" />
        <path d="M100,98 L68,98 L50,140" strokeWidth="3" />
        <circle cx="100" cy="112" r="7" strokeWidth="3" />
        <line x1="93" y1="112" x2="107" y2="112" strokeWidth="3" />
        <path d="M100,52 L95,42 L105,42 Z" fill="#71847b" opacity="0.5" />
      </svg>

      <svg className="hidden lg:block absolute bottom-[15%] left-[12%] w-[240px] h-[240px] opacity-[0.06] pointer-events-none z-10" viewBox="0 0 200 200" fill="none" stroke="#8a968f" strokeWidth="2">
        <path d="M100,160 L100,80" strokeWidth="4" strokeLinecap="round" />
        <path d="M100,80 L70,110 L80,110 L55,135 L68,135 L45,160 L155,160 L132,135 L145,135 L120,110 L130,110 Z" strokeWidth="2.5" opacity="0.7" />
        <circle cx="75" cy="100" r="3" fill="#8a968f" opacity="0.6" />
        <circle cx="125" cy="105" r="2.5" fill="#8a968f" opacity="0.5" />
        <circle cx="95" cy="120" r="2" fill="#8a968f" opacity="0.55" />
        <path d="M85,160 L85,170 M115,160 L115,170" strokeWidth="2.5" opacity="0.6" />
      </svg>

      <svg className="hidden lg:block absolute top-[55%] right-[8%] w-[200px] h-[200px] opacity-[0.06] pointer-events-none z-10" viewBox="0 0 200 200" fill="none" stroke="#6e7a73" strokeWidth="2">
        <circle cx="100" cy="80" r="25" strokeWidth="3" />
        <circle cx="92" cy="74" r="2" fill="#6e7a73" opacity="0.6" />
        <circle cx="108" cy="74" r="2" fill="#6e7a73" opacity="0.6" />
        <circle cx="100" cy="84" r="2" fill="#6e7a73" opacity="0.6" />
        <circle cx="94" cy="81" r="1.5" fill="#6e7a73" opacity="0.5" />
        <circle cx="106" cy="81" r="1.5" fill="#6e7a73" opacity="0.5" />
        <line x1="100" y1="105" x2="100" y2="140" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M85,140 L115,140" strokeWidth="3" strokeLinecap="round" />
        <path d="M70,145 Q100,142 130,145" strokeWidth="2" opacity="0.6" />
      </svg>

      <svg className="hidden lg:block absolute bottom-[8%] right-[15%] w-[220px] h-[220px] opacity-[0.06] pointer-events-none z-10" viewBox="0 0 200 200" fill="none" stroke="#71847b" strokeWidth="2.5">
        <circle cx="100" cy="45" r="12" strokeWidth="3" />
        <line x1="100" y1="57" x2="100" y2="140" strokeWidth="4" strokeLinecap="round" />
        <line x1="85" y1="72" x2="115" y2="72" strokeWidth="3" strokeLinecap="round" />
        <path d="M65,140 Q65,160 80,165 L100,140" strokeWidth="3.5" />
        <path d="M135,140 Q135,160 120,165 L100,140" strokeWidth="3.5" />
        <circle cx="75" cy="162" r="8" strokeWidth="2.5" />
        <circle cx="125" cy="162" r="8" strokeWidth="2.5" />
        <path d="M50,120 Q70,125 90,120" strokeWidth="2" opacity="0.6" />
        <path d="M110,120 Q130,125 150,120" strokeWidth="2" opacity="0.6" />
      </svg>

      {/* ========================================== */}
      {/* CONTENT */}
      {/* ========================================== */}

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div ref={headerRef} className="text-center mb-16 lg:mb-24">
          <span className="header-subtitle text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-4 block font-light">
            NIEZAPOMNIANE CHWILE
          </span>
          <h2 
            className="header-title text-4xl md:text-5xl lg:text-6xl font-light text-[#6e7a73] mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Poznaj Piękno Okolicy Zegrza
          </h2>
          <p className="header-description text-lg text-[#6e7a73] leading-relaxed font-light max-w-3xl mx-auto">
            Od sportów wodnych po pola golfowe, od rezerwatów przyrody po kulinarną przygodę—odkryj 
            wyjątkowe miejsca i aktywności tuż obok Riva Zegrze, które uczynią Twój pobyt niezapomnianym.
          </p>
        </div>

        {/* BENTO GRID */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={(e) => handleCardClick(e, activity.id, activity.mapLink)}
              className={`activity-card group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 cursor-pointer ${activity.gridClass} ${
                activeCard === activity.id ? 'ring-4 ring-[#AB8A62] shadow-2xl' : ''
              }`}
            >
              <div className="relative bg-white p-3 shadow-lg">
                <div className="relative h-[450px] overflow-hidden border border-[#d4d6ce]">
                  
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0f]/95 via-[#0f0e0f]/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                    
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#AB8A62] group-hover:border-[#AB8A62] transition-all duration-500 flex-shrink-0">
                          {activity.icon}
                        </div>
                        <span className="text-[10px] lg:text-xs tracking-[0.3em] font-light bg-white/20 backdrop-blur-md px-3 lg:px-4 py-2 border border-white/30 whitespace-nowrap">
                          {activity.category}
                        </span>
                      </div>

                      <div className="text-[10px] lg:text-xs tracking-[0.2em] font-light bg-[#AB8A62] px-3 lg:px-4 py-2 group-hover:bg-white group-hover:text-[#AB8A62] transition-all duration-300 flex-shrink-0">
                        {activity.distance}
                      </div>
                    </div>

                    <div>
                      <h3 
                        className="text-2xl lg:text-3xl xl:text-4xl font-light mb-2 lg:mb-3 group-hover:text-[#AB8A62] transition-colors duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {activity.title}
                      </h3>

                      <p className="text-sm lg:text-base font-light leading-relaxed opacity-90 mb-3 lg:mb-4">
                        {activity.description}
                      </p>

                      {/* CTA - widoczne na desktop hover LUB mobile active */}
                      <div className={`flex items-center gap-2 text-xs lg:text-sm transition-opacity duration-500 ${
                        activeCard === activity.id ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
                      }`}>
                        <span className="tracking-[0.2em] uppercase font-light">Zobacz na mapie</span>
                        <NavigationIcon size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                      </div>

                      <div className="w-0 h-px bg-white/60 group-hover:w-20 lg:group-hover:w-24 transition-all duration-500 mt-2 lg:mt-3" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}




// CTA Section - ZAKTUALIZOWANE TEKSTY
// ============================================
function ExperiencesCTA() {
  return (
    <section className="py-32 bg-[#6e7a73] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url(/images/gallery/aktywnosci/zaglowki.jpeg)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.4em] uppercase mb-6 opacity-75 block font-light">
          Wypoczynek nad wodą
        </span>
        <h2 
          className="text-4xl md:text-5xl font-light mb-8" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Odkryj wszystko, co oferuje Riva Zegrze
        </h2>
        <p className="text-lg leading-relaxed mb-12 opacity-90 font-light">
          Komfortowe apartamenty, atrakcje na terenie obiektu oraz liczne możliwości aktywnego wypoczynku w okolicy sprawiają, że każdy pobyt w Riva Zegrze jest wyjątkowy. Zarezerwuj bezpośrednio i zaplanuj pobyt dopasowany do swoich potrzeb.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/#booking"
            className="px-10 py-4 bg-white text-[#6e7a73] text-xs tracking-[0.2em] hover:bg-[#f1f1ed] transition-all font-light"
          >
            SPRAWDŹ DOSTĘPNOŚĆ
          </a>
          <a 
            href="/#booking"
            className="px-10 py-4 border border-white text-white text-xs tracking-[0.2em] hover:bg-white hover:text-[#6e7a73] transition-all font-light"
          >
            ZAREZERWUJ POBYT
          </a>
        </div>
      </div>
    </section>
  );
}


// Minimal Footer – Riva Zegrze - Professional Pastel Version
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
                { label: 'Oferta Specjalna', href: '/offers' },
                { label: 'Wellness & Spa', href: '/activities' },
                { label: 'Galeria', href: '/gallery' },
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
                <a href="mailto:rezerwacje@rivazegrze.pl" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>rezerwacje@rivazegrze.pl</span>
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

        {/* BOTTOM BAR */}
        <div className="border-t border-[#d4d6ce] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8a968f] font-light">
            © {new Date().getFullYear()} Riva Zegrze. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            {[
              { label: 'Polityka prywatności', href: '/privacy' },
              { label: 'Regulamin', href: '/terms' },
              { label: 'Cookies', href: '/cookies' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-[#8a968f] hover:text-[#1a4d2e] transition-colors font-light"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}