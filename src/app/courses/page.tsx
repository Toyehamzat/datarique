import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - Datarique",
  description:
    "Explore our comprehensive data analytics courses designed for beginners to professionals. Learn data analysis, business intelligence, and data-driven decision making.",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <div className="text-black bg-white rounded-[20px] shadow-xs p-10">
        <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
        <p className="text-lg">
          Discover our data analytics training programs
        </p>
      </div>
    </div>
  );
}
