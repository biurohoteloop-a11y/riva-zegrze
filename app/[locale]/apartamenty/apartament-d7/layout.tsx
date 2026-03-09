import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament D7 — balkon z panoramicznym widokiem na okolicę",
  description:
    "Apartament D7 w Riva Zegrze — 38 m², 3 piętro, balkon z panoramicznym widokiem na okolicę nad Jeziorem Zegrzyńskim. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia. Od 544 zł/noc.",
  openGraph: {
    title: "Apartament D7 — balkon z panoramą na okolicę | Riva Zegrze",
    description:
      "Apartament 38 m² na 3 piętrze z balkonem i panoramicznym widokiem. Kryty basen, siłownia, plaża. Od 544 zł/noc.",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/rooms/img_3620.jpg",
        width: 1200,
        height: 630,
        alt: "Apartament D7 balkon panoramiczny widok — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament D7 — balkon z panoramą na okolicę | Riva Zegrze",
    description:
      "Apartament D7 — 38 m², 3 piętro, balkon z panoramicznym widokiem. Nocleg Zegrze od 544 zł/noc.",
    images: ["https://rivazegrzeapartamenty.pl/images/rooms/img_3620.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7",
      en: "https://rivazegrzeapartamenty.pl/en/apartments/apartament-d7",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://rivazegrzeapartamenty.pl/#lodging",
      name: "Riva Zegrze Apartamenty",
      url: "https://rivazegrzeapartamenty.pl",
      telephone: "+48510038038",
      email: "wynajem@rivazegrze.pl",
      image: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rybaki 11",
        addressLocality: "Zegrze Południowe",
        postalCode: "05-130",
        addressCountry: "PL",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "HotelRoom",
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7#room",
      name: "Apartament D7 — balkon z panoramicznym widokiem na okolicę",
      description:
        "Apartament 38 m² na 3 piętrze z balkonem i panoramicznym widokiem nad Jeziorem Zegrzyńskim. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża.",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7",
      image: "https://rivazegrzeapartamenty.pl/images/rooms/img_3620.jpg",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      floorSize: { "@type": "QuantitativeValue", value: 38, unitCode: "MTK" },
      priceRange: "od 544 zł/noc",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Balkon prywatny", value: true },
        { "@type": "LocationFeatureSpecification", name: "Panoramiczny widok", value: true },
        { "@type": "LocationFeatureSpecification", name: "3 piętro", value: true },
        { "@type": "LocationFeatureSpecification", name: "W pełni wyposażona kuchnia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Klimatyzacja", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smart TV 55 cali", value: true },
        { "@type": "LocationFeatureSpecification", name: "WiFi światłowodowy", value: true },
      ],
      containedInPlace: { "@id": "https://rivazegrzeapartamenty.pl/#lodging" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://rivazegrzeapartamenty.pl" },
        { "@type": "ListItem", position: 2, name: "Apartamenty Zegrze", item: "https://rivazegrzeapartamenty.pl/apartamenty" },
        { "@type": "ListItem", position: 3, name: "Apartament D7 — balkon z panoramą", item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d7" },
      ],
    },
  ],
};

export default function ApartamentD7Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
