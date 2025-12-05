'use client';

import { motion } from 'framer-motion';

export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050a0e]">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[50%] -left-[10%] w-[70%] h-[70%] bg-zoo-primary/10 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 5, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-zoo-secondary/5 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-zoo-accent/5 rounded-full blur-[120px] mix-blend-screen"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>
        </div>
    );
}
