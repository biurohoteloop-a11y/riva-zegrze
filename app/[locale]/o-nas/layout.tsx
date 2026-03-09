import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas — Riva Zegrze Apartamenty nad Jeziorem Zegrzyńskim",
  description:
    "Poznaj Riva Zegrze — luksusowy kompleks apartamentów nad Jeziorem Zegrzyńskim pod Warszawą. Nowoczesna architektura, kryty basen, siłownia, prywatna plaża.",
  openGraph: {
    title: "O nas — Riva Zegrze Apartamenty | Riva Zegrze",
    description:
      "Luksusowy kompleks apartamentów nad Jeziorem Zegrzyńskim. Nowoczesna architektura, basen, siłownia, prywatna plaża.",
    url: "https://rivazegrzeapartamenty.pl/o-nas",
    siteName: "Riva Zegrze",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/o-nas",
    languages: {
      pl: "https://rivazegrzeapartamenty.pl/pl/o-nas",
      en: "https://rivazegrzeapartamenty.pl/en/o-nas",
      "x-default": "https://rivazegrzeapartamenty.pl/o-nas",
    },
  },
};

export default function ONasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
