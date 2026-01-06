'use client';

export default function OceanicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
      {/* Muszelka 1 - góra lewa */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-gray-900" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,10 C30,10 20,30 20,50 C20,70 30,90 50,90 C70,90 80,70 80,50 C80,30 70,10 50,10 Z M50,20 L45,80 M50,20 L55,80 M40,35 L60,35 M35,50 L65,50 M40,65 L60,65" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>

      {/* Fala 1 - środek prawa */}
      <svg className="absolute top-1/3 right-20 w-64 h-64 text-gray-900 rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M20,100 Q40,80 60,100 T100,100 T140,100 T180,100" />
        <path d="M20,110 Q40,90 60,110 T100,110 T140,110 T180,110" />
        <path d="M20,120 Q40,100 60,120 T100,120 T140,120 T180,120" />
      </svg>

      {/* Rozgwiazda - dół lewa */}
      <svg className="absolute bottom-32 left-1/4 w-24 h-24 text-gray-900" viewBox="0 0 100 100" fill="currentColor" opacity="0.5">
        <path d="M50,10 L58,40 L90,40 L65,58 L75,90 L50,70 L25,90 L35,58 L10,40 L42,40 Z"/>
      </svg>

      {/* Muszelka 2 - dół prawa */}
      <svg className="absolute bottom-40 right-1/3 w-28 h-28 text-gray-900 -rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="50" cy="50" rx="30" ry="40"/>
        <line x1="50" y1="10" x2="50" y2="90"/>
        <line x1="35" y1="20" x2="65" y2="20"/>
        <line x1="30" y1="35" x2="70" y2="35"/>
        <line x1="25" y1="50" x2="75" y2="50"/>
        <line x1="30" y1="65" x2="70" y2="65"/>
        <line x1="35" y1="80" x2="65" y2="80"/>
      </svg>

      {/* Kotwica - góra prawa */}
      <svg className="absolute top-40 right-1/4 w-20 h-20 text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="20" r="8"/>
        <line x1="50" y1="28" x2="50" y2="80"/>
        <path d="M30,60 L30,80 Q30,90 40,90 L50,90"/>
        <path d="M70,60 L70,80 Q70,90 60,90 L50,90"/>
        <line x1="30" y1="60" x2="20" y2="50"/>
        <line x1="70" y1="60" x2="80" y2="50"/>
      </svg>

      {/* Fala 2 - środek lewa */}
      <svg className="absolute top-2/3 left-10 w-48 h-48 text-gray-900 -rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M20,80 Q35,60 50,80 T80,80 T110,80 T140,80" />
        <path d="M20,95 Q35,75 50,95 T80,95 T110,95 T140,95" />
      </svg>

      {/* Mała muszelka - środek */}
      <svg className="absolute top-1/2 left-1/2 w-16 h-16 text-gray-900 rotate-90" viewBox="0 0 100 100" fill="currentColor" opacity="0.3">
        <path d="M50,20 C35,20 30,35 30,50 C30,65 35,80 50,80 C65,80 70,65 70,50 C70,35 65,20 50,20 Z"/>
      </svg>
    </div>
  );
}
