'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Layers, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Layers,
};

interface PillarCardProps {
    title: string;
    description: string;
    iconName: string;
    index: number;
}

export default function PillarCard({ title, description, iconName, index }: PillarCardProps) {
    const Icon = iconMap[iconName] || Target;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
        >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-nexure-blue/10 flex items-center justify-center mb-6 group-hover:bg-nexure-blue/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-nexure-blue" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

            {/* Description */}
            <p className="text-nexure-gray text-sm leading-relaxed max-w-xs mx-auto">
                {description}
            </p>
        </motion.div>
    );
}
