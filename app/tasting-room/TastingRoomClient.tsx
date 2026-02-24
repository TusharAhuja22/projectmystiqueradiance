"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Users, Wine } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    icon: <Wine size={22} />,
    title: "Classic Tasting",
    desc: "A guided flight of all three signature meads with tasting notes and pairing suggestions. ~60 minutes.",
  },
  {
    icon: <Users size={22} />,
    title: "Group Experience",
    desc: "Private sessions for up to 20 guests. Perfect for corporate events, celebrations, and connoisseur gatherings.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Meadery Tour",
    desc: "Step behind the curtain. See our fermentation vessels, botanicals vault, and the art of mead-making up close.",
  },
];

export default function TastingRoomClient() {
  return (
    <div style={{ background: "var(--mystic-black)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(45,15,78,0.7) 0%, rgba(10,0,8,1) 70%)" }} />
        <div className="absolute inset-0 honeycomb-overlay opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "rgba(212,175,55,0.08)", filter: "blur(80px)" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}
          >
            ✦ &nbsp; The Tasting Room &nbsp; ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-tight mb-4"
          >
            <span style={{ color: "rgba(232,220,200,0.95)" }}>Book Your</span><br />
            <span className="text-gold-gradient">Radiant Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: "rgba(232,220,200,0.55)" }}
          >
            An intimate journey through our meads, guided by those who made them.
          </motion.p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card p-8 rounded-sm"
              >
                <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-sm"
                  style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.2)" }}>
                  {exp.icon}
                </div>
                <h3 className="font-serif text-xl mb-3" style={{ color: "#f0d060" }}>{exp.title}</h3>
                <p className="text-sm leading-relaxed font-body" style={{ color: "rgba(232,220,200,0.55)" }}>
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Hours + Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card p-10 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock style={{ color: "var(--gold)" }} size={20} />
                <h2 className="font-serif text-2xl" style={{ color: "#f0d060" }}>Hours & Access</h2>
              </div>
              <div className="divider-gold !mx-0 !w-full mb-6" />

              <div className="space-y-4 mb-8">
                {[
                  { day: "Tuesday – Sunday", hours: "12:00 PM – 10:00 PM", open: true },
                  { day: "Monday", hours: "Closed", open: false },
                ].map(row => (
                  <div key={row.day} className="flex justify-between items-center py-3"
                    style={{ borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                    <span className="font-body text-sm" style={{ color: "rgba(232,220,200,0.7)" }}>{row.day}</span>
                    <span className="font-serif text-sm" style={{ color: row.open ? "var(--gold)" : "rgba(232,220,200,0.3)" }}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-sm" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(232,220,200,0.55)" }}>
                  ✦ Walk-ins welcome subject to availability. Reservations strongly recommended for groups of 4 or more.
                </p>
              </div>
            </motion.div>

            {/* Booking CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card p-10 rounded-sm flex flex-col justify-between"
            >
              <div>
                <p className="text-xs tracking-[0.3em] uppercase font-body mb-3" style={{ color: "var(--gold)" }}>
                  Reserve Your Visit
                </p>
                <h2 className="font-serif text-3xl mb-4 leading-tight" style={{ color: "rgba(232,220,200,0.95)" }}>
                  Begin Your<br />Enchanted Evening
                </h2>
                <div className="divider-gold !mx-0 !w-20 mb-6" />
                <p className="text-sm leading-relaxed font-body mb-8" style={{ color: "rgba(232,220,200,0.55)" }}>
                  Contact us to book your private tasting experience or group meadery tour. 
                  Our team will craft a bespoke session tailored to your preferences.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/contact" className="btn-gold block text-center w-full">
                  Book via Contact Form
                </Link>
                <a href="mailto:sip@mystiqueradiance.com" className="btn-outline-gold block text-center w-full">
                  Email Us Directly
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(212,175,55,0.15)" }}
          >
            <div className="p-4 flex items-center gap-2"
              style={{ background: "rgba(26,10,46,0.8)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
              <MapPin size={16} style={{ color: "var(--gold)" }} />
              <span className="text-xs tracking-[0.2em] uppercase font-body" style={{ color: "rgba(212,175,55,0.7)" }}>
                Our Location
              </span>
            </div>
            {/* Google Maps placeholder — replace src with actual embed */}
            <div className="relative w-full h-72 md:h-[420px]"
              style={{ background: "rgba(16,0,20,0.9)" }}>
              <div className="absolute inset-0 honeycomb-overlay opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
                <MapPin size={40} style={{ color: "rgba(212,175,55,0.3)" }} />
                <p className="font-serif text-xl" style={{ color: "rgba(232,220,200,0.4)" }}>
                  Location Coming Soon
                </p>
                <p className="text-xs font-body tracking-wider" style={{ color: "rgba(232,220,200,0.25)" }}>
                  Replace this div with a Google Maps iframe embed
                </p>
                <p className="text-xs font-body" style={{ color: "rgba(212,175,55,0.4)" }}>
                  Mystique Radiance Breweries LLP
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
