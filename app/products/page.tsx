import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { BarChart3, Sparkles, Brain, ArrowRight, Check } from 'lucide-react';

export const metadata = {
    title: 'Products — Nexure LLC',
    description: 'Explore AI-powered tools for Shopify intelligence, content creation, and predictive analytics.',
};

const products = [
    {
        id: 'ogmax',
        title: 'OGmax',
        tagline: 'Shopify Intelligence',
        icon: BarChart3,
        description: 'Track effortlessly. OGmax monitors new product releases across your selected Shopify stores and sends real-time alerts directly to your inbox or dashboard.',
        features: [
            'Monitor unlimited Shopify stores',
            'Real-time product drop alerts',
            'Price tracking and history',
            'Competitor intelligence',
            'Custom alert filters',
            'API access for developers',
        ],
        status: 'Available Now',
        cta: 'Get Started',
        href: '#',
    },
    {
        id: 'antprompt',
        title: 'AntPrompt',
        tagline: 'AI Product Page Creator',
        icon: Sparkles,
        description: 'Generate perfect, high-converting product pages powered by AI trained specifically for e-commerce. Write better copy in seconds, not hours.',
        features: [
            'AI-generated product descriptions',
            'SEO-optimized content',
            'Multiple tone options',
            'Bulk generation support',
            'Integration with major platforms',
            'A/B testing suggestions',
        ],
        status: 'Coming Soon',
        cta: 'Join Waitlist',
        href: '#',
    },
    {
        id: 'pronoplus',
        title: 'PronoPlus',
        tagline: 'Predictive Intelligence',
        icon: Brain,
        description: 'AI-powered prediction engine designed for insights, validation, and decision-making. Get data-driven answers to your toughest business questions.',
        features: [
            'Trend prediction models',
            'Market analysis tools',
            'Decision validation system',
            'Historical data insights',
            'Custom prediction training',
            'Real-time analytics dashboard',
        ],
        status: 'In Development',
        cta: 'Learn More',
        href: '#',
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-nexure-navy">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-4">
                        Our Products
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Tools built for <span className="text-gradient-blue">results.</span>
                    </h1>
                    <p className="text-nexure-gray text-lg max-w-2xl mx-auto">
                        Every product we build has one purpose: help you work faster, smarter, and more profitably.
                    </p>
                </div>
            </section>

            {/* Products Detail */}
            {products.map((product, idx) => (
                <section
                    key={product.id}
                    id={product.id}
                    className={`section-padding ${idx % 2 === 1 ? 'bg-gradient-section' : ''}`}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-nexure-blue/10 flex items-center justify-center">
                                        <product.icon className="w-7 h-7 text-nexure-blue" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                                        <p className="text-nexure-blue font-medium">{product.tagline}</p>
                                    </div>
                                </div>

                                <p className="text-nexure-gray text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-nexure-gray">
                                            <Check className="w-5 h-5 text-nexure-blue flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-4">
                                    <Link href={product.href} className="btn-primary inline-flex items-center gap-2">
                                        {product.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <span className="text-nexure-gray text-sm">{product.status}</span>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="glass-card rounded-2xl aspect-square flex items-center justify-center">
                                    <product.icon className="w-32 h-32 text-nexure-blue/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-nexure-blue/10 to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Need something custom?
                            </h2>
                            <p className="text-nexure-gray text-lg mb-8">
                                We build tailored solutions for businesses with specific needs.
                            </p>
                            <Link href="/services" className="btn-primary">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
