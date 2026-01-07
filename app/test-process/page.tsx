'use client';

import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Home, LogOut, Check, ArrowRight } from 'lucide-react';

export default function ProcessTimelinePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const initTimeline = async () => {
      if (typeof window !== 'undefined' && timelineRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          // Progress line animation
          gsap.to('.process-progress', {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            }
          });

          // Animate each step
          stepsRef.current.forEach((step, index) => {
            if (step) {
              // Content fade + slide
              gsap.fromTo(
                step.querySelector('.step-content'),
                {
                  opacity: 0,
                  x: -80,
                  filter: 'blur(10px)'
                },
                {
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                  duration: 1,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: step,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                  }
                }
              );

              // Icon animation
              const icon = step.querySelector('.step-icon');
              if (icon) {
                gsap.fromTo(
                  icon,
                  { 
                    scale: 0, 
                    rotation: -180,
                    opacity: 0 
                  },
                  {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                      trigger: step,
                      start: 'top 70%',
                      toggleActions: 'play none none none',
                    }
                  }
                );
              }

              // Check icon appears
              const checkIcon = step.querySelector('.check-icon');
              if (checkIcon) {
                gsap.fromTo(
                  checkIcon,
                  { scale: 0, opacity: 0 },
                  {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(2)',
                    delay: 0.5,
                    scrollTrigger: {
                      trigger: step,
                      start: 'top 65%',
                      toggleActions: 'play none none none',
                    }
                  }
                );
              }

              // Details list stagger
              const details = step.querySelectorAll('.detail-item');
              if (details.length > 0) {
                gsap.fromTo(
                  details,
                  { opacity: 0, x: -20 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                      trigger: step,
                      start: 'top 60%',
                      toggleActions: 'play none none none',
                    }
                  }
                );
              }
            }
          });

        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };

    initTimeline();

    return () => {
      if (typeof window !== 'undefined') {
        const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Rezerwacja',
      subtitle: 'Zaplanuj swój pobyt',
      description: 'Wybierz dogodny termin i zarezerwuj apartament online. Proces jest prosty, szybki i bezpieczny.',
      icon: <Calendar size={32} strokeWidth={1.5} />,
      color: '#8a968f',
      details: [
        'Wybór terminu w kalendarzu',
        'Sprawdzenie dostępności',
        'Bezpieczna płatność online',
        'Potwierdzenie mailowe natychmiast'
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'Przyjazd',
      subtitle: 'Witamy w Riva Zegrze',
      description: 'Bezproblemowy check-in i ciepłe powitanie. Otrzymasz klucze oraz wszystkie niezbędne informacje.',
      icon: <MapPin size={32} strokeWidth={1.5} />,
      color: '#AB8A62',
      details: [
        'Check-in od 15:00',
        'Parking dla gości',
        'Instrukcja obsługi apartamentu',
        'Rekomendacje lokalne'
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'Pobyt',
      subtitle: 'Ciesz się chwilą',
      description: 'Relaksuj się w luksusowych apartamentach. Korzystaj z basenu, siłowni i prywatnej przystani.',
      icon: <Home size={32} strokeWidth={1.5} />,
      color: '#71847b',
      details: [
        'Dostęp do basenu i siłowni',
        'Prywatna marina z kajakami',
        'Taras z widokiem na zalew',
        'Wsparcie 24/7'
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'Wyjazd',
      subtitle: 'Do zobaczenia wkrótce',
      description: 'Bezstresowy check-out i płynny wyjazd. Zostaw nam opinię i wracaj do nas ponownie!',
      icon: <LogOut size={32} strokeWidth={1.5} />,
      color: '#6e7a73',
      details: [
        'Check-out do 11:00',
        'Pozostaw bagaż (opcja)',
        'Podziel się opinią',
        'Program lojalnościowy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1f1ed] via-[#e8e9e4] to-[#f1f1ed]">
      
      {/* Hero */}
      <section className="relative py-24 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#b6b9af" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-xs tracking-[0.4em] uppercase text-[#8a968f] mb-4 block font-light">
            PROCES REZERWACJI
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0f0e0f] mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Od Rezerwacji do Check-out
          </h1>
          <p className="text-lg text-[#6e7a73] leading-relaxed font-light max-w-2xl mx-auto">
            Poznaj prosty, bezstresowy proces pobytu w Riva Zegrze. Każdy krok został zaprojektowany z myślą o Twoim komforcie.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="relative py-12 lg:py-24 max-w-5xl mx-auto px-6">
        
        {/* Progress Line - Desktop */}
        <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#d4d6ce]">
          <div className="process-progress absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#AB8A62] to-[#8a968f]" />
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="relative"
            >
              
              {/* Step Container */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Icon Circle */}
                <div className="relative flex-shrink-0 lg:mr-8">
                  <div 
                    className="step-icon w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-xl border-4 border-white backdrop-blur-sm relative z-10"
                    style={{ backgroundColor: step.color, color: 'white' }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Check Icon */}
                  <div 
                    className="check-icon absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                    style={{ color: step.color }}
                  >
                    <Check size={18} strokeWidth={3} />
                  </div>

                  {/* Step Number - Mobile */}
                  <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] font-light px-3 py-1 rounded-full bg-white shadow-md" style={{ color: step.color }}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="step-content flex-1">
                  
                  {/* Header */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-[#d4d6ce] mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="hidden lg:block text-sm tracking-[0.3em] uppercase mb-2 font-light" style={{ color: step.color }}>
                          KROK {step.number}
                        </div>
                        <h3 
                          className="text-3xl lg:text-4xl font-light text-[#0f0e0f] mb-2" 
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-base text-[#8a968f] font-light mb-4">
                          {step.subtitle}
                        </p>
                      </div>
                      
                      {/* Arrow - Desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block ml-4">
                          <ArrowRight className="text-[#d4d6ce]" size={24} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>

                    <p className="text-[#6e7a73] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="detail-item flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#e8e6e1]"
                      >
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: step.color + '20', color: step.color }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-[#6e7a73] font-light leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 
            className="text-3xl lg:text-4xl font-light text-[#0f0e0f] mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Gotowy na swój idealny pobyt?
          </h3>
          <p className="text-[#6e7a73] mb-8 leading-relaxed">
            Rezerwuj już dziś i odkryj wyjątkowe doświadczenie nad Zalewem Zegrzyńskim.
          </p>
          <button 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#AB8A62] text-white hover:bg-[#967447] transition-all text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl"
          >
            <Calendar size={20} strokeWidth={1.5} />
            <span>Zarezerwuj Teraz</span>
          </button>
        </div>
      </section>

    </div>
  );
}
