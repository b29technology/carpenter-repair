"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES_MASTER, getAllSkus, ServiceSku } from "@/data/servicesMaster";
import { trackUserAction } from "@/lib/analytics";
import { 
  X, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Hammer,
  MapPin,
  Wrench,
  Tag,
  ArrowUpRight,
  ChevronDown,
  Search,
  Check,
  Zap,
  Calendar
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
  preselectedService?: string;
  preselectedSubService?: string;
  preselectedPrice?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedArea = "",
  preselectedService = "",
  preselectedSubService = "",
  preselectedPrice = ""
}) => {
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(preselectedArea);
  const [service, setService] = useState(preselectedService);
  const [subService, setSubService] = useState(preselectedSubService);
  const [price, setPrice] = useState(preselectedPrice);
  const [notes, setNotes] = useState("");
  
  // Date & Time states
  const [visitDate, setVisitDate] = useState("Today");
  const [customDate, setCustomDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Immediate (Within 30-45 Mins)");
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active custom dropdown controller ("area" | "service" | "subService" | null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Search filters
  const [areaSearch, setAreaSearch] = useState("");
  const [skuSearch, setSkuSearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize state whenever props change or modal opens
  useEffect(() => {
    if (!isOpen) return;

    // Track modal open event
    trackUserAction({
      eventType: "MODAL_OPEN",
      buttonLabel: preselectedSubService ? `Modal Opened for ${preselectedSubService}` : "Booking Modal Triggered",
      service: preselectedService,
      subService: preselectedSubService,
      price: preselectedPrice,
      area: preselectedArea,
    });

    if (preselectedArea) {
      setArea(preselectedArea);
    }

    let resolvedCategory = preselectedService;
    if (preselectedService) {
      const cat = CARPENTER_SERVICES_MASTER.find(
        (c) =>
          c.shortTitle.toLowerCase() === preselectedService.toLowerCase() ||
          c.slug.toLowerCase() === preselectedService.toLowerCase() ||
          c.title.toLowerCase() === preselectedService.toLowerCase()
      );
      if (cat) resolvedCategory = cat.shortTitle;
      setService(resolvedCategory);
    }

    if (preselectedSubService) {
      const allSkus = getAllSkus();
      const skuObj = allSkus.find(
        (s) =>
          s.name.toLowerCase() === preselectedSubService.toLowerCase() ||
          s.id.toLowerCase() === preselectedSubService.toLowerCase()
      );
      if (skuObj) {
        setSubService(skuObj.name);
        setPrice(preselectedPrice || skuObj.price);
        if (!resolvedCategory) {
          setService(skuObj.categoryTitle);
        }
      } else {
        setSubService(preselectedSubService);
        if (preselectedPrice) setPrice(preselectedPrice);
      }
    } else if (resolvedCategory) {
      // If only category was provided, select starting repair SKU
      const cat = CARPENTER_SERVICES_MASTER.find(
        (c) => c.shortTitle.toLowerCase() === resolvedCategory.toLowerCase()
      );
      if (cat && cat.skus.length > 0) {
        const defaultSku = cat.skus.find((s) => s.numericPrice <= 200) || cat.skus[0];
        setSubService(defaultSku.name);
        setPrice(defaultSku.price);
      }
    } else if (preselectedPrice) {
      setPrice(preselectedPrice);
    }
  }, [isOpen, preselectedArea, preselectedService, preselectedSubService, preselectedPrice]);

  // Outside click handler to close open custom dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openDropdown) {
          setOpenDropdown(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, openDropdown, onClose]);

  // All SKUs for global search
  const allMasterSkus = useMemo(() => getAllSkus(), []);

  // Filtered areas for search
  const filteredAreas = useMemo(() => {
    if (!areaSearch.trim()) return HYDERABAD_AREAS;
    const q = areaSearch.toLowerCase();
    return HYDERABAD_AREAS.filter(
      (a) => a.name.toLowerCase().includes(q) || a.zone.toLowerCase().includes(q) || a.pincode.includes(q)
    );
  }, [areaSearch]);

  // Filtered SKUs for search: Search across ALL services or display current category first
  const filteredSkus = useMemo(() => {
    if (skuSearch.trim()) {
      const q = skuSearch.toLowerCase();
      return allMasterSkus.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.categoryTitle.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }
    return allMasterSkus;
  }, [allMasterSkus, skuSearch]);

  // Grouped SKUs for dropdown: Current category first, then other categories
  const groupedSkus = useMemo(() => {
    if (skuSearch.trim()) {
      return [{ category: "Matching Services", skus: filteredSkus }];
    }
    
    // Put current category at the top if selected
    const groups: { category: string; skus: ServiceSku[] }[] = [];
    if (service) {
      const currentCatObj = CARPENTER_SERVICES_MASTER.find(
        (c) => c.shortTitle.toLowerCase() === service.toLowerCase()
      );
      if (currentCatObj) {
        groups.push({
          category: `${currentCatObj.shortTitle} (Selected Category)`,
          skus: currentCatObj.skus,
        });
      }
    }

    // Add remaining categories
    CARPENTER_SERVICES_MASTER.forEach((cat) => {
      if (!service || cat.shortTitle.toLowerCase() !== service.toLowerCase()) {
        groups.push({
          category: cat.shortTitle,
          skus: cat.skus,
        });
      }
    });

    return groups;
  }, [filteredSkus, service, skuSearch]);

  // Quick Date Options
  const DATE_OPTIONS = [
    { id: "Today", label: "Today", isRapid: true, badge: "⚡ 30-Min Rapid" },
    { id: "Tomorrow", label: "Tomorrow", isRapid: false },
    { id: "Day After Tomorrow", label: "Day After", isRapid: false },
    { id: "Custom Date", label: "Pick Date", isRapid: false },
  ];

  // Time Slot Options
  const TIME_SLOT_OPTIONS = [
    { label: "Immediate (Within 30-45 Mins)", badge: "Fastest", isImmediate: true },
    { label: "09:00 AM - 12:00 PM", badge: "Morning", isImmediate: false },
    { label: "12:00 PM - 03:00 PM", badge: "Afternoon", isImmediate: false },
    { label: "03:00 PM - 06:00 PM", badge: "Late Noon", isImmediate: false },
    { label: "06:00 PM - 09:00 PM", badge: "Evening", isImmediate: false },
  ];

  // Handle service category change
  const handleServiceChange = (newService: string) => {
    const cat = CARPENTER_SERVICES_MASTER.find(
      (c) =>
        c.shortTitle.toLowerCase() === newService.toLowerCase() ||
        c.slug.toLowerCase() === newService.toLowerCase() ||
        c.title.toLowerCase() === newService.toLowerCase()
    );
    const canonical = cat ? cat.shortTitle : newService;
    setService(canonical);

    // Auto-select starting repair SKU for this category
    if (cat && cat.skus.length > 0) {
      const defaultSku = cat.skus[0];
      setSubService(defaultSku.name);
      setPrice(defaultSku.price);
    } else {
      setSubService("");
      setPrice("");
    }
    setOpenDropdown(null);
  };

  // Handle subService change
  const handleSubServiceChange = (sku: ServiceSku) => {
    setSubService(sku.name);
    setPrice(sku.price);
    setService(sku.categoryTitle);
    setOpenDropdown(null);
  };

  // Safe early return strictly AFTER all hooks
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const finalDate = visitDate === "Custom Date" && customDate ? customDate : visitDate;

    // Asynchronously dispatch email & telegram notification
    fetch("/api/send-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || "Customer",
        phone,
        area: area || "Hyderabad Central Hub",
        service: service || "General Carpentry",
        subService: subService || "Doorstep Inspection & Diagnosis",
        price: price || "",
        preferredDate: finalDate,
        preferredSlot,
        notes,
        source: "Booking Modal (Global CTA / Rate Card)",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        pagePath: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        device: typeof window !== "undefined" ? (window.innerWidth < 768 ? "Mobile" : "Desktop") : "",
      }),
    }).catch((err) => {
      console.error("Failed to dispatch booking notification:", err);
    });

    const message = `*NEW VERIFIED CARPENTER BOOKING (HYDERABAD)*%0A` +
      `• *Customer Name:* ${name || "Customer"}%0A` +
      `• *Mobile Number:* +91 ${phone}%0A` +
      `• *Locality / Area:* ${area || "Hyderabad Central Hub"}%0A` +
      `• *Category:* ${service || "General Carpentry"}%0A` +
      `• *Selected Repair / Product:* ${subService || "Doorstep Inspection & Diagnosis"}%0A` +
      (price ? `• *Estimated Labor Rate:* ${price}%0A` : "") +
      `• *Preferred Visit Date:* ${finalDate}%0A` +
      `• *Arrival Time Slot:* ${preferredSlot}%0A` +
      `• *Society / Landmark / Notes:* ${notes || "Doorstep visit requested"}%0A` +
      `• *Visiting Policy:* Rs 149 Inspection Fee (100% adjusted into final repair bill)%0A%0A` +
      `_Please confirm carpenter dispatch & arrival time._`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

    setIsSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F1B18]/75 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        ref={dropdownRef}
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#EFE8DD] relative overflow-hidden max-h-[92vh] flex flex-col"
      >
        
        {/* ================= FIXED MODAL HEADER ================= */}
        <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-[#EFE8DD] flex items-start justify-between gap-4 bg-[#FCFBF8] shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F6F0] text-[#C59B63] text-xs font-bold mb-2 border border-[#EFE8DD]">
              <Hammer className="w-3.5 h-3.5" />
              <span>30-Minute Doorstep Visit Across Hyderabad</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight">
              Book a Verified Master Carpenter
            </h2>
            <p className="text-xs text-[#5A5046] mt-0.5">
              Transparent upfront rates • Genuine hardware • 30-Day service warranty
            </p>
          </div>

          {/* Clean Close Button outside scroll container */}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#8A7D71] hover:text-[#1F1B18] hover:bg-white transition-all cursor-pointer shrink-0 border border-[#EFE8DD] shadow-2xs hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= SCROLLABLE BODY ================= */}
        <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-4 text-xs">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Product / Service Auto-Selected Banner */}
              {(subService || service) && (
                <div className="p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#EFE8DD] flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#EFE8DD] flex items-center justify-center text-[#C59B63] shrink-0 shadow-2xs">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[#1F1B18] text-xs sm:text-sm truncate">
                        <span>{subService || service}</span>
                        {price && <span className="text-[#07794C] ml-2 font-black">({price})</span>}
                      </div>
                      <div className="text-[11px] text-[#8A7D71] flex items-center gap-1.5 mt-0.5 truncate">
                        {service && subService && subService !== service && (
                          <span className="font-semibold text-[#5A5046]">{service} •</span>
                        )}
                        <span>{area ? `Assigned local dispatch for ${area}` : "Doorstep dispatch across Hyderabad"}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#EFE8DD] text-[10px] font-black text-[#07794C] shrink-0 uppercase tracking-wider">
                    Auto-Selected
                  </span>
                </div>
              )}

              {/* Row 1: Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F1B18] mb-1.5">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Varma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F1B18] mb-1.5">
                    Mobile Number: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-xs font-bold text-[#8A7D71]">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="91008 24567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-[#EFE8DD] text-xs font-semibold text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Custom Dropdowns (Locality & Service Category) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. CUSTOM LOCALITY DROPDOWN */}
                <div className="relative">
                  <label className="block text-xs font-bold text-[#1F1B18] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
                    <span>Locality in Hyderabad:</span>
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(openDropdown === "area" ? null : "area");
                      setAreaSearch("");
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-left bg-[#F9F6F0] hover:bg-white focus:bg-white transition-all flex items-center justify-between cursor-pointer ${
                      openDropdown === "area" ? "border-[#C59B63] ring-1 ring-[#C59B63] bg-white shadow-xs" : "border-[#EFE8DD]"
                    }`}
                  >
                    <span className={`truncate font-medium flex items-center gap-1.5 ${area ? "text-[#1F1B18] font-bold" : "text-[#8A7D71]"}`}>
                      {area ? (
                        <>
                          <MapPin className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                          <span>{area}</span>
                        </>
                      ) : (
                        "-- Choose Locality / Area --"
                      )}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#8A7D71] transition-transform duration-200 shrink-0 ${openDropdown === "area" ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === "area" && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-[#EFE8DD] shadow-xl z-50 overflow-hidden animate-in fade-in duration-150">
                      <div className="p-2 border-b border-[#EFE8DD] bg-[#FCFBF8]">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-[#8A7D71] absolute left-2.5 top-2.5" />
                          <input
                            type="text"
                            placeholder="Search area (e.g. Miyapur, Tellapur, Narsingi)..."
                            value={areaSearch}
                            onChange={(e) => setAreaSearch(e.target.value)}
                            className="w-full pl-8 pr-2.5 py-1.5 rounded-lg border border-[#EFE8DD] text-xs bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                            autoFocus
                          />
                        </div>
                      </div>
                      <div className="max-h-52 overflow-y-auto divide-y divide-[#F4EFE6]">
                        {filteredAreas.length > 0 ? (
                          filteredAreas.map((a) => (
                            <button
                              key={a.slug}
                              type="button"
                              onClick={() => {
                                setArea(a.name);
                                setOpenDropdown(null);
                              }}
                              className={`w-full pl-3.5 pr-2.5 py-2.5 text-left text-xs hover:bg-[#F9F6F0] transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                                area === a.name ? "bg-[#F9F6F0] font-bold text-[#C59B63]" : "text-[#1F1B18]"
                              }`}
                            >
                              <div className="min-w-0 pr-1">
                                <span className="font-semibold block truncate">{a.name}</span>
                                <span className="text-[10.5px] text-[#8A7D71] block">{a.responseTime} response</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[10px] text-[#8A7D71] px-1.5 py-0.5 rounded-md bg-[#F4EFE6] border border-[#EFE8DD] whitespace-nowrap">
                                  {a.zone}
                                </span>
                                <span className="w-4 h-4 flex items-center justify-center shrink-0">
                                  {area === a.name && <Check className="w-4 h-4 text-[#C59B63] shrink-0" />}
                                </span>
                              </div>
                            </button>
                          ))
                        ) : (
                          <div className="p-4 text-center text-xs text-[#8A7D71]">
                            No areas matching &quot;{areaSearch}&quot;
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. CUSTOM SERVICE CATEGORY DROPDOWN */}
                <div className="relative">
                  <label className="block text-xs font-bold text-[#1F1B18] mb-1.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#C59B63]" />
                    <span>Service Category:</span>
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === "service" ? null : "service")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-left bg-[#F9F6F0] hover:bg-white focus:bg-white transition-all flex items-center justify-between cursor-pointer ${
                      openDropdown === "service" ? "border-[#C59B63] ring-1 ring-[#C59B63] bg-white shadow-xs" : "border-[#EFE8DD]"
                    }`}
                  >
                    <span className={`truncate font-medium flex items-center gap-1.5 ${service ? "text-[#1F1B18] font-bold" : "text-[#8A7D71]"}`}>
                      {service ? (
                        <>
                          <Wrench className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                          <span>{service}</span>
                        </>
                      ) : (
                        "-- Choose Category --"
                      )}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#8A7D71] transition-transform duration-200 shrink-0 ${openDropdown === "service" ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === "service" && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-[#EFE8DD] shadow-xl z-50 overflow-hidden animate-in fade-in duration-150">
                      <div className="max-h-56 overflow-y-auto divide-y divide-[#F4EFE6]">
                        {CARPENTER_SERVICES_MASTER.map((cat) => (
                          <button
                            key={cat.slug}
                            type="button"
                            onClick={() => handleServiceChange(cat.shortTitle)}
                            className={`w-full pl-3.5 pr-2.5 py-2.5 text-left text-xs hover:bg-[#F9F6F0] transition-colors flex items-center justify-between gap-2.5 cursor-pointer ${
                              service === cat.shortTitle ? "bg-[#F9F6F0] font-bold text-[#C59B63]" : "text-[#1F1B18]"
                            }`}
                          >
                            <div className="min-w-0 pr-1">
                              <span className="font-semibold block truncate">{cat.shortTitle}</span>
                              <span className="text-[10.5px] text-[#8A7D71] block">{cat.skus.length} specialized repairs</span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[11px] font-bold text-[#07794C] px-2 py-0.5 rounded-md bg-[#E8F5E9] border border-[#C8E6C9] whitespace-nowrap">
                                Starts at {cat.startingPrice.replace(/^Starts at\s*/i, "")}
                              </span>
                              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                                {service === cat.shortTitle && <Check className="w-4 h-4 text-[#C59B63] shrink-0" />}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Row 3: CUSTOM SPECIFIC REPAIR / PRODUCT SKU DROPDOWN (Searchable Across All 46+ Services) */}
              <div className="relative">
                <label className="block text-xs font-bold text-[#1F1B18] mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#C59B63]" />
                    <span>Specific Repair / Product (Upfront Labor Rate):</span>
                  </span>
                  <span className="text-[11px] text-[#8A7D71]">
                    {allMasterSkus.length} total services available
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setOpenDropdown(openDropdown === "subService" ? null : "subService");
                    setSkuSearch("");
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-left bg-[#F9F6F0] hover:bg-white focus:bg-white transition-all flex items-center justify-between cursor-pointer ${
                    openDropdown === "subService" ? "border-[#C59B63] ring-1 ring-[#C59B63] bg-white shadow-xs" : "border-[#EFE8DD]"
                  }`}
                >
                  <span className={`truncate font-medium flex items-center gap-1.5 ${subService ? "text-[#1F1B18] font-bold" : "text-[#8A7D71]"}`}>
                    {subService ? (
                      <>
                        <Tag className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                        <span className="truncate">{subService}</span>
                        {price && <span className="text-[#07794C] font-black shrink-0">({price})</span>}
                      </>
                    ) : (
                      "-- Select Specific Repair or Package --"
                    )}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#8A7D71] transition-transform duration-200 shrink-0 ${openDropdown === "subService" ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "subService" && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-[#EFE8DD] shadow-xl z-50 overflow-hidden animate-in fade-in duration-150">
                    <div className="p-2 border-b border-[#EFE8DD] bg-[#FCFBF8]">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-[#8A7D71] absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search all 46+ repairs (e.g. combo, hinge, lock, sliding, bed, shelf)..."
                          value={skuSearch}
                          onChange={(e) => setSkuSearch(e.target.value)}
                          className="w-full pl-8 pr-2.5 py-1.5 rounded-lg border border-[#EFE8DD] text-xs bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                          autoFocus
                        />
                      </div>
                    </div>
                    
                    <div className="max-h-64 overflow-y-auto divide-y divide-[#F4EFE6]">
                      {groupedSkus.length > 0 ? (
                        groupedSkus.map((group, gIdx) => (
                          <div key={gIdx}>
                            <div className="px-3 py-1.5 bg-[#FAF7F2] text-[10px] font-black uppercase tracking-wider text-[#8A7D71] sticky top-0 border-b border-[#EFE8DD] flex items-center justify-between">
                              <span>{group.category}</span>
                              <span className="font-normal">{group.skus.length} services</span>
                            </div>
                            {group.skus.map((sku) => (
                              <button
                                key={sku.id}
                                type="button"
                                onClick={() => handleSubServiceChange(sku)}
                                className={`w-full pl-3.5 pr-2.5 py-2.5 text-left text-xs hover:bg-[#F9F6F0] transition-colors flex items-center justify-between gap-2.5 cursor-pointer ${
                                  subService === sku.name ? "bg-[#F9F6F0] font-bold text-[#C59B63]" : "text-[#1F1B18]"
                                }`}
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="font-semibold block truncate">{sku.name}</div>
                                  <div className="text-[10.5px] text-[#8A7D71] block truncate">
                                    {sku.categoryTitle} • {sku.timeEstimate} • {sku.warranty}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="text-xs font-black text-[#07794C] px-2 py-0.5 rounded-md bg-[#E8F5E9] border border-[#C8E6C9] whitespace-nowrap">
                                    {sku.price}
                                  </span>
                                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                                    {subService === sku.name && <Check className="w-4 h-4 text-[#C59B63] shrink-0" />}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-xs text-[#8A7D71]">
                          No repairs matching &quot;{skuSearch}&quot;
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ================= ROW 4: INTERACTIVE VISIT DATE SELECTION ================= */}
              <div>
                <label className="block text-xs font-bold text-[#1F1B18] mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C59B63]" />
                  <span>Preferred Visit Date:</span>
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {DATE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setVisitDate(opt.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        visitDate === opt.id
                          ? "bg-[#F9F6F0] border-[#C59B63] text-[#7A4B1A] ring-1 ring-[#C59B63] shadow-xs"
                          : "bg-white border-[#EFE8DD] text-[#5A5046] hover:bg-[#F9F6F0]"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {opt.isRapid && <Zap className="w-3 h-3 text-[#C59B63]" />}
                        <span>{opt.label}</span>
                      </span>
                      {opt.badge && (
                        <span className="text-[9.5px] font-semibold text-[#07794C]">
                          30-Min Rapid
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Date Input if Custom selected */}
                {visitDate === "Custom Date" && (
                  <div className="mt-2">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                    />
                  </div>
                )}
              </div>

              {/* ================= ROW 5: INTERACTIVE TIME SLOT SELECTION ================= */}
              <div>
                <label className="block text-xs font-bold text-[#1F1B18] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C59B63]" />
                  <span>Preferred Arrival Time Slot:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIME_SLOT_OPTIONS.map((slot) => (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() => setPreferredSlot(slot.label)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                        preferredSlot === slot.label
                          ? "bg-[#F9F6F0] border-[#C59B63] text-[#1F1B18] font-bold ring-1 ring-[#C59B63] shadow-xs"
                          : "bg-white border-[#EFE8DD] text-[#5A5046] hover:bg-[#F9F6F0]"
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        {slot.isImmediate ? (
                          <Zap className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-[#8A7D71] shrink-0" />
                        )}
                        <span className="truncate">{slot.label}</span>
                      </span>
                      {preferredSlot === slot.label ? (
                        <Check className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                      ) : (
                        <span className="text-[10px] text-[#8A7D71] px-1.5 py-0.5 rounded-md bg-[#F4EFE6] shrink-0">
                          {slot.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Notes & Society Landmark */}
              <div>
                <label className="block text-xs font-bold text-[#1F1B18] mb-1.5">
                  Apartment / Society Name & Issue Details:
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Janapriya Nile Valley flat 402, 2 sliding wardrobe doors stuck"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63] transition-all"
                />
              </div>

              {/* ================= VISITING CHARGE POLICY CLARIFICATION ================= */}
              <div className="rounded-2xl bg-[#FFF9F0] border border-[#E8D7C3] p-3.5 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#C59B63]/15 text-[#C59B63] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#1F1B18] flex items-center gap-2 flex-wrap">
                    <span>Visiting & Inspection Fee Policy</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#07794C]/15 text-[#07794C] text-[10px] font-black uppercase tracking-wider">
                      100% Bill Adjusted
                    </span>
                  </div>
                  <p className="text-[#5A5046] mt-1 leading-relaxed text-[11px] sm:text-[11.5px]">
                    Doorstep technician diagnosis is <span className="font-bold text-[#1F1B18]">₹149</span>. When you proceed with any carpentry service or repair, this ₹149 is <span className="font-bold text-[#07794C]">fully deducted</span> from your final labor bill! Zero hidden platform fees.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between py-1 text-[11px] text-[#8A7D71] border-t border-[#EFE8DD]">
                <span className="flex items-center gap-1.5 text-[#C59B63] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 30-Day Work Warranty
                </span>
                <span className="flex items-center gap-1.5 text-[#1F1B18] font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#C59B63]" /> 30-Min Rapid Arrival
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm & Book Carpenter Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </form>
          ) : (
            /* Submission Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#07794C] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1F1B18]">
                Carpenter Visit Booked Successfully!
              </h3>
              <p className="text-xs text-[#5A5046] max-w-sm mx-auto leading-relaxed">
                We have assigned our lead technician for <span className="font-bold text-[#1F1B18]">{area || "your locality"}</span>. Details have been transferred to your WhatsApp dispatch thread.
              </p>
              
              <div className="p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#EFE8DD] text-xs text-[#1F1B18] inline-block font-semibold">
                Estimated Technician Arrival: <span className="text-[#C59B63] font-bold">25 - 35 Minutes</span>
              </div>
              
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-8 py-2.5 rounded-full bg-[#1F1B18] text-white text-xs font-bold hover:bg-[#3A332C] transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
