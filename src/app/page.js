import Link from "next/link";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyProtectSection from "@/components/WhyProtectSection";
import StepsSection from "@/components/StepsSection";
import PackagesSection from "@/components/PackagesSection";
import FaqSection from "@/components/FaqSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {


  return (
    <main>
      {/* NAVBAR */}
      <WhatsAppButton/>
     <HeroSection/>
     <AboutSection/>
     <WhyProtectSection/>
     <StepsSection/>
     <PackagesSection/>
     <FaqSection/>
    </main>
  );
}