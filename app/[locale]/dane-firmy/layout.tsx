import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dane firmy — Riva Zegrze Apartamenty",
  description:
    "Dane firmy Riva Zegrze Apartamenty. Adres: Rybaki 11, 05-130 Zegrze Południowe. Informacje o firmie zarządzającej kompleksem apartamentów.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/dane-firmy",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/dane-firmy",
      en: "https://rivazegrzeapartamenty.pl/en/dane-firmy",
      "x-default": "https://rivazegrzeapartamenty.pl/dane-firmy",
    },
  },
};

export default function DaneFirmyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
