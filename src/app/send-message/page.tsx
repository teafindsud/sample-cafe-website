"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, Heart, CornerDownRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
};

export default function SendMessagePage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setName("");
        setMessage("");
        setIsSent(true);

        setTimeout(() => {
            setIsSent(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-[#FFFBF7] pt-32 pb-24 overflow-hidden relative text-[#2A1410]">
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                
                {/* Left Side Visual / 3D Layout */}
                <div className="w-full lg:w-1/2 relative perspective-1000 hidden lg:block">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10 lg:mb-0">
                        <div className="relative w-full aspect-square rounded-full flex items-center justify-center">
                            
                            {/* Decorative rotating dotted ring */}
                            <motion.div 
                                className="absolute inset-4 border border-dashed border-[#D4AF37]/40 rounded-full"
                                animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* 3D Floating elements */}
                            <motion.div 
                                animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 left-0 bg-white shadow-[0_15px_40px_rgba(42,20,16,0.1)] rounded-2xl p-6 border border-[#E8D5C4] z-20"
                            >
                                <MessageSquare className="w-8 h-8 text-[#E63946] mb-2" />
                                <p className="font-serif text-lg">Leave a note</p>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [15, -15, 15], rotateZ: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 right-0 bg-[#2A1410] shadow-[0_15px_40px_rgba(42,20,16,0.15)] rounded-2xl p-6 z-20 text-white"
                            >
                                <Heart className="w-8 h-8 text-[#D4AF37] mb-2" />
                                <p className="font-serif text-lg">Feedback & Love</p>
                            </motion.div>

                            {/* Center Image */}
                            <motion.div 
                                className="relative w-2/3 aspect-square rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(42,20,16,0.1)] border-8 border-white z-10"
                                whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
                            >
                                <Image src="/images/menu-hero-flatlay-user.jpg" alt="Chef preparing pizza" fill className="object-cover" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <div className="w-full lg:w-1/2">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10 text-center lg:text-left">
                        <span className="text-[#D4AF37] tracking-[0.3em] font-sans font-bold uppercase text-xs block mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <CornerDownRight className="w-4 h-4" /> Reach Out
                        </span>
                        
                        <h1 className="text-5xl md:text-7xl font-serif leading-none mb-6">
                            Send a <em className="italic text-[#E63946]">Message</em>
                        </h1>

                        <div className="w-16 h-1 bg-[#D4AF37] mx-auto lg:mx-0 mb-8" />
                        
                        <p className="text-[#5C4A44] font-sans text-lg max-w-lg mx-auto lg:mx-0">
                            Tell us what you loved, or what we can do better. We value your thoughts, making your next slice even better!
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="relative">
                        <AnimatePresence>
                            {isSent && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    className="absolute inset-0 z-30 flex items-center justify-center bg-white/95 rounded-3xl border border-[#E8D5C4] shadow-xl backdrop-blur-sm"
                                >
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-[#FDF8F3] rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-[#2A1410]" />
                                        </div>
                                        <h3 className="text-4xl font-serif text-[#2A1410] mb-3">Grazie!</h3>
                                        <p className="text-[#5C4A44] font-sans">Your message has been sent.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form 
                            onSubmit={handleSubmit} 
                            className="bg-white border border-[#E8D5C4] rounded-3xl p-8 md:p-12 shadow-[0_15px_40px_rgba(42,20,16,0.03)] relative overflow-hidden"
                        >
                            <div className="space-y-8 relative z-10 w-full flex flex-col">
                                <div className="w-full">
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[#5C4A44] font-bold mb-2">Your Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full bg-[#FDF8F3] border-b-2 border-transparent text-[#2A1410] placeholder-[#2A1410]/30 font-serif text-xl py-4 px-5 rounded-t-xl outline-none focus:border-[#D4AF37] focus:bg-[#FFFBF7] transition-all"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[#5C4A44] font-bold mb-2">Message</label>
                                    <textarea 
                                        placeholder="Type your message here..." 
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full bg-[#FDF8F3] border-b-2 border-transparent text-[#2A1410] placeholder-[#2A1410]/30 font-serif text-xl py-4 px-5 rounded-t-xl outline-none focus:border-[#D4AF37] focus:bg-[#FFFBF7] transition-all resize-none"
                                    />
                                </div>
                                
                                <motion.div className="pt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <button type="submit" className="w-full px-8 py-5 rounded-xl font-sans font-bold uppercase tracking-widest text-white text-sm bg-[#E63946] shadow-[0_8px_30px_rgba(230,57,70,0.2)] hover:shadow-[0_12px_40px_rgba(230,57,70,0.3)] hover:bg-[#D52A38] transition-all duration-300">
                                        <span className="flex items-center justify-center gap-3">
                                            Send Message <Send className="w-4 h-4" />
                                        </span>
                                    </button>
                                </motion.div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
