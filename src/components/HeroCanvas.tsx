"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function useDesktopParallax() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 45, damping: 20 });
  const sy = useSpring(my, { stiffness: 45, damping: 20 });
  const onMove = useCallback((e: MouseEvent) => {
    mx.set(e.clientX / window.innerWidth);
    my.set(e.clientY / window.innerHeight);
  }, [mx, my]);
  useEffect(() => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    }
  }, [onMove]);
  return { sx, sy };
}

const STEAMS = [
  { left: "42%", delay: 0,   dur: 3.6 },
  { left: "50%", delay: 0.9, dur: 4.2 },
  { left: "58%", delay: 1.8, dur: 3.9 },
];

const STATS = [
  { num: "35+",  label: "Yrs Legacy" },
  { num: "900°", label: "Stone Oven" },
  { num: "18+",  label: "Specials"   },
];

const PIZZA_3D = {
  animate: { rotateX: [8, 14, 8], rotateY: [-6, 6, -6], y: [0, -14, 0] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
};

/* ── Typing animation — cycles through evocative words ── */
const TYPED_WORDS = ["love.", "soul.", "craft.", "heart."];

function TypingWord() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];

    if (!deleting) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 110);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 65);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx((p) => (p + 1) % TYPED_WORDS.length);
      }
    }
  }, [text, deleting, wordIdx]);

  return (
    <em style={{ fontStyle: "italic", color: "#C8873A" }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "mirror" }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.82em",
          background: "#C8873A",
          marginLeft: "2px",
          verticalAlign: "baseline",
          borderRadius: 1,
        }}
      />
    </em>
  );
}

/* ── Seamless pulsing glow button — repeatType mirror = no jump seam ── */
function PulseButton({
  href, children, filled = false,
}: { href: string; children: React.ReactNode; filled?: boolean }) {
  return (
    <Link href={href}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.04 }}
        animate={
          filled
            ? {
                boxShadow: [
                  "0 4px 18px rgba(200,72,48,0.25)",
                  "0 6px 42px rgba(200,72,48,0.58), 0 0 0 1.5px rgba(200,72,48,0.22)",
                ],
              }
            : {
                boxShadow: [
                  "0 0 0 1px rgba(200,135,58,0.25)",
                  "0 0 0 1px rgba(200,135,58,0.72), 0 0 20px rgba(200,135,58,0.16)",
                ],
              }
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "mirror",   // goes A→B→A→B with no jump
          ease: "easeInOut",
          delay: filled ? 0 : 0.9, // offset so they pulse out of phase
        }}
        className="relative overflow-hidden px-8 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide cursor-pointer"
        style={
          filled
            ? { background: "#C84830", color: "#FDF5E8" }
            : { background: "transparent", color: "rgba(245,236,216,0.75)", border: "1.5px solid #C8873A" }
        }
      >
        <span className="relative z-10">{children}</span>
        {/* Shimmer sweep — slow enough to feel premium */}
        <motion.span
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.13) 50%,transparent 70%)" }}
          animate={{ x: ["-130%", "230%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.8 }}
        />
      </motion.button>
    </Link>
  );
}

/* ── Animated stat — smooth whileInView pop + soft warm highlight ── */
function StatItem({ num, label, delay }: { num: string; label: string; delay: number }) {
  return (
    <motion.div
      className="relative flex flex-col items-center md:items-start gap-0.5 px-1"
      initial={{ opacity: 0, scale: 0.72, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.34, 1.5, 0.64, 1] as [number, number, number, number] }}
    >
      {/* Soft glow behind number */}
      <motion.div
        className="absolute -inset-3 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay + 0.15 }}
        style={{
          background:
            "radial-gradient(circle, rgba(200,135,58,0.14) 0%, transparent 72%)",
        }}
      />
      <span
        className="relative font-serif font-bold leading-none"
        style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#C8873A" }}
      >
        {num}
      </span>
      <span
        className="relative font-sans uppercase text-center md:text-left"
        style={{ fontSize: 9, letterSpacing: "0.16em", color: "rgba(245,236,216,0.32)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function HeroCanvas() {
  const { sx, sy } = useDesktopParallax();
  const bgX = useTransform(sx, [0, 1], [-14, 14]);
  const bgY = useTransform(sy, [0, 1], [-8, 8]);
  const fgX = useTransform(sx, [0, 1], [-20, 20]);
  const fgY = useTransform(sy, [0, 1], [-10, 10]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100dvh", background: "#120B06" }}
    >
      {/* Background kitchen photo */}
      <motion.div className="absolute inset-0 z-0" style={{ x: bgX, y: bgY, scale: 1.07 }}>
        <Image src="/images/craft.png" alt="" fill priority sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.22) saturate(0.8)" }} />
      </motion.div>

      {/* Mobile overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{ background: "linear-gradient(to bottom,rgba(18,11,6,0.97) 0%,rgba(18,11,6,0.88) 55%,rgba(18,11,6,0.72) 100%)" }} />
      {/* Desktop side gradient */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(100deg,#120B06 0%,#120B06 30%,rgba(18,11,6,0.80) 50%,rgba(18,11,6,0.20) 72%,transparent 100%)" }} />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: 120, background: "linear-gradient(to top,#120B06 0%,transparent 100%)" }} />

      {/* Fire glows — desktop */}
      <div className="absolute z-10 pointer-events-none hidden md:block"
        style={{ right: "-5%", top: "5%", width: "55%", height: "90%" }}>
        <motion.div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 40% 50%,rgba(200,80,30,0.22) 0%,rgba(160,60,10,0.09) 45%,transparent 72%)" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 42% 52%,rgba(220,60,20,0.18) 0%,rgba(200,40,10,0.08) 30%,transparent 55%)" }}
          animate={{ scale: [1, 1.12, 0.96, 1], opacity: [0.6, 1, 0.5, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 48% 48%,rgba(220,160,40,0.1) 0%,transparent 40%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
      </div>

      {/* ── Light Fire Particles (Background) ── */}
      {[
        { top: "85%", left: "12%", size: 3, delay: 0,   dur: 15 },
        { top: "60%", left: "28%", size: 2, delay: 2.5, dur: 18 },
        { top: "40%", left: "55%", size: 4, delay: 5,   dur: 14 },
        { top: "75%", left: "72%", size: 3, delay: 1.5, dur: 17 },
        { top: "20%", left: "88%", size: 2, delay: 3.5, dur: 16 },
        { top: "90%", left: "40%", size: 4, delay: 7,   dur: 19 },
        { top: "50%", left: "65%", size: 2, delay: 4,   dur: 15 },
        { top: "15%", left: "20%", size: 3, delay: 6,   dur: 18 },
        { top: "35%", left: "80%", size: 4, delay: 2,   dur: 16 },
        { top: "5%",  left: "45%", size: 2, delay: 8,   dur: 20 },
      ].map((p, i) => (
        <motion.div
            key={`hero-fire-${i}`}
            className="absolute pointer-events-none z-[5] rounded-full"
            style={{
                left: p.left, top: p.top,
                width: p.size, height: p.size,
                background: `radial-gradient(circle, rgba(255,140,0,0.6) 0%, rgba(255,60,0,0.4) 100%)`,
                boxShadow: `0 0 ${p.size * 2}px rgba(255, 100, 0, 0.4)`,
                mixBlendMode: "lighten"
            }}
            animate={{
                y: [0, -100, -250],
                x: [0, i % 2 === 0 ? 20 : -20, i % 2 === 0 ? -10 : 10],
                opacity: [0, 0.5, 0],
                scale: [0.5, 1, 0.3],
            }}
            transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeOut",
                delay: p.delay,
            }}
        />
      ))}

      {/* ══════════ MOBILE ══════════ */}
      <div className="relative z-20 flex flex-col md:hidden min-h-dvh pt-[76px] pb-[52px]">
        <div className="px-5 pt-4">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans uppercase mb-3"
            style={{ fontSize: 10, letterSpacing: "0.28em", color: "#C8873A" }}>
            Neapolitan · Est. 1987
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif mb-3"
            style={{ fontSize: "clamp(2.4rem,11.5vw,3.2rem)", lineHeight: 1.0, color: "#F5ECD8", letterSpacing: "-0.02em" }}>
            <span className="block">Born in <em style={{ fontStyle: "italic", color: "#C84830" }}>fire.</em></span>
            <span className="block" style={{ whiteSpace: "nowrap" }}>Served with <TypingWord /></span>
          </motion.h1>

          <motion.div initial={{ width: 0 }} animate={{ width: 44 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-3" style={{ height: 1, background: "rgba(200,135,58,0.45)" }} />

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-sans mb-5 leading-relaxed"
            style={{ fontSize: "clamp(0.8rem,3.8vw,0.95rem)", color: "rgba(245,236,216,0.5)" }}>
            Hand-stretched Neapolitan dough, San Marzano tomatoes &amp; Fior di Latte — 90 seconds in our 900°C wood-fired oven.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="flex gap-3 mb-5">
            <PulseButton href="/menu" filled>View Menu</PulseButton>
            <PulseButton href="/order-now">Order Online</PulseButton>
          </motion.div>
        </div>

        {/* Pizza + fire glow */}
        <div className="relative flex-1 flex items-center justify-center" style={{ minHeight: 220 }}>
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: "80vw", height: "80vw", maxWidth: 320, maxHeight: 320,
              background: "radial-gradient(circle,rgba(220,80,30,0.28) 0%,rgba(180,60,10,0.12) 52%,transparent 72%)",
              filter: "blur(28px)" }}
            animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.7, 1, 0.6, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: "60vw", height: "60vw", maxWidth: 240, maxHeight: 240,
              background: "radial-gradient(circle,rgba(220,150,30,0.15) 0%,transparent 65%)",
              filter: "blur(20px)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />

          <motion.div style={{ perspective: 700 }} animate={PIZZA_3D.animate} transition={PIZZA_3D.transition}>
            <div className="relative rounded-full overflow-hidden"
              style={{ width: "68vw", height: "68vw", maxWidth: 290, maxHeight: 290,
                boxShadow: "0 30px 80px rgba(0,0,0,0.85),0 0 0 1px rgba(255,220,150,0.06),0 0 40px rgba(200,80,30,0.2)" }}>
              <Image src="/images/menu-hero-pizza.png" alt="Signature Margherita" fill sizes="290px" priority className="object-cover" style={{ transform: "scale(1.06)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle,transparent 48%,rgba(10,5,2,0.45) 100%)" }} />
            </div>
          </motion.div>

          {STEAMS.map((s, i) => (
            <motion.div key={i} className="absolute pointer-events-none"
              style={{ top: "8%", left: s.left, width: 3, height: 36, borderRadius: 9999,
                background: "linear-gradient(to top,rgba(255,255,255,0.18),transparent)", filter: "blur(4px)" }}
              animate={{ y: [0, -50], opacity: [0, 0.5, 0], scaleX: [1, 1.8, 0.5], x: [0, i % 2 === 0 ? 8 : -8] }}
              transition={{ duration: s.dur, repeat: Infinity, ease: "easeOut", delay: s.delay }} />
          ))}
        </div>

        {/* Stats — animated */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-around px-5 pb-2"
          style={{ borderTop: "1px solid rgba(245,236,216,0.06)", paddingTop: 14 }}>
          {STATS.map((s, i) => (
            <StatItem key={s.label} num={s.num} label={s.label} delay={0.95 + i * 0.15} />
          ))}
        </motion.div>
      </div>

      {/* ══════════ DESKTOP ══════════ */}
      <div className="hidden md:flex relative z-20 min-h-dvh items-center">
        {/* Left text */}
        <div className="flex flex-col justify-center px-16 lg:px-24 pt-24 pb-20 w-[48%] flex-shrink-0">
          <motion.p initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans uppercase mb-6"
            style={{ fontSize: 11, letterSpacing: "0.3em", color: "#C8873A" }}>
            Neapolitan · Est. 1987 · Naples, Italy
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif mb-5"
            style={{ fontSize: "clamp(3rem,5.5vw,5.2rem)", lineHeight: 0.96, color: "#F5ECD8", letterSpacing: "-0.02em" }}>
            <span className="block">Born in <em style={{ fontStyle: "italic", color: "#C84830" }}>fire.</em></span>
            <span className="block" style={{ whiteSpace: "nowrap" }}>Served with <TypingWord /></span>
          </motion.h1>

          <motion.div initial={{ width: 0 }} animate={{ width: 52 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mb-5" style={{ height: 1, background: "rgba(200,135,58,0.45)" }} />

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-sans mb-8 leading-relaxed"
            style={{ fontSize: "clamp(0.88rem,1.3vw,1rem)", color: "rgba(245,236,216,0.52)", maxWidth: 400 }}>
            Hand-stretched Neapolitan dough, vine-ripened San Marzano tomatoes, fresh Fior di Latte — finished in our 900°C wood-fired stone oven for 90 seconds of pure perfection.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62 }}
            className="flex flex-wrap gap-3 mb-12">
            <PulseButton href="/menu" filled>View Our Menu</PulseButton>
            <PulseButton href="/order-now">Order Online</PulseButton>
          </motion.div>

          {/* Stats row — animated numbers */}
          <div className="flex gap-10" style={{ borderTop: "1px solid rgba(245,236,216,0.07)", paddingTop: 22 }}>
            {STATS.map((s, i) => (
              <StatItem key={s.label} num={s.num} label={s.label} delay={0.9 + i * 0.15} />
            ))}
          </div>
        </div>

        {/* Right pizza */}
        <motion.div className="flex-1 flex items-center justify-center relative"
          style={{ x: fgX, y: fgY }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.32 }}>
          {/* Animated fire glow */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: "min(82vh,660px)", height: "min(82vh,660px)",
              background: "radial-gradient(circle,rgba(220,80,30,0.25) 0%,rgba(180,60,10,0.1) 50%,transparent 72%)",
              filter: "blur(38px)" }}
            animate={{ scale: [1, 1.07, 0.97, 1], opacity: [0.7, 1, 0.6, 0.7] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: "min(60vh,480px)", height: "min(60vh,480px)",
              background: "radial-gradient(circle,rgba(220,140,30,0.14) 0%,transparent 60%)",
              filter: "blur(28px)" }}
            animate={{ scale: [1, 1.14, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} />

          <motion.div style={{ perspective: 900 }} animate={PIZZA_3D.animate} transition={PIZZA_3D.transition}>
            <div className="relative rounded-full overflow-hidden"
              style={{ width: "min(74vh,600px)", height: "min(74vh,600px)",
                boxShadow: "0 50px 120px rgba(0,0,0,0.88),0 0 0 1px rgba(255,220,150,0.05),0 0 80px rgba(200,72,48,0.15)" }}>
              <Image src="/images/menu-hero-pizza.png" alt="Signature Margherita" fill sizes="600px" priority className="object-cover" style={{ transform: "scale(1.07)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle,transparent 52%,rgba(10,5,2,0.4) 100%)" }} />
            </div>
          </motion.div>

          {STEAMS.map((s, i) => (
            <motion.div key={i} className="absolute pointer-events-none"
              style={{ top: "10%", left: s.left, width: 3, height: 44, borderRadius: 9999,
                background: "linear-gradient(to top,rgba(255,255,255,0.18),transparent)", filter: "blur(4px)" }}
              animate={{ y: [0, -70], opacity: [0, 0.55, 0], scaleX: [1, 1.8, 0.5], x: [0, i % 2 === 0 ? 10 : -10] }}
              transition={{ duration: s.dur, repeat: Infinity, ease: "easeOut", delay: s.delay }} />
          ))}

          {[
            { label: "Fresh Basil",   top: "20%", right: "5%",  delay: 0.8 },
            { label: "San Marzano",   top: "74%", right: "4%",  delay: 1.1 },
            { label: "Fior di Latte", top: "48%", right: "-2%", delay: 1.4 },
          ].map((h) => (
            <motion.div key={h.label} className="absolute pointer-events-none"
              style={{ top: h.top, right: h.right }}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
              transition={{ opacity: { delay: h.delay, duration: 0.6 }, x: { delay: h.delay, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: h.delay } }}>
              <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[10px] tracking-widest uppercase whitespace-nowrap"
                style={{ background: "rgba(18,11,6,0.78)", border: "1px solid rgba(200,135,58,0.2)", color: "rgba(245,236,216,0.65)", backdropFilter: "blur(10px)" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C8873A" }} />
                {h.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.div className="absolute bottom-0 left-0 right-0 z-30"
        style={{ borderTop: "1px solid rgba(245,236,216,0.06)", background: "rgba(10,5,2,0.78)", backdropFilter: "blur(16px)", padding: "9px 0" }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
        <div className="max-w-[1500px] mx-auto px-5 md:px-16 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            {[
              { icon: "📍", text: "Connaught Place, New Delhi" },
              { icon: "🕐", text: "Open Daily  12 pm – 11 pm", cls: "hidden sm:flex" },
              { icon: "📞", text: "+91 98765 43210",             cls: "hidden md:flex" },
            ].map((item) => (
              <div key={item.text} className={`flex items-center gap-1.5 font-sans ${item.cls ?? "flex"}`}
                style={{ fontSize: 10, color: "rgba(245,236,216,0.35)", letterSpacing: "0.04em" }}>
                <span>{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
          </div>
          <Link href="/contact-us">
            <motion.span whileHover={{ color: "#C8873A" }}
              className="font-sans text-[10px] tracking-widest uppercase cursor-pointer"
              style={{ color: "rgba(245,236,216,0.28)", transition: "color 0.3s" }}>
              Reserve →
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}