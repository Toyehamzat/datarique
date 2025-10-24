"use client";
import {
  Folder,
  ArrowRight,
  LucideIcon,
  ChartLine,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  defaultTransition,
  defaultViewport,
} from "@/lib/motion";
import Link from "next/link";
import { Service } from "@/types/home-page";

interface ServicesSectionProps {
  services?: Service[];
}

// Map icon strings to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Folder,
  ChartLine,
  MessageCircle,
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      id: 1,
      header: "EDUCATION",
      title: "Training",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      btn_text: "Enroll Now",
      icon: "Folder",
    },
    {
      id: 2,
      header: "SERVICES",
      title: "Analytics Services",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      btn_text: "Subscribe to Analytics",
      icon: "ChartLine",
    },
    {
      id: 3,
      header: "SERVICES",
      title: "Consultation",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      btn_text: "Book a consultation",
      icon: "MessageCircle",
    },
  ];

  const servicesToRender =
    services && services.length > 0 ? services : defaultServices;

  return (
    <div className="flex flex-col gap-2.5">
      {servicesToRender.map((service, serviceIndex) => {
        const isOdd = serviceIndex % 2 !== 0;
        const Icon = iconMap[service.icon ?? ""] || Folder;

        // Determine which items list to display
        const items =
          service.courses && service.courses.length > 0
            ? service.courses
            : service.analytics && service.analytics.length > 0
            ? service.analytics
            : service.consultations && service.consultations.length > 0
            ? service.consultations
            : [];

        return (
          <motion.section
            key={service.id || serviceIndex}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInVariants}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="bg-white rounded-[20px] shadow-sm p-3 md:p-10 lg:p-12"
          >
            <div
              className={`flex flex-col justify-center items-center ${
                isOdd ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12`}
            >
              {/* Content */}
              <div className="pt-3 md:pt-0 flex-1">
                {/* Header */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-datarique-navy tracking-wider uppercase mb-3">
                    {service.header}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-8 font-normal">
                    {service.description}
                  </p>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-datarique-orange hover:bg-datarique-orange/90 text-white font-medium transition-colors duration-200"
                  >
                    <span>{service.btn_text}</span>
                    <div className="p-1 bg-orange-400 rounded-full">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </Link>
                </div>

                {/* Items list - courses, analytics, or consultations */}
                <div className="space-y-4 mt-12">
                  {items.map((item, itemIndex) => {
                    return (
                      <div
                        key={item.id || itemIndex}
                        className="flex items-center justify-between p-4 border-b border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className="w-5 h-5 text-[#666666]"
                            strokeWidth={1.5}
                          />
                          <span className="text-[#666666] text-sm md:text-base font-medium">
                            {item.title}
                          </span>
                        </div>
                        <ArrowRight
                          className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
                          strokeWidth={1.5}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className="hidden md:block h-[590px] w-full lg:w-[540px] bg-datarique-navy rounded-lg mx-6 mb-6 relative overflow-hidden shrink-0 ">
                <Image
                  src={service.image?.url || "/images/pixel.svg"}
                  alt={service.image?.alternativeText || service.title || ""}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
