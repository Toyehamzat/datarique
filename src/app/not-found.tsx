"use client";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants, fadeInUpVariants, defaultTransition, staggerChildren } from "@/lib/motion";

export default function NotFound() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <motion.div
        variants={fadeInVariants}
        transition={defaultTransition}
        className="mb-8"
      >
        <h1 className="text-8xl md:text-9xl font-bold text-datarique-navy mb-4">
          404
        </h1>
        <div className="h-1 w-20 bg-datarique-orange mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={fadeInUpVariants}
        transition={{ ...defaultTransition, delay: 0.1 }}
        className="max-w-md"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Page Not Found
        </h2>
        <p className="text-base md:text-lg text-[#666666] mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        transition={{ ...defaultTransition, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-datarique-orange text-white font-medium flex items-center justify-center gap-2 hover:bg-datarique-orange/90 transition-colors"
        >
          <Home size={18} />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-full bg-transparent border border-[#E5E5E5] text-[#171717] font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        transition={{ ...defaultTransition, delay: 0.3 }}
        className="mt-12"
      >
        <p className="text-sm text-[#666666] mb-3">
          Looking for something specific?
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/courses"
            className="px-4 py-2 text-sm bg-gray-100 text-[#171717] rounded-full hover:bg-gray-200 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/analytics"
            className="px-4 py-2 text-sm bg-gray-100 text-[#171717] rounded-full hover:bg-gray-200 transition-colors"
          >
            Analytics
          </Link>
          <Link
            href="/about-us"
            className="px-4 py-2 text-sm bg-gray-100 text-[#171717] rounded-full hover:bg-gray-200 transition-colors"
          >
            About Us
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
