import type { Metadata } from "next";
import HeroSection from "@/component/common/hero-section";
import { type CourseCardProps } from "@/component/courses/course-card";
import CoursesGrid from "@/component/courses/courses-grid";
import { getAnalyticsPage } from "@/lib/strapi";
import type { Analytic } from "@/types/home-page";

export const metadata: Metadata = {
  title: "Analytics Services - Datarique",
  description:
    "Professional data analytics and consultation services to help your business make data-driven decisions and unlock insights from your data.",
};

export default async function AnalyticsPage() {
  // Fetch analytics from Strapi
  let analyticsData: Analytic[] = [];
  try {
    analyticsData = await getAnalyticsPage<Analytic[]>();
  } catch (error) {
    console.error("Failed to fetch analytics:", error);
  }

  // Map Strapi analytics to CourseCardProps
  const analytics: CourseCardProps[] = analyticsData
    .map((analytic) => ({
      title: analytic.title,
      analyticDescription: analytic.analyticDescription,
      price: parseFloat(analytic.price),
      features: analytic.features.map((feature) => feature.text),
      highlight: analytic.highlight,
      buttonText: analytic.btn_text,
    }))
    .reverse();

  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Your Data team,
            <br />
            On Demand
          </>
        }
        description="You don't need to hire full-time. We offer subscription-based analytics services 
designed around your business goals."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Book a consultation"
      />

      {/* Courses Grid */}
      <CoursesGrid courses={analytics} />
    </div>
  );
}
