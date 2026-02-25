"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionDivider from "@/components/SectionDivider";

const products = [
  {
    name: "The Golden Radiance",
    type: "Traditional Sweet Mead",
    abv: "10%",
    description: "A luminous, pure expression of wildflower honey. Crisp, golden, and endlessly elegant.",
    pairing: "Soft cheeses, light salads",
    notes: "Opens with a bouquet of wildflower honey and warm beeswax. The palate reveals notes of ripe pear, subtle vanilla, and a long, honeyed finish. Light-bodied with a luminous clarity that reflects its pure origins. Serve chilled at 10°C.",
    emoji: "🌟",
    gradient: "linear-gradient(90deg, #d4af37, #f5c842, #d4af37)",
  },
  {
    name: "Enchanted Berries",
    type: "Melomel",
    abv: "12%",
    description: "Wild forest berries dance with raw honey in this deeply aromatic, purple-hued elixir.",
    pairing: "Dark chocolate, aged brie",
    notes: "A vivid blend of hand-picked blackberries, raspberries, and blueberries fermented with raw clover honey. Deep purple in the glass with aromas of wild bramble, cassis, and rose. The finish is long, tart, and beautifully complex.",
    emoji: "🫐",
    gradient: "linear-gradient(90deg, #6b21a8, #a855f7, #6b21a8)",
  },
  {
    name: "Twilight Spiced",
    type: "Metheglin",
    abv: "14%",
    description: "Warm cinnamon, star anise, and sacred herbs woven into a rich, complex honey brew.",
    pairing: "Spiced desserts, blue cheese",
    notes: "Inspired by ancient apothecary traditions. Rich amber with a spiced nose of cinnamon bark, star anise, clove, and dried orange peel. The mead unfolds in layers — warm, mysterious, and long. Perfect for cold evenings by candlelight.",
    emoji: "🌙",
    gradient: "linear-gradient(90deg, #7c3aed, #d4af37, #7c3aed)",
  },
  {
    name: "Mystique Floral Reserve Honey",
    type: "Artisanal Honey Collection",
    abv: "0%",
    description: "A curated collection of raw, unfiltered honey crafted from diverse floral landscapes, each jar capturing the pure essence of its origin.",
    pairing: "Cheese platters, herbal teas, warm toast, desserts",
    notes: "Harvested from select floral regions, Mystique Floral Reserve expresses delicate aromas, layered sweetness, and natural depth. From wild forest blooms to orchard blossoms, each variant reflects its terroir — golden, luminous, and refined.",
    emoji: "🍯",
    gradient: "linear-gradient(90deg, #d4af37, #f0d060, #d4af37)"
  },
];

const values = [
  { icon: "🍯", title: "Pure Honey", desc: "Single-origin wildflower and clover honey from trusted Indian apiaries." },
  { icon: "🌿", title: "Naturally Fermented", desc: "No shortcuts. Traditional slow fermentation for depth and character." },
  { icon: "✨", title: "Gluten Free", desc: "Crafted entirely from honey and botanicals — nature's most ancient brew." },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div style={{ background: "var(--mystic-black)" }}>
      
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          {/* Main gradient */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(45,15,78,0.9) 0%, rgba(26,10,46,0.7) 40%, rgba(10,0,8,1) 100%)" }} />
          {/* Honeycomb overlay */}
          <div className="absolute inset-0 honeycomb-overlay opacity-40" />
          {/* Gold glow at center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
          {/* Purple orbs */}
          <div className="glow-orb w-80 h-80 top-20 -left-20"
            style={{ background: "rgba(107,33,168,0.4)" }} />
          <div className="glow-orb w-64 h-64 bottom-20 -right-10"
            style={{ background: "rgba(212,175,55,0.2)" }} />
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase font-body mb-6"
            style={{ color: "var(--gold)" }}
          >
            ✦ &nbsp; Mystique Radiance Breweries &nbsp; ✦
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
          >
            <span className="text-gold-gradient">Unveil the Magic</span>
            <br />
            <span style={{ color: "rgba(232,220,200,0.9)" }}>in Every Drop.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-xl font-serif italic max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(232,220,200,0.65)" }}
          >
            Crafting ethereal meads with natural honey, herbs, and radiance. 
            Discover the ancient art of Mystique Radiance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/brews" className="btn-gold">Explore Our Brews</Link>
            <Link href="/tasting-room" className="btn-outline-gold">Visit the Tasting Room</Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-body" style={{ color: "rgba(212,175,55,0.4)" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8"
              style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.5), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ VALUES ═══════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 honeycomb-overlay opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "rgba(232,220,200,0.95)" }}>
              Crafted with <span className="text-gold-gradient">Purpose</span>
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card p-8 rounded-sm text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl mb-3" style={{ color: "var(--gold)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed font-body" style={{ color: "rgba(232,220,200,0.55)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INTRO ═══════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>
              Our Essence
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed italic"
              style={{ color: "rgba(232,220,200,0.8)" }}>
              "In ancient times, mead was the drink of gods, warriors, and healers. 
              Mystique Radiance Breweries LLP is India's modern revival of this sacred craft — 
              blending thousand-year-old fermentation wisdom with contemporary elegance. 
              Every bottle carries the warmth of the hive, the magic of botanicals, 
              and the promise of a transcendent experience."
            </p>
            <SectionDivider className="mt-10" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PRODUCT SPOTLIGHT ═══════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "rgba(232,220,200,0.95)" }}>
              Product <span className="text-gold-gradient">Spotlight</span>
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/brews" className="btn-gold">
              View Full Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(45,15,78,0.6) 0%, rgba(26,10,46,0.8) 100%)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }} />
        <div className="absolute inset-0 honeycomb-overlay" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(212,175,55,0.08)", filter: "blur(60px)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(107,33,168,0.15)", filter: "blur(60px)" }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center max-w-3xl mx-auto px-6"
        >
          <p className="text-xs tracking-[0.35em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>
            Come, Experience
          </p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6" style={{ color: "rgba(232,220,200,0.95)" }}>
            Book Your <span className="text-gold-gradient">Radiant</span><br />Tasting Experience
          </h2>
          <p className="font-body text-sm leading-relaxed mb-10" style={{ color: "rgba(232,220,200,0.55)" }}>
            Step into our enchanted tasting room. Guided by our meadmakers, 
            discover the stories behind each brew — Tuesday through Sunday, 12 PM to 10 PM.
          </p>
          <Link href="/tasting-room" className="btn-gold">
            Reserve Your Seat
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
