import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria | Apartamenty Zegrze nad wodą | Nocleg Zegrze | Riva Zegrze",
  description:
    "Zobacz zdjęcia apartamentów Zegrze nad wodą pod Warszawą. Luksusowe wnętrza, widoki na Zalew Zegrzyński, basen i prywatna plaża. Nocleg blisko Warszawy nad wodą.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/galeria",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/galeria",
      en: "https://rivazegrzeapartamenty.pl/en/gallery",
    },
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
