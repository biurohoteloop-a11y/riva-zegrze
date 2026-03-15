import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament D1 — taras nad Jeziorem Zegrzyńskim",
  description:
    "Apartament D1 — 38 m², przytulny apartament z tarasem nad Jeziorem Zegrzyńskim pod Warszawą. Nocleg Zegrze dla 4 osób z basenem i plażą. Zarezerwuj online od 480 zł/noc!",
  openGraph: {
    title: "Apartament D1 — taras nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartament nad wodą pod Warszawą — 38 m², taras nad Jeziorem Zegrzyńskim. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, plaża. Rezerwuj bezpośrednio online od 480 zł/noc!",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/rooms/img_3622.jpg",
        width: 1200,
        height: 630,
        alt: "Apartament D1 taras nad Jeziorem Zegrzyńskim — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament D1 — taras nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartament D1 — 38 m², taras nad Jeziorem Zegrzyńskim pod Warszawą. Basen, plaża. Zarezerwuj online od 480 zł/noc!",
    images: ["https://rivazegrzeapartamenty.pl/images/rooms/img_3622.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1",
      en: "https://rivazegrzeapartamenty.pl/en/apartments/apartament-d1",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1",
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
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1#room",
      name: "Apartament D1 — taras nad Jeziorem Zegrzyńskim",
      description:
        "Apartament 38 m² z tarasem nad Jeziorem Zegrzyńskim pod Warszawą. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża. Zarezerwuj online od 480 zł/noc!",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1",
      image: "https://rivazegrzeapartamenty.pl/images/rooms/img_3622.jpg",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      floorSize: { "@type": "QuantitativeValue", value: 38, unitCode: "MTK" },
      priceRange: "od 480 zł/noc",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Taras prywatny", value: true },
        { "@type": "LocationFeatureSpecification", name: "Widok na jezioro", value: true },
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
        { "@type": "ListItem", position: 3, name: "Apartament D1 — taras nad jeziorem", item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-d1" },
      ],
    },
  ],
};

export default function ApartamentD1Layout({ children }: { children: React.ReactNode }) {
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
