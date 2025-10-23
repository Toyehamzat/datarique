import type { Metadata } from "next";
import HeroSection from "@/component/common/hero-section";
import { type CourseCardProps } from "@/component/courses/course-card";
import CoursesGrid from "@/component/courses/courses-grid";

export const metadata: Metadata = {
  title: "Analytics Services - Datarique",
  description:
    "Professional data analytics and consultation services to help your business make data-driven decisions and unlock insights from your data.",
};

export default function AnalyticsPage() {
  const analytics: CourseCardProps[] = [
    {
      title: "Starter Plan",
      analyticDescription: "Perfect for startups and small teams.",
      price: 80,
      features: [
        "1 interactive dashboard",
        "Monthly performance report",
        "Basic data cleaning",
        "Email & WhatsApp support",
      ],
      highlight: false,
    },
    {
      title: "Growth Plan",
      analyticDescription: "Ideal for scaling companies.",
      price: 300,
      // badge: "MOST ENROLLED",
      features: [
        "Everything in the Starter Plan",
        "3 interactive dashboards",
        "Weekly updates + analyst support",
        "Trend forecasting",
        "Process automation setup",
      ],
      highlight: true,
    },
    {
      title: "Enterprise Plan",
      analyticDescription:
        "For complete analytics operations.",
      price: 100,
      features: [
        "Everything in Growth Plan",
        "End-to-end data management",
        "Dedicated analyst + business review sessions",
        "AI-assisted forecasting and automation",
        "Priority Support",
      ],
      highlight: false,
    },
  ];
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
