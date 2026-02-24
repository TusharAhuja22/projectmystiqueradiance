import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tasting Room",
  description: "Book a guided mead tasting session at Mystique Radiance Breweries. Open Tuesday–Sunday, 12 PM to 10 PM.",
};
import TastingRoomClient from "./TastingRoomClient";
export default function TastingRoomPage() { return <TastingRoomClient />; }
