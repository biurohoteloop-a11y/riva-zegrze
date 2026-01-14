'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Navigation as SwiperNavigation, 
  Pagination, 
  EffectFade, 
  Autoplay 
} from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { 
  Waves, Users, Bed, Maximize, Wifi, Coffee, 
  Tv, Wind, Bath, Utensils, Check, Star, Quote, 
  ChevronLeft, ChevronRight, Calendar, MapPin, 
  Sparkles, Eye, Phone, Mail, Instagram, Facebook,
  Droplets, Dumbbell
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'react-photo-view/dist/react-photo-view.css';

// ============================================
// DANE APARTAMENTU C1
// ============================================
const apartmentData = {
  name: 'Apartament C1',
  tagline: 'Nowoczesny apartament z tarasem i prywatnym ogródkiem',
  subtitle: 'Położony bezpośrednio nad Jeziorem Zegrzyńskim',
  price: {
    from: 630,
    currency: 'zł',
    period: 'noc'
  },
  specs: {
    size: '38 m²',
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    floor: 'Parter',
    terrace: '15 m²',
    garden: 'Prywatny'
  },
  
  description: `Nowoczesny apartament z prywatnym tarasem i ogródkiem, położony bezpośrednio 
    nad brzegiem Jeziora Zegrzyńskiego. Idealny dla par oraz rodzin ceniących komfort, 
    przestrzeń i bezpośredni kontakt z naturą.`,
  
  aboutProperty: {
    title: 'O obiekcie',
    paragraphs: [
      'Apartamenty położone są bezpośrednio nad Jeziorem Zegrzyńskim, w spokojnej części Zegrza Południowego. To miejsce stworzone z myślą o wypoczynku blisko natury, z dala od miejskiego zgiełku. Kameralny charakter obiektu sprzyja relaksowi i spokojnemu pobytowi o każdej porze roku.',
      
      'Nowoczesne wnętrza, funkcjonalne układy i dostęp do strefy rekreacyjnej sprawiają, że apartamenty sprawdzą się zarówno na krótszy wyjazd, jak i dłuższy pobyt. Dogodna lokalizacja pozwala łatwo połączyć wypoczynek nad wodą z szybkim dojazdem do Warszawy.'
    ],
    features: [
      {
        icon: MapPin,
        title: 'Lokalizacja',
        description: 'Apartamenty położone bezpośrednio nad Jeziorem Zegrzyńskim, w spokojnej części Zegrza Południowego.'
      },
      {
        icon: Droplets,
        title: 'Basen',
        description: 'Na terenie obiektu dostępna jest strefa rekreacyjna z krytym, podgrzewanym basenem.'
      },
      {
        icon: Dumbbell,
        title: 'Siłownia',
        description: 'Dostęp do w pełni wyposażonej siłowni dla wszystkich gości obiektu.'
      }
    ]
  },
  
  highlights: [
    'Bezpośredni dostęp do jeziora',
    'Prywatny taras z meblami ogrodowymi',
    'Nowoczesna zabudowa kuchenna',
    'Panoramiczne przeszklenia',
    'Kryty podgrzewany basen',
    'Dostęp do siłowni'
  ],

  amenities: [
    { icon: Wifi, label: 'WiFi', description: 'Szybki internet światłowodowy' },
    { icon: Tv, label: 'Smart TV', description: '55" z Netflix i HBO' },
    { icon: Coffee, label: 'Kuchnia', description: 'W pełni wyposażona' },
    { icon: Wind, label: 'Klimatyzacja', description: 'Chłodzenie i ogrzewanie' },
    { icon: Bath, label: 'Łazienka', description: 'Premium kosmetyki' },
    { icon: Utensils, label: 'Naczynia', description: 'Komplet sztućców i talerzy' },
    { icon: MapPin, label: 'Taras', description: '15 m² z leżakami' },
    { icon: Sparkles, label: 'Ogródek', description: 'Prywatna przestrzeń zielona' },
  ],

  gallery: [
    '/images/rooms/t3s-rivazegrze-3107-m.jpg',
    '/images/rooms/t3s-rivazegrze-3500-m.jpg',
    '/images/rooms/img_3650.jpg',
    '/images/rooms/img_3622.jpg',
    '/images/rooms/img_3620.jpg',
    '/images/rooms/d4.jpg',
  ],

  
  // ✅ ZAKTUALIZOWANA GALERIA OKOLICY - 6 ZDJĘĆ
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
      name: 'Anna Kowalska',
      date: 'Lipiec 2024',
      rating: 5,
      comment: 'Przepiękne miejsce! Apartament był czysty, przestronny i świetnie wyposażony. Widok na jezioro zapiera dech w piersiach. Polecam każdemu!',
      avatar: 'AK'
    },
    {
      name: 'Marek Nowak',
      date: 'Czerwiec 2024',
      rating: 5,
      comment: 'Idealne miejsce na weekend. Cisza, spokój i piękna przyroda. Właściciele bardzo pomocni. Na pewno wrócimy!',
      avatar: 'MN'
    },
    {
      name: 'Katarzyna Wiśniewska',
      date: 'Maj 2024',
      rating: 5,
      comment: 'Najlepszy apartament w okolicy! Blisko Warszawy, a czujesz się jak na końcu świata. Wyposażenie na najwyższym poziomie.',
      avatar: 'KW'
    }
  ]
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function ApartmentC1Page() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f7f6f4]">
        <HeroGallery />
        <ApartmentDetails />
        <AmenitiesSection />
    
        <SurroundingsGallery />
        <AvailabilityCalendar />
        <ReviewsSection />
        <CTAWithFooter />
      </main>
      
    </>
  );
}

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'STRONA GŁÓWNA', href: '/' },
    { label: 'O NAS', href: '/about' },
    { label: 'APARTAMENTY', href: '/apartamenty' },
    { label: 'AKTYWNOŚCI', href: '/activities' },
    { label: 'GALERIA', href: '/galeria' },
    { label: 'KONTAKT', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          <a href="/" className="flex items-center gap-3 group">
            <Waves 
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-[#555e59]' : 'text-white'
              }`}
              strokeWidth={1}
            />
            <span 
              className={`text-2xl font-light tracking-[0.15em] transition-colors ${
                isScrolled ? 'text-[#0f0e0f]' : 'text-white'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              RIVA ZEGRZE
            </span>
          </a>
          
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <a 
                  href={item.href} 
                  className={`text-xs tracking-[0.2em] font-light transition-colors relative py-2 ${
                    isScrolled ? 'text-[#6e7a73] hover:text-[#0f0e0f]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#555e59]' : 'bg-white'
                  }`} />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="hidden lg:flex items-center gap-6">
            <button 
              className={`flex items-center gap-2 text-xs tracking-[0.2em] px-6 py-3 border transition-all duration-300 ${
                isScrolled 
                  ? 'border-[#555e59] text-[#555e59] hover:bg-[#555e59] hover:text-white' 
                  : 'border-white/60 text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>REZERWUJ</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// 1. HERO GALLERY - BEZ SCRAMBLE TEXT
// ============================================
function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          // Badge animation
          gsap.fromTo(
            '.hero-badge',
            { opacity: 0, scale: 0.8 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 0.8, 
              ease: 'back.out(1.7)',
              delay: 0.2
            }
          );

          // Title animation
          gsap.fromTo(
            '.hero-title',
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              ease: 'power2.out',
              delay: 0.4
            }
          );

          // Tagline animation
          gsap.fromTo(
            '.hero-tagline',
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.7, 
              ease: 'power2.out',
              delay: 0.6
            }
          );

          // Subtitle animation
          gsap.fromTo(
            '.hero-subtitle',
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.7, 
              ease: 'power2.out',
              delay: 0.8
            }
          );

          // Specs cards stagger
          gsap.fromTo(
            '.spec-card',
            { opacity: 0, y: 30, scale: 0.95 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 1.0
            }
          );

          // Price box
          gsap.fromTo(
            '.price-box',
            { opacity: 0, x: -30 },
            { 
              opacity: 1, 
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
              delay: 1.4
            }
          );

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
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#8a968f] mb-8">
          <a href="/" className="hover:text-[#4a6b5e] transition-colors">Strona główna</a>
          <span>/</span>
          <a href="/apartamenty" className="hover:text-[#4a6b5e] transition-colors">Apartamenty</a>
          <span>/</span>
          <span className="text-[#4a6b5e]">Apartament C1</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="order-2 lg:order-1">
            
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d4d6ce] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#4a6b5e]" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.2em] text-[#4a6b5e] uppercase">Premium</span>
            </div>

            <h1 
              className="hero-title text-5xl lg:text-6xl xl:text-7xl font-light text-[#4a6b5e] mb-4 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {apartmentData.name}
            </h1>

            <p className="hero-tagline text-xl text-[#4a6b5e] font-light mb-2 leading-relaxed">
              {apartmentData.tagline}
            </p>

            <p className="hero-subtitle text-base text-[#8a968f] font-light mb-8 leading-relaxed">
              {apartmentData.subtitle}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Maximize, label: 'Rozmiar', value: apartmentData.specs.size },
                { icon: Users, label: 'Goście', value: `${apartmentData.specs.guests} Osoby` },
                { icon: Bed, label: 'Sypialnie', value: `${apartmentData.specs.bedrooms} Sypialnia` },
                { icon: Bath, label: 'Łazienki', value: `${apartmentData.specs.bathrooms} Łazienka` },
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

            {/* Price Box */}
            <div className="price-box flex items-baseline gap-3 mb-8 p-6 bg-white border-l-4 border-[#4a6b5e]">
              <span className="text-sm tracking-[0.2em] text-[#8a968f] uppercase">od</span>
              <span className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {apartmentData.price.from}
              </span>
              <span className="text-lg text-[#6e7a73]">{apartmentData.price.currency} / {apartmentData.price.period}</span>
            </div>

          </div>

          {/* RIGHT SIDE - Gallery */}
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
                            alt={`${apartmentData.name} - zdjęcie ${idx + 1}`}
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

                {/* Thumbnails */}
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
                        alt={`Miniatura ${idx + 1}`}
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
// 2. APARTMENT DETAILS - BEZ SCRAMBLE TEXT
// ============================================
function ApartmentDetails() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(
            '.section-heading',
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
              }
            }
          );

          gsap.fromTo(
            '.highlight-item',
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              }
            }
          );

          gsap.fromTo(
            '.feature-card',
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.features-grid',
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
                O apartamencie
              </h2>
              <p className="text-base text-[#6e7a73] leading-relaxed font-light">
                {apartmentData.description}
              </p>
            </div>

            {/* Najważniejsze atuty */}
            <div>
              <h3 className="text-xl font-light text-[#0f0e0f] mb-6">
                Najważniejsze atuty
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {apartmentData.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item flex items-start gap-3 p-4 bg-[#f7f6f4] border-l-2 border-[#555e59]">
                    <Check className="w-5 h-5 text-[#555e59] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-[#6e7a73]">{highlight}</span>
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
                {apartmentData.aboutProperty.title}
              </h2>
              
              <div className="space-y-4 mb-8">
                {apartmentData.aboutProperty.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-[#6e7a73] leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features Grid */}
              <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {apartmentData.aboutProperty.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-card group bg-[#f7f6f4] p-6 border border-[#d4d6ce] hover:border-[#555e59] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-[#d4d6ce] flex items-center justify-center mb-4 group-hover:border-[#AB8A62] group-hover:bg-gradient-to-br group-hover:from-[#f4e4c1] group-hover:to-[#AB8A62] transition-all">
                      <feature.icon className="w-6 h-6 text-[#555e59] group-hover:text-[#8b6914] transition-colors" strokeWidth={1} />
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

          {/* RIGHT - Details Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#f7f6f4] p-8 border border-[#d4d6ce]">
              
              <h3 
                className="text-2xl font-light text-[#4a6b5e] mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Szczegóły
              </h3>

              <div className="space-y-4">
                {[
                  { label: 'Powierzchnia', value: apartmentData.specs.size },
                  { label: 'Max gości', value: `${apartmentData.specs.guests} osoby` },
                  { label: 'Sypialnie', value: apartmentData.specs.bedrooms },
                  { label: 'Łazienki', value: apartmentData.specs.bathrooms },
                  { label: 'Piętro', value: apartmentData.specs.floor },
                  { label: 'Taras', value: apartmentData.specs.terrace },
                  { label: 'Ogródek', value: apartmentData.specs.garden },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-[#d4d6ce] last:border-0">
                    <span className="text-sm text-[#8a968f] uppercase tracking-wide">{item.label}</span>
                    <span className="text-sm text-[#0f0e0f] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


// ============================================
// 3. AMENITIES SECTION - PROSTE IKONY OUTLINE
// ============================================
function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const items = sectionRef.current.querySelectorAll('.amenity-item');
          
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f7f6f4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            Udogodnienia
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wszystko, czego potrzebujesz
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {apartmentData.amenities.map((amenity, idx) => (
            <div 
              key={idx} 
              className="amenity-item group flex flex-col items-center text-center gap-3 transition-all duration-300"
            >
              {/* Prosta ikona OUTLINE z kolorem #AB8A62 */}
              <amenity.icon 
                className="w-12 h-12 text-[#AB8A62] group-hover:scale-110 transition-transform" 
                strokeWidth={1}
              />
              
              {/* Nazwa */}
              <h3 className="text-sm font-light text-[#0f0e0f] tracking-wide group-hover:text-[#AB8A62] transition-colors">
                {amenity.label}
              </h3>
              
              {/* Opis */}
              <p className="text-xs text-[#8a968f] font-light leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#AB8A62] to-transparent" />
        </div>
      </div>
    </section>
  );
}


// ============================================
function SurroundingsGallery() {
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
              Okolica
            </span>
            <h2 
              className="text-4xl lg:text-5xl font-light text-[#4a6b5e]" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Odkryj piękno Jeziora Zegrzyńskiego
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
                    alt={`Okolica Riva Zegrze - zdjęcie ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <Eye className="w-5 h-5" strokeWidth={1.5} />
                      <span className="text-sm font-light">Zobacz pełny obraz</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs text-[#4a6b5e] font-medium">
                      {idx + 1} / {apartmentData.surroundingsGallery.length}
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
            aria-label="Zamknij galerię"
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
            aria-label="Poprzednie zdjęcie"
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
            aria-label="Następne zdjęcie"
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
            {selectedImage + 1} / {apartmentData.surroundingsGallery.length}
          </div>

          {/* Image */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedImage}
              src={apartmentData.surroundingsGallery[selectedImage]}
              alt={`Okolica Riva Zegrze - zdjęcie ${selectedImage + 1}`}
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
            Jezioro Zegrzyńskie - Riva Zegrze
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
// 6. AVAILABILITY CALENDAR
// ============================================
function AvailabilityCalendar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(
            '.calendar-box',
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            Dostępność
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#0f0e0f]" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sprawdź wolne terminy
          </h2>
        </div>

        <div className="calendar-box bg-[#f7f6f4] p-12 border border-[#d4d6ce] text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4e4c1] to-[#AB8A62] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
          </div>
          <p className="text-lg text-[#6e7a73] font-light mb-8">
            Kalendarz rezerwacji zostanie wkrótce dodany
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#555e59] text-white hover:bg-[#6c7a72] transition-all text-sm tracking-[0.15em] uppercase">
            <Phone className="w-4 h-4" />
            <span>Zadzwoń i zapytaj o wolne terminy</span>
          </button>
        </div>

      </div>
    </section>
  );
}

// ============================================
// 6. REVIEWS SECTION
// ============================================
function ReviewsSection() {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#555e59] font-light block mb-4">
            Opinie gości
          </span>
          <h2 
            className="text-4xl lg:text-5xl font-light text-[#0f0e0f] mb-4" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Co mówią nasi goście
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" strokeWidth={0} />
              ))}
            </div>
            <span className="text-2xl font-light text-[#0f0e0f]">5.0</span>
            <span className="text-sm text-[#8a968f]">• na podstawie {apartmentData.reviews.length} opinii</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apartmentData.reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="review-card bg-[#f7f6f4] p-8 border border-[#d4d6ce] relative group hover:border-[#8a968f] transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#d4af37] opacity-20 absolute top-6 right-6" strokeWidth={1} />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#555e59] to-[#6c7a72] flex items-center justify-center text-white font-medium">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0f0e0f]">{review.name}</h4>
                    <p className="text-xs text-[#8a968f]">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" strokeWidth={0} />
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
import Image from 'next/image';

function CTAWithFooter() {
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

  useEffect(() => {
    const initGSAP = async () => {
      if (typeof window !== 'undefined' && sectionRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(
            '.cta-content',
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              }
            }
          );

          gsap.fromTo(
            '.footer-content',
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.footer-content',
                start: 'top 85%',
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

  return (
    <section ref={sectionRef} className="relative text-white overflow-hidden">
      
      {/* PREMIUM BACKGROUND IMAGE - Next.js optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/apartments/c1/sunset-hero.jpg"
          alt="Riva Zegrze - Apartamenty nad Jeziorem Zegrzyńskim"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{
            transform: `scale(${1 + scrollProgress * 0.1})`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3d35]/70 via-[#2a3d35]/85 to-[#1a2820]/95 z-10" />
      </div>

      {/* ANIMATED CURVE WAVE TRANSITION */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none transform -translate-y-full z-20"
        style={{
          opacity: 1 - scrollProgress * 0.3
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z"
            fill="#f7f6f4"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z;
                M0,60 Q360,30 720,60 T1440,60 L1440,0 L0,0 Z;
                M0,50 Q360,80 720,50 T1440,50 L1440,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="relative z-20">
        
        {/* CTA SECTION */}
        <div className="cta-content max-w-[1000px] mx-auto px-6 lg:px-12 text-center py-24 lg:py-32">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#AB8A62]" strokeWidth={1} />
              <span className="text-xs tracking-[0.25em] uppercase text-white/90 font-light">
                Oferta specjalna
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-white drop-shadow-lg" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Zarezerwuj min. 3 noce <br />
              <span className="text-[#AB8A62]">i zyskaj 40% rabatu</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg font-light mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Skorzystaj z naszej limitowanej promocji. Przy rezerwacji minimum 3 nocy otrzymasz 
              <strong className="font-medium text-white"> aż 40% zniżki</strong> na cały pobyt w Apartamencie C1.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              
              <button className="flex items-center gap-3 px-10 py-5 bg-white text-[#2a3d35] hover:bg-[#AB8A62] hover:text-white transition-all duration-300 text-sm tracking-[0.15em] uppercase group shadow-2xl font-light">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span>Zarezerwuj apartament</span>
              </button>

              <a 
                href="tel:+48510038038"
                className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm tracking-[0.15em] uppercase group font-light"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
                <span>Zadzwoń: +48 510 038 038</span>
              </a>

            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/70">
              {[
                'Bezpieczna płatność',
                'Anulowanie do 48h',
                'Najlepsza cena',
                'Brak ukrytych kosztów'
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs tracking-wide">
                  <Check className="w-4 h-4 text-[#AB8A62]" strokeWidth={2} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* SUBTLE ANIMATED DIVIDER */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 my-12">
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>

        {/* FOOTER SECTION */}
        <footer className="footer-content py-16 lg:py-20">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
              
              {/* BRAND */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
                  <span
                    className="text-2xl font-light tracking-[0.15em] text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    RIVA ZEGRZE
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                  Kameralne apartamenty nad wodą. Spokój, komfort i bezpośrednia
                  rezerwacja w wyjątkowej lokalizacji pod Warszawą.
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#AB8A62] fill-[#AB8A62]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-xs text-white/50 font-light">5.0 • Booking.com</span>
                </div>
              </div>

              {/* NAVIGATION */}
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  Odkryj
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Apartamenty', href: '/apartamenty' },
                    { label: 'Oferta Specjalna', href: '/offers' },
                    { label: 'Aktywności', href: '/activities' },
                    { label: 'Galeria', href: '/galeria' },
                    { label: 'O Nas', href: '/about' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-white/70 hover:text-white transition-colors font-light inline-flex items-center gap-2 group"
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
                  <li className="flex items-start gap-3 text-sm text-white/70 font-light">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" strokeWidth={1} />
                    <span>
                      Riva Zegrze<br />
                      Rybaki 11<br />
                      05-130 Zegrze Południowe
                    </span>
                  </li>
                  <li>
                    <a href="tel:+48510038038" className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Phone className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>+48 510 038 038</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:wynajem@rivazegrze.pl" className="flex items-center gap-3 text-sm text-white/70 font-light hover:text-white transition-colors group">
                      <Mail className="w-5 h-5 text-[#AB8A62] group-hover:scale-110 transition-transform" strokeWidth={1} />
                      <span>wynajem@rivazegrze.pl</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SOCIAL & NEWSLETTER */}
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                  Newsletter
                </h4>
                <p className="text-sm text-white/70 mb-4 font-light">
                  Bądź na bieżąco z ofertami specjalnymi
                </p>
                
                <form className="mb-8">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Twój e-mail"
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#AB8A62] focus:bg-white/15 transition-all font-light"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#8b6914] transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                </form>

                <div className="space-y-3">
                  <h5 className="text-xs tracking-[0.2em] uppercase font-light text-white/60">
                    Social Media
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
                    className="text-xs text-white/50 hover:text-white/80 transition-colors font-light"
                  >
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




