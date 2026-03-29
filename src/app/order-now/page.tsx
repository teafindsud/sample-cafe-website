"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShoppingBag, Clock, Star } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
};

const floating3D = {
    animate: {
        y: [0, -15, 0],
        rotateX: [0, 5, 0],
        rotateY: [0, -5, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function OrderNowPage() {
    return (
        <main className="min-h-screen bg-[#FDF8F3] pt-32 pb-24 overflow-hidden text-[#2A1410] relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#FFFBF7] rounded-bl-[100px] z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                
                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                        <span className="text-[#D4AF37] tracking-[0.3em] font-sans font-bold uppercase text-xs block mb-4">Fresh & Fast</span>
                        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-[#2A1410]">
                            Order Your <br />
                            <em className="italic text-[#E63946]">Favorite Pizza</em>
                        </h1>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-8" />
                        <p className="text-[#5C4A44] font-sans text-lg mb-10 leading-relaxed">
                            Experience the authentic taste of Napoli from the comfort of your home. 
                            Our bespoke online ordering experience is currently being crafted. Until then, dial in your cravings!
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="flex flex-col sm:flex-row gap-6">
                        <motion.a 
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            href="tel:+919876543210" 
                            className="flex justify-center items-center gap-3 bg-[#E63946] text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_rgba(230,57,70,0.3)] hover:shadow-[0_12px_40px_rgba(230,57,70,0.4)] transition-all"
                        >
                            <Phone className="w-4 h-4" /> Call: +91 98765 43210
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            href="/menu" 
                            className="flex justify-center items-center gap-3 bg-white border border-[#E8D5C4] text-[#2A1410] px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:border-[#D4AF37] shadow-sm transition-all"
                        >
                            View Menu <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mt-16 grid grid-cols-2 gap-8 border-t border-[#E8D5C4] pt-10">
                        <div>
                            <Clock className="w-8 h-8 text-[#D4AF37] mb-4" />
                            <h3 className="font-serif text-xl mb-2 text-[#2A1410]">Fast Delivery</h3>
                            <p className="text-[#5C4A44] text-sm">Hot and fresh in under 45 minutes to your doorstep.</p>
                        </div>
                        <div>
                            <Star className="w-8 h-8 text-[#D4AF37] mb-4" />
                            <h3 className="font-serif text-xl mb-2 text-[#2A1410]">Premium Quality</h3>
                            <p className="text-[#5C4A44] text-sm">100% authentic Italian ingredients and fresh dough.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right 3D Visual */}
                <div className="w-full lg:w-1/2 relative" style={{ perspective: 1000 }}>
                    <motion.div 
                        variants={floating3D} animate="animate"
                        className="relative w-full aspect-square max-w-[500px] mx-auto mt-10 lg:mt-0"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Pizza Image */}
                        <div className="absolute inset-0 rounded-full shadow-[0_40px_80px_rgba(42,20,16,0.15)] overflow-hidden border-[8px] border-white">
                            <Image src="/images/menu-hero-pizza.png" alt="Pizza" fill priority className="object-cover" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
                        </div>
                        
                        {/* Floating Badges */}
                        <motion.div 
                            animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white py-3 px-5 md:px-6 rounded-2xl shadow-[0_15px_30px_rgba(42,20,16,0.1)] border border-[#E8D5C4] flex items-center gap-3 z-20"
                            style={{ translateZ: 50 }}
                        >
                            <span className="text-2xl">🔥</span>
                            <div>
                                <p className="text-[10px] text-[#5C4A44] uppercase tracking-wider font-bold">Wood-Fired</p>
                                <p className="font-serif text-base md:text-lg text-[#2A1410]">900°C Oven</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white py-3 px-5 md:px-6 rounded-2xl shadow-[0_15px_30px_rgba(42,20,16,0.1)] border border-[#E8D5C4] flex items-center gap-3 z-20"
                            style={{ translateZ: 80 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#FFFBF7] flex items-center justify-center border border-[#E8D5C4]">
                                <ShoppingBag className="w-5 h-5 text-[#E63946]" />
                            </div>
                            <div>
                                <p className="text-[10px] text-[#5C4A44] uppercase tracking-wider font-bold">Packaging</p>
                                <p className="font-serif text-base md:text-lg text-[#2A1410]">Eco-Friendly</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
