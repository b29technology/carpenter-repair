import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CARPENTER_SERVICES, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import { ServicePageClient } from "@/components/ServicePageClient";
import { SchemaMarkup } from "@/components/SchemaMarkup";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return CARPENTER_SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Carpenter Services in Hyderabad | Carpenter Repair",
      description: "Professional carpenter repair services across Hyderabad.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.highIntentKeywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup
        type="service"
        serviceName={service.title}
        serviceSlug={service.slug}
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/#services` },
          { name: service.shortTitle, url: `${siteConfig.url}/services/${service.slug}` },
        ]}
      />

      <ServicePageClient service={service} />
    </>
  );
}
