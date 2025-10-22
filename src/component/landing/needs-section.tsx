"use client";
import { GraduationCap, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, defaultTransition, defaultViewport, staggerChildren } from "@/lib/motion";

export default function NeedsSection() {
  const needs = [
    {
      title: "For Learners",
      description:
        "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      buttonText: "Enroll Now",
      icon: GraduationCap,
    },
    {
      title: "For Businesses",
      description:
        "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      buttonText: "Subscribe to Analytics",
      icon: TrendingUp,
    },
    {
      title: "For Consultations",
      description:
        "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      buttonText: "Book a consultation",
      icon: MessageCircle,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerChildren}
      className="bg-white rounded-[20px] shadow-sm p-3 md:p-10 lg:p-12"
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div variants={fadeInVariants} transition={defaultTransition} className="mb-10 pt-3 md:pt-0">
          <p className="text-sm font-semibold text-datarique-navy tracking-wider uppercase mb-3">
            DEMOGRAPHIC
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black">
            We cater to your
            <br />
            various needs.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((need, index) => {
            const Icon = need.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInVariants}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className={`border-l-3 border-datarique-orange bg-white py-0 px-6 hover:shadow-md transition-shadow duration-200`}
              >
                <h3 className="text-base md:text-lg font-semibold text-black mb-3">
                  {need.title}
                </h3>
                <p className="text-[#666666] text-sm md:text-lg leading-relaxed mb-6 font-medium">
                  {need.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-gray-900 transition-colors duration-200 border border-[#E5E5E5] py-2.5 px-4 rounded-4xl " >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span>{need.buttonText}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
