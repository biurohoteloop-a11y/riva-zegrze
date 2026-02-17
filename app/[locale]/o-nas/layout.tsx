import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas | Apartamenty blisko Warszawy nad wodą | Nocleg Zegrze | Riva Zegrze",
  description:
    "Poznaj Riva Zegrze — apartamenty blisko Warszawy nad wodą. Nocleg Zegrze nad Zalewem Zegrzyńskim w otoczeniu natury. Komfort, spokój i wyjątkowa lokalizacja.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/o-nas",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/o-nas",
      en: "https://rivazegrzeapartamenty.pl/en/about",
    },
  },
};

export default function ONasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
