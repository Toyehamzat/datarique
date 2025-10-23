import { ArrowRight, Clock, Award, CheckCircle2 } from "lucide-react";

export interface CourseCardProps {
  title: string;
  duration?: string;
  certificate?: string;
  description?: string | null;
  price: number;
  features: string[];
  highlight?: boolean;
  isPro?: boolean;
  buttonText?: string;
  badge?: string;
  analyticDescription?: string;
}

export default function CourseCard({
  title,
  duration,
  certificate,
  description,
  price,
  features,
  highlight = false,
  isPro = false,
  buttonText,
  badge,
  analyticDescription,
}: CourseCardProps) {
  return (
    <div
      className={`${
        isPro ? "bg-datarique-navy text-white" : "bg-white"
      } rounded-[20px] shadow-sm p-4 md:p-6 flex flex-col gap-6 md:gap-10 min-h-[500px] md:min-h-[655px] ${
        highlight ? "border-2 border-gray-200" : ""
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-6 md:gap-10">
        <div>
          {badge && (
            <span className="inline-block text-xs font-semibold tracking-wider uppercase mb-2 text-[#666666]">
              {badge}
            </span>
          )}
          <h2
            className={`text-xl md:text-2xl lg:text-3xl font-semibold ${
              isPro ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h2>
          {analyticDescription && (
            <p
              className={`text-sm md:text-base lg:text-lg  ${
                isPro ? "text-white/80" : "text-[#666666]"
              }`}
            >
              {analyticDescription}
            </p>
          )}
          <div className="flex flex-col gap-1.5 md:gap-2">
            {duration && (
              <div className="flex items-center gap-2">
                <Clock
                  className={isPro ? "text-white/80" : "text-[#666666]"}
                  size={14}
                  strokeWidth={1.5}
                />
                <span
                  className={`text-sm md:text-base lg:text-lg ${
                    isPro ? "text-white/80" : "text-[#666666]"
                  }`}
                >
                  {duration}
                </span>
              </div>
            )}
            {certificate && (
              <div className="flex items-center gap-2">
                <Award
                  className={isPro ? "text-white/80" : "text-[#666666]"}
                  size={14}
                  strokeWidth={1.5}
                />
                <span
                  className={`text-sm md:text-base lg:text-lg ${
                    isPro ? "text-white/80" : "text-[#666666]"
                  }`}
                >
                  {certificate}
                </span>
              </div>
            )}
          </div>
        </div>

        <button
          className={`w-full px-4 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer ${
            isPro
              ? "bg-white text-datarique-navy hover:bg-gray-100"
              : "bg-datarique-orange text-white hover:bg-datarique-orange/90"
          }`}
        >
          <span>{buttonText || "Enroll Now"}</span>
          <div
            className={`p-1 rounded-full ${
              isPro ? "bg-gray-400" : "bg-orange-400"
            }`}
          >
            <ArrowRight size={14} strokeWidth={2} />
          </div>
        </button>
      </div>

      {/* Features */}
      <div className="mb-4 md:mb-6">
        {/* Description */}
        {description && (
          <p
            className={`text-sm md:text-base lg:text-lg mb-3 md:mb-4 ${
              isPro ? "text-white/80" : "text-[#666666]"
            }`}
          >
            {description}
          </p>
        )}
        <p
          className={`text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3 ${
            isPro ? "text-white" : "text-[#666666]"
          }`}
        >
          You&apos;ll Learn:
        </p>
        <ul className="space-y-1.5 md:space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2
                className={`${
                  isPro ? "text-white" : "text-[#666666]"
                } shrink-0 mt-0.5`}
                size={14}
                strokeWidth={2}
              />
              <span
                className={`text-sm md:text-base lg:text-lg ${
                  isPro ? "text-white/90" : "text-[#666666]"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mt-auto pt-3 md:pt-4 border-t border-gray-200/20">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-3xl md:text-4xl font-bold ${
              isPro ? "text-white" : "text-black"
            }`}
          >
            ${price}
          </span>
          <span
            className={`text-xs md:text-sm ${
              isPro ? "text-white/60" : "text-gray-500"
            }`}
          >
            one time
          </span>
        </div>
      </div>
    </div>
  );
}
