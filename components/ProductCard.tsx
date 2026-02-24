"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProductCardProps {
  name: string;
  type: string;
  abv: string;
  description: string;
  pairing?: string;
  notes: string;
  emoji: string;
  gradient: string;
}

export default function ProductCard({
  name, type, abv, description, pairing, notes, emoji, gradient
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden rounded-sm p-8 flex flex-col h-full cursor-default"
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: gradient }} />

        {/* Glow overlay on hover handled by glass-card class */}
        <div className="absolute top-4 right-4 text-3xl">{emoji}</div>

        <div className="mb-4">
          <span className="text-xs tracking-[0.25em] uppercase font-body px-3 py-1 rounded-full"
            style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.2)" }}>
            {type}
          </span>
        </div>

        <h3 className="font-serif text-2xl mb-2 leading-tight" style={{ color: "#f0d060" }}>
          {name}
        </h3>

        <div className="divider-gold !w-16 !mx-0 my-4" />

        <p className="text-sm leading-relaxed mb-4 flex-1 font-body" style={{ color: "rgba(232,220,200,0.65)" }}>
          {description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-body" style={{ color: "rgba(212,175,55,0.5)" }}>
              ABV
            </span>
            <span className="ml-2 font-serif text-lg" style={{ color: "var(--gold)" }}>
              {abv}
            </span>
          </div>
          {pairing && (
            <div className="text-right">
              <span className="text-xs font-body" style={{ color: "rgba(232,220,200,0.35)" }}>
                Pairs with {pairing}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn-outline-gold w-full text-center text-xs"
          aria-label={`View tasting notes for ${name}`}
        >
          See Tasting Notes
        </button>
      </motion.div>

      {/* Tasting Notes Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(10,0,8,0.92)", backdropFilter: "blur(16px)" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card max-w-lg w-full p-10 rounded-sm relative"
              style={{ border: "1px solid rgba(212,175,55,0.3)", background: "rgba(26,10,46,0.95)" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: gradient }} />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 transition-colors duration-200"
                style={{ color: "rgba(232,220,200,0.4)" }}
                aria-label="Close modal"
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,220,200,0.4)")}>
                <X size={18} />
              </button>

              <div className="text-4xl mb-4">{emoji}</div>
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-2" style={{ color: "var(--gold)" }}>
                Tasting Notes — {type}
              </p>
              <h3 className="font-serif text-3xl mb-4" style={{ color: "#f0d060" }}>{name}</h3>
              <div className="divider-gold !w-20 !mx-0 mb-6" />

              <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "rgba(232,220,200,0.7)" }}>
                {notes}
              </p>

              <div className="flex items-center gap-6 pt-4" style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-body block mb-1" style={{ color: "rgba(212,175,55,0.5)" }}>ABV</span>
                  <span className="font-serif text-xl" style={{ color: "var(--gold)" }}>{abv}</span>
                </div>
                {pairing && (
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-body block mb-1" style={{ color: "rgba(212,175,55,0.5)" }}>Best Paired With</span>
                    <span className="text-sm font-body" style={{ color: "rgba(232,220,200,0.7)" }}>{pairing}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
