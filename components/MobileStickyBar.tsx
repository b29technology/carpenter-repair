"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
  areaName?: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  areaName
}) => {
  const whatsappText = areaName
    ? encodeURIComponent(`Hello, I need carpenter service in ${areaName}, Hyderabad. Please share availability & estimate.`)
    : encodeURIComponent(siteConfig.whatsappMessage);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#EFE8DD] p-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#1F1B18] text-white active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#C59B63] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#25D366] text-white active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Instant Booking Modal */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#C59B63] text-white active:scale-95 transition-all text-center cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">Book Visit</span>
        </button>
      </div>
    </div>
  );
};
