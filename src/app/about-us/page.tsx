import HeroSection from "@/component/about-us/about-hero-section";
import CoreValues from "@/component/about-us/core-values";
import OurStory from "@/component/about-us/our-story";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Datarique",
  description:
    "Learn about Datarique's mission to empower businesses and individuals with expert data analytics training, consultation, and services.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <HeroSection />
      <CoreValues />
      <OurStory />
    </div>
  );
}
