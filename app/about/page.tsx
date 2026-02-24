import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Mystique Radiance Breweries LLP — the tradition, craft, and vision behind India's most enchanting mead brand.",
};

import AboutClient from "./AboutClient";
export default function AboutPage() {
  return <AboutClient />;
}
