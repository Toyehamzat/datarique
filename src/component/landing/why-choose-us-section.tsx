"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants, defaultTransition, defaultViewport, staggerChildren } from "@/lib/motion";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: (
        <>
          End-to-End
          <br />
          Data Solutions
        </>
      ),
      description:
        "From securing analytics to implementing dashboards, we're your one-stop data hub.",
      image: "/images/pixel.svg",
    },
    {
      title: (
        <>
          Expert-Led
          <br />
          Training
        </>
      ),
      description:
        "Learn directly from certified data professionals with real-world experience.",
      image: "/images/pixel.svg",
    },
    {
      title: (
        <>
          Plug and Play
          <br />
          Analytics
        </>
      ),
      description:
        "Stop hiring headaches — just subscribe and we become your analytics team.",
      image: "/images/pixel.svg",
    },
    {
      title: (
        <>
          Human
          <br />
          Support
        </>
      ),
      description:
        "Speak to real analysts who understand your goals and guide you personally.",
      image: "/images/pixel.svg",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerChildren}
      className="flex flex-col gap-2.5"
    >
      <motion.div variants={fadeInVariants} transition={defaultTransition} className="bg-white rounded-[20px] py-6 md:pt-10 p-3 md:p-10  shadow-sm">
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
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            transition={{ ...defaultTransition, delay: index * 0.1 }}
            className="bg-white transition-shadow duration-200 overflow-hidden rounded-[20px] p-3 md:p-6"
          >
            <div className="">
              <h3 className="text-base md:text-[28px] font-semibold text-black mb-3">
                {reason.title}
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
                src={reason.image}
                alt={
                  typeof reason.title === "string"
                    ? reason.title
                    : "Feature image"
                }
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
