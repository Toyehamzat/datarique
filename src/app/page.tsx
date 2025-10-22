import HeroSection from "@/component/landing/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5 scroll-smooth" >
    <HeroSection/>
      <div className="text-black bg-white h-96 rounded-[20px] shadow-xs p-10">
        body
      </div>
      <div className="text-black bg-white h-96 rounded-[20px] shadow-xs p-10">
        body
      </div>
    </div>
  );
}
