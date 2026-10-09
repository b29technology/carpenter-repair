"use client";

import React, { useState, useEffect } from "react";
import { LIVE_BOOKING_STREAM, LiveBookingNotification } from "@/data/testimonials";
import { MapPin, X, ShieldCheck, CheckCircle2 } from "lucide-react";

interface LiveProofToasterProps {
  currentArea?: string;
}

export const LiveProofToaster: React.FC<LiveProofToasterProps> = ({ currentArea }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Filter or prioritize notifications relevant to the active area if on an area page
  const activeStream = React.useMemo(() => {
    if (!currentArea) return LIVE_BOOKING_STREAM;
    const localMatches = LIVE_BOOKING_STREAM.filter(
      (item) => item.areaName.toLowerCase() === currentArea.toLowerCase()
    );
    return localMatches.length > 0
      ? [...localMatches, ...LIVE_BOOKING_STREAM.filter((i) => i.areaName.toLowerCase() !== currentArea.toLowerCase())]
      : LIVE_BOOKING_STREAM;
  }, [currentArea]);

  useEffect(() => {
    if (isDismissed) return;

    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activeStream.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [activeStream.length, isDismissed]);

  if (isDismissed) return null;

  const currentItem: LiveBookingNotification = activeStream[currentIndex] || activeStream[0];

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-auto transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      {/* Clean White Card with Warm Tan Border & Badge (No AI neon gradients) */}
      <div className="bg-white text-[#1F1B18] p-4 rounded-2xl shadow-xl border border-[#EFE8DD] flex items-start gap-3 relative">
        
        {/* Tan Icon Badge */}
        <div className="w-10 h-10 rounded-full bg-[#C59B63] text-white flex items-center justify-center shrink-0 shadow-xs">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 pr-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C59B63] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Booking</span>
          </div>

          <div className="text-xs font-bold text-[#1F1B18] mt-0.5">
            {currentItem.customerName} booked {currentItem.serviceName}
          </div>

          <div className="flex items-center gap-2 mt-1 text-[11px] text-[#8A7D71]">
            <span className="flex items-center gap-0.5 text-[#1F1B18] font-semibold">
              <MapPin className="w-3 h-3 text-[#C59B63]" />
              {currentItem.areaName}, Hyderabad
            </span>
            <span>•</span>
            <span>{currentItem.timeAgo}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="text-[#8A7D71] hover:text-[#1F1B18] p-1 -mr-1 -mt-1 cursor-pointer transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
