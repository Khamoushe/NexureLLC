import Navbar from '@/components/Navbar';
import ZooMap from '@/components/ZooMap';
import TextReveal from '@/components/TextReveal';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050a0e]">
      <Navbar />

      {/* Background Ambient Light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-zoo-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zoo-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="text-center mb-12 flex flex-col items-center">
          <TextReveal
            text="WELCOME TO THE DIGITAL ZOO"
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight text-gradient"
          />
          <ScrollReveal delay={0.5}>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore the habitats of our cutting-edge SaaS creatures.
              Where technology meets instinct.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.8}>
          <ZooMap />
        </ScrollReveal>
      </div>
    </main>
  );
}
