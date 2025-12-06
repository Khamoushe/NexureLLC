'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Send, Mail, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                    email: formState.email,
                    message: `Subject: ${formState.subject}\n\n${formState.message}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-nexure-navy">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-4">
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's <span className="text-gradient-blue">talk.</span>
                    </h1>
                    <p className="text-nexure-gray text-lg max-w-2xl mx-auto">
                        Have a project in mind? Need a custom solution? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                            <p className="text-nexure-gray mb-8 leading-relaxed">
                                Whether you're interested in our products, need a custom automation solution,
                                or just want to say hello — we're here to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-nexure-blue/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-nexure-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Email</h3>
                                        <a href="mailto:contact@nexure.org" className="text-nexure-gray hover:text-nexure-blue transition-colors">
                                            contact@nexure.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-nexure-blue/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-nexure-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Location</h3>
                                        <p className="text-nexure-gray">Wyoming, USA</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-nexure-blue/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-nexure-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Response Time</h3>
                                        <p className="text-nexure-gray">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card rounded-2xl p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message sent!</h3>
                                    <p className="text-nexure-gray">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && (
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                            <p className="text-red-400 text-sm">{error}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-white font-medium mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                required
                                                value={formState.firstName}
                                                onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-nexure-gray focus:outline-none focus:border-nexure-blue transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-white font-medium mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                required
                                                value={formState.lastName}
                                                onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-nexure-gray focus:outline-none focus:border-nexure-blue transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-nexure-gray focus:outline-none focus:border-nexure-blue transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-white font-medium mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            required
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nexure-blue transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-nexure-navy">Select a topic</option>
                                            <option value="Product Inquiry" className="bg-nexure-navy">Product Inquiry</option>
                                            <option value="Custom Service" className="bg-nexure-navy">Custom Service</option>
                                            <option value="Partnership" className="bg-nexure-navy">Partnership</option>
                                            <option value="Other" className="bg-nexure-navy">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-white font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-nexure-gray focus:outline-none focus:border-nexure-blue transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
