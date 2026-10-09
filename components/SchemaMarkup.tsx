import React from "react";
import { siteConfig } from "@/config/site";
import { CARPENTER_SERVICES } from "@/data/services";

/**
 * SchemaMarkup Props
 * Configurable metadata passed to generate enterprise structured data graphs.
 */
interface SchemaMarkupProps {
  type?: "home" | "area" | "service";
  areaName?: string;
  areaSlug?: string;
  pincode?: string;
  serviceName?: string;
  serviceSlug?: string;
  faqs?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
  ratingValue?: number;
  reviewCount?: number;
}

/**
 * Enterprise Multi-Graph JSON-LD Schema Generator
 *
 * Implements Google Search Central guidelines for LocalBusiness,
 * HomeAndConstructionBusiness, Service, OfferCatalog, FAQPage, and BreadcrumbList.
 * Structured as a unified JSON-LD @graph to maximize entity association and rich snippet eligibility.
 */
export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = "home",
  areaName,
  areaSlug,
  pincode = "500001",
  serviceName,
  serviceSlug,
  faqs = [],
  breadcrumbs = [],
  ratingValue = 4.9,
  reviewCount = 4280
}) => {
  // Determine canonical URL for the active page
  const currentUrl =
    type === "area" && areaSlug
      ? `${siteConfig.url}/hyderabad/${areaSlug}`
      : type === "service" && serviceSlug
      ? `${siteConfig.url}/services/${serviceSlug}`
      : siteConfig.url;

  // Localized business display name for entity grounding
  const businessName = areaName
    ? `${siteConfig.name} - ${areaName}`
    : siteConfig.name;

  // Build OfferCatalog encompassing all high-volume carpentry services
  const offerCatalogItems = CARPENTER_SERVICES.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.description,
    priceCurrency: "INR",
    price: service.startingPrice.replace(/[^\d]/g, "") || "199",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/services/${service.slug}`
  }));

  // Construct Primary LocalBusiness / HomeAndConstructionBusiness Entity
  const localBusinessEntity = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${currentUrl}#business`,
    name: businessName,
    alternateName: [
      "Carpenter Repair Hyderabad",
      "Doorstep Carpenter Hyderabad",
      areaName ? `Carpenter Repair in ${areaName}` : "Best Carpenter Near Me Hyderabad"
    ],
    url: currentUrl,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "₹₹",
    image: siteConfig.ogImage,
    logo: `${siteConfig.url}/logo.png`,
    description: areaName
      ? `Top-rated door, sliding wardrobe, modular kitchen & furniture carpenter repair service in ${areaName}, Hyderabad. 25-35 minute doorstep arrival with 30-day service guarantee.`
      : siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: areaName ? `${areaName} Local Dispatch Center` : "Begumpet & Miyapur Dispatch Hubs",
      addressLocality: areaName || "Hyderabad",
      addressRegion: "Telangana",
      postalCode: pincode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "08:00",
        closes: "21:30"
      }
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName ? `${areaName}, Hyderabad` : "Hyderabad & Secunderabad, Telangana"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential & Commercial Carpentry Services",
      itemListElement: offerCatalogItems
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString()
    }
  };

  // Construct Service Entity (if on a service route)
  const serviceEntity = serviceName
    ? {
        "@type": "Service",
        "@id": `${currentUrl}#service`,
        serviceType: serviceName,
        provider: {
          "@id": `${currentUrl}#business`
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: areaName ? `${areaName}, Hyderabad` : "Hyderabad & Secunderabad"
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "199",
          availability: "https://schema.org/InStock",
          url: currentUrl
        }
      }
    : null;

  // Construct FAQPage Entity (if FAQs present)
  const faqEntity =
    faqs.length > 0
      ? {
          "@type": "FAQPage",
          "@id": `${currentUrl}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer
            }
          }))
        }
      : null;

  // Construct BreadcrumbList Entity
  const breadcrumbEntity =
    breadcrumbs.length > 0
      ? {
          "@type": "BreadcrumbList",
          "@id": `${currentUrl}#breadcrumbs`,
          itemListElement: breadcrumbs.map((b, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: b.name,
            item: b.url
          }))
        }
      : null;

  // Combine all active entities into a cohesive @graph
  const graph: object[] = [localBusinessEntity];
  if (serviceEntity) graph.push(serviceEntity);
  if (faqEntity) graph.push(faqEntity);
  if (breadcrumbEntity) graph.push(breadcrumbEntity);

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  );
};
