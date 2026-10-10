import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES_MASTER } from "@/data/servicesMaster";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const currentDate = new Date();

  // 1. Core Priority Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  // 2. Specialized Carpentry Service Category Pages (All 8 Master Hubs)
  const serviceRoutes: MetadataRoute.Sitemap = CARPENTER_SERVICES_MASTER.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Hyperlocal Hyderabad Dispatch Pages (All 25+ Localities)
  const areaRoutes: MetadataRoute.Sitemap = HYDERABAD_AREAS.map((area) => ({
    url: `${baseUrl}/hyderabad/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
