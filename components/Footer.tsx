"use client";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8"
      style={{ background: "linear-gradient(180deg, var(--mystic-black) 0%, #050003 100%)", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "rgba(212,175,55,0.04)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-xl tracking-[0.15em] uppercase font-serif" style={{ color: "var(--gold)" }}>
                Mystique Radiance
              </div>
              <div className="text-xs tracking-[0.3em] uppercase font-body mt-0.5" style={{ color: "rgba(212,175,55,0.5)" }}>
                Breweries LLP
              </div>
            </div>
            <p className="text-sm leading-relaxed font-body" style={{ color: "rgba(232,220,200,0.45)" }}>
              Crafting ethereal meads with natural honey, ancient herbs, and pure radiance. 
              A modern revival of timeless tradition.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-sm transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid rgba(212,175,55,0.2)", color: "rgba(212,175,55,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)", e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)", e.currentTarget.style.color = "rgba(212,175,55,0.6)")}>
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-sm transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid rgba(212,175,55,0.2)", color: "rgba(212,175,55,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)", e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)", e.currentTarget.style.color = "rgba(212,175,55,0.6)")}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/brews", label: "Our Brews" },
                { href: "/tasting-room", label: "Tasting Room" },
                { href: "/journal", label: "Journal" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm font-body transition-all duration-300 hover:pl-2"
                    style={{ color: "rgba(232,220,200,0.5)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,220,200,0.5)")}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span className="text-sm font-body" style={{ color: "rgba(232,220,200,0.5)" }}>
                  +91 9096671114
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <a href="mailto:meadmrb@gmail.com"
                  className="text-sm font-body transition-colors duration-300"
                  style={{ color: "rgba(232,220,200,0.5)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,220,200,0.5)")}>
                  meadmrb@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Tasting Hours */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>
              Tasting Room Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-body" style={{ color: "rgba(232,220,200,0.5)" }}>
                <span>Tuesday – Sunday</span>
                <span style={{ color: "rgba(212,175,55,0.7)" }}>12 PM – 10 PM</span>
              </div>
              <div className="flex justify-between text-sm font-body" style={{ color: "rgba(232,220,200,0.35)" }}>
                <span>Monday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/tasting-room" className="btn-outline-gold text-xs inline-block">
                Book a Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-center md:text-left" style={{ color: "rgba(232,220,200,0.3)" }}>
            © 2026 Mystique Radiance Breweries LLP. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs font-body tracking-wider" style={{ color: "rgba(212,175,55,0.5)" }}>
              🍯 Drink Responsibly
            </p>
            <p className="text-xs font-body" style={{ color: "rgba(232,220,200,0.25)" }}>
              No sale to persons below legal drinking age.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
