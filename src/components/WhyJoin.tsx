import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Trophy, GraduationCap } from "lucide-react";

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

const WhyJoin = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Join Bridge Club?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just a card game—it's a community of strategic thinkers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
      </div>
    </section>
  );
};

export default WhyJoin;
