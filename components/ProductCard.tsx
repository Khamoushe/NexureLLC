'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Sparkles, Brain, Workflow, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    BarChart3,
    Sparkles,
    Brain,
    Workflow,
};

interface ProductCardProps {
    title: string;
    tagline: string;
    description: string;
    iconName: string;
    ctaText: string;
    onClick: () => void;
}

export default function ProductCard({ title, tagline, description, iconName, ctaText, onClick }: ProductCardProps) {
    const Icon = iconMap[iconName] || BarChart3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
            className="glass-card rounded-2xl p-8 transition-all duration-300 group cursor-pointer"
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-nexure-blue/10 flex items-center justify-center mb-6 group-hover:bg-nexure-blue/20 transition-colors">
                <Icon className="w-7 h-7 text-nexure-blue" />
            </div>

            {/* Title & Tagline */}
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-nexure-blue text-sm font-medium mb-4">{tagline}</p>

            {/* Description */}
            <p className="text-nexure-gray text-sm leading-relaxed mb-6">
                {description}
            </p>

            {/* CTA */}
            <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:text-nexure-blue transition-colors">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
        </motion.div>
    );
}
