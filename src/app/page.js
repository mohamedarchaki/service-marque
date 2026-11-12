import Link from "next/link";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyProtectSection from "@/components/WhyProtectSection";
import StepsSection from "@/components/StepsSection";
import PackagesSection from "@/components/PackagesSection";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {


  return (
    <main>
      {/* NAVBAR */}
     <HeroSection/>
     <AboutSection/>
     <WhyProtectSection/>
     <StepsSection/>
     <PackagesSection/>
     <FaqSection/>
    </main>
  );
}