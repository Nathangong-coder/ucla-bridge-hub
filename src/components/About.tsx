import cardsImage from "@/assets/cards-detail.jpg";

const About = () => {
  return (
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
  );
};

export default About;
