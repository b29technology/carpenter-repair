"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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

    const hasHashTarget = handleScroll();

    if (!hasHashTarget) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }

    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [pathname]);

  return null;
}
