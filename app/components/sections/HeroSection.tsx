'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/hero/hero-1.jpg',
    alt: 'Apartamenty nad Jeziorem Zegrzyńskim',
  },
  {
    src: '/hero/hero-2.jpg',
    alt: 'Widok na jezioro – Riva Zegrze',
  },
  {
    src: '/hero/hero-3.jpg',
    alt: 'Basen i prywatna plaża – Riva Zegrze',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* SLIDER IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/25 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs tracking-[0.35em] uppercase text-[#363954]">
            Apartamenty przy samej wodzie
          </p>

          <h1 className="mb-6 font-serif text-5xl md:text-7xl text-[#363954]">
            Riva Zegrze
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base md:text-lg text-[#363954]/80">
            Cisza, natura i komfort. Prywatna plaża oraz basen nad Jeziorem
            Zegrzyńskim — tylko 30 minut od Warszawy.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/offers"
              className="rounded-full bg-[#AB8A62] px-8 py-4 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#9a7a54]"
            >
              Sprawdź dostępność
            </a>

            <a
              href="/gallery"
              className="rounded-full border border-[#363954]/40 px-8 py-4 text-xs font-medium uppercase tracking-wider text-[#363954] transition hover:bg-white/70"
            >
              Zobacz apartamenty
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-[#363954]">
        SCROLL
      </div>
    </section>
  );
}
