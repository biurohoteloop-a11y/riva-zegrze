import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/apartamenty': {
      pl: '/apartamenty',
      en: '/apartments'
    },
    '/o-nas': {
      pl: '/o-nas',
      en: '/about'
    },
    '/kontakt': {
      pl: '/kontakt',
      en: '/contact'
    },
    '/aktywnosci': {
      pl: '/aktywnosci',
      en: '/activities'
    },
    '/galeria': {
      pl: '/galeria',
      en: '/gallery'
    },
    '/rezerwacja': {
      pl: '/rezerwacja',
      en: '/reservation'
    },
    '/dane-firmy': {
      pl: '/dane-firmy',
      en: '/company-info'
    },
    '/polityka-prywatnosci': {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy'
    },
    '/regulamin': {
      pl: '/regulamin',
      en: '/terms-and-conditions'
    },
    '/informacje-o-rezerwacji': {
      pl: '/informacje-o-rezerwacji',
      en: '/booking-information'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
