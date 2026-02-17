import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../globals.css";
import "aos/dist/aos.css";
import CookieConsent from "../components/CookieConsent";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

const GTM_ID = "GTM-PQVRVNPC";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
  description:
    "Nocleg Zegrze w luksusowych apartamentach nad wodą pod Warszawą. Apartamenty Zegrze z basenem, siłownią i prywatną plażą. Idealny nocleg nad Zalewem Zegrzyńskim blisko Warszawy.",
  keywords: [
    "nocleg Zegrze",
    "apartamenty nad wodą pod Warszawą",
    "nocleg Warszawa i okolice",
    "nocleg nad Zalewem Zegrzyńskim",
    "apartamenty Zegrze",
    "apartamenty blisko Warszawy nad wodą",
    "Riva Zegrze",
    "apartamenty nad Jeziorem Zegrzyńskim",
    "wynajem apartamentów Zegrze",
    "weekend nad wodą Warszawa",
    "noclegi Zegrze Południowe",
    "apartamenty z basenem Zegrze",
    "luksusowe apartamenty pod Warszawą",
    "apartamenty z widokiem na jezioro",
  ],
  verification: {
    google: "IpC-wMFg0yEZ95SRuxh7pmFPLoZhWTBKG7cRWnrD3l0",
  },
  openGraph: {
    title: "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
    description:
      "Nocleg Zegrze — luksusowe apartamenty nad wodą pod Warszawą. Basen, siłownia, prywatna plaża nad Zalewem Zegrzyńskim.",
    url: "https://rivazegrzeapartamenty.pl",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Zegrze - Apartamenty nad Jeziorem Zegrzyńskim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
    description:
      "Nocleg Zegrze — apartamenty nad wodą pod Warszawą. Komfort, natura i wyjątkowa lokalizacja nad Zalewem Zegrzyńskim.",
    images: ["https://rivazegrzeapartamenty.pl/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl",
      en: "https://rivazegrzeapartamenty.pl/en",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
