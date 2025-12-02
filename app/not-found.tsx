import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050a0e] text-white flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-9xl font-bold text-white/10">404</h1>
            <h2 className="text-3xl font-bold mb-4">Habitat Not Found</h2>
            <p className="text-gray-400 mb-8">It seems this animal has wandered off into the digital wilderness.</p>
            <Link
                href="/"
                className="px-8 py-3 bg-zoo-primary rounded-full font-bold hover:bg-zoo-primary/90 transition-colors"
            >
                Return to Zoo Entrance
            </Link>
        </div>
    );
}
