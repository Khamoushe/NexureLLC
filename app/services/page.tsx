import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Workflow, Bot, Database, LineChart, Blocks, ArrowRight, Check } from 'lucide-react';

export const metadata = {
    title: 'Services — Nexure LLC',
    description: 'Custom AI workflows, automations, dashboards, and business systems for professionals.',
};

const services = [
    {
        icon: Workflow,
        title: 'Custom Automations',
        description: 'Automate repetitive tasks and workflows. We build systems that run 24/7 so you can focus on growth.',
    },
    {
        icon: Bot,
        title: 'AI Integrations',
        description: 'Add AI capabilities to your existing tools. From chatbots to content generation, we integrate it all.',
    },
    {
        icon: Database,
        title: 'Data Systems',
        description: 'Build robust data pipelines and management systems. Collect, process, and visualize your data.',
    },
    {
        icon: LineChart,
        title: 'Analytics Dashboards',
        description: 'Custom dashboards that give you real-time insights into your business metrics.',
    },
    {
        icon: Blocks,
        title: 'API Development',
        description: 'Build custom APIs to connect your systems, enable integrations, and power your products.',
    },
];

const process = [
    {
        step: '01',
        title: 'Discovery',
        description: 'We discuss your needs, challenges, and goals to understand exactly what you need.',
    },
    {
        step: '02',
        title: 'Proposal',
        description: 'You receive a clear proposal with scope, timeline, and pricing. No surprises.',
    },
    {
        step: '03',
        title: 'Build',
        description: 'We build your solution with regular updates and feedback loops throughout.',
    },
    {
        step: '04',
        title: 'Launch',
        description: 'We deploy, test, and hand over complete documentation for your new system.',
    },
];

const benefits = [
    'Tailored solutions for your specific needs',
    'Direct communication with developers',
    'Fast turnaround times',
    'Ongoing support available',
    'Transparent pricing',
    'Modern tech stack',
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-nexure-navy">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-4">
                        Services
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Custom solutions.{' '}
                        <span className="text-gradient-blue">Real results.</span>
                    </h1>
                    <p className="text-nexure-gray text-lg max-w-2xl mx-auto mb-8">
                        We build custom AI workflows, automations, dashboards, and business systems for professionals who need more than off-the-shelf tools.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Start a Project
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we build</h2>
                        <p className="text-nexure-gray text-lg">Systems tailored to your business needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div key={service.title} className="glass-card rounded-2xl p-8 group">
                                <div className="w-12 h-12 rounded-xl bg-nexure-blue/10 flex items-center justify-center mb-6 group-hover:bg-nexure-blue/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-nexure-blue" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-nexure-gray text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-gradient-section">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
                        <p className="text-nexure-gray text-lg">A simple, transparent process from start to finish.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item) => (
                            <div key={item.step} className="text-center">
                                <span className="text-5xl font-bold text-nexure-blue/20 block mb-4">{item.step}</span>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-nexure-gray text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits + CTA */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why work with Nexure?
                            </h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3 text-nexure-gray">
                                        <Check className="w-5 h-5 text-nexure-blue flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card rounded-2xl p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to start?</h3>
                            <p className="text-nexure-gray mb-6">
                                Tell us about your project and we'll get back to you within 24 hours with a plan.
                            </p>
                            <Link href="/contact" className="btn-primary w-full text-center block">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
