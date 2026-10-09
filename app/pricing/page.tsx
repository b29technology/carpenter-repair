import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PricingPageClient } from "@/components/PricingPageClient";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const PRICING_FAQS = [
  {
    question: "What are the carpenter inspection charges in Hyderabad?",
    answer: "Our standard doorstep inspection charge across Hyderabad is ₹149. If you proceed with the suggested repair work, this entire ₹149 is 100% adjusted into your final bill, effectively making the inspection free."
  },
  {
    question: "Do your carpentry prices include replacement hardware (screws, hinges, channels)?",
    answer: "Our published rates are transparent, fixed labor charges. If any replacement hardware is required (e.g., Godrej locks, Hettich soft-close hinges, Ebco telescopic channels), you pay the actual printed MRP with zero retail markup. Alternatively, you are free to provide your own hardware."
  },
  {
    question: "Are there any hidden costs, weekend fees, or distant locality surcharges?",
    answer: "No. We have zero distant travel surcharges across all 25+ Hyderabad localities (from Miyapur and Kukatpally to Gachibowli, Kondapur, and Secunderabad). Our prices remain identical on Sundays and public holidays with zero surge pricing."
  },
  {
    question: "What if the repair issue recurs after the carpenter leaves?",
    answer: "Every repair is covered by our 30-Day Doorstep Service Guarantee. If a repaired door, hinge, drawer channel, or lock loosens or malfunctions within 30 days, our technician revisits and rectifies it at zero additional labor cost."
  },
  {
    question: "What payment methods are accepted?",
    answer: "You can pay securely after satisfactory job completion via UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards, or Cash. You receive an instant digital invoice on your WhatsApp and email."
  },
  {
    question: "How quickly can a carpenter arrive after booking?",
    answer: "Technicians stationed across 25+ localized hubs (Miyapur, Gachibowli, Kondapur, Kukatpally, Madhapur, Manikonda, Banjara Hills, Secunderabad) arrive within 25 to 35 minutes of booking."
  }
];

export const metadata: Metadata = {
  title: "Carpenter Charges in Hyderabad (2026 Rate Card) | Door, Wardrobe & Kitchen Rates from ₹99",
  description: "Official 2026 carpenter price list in Hyderabad. Transparent labor rates for wooden door repair, sliding wardrobe fixing, modular kitchen tandem box, furniture assembly from ₹199, and drilling. ₹149 inspection 100% adjusted into bill. 30-day warranty.",
  keywords: [
    "carpenter charges in hyderabad",
    "carpenter price list hyderabad",
    "carpenter rate card hyderabad",
    "door repair cost hyderabad",
    "furniture assembly cost hyderabad",
    "wardrobe repair charges hyderabad",
    "kitchen carpenter charges hyderabad",
    "carpenter per hour charges hyderabad"
  ],
  openGraph: {
    title: "Carpenter Charges in Hyderabad (2026 Rate Card) | Rates from ₹99",
    description: "Official 2026 carpenter price list in Hyderabad. Transparent labor rates for door repairs, sliding wardrobe fixing, modular kitchen tandem box, furniture assembly from ₹199, and drilling. 30-day warranty.",
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup
        type="home"
        faqs={PRICING_FAQS}
        breadcrumbs={[
          { name: "Home", url: siteConfig.url },
          { name: "Pricing & Rate Card", url: `${siteConfig.url}/pricing` },
        ]}
      />

      <PricingPageClient faqs={PRICING_FAQS} />
    </>
  );
}
