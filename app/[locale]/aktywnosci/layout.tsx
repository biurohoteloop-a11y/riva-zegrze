import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktywności nad Zalewem Zegrzyńskim | Nocleg Zegrze | Riva Zegrze",
  description:
    "Aktywności podczas noclegu Zegrze — żeglarstwo, kajaki, rowery, plaża. Apartamenty nad wodą pod Warszawą z dostępem do atrakcji nad Zalewem Zegrzyńskim.",
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/aktywnosci",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/aktywnosci",
      en: "https://rivazegrzeapartamenty.pl/en/activities",
    },
  },
};

export default function AktywnosciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
