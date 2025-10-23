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

interface ServiceItem {
  title: string;
  // href: string;
}

interface Service {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  items: ServiceItem[];
  image?: string;
  icon?: LucideIcon;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      tag: "EDUCATION",
      title: "Training",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      buttonText: "Enroll Now",
      buttonHref: "/courses",
      items: [
        { title: "Excel (General & Data Analytics)" },
        { title: "SQL (All variants)" },
        { title: "Power BI" },
        // { title: "Looker Studio", href: "/course/looker" },
      ],
      image: "/images/training.svg",
      icon: Folder,
    },
    {
      tag: "SERVICES",
      title: "Analytics Services",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      buttonText: "Subscribe to Analytics",
      buttonHref: "/analytics",
      items: [
        { title: "Dashboard Creation" },
        { title: "Data Cleaning & transformation" },
        { title: "Predictive Analysis & Reporting" },
      ],
      image: "/images/pixel.svg",
      icon: ChartLine,
    },
    {
      tag: "SERVICES",
      title: "Consultation",
      description:
        "Empower your journey — learn, analyze, and grow with data-driven solutions built for you.",
      buttonText: "Book a consultation",
      buttonHref: "/consultation",
      items: [
        { title: "SME Data Strategy Sessions" },
        { title: "Data Pipeline Setups" },
        { title: "KPI Planning & Governance" },
      ],
      image: "/images/pixel.svg",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {services.map((service, serviceIndex) => {
        const isOdd = serviceIndex % 2 !== 0;

        return (
          <motion.section
            key={serviceIndex}
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
                    {service.tag}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-8 font-normal">
                    {service.description}
                  </p>
                  <Link
                    href={service.buttonHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-datarique-orange hover:bg-datarique-orange/90 text-white font-medium transition-colors duration-200"
                  >
                    <span>{service.buttonText}</span>
                    <div className="p-1 bg-orange-400 rounded-full">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </Link>
                </div>

                {/* Items List */}
                <div className="space-y-4 mt-12">
                  {service.items.map((item, itemIndex) => {
                    const Icon = service.icon || Folder;
                    return (
                      <div
                        key={itemIndex}
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
                {/* Replace with actual images */}
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
