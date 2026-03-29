"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home",    href: "/" },
  { name: "Menu",    href: "/menu" },
  { name: "Order",   href: "/order-now" },
  { name: "Social",  href: "/social-media" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{ paddingTop: scrolled ? "8px" : "14px" }}
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-10">
        {/* ── Main bar ── */}
        <div
          className="flex items-center justify-between px-6 md:px-10 rounded-2xl transition-all duration-500"
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            background: scrolled
              ? "rgba(10,5,2,0.92)"
              : "rgba(10,5,2,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(245,236,216,0.06)",
            boxShadow: scrolled ? "0 8px 50px rgba(0,0,0,0.6)" : "none",
          }}
        >
          {/* LEFT — hamburger */}
          <div className="relative group flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="flex flex-col gap-[5px] w-9 h-9 justify-center items-start focus:outline-none"
            >
              {[22, 14, 18].map((w, i) => (
                <motion.span
                  key={i}
                  className="block rounded-full"
                  style={{ height: "1px", background: "rgba(245,236,216,0.7)" }}
                  animate={{
                    width: i === 1 && menuOpen ? 0 : w,
                    rotate: i === 0 && menuOpen ? 45 : i === 2 && menuOpen ? -45 : 0,
                    y: i === 0 && menuOpen ? 6 : i === 2 && menuOpen ? -6 : 0,
                    opacity: i === 1 && menuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.24 }}
                />
              ))}
            </button>

            {/* Desktop hover nav */}
            <div className="hidden md:block absolute top-full left-0 pt-5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-250 z-50">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  minWidth: 200,
                  background: "rgba(10,5,2,0.97)",
                  border: "1px solid rgba(200,135,58,0.14)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
                }}
              >
                <ul className="py-3">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-6 py-2.5 font-sans text-xs tracking-[0.18em] uppercase transition-all duration-200 hover:bg-white/[0.03]"
                        style={{ color: "rgba(245,236,216,0.45)" }}
                      >
                        <motion.span
                          className="block h-px"
                          style={{ width: 0, background: "#C8873A" }}
                          whileHover={{ width: 16 }}
                          transition={{ duration: 0.25 }}
                        />
                        <span className="hover:text-[#F5ECD8] transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className="px-6 py-4 flex gap-4"
                  style={{ borderTop: "1px solid rgba(245,236,216,0.05)" }}
                >
                  <Instagram className="w-3.5 h-3.5 cursor-pointer transition-colors hover:text-[#C8873A]"
                    style={{ color: "rgba(245,236,216,0.3)" }} />
                  <Facebook className="w-3.5 h-3.5 cursor-pointer transition-colors hover:text-[#C8873A]"
                    style={{ color: "rgba(245,236,216,0.3)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER — brand */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none gap-1"
          >
            {/* Top decorative line with diamond */}
            <div className="flex items-center gap-2 w-full justify-center mb-0.5">
              <div className="h-px w-8 md:w-14" style={{ background: "rgba(200,135,58,0.35)" }} />
              <div
                className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
                style={{ background: "#C8873A", opacity: 0.7 }}
              />
              <div className="h-px w-8 md:w-14" style={{ background: "rgba(200,135,58,0.35)" }} />
            </div>

            {/* Brand name */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-cursive whitespace-nowrap"
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)",
                color: "#F5ECD8",
                textShadow: "0 2px 20px rgba(200,135,58,0.3)",
                letterSpacing: "0.04em",
              }}
            >
              Pizza Galeria
            </motion.span>

            {/* Tagline */}
            <span
              className="font-sans uppercase tracking-[0.32em]"
              style={{ fontSize: 8, color: "rgba(200,135,58,0.5)" }}
            >
              Ristorante Napoletano
            </span>

            {/* Bottom decorative line */}
            <div className="flex items-center gap-2 w-full justify-center mt-0.5">
              <div className="h-px w-8 md:w-14" style={{ background: "rgba(200,135,58,0.2)" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "rgba(200,135,58,0.4)" }} />
              <div className="h-px w-8 md:w-14" style={{ background: "rgba(200,135,58,0.2)" }} />
            </div>
          </Link>

          {/* RIGHT — reserve button */}
          <Link href="/contact-us" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.04, borderColor: "rgba(200,135,58,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex items-center gap-2 rounded-full font-sans text-[11px] tracking-widest uppercase cursor-pointer px-5 py-2.5 transition-colors duration-300"
              style={{
                border: "1px solid rgba(200,135,58,0.28)",
                color: "rgba(200,135,58,0.75)",
              }}
            >
              Reserve a Table
            </motion.div>
            {/* Mobile: icon only */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full"
              style={{ border: "1px solid rgba(200,135,58,0.28)" }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "rgba(200,135,58,0.7)" }} />
            </motion.div>
          </Link>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(10,5,2,0.97)",
                  border: "1px solid rgba(200,135,58,0.12)",
                  backdropFilter: "blur(24px)",
                }}
              >
                <ul className="space-y-4 mb-7">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className="font-serif text-xl transition-colors hover:text-[#C8873A]"
                        style={{ color: "#F5ECD8" }}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div
                  className="pt-5 grid grid-cols-2 gap-4"
                  style={{ borderTop: "1px solid rgba(245,236,216,0.06)" }}
                >
                  <div className="space-y-2">
                    <p className="font-sans text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,135,58,0.4)" }}>Call Us</p>
                    <div className="flex items-center gap-2" style={{ color: "#F5ECD8", fontSize: 13 }}>
                      <Phone className="w-3 h-3" style={{ color: "#C8873A" }} />
                      <span className="font-sans italic">+91 98765 43210</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-sans text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,135,58,0.4)" }}>Location</p>
                    <div className="flex items-center gap-2" style={{ color: "#F5ECD8", fontSize: 12 }}>
                      <MapPin className="w-3 h-3" style={{ color: "#C8873A" }} />
                      <span className="font-sans">Connaught Place</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
