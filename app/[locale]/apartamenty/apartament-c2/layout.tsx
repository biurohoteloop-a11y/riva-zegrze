import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament C2 — przestronny 68 m² nad Jeziorem Zegrzyńskim",
  description:
    "Apartament C2 w Riva Zegrze — przestronny 68 m² z widokiem na Jezioro Zegrzyńskie. Nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża. Od 900 zł/noc.",
  openGraph: {
    title: "Apartament C2 — przestronny 68 m² nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Przestronny apartament 68 m² z widokiem na Jezioro Zegrzyńskie. Kryty basen, siłownia, plaża. Od 900 zł/noc.",
    url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/gallery/apartments/c2/IMG_5993.JPG",
        width: 1200,
        height: 630,
        alt: "Apartament C2 przestronny 68 m² nad Jeziorem Zegrzyńskim — Riva Zegrze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartament C2 — przestronny 68 m² nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Apartament C2 — 68 m², przestronny nocleg nad Jeziorem Zegrzyńskim. Od 900 zł/noc.",
    images: ["https://rivazegrzeapartamenty.pl/images/gallery/apartments/c2/IMG_5993.JPG"],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/apartamenty/apartament-c2",
      en: "https://rivazegrzeapartamenty.pl/en/apartamenty/apartament-c2",
      "x-default": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2",
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
    },
    {
      "@type": "HotelRoom",
      "@id": "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2#room",
      name: "Apartament C2 — przestronny 68 m² nad Jeziorem Zegrzyńskim",
      description:
        "Przestronny apartament 68 m² z widokiem na Jezioro Zegrzyńskie. Idealny nocleg Zegrze dla 4 osób. Kryty basen, siłownia, prywatna plaża w kompleksie.",
      url: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2",
      image: "https://rivazegrzeapartamenty.pl/images/gallery/apartments/c2/IMG_5993.JPG",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      floorSize: { "@type": "QuantitativeValue", value: 68, unitCode: "MTK" },
      numberOfBedrooms: 1,
      numberOfBathroomsTotal: 1,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Przestronny salon z aneksem", value: true },
        { "@type": "LocationFeatureSpecification", name: "Widok na Jezioro Zegrzyńskie", value: true },
        { "@type": "LocationFeatureSpecification", name: "Panoramiczne przeszklenia", value: true },
        { "@type": "LocationFeatureSpecification", name: "W pełni wyposażona kuchnia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Klimatyzacja", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smart TV 55 cali", value: true },
      ],
      containedInPlace: { "@id": "https://rivazegrzeapartamenty.pl/#lodging" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://rivazegrzeapartamenty.pl" },
        { "@type": "ListItem", position: 2, name: "Apartamenty Zegrze", item: "https://rivazegrzeapartamenty.pl/apartamenty" },
        { "@type": "ListItem", position: 3, name: "Apartament C2", item: "https://rivazegrzeapartamenty.pl/apartamenty/apartament-c2" },
      ],
    },
  ],
};

export default function ApartamentC2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
