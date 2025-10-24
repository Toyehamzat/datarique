"use client";
import { motion } from "framer-motion";
import CourseCard, { type CourseCardProps } from "@/component/courses/course-card";
import { fadeInVariants, defaultTransition, staggerChildren } from "@/lib/motion";

interface CoursesGridProps {
  courses: CourseCardProps[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  const totalCourses = courses.length;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2.5"
    >
      {courses.map((course, index) => {
        // Check if this is the last item and it's alone in its row
        const isLastItem = index === totalCourses - 1;
        const itemsInLastRow = totalCourses > 3 ? (totalCourses - 3) % 3 : totalCourses % 3;
        const isAloneInRow = isLastItem && itemsInLastRow === 1;
        
        return (
          <motion.div
            key={index}
            variants={fadeInVariants}
            transition={{ ...defaultTransition, delay: index * 0.1 }}
            className={`${
              // First 3 items span 2 columns each (1/3 width)
              index < 3 ? "lg:col-span-2" : ""
            } ${
              // Items after first 3 span 3 columns each (1/2 width)
              index >= 3 && !isAloneInRow ? "lg:col-span-3" : ""
            } ${
              // Last item alone spans full width
              isAloneInRow ? "lg:col-span-6" : ""
            }`}
          >
            <CourseCard {...course} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
