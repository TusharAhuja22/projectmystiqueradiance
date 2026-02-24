"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("mrb_age_verified");
    const isBlocked = localStorage.getItem("mrb_age_blocked");
    if (isBlocked === "true") {
      setBlocked(true);
    } else if (!verified) {
      setShowModal(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("mrb_age_verified", "true");
    setShowModal(false);
  };

  const handleNo = () => {
    localStorage.setItem("mrb_age_blocked", "true");
    setBlocked(true);
    setShowModal(false);
  };

  if (blocked) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ background: "var(--mystic-black)" }}>
        <div className="text-center px-8 max-w-md">
          <div className="text-6xl mb-6">🍯</div>
          <h2 className="font-serif text-2xl text-gold-DEFAULT mb-4" style={{ color: "var(--gold)" }}>
            Entry Denied
          </h2>
          <p className="text-sm text-[#e8dcc8]/60 leading-relaxed font-body">
            We're sorry. You must be of legal drinking age to enter this website.
            Mystique Radiance Breweries LLP promotes responsible drinking.
          </p>
          <p className="mt-6 text-xs text-[#e8dcc8]/30 font-body">
            Please come back when you are of legal age.
          </p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(10,0,8,0.97)", backdropFilter: "blur(20px)" }}
        >
          {/* Ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: "rgba(212,175,55,0.08)", filter: "blur(100px)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{ background: "rgba(106,53,168,0.12)", filter: "blur(80px)" }} />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card relative max-w-md w-full mx-6 p-10 rounded-sm text-center"
            style={{
              background: "rgba(26,10,46,0.9)",
              border: "1px solid rgba(212,175,55,0.25)",
              boxShadow: "0 0 80px rgba(212,175,55,0.12), 0 40px 80px rgba(0,0,0,0.8)"
            }}
          >
            {/* Gold top border accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />

            {/* Logo mark */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl mb-6"
            >✦</motion.div>

            <p className="text-xs tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>
              Mystique Radiance Breweries
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-2" style={{ color: "#f0d060" }}>
              Welcome, Wanderer
            </h2>
            <div className="divider-gold my-5" />

            <p className="text-sm leading-relaxed mb-2 font-body" style={{ color: "rgba(232,220,200,0.75)" }}>
              Our enchanted brews are crafted for those of legal drinking age.
            </p>
            <p className="text-base font-serif italic mb-8" style={{ color: "rgba(232,220,200,0.9)" }}>
              Are you 21 years of age or older?
            </p>

            <div className="flex gap-4 justify-center">
              <button onClick={handleYes} className="btn-gold">
                Yes, I Am 21+
              </button>
              <button onClick={handleNo} className="btn-outline-gold">
                No, I'm Not
              </button>
            </div>

            <p className="mt-8 text-xs leading-relaxed font-body" style={{ color: "rgba(232,220,200,0.3)" }}>
              By entering, you confirm you are of legal drinking age in your country.
              Drink Responsibly. No sale to persons below legal drinking age.
            </p>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
