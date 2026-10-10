import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Carpenter Repair Hyderabad | Doorstep Carpenter in 30 Mins",
    template: "%s | Carpenter Repair Hyderabad",
  },
  description: siteConfig.description,
  keywords: [
    "carpenter repair hyderabad",
    "carpenter near me hyderabad",
    "doorstep carpenter hyderabad",
    "carpenter miyapur",
    "carpenter kukatpally",
    "carpenter gachibowli",
    "carpenter kondapur",
    "carpenter manikonda",
    "carpenter secunderabad",
    "carpenter kphb",
    "carpenter nizampet",
    "carpenter tellapur",
    "carpenter financial district",
    "door repair carpenter near me",
    "swollen door carpenter hyderabad",
    "sliding door repair hyderabad",
    "wardrobe carpenter near me",
    "soft close hinge repair hyderabad",
    "modular kitchen carpenter hyderabad",
    "tandem box repair hyderabad",
    "furniture carpenter near me",
    "hydraulic bed repair hyderabad",
    "ikea assembly hyderabad",
    "wall drilling mounting hyderabad",
    "wood polishing hyderabad",
    "carpenter home service hyderabad",
    "carpenter repair service hyderabad",
    "carpenter 30 minute hyderabad",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Carpenter Repair Hyderabad | Doorstep Carpenter Service in 30 Mins",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpenter Repair Hyderabad | 30-Min Doorstep Home Service",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth antialiased`}>
      <head>
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} />
        <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} />
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
