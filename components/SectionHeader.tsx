'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-16 ${centered ? 'text-center' : ''}`}
        >
            {label && (
                <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-4">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-nexure-gray text-lg max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
