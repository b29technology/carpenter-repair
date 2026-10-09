"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// Components
import { Navbar } from "@/components/Navbar";
import { ServicesPricingSheet } from "@/components/ServicesPricingSheet";
import { PriceEstimator } from "@/components/PriceEstimator";
import { AreaDirectoryGrid } from "@/components/AreaDirectoryGrid";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { LiveProofToaster } from "@/components/LiveProofToaster";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BookingModal } from "@/components/BookingModal";
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  ArrowUpRight, 
  Hammer, 
  Wrench, 
  Check, 
  FileText,
  ChevronRight,
  Receipt,
  BadgePercent,
  Sparkles,
  X,
  CreditCard,
  MapPin
} from "lucide-react";

interface PricingPageClientProps {
  faqs: { question: string; answer: string }[];
}

const PRICING_PILLARS = [
  {
    icon: Receipt,
    title: "100% Upfront Labor Rates",
    desc: "Fixed published prices starting from ₹99. You know the exact labor charge before any work begins — zero surprise bills.",
    badge: "TRANSPARENT"
  },
  {
    icon: BadgePercent,
    title: "₹149 Inspection Fee Adjusted",
    desc: "Our ₹149 home visit & inspection fee is 100% deducted from your final invoice if you proceed with repair, making inspection free.",
    badge: "100% WAIVED"
  },
  {
    icon: Wrench,
    title: "Genuine Hardware at MRP",
    desc: "Replacement fittings (Godrej, Hettich, Ebco, Europa) are billed at actual retail MRP with zero markup. Or provide your own parts.",
    badge: "ZERO MARKUP"
  },
  {
    icon: ShieldCheck,
    title: "30-Day Free Revisit Guarantee",
    desc: "If any repaired door, hinge, drawer channel, or lock loosens within 30 days, we revisit and rectify it at zero labor cost.",
    badge: "PEACE OF MIND"
  }
];

export const PricingPageClient: React.FC<PricingPageClientProps> = ({ faqs }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSubService, setSelectedSubService] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");

  const handleOpenBooking = (serviceName?: string, skuName?: string, price?: string, areaName?: string) => {
    setSelectedService(serviceName || "");
    setSelectedSubService(skuName || "");
    setSelectedPrice(price || "");
    setSelectedArea(areaName || "");
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1F1B18]">
      
      {/* Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-[#EFE8DD] py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#8A7D71]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#C59B63] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#C59B63]" />
              <span className="font-bold text-[#1F1B18]">Pricing & Rate Card</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 border-b border-[#EFE8DD] bg-gradient-to-b from-[#FAF6F0] to-[#F9F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-white border border-[#EFE8DD] shadow-2xs">
                <FileText className="w-3.5 h-3.5" />
                <span>Hyderabad Carpentry Rate Card • 2026 Edition</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#1F1B18] tracking-tight leading-tight">
                Transparent Carpentry Pricing & <span className="text-[#C59B63]">Rate Card</span> in Hyderabad.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#5A5046] leading-relaxed">
                No bargaining. No fluctuating quotes. Explore published labor rates across 70 specialized carpentry services with genuine branded hardware and our 30-day doorstep guarantee.
              </p>

              {/* Quick Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#5A5046]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE8DD] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#07794C]" />
                  <span>₹149 Inspection Adjusted into Bill</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE8DD] shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#C59B63]" />
                  <span>30-Day Service Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE8DD] shadow-2xs">
                  <Clock className="w-4 h-4 text-[#C59B63]" />
                  <span>25–35 Min Doorstep Arrival</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <span>Book a Carpenter Online</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#1F1B18] hover:bg-[#F3ECE1] border border-[#EFE8DD] text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#C59B63]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Pricing Pillars Grid */}
        <section className="py-12 bg-white border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRICING_PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div 
                    key={p.title}
                    className="p-5 rounded-2xl bg-[#FCFBF9] border border-[#EFE8DD] hover:border-[#C59B63] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#C59B63] flex items-center justify-center border border-[#EFE8DD]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 tracking-wider">
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-[#1F1B18] mb-1.5 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#5A5046] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Master Services & Pricing Sheet (Filterable across all 70 SKUs) */}
        <ServicesPricingSheet onOpenBooking={handleOpenBooking} />

        {/* Interactive Cost Estimator */}
        <PriceEstimator onOpenBooking={() => handleOpenBooking()} />

        {/* PRO VS LOCAL HANDYMAN PRICING COMPARISON TABLE */}
        <section className="py-14 bg-white border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                <Receipt className="w-3.5 h-3.5" />
                <span>Price & Trust Benchmark</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                Our Transparent Pricing vs <span className="text-[#C59B63]">Local Handyman Quotes</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
                See why homeowners across Hyderabad prefer published fixed pricing over roadside verbal estimates.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EFE8DD] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#EFE8DD] bg-[#FAF6F0]">
                      <th className="py-3.5 px-4 text-[#1F1B18] font-bold uppercase text-[10px] tracking-wider w-1/3">
                        Pricing Aspect
                      </th>
                      <th className="py-3.5 px-4 text-red-700 bg-red-50/50 font-bold uppercase text-[10px] tracking-wider w-1/3">
                        Local Roadside Handyman
                      </th>
                      <th className="py-3.5 px-4 text-[#07794C] bg-emerald-50/70 font-black uppercase text-[10px] tracking-wider w-1/3">
                        Carpenter Repair (Our Price List)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DD]">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-[#1F1B18]">Estimate Consistency</td>
                      <td className="py-3.5 px-4 text-red-600 bg-red-50/20">
                        <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Verbal quotes that double mid-way through work</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                        <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Fixed published labor rates from ₹99</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-[#1F1B18]">Inspection Charges</td>
                      <td className="py-3.5 px-4 text-red-600 bg-red-50/20">
                        <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Demands ₹200–₹400 visiting charge even if not hired</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                        <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> ₹149 inspection fee is 100% adjusted into final bill</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-[#1F1B18]">Hardware Markups</td>
                      <td className="py-3.5 px-4 text-red-600 bg-red-50/20">
                        <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Inflates hardware prices with hidden 40–60% store commissions</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                        <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Genuine branded parts billed at actual MRP or supply your own</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-[#1F1B18]">Weekend / Holiday Surge</td>
                      <td className="py-3.5 px-4 text-red-600 bg-red-50/20">
                        <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Extra weekend charge or demands lunch & conveyance</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                        <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Zero surge pricing on Sundays, evenings & public holidays</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-[#1F1B18]">Invoice & Guarantee</td>
                      <td className="py-3.5 px-4 text-red-600 bg-red-50/20">
                        <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Cash only, no bill, no warranty if problem reoccurs</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                        <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Itemized digital bill with 30-Day Free Revisit Guarantee</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 25+ Hyderabad Area Directory Grid */}
        <AreaDirectoryGrid title="Transparent Doorstep Pricing Valid Across 25+ Hyderabad Localities" />

        {/* Frequently Asked Questions */}
        <FaqSection faqs={faqs} areaName="Hyderabad" />

      </main>

      {/* Footer */}
      <Footer />

      {/* Live Proof Toaster */}
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
};
