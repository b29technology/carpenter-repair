import React from "react";
import { 
  ShieldCheck, 
  Clock, 
  Star, 
  MapPin,
  Wrench,
  Award,
  ThumbsUp,
  Hammer,
  Check,
  X,
  Layers,
  Sparkles,
  Zap
} from "lucide-react";

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

const TRUST_STATS = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Experience",
    sub: "Traditional & modern woodworking mastery"
  },
  {
    icon: ThumbsUp,
    value: "15,000+",
    label: "Happy Customers",
    sub: "Across Hyderabad homes & offices"
  },
  {
    icon: ShieldCheck,
    value: "30-Day",
    label: "Service Guarantee",
    sub: "Free revisit if the issue reoccurs"
  },
  {
    icon: MapPin,
    value: "35+",
    label: "Active Localities",
    sub: "West, Central, North, East & South Hyd"
  }
];

const WHY_POINTS = [
  {
    icon: Clock,
    title: "25–35 Min Doorstep Arrival",
    desc: "Technicians stationed across 35+ Hyderabad hubs dispatch within minutes of booking — no long waits."
  },
  {
    icon: Wrench,
    title: "Genuine Branded Hardware",
    desc: "We carry Godrej, Hettich, Hafele, Ebco & Yale hardware. You pay actual MRP — zero markup."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Upfront Pricing",
    desc: "No surprise bills. All labor rates are listed upfront. Inspection fee ₹149 — 100% adjusted into final bill."
  },
  {
    icon: Star,
    title: "4.9★ Verified Rating",
    desc: "Over 4,280 verified customer reviews. Background-checked master craftsmen only."
  }
];

const TIMBER_GUIDE = [
  {
    timber: "Solid Teak Wood (Burma & CP)",
    bestFor: "Main entrance doors, decorative frames & heritage swings",
    properties: "High natural oil content, extreme resistance to termites and rot, beautiful natural golden grain.",
    careTip: "Re-coat with exterior PU or Melamine every 3–4 years to protect from direct Hyderabad afternoon sun."
  },
  {
    timber: "Indian Rosewood (Sheesham)",
    bestFor: "Dining tables, heavy bed frames & study desks",
    properties: "Exceptional structural density, high tensile strength, rich dark grain with distinctive marbling.",
    careTip: "Requires expansion allowances in corner mortise joints to prevent winter joint cracking."
  },
  {
    timber: "BWP Marine Grade Plywood (IS:710)",
    bestFor: "Modular kitchen sink carcasses & bathroom vanity units",
    properties: "Bonded with phenol formaldehyde synthetic resin; withstands 72 hours of boiling water without delamination.",
    careTip: "Always seal exposed cut edges with waterproof edge-banding tape or epoxy resin."
  },
  {
    timber: "Engineered MDF & Particle Board",
    bestFor: "IKEA wardrobes, modular shoe racks & floating TV units",
    properties: "Uniform flat surface with zero grain warp, ideal for smooth melamine and PU lacquer lamination.",
    careTip: "Never overtighten screws with high-torque drills; always use torque-limited drivers and hinge repair plates."
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F9F6F0] border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-2">
            <Hammer className="w-3.5 h-3.5" />
            <span>Why Carpenter Repair</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            Hyderabad&apos;s Most <span className="text-[#C59B63]">Trusted Carpenter</span> Service.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5A5046]">
            With two decades of woodwork expertise, Carpenter Repair delivers precision craftsmanship 
            directly to your doorstep — backed by a 30-day guarantee and transparent pricing.
          </p>
        </div>

        {/* Trust Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TRUST_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 border border-[#EFE8DD] text-center hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE1] text-[#C59B63] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C59B63] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#1F1B18] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#1F1B18] mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-[#8A7D71] mt-1 leading-snug">{stat.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Why Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-5 border border-[#EFE8DD] hover:shadow-md transition-all hover:border-[#C59B63]/30 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F3ECE1] text-[#C59B63] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-[#1F1B18] mb-1.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-[11px] text-[#5A5046] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* PRO VS LOCAL HANDYMAN COMPARISON TABLE */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B63]">
              The Professional Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1F1B18] mt-1">
              Why Homeowners Choose Our <span className="text-[#C59B63]">Certified Craftsmen</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EFE8DD] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#EFE8DD] bg-[#FAF6F0]">
                    <th className="py-3.5 px-4 text-[#1F1B18] font-bold uppercase text-[10px] tracking-wider w-1/3">
                      Benchmark
                    </th>
                    <th className="py-3.5 px-4 text-red-700 bg-red-50/50 font-bold uppercase text-[10px] tracking-wider w-1/3">
                      Roadside Handyman / Mistri
                    </th>
                    <th className="py-3.5 px-4 text-[#07794C] bg-emerald-50/70 font-black uppercase text-[10px] tracking-wider w-1/3">
                      Carpenter Repair Certified Master
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE8DD]">
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1F1B18]">Pricing Structure</td>
                    <td className="py-3 px-4 text-red-600 bg-red-50/20">
                      <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Arbitrary fluctuating quotes & haggling</span>
                    </td>
                    <td className="py-3 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                      <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Fixed published labor rates from ₹99</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1F1B18]">Hardware Guarantee</td>
                    <td className="py-3 px-4 text-red-600 bg-red-50/20">
                      <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Unbranded counterfeit market hardware</span>
                    </td>
                    <td className="py-3 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                      <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> 100% genuine factory-sealed Godrej/Hettich/Ebco</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1F1B18]">Cleanliness & Dust</td>
                    <td className="py-3 px-4 text-red-600 bg-red-50/20">
                      <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Concrete dust scattered on beds & linen</span>
                    </td>
                    <td className="py-3 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                      <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> Industrial SDS drills with vacuum dust extraction</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1F1B18]">Response Time</td>
                    <td className="py-3 px-4 text-red-600 bg-red-50/20">
                      <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Multiple day delays, phone switched off</span>
                    </td>
                    <td className="py-3 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                      <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> 25–35 min rapid doorstep arrival across Hyderabad</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1F1B18]">Post-Repair Warranty</td>
                    <td className="py-3 px-4 text-red-600 bg-red-50/20">
                      <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 shrink-0" /> Zero warranty; uncontactable afterwards</span>
                    </td>
                    <td className="py-3 px-4 text-[#07794C] font-bold bg-emerald-50/30">
                      <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 shrink-0" /> 30-Day Doorstep Service Guarantee with free revisit</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TIMBER & MATERIALS KNOWLEDGE MODULE */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B63]">
              Timber & Materials Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1F1B18] mt-1">
              Engineered Care for Every <span className="text-[#C59B63]">Wood Type</span>
            </h3>
            <p className="text-xs text-[#5A5046] mt-1">
              Different timbers require specialized chiseling angles, screw gauges, and adhesive cure times.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMBER_GUIDE.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#EFE8DD] flex flex-col justify-between hover:border-[#C59B63] transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-[#C59B63] block mb-1">
                    {item.timber}
                  </span>
                  <div className="text-[11px] font-bold text-[#1F1B18] mb-2 leading-tight">
                    Best for: {item.bestFor}
                  </div>
                  <p className="text-[11px] text-[#5A5046] leading-relaxed mb-3">
                    {item.properties}
                  </p>
                </div>
                <div className="text-[10px] text-[#7A5828] bg-amber-50/60 p-2 rounded-lg border border-amber-200/50">
                  <span className="font-bold">Pro Tip: </span>{item.careTip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Row */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C59B63] hover:bg-[#B58A52] shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <span>Book a Certified Carpenter Now</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Wrench className="w-4 h-4" />
            </span>
          </button>
          <p className="mt-3 text-[11px] text-[#8A7D71]">
            ₹149 inspection fee • 100% adjusted into your final bill • 30-Day Doorstep Guarantee
          </p>
        </div>

      </div>
    </section>
  );
};
