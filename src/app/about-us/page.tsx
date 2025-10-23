import HeroSection from "@/component/about-us/about-hero-section";
import CoreValues from "@/component/about-us/core-values";
import OurStory from "@/component/about-us/our-story";
import { getAboutPage } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Datarique",
  description:
    "Learn about Datarique's mission to empower businesses and individuals with expert data analytics training, consultation, and services.",
};

// Typed to match expected Strapi single-type `data` object shape
interface AboutAttrs {
  id?: number;
  documentId?: string;
  hero_title?: string;
  hero_description?: string;
  purpose?: string;
  mission?: string;
  vision?: string;
  story?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  values?: Array<{ id?: number; title?: string; description?: string }> | null;
  [key: string]: unknown;
}

export default async function AboutUsPage() {
  let attrs: AboutAttrs | null = null;
  try {
    // getAboutPage returns the `data` object from Strapi (single-type)
    attrs = (await getAboutPage<AboutAttrs>()) ?? null;
  } catch (err) { 
    // keep attrs null on failure and components render sensible fallbacks
    console.error("Failed to fetch /about-page", err);
  }

  const heroTitle = attrs?.hero_title ?? "DaTarique mines data and direction.";
  const heroDescription =
    attrs?.hero_description ??
    "DaTarique Limited is a data solutions company guiding individuals and organizations toward smarter, evidence-driven decisions.";

  const values = Array.isArray(attrs?.values)
    ? (attrs.values as Array<{ id?: number; title?: string; description?: string }>)
    : attrs?.values ?? [];

  const purpose = attrs?.purpose ?? "";
  const mission = attrs?.mission ?? "";
  const vision = attrs?.vision ?? "";
  const story = attrs?.story ?? "";

  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <HeroSection title={heroTitle} description={heroDescription} />
      <CoreValues values={values} purpose={purpose} mission={mission} vision={vision} />
      <OurStory story={story} />
    </div>
  );
}
