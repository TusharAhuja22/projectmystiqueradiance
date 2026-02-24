import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";

export const metadata: Metadata = {
  title: {
    default: "Mystique Radiance Breweries LLP | Enchanted Mead & Honey Wine",
    template: "%s | Mystique Radiance Breweries",
  },
  description:
    "Mystique Radiance Breweries LLP crafts ethereal meads with natural honey, herbs, and radiance. Discover the ancient art of mead in a modern, elegant form.",
  keywords: ["mead", "honey wine", "craft mead", "melomel", "metheglin", "Mystique Radiance", "Indian mead", "artisan honey wine"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mystique Radiance Breweries LLP",
    title: "Mystique Radiance Breweries LLP | Enchanted Mead & Honey Wine",
    description: "Crafting ethereal meads with natural honey, herbs, and radiance.",
  },
  robots: { index: true, follow: true },
  themeColor: "#0a0008",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <AgeVerification />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
