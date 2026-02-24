"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "history-of-mead",
    tag: "History & Culture",
    emoji: "⚔️",
    title: "The History of Mead: From Vikings to Modern Days",
    excerpt:
      "Long before the grape or the grain claimed its throne, there was honey. Mead — the oldest alcoholic beverage known to humanity — has graced the tables of Norse gods, Vedic sages, and medieval poets. Discover how this ancient elixir is reclaiming its place in the modern world.",
    readTime: "7 min read",
    date: "January 2026",
    gradient: "linear-gradient(135deg, rgba(45,15,78,0.8), rgba(26,10,46,0.9))",
    accent: "#d4af37",
  },
  {
    slug: "gluten-free-mead",
    tag: "Health & Wellness",
    emoji: "🌾",
    title: "Why Mead is the Perfect Gluten-Free Alternative",
    excerpt:
      "In a world where wine has grapes and beer has barley, mead has honey — and nothing else. Naturally gluten-free, crafted from the purest ingredients the earth provides, mead is increasingly the choice of health-conscious drinkers who refuse to compromise on quality or experience.",
    readTime: "5 min read",
    date: "February 2026",
    gradient: "linear-gradient(135deg, rgba(26,10,46,0.9), rgba(16,0,30,0.95))",
    accent: "#f5c842",
  },
  {
    slug: "sustainable-honey",
    tag: "Sustainability",
    emoji: "🐝",
    title: "Meet the Bees: How We Source Our Honey Sustainably",
    excerpt:
      "Every drop of Mystique Radiance begins with a bee. We trace our single-origin honey to specific apiaries, working directly with beekeepers who share our reverence for nature. This is the story of that relationship — and why it makes all the difference.",
    readTime: "6 min read",
    date: "February 2026",
    gradient: "linear-gradient(135deg, rgba(40,20,10,0.8), rgba(26,10,46,0.9))",
    accent: "#c8860a",
  },
];

export default function JournalClient() {
  return (
    <div style={{ background: "var(--mystic-black)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(45,15,78,0.7) 0%, rgba(10,0,8,1) 70%)" }} />
        <div className="absolute inset-0 honeycomb-overlay opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "rgba(212,175,55,0.07)", filter: "blur(80px)" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}
          >
            ✦ &nbsp; The Mystique Journal &nbsp; ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-tight mb-4"
          >
            <span className="text-gold-gradient">Stories</span>{" "}
            <span style={{ color: "rgba(232,220,200,0.95)" }}>& Wisdom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: "rgba(232,220,200,0.55)" }}
          >
            Reflections from the meadery — on craft, nature, history, and the magic of honey.
          </motion.p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="glass-card rounded-sm overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Top accent */}
                <div className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${article.accent}, transparent)` }} />

                {/* Card header visual */}
                <div className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: article.gradient }}>
                  <div className="absolute inset-0 honeycomb-overlay opacity-30" />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                    className="text-6xl relative z-10"
                  >
                    {article.emoji}
                  </motion.div>
                  {/* Glow orb */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 rounded-full"
                      style={{ background: `radial-gradient(${article.accent}30, transparent)`, filter: "blur(20px)" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase font-body px-2.5 py-1 rounded-sm"
                      style={{ background: "rgba(212,175,55,0.08)", color: article.accent, border: `1px solid ${article.accent}30` }}>
                      {article.tag}
                    </span>
                    <span className="text-xs font-body" style={{ color: "rgba(232,220,200,0.3)" }}>
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl leading-snug mb-4 group-hover:text-gold-DEFAULT transition-colors duration-300"
                    style={{ color: "rgba(232,220,200,0.9)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = article.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,220,200,0.9)")}>
                    {article.title}
                  </h2>

                  <p className="text-sm leading-relaxed font-body mb-6 flex-1" style={{ color: "rgba(232,220,200,0.5)" }}>
                    {article.excerpt}
                  </p>

                  <div className="divider-gold !mx-0 mb-4" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body" style={{ color: "rgba(232,220,200,0.3)" }}>
                      {article.date}
                    </span>
                    <button
                      className="flex items-center gap-2 text-xs font-body tracking-wider uppercase transition-all duration-300 group/btn"
                      style={{ color: article.accent }}
                      aria-label={`Read ${article.title}`}
                    >
                      Read More
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
