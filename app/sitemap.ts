import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 1. Homepage & Core Pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  // 2. All 25+ Hyderabad Area Pages
  HYDERABAD_AREAS.forEach((area) => {
    routes.push({
      url: `${baseUrl}/hyderabad/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // 3. All 6 High-Intent Service Category Pages
  CARPENTER_SERVICES.forEach((service) => {
    routes.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  return routes;
}
