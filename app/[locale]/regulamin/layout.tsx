import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — Riva Zegrze Apartamenty",
  description:
    "Regulamin pobytu w apartamentach Riva Zegrze nad Jeziorem Zegrzyńskim. Zasady rezerwacji, pobytu i korzystania z udogodnień kompleksu.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rivazegrzeapartamenty.pl/regulamin",
  },
};

export default function RegulaminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
