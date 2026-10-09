/**
 * High-Volume & High-CPC SEO Keywords Intelligence Layer
 * Synthesizes Google Keyword Planner search trends, local intent, and bidding tiers.
 */

export interface KeywordMetric {
  keyword: string;
  volume: number;
  cpcLow?: number;
  cpcHigh?: number;
  intent: "transactional" | "commercial" | "navigational" | "informational";
  targetRoute: string;
}

export const SEO_KEYWORD_MATRIX: KeywordMetric[] = [
  // Primary High-Volume Roots
  { keyword: "carpenter near me", volume: 9900, cpcLow: 3.71, cpcHigh: 16.77, intent: "transactional", targetRoute: "/" },
  { keyword: "carpenter hyderabad", volume: 1000, cpcLow: 3.76, cpcHigh: 20.77, intent: "commercial", targetRoute: "/" },
  { keyword: "carpentry shops near me", volume: 880, cpcLow: 3.35, cpcHigh: 20.93, intent: "transactional", targetRoute: "/" },
  { keyword: "carpentry workers near me", volume: 260, cpcLow: 3.34, cpcHigh: 22.15, intent: "transactional", targetRoute: "/" },
  { keyword: "carpentry services near me", volume: 210, cpcLow: 3.60, cpcHigh: 16.44, intent: "transactional", targetRoute: "/" },
  { keyword: "carpenter near me home service", volume: 110, cpcLow: 3.35, cpcHigh: 23.24, intent: "transactional", targetRoute: "/" },
  
  // Specific High-Volume Hyderabad Area Keywords
  { keyword: "carpenter in manikonda", volume: 70, cpcLow: 3.34, cpcHigh: 11.30, intent: "transactional", targetRoute: "/hyderabad/manikonda" },
  { keyword: "best carpenter in hyderabad", volume: 50, cpcLow: 5.14, cpcHigh: 77.91, intent: "commercial", targetRoute: "/" },
  { keyword: "carpenter in kondapur", volume: 50, cpcLow: 3.28, cpcHigh: 9.54, intent: "transactional", targetRoute: "/hyderabad/kondapur" },
  { keyword: "carpenter in kukatpally", volume: 50, cpcLow: 3.34, cpcHigh: 14.11, intent: "transactional", targetRoute: "/hyderabad/kukatpally" },
  { keyword: "carpenter miyapur", volume: 40, cpcLow: 3.34, cpcHigh: 19.35, intent: "transactional", targetRoute: "/hyderabad/miyapur" },
  { keyword: "carpenter in nizampet", volume: 30, cpcLow: 3.34, cpcHigh: 13.35, intent: "transactional", targetRoute: "/hyderabad/nizampet" },
  { keyword: "carpenter in secunderabad", volume: 20, cpcLow: 3.54, cpcHigh: 13.66, intent: "transactional", targetRoute: "/hyderabad/secunderabad" },
  { keyword: "carpenters in madhapur", volume: 20, cpcLow: 4.22, cpcHigh: 23.13, intent: "transactional", targetRoute: "/hyderabad/madhapur" },
  { keyword: "carpenter in gachibowli", volume: 10, cpcLow: 3.34, cpcHigh: 13.22, intent: "transactional", targetRoute: "/hyderabad/gachibowli" },
  { keyword: "carpenter in kphb", volume: 10, cpcLow: 3.35, cpcHigh: 11.18, intent: "transactional", targetRoute: "/hyderabad/kphb" },
  { keyword: "carpenter in chandanagar", volume: 10, cpcLow: 1.45, cpcHigh: 14.05, intent: "transactional", targetRoute: "/hyderabad/chandanagar" },

  // Specialized Service Keywords
  { keyword: "door carpenter near me", volume: 20, cpcLow: 2.95, cpcHigh: 13.27, intent: "transactional", targetRoute: "/services/door-repair-and-installation" },
  { keyword: "wardrobe carpenter near me", volume: 10, intent: "transactional", targetRoute: "/services/wardrobe-and-cupboard-repair" },
  { keyword: "modular kitchen carpenter near me", volume: 10, cpcLow: 18.37, cpcHigh: 49.15, intent: "transactional", targetRoute: "/services/modular-kitchen-cabinets" },
  { keyword: "furniture carpenter near me", volume: 10, cpcLow: 2.01, cpcHigh: 12.27, intent: "transactional", targetRoute: "/services/furniture-assembly-and-repair" },
  { keyword: "sofa carpenter near me", volume: 10, cpcLow: 9.06, cpcHigh: 22.38, intent: "transactional", targetRoute: "/services/furniture-assembly-and-repair" },
  { keyword: "bed carpenter near me", volume: 10, intent: "transactional", targetRoute: "/services/furniture-assembly-and-repair" },
  { keyword: "carpenter for drilling near me", volume: 10, cpcLow: 5.55, cpcHigh: 18.23, intent: "transactional", targetRoute: "/services/general-woodwork-and-drilling" },
  { keyword: "emergency carpenter near me", volume: 10, intent: "transactional", targetRoute: "/" }
];
