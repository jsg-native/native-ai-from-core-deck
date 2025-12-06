import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Zap, Workflow, Brain, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    icon: Zap,
    title: "Automate",
    subtitle: "the Repetitive",
    description: "Takes over the grind - tracks projects, filing taxes, summarizing emails, tracking payments.",
    example: "Should I summarise your order emails from last week and send to the billing team?",
    features: ["Email Summarization", "Payment Tracking", "Tax Filing Automation"],
  },
  {
    icon: Workflow,
    title: "Orchestrate",
    subtitle: "the Operational",
    description: "Delivers unprompted campaigns, and finances in a living business memory.",
    example: "Project 'Onboard Sales Head' is on track. Should I send a summary of our progress and next steps?",
    features: ["Campaign Management", "Project Tracking", "Financial Oversight"],
  },
  {
    icon: Brain,
    title: "Nudge",
    subtitle: "the Strategic",
    description: "Proactively suggests strategic actions based on business context and priorities.",
    example: "I found a packaging material that can reduce costs by 20%, should I tell you more?",
    features: ["Cost Optimization", "Strategic Insights", "Proactive Suggestions"],
  },
];

const UseCases = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your backend
    console.log(`Early access request for ${selectedUseCase}:`, email);
    setSubmitted(true);
    setTimeout(() => {
      setSelectedUseCase(null);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Three Core Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Native AI transforms how businesses operate through intelligent automation, orchestration, and strategic nudges
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">
                    {useCase.title}
                    <div className="text-lg font-normal text-muted-foreground mt-1">
                      {useCase.subtitle}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-sm italic text-foreground/90">
                      "{useCase.example}"
                    </p>
                  </div>
                  
                  {/* Feature mini cards */}
                  <div className="space-y-2 pt-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <button
                        key={featureIndex}
                        onClick={() => setSelectedUseCase(`${useCase.title}: ${feature}`)}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group/feature cursor-pointer"
                      >
                        <span className="text-sm text-foreground/80 group-hover/feature:text-foreground transition-colors">
                          {feature}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/feature:text-primary group-hover/feature:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom stat */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card/70 backdrop-blur-sm border border-border rounded-2xl px-8 py-6">
            <p className="text-sm text-muted-foreground mb-2">Expected Impact</p>
            <p className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              60% of nudges
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              driven by group chat inference
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={!!selectedUseCase} onOpenChange={() => setSelectedUseCase(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl text-center">Coming Soon</DialogTitle>
            <DialogDescription className="text-center text-base">
              <span className="font-medium text-foreground">{selectedUseCase}</span>
              <br />
              is currently in development. Get early access when it launches.
            </DialogDescription>
          </DialogHeader>
          
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-primary font-medium">You're on the list!</p>
              <p className="text-sm text-muted-foreground">We'll notify you when this feature is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                Get Early Access
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UseCases;
