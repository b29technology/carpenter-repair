import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HYDERABAD_AREAS, getAreaBySlug } from "@/data/areas";
import { getTestimonialsByArea } from "@/data/testimonials";
import { siteConfig } from "@/config/site";
import { AreaPageClient } from "@/components/AreaPageClient";
import { SchemaMarkup } from "@/components/SchemaMarkup";

interface AreaPageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return HYDERABAD_AREAS.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    return {
      title: "Carpenter Services in Hyderabad | Carpenter Repair",
      description: "Professional doorstep carpenter services across Hyderabad.",
    };
  }

  const title = `Best Carpenter in ${area.name}, Hyderabad | Door, Wardrobe & Kitchen Repair (${area.responseTime} Visit)`;
  const description = `Looking for a skilled carpenter in ${area.name}, Hyderabad (Pin ${area.pincode})? Express ${area.responseTime} doorstep visit for sliding wardrobe repair, swollen doors, modular kitchen tandem box, Godrej locks & furniture assembly. 30-day warranty.`;

  return {
    title,
    description,
    keywords: [
      `carpenter in ${area.name.toLowerCase()}`,
      `carpenter ${area.name.toLowerCase()}`,
      `carpenters in ${area.name.toLowerCase()} hyderabad`,
      `carpenter near me ${area.name.toLowerCase()}`,
      `door carpenter in ${area.name.toLowerCase()}`,
      `wardrobe carpenter ${area.name.toLowerCase()}`,
      `kitchen carpenter ${area.name.toLowerCase()}`,
      `furniture repair in ${area.name.toLowerCase()}`,
      `carpenter charges in ${area.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/hyderabad/${area.slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/hyderabad/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area: areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  // Generate 20-35 authentic localized reviews for this area (count is seeded per area slug)
  const reviews = getTestimonialsByArea(area.slug);

  return (
    <>
      {/* Search Engine Schema specifically for this locality */}
      <SchemaMarkup
        type="area"
        areaName={area.name}
        areaSlug={area.slug}
        pincode={area.pincode}
        faqs={area.localFaqs}
        breadcrumbs={[
          { name: "Home", url: siteConfig.url },
          { name: "Hyderabad", url: `${siteConfig.url}/#areas` },
          { name: area.name, url: `${siteConfig.url}/hyderabad/${area.slug}` },
        ]}
      />

      <AreaPageClient area={area} reviews={reviews} />
    </>
  );
}
