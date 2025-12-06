import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-nexure-navy flex items-center justify-center px-6">
            <div className="text-center">
                <span className="text-nexure-blue text-9xl font-bold">404</span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                    Page not found
                </h1>
                <p className="text-nexure-gray text-lg mb-8 max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="btn-primary">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
