import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Datarique",
  description:
    "Learn about Datarique's mission to empower businesses and individuals with expert data analytics training, consultation, and services.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth">
      <div className="text-black bg-white rounded-[20px] shadow-xs p-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          Welcome to Datarique - Your Direction for Data
        </p>
      </div>
    </div>
  );
}
