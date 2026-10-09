import React from "react";
import Link from "next/link";
import { HYDERABAD_AREAS } from "@/data/areas";
import { MapPin, Clock, ArrowUpRight, Hammer } from "lucide-react";

interface AreaDirectoryGridProps {
  currentAreaSlug?: string;
  title?: string;
}

export const AreaDirectoryGrid: React.FC<AreaDirectoryGridProps> = ({
  currentAreaSlug,
  title
}) => {
  const zones: ("West Hyderabad" | "North Hyderabad" | "Central Hyderabad" | "East Hyderabad" | "South Hyderabad")[] = [
    "West Hyderabad",
    "Central Hyderabad",
    "North Hyderabad",
    "East Hyderabad",
    "South Hyderabad"
  ];

  return (
    <section id="areas" className="py-10 sm:py-12 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
            <Hammer className="w-3.5 h-3.5" />
            <span>Service Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            {title || (
              <>
                Doorstep Carpenters Across <span className="text-[#C59B63]">Hyderabad</span>.
              </>
            )}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
            Stationed across 35+ Hyderabad & Secunderabad hubs ensuring rapid 25-35 minute doorstep arrival with complete repair hardware.
          </p>
        </div>

        {/* Zones and Localities */}
        <div className="space-y-8">
          {zones.map((zone) => {
            const areaInZone = HYDERABAD_AREAS.filter((a) => a.zone === zone);
            if (areaInZone.length === 0) return null;

            return (
              <div key={zone} className="bg-[#F9F6F0] p-6 sm:p-8 rounded-3xl border border-[#EFE8DD]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EFE8DD]">
                  <h3 className="text-lg font-bold text-[#1F1B18] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C59B63]" />
                    {zone} Hubs
                  </h3>
                  <span className="text-xs text-[#8A7D71] font-medium">
                    {areaInZone.length} Localities Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {areaInZone.map((area) => {
                    const isCurrent = currentAreaSlug === area.slug;
                    return (
                      <Link
                        key={area.slug}
                        href={`/hyderabad/${area.slug}`}
                        className={`p-4 rounded-2xl border transition-all group flex flex-col justify-between ${
                          isCurrent
                            ? "border-[#C59B63] bg-white ring-2 ring-[#C59B63]/20"
                            : "border-[#EFE8DD] bg-white hover:border-[#C59B63] hover:shadow-xs"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors">
                              {area.name}
                            </span>
                            <span className="w-6 h-6 rounded-full bg-[#F9F6F0] group-hover:bg-[#C59B63] text-[#8A7D71] group-hover:text-white flex items-center justify-center transition-colors">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          
                          <div className="text-[11px] text-[#8A7D71] line-clamp-1 mb-2">
                            {area.landmarks.slice(0, 2).join(", ")}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#EFE8DD] flex items-center justify-between text-[10px]">
                          <span className="flex items-center gap-1 text-[#C59B63] font-semibold">
                            <Clock className="w-3 h-3" /> {area.responseTime}
                          </span>
                          <span className="text-[#8A7D71]">
                            PIN {area.pincode}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
