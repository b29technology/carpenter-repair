"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCategory } from "@/data/servicesMaster";
import { getServiceTechnicalProfile } from "@/data/serviceDetails";
import { getTestimonialsByServiceCategory } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

// Components
import { Navbar } from "@/components/Navbar";
import { PriceEstimator } from "@/components/PriceEstimator";
import { RotatingReviews } from "@/components/RotatingReviews";
import { AreaDirectoryGrid } from "@/components/AreaDirectoryGrid";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { LiveProofToaster } from "@/components/LiveProofToaster";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BookingModal } from "@/components/BookingModal";
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  ArrowUpRight, 
  Hammer, 
  Star, 
  Plus, 
  Minus, 
  Sparkles, 
  ChevronRight, 
  Wrench, 
  Check, 
  FileText,
  AlertTriangle,
  Zap,
  Layers,
  Award,
  Sliders,
  CheckCheck,
  X,
  MapPin
} from "lucide-react";

interface ServicePageClientProps {
  service: ServiceCategory;
}

export const ServicePageClient: React.FC<ServicePageClientProps> = ({ service }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const defaultSku = service.skus && service.skus.length > 0
    ? (service.skus.find(s => s.numericPrice <= 200) || service.skus[0])
    : null;
  const [selectedSubService, setSelectedSubService] = useState<string>(defaultSku?.name || service.shortTitle);
  const [selectedPrice, setSelectedPrice] = useState<string>(defaultSku?.price || service.startingPrice);
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});

  const techProfile = getServiceTechnicalProfile(service.slug);

  const serviceReviews = React.useMemo(() => {
    return getTestimonialsByServiceCategory(service.shortTitle || service.title);
  }, [service]);

  // Handle quantity addition / reduction
  const handleAdd = (sku: any) => {
    setItemQuantities((prev) => {
      const current = prev[sku.id] || 0;
      return { ...prev, [sku.id]: current + 1 };
    });
    setSelectedSubService(sku.name);
    setSelectedPrice(sku.price);
    setIsBookingOpen(true);
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1F1B18]">
      
      {/* Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-[#EFE8DD] py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#8A7D71]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#C59B63] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#C59B63]" />
              <Link href="/#services" className="hover:text-[#C59B63] transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-[#C59B63]" />
              <span className="font-bold text-[#1F1B18]">{service.shortTitle}</span>
            </nav>
          </div>
        </div>

        {/* Service Hero Section */}
        <section className="py-12 lg:py-16 border-b border-[#EFE8DD] bg-[#F9F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Title & Booking Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-3">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>Specialized Hyderabad Carpentry Service • Starts from {service.startingPrice}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-[#1F1B18] tracking-tight leading-tight">
                  {service.title} <span className="text-[#C59B63]">in Hyderabad</span>.
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#5A5046] leading-relaxed">
                  {service.description}
                </p>

                {/* Rating badge & Quick Stats */}
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#5A5046]">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DD] shadow-2xs">
                    <Star className="w-4 h-4 fill-[#C59B63] text-[#C59B63]" />
                    <span className="font-black text-[#1F1B18]">4.88 / 5.0</span>
                    <span className="text-[#8A7D71]">• 1,200+ Verified Repairs</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DD] shadow-2xs">
                    <Clock className="w-4 h-4 text-[#C59B63]" />
                    <span>30-Min Rapid Arrival</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DD] shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-[#C59B63]" />
                    <span>30-Day Free Warranty</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <button
                    onClick={() => {
                      setSelectedSubService(defaultSku?.name || service.shortTitle);
                      setSelectedPrice(defaultSku?.price || service.startingPrice);
                      setIsBookingOpen(true);
                    }}
                    className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Book {service.shortTitle} Visit</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#1F1B18] hover:bg-[#F3ECE1] border border-[#EFE8DD] text-xs sm:text-sm font-bold transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#C59B63]" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                </div>

                {/* Key Features Checklist */}
                <div className="mt-8 pt-6 border-t border-[#EFE8DD] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A5046]">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B63] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Hero Visual Graphic */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#EFE8DD] aspect-4/3 sm:aspect-16/10 lg:aspect-square bg-white">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} in Hyderabad`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Price Pill */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFE8DD] shadow-md flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#8A7D71] uppercase tracking-wider">Fixed Upfront Labor</div>
                      <div className="text-base font-black text-[#1F1B18]">Starts from {service.startingPrice}</div>
                    </div>
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="px-4 py-2 rounded-xl bg-[#C59B63] text-white text-xs font-bold shadow-2xs hover:bg-[#B58A52] transition-colors cursor-pointer"
                    >
                      Instant Book
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: SKU CATALOGUE */}
        <section className="py-14 bg-white border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                <Wrench className="w-3.5 h-3.5" />
                <span>Verified Service Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                {service.shortTitle} — <span className="text-[#C59B63]">Packages & Rates</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5A5046]">
                Select specific repairs or complete combos with transparent upfront labor rates and genuine branded hardware.
              </p>
            </div>

            {/* SKU Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {service.skus.map((sku) => {
                const qty = itemQuantities[sku.id] || 0;
                return (
                  <div
                    key={sku.id}
                    className="bg-white rounded-2xl border border-[#EFE8DD] p-5 flex flex-col justify-between hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="flex gap-4">
                      {/* Left Details */}
                      <div className="flex-1">
                        
                        {/* Package Tag */}
                        {sku.isPackage && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#07794C] text-[10px] font-bold tracking-wider uppercase mb-1.5">
                            <Sparkles className="w-3 h-3 text-[#07794C]" />
                            <span>PACKAGE</span>
                          </div>
                        )}

                        <h3 className="text-base font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors leading-snug">
                          {sku.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mt-1 text-xs">
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F3ECE1] text-[#7A4B1A] font-bold text-[10px]">
                            <Star className="w-3 h-3 fill-[#C59B63] text-[#C59B63]" />
                            <span>{sku.rating.toFixed(2)}</span>
                          </div>
                          <span className="text-[#8A7D71] text-[11px]">({sku.reviewsCount})</span>
                        </div>

                        {/* Price & Duration */}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-base font-black text-[#1F1B18]">
                            {sku.price}
                          </span>
                          <span className="text-xs text-[#8A7D71] flex items-center gap-1 font-medium">
                            • <Clock className="w-3 h-3 text-[#C59B63]" /> {sku.timeEstimate}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-xs text-[#5A5046] leading-relaxed">
                          {sku.description}
                        </p>

                        {/* Bullets if any */}
                        {sku.bullets && sku.bullets.length > 0 && (
                          <ul className="mt-2 space-y-1 text-[11px] text-[#5A5046]">
                            {sku.bullets.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B63] mt-1 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {sku.optionsCount && (
                          <div className="mt-2 text-[10px] font-semibold text-[#8A7D71]">
                            {sku.optionsCount} options available
                          </div>
                        )}

                      </div>

                      {/* Right Thumbnail & Add Button */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#F9F6F0] border border-[#EFE8DD]">
                          <Image
                            src={sku.imageUrl}
                            alt={sku.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="112px"
                          />
                        </div>

                        {/* Add / Count Controls */}
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

                    <div className="mt-4 pt-3 border-t border-[#EFE8DD] flex items-center justify-between text-xs">
                      <span className="text-[#8A7D71] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C59B63]" /> 30-Day Warranty Included
                      </span>
                      <button
                        onClick={() => {
                          setSelectedSubService(sku.name);
                          setSelectedPrice(sku.price);
                          setIsBookingOpen(true);
                        }}
                        className="text-[#C59B63] hover:underline font-bold"
                      >
                        Book Visit →
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 3: TABULAR MASTER RATE CARD */}
        <section className="py-12 bg-[#F9F6F0] border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center gap-2 text-xs font-bold text-[#C59B63] uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Master Rate Card</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F1B18] tracking-tight mb-5">
              Carpentry Services & <span className="text-[#C59B63]">Pricing Sheet</span> — {service.shortTitle}
            </h2>

            <div className="bg-white rounded-2xl border border-[#EFE8DD] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F3ECE1]/60 border-b border-[#EFE8DD] text-[#1F1B18] font-bold text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-4">Repair Item</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Duration</th>
                      <th className="py-3 px-4">Warranty</th>
                      <th className="py-3 px-4 text-right">Fixed Labor</th>
                      <th className="py-3 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DD]">
                    {service.skus.map((sku) => (
                      <tr key={sku.id} className="hover:bg-[#F9F6F0]/60 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-bold text-[#1F1B18]">{sku.name}</div>
                          <div className="text-[11px] text-[#8A7D71] line-clamp-1">{sku.description}</div>
                        </td>
                        <td className="py-3 px-4 hidden sm:table-cell text-[#5A5046]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C59B63]" /> {sku.timeEstimate}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-[#C59B63] font-semibold text-[11px] flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> 30 Days
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="font-black text-sm text-[#1F1B18]">{sku.fixedRate}</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => {
                              setSelectedSubService(sku.name);
                              setSelectedPrice(sku.price);
                              setIsBookingOpen(true);
                            }}
                            className="px-3 py-1 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white text-[11px] font-bold shadow-2xs active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: STANDARD 4-STEP PROFESSIONAL WORKFLOW (SOP) */}
        {techProfile && (
          <section className="py-14 bg-white border-b border-[#EFE8DD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Standard Operating Procedure (SOP)</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                  How Our Craftsmen Execute <span className="text-[#C59B63]">{service.shortTitle}</span>
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#5A5046]">
                  Every visit follows a strict 4-step engineering protocol designed for maximum structural safety, clean aesthetics, and zero repeat issues.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {techProfile.workflow.map((w) => (
                  <div 
                    key={w.stepNumber} 
                    className="p-5 rounded-2xl bg-[#FCFBF9] border border-[#EFE8DD] flex flex-col justify-between hover:border-[#C59B63] transition-all hover:shadow-sm group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-[#C59B63] font-serif">
                          {w.stepNumber}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#EFE8DD] text-[#8A7D71]">
                          {w.duration}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-[#1F1B18] group-hover:text-[#C59B63] transition-colors mb-2">
                        {w.title}
                      </h3>
                      <p className="text-xs text-[#5A5046] leading-relaxed mb-4">
                        {w.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EFE8DD]/70 text-[11px] text-[#7A5828] bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/50">
                      <span className="font-bold">💡 Master Tip: </span>
                      <span>{w.proTip}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* SECTION 5: COMMON SYMPTOMS & ROOT CAUSE MATRIX */}
        {techProfile && techProfile.symptoms.length > 0 && (
          <section className="py-14 bg-[#F9F6F0] border-b border-[#EFE8DD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Symptom-to-Solution Guide</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                  Common Issues We Permanently Fix in <span className="text-[#C59B63]">{service.shortTitle}</span>
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#5A5046]">
                  Don&apos;t settle for temporary quick-fixes that loosen after two weeks. We treat the structural root cause using engineering-grade techniques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techProfile.symptoms.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-white border border-[#EFE8DD] shadow-2xs hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        !
                      </span>
                      <div>
                        <span className="text-xs font-bold text-[#1F1B18]">Issue Symptom:</span>
                        <h3 className="text-sm font-bold text-[#1F1B18] leading-snug">
                          {s.symptom}
                        </h3>
                      </div>
                    </div>

                    <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#EFE8DD] text-xs space-y-2">
                      <div>
                        <span className="text-[#8A7D71] font-semibold block text-[10px] uppercase tracking-wider">Root Technical Cause:</span>
                        <p className="text-[#5A5046] mt-0.5">{s.rootCause}</p>
                      </div>
                      <div className="pt-2 border-t border-[#EFE8DD]">
                        <span className="text-[#07794C] font-semibold block text-[10px] uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#07794C]" /> Our Engineered Solution:
                        </span>
                        <p className="text-[#1F1B18] font-medium mt-0.5">{s.engineeredSolution}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#5A5046] pt-1">
                      <Wrench className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                      <span className="text-[#8A7D71]">Hardware:</span>
                      <span className="font-semibold text-[#1F1B18]">{s.recommendedHardware}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* SECTION 6: PROFESSIONAL TOOLING & BRAND TRANSPARENCY */}
        {techProfile && (
          <section className="py-14 bg-white border-b border-[#EFE8DD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Industrial Tooling Standards</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                    Tools That Protect Your <span className="text-[#C59B63]">Home & Furniture</span>.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A5046] leading-relaxed">
                    Most roadside handymen damage expensive laminate, chip vitrified tiles, and scatter concrete dust across your bed and sofas using crude chisels and worn-out drills.
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A5046] leading-relaxed">
                    Our master carpenters arrive with German Bosch / DeWalt rotary hammers equipped with <strong>vacuum dust extractors</strong>, micro-planers, and digital angle gauges.
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-[#1F1B18] mb-2 uppercase tracking-wider">
                      Compatible Wood & Panel Materials:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {techProfile.compatibleMaterials.map((mat, i) => (
                        <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#FAF6F0] text-[#5A5046] border border-[#EFE8DD]">
                          ✓ {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techProfile.professionalTools.map((tool, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FCFBF9] border border-[#EFE8DD] hover:border-[#C59B63] transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#1F1B18]">{tool.name}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FAF6F0] text-[#C59B63] border border-[#EFE8DD]">
                          PRO
                        </span>
                      </div>
                      <div className="text-[10px] text-[#8A7D71] font-mono mb-2">{tool.spec}</div>
                      <p className="text-xs text-[#5A5046] leading-relaxed">
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </section>
        )}

        {/* SECTION 7: COMPARISON TABLE (PRO CRAFTSMAN VS LOCAL MISTRI) */}
        <section className="py-14 bg-[#F9F6F0] border-b border-[#EFE8DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>The Superior Choice</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                Carpenter Repair vs <span className="text-[#C59B63]">Local Unverified Handyman</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
                Why over 15,000 Hyderabad households choose our certified master carpenters for guaranteed peace of mind.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EFE8DD] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#EFE8DD] bg-[#FAF6F0]">
                      <th className="py-4 px-5 text-[#1F1B18] font-bold uppercase text-[11px] tracking-wider w-1/3">
                        Service Benchmark
                      </th>
                      <th className="py-4 px-5 text-red-700 bg-red-50/50 font-bold uppercase text-[11px] tracking-wider w-1/3">
                        Local Roadside Handyman
                      </th>
                      <th className="py-4 px-5 text-[#07794C] bg-emerald-50/70 font-black uppercase text-[11px] tracking-wider w-1/3">
                        Carpenter Repair (Our Service)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DD]">
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Pricing & Estimates</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> Arbitrary on-spot quotes, hidden extras, constant haggling
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> 100% upfront published price card (from ₹99); ₹149 inspection fee adjusted
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Hardware Quality</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> Duplicate, unbranded, or recycled local market fittings that rust or bend
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> 100% genuine factory-sealed packs (Godrej, Europa, Hettich, Hafele, Ebco)
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Tools & Cleanliness</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> Crude hammer & chisel; heavy concrete dust flying across bed & sofas
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> Industrial SDS rotary drills with vacuum dust extraction + laser levels
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Doorstep Punctuality</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> &quot;Will come tomorrow&quot;, repeated delays, phone switched off
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> Guaranteed 25–35 minute rapid arrival from 25+ local Hyderabad hubs
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Service Warranty</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> Zero warranty; uncontactable once payment is collected
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> 30-Day Doorstep Guarantee with 100% free revisit and recalibration
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3.5 px-5 font-bold text-[#1F1B18]">Technician Trust</td>
                      <td className="py-3.5 px-5 text-[#8A7D71] bg-red-50/20">
                        <span className="flex items-center gap-1.5 text-red-600 font-medium">
                          <X className="w-4 h-4 shrink-0" /> Unverified stranger entering your private home
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#1F1B18] bg-emerald-50/30">
                        <span className="flex items-center gap-1.5 text-[#07794C] font-bold">
                          <Check className="w-4 h-4 shrink-0" /> 100% police & Aadhaar verified, uniformed master craftsmen with 10+ yrs exp
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 8: HYDERABAD LOCAL COVERAGE HIGHLIGHT */}
        {techProfile && (
          <section className="py-10 bg-white border-b border-[#EFE8DD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#EFE8DD] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE8DD] flex items-center justify-center text-[#C59B63] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F1B18]">
                      Rapid {service.shortTitle} Dispatch Across Hyderabad
                    </h3>
                    <p className="text-xs text-[#5A5046] mt-0.5">
                      Fast-track local hubs: {techProfile.hyderabadContext.hotspots.join(", ")} • Average ETA: {techProfile.hyderabadContext.typicalResponseTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="px-5 py-2.5 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Express Carpenter</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 9: ESTIMATOR */}
        <PriceEstimator onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 10: DYNAMIC REVIEWS FOR THIS SERVICE */}
        <RotatingReviews reviews={serviceReviews} areaName="Hyderabad" />

        {/* SECTION 11: LOCALITY COVERAGE */}
        <AreaDirectoryGrid title={`Book ${service.shortTitle} Services Across Hyderabad Localities`} />

        {/* SECTION 12: FAQS */}
        <FaqSection faqs={service.faqs} areaName="Hyderabad" />

      </main>

      {/* Footer */}
      <Footer />

      {/* Live Toaster */}
      <LiveProofToaster />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Modal with auto-filled service, sub-service, and price */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={service.shortTitle}
        preselectedSubService={selectedSubService}
        preselectedPrice={selectedPrice}
      />

    </div>
  );
};
