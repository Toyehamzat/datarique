"use client";
import { motion } from "framer-motion";
import CourseCard, { type CourseCardProps } from "@/component/courses/course-card";
import { fadeInVariants, defaultTransition, staggerChildren } from "@/lib/motion";

interface CoursesGridProps {
  courses: CourseCardProps[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2.5"
    >
      {courses.map((course, index) => (
        <motion.div
          key={index}
          variants={fadeInVariants}
          transition={{ ...defaultTransition, delay: index * 0.1 }}
          className={`${
            // First 3 items span 2 columns each (1/3 width)
            index < 3 ? "lg:col-span-2" : ""
          } ${
            // Last 2 items span 3 columns each (1/2 width)
            index === 3 || index === 4 ? "lg:col-span-3" : ""
          }`}
        >
          <CourseCard {...course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
