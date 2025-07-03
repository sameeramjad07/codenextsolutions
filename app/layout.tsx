import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/landing page/navbar";
import Footer from "@/components/landing page/footer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeNextSolutions - Custom Software Development Company",
  description:
    "Transform your ideas into powerful digital solutions with our expert team. We deliver custom software, web & mobile apps, and AI-driven solutions that scale with your business.",
  keywords:
    "software development, web development, mobile apps, AI solutions, custom software, digital transformation",
  authors: [{ name: "CodeNextSolutions" }],
  openGraph: {
    title: "CodeNextSolutions - Custom Software Development Company",
    description:
      "Transform your ideas into powerful digital solutions with our expert team.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNextSolutions - Custom Software Development Company",
    description:
      "Transform your ideas into powerful digital solutions with our expert team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
