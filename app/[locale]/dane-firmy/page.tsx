'use client';

import { useState, useEffect } from 'react';
import { Waves, Menu, X, Building2, MapPin, Phone, Mail, FileText } from 'lucide-react';

export default function DaneFirmyPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f1f1ed]">
        <DaneFirmyHero />
        <DaneFirmyContent />
      </main>
      <MinimalFooter />
    </>
  );
}

// ============================================
// NAVIGATION - SKOPIOWANA Z TWOJEJ STRONY
// ============================================
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
    { label: 'APARTAMENTY', href: '/apartamenty' },
    { label: 'REZERWACJA', href: '/rezerwacja' },
    { label: 'AKTYWNOŚCI', href: '/activities' },
    { label: 'GALERIA', href: '/galeria' },
    { label: 'DANE FIRMY', href: '/dane-firmy' }, // ← NOWY
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
                    <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#AB8A62]' : 'bg-white'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Przycisk REZERWUJ */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="/rezerwacja"
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
              </a>
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
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#AB8A62] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/rezerwacja"
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
          </a>
        </div>
      </div>

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
// HERO SECTION
// ============================================
// ============================================
// HERO SECTION - ELEGANT WEBFLOW STYLE
// ============================================
// ============================================
// HERO SECTION - CLEAN & SIMPLE
// ============================================
function DaneFirmyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f6f4] via-white to-[#e8e9e4]">
      
      {/* Subtle Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #C4A77D 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #4A6B5E 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Elegant Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6e7a73 1px, transparent 1px),
            linear-gradient(to bottom, #6e7a73 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content Container - TYLKO TYTUŁ */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#AB8A62] to-transparent"></div>
          <span className="text-[9px] tracking-[0.35em] uppercase font-light text-[#8a968f]">
            Informacje prawne
          </span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#AB8A62] to-transparent"></div>
        </div>

        {/* Main Heading - Ultra Clean */}
        <h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-extralight mb-8 tracking-tight leading-[0.9] text-[#1a4d2e]"
          style={{ 
            fontFamily: 'Playfair Display, serif',
          }}
        >
          Dane Firmy
        </h1>

        {/* Subtle Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#AB8A62]"></div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#AB8A62] to-transparent"></div>
          <div className="w-1 h-1 rounded-full bg-[#AB8A62]/50"></div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-[#AB8A62] to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-[#AB8A62]"></div>
        </div>

        {/* Subheading - KRÓTKIE */}
        <p className="text-base md:text-lg font-light text-[#6e7a73] max-w-xl mx-auto leading-relaxed">
          Informacje identyfikacyjne podmiotu gospodarczego
        </p>

      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[8px] tracking-[0.3em] uppercase text-[#8a968f] font-light">
            Szczegóły poniżej
          </span>
          <svg className="w-4 h-4 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}



// ============================================
// DANE FIRMY - GŁÓWNA SEKCJA
// ============================================
function DaneFirmyContent() {
  const companyData = [
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      label: 'Pełna nazwa firmy',
      value: 'Open One Sp. z o.o. S.k.',
      description: 'Spółka komandytowa z siedzibą w Polsce'
    },
    {
      icon: <FileText size={32} strokeWidth={1.5} />,
      label: 'Numer NIP',
      value: '5242877732',
      description: 'Numer identyfikacji podatkowej'
    },
    {
      icon: <MapPin size={32} strokeWidth={1.5} />,
      label: 'Adres',
      value: (
        <>
          Rybaki 11<br />
          05-130 Zegrze Południowe<br />
          Polska
        </>
      ),
      description: 'Adres siedziby działalności'
    },
    {
      icon: <Phone size={32} strokeWidth={1.5} />,
      label: 'Telefon kontaktowy',
      value: '+48 510 038 038',
      description: 'Dostępni 24/7 dla rezerwacji',
      link: 'tel:+48510038038'
    },
    {
      icon: <Mail size={32} strokeWidth={1.5} />,
      label: 'Adres e-mail',
      value: 'wynajem@rivazegrze.pl',
      description: 'Odpowiadamy w ciągu 24h',
      link: 'mailto:wynajem@rivazegrze.pl'
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] font-light mb-4 block">
            Wymagane przez przepisy
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light mb-6" 
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#4A6B5E'
            }}
          >
            Dane Identyfikacyjne
          </h2>
          <p className="text-[#6e7a73] font-light max-w-2xl mx-auto leading-relaxed">
            Poniżej znajdują się kompletne dane firmy prowadzącej działalność gospodarczą pod marką Riva Zegrze
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companyData.map((item, idx) => (
            <div 
              key={idx}
              className="group"
            >
              {/* Card with Frame */}
              <div className="relative bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="bg-[#f7f6f4] p-8 border border-[#e8e6e1] h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#C4A77D] rounded-full mb-6 group-hover:bg-[#C4A77D] transition-all duration-300">
                    <div className="text-[#C4A77D] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#AB8A62] mb-3 font-light">
                    {item.label}
                  </p>
                  
                  {/* Value */}
                  <div 
                    className="text-xl font-light text-[#1a4d2e] mb-4 min-h-[4rem] flex items-center"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="hover:text-[#AB8A62] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs text-[#8a968f] font-light mt-auto">
                    {item.description}
                  </p>
                  
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C4A77D] opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-[#e8e6e1] p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#AB8A62]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-light text-[#4A6B5E] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Informacje dodatkowe
                </h3>
                <p className="text-sm text-[#6e7a73] font-light leading-relaxed">
                  Powyższe dane są zgodne z aktualnym wpisem do Krajowego Rejestru Sądowego. 
                  W sprawach związanych z rezerwacją lub pobytem prosimy o kontakt za pomocą podanych danych kontaktowych.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================
// FOOTER - SKOPIOWANA Z TWOJEJ STRONY
// ============================================
function MinimalFooter() {
  return (
    <footer className="bg-[#f1f1ed] text-[#1a4d2e] py-20 border-t border-[#d4d6ce]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Waves className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
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
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Odkryj
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Apartamenty', href: '/apartamenty' },
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
              <li className="flex items-start gap-3 text-sm text-[#6e7a73] font-light">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" strokeWidth={1.5} />
                <span>
                  Rybaki 11<br />
                  05-130 Zegrze Południowe
                </span>
              </li>
              <li>
                <a href="tel:+48510038038" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors">
                  <Phone className="w-5 h-5 text-[#AB8A62]" strokeWidth={1.5} />
                  <span>+48 510 038 038</span>
                </a>
              </li>
              <li>
                <a href="mailto:wynajem@rivazegrze.pl" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors">
                  <Mail className="w-5 h-5 text-[#AB8A62]" strokeWidth={1.5} />
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
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#d4d6ce] pt-8">
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
