"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariants, defaultTransition, defaultViewport } from "@/lib/motion";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "DaTarique transformed how our small business tracks performance — we get weekly reports like we're a big tech company.",
      author: "Grace, SME Owner",
    },
    {
      quote:
        "DaTarique transformed how our small business tracks performance — we get weekly reports like we're a big tech company.",
      author: "Grace, SME Owner",
    },
    {
      quote:
        "DaTarique transformed how our small business tracks performance — we get weekly reports like we're a big tech company.",
      author: "Grace, SME Owner",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInVariants}
      transition={defaultTransition}
      className="bg-white rounded-[20px] shadow-sm p-3 md:p-10 lg:p-12 flex flex-col gap-6"
    >
      <div>
        {/* Header */}
        <div className="mb-10 pt-3 md:pt-0">
          <p className="text-sm font-semibold text-datarique-navy tracking-wider uppercase mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black leading-tight">
            Trusted by Data-driven
            <br />
            experts & businesses.
          </h2>
        </div>

        {/* Testimonials - Mobile Slider / Desktop Grid */}
        <div className="relative">
          {/* Mobile Slider */}
          <div className="md:hidden">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Slider Container */}
            <div className="bg-[#F9F9F9] p-6 rounded-[20px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <blockquote className="mb-4">
                    <p className="text-[#000000] text-base leading-relaxed font-normal">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>
                  </blockquote>
                  <cite className="text-[#666666] text-sm font-medium not-italic">
                    - {testimonials[currentIndex].author}
                  </cite>
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-datarique-orange w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F9F9F9] p-6 rounded-[20px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className="transition-shadow duration-200"
              >
                <blockquote className="mb-4">
                  <p className="text-[#000000] text-base md:text-lg leading-relaxed font-normal">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                <cite className="text-[#666666] text-sm font-medium not-italic">
                  - {testimonial.author}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative text-white h-[380px] rounded-[20px] p-3 md:p-10 bg-datarique-navy">
        <div className="flex flex-col gap-9 z-30 relative">
          <p
            className="font-semibold md:text-[40px] leading-[96%] tracking-[-0.04em]"
            style={{ fontFamily: "Geist" }}
          >
            Whether you&apos;re learning or scaling,
            <br /> your data journey starts here.
          </p>
          <div className="flex gap-2.5 text-sm md-text-sm">
            <button className="px-4 py-2 rounded-full bg-transparent border border-[#E5E5E5] text-white cursor-pointer hover:bg-gray-100/5">
              Book a consultation
            </button>
            <button className="px-4 py-2 rounded-full border border-transparent hover:bg-white/90 bg-white text-black flex items-center gap-0.5 cursor-pointer">
              Enroll Now
              <ArrowRight size={14} className="text-black font-extrabold" />
            </button>
          </div>
        </div>
        <Image
          src="/images/pixel.svg"
          alt="Call to Action"
          width={400}
          height={380}
          className="absolute bottom-0 right-0 w-full h-full object-cover rounded-lg"
        />
      </div>
    </motion.section>
  );
}
