import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria — zdjęcia apartamentów i okolicy Riva Zegrze",
  description:
    "Galeria zdjęć Riva Zegrze — apartamenty nad Jeziorem Zegrzyńskim, basen, siłownia, prywatna plaża, okolica. Zobacz jak wygląda nocleg Zegrze w naszym kompleksie.",
  openGraph: {
    title: "Galeria — zdjęcia apartamentów i okolicy | Riva Zegrze",
    description:
      "Galeria zdjęć apartamentów nad Jeziorem Zegrzyńskim. Basen, siłownia, prywatna plaża, okolica.",
    url: "https://rivazegrzeapartamenty.pl/galeria",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://rivazegrzeapartamenty.pl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Galeria Riva Zegrze — apartamenty nad Jeziorem Zegrzyńskim",
      },
    ],
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/galeria",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/galeria",
      en: "https://rivazegrzeapartamenty.pl/en/galeria",
      "x-default": "https://rivazegrzeapartamenty.pl/galeria",
    },
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
