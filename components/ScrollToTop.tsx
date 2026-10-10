"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop Component
 * 1. Resets scroll position on route transitions.
 * 2. Renders a luxury floating 'Back to Top' button that appears after scrolling down.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Auto-scroll on route change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 50);
          return true;
        }
      }
      return false;
    };

    const hasHash = handleHash();
    if (!hasHash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, [pathname]);

  // 2. Track scroll position to toggle floating button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1F1B18] text-[#C59B63] hover:bg-[#C59B63] hover:text-white border border-[#C59B63]/40 shadow-xl flex items-center justify-center transition-all duration-300 transform active:scale-90 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
