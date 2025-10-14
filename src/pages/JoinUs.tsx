import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import studentsImage from "@/assets/students-playing.jpg";

const JoinUs = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Become part of UCLA's bridge family today
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={studentsImage} 
                alt="Bridge club members" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Join Steps */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Getting Started is Easy
              </h2>
              <p className="text-lg text-muted-foreground">
                No experience needed • All skill levels welcome • Free to join
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Discord */}
              <Card className="bg-gradient-card border-border shadow-elegant hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Join Discord</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our Discord server is the hub of all club activities. Get event notifications, 
                    ask questions, find practice partners, and connect with the community.
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                    onClick={() => window.open('https://discord.gg/BXm7HPEuHQ', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Our Discord
                  </Button>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="bg-gradient-card border-border shadow-elegant hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary/10 rounded-full">
                      <Instagram className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Follow on Instagram</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Stay updated with photos from our events, tournament highlights, and club announcements. 
                    Follow us for a glimpse into the UCLA Bridge community!
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-2 hover:bg-secondary/10"
                    size="lg"
                    onClick={() => window.open('https://www.instagram.com/bridgeclubucla/', '_blank')}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    @bridgeclubucla
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do I need to know how to play?</h4>
                  <p className="text-muted-foreground">
                    Not at all! We welcome complete beginners and provide lessons to help you learn. 
                    Many of our members started with zero experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What should I bring?</h4>
                  <p className="text-muted-foreground">
                    Just yourself! We provide all cards and materials. Bring a friend if you'd like—bridge is better together.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How often do you meet?</h4>
                  <p className="text-muted-foreground">
                    We have weekly meetings and regular tournaments throughout the quarter. 
                    Check our Discord for the most up-to-date schedule.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Is there a membership fee?</h4>
                  <p className="text-muted-foreground">
                    No! The club is completely free to join. We believe everyone should have access to learning and playing bridge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card Suits Decoration */}
            <div className="flex justify-center gap-6 text-5xl mt-12 opacity-30">
              <span>♠</span>
              <span className="text-destructive">♥</span>
              <span className="text-destructive">♦</span>
              <span>♣</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
