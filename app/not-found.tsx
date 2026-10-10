"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackUserAction } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { 
  Hammer, 
  Home, 
  Phone, 
  ArrowLeft, 
  Wrench, 
  DoorOpen, 
  Archive, 
  Utensils, 
  MapPin,
  Sparkles
} from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    // Log 404 visit in Telegram & analytics
    trackUserAction({
      eventType: "FORM_INTERACTION",
      buttonLabel: "404 Page Encountered",
      additionalInfo: typeof window !== "undefined" ? window.location.pathname : "404",
    });
  }, []);

  const popularServices = [
    {
      slug: "door-repair-and-installation",
      title: "Wooden Door Repair & Lock Fitting",
      price: "From ₹100",
      icon: DoorOpen,
    },
    {
      slug: "wardrobe-and-cupboard-repair",
      title: "Sliding Wardrobe & Channel Repair",
      price: "From ₹149",
      icon: Archive,
    },
    {
      slug: "modular-kitchen-cabinets",
      title: "Modular Kitchen Tandem Boxes",
      price: "From ₹249",
      icon: Utensils,
    },
    {
      slug: "furniture-assembly-and-repair",
      title: "Bed Repair & IKEA Assembly",
      price: "From ₹199",
      icon: Wrench,
    },
  ];

  const popularAreas = [
    { name: "Miyapur", slug: "miyapur" },
    { name: "Gachibowli", slug: "gachibowli" },
    { name: "Kondapur", slug: "kondapur" },
    { name: "Kukatpally", slug: "kukatpally" },
    { name: "Banjara Hills", slug: "banjara-hills" },
    { name: "Jubilee Hills", slug: "jubilee-hills" },
    { name: "Manikonda", slug: "manikonda" },
    { name: "Hitec City", slug: "hitec-city" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F1B18] flex flex-col justify-between selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Header Bar */}
      <header className="border-b border-[#EFE8DD] bg-white/90 backdrop-blur-md px-4 py-3 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C59B63] flex items-center justify-center text-white shadow-xs">
              <Hammer className="w-4 h-4 -rotate-45" />
            </div>
            <span className="font-serif font-black tracking-wider text-sm uppercase">
              CARPENTER <span className="text-[#C59B63]">REPAIR</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              onClick={() => {
                trackUserAction({
                  eventType: "CALL_CLICK",
                  buttonLabel: "404 Header Phone CTA",
                });
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main 404 Hero Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center flex flex-col items-center justify-center">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#EFE8DD] text-[#8A7D71] text-xs font-bold uppercase tracking-wider mb-6">
          <Wrench className="w-3.5 h-3.5 text-[#C59B63]" />
          <span>Error 404 • Page Misplaced in Workshop</span>
        </div>

        {/* Big Stylized 404 Crest */}
        <div className="relative mb-6">
          <div className="text-8xl sm:text-9xl font-serif font-black tracking-tighter text-[#EAE2D5] select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1F1B18] text-[#C59B63] flex items-center justify-center shadow-xl border-2 border-[#C59B63]/40">
              <Hammer className="w-8 h-8 sm:w-10 sm:h-10 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1F1B18] tracking-tight mb-3">
          Looks Like This Plank Got Cut Too Short!
        </h1>

        <p className="text-sm sm:text-base text-[#6E6255] max-w-lg mb-8 leading-relaxed">
          The page you are looking for might have been planed down, moved, or never existed. Don&apos;t worry—our master carpenters are still ready to fix your furniture in 30 minutes.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1F1B18] hover:bg-[#3A332C] transition-all shadow-md active:scale-95"
          >
            <Home className="w-4 h-4 text-[#C59B63]" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => {
              trackUserAction({
                eventType: "CALL_CLICK",
                buttonLabel: "404 Main Call Button",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1F1B18] bg-[#FAF6F0] hover:bg-[#F3ECE1] border border-[#EFE8DD] transition-all shadow-xs active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#C59B63]" />
            <span>Call Master Carpenter</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello, I was on your website and need carpenter service in Hyderabad.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackUserAction({
                eventType: "WHATSAPP_CLICK",
                buttonLabel: "404 WhatsApp Button",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-md active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Quick Help</span>
          </a>
        </div>

        {/* Quick Recovery Section: Popular Services */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE8DD] shadow-sm text-left mb-8">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F4EFE6]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F1B18] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59B63]" /> Popular Doorstep Services
              </h2>
              <p className="text-xs text-[#8A7D71]">
                30-Minute home arrival anywhere in Hyderabad
              </p>
            </div>
            <Link 
              href="/pricing"
              className="text-xs font-bold text-[#C59B63] hover:underline"
            >
              View Full Price Sheet →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FDFBF7] hover:bg-[#FAF6F0] border border-[#EFE8DD] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#EFE8DD] text-[#C59B63] flex items-center justify-center shrink-0 group-hover:bg-[#C59B63] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors">
                        {srv.title}
                      </div>
                      <div className="text-[11px] text-[#8A7D71]">
                        {srv.price} • Genuine Hardware
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#C59B63]">→</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Popular Hyderabad Localities */}
        <div className="w-full text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] mb-3 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C59B63]" /> Quick Locality Dispatch
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/hyderabad/${area.slug}`}
                className="px-3 py-1.5 rounded-full text-xs bg-white hover:bg-[#FAF6F0] text-[#5A5046] hover:text-[#C59B63] border border-[#EFE8DD] transition-colors"
              >
                Carpenter in {area.name}
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* Clean Footer */}
      <footer className="border-t border-[#EFE8DD] bg-white py-4 px-4 text-center text-xs text-[#8A7D71]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Carpenter Repair Hyderabad • 30-Day Guarantee</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#C59B63]">Home</Link>
            <Link href="/pricing" className="hover:text-[#C59B63]">Pricing</Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold text-[#C59B63]">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
