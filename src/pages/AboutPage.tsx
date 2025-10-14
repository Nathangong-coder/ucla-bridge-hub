import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Trophy, GraduationCap } from "lucide-react";
import cardsImage from "@/assets/cards-detail.jpg";
import studentsImage from "@/assets/students-playing.jpg";

const benefits = [
  {
    icon: Brain,
    title: "Sharpen Your Mind",
    description: "Develop critical thinking, problem-solving, and strategic planning skills that translate to real-world success."
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with fellow Bruins who share your passion for strategic games and intellectual challenges."
  },
  {
    icon: Trophy,
    title: "Compete & Grow",
    description: "Participate in tournaments and friendly matches. Progress from beginner to advanced player with expert guidance."
  },
  {
    icon: GraduationCap,
    title: "Learn from the Best",
    description: "Access lessons, workshops, and mentorship from experienced players who love teaching the game."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Bridge
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover the game that's captivated millions worldwide
          </p>
        </div>
      </section>

      {/* What is Bridge */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What is Bridge?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Bridge is a sophisticated trick-taking card game played by four players in two competing partnerships. Known as the "game of a lifetime," it combines strategy, communication, and logical thinking.
                </p>
                <p>
                  Often described as chess with cards, bridge challenges players to use deductive reasoning, memory, and partnership coordination to outsmart their opponents.
                </p>
                <p className="font-semibold text-foreground">
                  Whether you're a complete beginner or an experienced player, our club welcomes all skill levels!
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={cardsImage} 
                  alt="Bridge cards being played" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Join Our Club?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just a card game—it's a community of strategic thinkers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Community Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={studentsImage} 
                alt="Students playing bridge together" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
