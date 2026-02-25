"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/brews", label: "Brews" },
  { href: "/tasting-room", label: "Tasting Room" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-blur py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* PREMIUM LOGO (Image + Text) */}
          <Link href="/" className="flex items-center gap-3 group">

            {/* Logo Image */}
            <img
              src="/images/logo.png"
              alt="Mystique Radiance Breweries Logo"
              className="h-24 w-auto transition duration-300 group-hover:scale-105"
            />

            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span
                className="text-lg tracking-[0.18em] uppercase font-serif"
                style={{ color: "var(--gold)" }}
              >
                Mystique
              </span>
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-body mt-1"
                style={{ color: "rgba(212,175,55,0.7)" }}
              >
                Radiance Breweries
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-[0.18em] uppercase font-body transition-all duration-300 ${
                    isActive ? "text-[var(--gold)]" : "text-[#e8dcc8b3]"
                  } hover:text-[var(--gold)]`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link href="/tasting-room" className="btn-gold text-xs">
              Book Tasting
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 text-[var(--gold)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8"
            style={{
              background: "rgba(10,0,8,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="divider-gold mb-8" />

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-2xl font-serif border-b"
                  style={{
                    color: isActive
                      ? "var(--gold)"
                      : "rgba(232,220,200,0.8)",
                    borderColor: "rgba(212,175,55,0.1)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-8">
              <Link href="/tasting-room" className="btn-gold inline-block">
                Book a Tasting
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}