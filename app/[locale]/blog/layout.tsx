import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Weekend nad Jeziorem Zegrzyńskim — noclegi nad wodą pod Warszawą",
  description:
    "Planujesz weekend nad Jeziorem Zegrzyńskim? Sprawdź noclegi nad wodą pod Warszawą — komfortowe apartamenty nad Zalewem Zegrzyńskim z basenem, plażą i siłownią. Rezerwuj bezpośrednio online.",
  keywords: [
    "weekend nad jeziorem zegrzyńskim",
    "noclegi nad wodą pod Warszawą",
    "noclegi nad zalewem zegrzyńskim",
    "apartamenty nad Jeziorem Zegrzyńskim",
    "nocleg nad wodą pod Warszawą",
    "weekend nad wodą Warszawa",
    "apartamenty nad Zalewem Zegrzyńskim",
    "nocleg Zegrze",
    "Riva Zegrze",
  ],
  openGraph: {
    title:
      "Weekend nad Jeziorem Zegrzyńskim — noclegi nad wodą pod Warszawą | Riva Zegrze",
    description:
      "Komfortowe apartamenty nad Zalewem Zegrzyńskim z basenem, plażą i siłownią. Idealne na weekend nad wodą pod Warszawą. Rezerwuj online.",
    url: "https://rivazegrzeapartamenty.pl/blog",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "article",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weekend nad Jeziorem Zegrzyńskim — Riva Zegrze",
      },
    ],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/blog",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/blog",
      en: "https://rivazegrzeapartamenty.pl/en/blog",
      "x-default": "https://rivazegrzeapartamenty.pl/blog",
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
