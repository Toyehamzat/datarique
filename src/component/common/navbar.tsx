"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { href: "/about-us", label: "About us" },
    { href: "#course", label: "Course", hasDropdown: true },
    { href: "/analytics", label: "Analytics" },
  ];

  const { scrollY } = useScroll();
  const rawScale = useTransform(scrollY, [0, 150], [1, 0.96], { clamp: true });
  const scale = useSpring(rawScale, { stiffness: 260, damping: 32, mass: 0.9 });

  const hiddenRaw = useMotionValue(0);
  const hidden = useSpring(hiddenRaw, {
    stiffness: 700,
    damping: 60,
    mass: 0.9,
  });
  const y = useTransform(hidden, [0, 1], [0, -100]); // Increased from -48 to ensure full hide
  const opacity = useTransform(hidden, [0, 1], [1, 0]);

  const lastYRef = useRef(0);
  const targetHiddenRef = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const HIDE_SCROLL_THRESHOLD = 300;
    const DOWN_DEADZONE = 5; // Requires decent scroll down to hide
    const UP_DEADZONE = 1; // Very sensitive - shows immediately on any scroll up
    
    const prev = lastYRef.current;
    const delta = latest - prev;
    lastYRef.current = latest;

    // Always show navbar near the top
    if (latest < 80) {
      targetHiddenRef.current = false;
      hiddenRaw.set(0);
      return;
    }

    // Scrolling down past threshold -> hide
    if (delta > DOWN_DEADZONE && latest > HIDE_SCROLL_THRESHOLD) {
      targetHiddenRef.current = true;
      hiddenRaw.set(1);
    } 
    // Scrolling up even slightly -> show immediately
    else if (delta < -UP_DEADZONE) {
      targetHiddenRef.current = false;
      hiddenRaw.set(0);
    }
  });

  const courses = [
    { href: "/courses", label: "SQL Mastery" },
    { href: "/courses", label: "Excel for Everyone" },
    { href: "/courses", label: "Power BI for Business" },
    { href: "/courses", label: "Looker Studio" },
  ];

  return (
    <div className="fixed top-4 md:top-4 left-1/2 -translate-x-1/2 w-full max-w-[1320px] px-4 z-50">
      <motion.nav
        initial={false}
        style={{ scale, y, opacity, boxShadow: "0px 4px 24px 0px #00000029" }}
        className={`w-full bg-white/95 border border-[#DDDDDD] flex items-center justify-between px-6 h-16 rounded-[24px] md:rounded-[100px]`}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="logo" width={110} height={36} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3.5 tracking-[0.01rem] text-sm ">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative text-[#666666] font-medium"
            >
              {!link.hasDropdown ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <div className="group">
                  <button
                    onMouseEnter={() => setIsCourseOpen(true)}
                    onMouseLeave={() => setIsCourseOpen(false)}
                    onClick={() => setIsCourseOpen((s) => !s)}
                    className="flex items-center gap-0.5"
                  >
                    <span>{link.label}</span>
                    <motion.span
                      initial={false}
                      animate={{
                        rotate: isCourseOpen ? 180 : 0,
                        y: isCourseOpen ? -1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                      }}
                      style={{
                        display: "inline-block",
                        transformOrigin: "50% 50%",
                      }}
                    >
                      <ChevronDown size={16} strokeWidth={2} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isCourseOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 mt-2 w-48 bg-white border border-[#EAEAEA] rounded-xl shadow-md p-2"
                        onMouseEnter={() => setIsCourseOpen(true)}
                        onMouseLeave={() => setIsCourseOpen(false)}
                      >
                        {courses.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 hover:bg-[#F7F7F7] rounded-md"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ))}
          <button className="px-4 py-2.5 rounded-full bg-transparent border border-[#E5E5E5] text-[#171717]  cursor-pointer hover:bg-gray-100">
            Book a consultation
          </button>
          <button className="px-4 py-2.5 rounded-full border border-transparent hover:bg-datarique-orange/90 cursor-pointer bg-datarique-orange text-white flex items-center gap-0.5">
            Enroll Now
            <div className="p-1 bg-orange-400 rounded-full">
              <ArrowRight size={14} className="text-white font-extrabold" />
            </div>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[#393939] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden absolute left-4 right-4 top-[64px]"
            >
              <div className="bg-white border border-[#DDDDDD] rounded-2xl shadow-md overflow-hidden">
                <div className="flex flex-col p-3">
                  {navLinks.map((item) => (
                    <div key={item.label} className="py-1">
                      {!item.hasDropdown ? (
                        <Link
                          href={item.href}
                          className="text-[#393939] font-semibold text-base px-4 py-3 rounded-xl block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <button
                            onClick={() => setIsCourseOpen((s) => !s)}
                            className="w-full text-left px-4 py-3 font-semibold"
                          >
                            {item.label}
                          </button>
                          {isCourseOpen && (
                            <div className="pl-6">
                              {courses.map((course) => (
                                <Link
                                  key={course.href}
                                  href={course.href}
                                  className="block px-4 py-2 rounded-md"
                                >
                                  {course.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="px-2 pt-2 pb-3 flex flex-col gap-2">
                    <button className="flex-1 px-4 py-2.5 rounded-full bg-transparent border border-[#E5E5E5] text-[#171717] text-xs  cursor-pointer hover:bg-gray-100">
                      Book a consultation
                    </button>
                    <button className="flex-1 justify-center px-4 py-2.5 rounded-full border border-transparent cursor-pointer hover:bg-datarique-orange/90 bg-datarique-orange text-white flex items-center gap-0.5 text-xs">
                      Enroll Now
                      <div className="p-1 bg-orange-400 rounded-full">
                        <ArrowRight
                          size={14}
                          className="text-white font-extrabold"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
