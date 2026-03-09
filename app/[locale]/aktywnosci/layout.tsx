import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktywności — co robić nad Jeziorem Zegrzyńskim",
  description:
    "Aktywności w okolicy Riva Zegrze — żeglarstwo, kajaki, rowerem, plaża nad Jeziorem Zegrzyńskim. Sprawdź atrakcje dostępne podczas pobytu w apartamentach Zegrze.",
  openGraph: {
    title: "Aktywności — co robić nad Jeziorem Zegrzyńskim | Riva Zegrze",
    description:
      "Żeglarstwo, kajaki, rowery, plaża nad Jeziorem Zegrzyńskim. Atrakcje w okolicy apartamentów Riva Zegrze.",
    url: "https://rivazegrzeapartamenty.pl/aktywnosci",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/aktywnosci",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/aktywnosci",
      en: "https://rivazegrzeapartamenty.pl/en/aktywnosci",
      "x-default": "https://rivazegrzeapartamenty.pl/aktywnosci",
    },
  },
};

export default function AktywnosciLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
