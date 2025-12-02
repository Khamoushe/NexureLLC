import Navbar from '@/components/Navbar';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#050a0e] text-white relative overflow-hidden">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zoo-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold mb-6">RANGER <span className="text-zoo-primary">STATION</span></h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Have a question about our habitats? Want to report a sighting?
                        Our rangers are ready to assist you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zoo-secondary">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Us</p>
                                <p className="text-lg font-medium">contact.nexure.org</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zoo-secondary">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">HQ Location</p>
                                <p className="text-lg font-medium">Digital Wilderness</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">First Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Last Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zoo-secondary transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-zoo-secondary transition-colors resize-none" placeholder="Tell us about your inquiry..."></textarea>
                        </div>
                        <button className="w-full bg-zoo-primary hover:bg-zoo-primary/90 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-zoo-primary/20">
                            SEND TRANSMISSION
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
