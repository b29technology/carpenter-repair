"use client";

import React, { useState } from "react";
import { ChevronDown, Hammer } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  areaName?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  areaName = "Hyderabad"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-10 sm:py-12 bg-[#F9F6F0] border-b border-[#EFE8DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C59B63] tracking-widest uppercase mb-1">
            <Hammer className="w-3.5 h-3.5" />
            <span>FAQs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1B18] tracking-tight">
            Frequently Asked <span className="text-[#C59B63]">Questions</span>.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A5046]">
            Clear answers about doorstep visits, genuine hardware replacement, warranty, and rates across {areaName}.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#EFE8DD] rounded-2xl overflow-hidden transition-all bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F1B18]">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#C59B63] text-white" : "bg-[#F9F6F0] text-[#8A7D71]"
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A5046] leading-relaxed border-t border-[#EFE8DD] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
