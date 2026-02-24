"use client";

import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const sections = [
  {
    icon: "📜",
    label: "Our Story",
    title: "Where Ancient Wisdom Meets Modern Vision",
    body: `Mystique Radiance Breweries LLP was born from a singular obsession: to resurrect the world's oldest alcoholic beverage with uncompromising craft and beauty. Founded by a team of passionate artisans, botanists, and honey enthusiasts, we set out to prove that mead — the drink of Vikings, poets, and alchemists — deserves its throne at the modern table.

Our journey began in the foothills of the Western Ghats, where we discovered local wildflower honey of extraordinary complexity. This honey became our foundation — raw, unfiltered, vibrating with the life of thousands of flowers. From that first batch, we knew we were building something timeless.`,
  },
  {
    icon: "⚗️",
    label: "Our Craft",
    title: "Natural, Sustainable, and Utterly Magical",
    body: `Every bottle of Mystique Radiance is a testament to patience. We use only single-origin honey sourced from small-scale, sustainable apiaries across India. Our fermentation is slow and traditional — never rushed, never shortcuts. We add no artificial preservatives, no concentrated flavors, and no gluten-containing ingredients.

Our botanical ingredients — herbs, spices, and fruits — are ethically sourced and seasonal. We believe that the most magical brews come from the most honest ingredients. The result is mead of extraordinary depth: complex, alive, and unique to every harvest.`,
  },
  {
    icon: "🔭",
    label: "Our Vision",
    title: "Reviving an Ancient Art for a New Generation",
    body: `We believe the world is ready for mead's renaissance. In a landscape dominated by mass-produced spirits, Mystique Radiance is a love letter to craft, patience, and wonder. We envision a future where mead holds a proud place on India's premium beverage shelf — celebrated alongside wines, champagnes, and aged spirits.

Our vision extends beyond brewing. We are building a community of mead lovers, a living archive of botanical knowledge, and a brand that honors the ancient while embracing the extraordinary possibilities of tomorrow.`,
  },
];

export default function AboutClient() {
  return (
    <div style={{ background: "var(--mystic-black)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(45,15,78,0.7) 0%, rgba(10,0,8,1) 70%)" }} />
        <div className="absolute inset-0 honeycomb-overlay opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "rgba(212,175,55,0.07)", filter: "blur(80px)" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}
          >
            ✦ &nbsp; About Us &nbsp; ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            <span style={{ color: "rgba(232,220,200,0.95)" }}>The Radiance of</span><br />
            <span className="text-gold-gradient">Tradition & Mystery.</span>
          </motion.h1>
          <div className="divider-gold" />
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-xs tracking-[0.3em] uppercase font-body" style={{ color: "var(--gold)" }}>
                  {sec.label}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-6 leading-tight"
                  style={{ color: "rgba(232,220,200,0.95)" }}>
                  {sec.title}
                </h2>
                <div className="divider-gold !mx-0 !w-20 mb-6" />
                {sec.body.split("\n\n").map((para, pi) => (
                  <p key={pi} className="text-sm leading-relaxed mb-4 font-body"
                    style={{ color: "rgba(232,220,200,0.6)" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Visual card */}
              <div className={`glass-card p-12 rounded-sm flex flex-col items-center justify-center min-h-64 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="text-7xl mb-4"
                >
                  {sec.icon}
                </motion.div>
                <div className="divider-gold" />
                <p className="mt-4 font-serif italic text-lg text-center" style={{ color: "rgba(232,220,200,0.5)" }}>
                  {sec.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(45,15,78,0.5) 0%, rgba(26,10,46,0.7) 100%)", borderTop: "1px solid rgba(212,175,55,0.08)" }} />
        <div className="absolute inset-0 honeycomb-overlay opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="text-6xl font-serif" style={{ color: "rgba(212,175,55,0.3)", lineHeight: 1 }}>"</span>
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed -mt-4"
            style={{ color: "rgba(232,220,200,0.85)" }}>
            Mead is not just a drink. It is memory, it is magic, it is the golden thread connecting the oldest human celebrations to our most modern moments.
          </p>
          <div className="divider-gold mt-8" />
          <p className="mt-4 text-xs tracking-[0.3em] uppercase font-body" style={{ color: "rgba(212,175,55,0.6)" }}>
            — The Founders, Mystique Radiance Breweries
          </p>
        </motion.div>
      </section>
    </div>
  );
}
