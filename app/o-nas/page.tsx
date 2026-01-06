'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Award, 
  Users, 
  Heart, 
  Sparkles, 
  Waves, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X 
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroAbout />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <LegacySection />
        <SplitCTASection/>
        <ParadiseSection />
        <RivaInvitationSection />
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

// Hero Section z GSAP Animation - FULL RESPONSIVE CONTROL
function HeroAbout() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Jarallax Parallax
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { jarallax } = await import('jarallax');
          jarallax(heroRef.current, { speed: 0.6 });
        } catch (error) {
          console.error('Jarallax error:', error);
        }
      }
    };
    initParallax();

    // GSAP Animation
    if (titleRef.current && subtitleRef.current && descriptionRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(subtitleRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from(chars, {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformOrigin: '0% 50% -50',
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      .from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6');
    }
  }, []);

  // Dodaj typ dla parametru
  const splitTextToChars = (text: string) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className="char inline-block"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={heroRef} 
      className="jarallax relative h-screen flex items-center justify-center overflow-hidden" 
      data-jarallax 
      data-speed="0.6"
    >
      <div 
        className="jarallax-img absolute inset-0 w-full h-full" 
        style={{ 
          backgroundImage: 'url(/images/about/hero/T3S-RivaZegrze-0620-m.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/50 to-gray-900/60" />
      
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
        
        {/* Subtitle - Responsive */}
        <span 
          ref={subtitleRef}
          className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase opacity-60 mb-8 sm:mb-10 block font-light"
        >
          Poznaj Riva Zegrze
        </span>
        
        {/* Main Title - Zawsze 2 linie, responsive size */}
        <h1 
          ref={titleRef}
          className="text-[clamp(2.5rem,8vw,6rem)] font-light mb-10 sm:mb-12 leading-[1.1] tracking-tight whitespace-nowrap" 
          style={{ 
            fontFamily: 'Playfair Display, serif',
            perspective: '1000px'
          }}
        >
          <span className="block">
            {splitTextToChars('Twoje miejsce')}
          </span>
          <span className="block">
            {splitTextToChars('do wypoczynku')}
          </span>
        </h1>
        
        {/* Description - Responsive, zawsze 2 linie */}
        <p 
          ref={descriptionRef}
          className="text-[clamp(0.875rem,2vw,1rem)] font-light leading-relaxed max-w-xl mx-auto opacity-75"
        >
          <span className="block sm:inline">Kameralny obiekt nad Jeziorem Zegrzyńskim,</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">stworzony z myślą o komforcie i bliskości natury.</span>
        </p>
        
      </div>
    </section>
  );
}



// Story Section - Simplified with 3 Equal Images (Without AOS)
function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f1f1ed]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header with Lake Icon Outline */}
        <div className="text-center mb-16">
          {/* Lake/Wave Icon Outline */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-12 h-12 text-[#8a968f]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>

          {/* Two Text Lines */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#4a6b5e] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Twoje miejsce<br />
            blisko Warszawy
          </h2>
        </div>

        {/* 3 Equal Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Image 1 */}
          <div className="relative h-[350px] lg:h-[400px] overflow-hidden group">
            <img
              src="/images/about/story/T3S-RivaZegrze-3158-m.jpg"
              alt="Interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-[350px] lg:h-[400px] overflow-hidden group">
            <img
              src="/images/about/story/T3S-RivaZegrze-4168-m.jpg"
              alt="Bedroom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-[350px] lg:h-[400px] overflow-hidden group">
            <img
              src="/images/about/story/T3S-RivaZegrze-0412-m.jpg"
              alt="Pool"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



// Values Section - Image Left, Text Right with GOLDEN Signature
function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          
          {/* LEFT - Image with Frame */}
          <div className="relative">
            <div className="relative bg-[#d4d6ce] p-4">
              <div className="relative bg-white p-3">
                <div className="relative h-[450px] lg:h-[550px] overflow-hidden">
                  <img
                    src="/images/about/values/wnetrze apartamentu.jpeg"
                    alt="Riva Zegrze Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#AB8A62]"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#AB8A62]"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#AB8A62]"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#AB8A62]"></div>
            </div>
          </div> 

          {/* RIGHT - Content with GOLDEN Signature */}
          <div className="space-y-8">
            
            {/* Label - Mały nagłówek */}
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#8a968f] font-light block">
              Blisko natury, blisko Warszawy
            </span>

            {/* Heading - Duży nagłówek */}
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-light text-[#4a6b5e] leading-[1.2]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Twoje ulubione miejsce<br />
              nad Jeziorem Zegrzyńskim
            </h2>


            {/* Description */}
            <div className="space-y-4 text-[#6e7a73] text-[15px] leading-relaxed font-light">
              <p>
                Riva Zegrze to przestrzeń stworzona z myślą o odpoczynku od codzienności – nad 
                wodą, w spokojnym otoczeniu i z komfortem, który pozwala naprawdę się zatrzymać.
              </p>
              <p>
                To miejsce, do którego chce się wracać na weekend, wakacje i każdą chwilę poza 
                miastem.
              </p>
            </div>

            {/* GOLDEN Artistic Signature - "Riva Zegrze" */}
            <div className="pt-6">
              <div 
                className="signature-text text-5xl text-[#AB8A62] inline-block relative"
                style={{ 
                  fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
                  transform: 'rotate(-3deg)',
                  letterSpacing: '0.05em',
                  textShadow: '0 2px 8px rgba(171, 138, 98, 0.3)'
                }}
              >
                Riva Zegrze
                {/* Golden underline */}
                <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#AB8A62] to-transparent opacity-60"></div>
              </div>
            </div>

          </div>

        </div>

      {/* Bottom Section - Separator */}
<div className="text-center pt-16 border-t border-[#d4d6ce]">
  <div className="flex justify-center">
    <div className="w-16 h-px bg-[#4a6b5e]/50" />
  </div>
</div>

</div>


      {/* CSS for golden signature animation */}
      <style jsx>{`
        .signature-text {
          animation: fadeInSignature 1.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInSignature {
          0% {
            opacity: 0;
            transform: rotate(-3deg) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: rotate(-3deg) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}


// Team Section - 3 Cards: Basen, Siłownia, Marina
function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/about/team/T3S-RivaZegrze-RG-3885-m.jpg',
      category: 'Basen',
      title: 'Relaks przez cały rok',
      description: 'Kryty, podgrzewany basen dostępny dla gości niezależnie od pogody i pory roku.'
    },
    {
      image: '/images/about/team/2.jpg',
      category: 'Siłownia',
      title: 'Aktywność na Twoich zasadach',
      description: 'Nowoczesna siłownia pozwala zadbać o formę i dobre samopoczucie bez opuszczania obiektu.'
    },
    {
      image: '/images/about/team/T3S-RivaZegrze-RG-3669-m.jpg',
      category: 'Marina',
      title: 'Bezpośrednio nad wodą',
      description: 'Prywatna marina i dostęp do jeziora umożliwiają pełne korzystanie z uroków wypoczynku nad wodą.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center py-20">
      
      {/* Split Background - 50/50 */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white"></div>
        <div className="w-1/2 bg-[#d4d6ce]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Strefa relaksu i aktywnego wypoczynku
          </h2>
        </div>

        {/* Centered Slider */}
        <div className="max-w-4xl mx-auto">
          
          {/* Image Slider */}
          <div className="relative mb-12">
            
            {/* Slider Container - Clean */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-2xl">
              
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Glass Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            {/* Slide Indicators Below Image */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-12 bg-[#AB8A62]' 
                      : 'w-8 bg-[#d4d6ce] hover:bg-[#AB8A62]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Text Content Below Slider - Centered */}
          <div className="text-center max-w-2xl mx-auto space-y-6">
            
            {/* Category Label */}
            <span 
              className={`text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block transition-all duration-700 ${
                currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {slides[currentSlide].category}
            </span>

            {/* Title - Animated */}
            <h3
              className={`text-3xl lg:text-4xl font-light text-[#1a4d2e] leading-tight transition-all duration-700 ${
                currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {slides[currentSlide].title}
            </h3>

            {/* Description - Animated */}
            <p className={`text-[#6e7a73] text-[15px] leading-relaxed transition-all duration-700 delay-100 ${
              currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {slides[currentSlide].description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}



// Legacy Section - Udogodnienia na miejscu
function LegacySection() {
  const features = [
    {
      iconPath: '/icons/swimming-pool (1).svg',
      title: 'Basen',
      description: 'Kryty, podgrzewany basen dostępny przez cały rok, niezależnie od pogody.'
    },
    {
      iconPath: '/icons/dumbbell (1).svg',
      title: 'Siłownia',
      description: 'Nowoczesna siłownia umożliwiająca aktywny wypoczynek bez wychodzenia z obiektu.'
    },
    {
      iconPath: '/icons/balcony.svg',
      title: 'Tarasy',
      description: 'Prywatne tarasy i balkony z widokiem na wodę lub zieleń zapewniają komfort i poczucie prywatności.'
    },
    {
      iconPath: '/icons/surf-board.svg',
      title: 'Sprzęt wodny',
      description: 'Rowerek wodny, deski SUP oraz kajaki dostępne dla gości na terenie obiektu.'
    },
    {
      iconPath: '/icons/beach-volleyball.svg',
      title: 'Siatkówka',
      description: 'Boisko do siatkówki plażowej sprzyjające aktywnemu spędzaniu czasu nad jeziorem.'
    },
    {
      iconPath: '/icons/parking.svg',
      title: 'Parking',
      description: 'Bezpłatne miejsca postojowe przed budynkiem oraz możliwość rezerwacji miejsca w garażu.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          
          {/* Mały nagłówek */}
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#8a968f] font-light block mb-4">
            Udogodnienia na miejscu
          </span>

          {/* Duży nagłówek */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#4a6b5e]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wszystko, czego potrzebujesz<br className="hidden sm:block" />
            do udanego wypoczynku
          </h2>
        </div>

        {/* Features Grid - 3 columns with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative text-center p-8 lg:p-10 transition-all duration-300 group border-b border-[#d4d6ce] md:border-b-0"
            >
              {/* Vertical Divider Line - Right Side (Desktop) */}
              {(index + 1) % 3 !== 0 && index !== features.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-[#d4d6ce]"></div>
              )}

              {/* Vertical Divider Line - Right Side (Tablet) */}
              {(index + 1) % 2 !== 0 && index !== features.length - 1 && (
                <div className="hidden md:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-[#d4d6ce]"></div>
              )}

              {/* Icon - Złoty SVG BEZ FILTRA */}
              <div className="flex justify-center mb-6">
                <img 
                  src={feature.iconPath} 
                  alt={feature.title}
                  className="w-12 h-12"
                  // ❌ USUNIĘTY FILTR - ikony są już złote!
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-light text-[#1a4d2e] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#6e7a73] text-[15px] leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}




// Split CTA Section - Rezerwuj bezpośrednio
function SplitCTASection() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[700px]">
      
      <div className="grid lg:grid-cols-2 h-full">
        
        {/* LEFT - Eleganckie zielono-szare tło z tekstem */}
        <div className="bg-[#8a9b8e] flex items-center justify-center px-8 lg:px-20 xl:px-24 h-full">
          <div className="max-w-xl space-y-8">
            
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/60 font-light block">
              Rezerwuj bezpośrednio
            </span>

            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Najlepsza cena przy<br />
              rezerwacji na naszej<br />
              stronie
            </h2>

            <p className="text-white/80 text-[15px] lg:text-base leading-relaxed font-light max-w-md">
              Zarezerwuj pobyt bezpośrednio u nas i uniknij prowizji pośredników. 
              Ten sam komfort, ta sama dostępność — taniej i równie wygodnie, 
              bez dodatkowych opłat.
            </p>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              
              <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

              <div className="space-y-3">
                <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-light mb-1">
                    Zadzwoń
                  </div>
                  <a 
                    href="tel:+48510038038"
                    className="text-sm text-white/95 font-light hover:text-white transition-colors"
                  >
                    +48 510 038 038
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-light mb-1">
                    Riva Zegrze
                  </div>
                  <div className="text-sm text-white/95 font-light leading-snug">
                    ul. Rybaki 11,<br />
                    Zegrze Południowe
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT - Zdjęcie (POPRAWIONE NA MOBILE) */}
        <div className="relative h-[45vh] sm:h-[55vh] lg:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-10 pointer-events-none" />
          
          <img
            src="/images/about/cta/T3S-RivaZegrze-3311-m.jpg"
            alt="Riva Zegrze - Rezerwuj bezpośrednio"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}




// Paradise Features Section - Apartamenty stworzone do wypoczynku
function ParadiseSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Header - Light & Elegant */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#4a6b5e] leading-relaxed mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Apartamenty stworzone<br />
            do wypoczynku nad wodą
          </h2>
          <p className="text-[15px] text-[#6e7a73] mt-6 font-light leading-relaxed">
            Przemyślana przestrzeń, dostęp do atrakcji na miejscu i bliskość natury sprawiają, 
            że pobyt w Riva Zegrze jest komfortowy i pełen możliwości aktywnego wypoczynku – 
            zarówno dla rodzin, jak i osób szukających relaksu.
          </p>
        </div>

        {/* First Row - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          {/* LEFT - Image with Decorative Frame */}
          <div className="relative">
            {/* Decorative chevron arrows on left */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 opacity-30">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>

            {/* Image with Premium Frame */}
            <div className="relative bg-[#e8e6e1] p-6 shadow-xl">
              <div className="relative bg-white p-4">
                <div className="relative h-[350px] lg:h-[420px] overflow-hidden">
                  <img
                    src="/images/about/paradise/T3S-RivaZegrze-3334-m.jpg"
                    alt="Rodzinny wypoczynek nad jeziorem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Corner decorations - złote */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#AB8A62]"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#AB8A62]"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#AB8A62]"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#AB8A62]"></div>
            </div>
          </div>

          {/* RIGHT - Content Box with Border */}
          <div className="relative">
            <div className="border border-[#d4d6ce] p-10 lg:p-12 bg-white">
              <h3
                className="text-2xl lg:text-3xl font-light text-[#1a4d2e] mb-6 leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Rodzinny wypoczynek
              </h3>
              <div className="space-y-4 text-[#6e7a73] text-[15px] leading-relaxed font-light">
                <p>
                  Dostęp do basenu, prywatnej plaży, boiska do siatkówki oraz sprzętu wodnego, 
                  w tym kajaków, desek SUP i rowerka wodnego, pozwala dzieciom aktywnie spędzać 
                  czas na świeżym powietrzu.
                </p>
                <p>
                  Przestrzeń obiektu sprzyja bezpiecznej zabawie, a bliskość jeziora i terenów 
                  zielonych daje rodzicom poczucie spokoju i komfortu.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Second Row - Text Left, Image Right (Mirrored) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT - Content Box with Border */}
          <div className="relative order-2 lg:order-1">
            <div className="border border-[#d4d6ce] p-10 lg:p-12 bg-white">
              <h3
                className="text-2xl lg:text-3xl font-light text-[#1a4d2e] mb-6 leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Komfort i przestrzeń
              </h3>
              <div className="space-y-4 text-[#6e7a73] text-[15px] leading-relaxed font-light">
                <p>
                  Nowoczesne apartamenty z oddzielną sypialnią, funkcjonalnym salonem i prywatnym 
                  tarasem zapewniają wygodę podczas krótkich pobytów i dłuższego wypoczynku.
                </p>
                <p>
                  Starannie zaprojektowane wnętrza oraz dostęp do strefy rekreacyjnej pozwalają 
                  w pełni korzystać z pobytu nad Jeziorem Zegrzyńskim.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - Image with Decorative Frame */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative chevron arrows on right */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 opacity-30">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
              <svg className="w-8 h-8 text-[#AB8A62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Image with Premium Frame */}
            <div className="relative bg-[#e8e6e1] p-6 shadow-xl">
              <div className="relative bg-white p-4">
                <div className="relative h-[350px] lg:h-[420px] overflow-hidden">
                  <img
                    src="/images/about/paradise/T3S-RivaZegrze-3500-m.jpg"
                    alt="Komfort i przestrzeń apartamentów"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Corner decorations - złote */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#AB8A62]"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#AB8A62]"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#AB8A62]"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#AB8A62]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


function RivaInvitationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animacja lewej karty
      if (leftCardRef.current) {
        tl.from(leftCardRef.current, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      }

      // Animacja prawego zdjęcia
      if (rightImageRef.current) {
        tl.from(rightImageRef.current, {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '<');
      }

      // Animacja tytułu
      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5');
      }

      // Animacja podtytułu
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          y: 15,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');
      }

      // Animacja podpisu
      if (signatureRef.current) {
        tl.from(signatureRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: 'power2.out'
        }, '-=0.3');
      }

      // Animacja ikon social
      if (socialsRef.current) {
        const icons = socialsRef.current.querySelectorAll('.social-icon');
        if (icons.length > 0) {
          tl.from(icons, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          }, '-=0.5');
        }
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-20 lg:py-32 bg-white overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Główny tytuł sekcji */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl font-light text-[#4a6b5e] mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Odkryj Raj nad Wodą
            </h2>
            <p className="text-sm text-[#8a968f] tracking-[0.3em] uppercase">
              Riva Zegrze • Jezioro Zegrzyńskie
            </p>
          </div>

          {/* Grid z dwoma kartami */}
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* LEWA KARTA - zdjęcie + tekst poniżej */}
            <div ref={leftCardRef} className="bg-[#e8e6e0]">
              
              {/* Zdjęcie */}
              <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                <img
                  src="/images/about/invitation/T3S-RivaZegrze-0610-m.jpg"
                  alt="Jezioro Zegrzyńskie"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tekst pod zdjęciem */}
              <div className="p-8 lg:p-12">
                
                {/* Tytuł */}
                <h3 
                  ref={titleRef}
                  className="text-2xl lg:text-3xl font-light text-[#1a4d2e] mb-4 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Odkryj Prawdziwy<br />
                  Raj nad Wodą
                </h3>
                
                {/* Opis */}
                <p 
                  ref={subtitleRef}
                  className="text-sm lg:text-base text-[#6e7a73] leading-relaxed mb-8"
                >
                  Luksusowe apartamenty przy samej wodzie z prywatną plażą, 
                  basenem i zapierającymi dech w piersiach widokami na 
                  Jezioro Zegrzyńskie.
                </p>
                
                {/* PODPIS "Riva Zegrze" - czcionka kaligraficzna */}
                <div 
                  ref={signatureRef}
                  className="signature-container mb-8"
                >
                  <div className="signature-text">
                    Riva Zegrze
                  </div>
                </div>

                {/* Social Media Icons - CIEMNOZIELONE (WIDOCZNE) */}
<div 
  ref={socialsRef}
  className="flex gap-4"
>
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/rivazegrze/" 
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon w-12 h-12 rounded-full bg-[#1a4d2e] flex items-center justify-center hover:bg-[#AB8A62] transition-all duration-300 shadow-lg"
    aria-label="Instagram Riva Zegrze"
  >
    <Instagram className="w-6 h-6 text-white" strokeWidth={2} />
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/rivazegrze" 
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon w-12 h-12 rounded-full bg-[#1a4d2e] flex items-center justify-center hover:bg-[#AB8A62] transition-all duration-300 shadow-lg"
    aria-label="Facebook Riva Zegrze"
  >
    <Facebook className="w-6 h-6 text-white" strokeWidth={2} />
  </a>

  {/* Email */}
  <a 
    href="mailto:kontakt@rivazegrze.pl" 
    className="social-icon w-12 h-12 rounded-full bg-[#1a4d2e] flex items-center justify-center hover:bg-[#AB8A62] transition-all duration-300 shadow-lg"
    aria-label="Email kontakt@rivazegrze.pl"
  >
    <Mail className="w-6 h-6 text-white" strokeWidth={2} />
  </a>
</div>

                
              </div>
            </div>
            
            {/* PRAWA KARTA - samo zdjęcie */}
            <div 
              ref={rightImageRef}
              className="relative h-[500px] lg:h-full overflow-hidden group"
            >
              <img
                src="/images/about/invitation/T3S-RivaZegrze-3090-m.jpg"
                alt="Riva Zegrze apartament"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
          </div>
          
        </div>
      </section>

      {/* Import czcionki Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
      `}</style>

      {/* CSS dla podpisu */}
      <style jsx>{`
        .signature-container {
          position: relative;
          overflow: visible;
        }

        .signature-text {
          font-family: 'Allura', cursive;
          font-size: 3rem;
          font-weight: 400;
          color: #AB8A62;
          letter-spacing: 0.05em;
          line-height: 1.3;
          position: relative;
          display: inline-block;
          transform: rotate(-3deg);
          white-space: nowrap;
          padding: 0 10px;
        }

        .signature-text::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 5%;
          width: 90%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            #AB8A62 30%,
            #AB8A62 70%,
            transparent
          );
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .signature-text {
            font-size: 2.5rem;
          }
        }

        .signature-container:hover .signature-text {
          transform: rotate(-3deg) translateY(-3px);
          transition: transform 0.3s ease;
        }

        .signature-text {
          text-shadow: 
            1px 1px 2px rgba(171, 138, 98, 0.15),
            0 0 10px rgba(171, 138, 98, 0.08);
          filter: drop-shadow(0 3px 6px rgba(171, 138, 98, 0.12));
        }
      `}</style>
    </>
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
