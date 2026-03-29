"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* Slowly drifting warm orb */
function DriftOrb({ style, duration, delay }: {
  style: React.CSSProperties;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.08, 0.95, 1],
        opacity: [0.6, 0.9, 0.5, 0.6],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function FinalCTA() {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-20 md:py-36 px-6 md:px-24 overflow-hidden"
      style={{ minHeight: "85vh", background: "#1C1410" }}
    >
      {/* ── Warm ambient base glow ── */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(60,30,15,0.6) 0%, rgba(28,20,16,0.9) 60%, #1C1410 100%)" }} />

      {/* ── Colour overlays — lighter ── */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(190,70,25,0.1) 0%, rgba(28,20,16,0.35) 60%, rgba(28,20,16,0.6) 100%)" }} />

      {/* ── Drifting warm glow orbs ── */}
      <DriftOrb style={{ width: 500, height: 500, top: "10%", left: "5%",
        background: "radial-gradient(circle, rgba(200,72,48,0.10) 0%, transparent 70%)", filter: "blur(50px)" }}
        duration={18} delay={0} />
      <DriftOrb style={{ width: 400, height: 400, bottom: "5%", right: "8%",
        background: "radial-gradient(circle, rgba(200,120,30,0.08) 0%, transparent 70%)", filter: "blur(45px)" }}
        duration={22} delay={5} />
      <DriftOrb style={{ width: 300, height: 300, top: "55%", left: "45%",
        background: "radial-gradient(circle, rgba(180,60,20,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
        duration={16} delay={9} />

      {/* ── Subtle animated pizza-themed background ── */}

      {/* Slowly rotating dashed ring — pizza plate outline */}
      <motion.div
        className="absolute pointer-events-none z-[5]"
        style={{ top: "8%", left: "6%", width: 220, height: 220 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          border: "1px dashed rgba(200,135,58,0.10)",
        }} />
      </motion.div>

      {/* Counter-rotating larger ring */}
      <motion.div
        className="absolute pointer-events-none z-[5]"
        style={{ bottom: "12%", right: "8%", width: 320, height: 320 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          border: "1px dashed rgba(200,72,48,0.08)",
        }} />
      </motion.div>

      {/* Central large decorative ring — subtle radial glow */}
      <motion.div
        className="absolute pointer-events-none z-[5]"
        style={{
          top: "50%", left: "50%",
          width: 480, height: 480,
          marginTop: -240, marginLeft: -240,
        }}
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          border: "1px solid rgba(200,135,58,0.05)",
          boxShadow: "inset 0 0 60px rgba(200,135,58,0.03)",
        }} />
      </motion.div>

      {/* Small rotating ring — near top-right */}
      <motion.div
        className="absolute pointer-events-none z-[5]"
        style={{ top: "18%", right: "15%", width: 100, height: 100 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          border: "1px dotted rgba(200,135,58,0.08)",
        }} />
      </motion.div>

      {/* ── Floating Fire Particles (Enhanced & Spread out) ── */}
      {[
          { top: "85%", left: "12%", size: 5, delay: 0,   dur: 15 },
          { top: "60%", left: "28%", size: 4, delay: 2.5, dur: 18 },
          { top: "40%", left: "55%", size: 6, delay: 5,   dur: 14 },
          { top: "75%", left: "72%", size: 5, delay: 1.5, dur: 17 },
          { top: "20%", left: "88%", size: 4, delay: 3.5, dur: 16 },
          { top: "90%", left: "40%", size: 7, delay: 7,   dur: 19 },
          { top: "50%", left: "65%", size: 4, delay: 4,   dur: 15 },
          { top: "15%", left: "20%", size: 5, delay: 6,   dur: 18 },
          { top: "35%", left: "80%", size: 6, delay: 2,   dur: 16 },
          { top: "5%",  left: "45%", size: 4, delay: 8,   dur: 20 },
          { top: "70%", left: "5%",  size: 5, delay: 3,   dur: 15 },
          { top: "25%", left: "95%", size: 4, delay: 5.5, dur: 17 },
          { top: "45%", left: "35%", size: 6, delay: 1,   dur: 14 },
          { top: "80%", left: "85%", size: 5, delay: 4.5, dur: 19 },
          { top: "10%", left: "60%", size: 4, delay: 7.5, dur: 15 },
          { top: "65%", left: "15%", size: 7, delay: 0.5, dur: 18 },
          { top: "30%", left: "70%", size: 5, delay: 6.5, dur: 16 },
          { top: "95%", left: "50%", size: 4, delay: 2,   dur: 17 },
          { top: "55%", left: "90%", size: 6, delay: 8.5, dur: 14 },
          { top: "15%", left: "30%", size: 5, delay: 3.5, dur: 19 },
      ].map((p, i) => (
          <motion.div
              key={`fire-${i}`}
              className="absolute pointer-events-none z-[5] rounded-full"
              style={{
                  left: p.left, top: p.top,
                  width: p.size, height: p.size,
                  background: `radial-gradient(circle, rgba(255,140,0,1) 0%, rgba(255,60,0,0.8) 100%)`,
                  boxShadow: `0 0 ${p.size * 3}px rgba(255, 100, 0, 0.9)`,
                  mixBlendMode: "lighten",
              }}
              animate={{
                  y: [0, -150, -350],
                  x: [0, i % 2 === 0 ? 30 : -30, i % 2 === 0 ? -20 : 20],
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.2, 0.3],
              }}
              transition={{
                  duration: p.dur,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: p.delay,
              }}
          />
      ))}

      {/* Subtle cross-hair lines — Italian kitchen tile vibe */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
        <div style={{
          position: "absolute", top: "30%", left: 0, right: 0,
          height: 1, background: "linear-gradient(to right, transparent, rgba(200,135,58,0.04), transparent)",
        }} />
        <div style={{
          position: "absolute", top: "70%", left: 0, right: 0,
          height: 1, background: "linear-gradient(to right, transparent, rgba(200,72,48,0.03), transparent)",
        }} />
        <div style={{
          position: "absolute", left: "25%", top: 0, bottom: 0,
          width: 1, background: "linear-gradient(to bottom, transparent, rgba(200,135,58,0.03), transparent)",
        }} />
        <div style={{
          position: "absolute", left: "75%", top: 0, bottom: 0,
          width: 1, background: "linear-gradient(to bottom, transparent, rgba(200,72,48,0.03), transparent)",
        }} />
      </div>


      {/* ── Content ── */}
      <div className="relative z-20 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="h-px w-10" style={{ background: "rgba(200,135,58,0.4)" }} />
            <span className="font-sans uppercase text-[11px] tracking-[0.28em]"
              style={{ color: "#C8873A" }}>Limited Availability</span>
            <div className="h-px w-10" style={{ background: "rgba(200,135,58,0.4)" }} />
          </motion.div>

          {/* Headline */}
          <h2 className="font-serif mb-5"
            style={{ fontSize: "clamp(2.8rem,8vw,6rem)", lineHeight: 1.05, color: "#F5ECD8", letterSpacing: "-0.02em" }}>
            Find Your
            <br />
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(100deg,#C84830 0%,#C8873A 55%,#E8B86D 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Perfect Slice
            </em>
          </h2>

          {/* Thin gold rule */}
          <motion.div className="mb-8 mx-auto"
            initial={{ width: 0 }} whileInView={{ width: 60 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: 1, background: "rgba(200,135,58,0.4)" }} />

          {/* Quote */}
          <p className="font-sans italic mb-12 leading-relaxed"
            style={{ fontSize: "clamp(0.88rem,2vw,1.05rem)", color: "rgba(245,236,216,0.42)", maxWidth: 460 }}>
            "From classic Margherita to bold creations — every bite
            tells a story of fire, craft, and love."
          </p>

          {/* ── ORDER NOW — clean, premium, phone-friendly ── */}
          <Link href="/order-now">
            <motion.button
              className="relative overflow-hidden rounded-full font-sans font-bold cursor-pointer"
              style={{
                padding: "clamp(14px,3.5vw,20px) clamp(40px,8vw,72px)",
                fontSize: "clamp(0.85rem,2vw,1rem)",
                letterSpacing: "0.16em",
                background: "linear-gradient(135deg, #C84830 0%, #9E2D1C 100%)",
                color: "#FDF5E8",
                border: "2px solid #C8873A",
              }}
              animate={{
                boxShadow: [
                  "0 6px 28px rgba(200,72,48,0.28)",
                  "0 8px 52px rgba(200,72,48,0.62), 0 0 0 3px rgba(200,72,48,0.14)",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "mirror",  // butter-smooth, no jump
                ease: "easeInOut",
              }}
              whileTap={{ scale: 0.93 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Label */}
              <span className="relative z-10 tracking-[0.16em] uppercase">Order Now</span>

              {/* Warm golden shimmer — slow, premium */}
              <motion.span className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(105deg,transparent 30%,rgba(255,200,120,0.18) 50%,transparent 70%)" }}
                animate={{ x: ["-140%", "240%"] }}
                transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut", repeatDelay: 3.0 }} />
            </motion.button>
          </Link>

          {/* Tap hint — mobile only */}
          <motion.p className="md:hidden font-sans mt-5 uppercase tracking-[0.22em]"
            style={{ fontSize: 9, color: "rgba(245,236,216,0.2)" }}
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            Tap to Order
          </motion.p>
        </motion.div>
      </div>

      {/* ── Footer — more visible ── */}
      <div className="absolute bottom-7 left-0 w-full px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ fontSize: 11, fontFamily: "var(--font-inter)", letterSpacing: "0.14em", color: "rgba(200,135,58,0.55)" }}>
        <span className="uppercase">© 2026 Pizza Galeria · Ristorante Napoletano</span>
        <div className="flex gap-8 uppercase">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#"
              className="transition-colors duration-200"
              style={{ color: "rgba(200,135,58,0.55)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#C8873A")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(200,135,58,0.55)")}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
