'use client';

import { useEffect, useRef } from 'react';
import { Sun, Sunset, Moon, Coffee, Waves, Utensils } from 'lucide-react';

export default function TimelinePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const initTimeline = async () => {
      if (typeof window !== 'undefined' && timelineRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          // Animacja progress line
          gsap.to('.timeline-progress', {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            }
          });

          // Animacja każdej sekcji
          sectionsRef.current.forEach((section, index) => {
            if (section) {
              // Fade in + slide
              gsap.fromTo(
                section,
                {
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.9
                },
                {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 1,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                  }
                }
              );

              // Ikona pulse
              const icon = section.querySelector('.timeline-icon');
              if (icon) {
                gsap.fromTo(
                  icon,
                  { scale: 0, rotation: -180 },
                  {
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                      trigger: section,
                      start: 'top 70%',
                      toggleActions: 'play none none none',
                    }
                  }
                );
              }

              // Zdjęcie parallax
              const image = section.querySelector('.timeline-image');
              if (image) {
                gsap.to(image, {
                  y: -50,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                  }
                });
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

  const timelineData = [
    {
      id: 1,
      time: 'RANO',
      title: 'Pobudka nad Zalewem',
      description: 'Rozpocznij dzień od kawy na tarasie z widokiem na spokojną taflę wody. Poranny jogging ścieżką wzdłuż brzegu.',
      icon: <Sun size={32} />,
      image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070',
      color: '#FFB74D',
      bgGradient: 'from-orange-100 to-yellow-50'
    },
    {
      id: 2,
      time: 'PRZEDPOŁUDNIE',
      title: 'Aktywność na Wodzie',
      description: 'Wypożycz kajak lub skuter wodny. Odkryj urokliwe zakątki Zalewu Zegrzyńskiego i poczuj dreszczyk emocji.',
      icon: <Waves size={32} />,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
      color: '#4FC3F7',
      bgGradient: 'from-blue-100 to-cyan-50'
    },
    {
      id: 3,
      time: 'POŁUDNIE',
      title: 'Lunch z Widokiem',
      description: 'Delektuj się świeżymi potrawami w lokalnej restauracji. Idealne miejsce na relaks w półcieniu z lekką bryzą.',
      icon: <Utensils size={32} />,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070',
      color: '#AB8A62',
      bgGradient: 'from-amber-100 to-orange-50'
    },
    {
      id: 4,
      time: 'POPOŁUDNIE',
      title: 'Relaks przy Basenie',
      description: 'Zażyj kąpieli słonecznych przy prywatnym basenie. Idealna chwila na dobrą książkę i zimny drink.',
      icon: <Coffee size={32} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      color: '#8D6E63',
      bgGradient: 'from-stone-100 to-amber-50'
    },
    {
      id: 5,
      time: 'WIECZÓR',
      title: 'Zachód Słońca',
      description: 'Obserwuj malowniczy zachód słońca z tarasu. Wieczorna cisza, szum wody i gra świateł na wodzie.',
      icon: <Sunset size={32} />,
      image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=2070',
      color: '#FF7043',
      bgGradient: 'from-red-100 to-orange-50'
    },
    {
      id: 6,
      time: 'NOC',
      title: 'Wieczór pod Gwiazdami',
      description: 'Kolacja przy świecach. Podziwiaj rozgwieżdżone niebo z dala od miejskiego zgiełku. Czas na refleksję.',
      icon: <Moon size={32} />,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
      color: '#7E57C2',
      bgGradient: 'from-purple-100 to-indigo-50'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f1f1ed] to-white">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#6e7a73] to-[#8a968f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-sm tracking-[0.3em] uppercase opacity-80 mb-4 block">
            TEST TIMELINE
          </span>
          <h1 
            className="text-5xl md:text-6xl font-light mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Dzień nad Zalewem
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Odkryj magię każdej pory dnia w Riva Zegrze
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="relative py-24 max-w-7xl mx-auto px-6">
        
        {/* Centralna linia */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#d4d6ce] to-transparent hidden lg:block">
          <div className="timeline-progress absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#AB8A62] to-[#8a968f]" />
        </div>

        {/* Timeline items */}
        <div className="space-y-32">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                <div className={`inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-4`} style={{ backgroundColor: item.color + '20', color: item.color }}>
                  {item.time}
                </div>
                <h3 
                  className="text-3xl md:text-4xl font-light text-[#0f0e0f] mb-4" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6e7a73] leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              {/* Icon (centrum) */}
              <div className="timeline-icon relative z-10 flex-shrink-0">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                  style={{ backgroundColor: item.color, color: 'white' }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <div className="relative h-80 bg-white p-3">
                    <div className="relative h-full overflow-hidden border border-[#d4d6ce]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="timeline-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Footer info */}
      <div className="text-center py-16 px-6 bg-gradient-to-br from-[#8a968f] to-[#6e7a73] text-white">
        <p className="text-sm tracking-[0.3em] uppercase opacity-80 mb-2">
          Test Timeline Animation
        </p>
        <p className="text-lg font-light">
          GSAP ScrollTrigger + Parallax + Stagger Animations
        </p>
      </div>

    </div>
  );
}
