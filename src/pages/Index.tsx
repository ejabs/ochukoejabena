import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import OperatingModelSection from "@/components/OperatingModelSection";
import LeadershipSection from "@/components/LeadershipSection";
import FinalCTASection from "@/components/FinalCTASection";
import CredentialsSection from "@/components/CredentialsSection";

const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <CaseStudiesSection />
    <OperatingModelSection />
    <LeadershipSection />
    <CredentialsSection />
    <FinalCTASection />
    <footer className="py-8 px-6 text-center text-xs font-sans text-dim border-t border-divider">
      © {new Date().getFullYear()} Ochuko Anu Ejabena. All rights reserved.
    </footer>
  </div>
);

export default Index;
