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
        <ActivitiesIntro />
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
// Hero Section - Z LOKALNYM ZDJĘCIEM
// ============================================
function ActivitiesHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { jarallax } = await import('jarallax');
          jarallax(heroRef.current, { 
            speed: 0.6,
            imgSrc: '/images/gallery/aktywnosci/kajaki.jpeg', // ← ZMIENIONE
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
    </section>
  );
}


// ✅ Intro Section - UKRYTE NA MOBILE, ŁADNIEJSZY KAJAK
function ActivitiesIntro() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* ✨ ROWER - lewy górny róg - UKRYTY NA MOBILE */}
      <svg className="hidden lg:block absolute top-4 left-4 w-64 h-64 opacity-[0.35] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="#4a5a52" strokeWidth="2">
        <circle cx="50" cy="140" r="32" strokeWidth="3" />
        <circle cx="150" cy="140" r="32" strokeWidth="3" />
        <circle cx="50" cy="140" r="25" strokeWidth="1.5" opacity="0.7" stroke="#5a6a62" />
        <circle cx="150" cy="140" r="25" strokeWidth="1.5" opacity="0.7" stroke="#5a6a62" />
        <path d="M50,140 L100,80 L120,100 L150,140 M100,80 L100,60 M95,60 L105,60" strokeWidth="3" />
        <path d="M100,100 L70,100 L50,140" strokeWidth="2.5" />
        {/* Pedały */}
        <circle cx="100" cy="110" r="6" strokeWidth="2.5" />
        <line x1="94" y1="110" x2="106" y2="110" strokeWidth="2.5" />
      </svg>

      {/* ✨ KAJAK - prawy górny róg - ŁADNIEJSZY, UKRYTY NA MOBILE */}
      <svg className="hidden lg:block absolute top-4 right-4 w-64 h-64 opacity-[0.35] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="#4a5a52" strokeWidth="2">
        {/* Korpus kajaka - elegancki kształt */}
        <ellipse cx="100" cy="100" rx="65" ry="18" strokeWidth="2.5" />
        <ellipse cx="100" cy="100" rx="55" ry="14" strokeWidth="1.5" opacity="0.6" stroke="#5a6a62" />
        
        {/* Linie wewnętrzne kajaka */}
        <line x1="40" y1="100" x2="160" y2="100" strokeWidth="1.5" opacity="0.5" stroke="#5a6a62" />
        <ellipse cx="100" cy="100" rx="20" ry="8" strokeWidth="2" opacity="0.7" />
        
        {/* Dziób i rufa */}
        <path d="M35,100 L28,98 L28,102 Z" strokeWidth="2" fill="#4a5a52" opacity="0.6" />
        <path d="M165,100 L172,98 L172,102 Z" strokeWidth="2" fill="#4a5a52" opacity="0.6" />
        
        {/* Wiosło - bardziej szczegółowe */}
        <line x1="70" y1="70" x2="130" y2="130" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="65" cy="65" rx="12" ry="18" transform="rotate(-45 65 65)" strokeWidth="2.5" fill="none" />
        <ellipse cx="135" cy="135" rx="12" ry="18" transform="rotate(-45 135 135)" strokeWidth="2.5" fill="none" />
        
        {/* Fale wokół */}
        <path d="M20,115 Q30,112 40,115 T60,115 T80,115" opacity="0.7" strokeWidth="2" stroke="#5a6a62" />
        <path d="M120,115 Q130,112 140,115 T160,115 T180,115" opacity="0.7" strokeWidth="2" stroke="#5a6a62" />
        <path d="M25,122 Q35,120 45,122 T65,122" opacity="0.5" strokeWidth="1.5" stroke="#5a6a62" />
        <path d="M135,122 Q145,120 155,122 T175,122" opacity="0.5" strokeWidth="1.5" stroke="#5a6a62" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-6 block font-light">
          NIEZAPOMNIANE CHWILE
        </span>
        <h2 
          className="text-4xl md:text-5xl font-light text-[#4a6b5e] mb-8" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Poznaj Piękno Okolicy Zegrza
        </h2>
        <p className="text-lg text-[#6e7a73] leading-relaxed font-light">
          Od sportów wodnych po pola golfowe, od rezerwatów przyrody po kulinarną przygodę—odkryj 
          wyjątkowe miejsca i aktywności tuż obok Riva Zegrze, które uczynią Twój pobyt niezapomnianym.
        </p>
      </div>
    </section>
  );
}

// ✅ Locations Grid - ŻAGLÓWKA UKRYTA NA MOBILE
function LocationsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  // ============================================
// Locations Grid - 2 ZDJĘCIA ZMIENIONE
// ============================================
const locations = [
  {
    id: 1,
    category: 'GOLF',
    title: 'Pole Golfowe Rajszew',
    distance: '5 km',
    description: 'Profesjonalne pole golfowe z 18 dołkami, driving range i profesjonalnymi instruktorami.',
    address: 'Golfowa 44, 05-110 Rajszew',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070', // ← ZOSTAJE UNSPLASH
    icon: <Award size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  },
  {
    id: 2,
    category: 'ŻEGLARSTWO',
    title: 'Akademia Żeglarska Mila',
    distance: '3 km',
    description: 'Nauka żeglowania, wypożyczalnia sprzętu wodnego, kursy żeglarskie dla początkujących.',
    address: 'Jerzego Szaniawskiego 56, Zegrzynek',
    image: '/images/gallery/aktywnosci/lodka.jpeg', // ← ZMIENIONE
    icon: <Sailboat size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  },
  {
    id: 3,
    category: 'PRZYRODA',
    title: 'Wieliszewskie Łęgi',
    distance: '4 km',
    description: 'Rezerwat przyrody z unikalną fauną i florą. Idealne miejsce na spacery i obserwację ptaków.',
    address: 'Rezerwat przyrody',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070', // ← ZOSTAJE UNSPLASH
    icon: <TreePine size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  },
  {
    id: 4,
    category: 'ROWER',
    title: 'Trasa Rowerowa VM-O',
    distance: '0 km',
    description: 'Trasa Obwodowa tuż obok inwestycji. Idealna na poranny jogging lub wieczorny rower.',
    address: 'Rybaki 11, Zegrze Południowe',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070', // ← ZOSTAJE UNSPLASH
    icon: <Bike size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  },
  {
    id: 5,
    category: 'MARINA',
    title: 'Marina Riva Zegrze',
    distance: '0 km',
    description: 'Prywatna przystań dla mieszkańców z dostępem do łodzi, kajaków i sprzętu wodnego.',
    address: 'Rybaki 11B, Zegrze Południowe',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070', // ← ZOSTAJE UNSPLASH
    icon: <Anchor size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  },
  {
    id: 6,
    category: 'KULTURA',
    title: 'Twierdza Modlin',
    distance: '12 km',
    description: 'Historyczna twierdza napoleońska z XIX wieku. Wycieczki z przewodnikiem i wydarzenia kulturalne.',
    address: 'Twierdza Modlin, Nowy Dwór Mazowiecki',
    image: '/images/gallery/aktywnosci/twierdza.jpeg', // ← ZMIENIONE
    icon: <MapPin size={24} strokeWidth={1.5} />,
    link: 'https://maps.google.com'
  }
];


  // GSAP Animations
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const cards = gridRef.current?.querySelectorAll('.location-card');
          
          if (cards) {
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 60,
                scale: 0.95
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: 'top 75%',
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
    <section className="py-24 lg:py-32 bg-[#f7f6f4] relative overflow-hidden">
      
      {/* ✨ ŻAGLÓWKA - prawy dolny róg - UKRYTA NA MOBILE */}
      <svg className="hidden lg:block absolute bottom-4 right-4 w-72 h-72 opacity-[0.35] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="#4a5a52" strokeWidth="2">
        <path d="M100,160 L60,130 L140,130 Z" strokeWidth="3" />
        <path d="M100,50 L100,130" strokeWidth="3.5" />
        <path d="M100,50 L70,130 M100,50 L130,130" strokeWidth="2.5" />
        <path d="M50,140 Q100,135 150,140" strokeWidth="3" />
        {/* Fale */}
        <path d="M40,145 Q60,140 80,145 T120,145 T160,145" opacity="0.8" strokeWidth="2.5" stroke="#5a6a62" />
        <path d="M35,152 Q55,148 75,152 T115,152 T155,152" opacity="0.6" strokeWidth="2" stroke="#5a6a62" />
        {/* Flaga */}
        <path d="M100,50 L115,55 L100,60" fill="#4a5a52" opacity="0.7" />
      </svg>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="location-card group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with Frame */}
              <div className="relative">
                <div className="relative bg-white p-3 shadow-lg">
                  <div className="relative h-80 overflow-hidden border border-[#e8e6e1]">
                    <img 
                      src={location.image}
                      alt={location.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 border border-[#d4d6ce]">
                      <span className="text-xs tracking-[0.3em] font-light text-[#0f0e0f]">
                        {location.category}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#8a968f] border border-[#d4d6ce]">
                      {location.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-2xl font-light text-[#0f0e0f]" 
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {location.title}
                  </h3>
                  <span className="text-xs text-[#8a968f] font-light">
                    {location.distance}
                  </span>
                </div>
                
                <p className="text-[#6e7a73] leading-relaxed mb-4 font-light">
                  {location.description}
                </p>

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-[#8a968f] mb-6 font-light">
                  <MapPin size={16} className="mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <span>{location.address}</span>
                </div>

                {/* CTA */}
                <a 
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs tracking-[0.25em] py-4 border border-[#8a968f] text-[#8a968f] hover:bg-[#8a968f] hover:text-white transition-all font-light"
                >
                  <span>ZOBACZ NA MAPIE</span>
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// ============================================
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