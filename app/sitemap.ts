import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rivazegrzeapartamenty.pl";
  const lastModified = new Date();
  const locales = ["pl", "en"];

  const staticPages = [
    { path: "", priority: 1.0, changeFreq: "daily" as const },
    { path: "/apartamenty", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-c1", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-c4", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-c7", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-d1", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-d4", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-d7", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/apartamenty/apartament-deluxe-b10", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/galeria", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/o-nas", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/kontakt", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/aktywnosci", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/offers", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/rezerwacja", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/informacje-o-rezerwacji", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/polityka-prywatnosci", priority: 0.2, changeFreq: "yearly" as const },
    { path: "/regulamin", priority: 0.2, changeFreq: "yearly" as const },
    { path: "/dane-firmy", priority: 0.3, changeFreq: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: {
            pl: `${baseUrl}/pl${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
