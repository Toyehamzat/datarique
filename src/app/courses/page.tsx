import { type CourseCardProps } from "@/component/courses/course-card";
import HeroSection from "@/component/common/hero-section";
import CoursesGrid from "@/component/courses/courses-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - Datarique",
  description:
    "Learn data analytics skills with expert-led courses in SQL, Excel, Power BI, and Looker Studio. From beginner to professional.",
};

export default function CoursesPage() {
  const courses: CourseCardProps[] = [
    {
      title: "SQL Mastery",
      duration: "5 weeks",
      certificate: "SQL Proficiency Certificate",
      description: "Learn how to query, clean, and analyze data efficiently.",
      price: 80,
      features: [
        "SQL basics to advanced joins and subqueries",
        "Data manipulation and optimization",
      ],
      highlight: false,
    },
    {
      title: "Excel for Everyone",
      duration: "4 weeks",
      certificate: "Certificate Issued + Portfolio Project",
      description:
        "Master the world's most used data tool — from formulas to dashboards.",
      price: 60,
      // badge: "MOST ENROLLED",
      features: [
        "Data Cleaning, pivot tables, and charts",
        "Advanced formulas and automation",
        "Business reporting techniques",
      ],
      highlight: true,
    },
    {
      title: "Power BI for Business",
      duration: "6 weeks",
      certificate: "Certified Power BI Analyst",
      description: "Visualize and tell stories with your data using Power BI.",
      price: 100,
      features: [
        "Building interactive dashboards",
        "Connecting multiple data sources",
        "Publishing and automating reports",
      ],
      highlight: false,
    },
    {
      title: "Looker Studio",
      duration: "4 weeks",
      certificate: "Looker Studio Practitioner",
      description: "Create Google-powered dashboards that drive decisions.",
      price: 80,
      features: [
        "Building reports from Sheets & BigQuery",
        "Designing visuals that communicate",
      ],
      highlight: false,
    },
    {
      title: "Pro Bundle",
      duration: "5 weeks",
      certificate: "SQL Proficiency Certificate",
      description: null,
      price: 80,
      features: [
        "Access all four courses + 1-on-1 mentorship.",
        "Learn by doing — and graduate with a job-ready portfolio.",
      ],
      highlight: false,
      isPro: true,
      buttonText: "Upgrade to Pro",
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      {/* Hero Section */}
      <HeroSection
        title="Learn Data skills that open doors."
        description="Move from beginner to confident analyst through interactive learning, mentorship, and real-world projects."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Book a consultation"
      />

      {/* Courses Grid */}
      <CoursesGrid courses={courses} />
    </div>
  );
}
