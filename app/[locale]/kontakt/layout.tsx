import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — rezerwacja apartamentów Riva Zegrze",
  description:
    "Kontakt z Riva Zegrze — rezerwacja apartamentów nad Jeziorem Zegrzyńskim. Telefon: +48 510 038 038, email: wynajem@rivazegrze.pl. Adres: Rybaki 11, Zegrze Południowe.",
  openGraph: {
    title: "Kontakt — rezerwacja apartamentów | Riva Zegrze",
    description:
      "Skontaktuj się z nami: +48 510 038 038, wynajem@rivazegrze.pl. Apartamenty nad Jeziorem Zegrzyńskim.",
    url: "https://rivazegrzeapartamenty.pl/kontakt",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/kontakt",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/kontakt",
      en: "https://rivazegrzeapartamenty.pl/en/kontakt",
      "x-default": "https://rivazegrzeapartamenty.pl/kontakt",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Riva Zegrze Apartamenty",
  url: "https://rivazegrzeapartamenty.pl",
  telephone: "+48510038038",
  email: "wynajem@rivazegrze.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rybaki 11",
    addressLocality: "Zegrze Południowe",
    postalCode: "05-130",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4397,
    longitude: 20.9917,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
