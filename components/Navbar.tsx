'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/nexure-icon.svg"
                        alt="Nexure"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                    />
                    <span className="text-white font-semibold text-xl tracking-tight">Nexure</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-nexure-gray hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/products"
                        className="btn-secondary text-sm py-2 px-4"
                    >
                        Explore Tools
                    </Link>
                    <Link
                        href="/contact"
                        className="btn-primary text-sm py-2 px-4"
                    >
                        Work With Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-white hover:text-nexure-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-white/10 my-2" />
                        <Link
                            href="/products"
                            className="btn-secondary text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Explore Tools
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-primary text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Work With Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
