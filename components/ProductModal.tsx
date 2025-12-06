'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        title: string;
        tagline: string;
        description: string;
        features: string[];
        status: string;
        href: string;
        ctaText: string;
    } | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 z-50"
                    >
                        <div className="glass-card rounded-2xl p-8 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-nexure-gray hover:text-white transition-colors p-2"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <span className="text-nexure-blue text-sm font-semibold uppercase tracking-wider">
                                    {product.status}
                                </span>
                                <h2 className="text-2xl font-bold text-white mt-2">{product.title}</h2>
                                <p className="text-nexure-blue font-medium">{product.tagline}</p>
                            </div>

                            {/* Description */}
                            <p className="text-nexure-gray leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="mb-8">
                                <h3 className="text-white font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-nexure-gray text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-nexure-blue" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <a
                                href={product.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                {product.ctaText}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
