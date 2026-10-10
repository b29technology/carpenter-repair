import React from "react";
import { siteConfig } from "@/config/site";
import { CARPENTER_SERVICES } from "@/data/services";
import { HYDERABAD_AREAS } from "@/data/areas";

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
 * HomeAndConstructionBusiness, Service, OfferCatalog, FAQPage, HowTo, and BreadcrumbList.
 * Structured as a unified JSON-LD @graph for Deep SEO, AEO, and GEO Authority.
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
  reviewCount = 4280,
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
    price: service.startingPrice.replace(/[^\d]/g, "") || "100",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/services/${service.slug}`,
  }));

  // Hyperlocal Geographic Coverage Area Entities (GEO Grounding)
  const areaEntities = HYDERABAD_AREAS.slice(0, 25).map((a) => ({
    "@type": "City",
    name: `${a.name}, Hyderabad`,
    postalCode: a.pincode,
    containedInPlace: {
      "@type": "State",
      name: "Telangana",
    },
  }));

  // Construct Primary LocalBusiness / HomeAndConstructionBusiness Entity
  const localBusinessEntity = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: businessName,
    alternateName: [
      "Carpenter Repair Hyderabad",
      "Doorstep Carpenter Hyderabad",
      areaName ? `Carpenter Repair in ${areaName}` : "Best Carpenter Near Me Hyderabad",
      "Hyderabad Certified Master Craftsmen Network",
    ],
    url: currentUrl,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "₹99 - ₹1499",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm, Net Banking, Credit Card, Debit Card",
    hasMap: "https://maps.google.com/?q=Hyderabad,Telangana",
    image: siteConfig.ogImage,
    logo: `${siteConfig.url}/favicon.svg`,
    description: areaName
      ? `Top-rated door, sliding wardrobe, modular kitchen & furniture carpenter repair service in ${areaName}, Hyderabad. 25-35 minute doorstep arrival with 30-day service guarantee.`
      : siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: areaName ? `${areaName} Local Dispatch Center` : "Begumpet & Miyapur Dispatch Hubs",
      addressLocality: areaName || "Hyderabad",
      addressRegion: "Telangana",
      postalCode: pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: "45000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:30",
      },
    ],
    areaServed: areaName
      ? {
          "@type": "City",
          name: `${areaName}, Hyderabad`,
          postalCode: pincode,
        }
      : areaEntities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential & Commercial Doorstep Carpentry Services",
      itemListElement: offerCatalogItems,
    },
    knowsAbout: [
      "Wooden Door Alignment & Swelling Planing",
      "Mortise Lock Fitting & Godrej Hardware",
      "Sliding Wardrobe Heavy Roller Realignment",
      "Soft-Close Hydraulic Hinge Replacement",
      "Modular Kitchen Tandem Boxes & Lift-Up Shutters",
      "Hydraulic Bed Lift Mechanism Repair",
      "IKEA and Urban Ladder Flat-Pack Furniture Assembly",
      "PU and Melamine Wood Polishing",
      "Acoustic Wall Panels & Fluted Louvers",
      "SDS Hammer Concrete Wall Drilling & TV Mounting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
    },
  };

  // Construct Service Entity (if on a service route)
  const serviceEntity = serviceName
    ? {
        "@type": "Service",
        "@id": `${currentUrl}#service`,
        serviceType: serviceName,
        provider: {
          "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: areaName ? `${areaName}, Hyderabad` : "Hyderabad & Secunderabad, Telangana",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "100",
          availability: "https://schema.org/InStock",
          url: currentUrl,
        },
      }
    : null;

  // Construct FAQPage Entity (for Answer Engine Optimization)
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
              text: f.answer,
            },
          })),
        }
      : null;

  // Construct HowTo Entity (for Google Rich Snippets & AI Answer Extraction)
  const howToEntity =
    type === "home"
      ? {
          "@type": "HowTo",
          "@id": `${siteConfig.url}/#howto`,
          name: "How to Book a Doorstep Carpenter in Hyderabad in 30 Minutes",
          description: "Step-by-step process to get verified master carpenters at your home or office anywhere in Hyderabad.",
          totalTime: "PT30M",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: "149",
          },
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Select Your Carpentry Service or Locality",
              text: "Choose from Door repair, Sliding wardrobe tracks, Modular kitchen fittings, or Furniture assembly.",
              url: `${siteConfig.url}/pricing`,
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Pick Rapid 30-Minute or Flexible Time Slot",
              text: "Enter your phone number and locality (Gachibowli, Miyapur, Kondapur, Kukatpally, etc.).",
              url: `${siteConfig.url}/#booking`,
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Master Craftsman Arrives Equipped at Your Doorstep",
              text: "Equipped technician arrives within 25-35 minutes with heavy-duty power tools, genuine hardware, and a 30-day service warranty.",
              url: `${siteConfig.url}`,
            },
          ],
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
            item: b.url,
          })),
        }
      : null;

  // Combine all active entities into a cohesive @graph
  const graph: object[] = [localBusinessEntity];
  if (serviceEntity) graph.push(serviceEntity);
  if (faqEntity) graph.push(faqEntity);
  if (howToEntity) graph.push(howToEntity);
  if (breadcrumbEntity) graph.push(breadcrumbEntity);

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  );
};
