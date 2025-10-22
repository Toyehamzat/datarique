import HeroSection from "@/component/landing/hero-section";
import NeedsSection from "@/component/landing/needs-section";
import WhyChooseUsSection from "@/component/landing/why-choose-us-section";
import ServicesSection from "@/component/landing/services-section";
import TestimonialsSection from "@/component/landing/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <HeroSection />
      <NeedsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
