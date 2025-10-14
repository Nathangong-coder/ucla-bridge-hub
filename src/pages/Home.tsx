import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bridge.jpg";
import cardsImage from "@/assets/cards-detail.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
              UCLA Bridge Club
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
              Master the world's greatest card game
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join a community of strategic thinkers and bridge enthusiasts at UCLA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-lg px-8 py-6"
              >
                <Link to="/join">Join Our Community</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Bridge?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bridge is more than just a card game—it's a mental sport that combines logic, strategy, and partnership. Often called "chess with cards," it challenges you to think critically while building lasting friendships.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Discover Bridge</Link>
              </Button>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={cardsImage} 
                  alt="Bridge cards" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border hover:shadow-elegant transition-all">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Learn & Improve
                </h3>
                <p className="text-muted-foreground">
                  From beginner lessons to advanced strategy sessions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-elegant transition-all">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Build Community
                </h3>
                <p className="text-muted-foreground">
                  Connect with fellow Bruins who love strategic games
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:shadow-elegant transition-all">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Compete & Win
                </h3>
                <p className="text-muted-foreground">
                  Participate in tournaments and friendly competitions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
