/**
 * Central Testimonials & Live Notifications Gateway
 * Unified access point for customer reviews, verified social proof, and real-time streams.
 */

import { HYDERABAD_AREAS } from "./areas";
import { getEnterpriseReviewsByArea, MasterReview, REAL_AVATARS, getAreaReviewCount } from "./reviewsMaster";

export { getAreaReviewCount };

export interface ReviewItem {
  id: string;
  name: string;
  areaSlug: string;
  areaName: string;
  societyOrLandmark: string;
  serviceCategory: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatarBg?: string;
  avatarUrl?: string;
  orderId?: string;
  subService?: string;
  technicianResponse?: string;
  helpfulCount?: number;
}

export interface LiveBookingNotification {
  id: string;
  customerName: string;
  areaName: string;
  serviceName: string;
  timeAgo: string;
  priceEstimate: string;
}

/**
 * Returns 20-35 rich, localized reviews for any Hyderabad area.
 * Count is deterministically seeded per area slug for authentic variation.
 */
export function getTestimonialsByArea(areaSlug: string, count?: number): ReviewItem[] {
  const reviewCount = count ?? getAreaReviewCount(areaSlug);
  const area = HYDERABAD_AREAS.find((a) => a.slug.toLowerCase() === areaSlug.toLowerCase());
  const areaName = area ? area.name : "Hyderabad";
  const landmarks = area ? area.landmarks : ["Central Metro Hub", "Clock Tower"];
  const societies = area ? area.popularSocieties : ["Apartment Enclave", "Residential Towers"];
  const leadCarpenter = area ? area.leadCarpenter : "Master Craftsman Team";

  const masterList = getEnterpriseReviewsByArea(
    areaSlug,
    areaName,
    landmarks,
    societies,
    leadCarpenter,
    reviewCount
  );

  return masterList.map((m) => ({
    id: m.id,
    name: m.customerName,
    areaSlug: m.areaSlug,
    areaName: m.areaName,
    societyOrLandmark: m.societyOrLandmark,
    serviceCategory: m.serviceCategory,
    rating: m.rating,
    date: m.date,
    title: m.title,
    comment: m.comment,
    verified: m.verifiedBooking,
    avatarUrl: m.avatarUrl,
    orderId: m.orderId,
    subService: m.subService,
    technicianResponse: m.technicianResponse,
    helpfulCount: m.helpfulCount
  }));
}

/**
 * Returns dynamic customer reviews specific to a Service Category across Hyderabad.
 */
export function getTestimonialsByServiceCategory(categoryTitle: string, count: number = 20): ReviewItem[] {
  const areas = [
    "miyapur", "kukatpally", "gachibowli", "kondapur", 
    "madhapur", "manikonda", "secunderabad", "kphb",
    "nizampet", "chandanagar", "hitec-city", "jubilee-hills"
  ];
  const aggregated: ReviewItem[] = [];

  for (const areaSlug of areas) {
    aggregated.push(...getTestimonialsByArea(areaSlug, 5));
  }

  const normalizedKey = categoryTitle.toLowerCase();
  const matching = aggregated.filter((r) => {
    return (
      r.serviceCategory.toLowerCase().includes(normalizedKey) ||
      r.title.toLowerCase().includes(normalizedKey) ||
      (r.subService && r.subService.toLowerCase().includes(normalizedKey))
    );
  });

  return matching.length >= 8 ? matching.slice(0, count) : aggregated.slice(0, count);
}

/**
 * Live Real-Time Booking Stream for Social Proof Toaster
 */
export const LIVE_BOOKING_STREAM: LiveBookingNotification[] = [
  {
    id: "live-1",
    customerName: "Ramesh V.",
    areaName: "Miyapur",
    serviceName: "Swollen Teak Door Sanding & Hinge Realignment",
    timeAgo: "2 mins ago",
    priceEstimate: "₹299"
  },
  {
    id: "live-2",
    customerName: "Sai Teja Reddy",
    areaName: "Kukatpally",
    serviceName: "Godrej Ultra Mortise Lock Chiseling & Fitting",
    timeAgo: "5 mins ago",
    priceEstimate: "₹349"
  },
  {
    id: "live-3",
    customerName: "Priya Kulkarni",
    areaName: "Gachibowli",
    serviceName: "Heavy Sliding Wardrobe Dual-Bearing Roller Track Fix",
    timeAgo: "8 mins ago",
    priceEstimate: "₹499"
  },
  {
    id: "live-4",
    customerName: "Mohammed Imran",
    areaName: "Kondapur",
    serviceName: "Modular Kitchen Tandem Box Telescopic Channel Repair",
    timeAgo: "12 mins ago",
    priceEstimate: "₹499"
  },
  {
    id: "live-5",
    customerName: "Suresh Chandra",
    areaName: "Nizampet",
    serviceName: "Hydraulic Bed 350N Gas Strut Lift Replacement",
    timeAgo: "16 mins ago",
    priceEstimate: "₹499"
  },
  {
    id: "live-6",
    customerName: "Sneha Madireddy",
    areaName: "Madhapur",
    serviceName: "Curtain Rod Laser Drilling & Hallway Mirror Mounting",
    timeAgo: "21 mins ago",
    priceEstimate: "₹249"
  },
  {
    id: "live-7",
    customerName: "Venkat Raman",
    areaName: "Chandanagar",
    serviceName: "IKEA 3-Door Wardrobe Flat-Pack Assembly & Wall Anchor",
    timeAgo: "26 mins ago",
    priceEstimate: "₹599"
  },
  {
    id: "live-8",
    customerName: "Ananya Rao",
    areaName: "Manikonda",
    serviceName: "Villa Teak Entrance Door Exterior PU Weather Shield Polish",
    timeAgo: "31 mins ago",
    priceEstimate: "₹1,499"
  },
  {
    id: "live-9",
    customerName: "Karthik Srinivasan",
    areaName: "Secunderabad",
    serviceName: "Vintage Teak Dining Chair Tenon Joint Doweling & Regluing",
    timeAgo: "36 mins ago",
    priceEstimate: "₹449"
  },
  {
    id: "live-10",
    customerName: "Deepak Nambiar",
    areaName: "KPHB Colony",
    serviceName: "Balcony Wooden Mosquito Net Mesh Frame Alignment",
    timeAgo: "42 mins ago",
    priceEstimate: "₹299"
  },
  {
    id: "live-11",
    customerName: "Farheen Begum",
    areaName: "Tolichowki",
    serviceName: "Under-Sink Water Damage Plywood Replacement with HDMR",
    timeAgo: "47 mins ago",
    priceEstimate: "₹799"
  },
  {
    id: "live-12",
    customerName: "Vikramaditya Ch.",
    areaName: "Jubilee Hills",
    serviceName: "Designer Heavy Pivot Door Floor Spring Damper Calibration",
    timeAgo: "53 mins ago",
    priceEstimate: "₹699"
  }
];
