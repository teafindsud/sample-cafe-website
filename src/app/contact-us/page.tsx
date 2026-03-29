"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
    }),
};

export default function ContactPage() {
    const contactInfo = [
        { icon: MapPin, title: "Our Location", content: "123 Artisan Valley,\nFood District, FD 40001", details: "Get Directions" },
        { icon: Phone, title: "Call Us", content: "+91 98765 43210\n+91 98765 43211", details: "We take reservations" },
        { icon: Mail, title: "Email & Press", content: "hello@pizzagaleria.com\npress@pizzagaleria.com", details: "Reply within 24hrs" },
        { icon: Clock, title: "Operating Hours", content: "Mon-Sun: 11:00 AM - 11:00 PM\nLate night delivery available", details: "Open 7 Days" },
    ];

    const faqs = [
        { q: "Do you offer vegan or gluten-free options?", a: "Yes, we offer gluten-free crusts and a delicious range of vegan cheese for most of our pizzas." },
        { q: "Can I book a table for a large group?", a: "Absolutely! For groups larger than 8, please give us a call 24 hours in advance to secure your spot." },
        { q: "Do you deliver to my area?", a: "We deliver within a 10km radius to ensure your pizza arrives piping hot. Check our map for specific zones." }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-[#FDF8F3] pt-32 pb-24 overflow-hidden relative text-[#2A1410]">
            {/* Background elements */}
            <div className="absolute top-[20%] left-0 w-1/3 h-[60vh] bg-[#FFFBF7] rounded-tr-[100px] z-0 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
                    {/* LEFT Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                            <span className="text-[#D4AF37] tracking-[0.3em] font-sans font-bold uppercase text-xs block mb-4">We are open</span>
                            <h1 className="text-5xl md:text-7xl font-serif leading-none mb-6 text-[#2A1410]">
                                Get In <em className="italic text-[#E63946]">Touch</em>
                            </h1>
                            <div className="w-16 h-1 bg-[#D4AF37] mb-8" />
                            <p className="text-[#5C4A44] font-sans text-lg mb-10 leading-relaxed max-w-lg">
                                Whether you have a question about our ingredients, want to make a reservation, or simply want to say hello, we're here for you.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {contactInfo.map((info, idx) => (
                                <motion.div key={idx} initial="hidden" animate="visible" variants={fadeUp} custom={idx + 1}
                                    className="bg-white border border-[#E8D5C4] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <info.icon className="w-8 h-8 text-[#D4AF37] mb-4" />
                                    <h3 className="font-serif text-xl mb-2">{info.title}</h3>
                                    <p className="font-sans text-[#5C4A44] leading-relaxed whitespace-pre-line text-sm mb-4">{info.content}</p>
                                    <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#E63946]">{info.details}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}>
                            <Link href="/send-message">
                                <button className="bg-[#2A1410] text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center">
                                    Send Us A Message <Mail className="w-4 h-4" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT Content (3D Element and image) */}
                    <div className="w-full lg:w-1/2">
                        {/* 3D Visual Map Marker */}
                        <motion.div 
                            initial="hidden" animate="visible" variants={fadeUp} custom={2}
                            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(42,20,16,0.15)] bg-white border border-[#E8D5C4] p-2"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1E0F0A]">
                                {/* 3D Hover container */}
                                <motion.div 
                                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 cursor-pointer"
                                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                                >
                                    <Image src="/images/menu-hero-flatlay-user.jpg" alt="Restaurant Interior" fill className="object-cover opacity-80" />
                                    
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <div className="bg-white p-4 rounded-full shadow-2xl z-10">
                                            <MapPin className="w-10 h-10 text-[#E63946]" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mt-16">
                            <h3 className="text-3xl font-serif mb-8 text-[#2A1410]">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white border border-[#E8D5C4] rounded-2xl overflow-hidden transition-all duration-300">
                                        <button 
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex justify-between items-center p-6 text-left"
                                        >
                                            <span className="font-serif text-lg font-bold text-[#2A1410] pr-4">{faq.q}</span>
                                            <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === idx && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                    className="px-6 pb-6 text-[#5C4A44] font-sans leading-relaxed text-sm"
                                                >
                                                    {faq.a}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
