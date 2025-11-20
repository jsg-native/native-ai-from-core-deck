import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Workflow, Brain } from "lucide-react";

const useCases = [
  {
    icon: Zap,
    title: "Automate",
    subtitle: "the Repetitive",
    description: "Takes over the grind - tracks projects, filing taxes, summarizing emails, tracking payments.",
    example: "Should I summarise your order emails from last week and send to the billing team?",
    color: "text-accent",
  },
  {
    icon: Workflow,
    title: "Orchestrate",
    subtitle: "the Operational",
    description: "Delivers unprompted campaigns, and finances in a living business memory.",
    example: "Project 'Onboard Sales Head' is on track. Should I send a summary of our progress and next steps?",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "Nudge",
    subtitle: "the Strategic",
    description: "Proactively suggests strategic actions based on business context and priorities.",
    example: "I found a packaging material that can reduce costs by 20%, should I tell you more?",
    color: "text-accent",
  },
];

const UseCases = () => {
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
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow duration-300`}>
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
    </section>
  );
};

export default UseCases;
