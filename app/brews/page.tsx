import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Brews",
  description: "Explore Mystique Radiance Breweries' collection of handcrafted meads — Golden Radiance, Mystic Berry Melomel, and Twilight Spiced Metheglin.",
};
import BrewsClient from "./BrewsClient";
export default function BrewsPage() { return <BrewsClient />; }
