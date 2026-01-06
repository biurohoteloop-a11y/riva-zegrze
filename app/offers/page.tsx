'use client';

import { useState, useEffect, useRef } from 'react';
import { Waves, Menu, X, Instagram, Facebook, Twitter, Gift, Clock, Calendar, Star, Tag, Heart, Check, Sparkles } from 'lucide-react';

export default function OffersPage() {
  return (
    <>
      <Navigation />
      <OceanicBackground />
      <main className="relative z-10">
        <OffersHero />
        <OffersIntro />
        <FeaturedDeal />
        <OffersGrid />
        <SeasonalBanner />
        <NewsletterCTA />
      </main>
      <MinimalFooter />
    </>
  );
}

// Oceanic Background - Morskie akcenty
function OceanicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02]">
      {/* Muszelka 1 - góra lewa */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="50" cy="50" rx="30" ry="40"/>
        <line x1="50" y1="10" x2="50" y2="90"/>
        <line x1="35" y1="20" x2="65" y2="20"/>
        <line x1="30" y1="35" x2="70" y2="35"/>
        <line x1="25" y1="50" x2="75" y2="50"/>
        <line x1="30" y1="65" x2="70" y2="65"/>
        <line x1="35" y1="80" x2="65" y2="80"/>
      </svg>

      {/* Fala 1 - środek prawa */}
      <svg className="absolute top-1/4 right-20 w-64 h-64 text-gray-900" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M20,100 Q40,80 60,100 T100,100 T140,100 T180,100" />
        <path d="M20,110 Q40,90 60,110 T100,110 T140,110 T180,110" />
        <path d="M20,120 Q40,100 60,120 T100,120 T140,120 T180,120" />
      </svg>

      {/* Rozgwiazda - dół lewa */}
      <svg className="absolute bottom-32 left-1/4 w-24 h-24 text-gray-900" viewBox="0 0 100 100" fill="currentColor" opacity="0.5">
        <path d="M50,10 L58,40 L90,40 L65,58 L75,90 L50,70 L25,90 L35,58 L10,40 L42,40 Z"/>
      </svg>

      {/* Muszelka 2 - dół prawa */}
      <svg className="absolute bottom-40 right-1/4 w-28 h-28 text-gray-900 -rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="50" r="35"/>
        <line x1="50" y1="15" x2="50" y2="85"/>
        <line x1="30" y1="25" x2="70" y2="25"/>
        <line x1="25" y1="40" x2="75" y2="40"/>
        <line x1="20" y1="50" x2="80" y2="50"/>
        <line x1="25" y1="60" x2="75" y2="60"/>
        <line x1="30" y1="75" x2="70" y2="75"/>
      </svg>

      {/* Kotwica - góra środek */}
      <svg className="absolute top-40 right-1/3 w-20 h-20 text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="20" r="8"/>
        <line x1="50" y1="28" x2="50" y2="80"/>
        <path d="M30,60 L30,80 Q30,90 40,90 L50,90"/>
        <path d="M70,60 L70,80 Q70,90 60,90 L50,90"/>
        <line x1="30" y1="60" x2="20" y2="50"/>
        <line x1="70" y1="60" x2="80" y2="50"/>
      </svg>

      {/* Fala 2 - środek lewa */}
      <svg className="absolute top-2/3 left-10 w-48 h-48 text-gray-900" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M20,80 Q35,60 50,80 T80,80 T110,80 T140,80" />
        <path d="M20,95 Q35,75 50,95 T80,95 T110,95 T140,95" />
      </svg>

      {/* Mała muszelka - góra prawa */}
      <svg className="absolute top-1/3 right-10 w-16 h-16 text-gray-900 rotate-90" viewBox="0 0 100 100" fill="currentColor" opacity="0.3">
        <path d="M50,20 C35,20 30,35 30,50 C30,65 35,80 50,80 C65,80 70,65 70,50 C70,35 65,20 50,20 Z"/>
      </svg>

      {/* Konik morski - dół środek */}
      <svg className="absolute bottom-20 left-1/2 w-20 h-20 text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M40,20 Q45,15 50,20 L55,30 Q60,35 55,40 L50,70 Q45,80 50,90" />
        <circle cx="48" cy="22" r="3"/>
        <path d="M35,45 L45,45" />
        <path d="M35,55 L45,55" />
      </svg>
    </div>
  );
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ROOMS', href: '/rooms' },
    { label: 'DINING', href: '/dining' },
    { label: 'ACTIVITIES', href: '/activities' },
    { label: 'OFFERS', href: '/offers' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6 lg:py-8">
            <a href="/" className={`flex items-center gap-3 group ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <Waves className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-[0.15em]" style={{ fontFamily: 'Playfair Display, serif' }}>OCEANIC</span>
            </a>
            <ul className="hidden lg:flex items-center gap-16">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`text-xs tracking-[0.2em] font-light transition-all hover:opacity-60 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/" className={`hidden lg:block text-xs tracking-[0.2em] px-8 py-3 border transition-all ${isScrolled ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-gray-900'}`}>
              RESERVE
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden z-50 relative">
              {isMobileMenuOpen ? <X className="text-white" size={28} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={28} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`fixed inset-0 bg-gray-900/98 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

// Hero Section
function OffersHero() {
  const heroRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <section ref={heroRef} className="jarallax relative h-[70vh] flex items-center justify-center" data-jarallax data-speed="0.6">
      <div className="jarallax-img absolute inset-0 w-full h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase mb-6 opacity-90">SPECIAL OFFERS</p>
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-[0.15em]" style={{ fontFamily: 'Playfair Display, serif' }}>
          EXCLUSIVE RATES
        </h1>
        <p className="text-lg font-light leading-relaxed opacity-90">
          Discover exceptional value with our curated collection of seasonal offers and packages
        </p>
      </div>
    </section>
  );
}

// Intro Section
function OffersIntro() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">CURRENT PROMOTIONS</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Enhance Your Coastal Experience
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          From extended stays to romantic escapes, our thoughtfully designed packages offer exceptional value without compromising the luxury and service you expect.
        </p>
      </div>
    </section>
  );
}

// Featured Deal
function FeaturedDeal() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070"
              alt="Early Bird Offer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-8 right-8 bg-white px-6 py-3 shadow-lg">
              <span className="text-3xl font-light text-gray-900">-30%</span>
            </div>
          </div>

          <div>
            <div className="inline-block border border-gray-300 px-4 py-2 mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-600">FEATURED OFFER</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Early Bird Summer
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              Reserve your summer escape before March 31st and enjoy up to 30% savings on all suite categories. Includes complimentary breakfast and late checkout.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Minimum 3 nights stay',
                'Flexible cancellation policy',
                'Complimentary breakfast daily',
                'Late checkout until 2PM'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3 mb-8 text-gray-500 text-sm">
              <Clock size={18} />
              <span className="font-light">Valid until March 31, 2025</span>
            </div>
            
            <button className="text-xs tracking-[0.2em] px-10 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
              BOOK THIS OFFER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reszta komponentów (OffersGrid, SeasonalBanner, NewsletterCTA, MinimalFooter) 
// pozostają bez zmian - skopiuj z poprzedniego kodu
// Offers Grid - Elegant Cards
function OffersGrid() {
  const offers = [
    {
      id: 1,
      tag: 'POPULAR',
      title: 'Romantic Getaway',
      discount: '25%',
      description: 'Champagne welcome, couples massage, rose petals, and candlelit dinner by the ocean.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
      price: 'From $450',
      originalPrice: '$600',
      validUntil: 'Year-round availability',
    },
    {
      id: 2,
      tag: 'EXTENDED STAY',
      title: 'Weekly Escape',
      discount: '20%',
      description: 'Stay 7+ nights and enjoy significant savings plus daily breakfast and spa credit.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074',
      price: 'From $294',
      originalPrice: '$367',
      validUntil: 'Ongoing promotion',
    },
    {
      id: 3,
      tag: 'WELLNESS',
      title: 'Restore & Rejuvenate',
      discount: '30%',
      description: 'Yoga sessions, spa treatments, wellness cuisine, and meditation experiences.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070',
      price: 'From $560',
      originalPrice: '$800',
      validUntil: 'April - June',
    },
    {
      id: 4,
      tag: 'LAST MINUTE',
      title: 'Spontaneous Escape',
      discount: '35%',
      description: 'Book within 48 hours of arrival and enjoy exceptional savings on available suites.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      price: 'From $227',
      originalPrice: '$350',
      validUntil: 'Subject to availability',
    },
    {
      id: 5,
      tag: 'FAMILY',
      title: 'Family Retreat',
      discount: '15%',
      description: 'Connecting rooms, kids activities, family dining experiences, and more.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074',
      price: 'From $552',
      originalPrice: '$650',
      validUntil: 'School holidays',
    },
    {
      id: 6,
      tag: 'LUXURY',
      title: 'Presidential Suite Package',
      discount: '40%',
      description: 'Ultimate luxury with private pool, butler service, and exclusive amenities.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      price: 'From $750',
      originalPrice: '$1,250',
      validUntil: 'Limited availability',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">ALL OFFERS</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Current Promotions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow-sm">
                  <span className="text-xs tracking-[0.3em] font-medium text-gray-900">{offer.tag}</span>
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 shadow-sm">
                  <span className="text-lg font-light">-{offer.discount}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-light text-gray-900">{offer.price}</span>
                  <span className="text-sm text-gray-400 line-through">{offer.originalPrice}</span>
                </div>

                {/* Valid */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-light">
                  <Calendar size={14} />
                  <span>{offer.validUntil}</span>
                </div>

                <button className="w-full text-xs tracking-[0.2em] py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Seasonal Banner - Elegant
function SeasonalBanner() {
  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.4em] uppercase mb-6 opacity-75">SEASONAL OFFER</p>
        <h2 className="text-5xl md:text-6xl font-light mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Winter Coastal Retreat
        </h2>
        <p className="text-xl mb-12 font-light opacity-90">
          Escape to warmth and tranquility. Save up to 35% on winter stays with added amenities and exclusive experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-gray-900 text-xs tracking-[0.2em] hover:bg-gray-100 transition-all">
            EXPLORE DATES
          </button>
          <button className="px-10 py-4 border border-white text-white text-xs tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

// Newsletter CTA - Minimal
function NewsletterCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Gift size={48} className="mx-auto mb-8 text-gray-400" strokeWidth={1} />
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Stay Informed
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
          Subscribe to receive exclusive offers and be the first to know about new packages and seasonal promotions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
          />
          <button className="px-10 py-4 bg-gray-900 text-white text-xs tracking-[0.2em] hover:bg-gray-800 transition-all whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 font-light">
          Unsubscribe at any time • Privacy respected
        </p>
      </div>
    </section>
  );
}

// Footer
function MinimalFooter() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-[1800px] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Waves className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-[0.15em]" style={{ fontFamily: 'Playfair Display, serif' }}>OCEANIC</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Seaside luxury since 1964.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light">EXPLORE</h4>
            <ul className="space-y-4">
              {['Rooms', 'Activities', 'Offers', 'Wellness'].map((item) => (
                <li key={item}>
                  <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light">CONTACT</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li>123 Coastal Drive</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@oceanic.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light">FOLLOW</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-gray-700 hover:border-white flex items-center justify-center transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500 font-light">© 2024 Oceanic Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
