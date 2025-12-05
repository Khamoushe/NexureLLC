import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import PageTransition from "@/components/PageTransition";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexure LLC - The Digital Zoo",
  description: "A premium portfolio of SaaS habitats. Explore Ogmax, Geodomaine, and more.",
  icons: {
    icon: '/favicon.ico',
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
        className={`${outfit.variable} antialiased selection:bg-zoo-secondary selection:text-zoo-primary`}
      >
        <AuroraBackground />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
