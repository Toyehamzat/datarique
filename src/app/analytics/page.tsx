import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Services - Datarique",
  description:
    "Professional data analytics and consultation services to help your business make data-driven decisions and unlock insights from your data.",
};

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <div className="text-black bg-white rounded-[20px] shadow-xs p-10">
        <h1 className="text-4xl font-bold mb-6">Analytics Services</h1>
        <p className="text-lg">
          Expert analytics and consultation for your business
        </p>
      </div>
    </div>
  );
}
