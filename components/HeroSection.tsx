"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { CARPENTER_SERVICES } from "@/data/services";
import { CustomDropdown, DropdownOption } from "@/components/CustomDropdown";
import { trackUserAction } from "@/lib/analytics";
import { 
  Phone, 
  MapPin, 
  Star,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Wrench,
  Building,
  CalendarClock
} from "lucide-react";

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  areaName?: string;
  responseTime?: string;
  landmarks?: string[];
  onOpenBooking?: () => void;
}

/**
 * Property Type Options for Form
 */
const PROPERTY_TYPE_OPTIONS: DropdownOption[] = [
  { value: "gated-apartment", label: "Gated Apartment / Flat", badge: "Most Popular" },
  { value: "independent-villa", label: "Independent Villa / House" },
  { value: "commercial-office", label: "Commercial Office / Workspace" }
];

/**
 * Preferred Arrival Time Slot Options
 */
const TIME_SLOT_OPTIONS: DropdownOption[] = [
  { value: "immediate-30m", label: "Express Doorstep (Within 30 Mins)", badge: "Fastest" },
  { value: "morning", label: "Morning Slot (9:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon Slot (12:00 PM - 4:00 PM)" },
  { value: "evening", label: "Evening Slot (4:00 PM - 8:30 PM)" }
];

/**
 * HeroSection Component
 * Engineered for Above-the-Fold conversion impact.
 * Combines high-ranking H1 keyword typography with an enterprise booking form
 * featuring custom search dropdowns, property types, and service filters.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  areaName,
  responseTime = "30 Mins",
}) => {
  // Comprehensive Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: areaName ? areaName.toLowerCase() : "",
    serviceSlug: "door-repair-and-installation",
    subService: "",
    propertyType: "gated-apartment",
    timeSlot: "immediate-30m",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Prepare Area Options for Custom Searchable Dropdown
  const areaDropdownOptions: DropdownOption[] = useMemo(() => {
    return HYDERABAD_AREAS.map((a) => ({
      value: a.slug,
      label: a.name,
      sublabel: `PIN ${a.pincode} • ${a.landmarks.slice(0, 2).join(", ")}`,
      badge: `${a.responseTime.split(" ")[0]}m visit`,
      icon: <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
    }));
  }, []);

  // 2. Prepare Category Options
  const serviceCategoryOptions: DropdownOption[] = useMemo(() => {
    return CARPENTER_SERVICES.map((s) => ({
      value: s.slug,
      label: s.shortTitle,
      badge: `Starts at ${s.startingPrice.replace(/^Starts at\s*/i, "")}`,
      icon: <Wrench className="w-3.5 h-3.5 text-[#C59B63]" />
    }));
  }, []);

  // 3. Dynamic Sub-Service Options based on selected category
  const subServiceOptions: DropdownOption[] = useMemo(() => {
    const activeCategory = CARPENTER_SERVICES.find((s) => s.slug === formData.serviceSlug);
    if (!activeCategory) return [];

    return activeCategory.subServices.map((sub) => ({
      value: sub.id,
      label: sub.name,
      badge: sub.price,
      sublabel: `${sub.timeEstimate} • ${sub.description.substring(0, 45)}...`
    }));
  }, [formData.serviceSlug]);

  // Form submission handler with WhatsApp formatting & email dispatch
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const selectedAreaObj = HYDERABAD_AREAS.find((a) => a.slug === formData.area);
    const selectedAreaName = selectedAreaObj ? selectedAreaObj.name : "Hyderabad";
    const selectedServiceObj = CARPENTER_SERVICES.find((s) => s.slug === formData.serviceSlug);
    const selectedServiceName = selectedServiceObj ? selectedServiceObj.shortTitle : "Carpentry";
    const selectedSubObj = selectedServiceObj?.subServices.find((sub) => sub.id === formData.subService);
    const subServiceName = selectedSubObj ? selectedSubObj.name : "Doorstep Inspection";

    // Asynchronously dispatch email & telegram notification
    fetch("/api/send-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name || "Customer",
        phone: formData.phone,
        area: selectedAreaName,
        service: selectedServiceName,
        subService: subServiceName,
        price: selectedSubObj?.price || "",
        preferredDate: "Today (Express)",
        preferredSlot: formData.timeSlot,
        propertyType: formData.propertyType,
        notes: formData.notes,
        source: "Homepage / Area Hero Quick Form",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        pagePath: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        device: typeof window !== "undefined" ? (window.innerWidth < 768 ? "Mobile" : "Desktop") : "",
      }),
    }).catch((err) => {
      console.error("Failed to dispatch booking notification:", err);
    });

    const payload = `*NEW VERIFIED CARPENTER ORDER (HYDERABAD)*%0A` +
      `• *Customer:* ${formData.name || "Customer"}%0A` +
      `• *Mobile:* +91 ${formData.phone}%0A` +
      `• *Locality:* ${selectedAreaName} (Hyderabad)%0A` +
      `• *Category:* ${selectedServiceName}%0A` +
      `• *Specific Issue:* ${subServiceName}%0A` +
      `• *Property:* ${formData.propertyType}%0A` +
      `• *Preferred Slot:* ${formData.timeSlot}%0A` +
      `• *Notes:* ${formData.notes || "Standard doorstep visit requested"}%0A%0A` +
      `_Please dispatch nearest master carpenter with standard toolset & hardware._`;

    setIsSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${payload}`, "_blank");
    }, 600);
  };

  return (
    <section className="relative bg-[#F9F6F0] py-6 sm:py-8 border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Above-The-Fold Grid: Left Typography & Value Proposition | Right Comprehensive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Trust Badges, Quick Contact */}
          <div className="lg:col-span-6 space-y-4 pt-1">
            
            {/* Top Pill: Satisfied Clients (Match Reference Style) */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE8DD] shadow-2xs">
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-full border border-white overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" 
                    alt="Satisfied Client" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full border border-white overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" 
                    alt="Satisfied Client" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#C59B63] text-white text-[10px] font-bold flex items-center justify-center border border-white">
                  +
                </div>
              </div>
              <span className="text-xs font-bold text-[#1F1B18]">
                {areaName ? `${areaName} Homes & Gated Societies` : "Verified Hyderabad Carpentry"}
              </span>
              <span className="text-[11px] text-[#8A7D71] flex items-center gap-1 font-medium">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                4.9/5 Rating
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#1F1B18] tracking-tight leading-[1.12]">
              {title ? (
                title
              ) : (
                <>
                  Carpenter Repair for <span className="text-[#C59B63]">Homes &amp; Offices</span> in Hyderabad.
                </>
              )}
            </h1>

            {/* Context Subheading */}
            <p className="text-xs sm:text-sm text-[#5A5046] leading-relaxed max-w-xl">
              {subtitle ? (
                subtitle
              ) : (
                "Professional door alignment, sliding wardrobe track repairs, modular kitchen tandem boxes, and furniture restoration. Background-verified master craftsmen at your doorstep within 25-35 minutes."
              )}
            </p>

            {/* Trust Checklist Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#EFE8DD] text-[#1F1B18] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                <span className="truncate">{responseTime} Doorstep Visit</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#EFE8DD] text-[#1F1B18] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                <span className="truncate">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#EFE8DD] text-[#1F1B18] font-semibold col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B63] shrink-0" />
                <span className="truncate">Genuine Hardware</span>
              </div>
            </div>

            {/* Workshop Photo Mini Feature */}
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#EFE8DD] aspect-[16/7] hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
                alt="Carpenter workshop in Hyderabad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent flex items-end p-3">
                <div className="text-white text-xs">
                  <div className="font-bold flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-[#C59B63]" /> Local Dispatch Centers Across 25+ Hyderabad Areas
                  </div>
                  <div className="text-[10px] text-white/80">
                    Equipped with Makita & Bosch power drills, German soft-close hinges & Godrej locks
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Call Line */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => {
                  trackUserAction({
                    eventType: "CALL_CLICK",
                    buttonLabel: "Hero Direct Urgent Call Line",
                    area: areaName,
                  });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#1F1B18] bg-white hover:bg-[#F3ECE1] border border-[#EFE8DD] shadow-2xs transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#C59B63] text-white flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span>Need Urgent Help? Call: {siteConfig.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Advanced Booking Lead Form (Custom Dropdowns & Above-the-Fold) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#EFE8DD]">
              
              {/* Form Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFE8DD]">
                <div>
                  <div className="text-base font-black text-[#1F1B18] tracking-tight">
                    Instant Carpenter Dispatch
                  </div>
                  <p className="text-[11px] text-[#8A7D71]">
                    Fill details below • Master carpenter calls in 5 mins
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#F9F6F0] text-[10px] font-bold text-[#C59B63] border border-[#EFE8DD] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 25-35m Visit
                </span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1F1B18] mb-1">
                        Full Name <span className="text-[#C59B63]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1F1B18] mb-1">
                        Mobile Number <span className="text-[#C59B63]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-xs text-[#8A7D71] font-semibold">
                          +91
                        </span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                          className="w-full pl-11 pr-3 py-2 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Searchable Locality Dropdown */}
                  <CustomDropdown
                    label="Select Hyderabad Locality"
                    options={areaDropdownOptions}
                    value={formData.area}
                    onChange={(val) => setFormData({ ...formData, area: val })}
                    placeholder="Search locality (Miyapur, Kukatpally, Gachibowli...)"
                    searchable
                    required
                  />

                  {/* Row 3: Category & Specific Sub-Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <CustomDropdown
                      label="Service Category"
                      options={serviceCategoryOptions}
                      value={formData.serviceSlug}
                      onChange={(val) => setFormData({ ...formData, serviceSlug: val, subService: "" })}
                      required
                    />

                    <CustomDropdown
                      label="Specific Repair Needed"
                      options={subServiceOptions}
                      value={formData.subService}
                      onChange={(val) => setFormData({ ...formData, subService: val })}
                      placeholder="Choose repair..."
                    />
                  </div>

                  {/* Row 4: Property Type & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <CustomDropdown
                      label="Property Type"
                      options={PROPERTY_TYPE_OPTIONS}
                      value={formData.propertyType}
                      onChange={(val) => setFormData({ ...formData, propertyType: val })}
                    />

                    <CustomDropdown
                      label="Preferred Arrival Slot"
                      options={TIME_SLOT_OPTIONS}
                      value={formData.timeSlot}
                      onChange={(val) => setFormData({ ...formData, timeSlot: val })}
                    />
                  </div>

                  {/* Notes / Society Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#1F1B18] mb-1">
                      Apartment / Society Name & Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. My Home Bhooja Flat 502, swollen door scraping floor"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl border border-[#EFE8DD] text-xs text-[#1F1B18] bg-[#F9F6F0] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white text-xs font-bold shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <span>Confirm Booking & Dispatch Technician</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between text-[10px] text-[#8A7D71] pt-1">
                    <span>* Standard inspection fee ₹149 (100% adjusted into labor bill)</span>
                    <span className="font-semibold text-[#1F1B18]">Zero Cancellation Charges</span>
                  </div>

                </form>
              ) : (
                /* Success Confirmation Screen */
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE1] text-[#C59B63] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-base font-bold text-[#1F1B18]">
                    Technician Dispatched Successfully!
                  </h3>

                  <p className="text-xs text-[#5A5046] max-w-sm mx-auto">
                    Your request has been routed to our nearest Hyderabad team lead. We will call you within 5 minutes on +91 {formData.phone}.
                  </p>

                  <div className="p-3 bg-[#F9F6F0] rounded-xl text-xs text-[#1F1B18] border border-[#EFE8DD] text-left space-y-1">
                    <div><strong>Customer:</strong> {formData.name || "Verified Customer"}</div>
                    <div><strong>Locality:</strong> {formData.area || "Hyderabad"}</div>
                    <div><strong>Category:</strong> {formData.serviceSlug}</div>
                    <div><strong>Time Slot:</strong> {formData.timeSlot}</div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#C59B63] font-bold underline cursor-pointer pt-1"
                  >
                    Book another repair
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
