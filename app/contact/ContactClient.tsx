"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Send, CheckCircle } from "lucide-react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static frontend only — no backend
    setSubmitted(true);
  };

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
            ✦ &nbsp; Reach Out &nbsp; ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-tight mb-4"
          >
            <span className="text-gold-gradient">Let's Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: "rgba(232,220,200,0.55)" }}
          >
            Questions, bookings, partnerships, or simply a shared love of mead.
          </motion.p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card p-8 rounded-sm">
                <h2 className="font-serif text-2xl mb-6" style={{ color: "#f0d060" }}>
                  Get in Touch
                </h2>
                <div className="divider-gold !mx-0 !w-16 mb-6" />

                <div className="space-y-5">
                  <a href="tel:+919096671114" className="flex items-start gap-4 group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", color: "var(--gold)" }}>
                      <Phone size={15} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase font-body mb-1" style={{ color: "rgba(212,175,55,0.5)" }}>Phone</p>
                      <p className="text-sm font-body transition-colors duration-300" style={{ color: "rgba(232,220,200,0.7)" }}>+91 9096671114</p>
                    </div>
                  </a>

                  <a href="mailto:meadmdr@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", color: "var(--gold)" }}>
                      <Mail size={15} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase font-body mb-1" style={{ color: "rgba(212,175,55,0.5)" }}>Email</p>
                      <p className="text-sm font-body transition-colors duration-300" style={{ color: "rgba(232,220,200,0.7)" }}>meadmdr@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8">
                  <p className="text-xs tracking-[0.2em] uppercase font-body mb-4" style={{ color: "rgba(212,175,55,0.5)" }}>
                    Follow the Journey
                  </p>
                  <div className="flex gap-3">
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-body tracking-wider transition-all duration-300"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)", color: "rgba(232,220,200,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)", e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)", e.currentTarget.style.color = "rgba(232,220,200,0.6)")}>
                      <Instagram size={14} /> Instagram
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-body tracking-wider transition-all duration-300"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)", color: "rgba(232,220,200,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)", e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)", e.currentTarget.style.color = "rgba(232,220,200,0.6)")}>
                      <Facebook size={14} /> Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Responsible Note */}
              <div className="p-5 rounded-sm" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)" }}>
                <p className="text-xs font-body leading-relaxed text-center" style={{ color: "rgba(212,175,55,0.5)" }}>
                  🍯 Mystique Radiance promotes responsible and mindful consumption of alcohol.
                  No sale to persons below legal drinking age.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-10 rounded-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-6xl mb-6"
                    >
                      <CheckCircle style={{ color: "var(--gold)", margin: "0 auto" }} size={56} />
                    </motion.div>
                    <h3 className="font-serif text-3xl mb-3" style={{ color: "#f0d060" }}>Message Sent</h3>
                    <div className="divider-gold mb-4" />
                    <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(232,220,200,0.6)" }}>
                      Thank you for reaching out. Our team will respond within 24 hours.
                      In the meantime, explore our brews and plan your tasting.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl mb-2" style={{ color: "#f0d060" }}>Send a Message</h2>
                    <div className="divider-gold !mx-0 !w-16 mb-8" />

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs tracking-[0.2em] uppercase font-body mb-2"
                            style={{ color: "rgba(212,175,55,0.6)" }} htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            id="name" type="text" required
                            placeholder="Your name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="input-mystic w-full px-4 py-3 rounded-sm text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs tracking-[0.2em] uppercase font-body mb-2"
                            style={{ color: "rgba(212,175,55,0.6)" }} htmlFor="email">
                            Email Address *
                          </label>
                          <input
                            id="email" type="email" required
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="input-mystic w-full px-4 py-3 rounded-sm text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.2em] uppercase font-body mb-2"
                          style={{ color: "rgba(212,175,55,0.6)" }} htmlFor="subject">
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          className="input-mystic w-full px-4 py-3 rounded-sm text-sm"
                        >
                          <option value="" style={{ background: "#1a0a2e" }}>Select a subject</option>
                          <option value="tasting" style={{ background: "#1a0a2e" }}>Book a Tasting</option>
                          <option value="wholesale" style={{ background: "#1a0a2e" }}>Wholesale Inquiry</option>
                          <option value="event" style={{ background: "#1a0a2e" }}>Private Event</option>
                          <option value="press" style={{ background: "#1a0a2e" }}>Press & Media</option>
                          <option value="other" style={{ background: "#1a0a2e" }}>General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.2em] uppercase font-body mb-2"
                          style={{ color: "rgba(212,175,55,0.6)" }} htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message" required rows={5}
                          placeholder="Tell us about yourself, your interest, or your question..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className="input-mystic w-full px-4 py-3 rounded-sm text-sm resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-gold w-full flex items-center justify-center gap-3">
                        <Send size={15} /> Send Your Message
                      </button>

                      <p className="text-xs font-body text-center" style={{ color: "rgba(232,220,200,0.3)" }}>
                        By submitting, you confirm you are of legal drinking age. We respect your privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
