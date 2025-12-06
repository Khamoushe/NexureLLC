import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexure LLC — The AI-Powered Productivity Studio",
  description: "AI-powered SaaS, automation and digital intelligence. Building smarter tools for digital entrepreneurs.",
  keywords: ["AI", "SaaS", "automation", "productivity", "Shopify", "e-commerce", "digital tools"],
  authors: [{ name: "Nexure LLC" }],
  icons: {
    icon: '/nexure-icon.svg',
  },
  openGraph: {
    title: "Nexure LLC — The AI-Powered Productivity Studio",
    description: "AI-powered SaaS, automation and digital intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
