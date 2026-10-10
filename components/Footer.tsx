"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES } from "@/data/services";
import { trackUserAction } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Hammer
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1B18] text-[#D8CEBF] pt-12 pb-16 sm:pb-10 border-t border-[#3A332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A332C]">
          
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C59B63] flex items-center justify-center text-white shadow-md">
                <Hammer className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-xl font-black text-white tracking-wider uppercase font-serif">
                CARPENTER <span className="text-[#C59B63]">REPAIR</span>
              </span>
            </Link>

            <p className="text-xs text-[#A89C8F] leading-relaxed">
              Hyderabad&apos;s dedicated doorstep carpenter repair service. Precision woodwork, sliding door repairs, modular kitchen overhauls, and furniture restoration with a 30-day service warranty across 35+ localities.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a 
                href={`tel:${siteConfig.phoneRaw}`} 
                onClick={() => {
                  trackUserAction({
                    eventType: "CALL_CLICK",
                    buttonLabel: "Footer Phone Link",
                  });
                }}
                className="flex items-center gap-2 text-[#C59B63] hover:text-white font-bold transition-colors"
              >
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <div className="flex items-center gap-2 text-[#A89C8F]">
                <Clock className="w-4 h-4 text-[#8A7D71]" /> Mon - Sun : 8:00 AM - 9:30 PM
              </div>
              <div className="flex items-start gap-2 text-[#A89C8F]">
                <MapPin className="w-4 h-4 text-[#8A7D71] shrink-0 mt-0.5" />
                <span>Central Hubs: Begumpet & Miyapur, Hyderabad, Telangana 500016</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackUserAction({
                    eventType: "WHATSAPP_CLICK",
                    buttonLabel: "Footer WhatsApp Chat Button",
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white text-xs font-bold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Carpentry Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CARPENTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-[#A89C8F] hover:text-[#C59B63] transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Localities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Top Hyderabad Localities
            </h4>
            <ul className="space-y-2 text-xs">
              {HYDERABAD_AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link 
                    href={`/hyderabad/${area.slug}`}
                    className="text-[#A89C8F] hover:text-[#C59B63] transition-colors flex items-center justify-between"
                  >
                    <span>Carpenter in {area.name}</span>
                    <span className="text-[10px] text-[#8A7D71] font-mono">{area.pincode}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Service Guarantees
            </h4>
            <div className="space-y-3 text-xs text-[#A89C8F]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <span>30-Day Post Service Guarantee</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <span>25-35 Min Doorstep Arrival</span>
              </div>
              <div className="flex items-start gap-2">
                <Hammer className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <span>20+ Years Master Woodcraft Experience</span>
              </div>
              <div className="pt-2 border-t border-[#3A332C]">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#C59B63] hover:text-white transition-colors"
                >
                  <span>Explore Master Rate Card →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Complete Area Footprint Links (Essential for Programmatic SEO Crawlers) */}
        <div className="py-8 border-b border-[#3A332C]">
          <div className="text-xs font-bold text-[#A89C8F] uppercase tracking-wider mb-4">
            Doorstep Carpenter Coverage Throughout Hyderabad & Secunderabad:
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {HYDERABAD_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/hyderabad/${area.slug}`}
                className="px-3 py-1 rounded-full bg-[#2A2420] hover:bg-[#C59B63] text-[#D8CEBF] hover:text-white border border-[#3A332C] transition-colors"
              >
                Carpenter in {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D71]">
          <div>
            &copy; {new Date().getFullYear()} Carpenter Repair — {siteConfig.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Verified LocalBusiness Schema Active</span>
            <span>•</span>
            <span className="text-[#C59B63] font-medium">Rating: 4.9/5 ★ (Verified Local Customer Reviews)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
