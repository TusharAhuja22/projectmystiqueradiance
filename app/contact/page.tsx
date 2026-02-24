import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mystique Radiance Breweries LLP. Book tastings, inquire about our meads, or simply say hello.",
};
import ContactClient from "./ContactClient";
export default function ContactPage() { return <ContactClient />; }
