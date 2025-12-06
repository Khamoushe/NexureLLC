'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import PillarCard from '@/components/PillarCard';
import FAQItem from '@/components/FAQItem';
import Link from 'next/link';

const products = [
  {
    title: 'OGmax',
    tagline: 'Shopify Intelligence',
    description: 'Track effortlessly. OGmax monitors new product releases across your selected Shopify stores and sends real-time alerts.',
    iconName: 'BarChart3',
    ctaText: 'Discover OGmax',
    status: 'Available Now',
    href: 'https://www.ogmax.xyz',
    features: [
      'Monitor unlimited Shopify stores',
      'Real-time product drop alerts',
      'Price tracking and history',
      'Competitor intelligence',
      'Custom alert filters',
      'Telegram notifications',
    ],
  },
  {
    title: 'AntPrompt',
    tagline: 'AI Product Page Creator',
    description: 'Generate perfect, high-converting product pages powered by AI trained for e-commerce.',
    iconName: 'Sparkles',
    ctaText: 'Discover AntPrompt',
    status: 'Coming Soon',
    href: '#',
    features: [
      'AI-generated product descriptions',
      'SEO-optimized content',
      'Multiple tone options',
      'Bulk generation support',
      'Integration with major platforms',
      'A/B testing suggestions',
    ],
  },
  {
    title: 'PronoPlus',
    tagline: 'Predictive Intelligence',
    description: 'AI-powered prediction engine designed for insights, validation, and decision-making.',
    iconName: 'Brain',
    ctaText: 'Discover PronoPlus',
    status: 'In Development',
    href: '#',
    features: [
      'Trend prediction models',
      'Market analysis tools',
      'Decision validation system',
      'Historical data insights',
      'Custom prediction training',
      'Real-time analytics dashboard',
    ],
  },
  {
    title: 'Nexure Automations',
    tagline: 'Custom AI Systems',
    description: 'Custom AI workflows, automations, dashboards, integrations and business systems for professionals.',
    iconName: 'Workflow',
    ctaText: 'Hire Nexure',
    status: 'Available',
    href: '/contact',
    features: [
      'Custom automation workflows',
      'AI-powered integrations',
      'Business dashboards',
      'Data pipelines',
      'API development',
      'Ongoing support',
    ],
  },
];

const pillars = [
  {
    title: 'Precision',
    description: 'Tools that deliver actionable insights. No noise, just results.',
    iconName: 'Target',
  },
  {
    title: 'Speed',
    description: 'Automations that save hours daily. Work smarter, not harder.',
    iconName: 'Zap',
  },
  {
    title: 'Simplicity',
    description: 'Interfaces built to eliminate friction. Power without complexity.',
    iconName: 'Layers',
  },
];

const portfolioItems = [
  { title: 'E-commerce Automations', category: 'Automation' },
  { title: 'Shopify Analytics Tools', category: 'Product' },
  { title: 'AI Content Workflows', category: 'AI' },
  { title: 'Business Intelligence Dashboards', category: 'Systems' },
];

const faqs = [
  {
    question: 'What is Nexure LLC?',
    answer: 'Nexure LLC is a registered Wyoming company (Entity ID: 2025-001674719) that builds AI-powered SaaS products and custom automation solutions for entrepreneurs, creators, and e-commerce businesses.',
  },
  {
    question: 'How do I get started with your products?',
    answer: 'Simply visit the Products page and choose the tool that fits your needs. Each product has its own onboarding process designed to get you up and running in minutes.',
  },
  {
    question: 'Do you offer custom automation services?',
    answer: 'Yes! We build custom AI workflows, automations, dashboards, and business systems tailored to your specific needs. Contact us to discuss your project.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We leverage cutting-edge AI models, modern web frameworks, and cloud infrastructure to build reliable, scalable solutions.',
  },
  {
    question: 'How can I contact Nexure?',
    answer: 'You can reach us through our Contact page or email us directly at contact@nexure.org. We typically respond within 24 hours.',
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProductModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-nexure-navy overflow-hidden">
      <Navbar />

      {/* Product Modal */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexure-blue/20 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nexure-blue/10 rounded-full blur-[120px] animate-pulse-glow" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <span className="inline-block text-nexure-blue text-sm font-semibold tracking-wider uppercase mb-6 animate-float">
            The AI-Powered Productivity Studio
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building smarter tools for{' '}
            <span className="text-gradient-blue">digital entrepreneurs.</span>
          </h1>

          <p className="text-nexure-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered SaaS, automation and digital intelligence — all under Nexure LLC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Explore Our Tools
            </Link>
            <Link href="/contact" className="btn-secondary">
              Work With Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-nexure-gray text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-nexure-gray to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="About Nexure"
            title="A studio for the modern web."
          />
          <p className="text-nexure-gray text-lg leading-relaxed">
            Nexure is a digital studio that builds AI-powered SaaS products for entrepreneurs, creators, and e-commerce businesses.
            We develop solutions for productivity, analytics, automation, and business optimization — designed to help you scale faster with less effort.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Products"
            title="Tools that drive results."
            description="Each product is built with one goal: make your business more efficient. Click to learn more."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                tagline={product.tagline}
                description={product.description}
                iconName={product.iconName}
                ctaText={product.ctaText}
                onClick={() => openProductModal(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexure Section */}
      <section className="section-padding bg-gradient-section">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Why Nexure?"
            title="Built different. Built better."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} {...pillar} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Our Work"
            title="What we've built."
            description="A glimpse into the systems and tools we've created."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-nexure-blue text-xs font-semibold uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            label="The Founder"
            title="Meet Simo."
          />
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-nexure-blue to-blue-400 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">S</span>
            </div>
            <p className="text-nexure-gray text-lg leading-relaxed mb-6">
              Nexure LLC — founded by Simo, a digital entrepreneur building AI-powered systems for the next generation of web companies.
              With experience in e-commerce, automation, and product development, Simo created Nexure to help businesses leverage
              technology for smarter, faster growth.
            </p>
            <Link href="/about" className="text-nexure-blue font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="FAQ"
            title="Common questions."
          />

          <div className="mt-8">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nexure-blue/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to build something great?
              </h2>
              <p className="text-nexure-gray text-lg mb-8">
                Let's discuss how Nexure can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  View Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
