"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES } from "@/data/services";
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Clock, 
  ArrowUpRight,
  Hammer,
  DoorOpen,
  Archive,
  Maximize2,
  LayoutGrid,
  Utensils,
  Armchair,
  Sparkles,
  Package,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

interface ServiceNavSubItem {
  slug: string;
  name: string;
  desc: string;
  price: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceGroup {
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  services: ServiceNavSubItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Flat-Pack & Mounting",
    tagline: "IKEA assembly, shelves & mirrors",
    icon: Package,
    services: [
      {
        slug: "furniture-assembly",
        name: "Furniture Assembly",
        desc: "Beds, wardrobes, dining, IKEA & Wakefit",
        badge: "POPULAR",
        price: "From ₹199",
        icon: Package,
      },
      {
        slug: "shelf-and-cabinet-installation",
        name: "Shelf & Cabinet Install",
        desc: "TV wall units, floating shelves & cabinets",
        price: "From ₹149",
        icon: LayoutGrid,
      },
      {
        slug: "decor-mirror-installation",
        name: "Décor & Mirror Hanging",
        desc: "Heavy mirrors, art frames & curtain rods",
        price: "From ₹129",
        icon: Maximize2,
      },
    ],
  },
  {
    title: "Doors & Storage Repair",
    tagline: "Locks, sliding tracks & kitchens",
    icon: DoorOpen,
    services: [
      {
        slug: "door-repair-and-installation",
        name: "Wooden Door Services",
        desc: "Locks, planing swollen doors & hinges",
        badge: "TOP RATED",
        price: "From ₹100",
        icon: DoorOpen,
      },
      {
        slug: "wardrobe-and-cupboard-repair",
        name: "Wardrobe & Cupboard",
        desc: "Sliding channels, hydraulic hinges & drawers",
        price: "From ₹149",
        icon: Archive,
      },
      {
        slug: "modular-kitchen-cabinets",
        name: "Modular Kitchen Repair",
        desc: "Tandem baskets, lift-up shutters & alignment",
        price: "From ₹249",
        icon: Utensils,
      },
    ],
  },
  {
    title: "Bed Fixing & Woodwork",
    tagline: "Bed frames, drilling & polishing",
    icon: Hammer,
    services: [
      {
        slug: "furniture-assembly-and-repair",
        name: "Furniture & Bed Repair",
        desc: "Loose joints, squeaky beds, table legs",
        price: "From ₹199",
        icon: Armchair,
      },
      {
        slug: "general-woodwork-and-drilling",
        name: "Drilling & Minor Woodwork",
        desc: "SDS concrete drilling & heavy wall anchors",
        price: "From ₹99",
        icon: Hammer,
      },
      {
        slug: "wood-polishing-and-refurbishing",
        name: "Polishing & Refurbishing",
        desc: "PU, Melamine & Teak wood rejuvenation",
        price: "From ₹499",
        icon: Sparkles,
      },
    ],
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Tan Announcement Bar (Direct match to reference) */}
      <div className="bg-[#C59B63] text-white text-xs py-2 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/80" /> Mon - Sun : 8:00 AM - 9:30 PM
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-white/80" /> Hyderabad & Secunderabad Central Hubs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header (Clean Warm Cream / Off-White) */}
      <header className="sticky top-0 z-40 bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo: Artisanal Woodcraft Crest (Match to reference WOODX) */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-[#C59B63] flex items-center justify-center text-white shadow-xs">
                <Hammer className="w-4 h-4 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-[#1F1B18] tracking-wider uppercase font-serif">
                  CARPENTER <span className="text-[#C59B63]">REPAIR</span>
                </span>
                <span className="text-[9px] font-bold text-[#8A7D71] tracking-widest uppercase -mt-0.5">
                  Hyderabad Home Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link 
                href="/" 
                className="text-sm font-semibold text-[#1F1B18] hover:text-[#C59B63] transition-colors"
              >
                Home
              </Link>

              <Link 
                href="/#about" 
                className="text-sm font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors"
              >
                About Us
              </Link>

              {/* Services Mega Menu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setIsServicesDropdownOpen(true);
                  setIsAreaDropdownOpen(false);
                }}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button 
                  onClick={() => {
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    setIsAreaDropdownOpen(false);
                  }}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors py-2 cursor-pointer focus:outline-none"
                  aria-expanded={isServicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#8A7D71] transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180 text-[#C59B63]" : ""}`} />
                </button>

                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full -left-48 lg:-left-56 xl:-left-64 w-[860px] max-w-[92vw] bg-white rounded-3xl shadow-2xl border border-[#EFE8DD] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {/* Mega Menu Top Header */}
                    <div className="bg-gradient-to-r from-[#FAF6F0] via-white to-[#FAF6F0] px-6 py-3 border-b border-[#EFE8DD] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#C59B63]/15 text-[#C59B63] flex items-center justify-center">
                          <Hammer className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-[#1F1B18]">
                          Carpentry & Woodwork Catalog
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF6F0] text-[#8A7D71] border border-[#EFE8DD]">
                          9 Specialized Hubs
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] font-medium text-[#5A5046]">
                        <span className="flex items-center gap-1 text-[#07794C] font-semibold">
                          <Clock className="w-3 h-3" /> 30-Min Hyderabad Doorstep
                        </span>
                        <span className="hidden sm:flex items-center gap-1 text-[#C59B63] font-semibold">
                          <ShieldCheck className="w-3 h-3" /> 30-Day Guarantee
                        </span>
                      </div>
                    </div>

                    {/* Mega Menu 3-Column Body */}
                    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#FCFBF9]/60">
                      {SERVICE_GROUPS.map((group) => {
                        const GroupIcon = group.icon;
                        return (
                          <div key={group.title} className="flex flex-col gap-2">
                            {/* Category Title Header */}
                            <div className="flex items-center gap-1.5 pb-1 border-b border-[#EFE8DD]">
                              <GroupIcon className="w-3.5 h-3.5 text-[#C59B63]" />
                              <span className="text-xs font-black text-[#1F1B18] uppercase tracking-wider">
                                {group.title}
                              </span>
                            </div>

                            {/* Service Cards */}
                            <div className="flex flex-col gap-2 pt-1">
                              {group.services.map((item) => {
                                const ItemIcon = item.icon;
                                const isFurnitureAssembly = item.slug === "furniture-assembly";
                                return (
                                  <Link
                                    key={item.slug}
                                    href={`/services/${item.slug}`}
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                    className={`group flex items-start gap-2.5 p-2.5 rounded-2xl transition-all duration-200 border ${
                                      isFurnitureAssembly
                                        ? "bg-amber-50/50 hover:bg-white border-amber-200/80 hover:border-[#C59B63] shadow-xs"
                                        : "bg-white hover:bg-white border-[#EFE8DD] hover:border-[#C59B63] hover:shadow-xs"
                                    }`}
                                  >
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                      isFurnitureAssembly
                                        ? "bg-amber-100 text-amber-900 group-hover:bg-[#C59B63] group-hover:text-white"
                                        : "bg-[#FAF6F0] text-[#C59B63] group-hover:bg-[#C59B63] group-hover:text-white"
                                    }`}>
                                      <ItemIcon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1 mb-0.5">
                                        <span className="text-xs font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors truncate">
                                          {item.name}
                                        </span>
                                        {item.badge && (
                                          <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full tracking-wider shrink-0 ${
                                            isFurnitureAssembly 
                                              ? "bg-amber-500 text-white" 
                                              : "bg-emerald-100 text-emerald-800"
                                          }`}>
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[10px] text-[#8A7D71] line-clamp-1 leading-tight group-hover:text-[#5A5046] transition-colors">
                                        {item.desc}
                                      </p>
                                      <div className="mt-1 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-[#C59B63] bg-[#FAF6F0] px-1.5 py-0.5 rounded">
                                          {item.price}
                                        </span>
                                        <ArrowUpRight className="w-3 h-3 text-[#A89C8F] group-hover:text-[#C59B63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mega Menu Bottom Bar */}
                    <div className="bg-[#FAF6F0] px-6 py-2.5 border-t border-[#EFE8DD] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-3 text-[11px] text-[#5A5046]">
                        <span className="flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#07794C]" /> Free Inspection with Repair
                        </span>
                        <span className="hidden sm:flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#07794C]" /> Branded Hardware (Ebco, Hafele, Godrej)
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href="/pricing"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="text-xs font-bold text-[#C59B63] hover:text-[#B58A52] flex items-center gap-1 hover:underline"
                        >
                          <span>Full Pricing Sheet</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hyderabad Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setIsAreaDropdownOpen(true);
                  setIsServicesDropdownOpen(false);
                }}
                onMouseLeave={() => setIsAreaDropdownOpen(false)}
              >
                <button 
                  onClick={() => {
                    setIsAreaDropdownOpen(!isAreaDropdownOpen);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors py-2 cursor-pointer focus:outline-none"
                  aria-expanded={isAreaDropdownOpen}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
                  Hyderabad Areas <ChevronDown className={`w-3.5 h-3.5 text-[#8A7D71] transition-transform duration-200 ${isAreaDropdownOpen ? "rotate-180 text-[#C59B63]" : ""}`} />
                </button>

                {isAreaDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[520px] bg-white rounded-2xl shadow-xl border border-[#EFE8DD] p-4 grid grid-cols-3 gap-2 z-50">
                    <div className="col-span-3 pb-2 mb-1 border-b border-[#EFE8DD] flex justify-between items-center text-xs">
                      <span className="font-bold text-[#1F1B18]">Select Locality</span>
                      <span className="text-[#C59B63] font-medium">30-min doorstep arrival</span>
                    </div>
                    {HYDERABAD_AREAS.slice(0, 15).map((area) => (
                      <Link
                        key={area.slug}
                        href={`/hyderabad/${area.slug}`}
                        className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#5A5046] hover:bg-[#F9F6F0] hover:text-[#C59B63] transition-colors flex items-center justify-between"
                        onClick={() => setIsAreaDropdownOpen(false)}
                      >
                        <span>{area.name}</span>
                        <span className="text-[10px] text-[#8A7D71]">{area.responseTime.split(" ")[0]}m</span>
                      </Link>
                    ))}
                    <div className="col-span-3 pt-2 text-center border-t border-[#EFE8DD]">
                      <Link 
                        href="/#areas" 
                        className="text-xs font-bold text-[#C59B63] hover:underline"
                        onClick={() => setIsAreaDropdownOpen(false)}
                      >
                        Explore All 25+ Hyderabad Localities →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="text-sm font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors"
              >
                Pricing
              </Link>

              <Link 
                href="/#reviews" 
                className="text-sm font-semibold text-[#5A5046] hover:text-[#C59B63] transition-colors"
              >
                Reviews
              </Link>
            </nav>

            {/* Right Action Button (Direct Phone Number CTA as requested) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] shadow-xs active:scale-95 transition-all"
              >
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{siteConfig.phone}</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold">
                  24/7
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="p-2 rounded-full bg-[#C59B63] text-white"
                aria-label="Call Carpenter"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#1F1B18] hover:bg-[#EFE8DD]"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EFE8DD] px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#1F1B18] hover:bg-[#F9F6F0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#1F1B18] hover:bg-[#F9F6F0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Section with Rich Cards */}
              <div className="pt-2 pb-1 text-xs font-bold uppercase text-[#8A7D71] px-1 flex items-center justify-between">
                <span>Services ({CARPENTER_SERVICES.length})</span>
                <span className="text-[10px] text-[#C59B63] font-bold">Doorstep in 30 Mins</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_GROUPS.flatMap((g) => g.services).map((s) => {
                  const ItemIcon = s.icon;
                  const isFurnitureAssembly = s.slug === "furniture-assembly";
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF6F0]/70 hover:bg-[#FAF6F0] border border-[#EFE8DD] group transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-[#EFE8DD] transition-colors ${
                          isFurnitureAssembly ? "bg-amber-100 text-amber-900" : "bg-white text-[#C59B63] group-hover:bg-[#C59B63] group-hover:text-white"
                        }`}>
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#1F1B18] group-hover:text-[#C59B63] flex items-center gap-1.5 truncate">
                            <span>{s.name}</span>
                            {s.badge && (
                              <span className={`text-[8px] font-black uppercase px-1 py-0.2 rounded ${
                                isFurnitureAssembly ? "bg-amber-500 text-white" : "bg-emerald-100 text-emerald-800"
                              }`}>
                                {s.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-[#8A7D71] truncate">
                            {s.price} • Same-Day Service
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7D71] group-hover:text-[#C59B63] shrink-0" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 pb-1 text-xs font-bold uppercase text-[#8A7D71] px-1">
                Top Hyderabad Areas
              </div>
              <div className="grid grid-cols-2 gap-1.5 px-0.5">
                {HYDERABAD_AREAS.slice(0, 10).map((a) => (
                  <Link
                    key={a.slug}
                    href={`/hyderabad/${a.slug}`}
                    className="px-2 py-1.5 rounded-lg text-xs text-[#5A5046] hover:bg-[#F9F6F0] hover:text-[#C59B63] font-medium truncate border border-[#EFE8DD]/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {a.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/pricing"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#1F1B18] hover:bg-[#F9F6F0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/#reviews"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#1F1B18] hover:bg-[#F9F6F0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
            </div>

            <div className="pt-2 border-t border-[#EFE8DD]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-center text-sm font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] transition-colors shadow-xs"
              >
                Book Carpenter Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
