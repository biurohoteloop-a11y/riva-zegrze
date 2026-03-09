import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import HomePageClient from "../components/sections/HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const isEn = locale === "en";

  return {
    title: isEn
      ? "Riva Zegrze | Luxury Apartments by Zegrze Lake near Warsaw"
      : "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
    description: isEn
      ? "Luxury apartments by Zegrze Lake near Warsaw. Pool, gym, private beach. Modern apartments with lake view from 480 PLN/night."
      : "Nocleg Zegrze w luksusowych apartamentach nad wodą pod Warszawą. Apartamenty Zegrze z basenem, siłownią i prywatną plażą. Idealny nocleg nad Zalewem Zegrzyńskim blisko Warszawy.",
    keywords: isEn
      ? [
          "Zegrze Lake apartments",
          "accommodation near Warsaw",
          "lakeside apartments Poland",
          "Riva Zegrze",
          "apartments with pool near Warsaw",
          "weekend getaway Warsaw",
        ]
      : [
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
    openGraph: {
      title: isEn
        ? "Riva Zegrze | Luxury Apartments by Zegrze Lake"
        : "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
      description: isEn
        ? "Luxury apartments by Zegrze Lake near Warsaw. Pool, gym, private beach."
        : "Nocleg Zegrze — luksusowe apartamenty nad wodą pod Warszawą. Basen, siłownia, prywatna plaża nad Zalewem Zegrzyńskim.",
      url: `https://rivazegrzeapartamenty.pl/${locale}`,
      siteName: "Riva Zegrze",
      locale: isEn ? "en_US" : "pl_PL",
      alternateLocale: isEn ? "pl_PL" : "en_US",
      type: "website",
      images: [
        {
          url: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isEn
            ? "Riva Zegrze - Apartments by Zegrze Lake"
            : "Riva Zegrze - Apartamenty nad Jeziorem Zegrzyńskim",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "Riva Zegrze | Luxury Apartments by Zegrze Lake"
        : "Riva Zegrze | Apartamenty nad Jeziorem Zegrzyńskim",
      description: isEn
        ? "Luxury apartments by Zegrze Lake near Warsaw."
        : "Nocleg Zegrze — apartamenty nad wodą pod Warszawą.",
      images: ["https://rivazegrzeapartamenty.pl/images/og-image.jpg"],
    },
    alternates: {
      canonical: `https://rivazegrzeapartamenty.pl/${locale}`,
      languages: {
        pl: "https://rivazegrzeapartamenty.pl/pl",
        en: "https://rivazegrzeapartamenty.pl/en",
        "x-default": "https://rivazegrzeapartamenty.pl",
      },
    },
  };
}

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
      description:
        "Luksusowe apartamenty nad Jeziorem Zegrzyńskim pod Warszawą. Nocleg Zegrze z krytym basenem, siłownią i prywatną plażą. 8 nowoczesnych apartamentów od 480 zł/noc.",
      priceRange: "480 zł - 900 zł / noc",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rybaki 11",
        addressLocality: "Zegrze Południowe",
        postalCode: "05-130",
        addressRegion: "mazowieckie",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.4397,
        longitude: 20.9917,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Kryty podgrzewany basen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Siłownia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Prywatna plaża", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parking bezpłatny", value: true },
        { "@type": "LocationFeatureSpecification", name: "WiFi światłowodowy", value: true },
        { "@type": "LocationFeatureSpecification", name: "Klimatyzacja", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smart TV", value: true },
      ],
      numberOfRooms: 8,
      starRating: {
        "@type": "Rating",
        ratingValue: "4",
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      availableLanguage: ["Polish", "English"],
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Apartamenty Riva Zegrze",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "HotelRoom",
              name: "Apartament C1 — taras i ogródek",
              description: "38 m², prywatny taras i ogródek nad Jeziorem Zegrzyńskim",
              occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
              floorSize: { "@type": "QuantitativeValue", value: 38, unitCode: "MTK" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "630",
              priceCurrency: "PLN",
              unitText: "noc",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "HotelRoom",
              name: "Apartament C2 — przestronny 68 m²",
              description: "68 m², przestronny apartament z widokiem na Jezioro Zegrzyńskie",
              occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
              floorSize: { "@type": "QuantitativeValue", value: 68, unitCode: "MTK" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "900",
              priceCurrency: "PLN",
              unitText: "noc",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "HotelRoom",
              name: "Apartament D1 — nad Zalewem Zegrzyńskim",
              description: "38 m², komfortowy apartament nad Zalewem Zegrzyńskim",
              occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
              floorSize: { "@type": "QuantitativeValue", value: 38, unitCode: "MTK" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "480",
              priceCurrency: "PLN",
              unitText: "noc",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "HotelRoom",
              name: "Apartament Deluxe B10 — luksusowy 68 m²",
              description:
                "68 m², największy i najbardziej luksusowy apartament z panoramicznym widokiem",
              occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
              floorSize: { "@type": "QuantitativeValue", value: 68, unitCode: "MTK" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "900",
              priceCurrency: "PLN",
              unitText: "noc",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://rivazegrzeapartamenty.pl/#website",
      url: "https://rivazegrzeapartamenty.pl",
      name: "Riva Zegrze Apartamenty",
      inLanguage: ["pl-PL", "en-US"],
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
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
