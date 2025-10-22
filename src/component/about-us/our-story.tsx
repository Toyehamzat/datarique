"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeftVariants, fadeInRightVariants, defaultTransition, defaultViewport } from "@/lib/motion";

export default function OurStory() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="bg-white rounded-[20px] shadow-sm p-3 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
    >
      <motion.div 
        variants={fadeInLeftVariants}
        transition={defaultTransition}
        className="flex flex-col gap-6 md:gap-20 max-w-[590px]"
      >
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-[96%] tracking-[-0.04em]">
          Our Story
        </h2>
        <div className="flex flex-col gap-3 md:gap-4 font-medium text-sm md:text-base lg:text-lg leading-[150%] tracking-[-0.01em] text-[#666666]">
          <p>
            DaTarique began with one simple idea: data should not be a luxury.
          </p>
          <p>
            While big companies have analytics teams, small businesses often
            struggle to make sense of their numbers.
          </p>
          <p>
            We exist to change that — by being both a school for learners and a
            data department for SMEs.
          </p>
          <p>
            From our roots in Africa to clients worldwide, we&apos;re building a
            future where everyone can make better decisions through data.
          </p>
        </div>
      </motion.div>
      <motion.div 
        variants={fadeInRightVariants}
        transition={{ ...defaultTransition, delay: 0.2 }}
        className="h-[300px] lg:h-[388px] bg-datarique-navy rounded-[20px] shrink-0"
      >
        <Image
          src="/images/pixel.svg"
          alt="Our Story"
          width={590}
          height={388}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}
