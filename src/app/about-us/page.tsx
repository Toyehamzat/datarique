import HeroSection from "@/component/about-us/about-hero-section";
import CoreValues from "@/component/about-us/core-values";
import OurStory from "@/component/about-us/our-story";
import { getAboutPage } from "@/lib/strapi";
import { AboutData } from "@/types/about-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Datarique",
  description:
    "Learn about Datarique's mission to empower businesses and individuals with expert data analytics training, consultation, and services.",
};

export default async function AboutUsPage() {
  let aboutData: AboutData | null = null;
  try {
    aboutData = await getAboutPage<AboutData>();
  } catch (err) {
    console.error("Failed to fetch /about-page", err);
  }

  const heroTitle =
    aboutData?.hero_title ?? "DaTarique mines data and direction.";
  const heroDescription =
    aboutData?.hero_description ??
    "DaTarique Limited is a data solutions company guiding individuals and organizations toward smarter, evidence-driven decisions.";

  const values = Array.isArray(aboutData?.values)
    ? (aboutData.values as Array<{
        id?: number;
        title?: string;
        description?: string;
      }>)
    : [];

  const purpose = aboutData?.purpose ?? "";
  const mission = aboutData?.mission ?? "";
  const vision = aboutData?.vision ?? "";
  const story = aboutData?.story ?? "";

  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <HeroSection title={heroTitle} description={heroDescription} />
      <CoreValues
        values={values}
        purpose={purpose}
        mission={mission}
        vision={vision}
      />
      <OurStory story={story} />
    </div>
  );
}
