"use client";
import { GraduationCap, TrendingUp, MessageCircle, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, defaultTransition, defaultViewport, staggerChildren } from "@/lib/motion";
import { Need } from "@/types/home-page";

interface NeedsSectionProps {
  needs?: Need[];
}

// Map icon strings to Lucide components
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  TrendingUp,
  MessageCircle,
};

export default function NeedsSection({ needs }: NeedsSectionProps) {
  const defaultNeeds: Need[] = [
    {
      id: 1,
      title: "For",
      description: "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      btn_text: "Enroll Now",
      icon: "GraduationCap",
    },
    {
      id: 2,
      title: "For Businesses",
      description: "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      btn_text: "Subscribe to Analytics",
      icon: "TrendingUp",
    },
    {
      id: 3,
      title: "For Consultations",
      description: "Master Excel, SQL, Power BI, and Looker Studio with guided mentorship.",
      btn_text: "Book a consultation",
      icon: "MessageCircle",
    },
  ];

  const needsToRender = needs && needs.length > 0 ? needs : defaultNeeds;

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
          {needsToRender.map((need, index) => {
            const Icon = iconMap[need.icon ?? ''] || GraduationCap;
            return (
              <motion.div
                key={need.id || index}
                variants={fadeInVariants}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className={`border-l-3 border-datarique-orange bg-white py-0 px-6 transition-shadow duration-200`}
              >
                <h3 className="text-base md:text-lg font-semibold text-black mb-3">
                  {need.title}
                </h3>
                <p className="text-[#666666] text-sm md:text-lg leading-relaxed mb-6 font-medium">
                  {need.description}
                </p>
                <button className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#171717] hover:text-gray-900 transition-colors duration-200 border border-[#E5E5E5] py-2.5 px-4 rounded-4xl " >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span>{need.btn_text}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
