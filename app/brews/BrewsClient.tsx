"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import SectionDivider from "@/components/SectionDivider";

const products = [
  {
    name: "Golden Radiance Traditional Mead",
    type: "Traditional Mead",
    abv: "10%",
    description: "Crisp, sweet, and luminous. Our flagship mead celebrates the pure brilliance of wildflower honey in its most honest form — unadorned, unfiltered, unmatched.",
    pairing: "Soft cheeses, light salads, fresh fruit",
    notes: "Brilliant pale gold in the glass. The nose opens with raw wildflower honey, beeswax, and a whisper of jasmine. On the palate: ripe pear, honeydew, and a gentle floral sweetness balanced by clean acidity. The finish is long, warm, and golden. Best served well-chilled at 8–10°C in a white wine glass.",
    emoji: "🌟",
    gradient: "linear-gradient(90deg, #a8891c, #d4af37, #f5e088, #d4af37, #a8891c)",
  },
  {
    name: "Mystic Berry Melomel",
    type: "Melomel (Fruit Mead)",
    abv: "12%",
    description: "Wild forest berries — blackberry, raspberry, and blueberry — fermented with raw clover honey. A deeply aromatic, jewel-toned elixir of the forest.",
    pairing: "Dark chocolate, aged brie, charcuterie",
    notes: "Deep ruby-purple, almost luminescent in the right light. Aromas of wild bramble, cassis, violet, and forest floor. The palate is lush and fruit-forward with layers of blackcurrant jam, tart raspberry, and clover honey. Tannic structure gives it lovely backbone. Long, berry-stained finish with a honey echo.",
    emoji: "🫐",
    gradient: "linear-gradient(90deg, #4c1d95, #7c3aed, #a855f7, #7c3aed, #4c1d95)",
  },
  {
    name: "Twilight Spiced Metheglin",
    type: "Metheglin (Spiced Mead)",
    abv: "14%",
    description: "Warm cinnamon, star anise, clove, and dried orange peel woven into our richest honey base. Ancient, complex, and utterly bewitching.",
    pairing: "Spiced desserts, blue cheese, braised meats",
    notes: "Deep amber with a mahogany glow. A heady nose of cinnamon stick, star anise, clove, cardamom, and dried orange. The palate unfolds in rich, warming waves — honey-spice, toasted wood, and dark dried fruits. Full-bodied with incredible complexity and a finish that lingers like a winter's tale. Serve slightly above room temperature.",
    emoji: "🌙",
    gradient: "linear-gradient(90deg, #3b1a78, #d4af37, #7c3aed, #d4af37, #3b1a78)",
  },
  {
    name: "Mystique Floral Reserve Honey",
    type: "Artisanal Multi-Floral Honey",
    abv: "0%",
    description: "A luxurious expression of nature’s finest blossoms, carefully harvested from diverse floral regions and preserved in its purest raw form.",
    pairing: "Artisanal cheeses, sourdough toast, herbal infusions, gourmet desserts",
    notes: "Brilliant gold with a radiant clarity. The bouquet opens with delicate wildflower aromas layered with hints of orchard blossom and forest nectar. On the palate, it reveals a smooth, silken sweetness balanced by gentle floral complexity and subtle earthy undertones. Each variant reflects its botanical origin — elegant, luminous, and naturally refined. Best enjoyed at room temperature to experience its full aromatic depth.",
    emoji: "🍯",
    gradient: "linear-gradient(90deg, #b8860b, #d4af37, #f0d060, #d4af37, #b8860b)",
  },
];

export default function BrewsClient() {
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
            ✦ &nbsp; Handcrafted Meads &nbsp; ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-tight mb-4"
          >
            <span className="text-gold-gradient">Shop the</span>{" "}
            <span style={{ color: "rgba(232,220,200,0.95)" }}>Collection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(232,220,200,0.55)" }}
          >
            Three expressions. One vision. Endless enchantment.
          </motion.p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Notice */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-3 px-6 rounded-sm"
          style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}
        >
          <p className="text-xs font-body tracking-widest" style={{ color: "rgba(212,175,55,0.7)" }}>
            🍯 &nbsp; Display only — For inquiries and purchases, please contact us directly or visit our tasting room.
          </p>
        </motion.div>
      </div>

      {/* Products */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Craft note */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(45,15,78,0.4) 0%, rgba(26,10,46,0.6) 100%)", borderTop: "1px solid rgba(212,175,55,0.08)" }} />
        <div className="absolute inset-0 honeycomb-overlay opacity-15" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <p className="text-xs tracking-[0.35em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>
            A Note on Our Craft
          </p>
          <p className="font-serif text-xl md:text-2xl italic leading-relaxed"
            style={{ color: "rgba(232,220,200,0.75)" }}>
            Every bottle is batch-crafted, numbered, and released seasonally. 
            Our meads change subtly with each harvest — a reminder that true craft is alive, 
            never identical, always honest.
          </p>
          <SectionDivider className="mt-8" />
        </motion.div>
      </section>
    </div>
  );
}
