"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { HYDERABAD_AREAS } from "@/data/areas";
import { Check, ArrowUpRight, ShieldCheck, Clock, Hammer } from "lucide-react";

interface RepairOption {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  unit: string;
}

const REPAIR_OPTIONS: RepairOption[] = [
  { id: "door-hinge", name: "Door Hinge Tightening & Realignment", category: "Door", basePrice: 200, unit: "per door" },
  { id: "door-planing", name: "Swollen Wooden Door Sanding / Planing", category: "Door", basePrice: 300, unit: "per door" },
  { id: "door-lock", name: "Main / Bedroom Door Lock Installation", category: "Door", basePrice: 150, unit: "per lock" },
  { id: "wardrobe-roller", name: "Sliding Wardrobe Door Overhaul", category: "Wardrobe", basePrice: 500, unit: "per shutter" },
  { id: "wardrobe-hinge", name: "Soft-Close Hydraulic Hinge Fitting", category: "Wardrobe", basePrice: 250, unit: "per pair" },
  { id: "drawer-channel", name: "Telescopic Drawer Channel Repair", category: "Kitchen & Wardrobe", basePrice: 300, unit: "per drawer" },
  { id: "kitchen-tandem", name: "Tandem Box Kitchen Runner Overhaul", category: "Kitchen", basePrice: 500, unit: "per box" },
  { id: "sink-plywood", name: "Under-Sink Water Damage Ply Repair", category: "Kitchen", basePrice: 800, unit: "per cabinet" },
  { id: "bed-hydraulic", name: "Hydraulic Bed Gas Strut Lift Replacement", category: "Furniture", basePrice: 500, unit: "pair (2 struts)" },
  { id: "bed-creaking", name: "Bed Creak / Slat Reinforcement", category: "Furniture", basePrice: 350, unit: "per bed" },
  { id: "ikea-assembly", name: "Flat-Pack Wardrobe / Furniture Assembly", category: "Assembly", basePrice: 600, unit: "per unit" },
  { id: "wall-drilling", name: "Wall Drilling & Shelf / Mirror Mounting", category: "Drilling", basePrice: 150, unit: "up to 2 points" },
  { id: "curtain-rod", name: "Curtain Rod Bracket Installation", category: "Drilling", basePrice: 200, unit: "per window" },
  { id: "door-polish", name: "Teak Main Door PU Polish Refurbish", category: "Polish", basePrice: 1500, unit: "per side" }
];

interface PriceEstimatorProps {
  onOpenBooking?: () => void;
  defaultArea?: string;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({
  onOpenBooking,
  defaultArea = ""
}) => {
  const [selectedRepairs, setSelectedRepairs] = useState<string[]>(["door-planing", "door-hinge"]);
  const [userArea, setUserArea] = useState<string>(defaultArea);

  const toggleRepair = (id: string) => {
    if (selectedRepairs.includes(id)) {
      if (selectedRepairs.length > 1) {
        setSelectedRepairs(selectedRepairs.filter((item) => item !== id));
      }
    } else {
      setSelectedRepairs([...selectedRepairs, id]);
    }
  };

  const calculatedTotal = selectedRepairs.reduce((sum, id) => {
    const item = REPAIR_OPTIONS.find((r) => r.id === id);
    return sum + (item ? item.basePrice : 0);
  }, 0);

  const whatsappText = encodeURIComponent(
    `Hello, I calculated an estimate of ₹${calculatedTotal} for carpentry repairs in ${userArea || "Hyderabad"}. Please confirm booking & technician arrival.`
  );

  return (
    <section id="pricing" className="py-10 sm:py-12 bg-white border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
            <Hammer className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            Calculate Your <span className="text-[#C59B63]">Custom Repair Bill</span>.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
            Select multiple repairs below to calculate your estimated labor bill with zero surprises.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Repair Selector Grid */}
          <div className="lg:col-span-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A7D71] mb-4">
              Select Services Needed:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REPAIR_OPTIONS.map((repair) => {
                const isSelected = selectedRepairs.includes(repair.id);
                return (
                  <div
                    key={repair.id}
                    onClick={() => toggleRepair(repair.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "border-[#C59B63] bg-[#F9F6F0] shadow-xs"
                        : "border-[#EFE8DD] bg-white hover:border-[#C59B63]/60"
                    }`}
                  >
                    <div className="flex items-start gap-3 pr-2">
                      <div
                        className={`w-5 h-5 mt-0.5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#C59B63] border-[#C59B63] text-white"
                            : "border-[#D8CEBF] bg-white"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1F1B18]">
                          {repair.name}
                        </div>
                        <div className="text-[11px] text-[#8A7D71]">
                          {repair.unit} • {repair.category}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-[#1F1B18]">
                        ₹{repair.basePrice}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Summary Card (Sticky, Clean Charcoal & Tan) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#1F1B18] text-white p-7 rounded-3xl shadow-xl border border-[#3A332C]">
              <div className="text-xs font-bold text-[#C59B63] uppercase tracking-wider mb-1">
                Estimated Summary
              </div>
              <h3 className="text-xl font-bold mb-1">
                Total Repair Quote
              </h3>
              <p className="text-xs text-[#A89C8F] mb-5">
                {selectedRepairs.length} service(s) selected
              </p>

              {/* Area Selection */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#D8CEBF] mb-1.5">
                  Your Hyderabad Locality:
                </label>
                <select
                  value={userArea}
                  onChange={(e) => setUserArea(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#2D2621] border border-[#4A3E35] text-xs font-medium text-white focus:outline-hidden focus:ring-2 focus:ring-[#C59B63]"
                >
                  <option value="">Select Locality (Optional)</option>
                  {HYDERABAD_AREAS.map((a) => (
                    <option key={a.slug} value={a.name}>
                      {a.name} ({a.responseTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Line Items */}
              <div className="space-y-2 mb-4 max-h-44 overflow-y-auto pr-1 text-xs border-y border-[#3A332C] py-3">
                {selectedRepairs.map((id) => {
                  const item = REPAIR_OPTIONS.find((r) => r.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-[#D8CEBF]">
                      <span className="truncate pr-2">{item.name}</span>
                      <span className="font-bold text-white shrink-0">₹{item.basePrice}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center text-[#4ADE80] text-[11px] pt-1 border-t border-[#3A332C]/60">
                  <span>Doorstep Inspection Fee (₹149)</span>
                  <span className="font-bold">100% Adjusted</span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <span className="text-xs text-[#A89C8F] block">Total Estimated Labor:</span>
                  <span className="text-3xl font-black text-[#C59B63]">
                    ₹{calculatedTotal}
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#4ADE80] font-semibold">
                  ✓ ₹149 Fee Waived / Adjusted
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-full bg-[#C59B63] hover:bg-[#B58A52] text-white font-bold text-xs shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Technician at This Price</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#2D2621] hover:bg-[#3A322B] border border-[#4A3E35] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <span>Send Estimate on WhatsApp</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="mt-5 pt-4 border-t border-[#3A332C] space-y-2 text-[11px] text-[#A89C8F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B63]" />
                  <span>30-Day Post-Service Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C59B63]" />
                  <span>Exact rate verified prior to commencing work</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
