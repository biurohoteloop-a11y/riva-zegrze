import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament C1 — taras i ogródek nad Jeziorem Zegrzyńskim",
  description:
    "Apartament C1 — 38 m², prywatny taras i ogródek nad Jeziorem Zegrzyńskim pod Warszawą. Nocleg Zegrze dla 4 osób z basenem i plażą. Zarezerwuj online od 640 zł/noc!",
  openGraph: {
    title: "Apartament C1 — taras i ogródek nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartament nad wodą pod Warszawą — 38 m², prywatny taras 15 m² i ogródek. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, plaża. Rezerwuj bezpośrednio online od 640 zł/noc!",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/rooms/t3s-rivazegrze-3107-m.jpg",
        width: 1200,
        height: 630,
        alt: "Apartament C1 taras ogródek nad Jeziorem Zegrzyńskim — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament C1 — taras i ogródek nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartament C1 — 38 m², taras i ogródek nad Jeziorem Zegrzyńskim pod Warszawą. Basen, plaża. Zarezerwuj online od 640 zł/noc!",
    images: ["https://rivazegrzeapartamenty.pl/images/rooms/t3s-rivazegrze-3107-m.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
      en: "https://rivazegrzeapartamenty.pl/en/apartments/apartament-c1",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
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
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Kryty podgrzewany basen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Siłownia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Prywatna plaża", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parking bezpłatny", value: true },
        { "@type": "LocationFeatureSpecification", name: "WiFi światłowodowy", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smart TV 55 cali", value: true },
      ],
    },
    {
      "@type": "HotelRoom",
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1#room",
      name: "Apartament C1 — taras i ogródek nad Jeziorem Zegrzyńskim",
      description:
        "Apartament 38 m² z prywatnym tarasem 15 m² i ogródkiem nad Jeziorem Zegrzyńskim pod Warszawą. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża. Zarezerwuj online od 640 zł/noc!",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
      image: "https://rivazegrzeapartamenty.pl/images/rooms/t3s-rivazegrze-3107-m.jpg",
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 4,
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: 38,
        unitCode: "MTK",
      },
      priceRange: "od 640 zł/noc",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Prywatny taras 15 m²", value: true },
        { "@type": "LocationFeatureSpecification", name: "Prywatny ogródek", value: true },
        { "@type": "LocationFeatureSpecification", name: "Bezpośredni dostęp do jeziora", value: true },
        { "@type": "LocationFeatureSpecification", name: "Panoramiczne przeszklenia", value: true },
        { "@type": "LocationFeatureSpecification", name: "W pełni wyposażona kuchnia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Klimatyzacja", value: true },
        { "@type": "LocationFeatureSpecification", name: "Premium kosmetyki", value: true },
      ],
      containedInPlace: {
        "@id": "https://rivazegrzeapartamenty.pl/#lodging",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: "https://rivazegrzeapartamenty.pl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Apartamenty Zegrze",
          item: "https://rivazegrzeapartamenty.pl/apartamenty",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Apartament C1 — taras i ogródek nad jeziorem",
          item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c1",
        },
      ],
    },
  ],
};

export default function ApartamentC1Layout({ children }: { children: React.ReactNode }) {
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
