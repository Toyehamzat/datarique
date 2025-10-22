"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants, fadeInUpVariants, defaultTransition, staggerChildren } from "@/lib/motion";

export default function HeroSection() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="text-black bg-white rounded-[20px] shadow-xs p-3 md:p-10 flex flex-col gap-6 md:gap-10"
    >
      <motion.div 
        variants={fadeInVariants}
        transition={defaultTransition}
        className="h-[250px] md:h-[400px] lg:h-[600px] bg-datarique-navy rounded-[20px]"
      >
        <Image
          src="/images/pixel.svg"
          alt="Call to Action"
          width={1240}
          height={600}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <div className="flex flex-col gap-4 md:gap-6 max-w-[800px]">
        <motion.h1 
          variants={fadeInUpVariants}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="font-semibold text-3xl md:text-5xl lg:text-[72px] leading-tight md:leading-[1.2] lg:leading-[69.12px] tracking-[-0.04em]"
        >
          DaTarique mines data and direction.
        </motion.h1>
        <motion.div 
          variants={fadeInUpVariants}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="font-medium text-sm md:text-base lg:text-lg leading-[150%] tracking-[-0.01em] text-[#666666] flex flex-col gap-3 md:gap-4 w-full"
        >
          <p>
            DaTarique Limited is a data solutions company guiding individuals
            and organizations toward smarter, evidence-driven decisions.
          </p>
          <p>
            We merge Data and Direction — training learners, supporting SMEs,
            and building systems that make sense of information.
          </p>
          <p>
            Our name combines &quot;Data&quot; and &quot;Tariq&quot; (meaning
            &quot;path&quot; or &quot;direction&quot;) — symbolizing our
            mission: to help you find clarity, purpose, and growth through data.
          </p>
        </motion.div>
      </div>
      <motion.div 
        variants={fadeInVariants}
        transition={{ ...defaultTransition, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-2.5 text-sm"
      >
        <button className="px-4 py-2 rounded-full bg-transparent border border-[#E5E5E5] text-black cursor-pointer hover:bg-gray-100/5 transition-colors">
          Book a consultation
        </button>
        <button className="px-4 py-2 rounded-full border border-transparent hover:bg-datarique-orange/90 bg-datarique-orange text-white flex items-center justify-center gap-0.5 cursor-pointer transition-colors">
          Enroll Now
          <ArrowRight size={14} className="text-white font-extrabold" />
        </button>
      </motion.div>
    </motion.div>
  );
}
