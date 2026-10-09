"use client";

import React, { useState } from "react";
import { AreaData } from "@/data/areas";
import { ReviewItem } from "@/data/testimonials";

// Components
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesPricingSheet } from "@/components/ServicesPricingSheet";
import { PriceEstimator } from "@/components/PriceEstimator";
import { RotatingReviews } from "@/components/RotatingReviews";
import { AreaDirectoryGrid } from "@/components/AreaDirectoryGrid";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { LiveProofToaster } from "@/components/LiveProofToaster";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BookingModal } from "@/components/BookingModal";
import { 
  MapPin, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  Phone
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface AreaPageClientProps {
  area: AreaData;
  reviews: ReviewItem[];
}

export const AreaPageClient: React.FC<AreaPageClientProps> = ({ area, reviews }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const handleOpenBooking = (serviceName?: string, skuName?: string, price?: string) => {
    setSelectedService(serviceName || "");
    setSelectedSubService(skuName || "");
    setSelectedPrice(price || "");
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1F1B18]">
      
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        
        {/* Localized Hero Section with Form Above the Fold */}
        <HeroSection
          title={
            <>
              Modern Carpentry in <span className="text-[#C59B63]">{area.name}</span>, Hyderabad.
            </>
          }
          subtitle={`Verified doorstep carpenter repair service across ${area.name} (Pin ${area.pincode}). 25-35 minute doorstep arrival for sliding wardrobes, door repairs, modular kitchen tandem drawers, and lock fitting.`}
          areaName={area.name}
          responseTime={area.responseTime}
          landmarks={area.landmarks}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Master Services & Pricing Sheet */}
        <ServicesPricingSheet onOpenBooking={handleOpenBooking} areaName={area.name} />

        {/* Anti-Doorway Unique Localized Information Module */}
        <section className="py-10 sm:py-12 bg-white border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F9F6F0] rounded-2xl p-6 sm:p-8 border border-[#EFE8DD]">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Deep Local Context & Housing Profile */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{area.name} Local Woodwork Hub</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight">
                      Doorstep Carpentry Across {area.name} Gated Societies
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A5046] leading-relaxed">
                    {area.uniqueDescription}
                  </p>

                  {/* Housing & Architectural Context */}
                  <div className="p-4 rounded-xl bg-white border border-[#EFE8DD] text-xs text-[#5A5046] space-y-1.5">
                    <div className="font-bold text-[#1F1B18] flex items-center gap-1.5 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
                      Societies Served in {area.name}:
                    </div>
                    <p className="text-[#5A5046]">{area.housingProfile}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {area.popularSocieties.map((soc, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#F9F6F0] text-[#1F1B18] font-medium border border-[#EFE8DD] text-[11px]">
                          {soc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common Area Issues We Solve */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] mb-2 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C59B63]" />
                      Common Carpentry Repairs Handled in {area.name}:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.commonIssues.map((issue, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#EFE8DD] text-xs text-[#1F1B18]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B63] shrink-0 mt-0.5" />
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right: Local Dispatch Hub Card */}
                <div className="lg:col-span-4">
                  <div className="bg-[#1F1B18] text-white rounded-2xl p-6 shadow-md border border-[#3A332C] space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#C59B63]">
                      Local Dispatch Hub
                    </div>
                    <h3 className="text-lg font-bold">
                      {area.name} Rapid Unit
                    </h3>

                    <div className="space-y-2.5 text-xs text-[#D8CEBF] border-y border-[#3A332C] py-3">
                      <div>
                        <span className="text-[#8A7D71] block text-[10px]">Hub Address:</span>
                        <span className="font-medium text-white">{area.localHubAddress}</span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <span className="text-[#8A7D71] block text-[10px]">Master Craftsman:</span>
                          <span className="font-medium text-white">{area.leadCarpenter}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#8A7D71] block text-[10px]">Experience:</span>
                          <span className="font-semibold text-[#C59B63]">{area.experienceYears}+ Years</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[#8A7D71] block text-[10px]">Average Arrival Time:</span>
                        <span className="font-bold text-[#C59B63] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {area.responseTime} at your doorstep
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <button
                        onClick={() => handleOpenBooking()}
                        className="w-full py-2.5 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                      >
                        Book {area.name} Carpenter
                      </button>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="w-full py-2 rounded-full bg-[#2D2621] hover:bg-[#3A322B] border border-[#4A3E35] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-[#C59B63]" />
                        Call Dispatcher: {siteConfig.phone}
                      </a>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Cost Estimator */}
        <PriceEstimator onOpenBooking={() => handleOpenBooking()} defaultArea={area.name} />

        {/* 20-30 Real Customer Reviews Specific to this Area */}
        <RotatingReviews reviews={reviews} areaName={area.name} />

        {/* Area Directory for Cross-Navigation */}
        <AreaDirectoryGrid 
          currentAreaSlug={area.slug} 
          title={`Other Localities Near ${area.name} We Serve`}
        />

        {/* Area Specific Localized FAQs */}
        <FaqSection faqs={area.localFaqs} areaName={area.name} />

      </main>

      {/* SEO Footer */}
      <Footer />

      {/* Dynamic Live Proof Toaster */}
      <LiveProofToaster currentArea={area.name} />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} areaName={area.name} />

      {/* Booking Modal with Pre-selected Area, Service, SKU and Price */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedArea={area.name}
        preselectedService={selectedService}
        preselectedSubService={selectedSubService}
        preselectedPrice={selectedPrice}
      />

    </div>
  );
};
