import HeroSection from "@/component/landing/hero-section";
import NeedsSection from "@/component/landing/needs-section";
import WhyChooseUsSection from "@/component/landing/why-choose-us-section";
import ServicesSection from "@/component/landing/services-section";
import TestimonialsSection from "@/component/landing/testimonials-section";
import { getHomePage } from "@/lib/strapi";
import { HomeData } from "@/types/home-page";

export default async function Home() {
  let homeData: HomeData | null = null;
  
  try {
    homeData = (await getHomePage<HomeData>()) ?? null;
  } catch (err) {
    console.error("Failed to fetch home page data", err);
  }

  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <HeroSection 
        title={homeData?.hero_title}
        description={homeData?.hero_description}
      />
      <NeedsSection needs={homeData?.needs} />
      <WhyChooseUsSection reasons={homeData?.reasons} />
      <ServicesSection services={homeData?.services} />
      <TestimonialsSection testimonials={homeData?.testimonials} />
    </div>
  );
}
