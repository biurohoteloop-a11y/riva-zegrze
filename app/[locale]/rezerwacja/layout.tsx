import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezerwacja | Nocleg nad Zalewem Zegrzyńskim | Apartamenty Zegrze | Riva Zegrze",
  description:
    "Zarezerwuj nocleg nad Zalewem Zegrzyńskim. Apartamenty Zegrze blisko Warszawy nad wodą. Sprawdź dostępność i ceny. Nocleg Warszawa i okolice.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/rezerwacja",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/rezerwacja",
      en: "https://rivazegrzeapartamenty.pl/en/reservation",
    },
  },
};

export default function RezerwacjaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
