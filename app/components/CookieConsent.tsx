// ============================================
// COOKIE CONSENT BANNER - ELEGANT & PREMIUM
// ============================================
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już zaakceptował
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Pokaż po 1 sekundzie
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    handleClose();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-t border-[#e8e6e1]" />
      
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* LEFT - Icon & Text */}
          <div className="flex items-start gap-6 flex-1">
            {/* Cookie Icon */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#AB8A62] text-[#AB8A62]">
              <Cookie size={24} strokeWidth={1.5} />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <h3 
                className="text-xl font-light text-[#4A6B5E] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Używamy plików cookies
              </h3>
              <p className="text-sm text-[#6e7a73] leading-relaxed font-light max-w-3xl">
                Używamy plików cookies, aby zapewnić prawidłowe działanie strony, personalizować treści 
                oraz analizować ruch. Kontynuując przeglądanie, akceptujesz naszą{' '}
                <a href="/privacy" className="text-[#AB8A62] hover:underline">
                  politykę prywatności
                </a>
                {' '}i{' '}
                <a href="/cookies" className="text-[#AB8A62] hover:underline">
                  politykę cookies
                </a>
                .
              </p>
            </div>
          </div>

          {/* RIGHT - Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Reject Button */}
            <button
              onClick={handleReject}
              className="px-8 py-3 border border-[#d4d6ce] text-[#6e7a73] text-xs tracking-[0.2em] uppercase font-light hover:bg-[#f7f6f4] transition-all"
            >
              Odrzuć
            </button>
            
            {/* Accept Button */}
            <button
              onClick={handleAccept}
              className="px-8 py-3 bg-[#8a968f] text-white text-xs tracking-[0.2em] uppercase font-light hover:bg-[#7d8a83] transition-all"
            >
              Akceptuję
            </button>

            {/* Close X */}
            <button
              onClick={handleClose}
              className="hidden sm:flex w-10 h-10 items-center justify-center border border-[#d4d6ce] text-[#8a968f] hover:text-[#6e7a73] hover:border-[#8a968f] transition-all"
              aria-label="Zamknij"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>

        </div>

        {/* Decorative Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#AB8A62] to-transparent" />

      </div>
    </div>
  );
}
