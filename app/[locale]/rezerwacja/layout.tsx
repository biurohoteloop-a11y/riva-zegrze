import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezerwacja — zarezerwuj apartament nad Jeziorem Zegrzyńskim",
  description:
    "Rezerwacja apartamentu w Riva Zegrze nad Jeziorem Zegrzyńskim. Sprawdź dostępność i zarezerwuj nocleg Zegrze online. Od 480 zł/noc.",
  openGraph: {
    title: "Rezerwacja — zarezerwuj apartament | Riva Zegrze",
    description:
      "Zarezerwuj apartament nad Jeziorem Zegrzyńskim. Sprawdź dostępność online. Od 480 zł/noc.",
    url: "https://rivazegrzeapartamenty.pl/rezerwacja",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/rezerwacja",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/rezerwacja",
      en: "https://rivazegrzeapartamenty.pl/en/rezerwacja",
      "x-default": "https://rivazegrzeapartamenty.pl/rezerwacja",
    },
  },
};

export default function RezerwacjaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
