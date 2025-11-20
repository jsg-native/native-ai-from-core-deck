import { Database, Mail, MessageSquare, BarChart3, ShoppingCart, Layers, Globe, Smartphone } from "lucide-react";

const integrations = [
  { icon: Database, name: "CRM", category: "Systems" },
  { icon: Layers, name: "ERP", category: "Systems" },
  { icon: ShoppingCart, name: "PoS", category: "Systems" },
  { icon: BarChart3, name: "Analytics", category: "Traffic" },
  { icon: Mail, name: "Emails", category: "Conversations" },
  { icon: MessageSquare, name: "WhatsApp", category: "Conversations" },
  { icon: Globe, name: "Website", category: "Digital Presence" },
  { icon: Smartphone, name: "Instagram", category: "Digital Presence" },
];

const IntegrationEcosystem = () => {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Your Business,</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Fully Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every business's autonomous AI agent hosted on <span className="text-accent font-semibold">businessname.deepnative.ai</span>
          </p>
        </div>

        <div className="relative">
          {/* Central hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary">
                <div className="text-center text-primary-foreground">
                  <p className="text-xs font-semibold">NATIVE</p>
                  <p className="text-2xl font-bold">AI</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse-glow opacity-50" />
            </div>
          </div>

          {/* Integration cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{integration.name}</p>
                      <p className="text-xs text-muted-foreground">{integration.category}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card/70 backdrop-blur-sm border border-border rounded-2xl px-8 py-6">
              <p className="text-sm text-muted-foreground mb-2">Powered by</p>
              <p className="text-2xl font-bold text-foreground mb-2">
                Small Language Model
              </p>
              <p className="text-sm text-muted-foreground">
                Fine-tuned on your company data & interactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
