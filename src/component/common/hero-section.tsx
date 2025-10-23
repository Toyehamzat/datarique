"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, fadeInUpVariants, defaultTransition, staggerChildren } from "@/lib/motion";

export interface HeroSectionProps {
  title: string | React.ReactNode;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  maxWidth?: string;
}

export default function HeroSection({
  title,
  description,
  primaryButtonText = "Enroll Now",
  secondaryButtonText = "Book a consultation",
  onPrimaryClick,
  onSecondaryClick,
  maxWidth = "max-w-[800px]",
}: HeroSectionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="text-black bg-white rounded-[20px] shadow-sm p-6 md:p-10"
    >
      <div className={`flex flex-col gap-6 ${maxWidth}`}>
        <motion.h1
          variants={fadeInUpVariants}
          transition={defaultTransition}
          className="text-4xl md:text-6xl lg:text-[72px] font-semibold leading-[96%] tracking-[-0.04em]"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeInUpVariants}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="text-base md:text-lg font-medium leading-[150%] tracking-[-0.01em] text-[#666666]"
        >
          {description}
        </motion.p>
        <motion.div
          variants={fadeInVariants}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          {secondaryButtonText && (
            <button
              onClick={onSecondaryClick}
              className="px-4 py-2.5 rounded-full bg-transparent border border-[#E5E5E5] text-[#171717] cursor-pointer hover:bg-gray-100 transition-colors"
            >
              {secondaryButtonText}
            </button>
          )}
          {primaryButtonText && (
            <button
              onClick={onPrimaryClick}
              className="px-4 py-2.5 rounded-full border border-transparent hover:bg-datarique-orange/90 cursor-pointer bg-datarique-orange text-white flex items-center gap-0.5 transition-colors"
            >
              {primaryButtonText}
              <div className="p-1 bg-orange-400 rounded-full">
                <ArrowRight size={14} className="text-white font-extrabold" />
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
