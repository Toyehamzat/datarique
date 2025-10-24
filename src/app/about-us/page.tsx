import HeroSection from "@/component/about-us/about-hero-section";
import CoreValues from "@/component/about-us/core-values";
import OurStory from "@/component/about-us/our-story";
import { getAboutPage } from "@/lib/strapi";
import { AboutResponse } from "@/types/about-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Datarique",
  description:
    "Learn about Datarique's mission to empower businesses and individuals with expert data analytics training, consultation, and services.",
};

// Typed to match expected Strapi single-type `data` object shape

export default async function AboutUsPage() {
  let attrs: AboutResponse | null = null;
  try {
    // getAboutPage returns the `data` object from Strapi (single-type)
    attrs = (await getAboutPage<AboutResponse>()) ?? null;
  } catch (err) {
    // keep attrs null on failure and components render sensible fallbacks
    console.error("Failed to fetch /about-page", err);
  }

  const heroTitle =
    attrs?.data?.hero_title ?? "DaTarique mines data and direction.";
  const heroDescription =
    attrs?.data?.hero_description ??
    "DaTarique Limited is a data solutions company guiding individuals and organizations toward smarter, evidence-driven decisions.";

  const values = Array.isArray(attrs?.data?.values)
    ? (attrs.data.values as Array<{
        id?: number;
        title?: string;
        description?: string;
      }>)
    : [];

  const purpose = attrs?.data.purpose ?? "";
  const mission = attrs?.data.mission ?? "";
  const vision = attrs?.data.vision ?? "";
  const story = attrs?.data.story ?? "";

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
