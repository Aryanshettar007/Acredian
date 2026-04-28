import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrackRecord } from "@/components/TrackRecord";
import { LogoStrip } from "@/components/LogoStrip";
import { AccredianEdge } from "@/components/AccredianEdge";
import { DomainExpertise } from "@/components/DomainExpertise";
import { TailoredCourseSegmentation } from "@/components/TailoredCourseSegmentation";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { CATFramework } from "@/components/CATFramework";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <TrackRecord />
      <LogoStrip />
      <AccredianEdge />
      <DomainExpertise />
      <TailoredCourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <HowItWorks />
      <FAQSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
