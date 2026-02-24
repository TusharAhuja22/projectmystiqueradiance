import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, insights, and wisdom from the world of mead — by Mystique Radiance Breweries.",
};
import JournalClient from "./JournalClient";
export default function JournalPage() { return <JournalClient />; }
