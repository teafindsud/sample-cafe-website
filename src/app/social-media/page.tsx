"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, Camera } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
};

export default function SocialMediaPage() {
    const socials = [
        { name: "Instagram", icon: Instagram, color: "group-hover:text-white group-hover:bg-[#E1306C]", handle: "@pizzagaleria" },
        { name: "Facebook", icon: Facebook, color: "group-hover:text-white group-hover:bg-[#4267B2]", handle: "/pizzagaleria.official" },
        { name: "Twitter / X", icon: Twitter, color: "group-hover:text-white group-hover:bg-[#1DA1F2]", handle: "@pizzagaleria" },
        { name: "YouTube", icon: Youtube, color: "group-hover:text-white group-hover:bg-[#FF0000]", handle: "PizzaGaleriaTV" },
    ];

    const feedPosts = [
        "/images/menu-hero-flatlay-user.jpg",
        "/images/menu-hero-pizza.png",
        "/images/menu-garlic-bread.png",
        "/images/menu-sandwich.png",
        "/images/menu-pasta.png",
        "/images/menu-sides.png"
    ];

    return (
        <main className="min-h-screen bg-[#FFFBF7] pt-32 pb-24 overflow-hidden relative">
            <style jsx global>{`
                .light-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .light-scrollbar::-webkit-scrollbar-track {
                    background: rgba(232, 213, 196, 0.2);
                    border-radius: 10px;
                }
                .light-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(212, 175, 55, 0.4);
                    border-radius: 10px;
                }
                .light-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(212, 175, 55, 0.7);
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                    <span className="text-[#D4AF37] tracking-[0.3em] font-sans font-bold uppercase text-xs block mb-4">Community</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-none mb-6 text-[#2A1410]">
                        Join The <em className="italic text-[#E63946]">Family</em>
                    </h1>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />
                    <p className="text-[#5C4A44] font-sans text-lg max-w-2xl mx-auto mb-16">
                        Stay updated with our latest creations, behind-the-scenes kitchen action, and exclusive offers. Share your moments with #PizzaGaleria!
                    </p>
                </motion.div>

                {/* Animated 3D Floating Stats */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20"
                >
                    {[
                        { label: "Followers", val: "50K+" },
                        { label: "Pizzas Served", val: "100K+" },
                        { label: "Happy Customers", val: "99%" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white border border-[#E8D5C4] px-8 py-6 rounded-2xl shadow-[0_10px_30px_rgba(42,20,16,0.05)] w-40 md:w-48 transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="font-serif text-3xl md:text-4xl text-[#E63946] mb-2">{stat.val}</h3>
                            <p className="text-[#5C4A44] font-sans text-[10px] md:text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {socials.map((social, idx) => (
                        <motion.a
                            href="#"
                            key={social.name}
                            initial="hidden" animate="visible" variants={fadeUp} custom={idx + 2}
                            className={`group bg-white p-8 rounded-3xl border border-[#E8D5C4] shadow-sm hover:shadow-[0_20px_40px_rgba(42,20,16,0.08)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative`}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-current pointer-events-none" />
                            <div className={`w-16 h-16 mx-auto rounded-full bg-[#FDF8F3] flex items-center justify-center mb-6 transition-colors duration-500 ${social.color}`}>
                                <social.icon className="w-8 h-8 text-[#2A1410] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="font-serif text-xl text-[#2A1410] mb-2">{social.name}</h3>
                            <p className="font-sans text-sm text-[#5C4A44]">{social.handle}</p>
                        </motion.a>
                    ))}
                </div>

                {/* 3D "Instagram Feed" Carousel Simulation */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5} className="mt-10">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Camera className="w-6 h-6 text-[#2A1410]" />
                        <h2 className="text-3xl font-serif text-[#2A1410]">Latest on Instagram</h2>
                    </div>
                    
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-10 px-4 light-scrollbar snap-x" style={{ perspective: 1000 }}>
                        {feedPosts.map((imgSrc, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                                className="snap-center relative w-64 md:w-80 aspect-[4/5] md:aspect-square flex-shrink-0 bg-white rounded-2xl shadow-md border border-[#E8D5C4] overflow-hidden group cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <Image src={imgSrc} alt={`Instagram post ${i+1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                
                                {/* Overlay hover effect */}
                                <div className="absolute inset-0 bg-[#2A1410]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-white text-center">
                                    <Instagram className="w-10 h-10 mb-4 text-[#D4AF37]" />
                                    <p className="font-sans text-xs opacity-90">View on Instagram</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
