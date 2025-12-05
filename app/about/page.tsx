'use client';

import Navbar from '@/components/Navbar';
import { Shield, Users, Heart } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
    return (
        <main className="min-h-screen bg-[#050a0e] text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    <TextReveal text="THE ZOOKEEPERS" className="text-4xl md:text-6xl font-bold mb-6 text-zoo-secondary" />
                    <ScrollReveal delay={0.3}>
                        <p className="text-xl text-gray-400">
                            Dedicated to preserving digital excellence and nurturing the next generation of SaaS.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <ScrollReveal delay={0.5} className="h-full">
                        <div className="glass-panel p-8 rounded-2xl text-center hover:border-zoo-primary/50 transition-colors h-full hover:-translate-y-1 duration-300">
                            <div className="w-16 h-16 bg-zoo-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-zoo-primary">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Protection</h3>
                            <p className="text-gray-400 text-sm">Ensuring the safety and stability of our digital habitats.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.7} className="h-full">
                        <div className="glass-panel p-8 rounded-2xl text-center hover:border-zoo-secondary/50 transition-colors h-full hover:-translate-y-1 duration-300">
                            <div className="w-16 h-16 bg-zoo-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-zoo-secondary">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p className="text-gray-400 text-sm">Building a thriving ecosystem for users and developers.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.9} className="h-full">
                        <div className="glass-panel p-8 rounded-2xl text-center hover:border-zoo-accent/50 transition-colors h-full hover:-translate-y-1 duration-300">
                            <div className="w-16 h-16 bg-zoo-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-zoo-accent">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Passion</h3>
                            <p className="text-gray-400 text-sm">Driven by a love for technology and innovation.</p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={1.1}>
                    <div className="glass-panel p-10 rounded-3xl border-zoo-primary/20">
                        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed text-center text-lg">
                            At Nexure LLC, we believe that every software product is a living entity that needs care, attention, and the right environment to thrive.
                            Our "Zoo" is a collection of carefully crafted SaaS solutions, each designed to solve specific problems with animalistic precision and instinct.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
