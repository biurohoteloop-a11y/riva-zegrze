'use client';

import { useEffect, useRef } from 'react';

interface HotresWidgetProps {
  apartmentName: string;
  oid?: number;
  tid?: string;
}

export default function HotresWidget({ apartmentName, oid, tid }: HotresWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (oid && tid) {
      const loadScript = (src: string, id: string) => {
        return new Promise((resolve, reject) => {
          if (document.getElementById(id)) {
            resolve(true);
            return;
          }
          const script = document.createElement('script');
          script.id = id;
          script.src = src;
          script.async = true;
          script.onload = () => resolve(true);
          script.onerror = () => reject(new Error(`Failed to load ${src}`));
          document.body.appendChild(script);
        });
      };

      const initHotres = async () => {
        try {
          await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'jquery-script');
          await loadScript('https://panel.hotres.pl/public/api/hotres_v4.js', 'hotres-script');

          if (typeof window !== 'undefined' && (window as any).createHotres) {
            (window as any).createHotres({
              oid,
              lang: 'pl',
              tid,
              action: 'room/calendar'
            });
          }
        } catch (error) {
          console.error('Hotres loading error:', error);
        }
      };

      initHotres();
    }
  }, [oid, tid]);

  if (!oid || !tid) {
    return (
      <div className="w-full min-h-[400px] bg-gradient-to-br from-[#f1f1ed] to-white rounded-2xl shadow-lg border-2 border-dashed border-[#d4d6ce] p-12 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-[#AB8A62]/10 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <h3 
          className="text-2xl font-light text-[#0f0e0f] mb-3" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          System rezerwacji
        </h3>
        <p className="text-[#6e7a73] mb-6 max-w-md font-light">
          Kalendarz dostępności dla <strong>{apartmentName}</strong> będzie wkrótce dostępny.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:+48510038038"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#967447] transition-all text-sm tracking-[0.2em] uppercase shadow-lg font-light"
          >
            <span>📞 Zadzwoń</span>
          </a>
          <a 
            href="mailto:wynajem@rivazegrze.pl"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#AB8A62] text-[#AB8A62] hover:bg-[#AB8A62] hover:text-white transition-all text-sm tracking-[0.2em] uppercase font-light"
          >
            <span>✉️ Napisz</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      id="hotresContainer" 
      className="w-full min-h-[400px] bg-white rounded-2xl shadow-lg border border-[#e8e6e1] p-6"
    />
  );
}
