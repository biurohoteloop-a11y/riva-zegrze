import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informacje o rezerwacji — Riva Zegrze Apartamenty",
  description:
    "Informacje o rezerwacji apartamentów Riva Zegrze — zasady zameldowania, wymeldowania, płatności i anulacji. Wszystko co musisz wiedzieć przed przyjazdem.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/informacje-o-rezerwacji",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/informacje-o-rezerwacji",
      en: "https://rivazegrzeapartamenty.pl/en/informacje-o-rezerwacji",
      "x-default": "https://rivazegrzeapartamenty.pl/informacje-o-rezerwacji",
    },
  },
};

export default function InformacjeORezerwacjiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
