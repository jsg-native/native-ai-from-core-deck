import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import ChatDemo from "@/components/ChatDemo";
import IntegrationEcosystem from "@/components/IntegrationEcosystem";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <UseCases />
      <ChatDemo />
      <IntegrationEcosystem />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
