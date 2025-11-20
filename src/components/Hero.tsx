import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import nativeLogo from "@/assets/native-logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={nativeLogo} alt="Native AI" className="h-16 md:h-20" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              THE BIG AI
            </span>
            <br />
            <span className="text-foreground">
              FOR SMALL
            </span>
            <br />
            <span className="text-foreground">
              BUSINESSES
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tech that grows <span className="text-accent font-semibold">with</span> the business.
            <br />
            Tech that grows <span className="text-accent font-semibold">inside</span> the business.
          </p>

          {/* Evolution path */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm md:text-base">
              <span className="px-4 py-2 bg-muted rounded-lg font-medium">Observer</span>
              <ArrowRight className="text-muted-foreground w-5 h-5" />
              <span className="px-4 py-2 bg-muted rounded-lg font-medium">Assistant</span>
              <ArrowRight className="text-muted-foreground w-5 h-5" />
              <span className="px-4 py-2 bg-secondary rounded-lg font-medium">Semi-Autonomous</span>
              <ArrowRight className="text-muted-foreground w-5 h-5" />
              <span className="px-4 py-2 bg-primary/20 rounded-lg font-medium text-primary">Fully Autonomous</span>
              <ArrowRight className="text-muted-foreground w-5 h-5" />
              <span className="px-4 py-2 bg-gradient-primary rounded-lg font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Superintelligence
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg">
              Watch Demo
            </Button>
          </div>

          {/* BLM Badge */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/70 backdrop-blur-sm border border-border rounded-full">
              <span className="text-sm text-muted-foreground">Powered by</span>
              <span className="text-lg font-bold bg-gradient-accent bg-clip-text text-transparent">
                BLM™
              </span>
              <span className="text-sm text-muted-foreground">Business Language Model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
