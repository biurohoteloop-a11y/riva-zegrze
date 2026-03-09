import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament C7 — taras z bocznym widokiem na jezioro",
  description:
    "Apartament C7 w Riva Zegrze — 37 m², nowoczesny apartament z tarasem i bocznym widokiem na Jezioro Zegrzyńskie. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia. Od 624 zł/noc.",
  openGraph: {
    title: "Apartament C7 — taras z widokiem na jezioro | Riva Zegrze",
    description:
      "Nowoczesny apartament 37 m² z tarasem i bocznym widokiem na Jezioro Zegrzyńskie. Kryty basen, siłownia, plaża. Od 624 zł/noc.",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/rooms/img_3650.jpg",
        width: 1200,
        height: 630,
        alt: "Apartament C7 taras widok na jezioro — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament C7 — taras z widokiem na jezioro | Riva Zegrze",
    description:
      "Apartament C7 — 37 m², taras z bocznym widokiem na Jezioro Zegrzyńskie. Nocleg Zegrze od 624 zł/noc.",
    images: ["https://rivazegrzeapartamenty.pl/images/rooms/img_3650.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7",
      en: "https://rivazegrzeapartamenty.pl/en/apartments/apartament-c7",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7",
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
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7#room",
      name: "Apartament C7 — taras z bocznym widokiem na Jezioro Zegrzyńskie",
      description:
        "Nowoczesny apartament 37 m² z tarasem i bocznym widokiem na Jezioro Zegrzyńskie. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża.",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7",
      image: "https://rivazegrzeapartamenty.pl/images/rooms/img_3650.jpg",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      floorSize: { "@type": "QuantitativeValue", value: 37, unitCode: "MTK" },
      priceRange: "od 624 zł/noc",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Taras prywatny", value: true },
        { "@type": "LocationFeatureSpecification", name: "Boczny widok na jezioro", value: true },
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
        { "@type": "ListItem", position: 3, name: "Apartament C7 — taras z widokiem na jezioro", item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c7" },
      ],
    },
  ],
};

export default function ApartamentC7Layout({ children }: { children: React.ReactNode }) {
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
