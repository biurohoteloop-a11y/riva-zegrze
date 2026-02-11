'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/routing';

export default function LanguageSwitcher({ isScrolled = false }: { isScrolled?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'pl' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale('pl')}
        className={`px-2.5 py-1.5 text-[10px] xl:text-xs tracking-[0.15em] font-light transition-all duration-300 ${
          locale === 'pl'
            ? isScrolled
              ? 'text-[#AB8A62] border-b-2 border-[#AB8A62]'
              : 'text-white border-b-2 border-white'
            : isScrolled
              ? 'text-[#8a968f] hover:text-[#AB8A62]'
              : 'text-white/50 hover:text-white'
        }`}
      >
        PL
      </button>

      <span className={`text-xs ${isScrolled ? 'text-[#d4d6ce]' : 'text-white/30'}`}>
        |
      </span>

      <button
        onClick={() => switchLocale('en')}
        className={`px-2.5 py-1.5 text-[10px] xl:text-xs tracking-[0.15em] font-light transition-all duration-300 ${
          locale === 'en'
            ? isScrolled
              ? 'text-[#AB8A62] border-b-2 border-[#AB8A62]'
              : 'text-white border-b-2 border-white'
            : isScrolled
              ? 'text-[#8a968f] hover:text-[#AB8A62]'
              : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
