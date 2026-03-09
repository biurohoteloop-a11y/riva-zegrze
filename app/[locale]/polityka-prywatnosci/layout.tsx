import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności — Riva Zegrze Apartamenty",
  description:
    "Polityka prywatności serwisu rivazegrzeapartamenty.pl. Informacje o przetwarzaniu danych osobowych, cookies i prawach użytkowników.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/polityka-prywatnosci",
  },
};

export default function PolitykaPrywatnosciLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
