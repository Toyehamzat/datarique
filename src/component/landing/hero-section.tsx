"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpVariants, defaultTransition, defaultViewport } from "@/lib/motion";

export default function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUpVariants}
      transition={defaultTransition}
      className="text-black bg-white rounded-[20px] shadow-xs md:p-10 p-3 pt-7 md:pt-10 flex flex-col gap-10"
    >
      <div className="flex flex-row justify-between">
        <div className="md:max-w-[400px] max-w-[315px] flex flex-col gap-6">
          <p className="font-semibold md:text-[72px] text-[36px] leading-[96%] tracking-[-0.04em]">
            Your Direction for Data.
          </p>
          <p className="font-medium md:text-lg text-sm leading-[150%] text-[#666666] tracking-[-0.01em]">
            Empowering individuals and businesses to make smarter decisions
            through data — with training, consultation, and
            analytics-as-a-service.
          </p>
          <div className="flex gap-2.5 text-xs md-text-sm">
            <button className="px-4 py-2 rounded-full bg-transparent border border-[#E5E5E5] text-[#171717] cursor-pointer hover:bg-gray-100">
              Book a consultation
            </button>
            <button className="px-4 py-2 rounded-full border border-transparent hover:bg-datarique-orange/90 bg-datarique-orange text-white flex items-center gap-0.5 cursor-pointer">
              Enroll Now
              <div className="p-1 bg-orange-400 rounded-full">
                <ArrowRight size={14} className="text-white font-extrabold" />
              </div>
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src="/images/hero-right2.png"
            alt="Hero right illustration"
            width={440}
            height={400}
            className="w-full h-auto max-h-[600px] object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/images/hero.svg"
          alt="Hero illustration"
          width={1240}
          height={600}
          className="w-full h-auto max-h-[600px] object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
