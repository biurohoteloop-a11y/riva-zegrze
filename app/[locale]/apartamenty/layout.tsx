import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartamenty Zegrze nad wodą | Nocleg nad Zalewem Zegrzyńskim | Riva Zegrze",
  description:
    "Apartamenty Zegrze nad wodą pod Warszawą. Luksusowy nocleg nad Zalewem Zegrzyńskim z basenem, siłownią i prywatną plażą. Apartamenty blisko Warszawy nad wodą. Sprawdź dostępność!",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/apartamenty",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/apartamenty",
      en: "https://rivazegrzeapartamenty.pl/en/apartments",
    },
  },
};

export default function ApartamentyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
