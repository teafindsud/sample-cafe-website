"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { StylizedText } from "./SectionDivider";

const FEATURES = [
    {
        id: 1,
        title: "Wood-Fired Oven",
        description: "Our ovens are kept at a constant 450°C, ensuring a perfectly charred crust and tender base in under 90 seconds.",
        image: "/images/oven.png",
        position: "left",
    },
    {
        id: 2,
        title: "Fresh Local Ingredients",
        description: "We source our flour from Campania and our tomatoes from the slopes of Vesuvius, paired with local artisan cheeses.",
        image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&q=80&w=800",
        position: "right",
    },
    {
        id: 3,
        title: "Hand-Stretched Dough",
        description: "Naturally leavened for 48 hours, each dough is hand-stretched to ensure a light, airy cornicione every time.",
        image: "/images/dough.png",
        position: "left",
    },
    {
        id: 4,
        title: "Authentic Italian Craft",
        description: "Following the traditions passed down through generations, we treat every pizza as a masterpiece.",
        image: "/images/craft.png",
        position: "right",
    }
];

export default function FeatureSection() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-48 px-8 md:px-24 bg-[#FEF6EC] overflow-hidden">

        <div className="relative z-10 mx-auto max-w-7xl">

            {/* ── Section heading ── */}
            <motion.div
                className="text-center mb-20 md:mb-28"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="font-sans uppercase text-[11px] tracking-[0.28em] block mb-3"
                    style={{ color: "#C8873A" }}>
                    The Craft
                </span>
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#2A1410] leading-[1.05] mb-5"
                    style={{ letterSpacing: "-0.02em" }}>
                    Behind Every Slice
                </h2>
                <div className="mx-auto mb-5"
                    style={{ width: 52, height: 1, background: "rgba(200,72,48,0.4)" }} />
                <p className="font-sans text-[#5C4A44] leading-relaxed mx-auto"
                    style={{ fontSize: "clamp(0.88rem,1.5vw,1rem)", maxWidth: 520, opacity: 0.72 }}>
                    Every detail is deliberate — from the grain of the flour to the char on the crust.
                    This is how we&apos;ve been doing it since Naples, 1987.
                </p>
            </motion.div>

            {/* Feature rows */}
            <div className="flex flex-col gap-24 md:gap-56">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${feature.position === "right" ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Feature Image */}
                            <div className="relative w-full md:w-1/2 h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/30">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Feature Text */}
                            <div className={`flex flex-col gap-2 w-full md:w-1/2 ${feature.position === "right" ? "md:items-end md:text-right" : "md:items-start"}`}>
                                <span className="text-[#C8873A] font-serif text-3xl italic opacity-50">0{idx + 1}</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-[#2A1410] leading-tight mt-2 mb-6">
                                    <StylizedText text={feature.title} />
                                </h3>
                                <p className="text-[#5C4A44] text-[0.9375rem] leading-[1.75] font-sans max-w-md">{feature.description}</p>
                                <div className={`h-0.5 w-20 bg-[#C84830] mt-5 rounded-full ${feature.position === "right" ? "ml-auto" : ""}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
