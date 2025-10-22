"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  const pathname = usePathname();

  // Don't show CTA section on home page
  if (pathname === "/") {
    return null;
  }

  return (
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
  );
}
