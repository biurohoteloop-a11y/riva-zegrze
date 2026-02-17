import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Nocleg Zegrze | Apartamenty nad wodą pod Warszawą | Riva Zegrze",
  description:
    "Zarezerwuj nocleg Zegrze — skontaktuj się z nami. Apartamenty nad wodą pod Warszawą, blisko Zalewu Zegrzyńskiego. Telefon, e-mail, lokalizacja.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/kontakt",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/kontakt",
      en: "https://rivazegrzeapartamenty.pl/en/contact",
    },
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
