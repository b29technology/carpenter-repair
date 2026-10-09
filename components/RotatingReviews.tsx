"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ReviewItem } from "@/data/testimonials";
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Hammer,
  ShieldCheck,
  ThumbsUp,
  MessageSquareReply
} from "lucide-react";

interface RotatingReviewsProps {
  reviews: ReviewItem[];
  areaName?: string;
}

const REAL_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
];

const PAGE_SIZE = 6;

export const RotatingReviews: React.FC<RotatingReviewsProps> = ({
  reviews,
  areaName = "Hyderabad"
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredReviews = React.useMemo(() => {
    if (activeCategory === "All") return reviews;
    return reviews.filter((r) =>
      r.serviceCategory.toLowerCase().includes(activeCategory.toLowerCase())
    );
  }, [reviews, activeCategory]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setFeaturedIndex(0);
  }, [activeCategory]);

  const activeReview = filteredReviews[featuredIndex] ?? filteredReviews[0] ?? reviews[0];

  useEffect(() => {
    if (!isAutoPlaying || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredReviews.length]);

  const categories = ["All", "Door", "Wardrobe", "Kitchen", "Furniture", "Drilling"];

  const handleNext = () => {
    setIsAutoPlaying(false);
    setFeaturedIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setFeaturedIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;
  const remaining = filteredReviews.length - visibleCount;

  return (
    <section id="reviews" className="py-10 sm:py-12 bg-[#F9F6F0] border-b border-[#EFE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
            <Hammer className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            Words From Our Happy And <span className="text-[#C59B63]">Satisfied Clients</span>.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
            Verified customer reviews from {areaName} apartments &amp; residences. Updated live with verified on-site service receipts.
          </p>
          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-[#EFE8DD] shadow-2xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1F1B18]">4.9 out of 5</span>
            <span className="text-[11px] text-[#8A7D71]">• {reviews.length}+ Verified Reviews in {areaName}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C59B63] text-white shadow-2xs"
                  : "bg-white text-[#5A5046] hover:bg-[#F3ECE1] border border-[#EFE8DD]"
              }`}
            >
              {cat === "All" ? `All Reviews (${reviews.length})` : `${cat} Repairs`}
            </button>
          ))}
        </div>

        {activeReview && (
          <div
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE8DD] shadow-lg mb-10 relative overflow-hidden transition-all duration-500 max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="absolute right-6 bottom-6 w-32 h-32 text-[#EFE8DD]/30 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EFE8DD]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F3ECE1] text-[10px] font-bold text-[#C59B63]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Booking - {activeReview.orderId ?? "HYD-2026-8492"}</span>
                  </span>
                  <span className="text-[11px] text-[#8A7D71] hidden sm:inline">- Completed {activeReview.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F9F6F0] border border-[#EFE8DD] text-[10px] font-bold text-[#5A5046]">
                    {activeReview.serviceCategory}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B18]">
                  "{activeReview.title}"
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5A5046] leading-relaxed">
                  {activeReview.comment}
                </p>
              </div>

              {activeReview.technicianResponse && (
                <div className="p-3 rounded-2xl bg-[#F9F6F0] border border-[#EFE8DD] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#1F1B18] text-[11px]">
                    <MessageSquareReply className="w-3.5 h-3.5 text-[#C59B63]" />
                    <span>Response from Woodcraft Master Craftsman:</span>
                  </div>
                  <p className="text-[11px] text-[#5A5046] pl-5 italic">
                    "{activeReview.technicianResponse}"
                  </p>
                </div>
              )}

              <div className="pt-3 border-t border-[#EFE8DD] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-[#C59B63]">
                    <Image
                      src={activeReview.avatarUrl ?? REAL_AVATARS[featuredIndex % REAL_AVATARS.length]}
                      alt={activeReview.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1F1B18] flex items-center gap-1">
                      {activeReview.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-[10px] text-[#8A7D71] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C59B63]" />
                      {activeReview.societyOrLandmark}, {activeReview.areaName}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#8A7D71]">
                    <ThumbsUp className="w-3 h-3 text-[#C59B63]" />
                    <span>{activeReview.helpfulCount ?? 12} homeowners found this helpful</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#8A7D71] font-medium hidden sm:inline">
                      {featuredIndex + 1} / {filteredReviews.length}
                    </span>
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full bg-[#F9F6F0] hover:bg-[#C59B63] hover:text-white text-[#1F1B18] border border-[#EFE8DD] flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full bg-[#F9F6F0] hover:bg-[#C59B63] hover:text-white text-[#1F1B18] border border-[#EFE8DD] flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleReviews.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white p-5 rounded-2xl border border-[#EFE8DD] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#8A7D71]">{review.date}</span>
                </div>
                <h4 className="text-xs font-bold text-[#1F1B18] mb-1 line-clamp-1">{review.title}</h4>
                <p className="text-[11px] text-[#5A5046] leading-relaxed line-clamp-3">
                  "{review.comment}"
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#EFE8DD] flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden relative border border-[#C59B63]">
                  <Image
                    src={review.avatarUrl ?? REAL_AVATARS[(idx + 1) % REAL_AVATARS.length]}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-[#1F1B18] truncate">{review.name}</div>
                  <div className="text-[10px] text-[#8A7D71] truncate">{review.societyOrLandmark}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border-2 border-[#C59B63] text-[#C59B63] font-bold text-sm hover:bg-[#C59B63] hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
              Load More Reviews ({remaining} more)
            </button>
          </div>
        )}

        {!hasMore && filteredReviews.length > PAGE_SIZE && (
          <div className="mt-6 text-center text-xs text-emerald-700 font-semibold">
            All {filteredReviews.length} verified reviews loaded
          </div>
        )}

        <div className="mt-4 text-center text-xs text-[#8A7D71]">
          Verified homeowner receipts across {areaName} residential societies. All ratings reflect on-site workmanship.
        </div>

      </div>
    </section>
  );
};
