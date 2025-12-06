import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'About — Nexure LLC',
    description: 'Learn about Nexure LLC and our mission to build AI-powered tools for digital entrepreneurs.',
};

const values = [
    {
        title: 'Precision',
        description: 'We build tools that give you exactly what you need. No bloat, no noise.',
    },
    {
        title: 'Speed',
        description: 'Time is your most valuable resource. We optimize for efficiency in everything we build.',
    },
    {
        title: 'Simplicity',
        description: 'Complex problems deserve elegant solutions. We remove friction, not add it.',
    },
    {
        title: 'Results',
        description: 'Every feature we ship should move the needle for your business.',
    },
];

const timeline = [
    {
        year: 'May 2025',
        title: 'Nexure Founded',
        description: 'Started with a vision to build smarter tools for digital entrepreneurs.',
    },
    {
        year: 'October 2025',
        title: 'OGmax Launch',
        description: 'Released our first product: Shopify intelligence for e-commerce businesses.',
    },
    {
        year: 'December 2025',
        title: 'Expanding the Suite',
        description: 'Building AntPrompt and PronoPlus for more fun.',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-nexure-navy">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-4">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Building the future of{' '}
                        <span className="text-gradient-blue">digital productivity.</span>
                    </h1>
                    <p className="text-nexure-gray text-lg max-w-2xl mx-auto">
                        Nexure LLC is a digital studio creating AI-powered SaaS products and custom solutions
                        for entrepreneurs, creators, and e-commerce businesses.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
                        <span className="text-nexure-blue text-sm font-semibold uppercase tracking-wider mb-4 block">
                            Our Mission
                        </span>
                        <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                            To empower digital entrepreneurs with intelligent tools that save time,
                            increase revenue, and eliminate complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="section-padding bg-gradient-section">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-nexure-blue to-blue-400 flex items-center justify-center">
                                <span className="text-white text-8xl font-bold">S</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-nexure-blue text-sm font-semibold uppercase tracking-wider mb-4 block">
                                The Founder
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simo</h2>
                            <p className="text-nexure-gray text-lg leading-relaxed mb-6">
                                Simo is a digital entrepreneur with years of experience in e-commerce,
                                automation, and product development. He founded Nexure LLC to help
                                businesses leverage AI and automation for smarter, faster growth.
                            </p>
                            <p className="text-nexure-gray leading-relaxed">
                                With a background in building systems that scale, Simo leads the development
                                of Nexure's product suite and works directly with clients on custom solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
                        <p className="text-nexure-gray text-lg">The principles that guide everything we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="glass-card rounded-2xl p-8">
                                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                <p className="text-nexure-gray">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-gradient-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-nexure-blue/20 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-nexure-blue" />
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-px flex-1 bg-nexure-blue/20 mt-2" />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <span className="text-nexure-blue text-sm font-semibold">{item.year}</span>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-nexure-gray">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-nexure-blue/10 to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Want to work together?
                            </h2>
                            <p className="text-nexure-gray text-lg mb-8">
                                We're always excited to hear about new projects and opportunities.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
