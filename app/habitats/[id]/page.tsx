import { HABITATS } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

// Correctly type the props for Next.js 15+ (params is a Promise)
interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return HABITATS.map((habitat) => ({
        id: habitat.id,
    }));
}

export default async function HabitatPage({ params }: PageProps) {
    const { id } = await params;
    const habitat = HABITATS.find((h) => h.id === id);

    if (!habitat) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#050a0e] text-white relative overflow-hidden">
            <Navbar />

            {/* Dynamic Background Gradient */}
            <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-b ${habitat.color} opacity-20 rounded-full blur-[150px] pointer-events-none`}></div>

            <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Map
                </Link>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <div className="relative">
                        <div className={`aspect-square rounded-3xl bg-gradient-to-br ${habitat.color} p-1`}>
                            <div className="w-full h-full bg-[#050a0e]/90 backdrop-blur-xl rounded-[22px] flex items-center justify-center relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${habitat.color} opacity-10`}></div>
                                <habitat.icon size={120} className="text-white relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-zoo-accent mb-4">
                            {habitat.animal} • {habitat.role}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{habitat.name}</h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {habitat.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {habitat.status === 'Live' ? (
                                <a
                                    href={habitat.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-zoo-primary hover:bg-zoo-primary/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-zoo-primary/20"
                                >
                                    VISIT LIVE SITE <ExternalLink size={20} className="ml-2" />
                                </a>
                            ) : (
                                <button disabled className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-gray-500 font-bold rounded-xl cursor-not-allowed">
                                    COMING SOON
                                </button>
                            )}

                            <div className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-center">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Status</span>
                                <span className={`font-bold ${habitat.status === 'Live' ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {habitat.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
