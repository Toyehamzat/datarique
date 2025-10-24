"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants, defaultTransition, fastTransition, staggerChildren } from "@/lib/motion";
import { Reason } from "@/types/home-page";

interface WhyChooseUsSectionProps {
  reasons?: Reason[];
}

export default function WhyChooseUsSection({ reasons }: WhyChooseUsSectionProps) {
  const defaultReasons: Reason[] = [
    {
      id: 1,
      title: "End-to-End Data Solutions",
      description: "From securing analytics to implementing dashboards, we're your one-stop data hub.",
    },
    {
      id: 2,
      title: "Expert-Led Training",
      description: "Learn directly from certified data professionals with real-world experience.",
    },
    {
      id: 3,
      title: "Plug and Play Analytics",
      description: "Stop hiring headaches — just subscribe and we become your analytics team.",
    },
    {
      id: 4,
      title: "Human Support",
      description: "Speak to real analysts who understand your goals and guide you personally.",
    },
  ];

  const reasonsToRender = reasons && reasons.length > 0 ? reasons : defaultReasons;

  // Helper to format title with line breaks
  const formatTitle = (title: string) => {
    const parts = title.split('\n');
    if (parts.length === 1) return title;
    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
      className="flex flex-col gap-2.5"
    >
      <motion.div 
        variants={fadeInVariants} 
        transition={fastTransition} 
        className="bg-white rounded-[20px] py-6 md:pt-10 p-3 md:p-10  shadow-sm"
      >
        <p className="text-sm font-semibold text-datarique-navy tracking-wider uppercase mb-3">
          VALUE PROPOSITION
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black">
          Why choose
          <br />
          DaTarique
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-transparent rounded-[20px] shadow-sm">
        {reasonsToRender.map((reason, index) => (
          <motion.div
            key={reason.id || index}
            variants={fadeInVariants}
            transition={{ ...defaultTransition, delay: index * 0.1 }}
            className="bg-white transition-shadow duration-200 overflow-hidden rounded-[20px] p-3 md:p-6"
          >
            <div className="">
              <h3 className="text-base md:text-[28px] font-semibold text-black mb-3">
                {formatTitle(reason.title)}
              </h3>
              <p className="text-[#666666] text-sm md:text-lg leading-relaxed mb-6 font-normal">
                {reason.description}
              </p>
            </div>

            {/* Image placeholder */}
            <div
              className="w-full h-[380px] bg-datarique-navy rounded-lg mx-auto mb-6"
              style={{ maxWidth: "calc(100% - 0.1rem)" }}
            >
              <Image
              src={reason.image?.url || "/images/pixel.svg"}
              alt={reason.image?.alternativeText || reason.title}
              width={400}
              height={380}
              className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
