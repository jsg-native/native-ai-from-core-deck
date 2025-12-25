import NavigationSection from "@/components/landing/NavigationSection";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsBLMSection from "@/components/landing/WhatIsBLMSection";
import InteractiveChatDemo from "@/components/landing/InteractiveChatDemo";
import OwnershipSection from "@/components/landing/OwnershipSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CommandCenterSection from "@/components/landing/CommandCenterSection";
import BuiltForSMBSection from "@/components/landing/BuiltForSMBSection";
import ClosingCTASection from "@/components/landing/ClosingCTASection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationSection />
      <main className="pt-16">
        <HeroSection />
        <WhatIsBLMSection />
        <InteractiveChatDemo />
        <OwnershipSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CommandCenterSection />
        <BuiltForSMBSection />
        <ClosingCTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
