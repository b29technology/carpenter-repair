"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { getTestimonialsByArea } from "@/data/testimonials";

// Components
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesPricingSheet } from "@/components/ServicesPricingSheet";
import { AboutSection } from "@/components/AboutSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PriceEstimator } from "@/components/PriceEstimator";
import { RotatingReviews } from "@/components/RotatingReviews";
import { AreaDirectoryGrid } from "@/components/AreaDirectoryGrid";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { LiveProofToaster } from "@/components/LiveProofToaster";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BookingModal } from "@/components/BookingModal";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const GLOBAL_FAQS = [
  {
    question: "How fast can a carpenter reach my home in Hyderabad?",
    answer: "Our technicians operate from 25+ localized hubs across West, Central, North, and East Hyderabad (Miyapur, Kukatpally, Gachibowli, Kondapur, Manikonda, Secunderabad, etc.). On average, a technician reaches your doorstep within 25 to 35 minutes."
  },
  {
    question: "What are the carpenter inspection charges in Hyderabad?",
    answer: "Our standard home visit and inspection fee is ₹149. If you proceed with the suggested repair work, this ₹149 is 100% adjusted into your final bill, effectively making the inspection free."
  },
  {
    question: "Do your carpenters carry genuine replacement hardware (Hettich, Godrej, Hafele)?",
    answer: "Yes, our carpenters carry a comprehensive hardware toolkit with genuine branded soft-close hinges, sliding wardrobe wheels, drawer channels, and Godrej/Europa locks. You pay actual hardware prices with zero retail markup."
  },
  {
    question: "Do you provide a warranty on carpentry repairs in Hyderabad?",
    answer: "Yes, all carpentry and furniture repairs come with a 30-Day Doorstep Service Guarantee. If the same issue recurs within 30 days, our carpenter will revisit and rectify it at zero additional labor cost."
  },
  {
    question: "Can I book a carpenter on Sunday or in the evening?",
    answer: "Yes, we operate 7 days a week from 8:00 AM to 9:30 PM across all Hyderabad localities, including Sundays and public holidays."
  }
];

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");

  const homepageReviews = React.useMemo(() => {
    return [
      ...getTestimonialsByArea("miyapur", 6),
      ...getTestimonialsByArea("kukatpally", 6),
      ...getTestimonialsByArea("gachibowli", 6),
      ...getTestimonialsByArea("kondapur", 6),
      ...getTestimonialsByArea("secunderabad", 6)
    ];
  }, []);

  const handleOpenBooking = (serviceName?: string, skuName?: string, price?: string, areaName?: string) => {
    setSelectedService(serviceName || "");
    setSelectedSubService(skuName || "");
    setSelectedPrice(price || "");
    setSelectedArea(areaName || "");
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1F1B18]">
      
      {/* Schema Markup for Google SEO */}
      <SchemaMarkup
        type="home"
        faqs={GLOBAL_FAQS}
        breadcrumbs={[
          { name: "Home", url: siteConfig.url }
        ]}
      />

      {/* Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        
        {/* 1. Hero Section (Above the fold with integrated instant booking form) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          landmarks={["Miyapur", "Kukatpally", "Gachibowli", "Kondapur", "Manikonda", "Secunderabad"]}
        />

        {/* 2. Master Services & Pricing Sheet (All services & rates in one place with search) */}
        <ServicesPricingSheet onOpenBooking={handleOpenBooking} />

        {/* 3. About Section (Your Reliable and Trusted Carpentry Partner) */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Services Grid (Visual Cards with Real Photography) */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* 5. Interactive Cost Estimator */}
        <PriceEstimator onOpenBooking={() => handleOpenBooking()} />

        {/* 6. 20+ Real Customer Reviews with Dynamic Rotator */}
        <RotatingReviews reviews={homepageReviews} areaName="Hyderabad" />

        {/* 7. 25+ Hyderabad Area Directory Grid (Crucial for Internal Linking) */}
        <AreaDirectoryGrid />

        {/* 8. Frequently Asked Questions */}
        <FaqSection faqs={GLOBAL_FAQS} areaName="Hyderabad" />

      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Live Proof Notification */}
      <LiveProofToaster />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        preselectedSubService={selectedSubService}
        preselectedPrice={selectedPrice}
        preselectedArea={selectedArea}
      />

    </div>
  );
}
