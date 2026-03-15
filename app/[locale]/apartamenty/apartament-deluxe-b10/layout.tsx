import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament Deluxe B10 — 68 m² panoramiczny widok na jezioro",
  description:
    "Apartament Deluxe B10 — 68 m², przestronny apartament z panoramicznym widokiem na Jezioro Zegrzyńskie pod Warszawą. Nocleg Zegrze dla 4 osób z basenem i plażą. Zarezerwuj online od 872 zł/noc!",
  openGraph: {
    title: "Apartament Deluxe B10 — 68 m² panorama jeziora | Riva Zegrze",
    description:
      "Największy apartament nad wodą pod Warszawą — 68 m², panoramiczny widok na Jezioro Zegrzyńskie. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, plaża. Rezerwuj online od 872 zł/noc!",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/rooms/img_4647.jpg",
        width: 1200,
        height: 630,
        alt: "Apartament Deluxe B10 panoramiczny widok na jezioro — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament Deluxe B10 — 68 m² panorama jeziora | Riva Zegrze",
    description:
      "Apartament Deluxe B10 — 68 m², panoramiczny widok na Jezioro Zegrzyńskie pod Warszawą. Basen, plaża. Zarezerwuj online od 872 zł/noc!",
    images: ["https://rivazegrzeapartamenty.pl/images/rooms/img_4647.jpg"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10",
      en: "https://rivazegrzeapartamenty.pl/en/apartments/apartament-deluxe-b10",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10",
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
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10#room",
      name: "Apartament Deluxe B10 — 68 m² panoramiczny widok na Jezioro Zegrzyńskie",
      description:
        "Największy apartament 68 m² z panoramicznym widokiem na Jezioro Zegrzyńskie pod Warszawą. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża. Zarezerwuj online od 872 zł/noc!",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10",
      image: "https://rivazegrzeapartamenty.pl/images/rooms/img_4647.jpg",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      floorSize: { "@type": "QuantitativeValue", value: 68, unitCode: "MTK" },
      priceRange: "od 872 zł/noc",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Panoramiczny widok na jezioro", value: true },
        { "@type": "LocationFeatureSpecification", name: "Przestronny salon 68 m²", value: true },
        { "@type": "LocationFeatureSpecification", name: "2 sypialnie", value: true },
        { "@type": "LocationFeatureSpecification", name: "W pełni wyposażona kuchnia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Klimatyzacja", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smart TV 55 cali", value: true },
        { "@type": "LocationFeatureSpecification", name: "WiFi światłowodowy", value: true },
        { "@type": "LocationFeatureSpecification", name: "Premium kosmetyki", value: true },
      ],
      containedInPlace: { "@id": "https://rivazegrzeapartamenty.pl/#lodging" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://rivazegrzeapartamenty.pl" },
        { "@type": "ListItem", position: 2, name: "Apartamenty Zegrze", item: "https://rivazegrzeapartamenty.pl/apartamenty" },
        { "@type": "ListItem", position: 3, name: "Apartament Deluxe B10 — panorama jeziora", item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-deluxe-b10" },
      ],
    },
  ],
};

export default function ApartamentDeluxeB10Layout({ children }: { children: React.ReactNode }) {
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
