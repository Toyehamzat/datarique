import { type CourseCardProps } from "@/component/courses/course-card";
import HeroSection from "@/component/common/hero-section";
import CoursesGrid from "@/component/courses/courses-grid";
import type { Metadata } from "next";
import { getCoursesPage } from "@/lib/strapi";
import type { Course } from "@/types/home-page";

export const metadata: Metadata = {
  title: "Courses - Datarique",
  description:
    "Learn data analytics skills with expert-led courses in SQL, Excel, Power BI, and Looker Studio. From beginner to professional.",
};

export default async function CoursesPage() {
  // Fetch courses from Strapi
  let coursesData: Course[] = [];
  try {
    coursesData = await getCoursesPage<Course[]>();
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }

  // Map Strapi courses to CourseCardProps
  const courses: CourseCardProps[] = coursesData
    .map((course) => ({
      title: course.title,
      duration: course.duration,
      certificate: course.certification,
      description: course.description,
      price: parseFloat(course.price),
      features: course.features.map((feature) => feature.text),
      highlight: course.highlight,
      isPro: course.isPro,
      buttonText: course.buttonText,
    }))
    .reverse();

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
