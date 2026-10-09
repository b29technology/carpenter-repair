"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

/**
 * Custom Dropdown Option Definition
 */
export interface DropdownOption {
  value: string;
  label: string;
  sublabel?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  searchable?: boolean;
  required?: boolean;
  className?: string;
}

/**
 * CustomDropdown Component
 * Enterprise accessible select component with instant live filtering, custom option badges,
 * outside click dismissal, and keyboard accessibility.
 */
export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  label,
  searchable = false,
  required = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Find currently active option
  const selectedOption = options.find((opt) => opt.value === value);

  // Filter options dynamically when user types
  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (opt.sublabel && opt.sublabel.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchFilter("");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchFilter("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-[11px] font-bold text-[#1F1B18] mb-1">
          {label} {required && <span className="text-[#C59B63]">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3 py-2 rounded-xl border text-xs text-left flex items-center justify-between transition-all cursor-pointer ${
          isOpen
            ? "border-[#C59B63] bg-white ring-2 ring-[#C59B63]/20 shadow-xs"
            : "border-[#EFE8DD] bg-[#F9F6F0] hover:border-[#C59B63]/60 hover:bg-white"
        }`}
      >
        <span className="truncate flex items-center gap-2">
          {selectedOption ? (
            <>
              {selectedOption.icon && <span className="shrink-0">{selectedOption.icon}</span>}
              <span className="font-semibold text-[#1F1B18]">{selectedOption.label}</span>
              {selectedOption.badge && (
                <span className="text-[10px] text-[#C59B63] bg-[#F9F6F0] px-1.5 py-0.5 rounded border border-[#EFE8DD]">
                  {selectedOption.badge}
                </span>
              )}
            </>
          ) : (
            <span className="text-[#8A7D71]">{placeholder}</span>
          )}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-[#8A7D71] shrink-0 transition-transform duration-200 ${
            isOpen ? "transform rotate-180 text-[#C59B63]" : ""
          }`}
        />
      </button>

      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white rounded-2xl border border-[#EFE8DD] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 max-h-60 flex flex-col">
          
          {/* Search Bar inside Dropdown */}
          {searchable && (
            <div className="p-2 border-b border-[#EFE8DD] bg-[#F9F6F0]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#8A7D71] absolute left-2.5 top-2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Type to filter..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-8 pr-2 py-1 rounded-lg border border-[#EFE8DD] text-xs text-[#1F1B18] bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <ul className="overflow-y-auto py-1 divide-y divide-[#F9F6F0] text-xs" role="listbox">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    className={`px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#F9F6F0] text-[#C59B63] font-bold"
                        : "text-[#1F1B18] hover:bg-[#F9F6F0]/80"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      {option.icon && <span className="shrink-0">{option.icon}</span>}
                      <div className="truncate">
                        <div className="truncate">{option.label}</div>
                        {option.sublabel && (
                          <div className="text-[10px] text-[#8A7D71] truncate">{option.sublabel}</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {option.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F9F6F0] text-[#5A5046] border border-[#EFE8DD]">
                          {option.badge}
                        </span>
                      )}
                      <span className="w-4 h-4 flex items-center justify-center shrink-0">
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C59B63]" />}
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-4 text-center text-xs text-[#8A7D71]">
                No matching options found
              </li>
            )}
          </ul>

        </div>
      )}
    </div>
  );
};
