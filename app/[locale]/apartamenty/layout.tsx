import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartamenty Zegrze — nocleg nad Jeziorem Zegrzyńskim",
  description:
    "Apartamenty Zegrze nad wodą pod Warszawą — 8 luksusowych apartamentów od 480 zł/noc. Basen, siłownia, plaża. Zarezerwuj online — sprawdź wolne terminy!",
  openGraph: {
    title: "Apartamenty Zegrze — nocleg nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Nocleg Zegrze — wynajem apartamentów nad Jeziorem Zegrzyńskim od 480 zł/noc. Basen, siłownia, prywatna plaża pod Warszawą. Rezerwuj bezpośrednio online 24/7!",
    url: "https://rivazegrzeapartamenty.pl/apartamenty",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamenty Zegrze nad Jeziorem Zegrzyńskim — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamenty Zegrze — nocleg nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartamenty nad wodą pod Warszawą od 480 zł/noc. Basen, siłownia, plaża. Zarezerwuj online już dziś!",
    images: ["https://rivazegrzeapartamenty.pl/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty",
      en: "https://rivazegrzeapartamenty.pl/en/apartamenty",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://rivazegrzeapartamenty.pl" },
    { "@type": "ListItem", position: 2, name: "Apartamenty Zegrze", item: "https://rivazegrzeapartamenty.pl/apartamenty" },
  ],
};

export default function ApartamentyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
