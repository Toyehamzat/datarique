import { Mail, Phone, Instagram, Music2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const contactItems = [
    {
      icon: Mail,
      text: "datariquelimited@gmail.com",
      href: "mailto:datariquelimited@gmail.com",
    },
    {
      icon: Phone,
      text: "+234 708 661 8816",
      href: "tel:+2347086618816",
    },
    {
      icon: Instagram,
      text: "@datariqueltd",
      href: "https://instagram.com/datariqueltd",
    },
    {
      icon: Music2,
      text: "@datariqueltd",
      href: "https://tiktok.com/@datariqueltd",
    },
  ];

  return (
    <footer className="bg-white rounded-[20px] shadow-sm md:p-10 p-3">
      <div className="">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-datarique-navy tracking-wider uppercase mb-3">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#000000] mb-3">
            Let&apos;s talk Data
          </h2>
          <p className="text-[#666666] text-base md:text-lg tracking-[0.01em]">
            Whether you want to learn, consult, or outsource, we&apos;re ready
            to guide you.
          </p>
        </div>

        {/* Contact Items */}
        <div className="space-y-3 mb-16">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <Icon className="w-5 h-5 text-[#666666]" strokeWidth={1.5} />
                  <span className="text-[#666666] text-sm md:text-xl font-medium">
                    {item.text}
                  </span>
                </div>
                <ArrowRight
                  className="w-5 h-5 text-[#666666] group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
                  strokeWidth={1.5}
                />
              </Link>
            );
          })}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6">
          <div className="text-gray-600 text-sm space-y-1">
            <p className="font-medium">© 2025 DaTarique Limited</p>
            <p className="text-gray-500">The Direction for Data.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
