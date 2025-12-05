'use client';

import Navbar from '@/components/Navbar';
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to send');

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-[#050a0e] text-white relative overflow-hidden">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zoo-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <TextReveal text="RANGER STATION" className="text-5xl font-bold mb-6 text-zoo-primary" />
                    <ScrollReveal delay={0.3}>
                        <p className="text-xl text-gray-400 mb-8">
                            Have a question about our habitats? Want to report a sighting?
                            Our rangers are ready to assist you.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal delay={0.5}>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zoo-secondary">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="text-lg font-medium">contact.nexure.org</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.7}>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zoo-secondary">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">HQ Location</p>
                                    <p className="text-lg font-medium">Digital Wilderness</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <ScrollReveal delay={0.5}>
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                        {status === 'success' ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050a0e]/90 backdrop-blur-md z-10 text-center p-6">
                                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Transmission Sent!</h3>
                                <p className="text-gray-400 mb-6">Our rangers will respond shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="bg-zoo-primary hover:bg-zoo-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-zoo-secondary transition-colors resize-none"
                                    placeholder="Tell us about your inquiry..."
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                                    <AlertCircle size={16} />
                                    <span>Failed to send transmission. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-zoo-primary hover:bg-zoo-primary/90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-zoo-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" /> SENDING...
                                    </>
                                ) : (
                                    'SEND TRANSMISSION'
                                )}
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
