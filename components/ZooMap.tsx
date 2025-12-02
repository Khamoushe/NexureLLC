'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HABITATS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ZooMap() {
    const [isCardsVisible, setIsCardsVisible] = useState(true);

    return (
        <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] bg-[#0F172A]/50 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Central Hub / Entrance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCardsVisible(!isCardsVisible)}
                    className="relative cursor-pointer focus:outline-none"
                >
                    <div className="w-32 h-32 rounded-full bg-zoo-primary/20 border-2 border-zoo-primary blur-xl absolute inset-0 animate-pulse"></div>
                    <div className="relative z-10 bg-zoo-primary/90 text-white p-6 rounded-full shadow-[0_0_30px_rgba(26,77,46,0.6)] border border-zoo-accent/30">
                        <h2 className="text-2xl font-bold font-sans tracking-widest">NEXURE</h2>
                        <p className="text-xs text-zoo-accent uppercase tracking-wider mt-1">
                            {isCardsVisible ? 'Hide Habitats' : 'Show Habitats'}
                        </p>
                    </div>
                </motion.button>
            </div>

            {/* Habitats */}
            <AnimatePresence>
                {isCardsVisible && HABITATS.map((habitat, index) => {
                    const isCreation = habitat.status === 'In Creation';

                    return (
                        <motion.div
                            key={habitat.id}
                            className="absolute"
                            style={habitat.position as any}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -15, 0], // Floating animation
                            }}
                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.1 * index },
                                scale: { type: 'spring', stiffness: 100, delay: 0.1 * index },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5 // Stagger floating
                                }
                            }}
                        >
                            <Link href={habitat.link} className={`group block relative ${isCreation ? 'cursor-default' : ''}`} onClick={(e) => isCreation && e.preventDefault()}>
                                {/* Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${habitat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`}></div>

                                {/* Card */}
                                <div className="relative w-64 glass-panel p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border-white/5 hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    <div className={`flex items-center justify-between mb-4 ${isCreation ? 'blur-sm opacity-50' : ''}`}>
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${habitat.color} text-white shadow-lg`}>
                                            <habitat.icon size={24} />
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${habitat.status === 'Live' ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`}>
                                            {habitat.status}
                                        </span>
                                    </div>

                                    <h3 className={`text-xl font-bold text-white mb-1 group-hover:text-zoo-secondary transition-colors ${isCreation ? 'blur-sm opacity-50 select-none' : ''}`}>
                                        {habitat.name}
                                    </h3>

                                    {/* Animal Name - Always Readable */}
                                    <p className={`text-sm text-zoo-accent font-medium mb-2 ${isCreation ? 'text-base font-bold tracking-wider' : ''}`}>
                                        {habitat.animal}
                                    </p>

                                    <p className={`text-xs text-gray-400 line-clamp-2 mb-4 ${isCreation ? 'blur-sm opacity-50 select-none' : ''}`}>
                                        {habitat.description}
                                    </p>

                                    <div className={`flex items-center text-xs font-bold text-white/60 group-hover:text-white transition-colors ${isCreation ? 'blur-sm opacity-50 select-none' : ''}`}>
                                        VISIT HABITAT <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
