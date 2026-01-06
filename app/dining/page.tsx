'use client';

import { useState, useEffect, useRef } from 'react';
import { Waves, Menu, X, Instagram, Facebook, Twitter, Clock, MapPin, Phone, Mail, ChefHat, Wine, Coffee, Utensils } from 'lucide-react';

export default function DiningPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <DiningHero />
        <DiningIntro />
        <MenuShowcase />
        <ChefSection />
        <AmbianceGallery />
        <ReservationCTA />
      </main>
      <MinimalFooter />
    </>
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
    { label: 'ACTIVITIES', href: '/activities' },
    { label: 'DINING', href: '/dining' },
    { label: 'OFFERS', href: '/offers' },
    { label: 'CONTACT', href: '/#contact' },
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
function DiningHero() {
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
      <div className="jarallax-img absolute inset-0 w-full h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase mb-6 opacity-90">CULINARY EXCELLENCE</p>
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-[0.15em]" style={{ fontFamily: 'Playfair Display, serif' }}>
          OCEANIC<br/>RESTAURANT
        </h1>
        <p className="text-lg font-light leading-relaxed opacity-90">
          Where coastal flavors meet refined culinary artistry
        </p>
      </div>
    </section>
  );
}

// Intro Section
function DiningIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">GASTRONOMIC JOURNEY</p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          A Symphony of Flavors
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed font-light mb-12">
          Our oceanfront restaurant celebrates the bounty of the sea and the richness of local ingredients, crafted into memorable dining experiences by our award-winning culinary team.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <ChefHat size={32} strokeWidth={1} />, label: 'Michelin Trained Chef' },
            { icon: <Wine size={32} strokeWidth={1} />, label: 'Curated Wine List' },
            { icon: <Utensils size={32} strokeWidth={1} />, label: 'Fresh Local Seafood' },
            { icon: <Coffee size={32} strokeWidth={1} />, label: 'Artisan Desserts' },
          ].map((item, idx) => (
            <div key={idx} className="text-gray-400">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <p className="text-xs tracking-[0.2em] uppercase font-light text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Menu Showcase
function MenuShowcase() {
  const menuCategories = [
    {
      title: 'Starters',
      description: 'Begin your journey with refined coastal appetizers',
      dishes: [
        { name: 'Oysters on Ice', desc: 'Half dozen fresh oysters, mignonette, lemon', price: '$24' },
        { name: 'Tuna Tartare', desc: 'Sushi-grade tuna, avocado, sesame, ponzu', price: '$28' },
        { name: 'Lobster Bisque', desc: 'Rich lobster soup, cognac cream, chives', price: '$18' },
        { name: 'Burrata & Heirloom Tomatoes', desc: 'Fresh burrata, basil oil, aged balsamic', price: '$22' },
      ]
    },
    {
      title: 'Main Courses',
      description: 'Signature dishes celebrating the finest ingredients',
      dishes: [
        { name: 'Pan-Seared Sea Bass', desc: 'Wild sea bass, lemon butter, seasonal vegetables', price: '$48' },
        { name: 'Grilled Lobster Tail', desc: '10oz lobster tail, drawn butter, truffle mash', price: '$68' },
        { name: 'Wagyu Beef Tenderloin', desc: 'A5 wagyu, red wine reduction, roasted garlic', price: '$95' },
        { name: 'Catch of the Day', desc: 'Fresh daily selection, chef preparation', price: 'Market' },
      ]
    },
    {
      title: 'Desserts',
      description: 'Sweet finales crafted by our pastry artisans',
      dishes: [
        { name: 'Crème Brûlée', desc: 'Vanilla bean custard, caramelized sugar', price: '$14' },
        { name: 'Chocolate Soufflé', desc: 'Dark chocolate, vanilla ice cream, berry coulis', price: '$16' },
        { name: 'Seasonal Tart', desc: "Chef's selection, fresh fruit, pastry cream", price: '$15' },
        { name: 'Artisan Cheese Selection', desc: 'Three cheeses, honeycomb, dried fruits', price: '$22' },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">CHEF'S SELECTION</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Menu
          </h2>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, idx) => (
            <div key={idx}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h3>
                <p className="text-gray-600 font-light">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
                {category.dishes.map((dish, dishIdx) => (
                  <div key={dishIdx} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-light text-gray-900">{dish.name}</h4>
                      <span className="text-gray-900 font-light ml-4">{dish.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{dish.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 font-light mb-8">
            Menu changes seasonally to reflect the finest available ingredients
          </p>
          <button className="text-xs tracking-[0.2em] px-10 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
            DOWNLOAD FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
}

// Chef Section
function ChefSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077"
              alt="Chef"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-12">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">CULINARY VISION</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Executive Chef<br/>Alessandro Marini
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              With over 20 years of experience in Michelin-starred kitchens across Europe, Chef Alessandro brings his passion for coastal cuisine and innovative techniques to Oceanic Restaurant.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              "My philosophy is simple: respect the ingredients, honor the traditions, and create dishes that tell a story. Every plate that leaves our kitchen is a reflection of the ocean's bounty and our commitment to culinary excellence."
            </p>
            <div className="space-y-3 text-sm text-gray-600 font-light">
              <p>• Former Sous Chef at Le Bernardin, New York</p>
              <p>• Trained at École Ducasse, Paris</p>
              <p>• Featured in Gourmet Magazine, Food & Wine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ambiance Gallery
function AmbianceGallery() {
  const images = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074',
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">ATMOSPHERE</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Elegant Oceanfront Setting
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Dine with panoramic ocean views in our sophisticated yet comfortable dining room
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-96 overflow-hidden group">
              <img 
                src={img}
                alt={`Restaurant ambiance ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reservation CTA
function ReservationCTA() {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Utensils size={48} className="mx-auto mb-8 opacity-75" strokeWidth={1} />
        <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Reserve Your Table
        </h2>
        <p className="text-lg leading-relaxed mb-12 opacity-90 font-light">
          Join us for an unforgettable dining experience. Reservations recommended for dinner service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
          <div>
            <Clock size={24} className="mx-auto mb-3 opacity-75" strokeWidth={1} />
            <p className="font-light opacity-75 mb-1">DINNER</p>
            <p>Tuesday - Sunday<br/>6:00 PM - 10:00 PM</p>
          </div>
          <div>
            <Phone size={24} className="mx-auto mb-3 opacity-75" strokeWidth={1} />
            <p className="font-light opacity-75 mb-1">RESERVATIONS</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <MapPin size={24} className="mx-auto mb-3 opacity-75" strokeWidth={1} />
            <p className="font-light opacity-75 mb-1">LOCATION</p>
            <p>Oceanfront Level<br/>Main Building</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-12 py-4 bg-white text-gray-900 text-xs tracking-[0.2em] hover:bg-gray-100 transition-all">
            BOOK A TABLE
          </button>
          <button className="px-12 py-4 border border-white text-white text-xs tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all">
            VIEW WINE LIST
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-8 font-light">
          Private dining rooms available for special occasions
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
              {['Rooms', 'Activities', 'Dining', 'Offers'].map((item) => (
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
