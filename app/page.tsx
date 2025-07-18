import HeroSection from "@/components/landing page/hero-section";
import ServicesSection from "@/components/landing page/services-section";
import AboutSection from "@/components/landing page/about-section";
import TestimonialsSection from "@/components/landing page/testimonials-section";
import PortfolioSection from "@/components/landing page/portfolio-section";
import FloatingContact from "@/components/landing page/floating-contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FloatingContact />
    </main>
  );
}
