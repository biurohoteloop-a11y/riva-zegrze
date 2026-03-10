import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rivazegrzeapartamenty.pl";
  const lastModified = new Date();

  const pages: Array<{
    pl: string;
    en: string;
    priority: number;
    changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  }> = [
    { pl: "", en: "/en", priority: 1.0, changeFreq: "daily" },
    { pl: "/apartamenty", en: "/en/apartments", priority: 0.9, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-c1", en: "/en/apartamenty/apartament-c1", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-c2", en: "/en/apartamenty/apartament-c2", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-c4", en: "/en/apartamenty/apartament-c4", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-c7", en: "/en/apartamenty/apartament-c7", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-d1", en: "/en/apartamenty/apartament-d1", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-d4", en: "/en/apartamenty/apartament-d4", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-d7", en: "/en/apartamenty/apartament-d7", priority: 0.8, changeFreq: "weekly" },
    { pl: "/apartamenty/apartament-deluxe-b10", en: "/en/apartamenty/apartament-deluxe-b10", priority: 0.8, changeFreq: "weekly" },
    { pl: "/galeria", en: "/en/gallery", priority: 0.7, changeFreq: "monthly" },
    { pl: "/o-nas", en: "/en/about", priority: 0.6, changeFreq: "monthly" },
    { pl: "/kontakt", en: "/en/contact", priority: 0.7, changeFreq: "monthly" },
    { pl: "/aktywnosci", en: "/en/activities", priority: 0.7, changeFreq: "monthly" },
    { pl: "/rezerwacja", en: "/en/reservation", priority: 0.8, changeFreq: "weekly" },
    { pl: "/informacje-o-rezerwacji", en: "/en/informacje-o-rezerwacji", priority: 0.5, changeFreq: "monthly" },
    { pl: "/dane-firmy", en: "/en/dane-firmy", priority: 0.3, changeFreq: "yearly" },
    { pl: "/polityka-prywatnosci", en: "/en/polityka-prywatnosci", priority: 0.2, changeFreq: "yearly" },
    { pl: "/regulamin", en: "/en/regulamin", priority: 0.2, changeFreq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}${page.pl}`,
      lastModified,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          pl: `${baseUrl}${page.pl}`,
          en: `${baseUrl}${page.en}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}${page.en}`,
      lastModified,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          pl: `${baseUrl}${page.pl}`,
          en: `${baseUrl}${page.en}`,
        },
      },
    });
  }

  return entries;
}