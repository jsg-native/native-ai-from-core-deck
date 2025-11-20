import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import nativeIcon from "@/assets/native-icon.png";

const messages = [
  {
    sender: "Mike Torres",
    initials: "MT",
    message: "Nice! I'll keep an eye on the conversion metrics",
    time: "7m ago",
    avatar: "bg-avatar-blue",
  },
  {
    sender: "Sarah Chen",
    initials: "SC",
    message: "Looks good so far. Traffic is picking up nicely ✓",
    time: "6m ago",
    avatar: "bg-avatar-purple",
  },
  {
    sender: "Alex Kim",
    initials: "AK",
    message: "@Native can you give us an update on today's performance?",
    time: "5m ago",
    avatar: "bg-avatar-teal",
  },
  {
    sender: "Native",
    initials: "N",
    message: "Of course! Today's looking great overall. Revenue is up 12.5% compared to yesterday, driven primarily by strong conversion rates in the afternoon. Your active user count increased by 8.3%, which is excellent momentum. However, I noticed your conversion rate dipped slightly to 3.24% (down 2.1%). This might be worth investigating - could be related to the checkout flow updates Sarah just deployed.",
    time: "5m ago",
    isNative: true,
  },
  {
    sender: "Mike Torres",
    initials: "MT",
    message: "Hmm, that conversion dip is concerning. Any ideas what's causing it?",
    time: "5m ago",
    avatar: "bg-avatar-blue",
  },
];

const ChatDemo = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">A Group Chat</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                That Understands Your Business
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Native AI is integrated into your team's conversations, using context from chats to deliver 
              hyper-contextual task management while listening, observing, learning, and inferring from your 
              business communications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Listens</span> to every conversation across integrated platforms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Learns</span> from your business patterns and priorities
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Acts</span> with reverse-prompts on what needs attention
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                PROMPT → PRODUCTION → PREDICTION
              </Badge>
            </div>
          </div>

          {/* Right side - Chat interface */}
          <Card className="bg-card/70 backdrop-blur-sm border-border overflow-hidden">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Team Chat</h3>
                  <p className="text-sm text-muted-foreground">4 members · @Native for AI updates</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className="flex gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Avatar className={`w-10 h-10 ${msg.isNative ? 'border-2 border-accent' : ''}`}>
                    {msg.isNative ? (
                      <img src={nativeIcon} alt="Native" className="w-full h-full p-1" />
                    ) : (
                      <div className={`w-full h-full ${msg.avatar} flex items-center justify-center text-white font-semibold text-sm`}>
                        {msg.initials}
                      </div>
                    )}
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-semibold ${msg.isNative ? 'text-accent' : 'text-foreground'}`}>
                        {msg.sender}
                      </span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className={`text-sm ${msg.isNative ? 'bg-accent/10 border border-accent/20 rounded-lg p-3' : 'text-muted-foreground'}`}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
