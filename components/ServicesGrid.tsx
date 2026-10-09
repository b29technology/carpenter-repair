import React from "react";
import Link from "next/link";
import { 
  PhoneCall,
  Wrench,
  ShieldCheck,
  ArrowUpRight,
  Hammer,
  MessageSquare,
  Star
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface ServicesGridProps {
  onOpenBooking?: (serviceName?: string) => void;
  areaName?: string;
}

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Book in 60 Seconds",
    desc: "Call us, WhatsApp, or fill our online form. Share your locality, service type, and preferred arrival time. Zero advance payment required.",
    highlight: "Free to Book",
    color: "bg-[#FFF8ED] border-[#F5E0B5]",
    iconColor: "text-[#C59B63]",
    iconBg: "bg-[#F3ECE1]"
  },
  {
    step: "02",
    icon: Wrench,
    title: "Technician Arrives in 30 Mins",
    desc: "A background-verified master carpenter from your nearest local hub arrives within 25–35 minutes, equipped with professional tools and genuine branded hardware.",
    highlight: "25–35 Min Visit",
    color: "bg-[#F0FDF8] border-[#C8E6C9]",
    iconColor: "text-[#07794C]",
    iconBg: "bg-[#E8F5E9]"
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Work Done & 30-Day Guaranteed",
    desc: "After precision repair, you receive a detailed service summary with itemized billing. Every repair is backed by our 30-Day Doorstep Re-Service Guarantee at zero extra cost.",
    highlight: "30-Day Warranty",
    color: "bg-[#F5F0FF] border-[#D8C8F5]",
    iconColor: "text-[#6B3FA0]",
    iconBg: "bg-[#EDE8F8]"
  }
];

const QUICK_SERVICE_LINKS = [
  { label: "Door Repair", slug: "door-repair-and-installation" },
  { label: "Wardrobe Repair", slug: "wardrobe-and-cupboard-repair" },
  { label: "Kitchen Repair", slug: "modular-kitchen-cabinets" },
  { label: "Furniture Repair", slug: "furniture-assembly-and-repair" },
  { label: "Décor & Mirror", slug: "decor-mirror-installation" },
  { label: "Shelf & Cabinet", slug: "shelf-and-cabinet-installation" },
  { label: "Furniture Assembly", slug: "furniture-assembly" },
  { label: "Wood Polishing", slug: "wood-polishing-and-refurbishing" },
  { label: "Drilling & Mounting", slug: "general-woodwork-and-drilling" },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onOpenBooking,
  areaName
}) => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-2">
            <Hammer className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            Carpenter at Your Door in <span className="text-[#C59B63]">3 Simple Steps</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5A5046]">
            Book online or by phone. Our certified carpenter arrives within 30 minutes across {areaName || "Hyderabad"} with all tools and hardware needed.
          </p>
        </div>

        {/* 3-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {/* Connector line between cards (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(33.3%+8px)] right-[calc(33.3%+8px)] h-0.5 bg-gradient-to-r from-[#EFE8DD] via-[#C59B63]/40 to-[#EFE8DD] z-0" />
          
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`relative rounded-3xl p-6 sm:p-8 border-2 ${step.color} hover:shadow-lg transition-all z-10`}
              >
                {/* Step Number */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-[#EFE8DD] leading-none select-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1F1B18] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Highlight Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${step.iconBg} ${step.iconColor} border border-current/20`}>
                  <Star className="w-3 h-3" />
                  {step.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Service Links */}
        <div className="bg-[#F9F6F0] rounded-3xl p-6 sm:p-8 border border-[#EFE8DD]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <div className="text-sm font-bold text-[#1F1B18]">All Carpentry Services Available</div>
              <div className="text-[11px] text-[#8A7D71] mt-0.5">Click any service to view pricing, options & book</div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#1F1B18] bg-white hover:bg-[#F3ECE1] border border-[#EFE8DD] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C59B63]" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {QUICK_SERVICE_LINKS.map((srv) => (
              <Link
                key={srv.slug}
                href={`/services/${srv.slug}`}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#EFE8DD] text-xs font-semibold text-[#1F1B18] hover:border-[#C59B63] hover:text-[#C59B63] transition-all group"
              >
                <span>{srv.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7D71] group-hover:text-[#C59B63] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
