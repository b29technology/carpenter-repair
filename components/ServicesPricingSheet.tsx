"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CARPENTER_SERVICES_MASTER, ServiceSku } from "@/data/servicesMaster";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Search, 
  FileText, 
  Star, 
  Plus, 
  Minus, 
  Sparkles, 
  LayoutList, 
  LayoutGrid,
  Info,
  ChevronRight,
  MapPin
} from "lucide-react";

interface ServicesPricingSheetProps {
  onOpenBooking?: (serviceName?: string, skuName?: string, price?: string, areaName?: string) => void;
  areaName?: string;
  initialCategory?: string;
  hideHeader?: boolean;
}

export const ServicesPricingSheet: React.FC<ServicesPricingSheetProps> = ({
  onOpenBooking,
  areaName = "Hyderabad",
  initialCategory = "All",
  hideHeader = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});

  // Flatten all SKUs across all categories
  const allSkus = React.useMemo(() => {
    return CARPENTER_SERVICES_MASTER.flatMap((cat) => cat.skus);
  }, []);

  // Filtered SKUs based on search and category tab
  const filteredSkus = React.useMemo(() => {
    return allSkus.filter((sku) => {
      const matchesCategory =
        selectedCategory === "All" ||
        sku.categoryTitle.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        sku.categorySlug.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesSearch =
        searchQuery.trim() === "" ||
        sku.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sku.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sku.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allSkus, selectedCategory, searchQuery]);

  // Handle quantity addition / reduction
  const handleAdd = (sku: ServiceSku) => {
    setItemQuantities((prev) => {
      const current = prev[sku.id] || 0;
      const next = current + 1;
      return { ...prev, [sku.id]: next };
    });
    // Trigger booking modal with auto-populated parameters
    if (onOpenBooking) {
      onOpenBooking(sku.categoryTitle, sku.name, sku.price, areaName);
    }
  };

  const handleDecrement = (id: string) => {
    setItemQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const categories = [
    { key: "All", label: "All Services" },
    { key: "furniture-assembly", label: "Furniture Assembly" },
    { key: "Wooden Door", label: "Door Repairs" },
    { key: "Cupboard & Drawer", label: "Wardrobe Repairs" },
    { key: "Modular Kitchen", label: "Kitchen Repairs" },
    { key: "Décor & Mirror", label: "Décor & Mirror" },
    { key: "Shelf & Cabinet", label: "Shelves & Cabinets" },
    { key: "Furniture & Bed", label: "Furniture Repairs" },
    { key: "General Drilling", label: "Drilling & Mounting" },
    { key: "Wood Polishing", label: "Wood Polishing" },
  ];

  return (
    <section id="services-sheet" className="py-12 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Transparent Rates</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1F1B18] tracking-tight">
                Master Rate Card & <span className="text-[#C59B63]">Pricing Sheet</span>.
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5046] mt-1 max-w-2xl">
                Transparent upfront labor rates for all home & office carpentry work in {areaName}. No hidden diagnostic fees or post-work surprises.
              </p>
            </div>

            {/* View Switcher & Search Bar */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-[#8A7D71] absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search repair (e.g. hinge, sliding, lock)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63] transition-all"
                />
              </div>

              {/* View Toggle (Catalogue vs Tabular Rate Card) */}
              <div className="inline-flex items-center p-1 bg-[#F9F6F0] border border-[#EFE8DD] rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === "cards"
                      ? "bg-white text-[#1F1B18] shadow-xs font-bold"
                      : "text-[#5A5046] hover:text-[#1F1B18]"
                  }`}
                  aria-label="Catalogue Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Catalogue</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === "table"
                      ? "bg-white text-[#1F1B18] shadow-xs font-bold"
                      : "text-[#5A5046] hover:text-[#1F1B18]"
                  }`}
                  aria-label="Rate Card Table View"
                >
                  <LayoutList className="w-3.5 h-3.5" />
                  <span>Rate Card Table</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-[#C59B63] text-white shadow-2xs font-bold"
                  : "bg-[#F9F6F0] text-[#5A5046] hover:bg-[#EFE8DD] border border-[#EFE8DD]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Localized Locality Coverage Banner */}
        {areaName && areaName !== "Hyderabad" && (
          <div className="mb-6 p-3.5 rounded-2xl bg-[#F3ECE1]/70 border border-[#EFE8DD] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59B63] shrink-0" />
              <span className="font-bold text-[#1F1B18]">
                Priority Doorstep Carpentry Coverage in {areaName}
              </span>
              <span className="text-[#5A5046] hidden sm:inline">
                • Express 25-35 minute arrival to local apartments & societies
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#C59B63] bg-white px-2.5 py-1 rounded-full border border-[#EFE8DD] shadow-2xs">
              30-Day Workmanship Warranty
            </span>
          </div>
        )}

        {/* VIEW 1: INTERACTIVE SERVICE CATALOGUE CARDS */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredSkus.map((sku) => {
              const qty = itemQuantities[sku.id] || 0;
              return (
                <div
                  key={sku.id}
                  className="bg-white rounded-2xl border border-[#EFE8DD] p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all group relative overflow-hidden"
                >
                  <div className="flex gap-4">
                    {/* Left Details */}
                    <div className="flex-1">
                      
                      {/* Package Tag if applicable */}
                      {sku.isPackage && (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#07794C] text-[10px] font-bold tracking-wider uppercase mb-1.5">
                          <Sparkles className="w-3 h-3 text-[#07794C]" />
                          <span>PACKAGE</span>
                        </div>
                      )}

                      {/* SKU Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors leading-snug">
                        {sku.name}
                      </h3>

                      {/* Rating & Review Count */}
                      <div className="flex items-center gap-1.5 mt-1 text-xs">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F3ECE1] text-[#7A4B1A] font-bold text-[10px]">
                          <Star className="w-3 h-3 fill-[#C59B63] text-[#C59B63]" />
                          <span>{sku.rating.toFixed(2)}</span>
                        </div>
                        <span className="text-[#8A7D71] text-[11px]">({sku.reviewsCount})</span>
                      </div>

                      {/* Price & Duration */}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm sm:text-base font-black text-[#1F1B18]">
                          {sku.price}
                        </span>
                        <span className="text-xs text-[#8A7D71] flex items-center gap-1 font-medium">
                          • <Clock className="w-3 h-3 text-[#C59B63]" /> {sku.timeEstimate}
                        </span>
                      </div>

                      {/* Bullets if available */}
                      {sku.bullets && sku.bullets.length > 0 && (
                        <ul className="mt-2.5 space-y-1 text-[11px] text-[#5A5046]">
                          {sku.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 line-clamp-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B63] mt-1 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Options Count tag */}
                      {sku.optionsCount && (
                        <div className="mt-2 text-[10px] font-semibold text-[#8A7D71]">
                          {sku.optionsCount} service options available
                        </div>
                      )}

                    </div>

                    {/* Right Image & Add Button */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#F9F6F0] border border-[#EFE8DD]">
                        <Image
                          src={sku.imageUrl}
                          alt={sku.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 96px, 112px"
                        />
                      </div>

                      {/* Add Button with Counter */}
                      <div className="mt-2 w-20">
                        {qty === 0 ? (
                          <button
                            onClick={() => handleAdd(sku)}
                            className="w-full py-1.5 rounded-lg bg-white border border-[#C59B63] text-[#7A4B1A] hover:bg-[#F9F6F0] text-xs font-bold shadow-2xs active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Add</span>
                            <Plus className="w-3 h-3 text-[#C59B63]" />
                          </button>
                        ) : (
                          <div className="w-full py-1 rounded-lg bg-[#C59B63] text-white flex items-center justify-between px-2 text-xs font-bold shadow-2xs">
                            <button
                              onClick={() => handleDecrement(sku.id)}
                              className="hover:scale-125 transition-transform cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span>{qty}</span>
                            <button
                              onClick={() => handleAdd(sku)}
                              className="hover:scale-125 transition-transform cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Category link and quick book info */}
                  <div className="mt-3 pt-2.5 border-t border-[#EFE8DD] flex items-center justify-between text-[11px] text-[#8A7D71]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C59B63]" /> {sku.warranty} Warranty
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#F9F6F0] text-[10px] font-semibold text-[#5A5046] border border-[#EFE8DD]">
                        {sku.categoryTitle}
                      </span>
                      <button
                        onClick={() => handleAdd(sku)}
                        className="text-[#C59B63] hover:text-[#B58A52] font-bold text-[11px] flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Book Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: MASTER RATE CARD TABLE */}
        {viewMode === "table" && (
          <div className="bg-white rounded-2xl border border-[#EFE8DD] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F9F6F0] border-b border-[#EFE8DD] text-[#1F1B18] font-bold text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4">Repair Service</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                    <th className="py-3 px-4 hidden md:table-cell">Estimated Time</th>
                    <th className="py-3 px-4">Warranty</th>
                    <th className="py-3 px-4 text-right">Fixed Labor Rate</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE8DD]">
                  {filteredSkus.map((sku) => (
                    <tr key={sku.id} className="hover:bg-[#F9F6F0]/60 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-[#1F1B18] flex items-center gap-2">
                          <span>{sku.name}</span>
                          {sku.isPackage && (
                            <span className="px-1.5 py-0.2 rounded bg-[#E8F5E9] text-[#07794C] text-[9px] font-bold uppercase">
                              Pkg
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#8A7D71] line-clamp-1">{sku.description}</div>
                      </td>
                      <td className="py-3 px-4 hidden sm:table-cell">
                        <Link
                          href={`/services/${sku.categorySlug}`}
                          className="px-2 py-0.5 rounded-md bg-[#F9F6F0] border border-[#EFE8DD] text-[10px] font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors"
                        >
                          {sku.categoryTitle}
                        </Link>
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell text-[#5A5046]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C59B63]" /> {sku.timeEstimate}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-1 text-[#C59B63] font-semibold text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5" /> {sku.warranty}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-black text-sm text-[#1F1B18]">{sku.fixedRate}</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onOpenBooking && onOpenBooking(sku.categoryTitle, sku.name, sku.price, areaName)}
                          className="px-3 py-1 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white text-[11px] font-bold shadow-2xs active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                        >
                          Book Visit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer info within rate sheet */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-[#8A7D71] px-1 gap-2">
          <span className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-[#C59B63]" />
            * Genuine hardware (Godrej, Hettich, Hafele, Ebco) charged at actual retail MRP with store bill.
          </span>
          <span className="font-semibold text-[#1F1B18]">
            Rapid doorstep dispatch in 25-35 minutes across all Hyderabad hubs.
          </span>
        </div>

      </div>
    </section>
  );
};
