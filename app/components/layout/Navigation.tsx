'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Waves } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Amenities', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Waves
              className={`w-10 h-10 transition-all duration-300 ${
                isScrolled ? 'text-ocean-600' : 'text-white'
              } group-hover:scale-110`}
            />
            <span
              className={`font-display text-2xl font-bold transition-colors ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              Oceanic Resort
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium text-sm uppercase tracking-wider transition-colors relative group ${
                    isScrolled ? 'text-navy-700' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ocean-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact" className="hidden lg:block btn-primary">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-navy-900/98 backdrop-blur-lg pt-24">
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-display text-3xl hover:text-ocean-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-8">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
