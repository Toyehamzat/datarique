"use client";
import { defaultTransition, fadeInVariants } from "@/lib/motion";
import { motion } from "framer-motion";

interface ValueItem {
  title?: string;
  description?: string;
}

interface CoreValuesProps {
  values?: ValueItem[];
  purpose?: string;
  mission?: string;
  vision?: string;
}

export default function CoreValuesSection({ values, purpose, mission, vision }: CoreValuesProps) {
  const defaultValues: ValueItem[] = [
    {
      title: "Integrity",
      description: "We deliver insights you can trust — always.",
    },
    {
      title: "Clarity",
      description: "We simplify complexity, making data understandable.",
    },
    {
      title: "Growth",
      description: "We believe learning and scaling should never stop.",
    },
    {
      title: "Collaboration",
      description: "We work as partners, not providers.",
    },
    {
      title: "Impact",
      description: "Every service must create measurable, positive change.",
    },
  ];

  const valuesToRender = Array.isArray(values) && values.length > 0 ? values : defaultValues;

  const cores = [
    {
      title: "Purpose",
      description: purpose ?? "To democratize data access and empower every professional or business — no matter their size — to use data intelligently.",
    },
    {
      title: "Mission",
      description: mission ?? "To bridge the gap between data and decision-making through accessible training, reliable analytics, and actionable insights.",
    },
    {
      title: "Vision",
      description: vision ?? "To become Africa’s most trusted partner for data training and analytics outsourcing — helping people and businesses turn data into direction.",
    },
  ];

  return (
    <section className="flex flex-col gap-2.5">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="bg-white rounded-[20px] shadow-sm p-3 md:p-10"
      >
        {/* Header */}
        <motion.div 
          variants={fadeInVariants}
          transition={defaultTransition}
          className="mb-8 md:mb-12 lg:mb-20 pt-3 md:pt-0"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-black">
            Core Values
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-x-12 lg:gap-y-10">
          {valuesToRender.map((value, index) => (
            <motion.div 
              key={index} 
              variants={fadeInVariants}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4 md:pb-6 lg:pb-8"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#171717] mb-2 md:mb-3">
                {value.title}
              </h3>
              <p className="text-[#666666] text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="bg-white rounded-[20px] shadow-sm p-3 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cores.map((core, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInVariants}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className="border-l-3 border-datarique-orange bg-white py-0 px-4 md:px-6 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-base md:text-lg font-semibold text-black mb-2 md:mb-3">
                  {core.title}
                </h3>
                <p className="text-[#666666] text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 font-medium">
                  {core.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
