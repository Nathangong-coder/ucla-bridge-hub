import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-bridge.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      
      {/* Content */}
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => window.open('https://discord.gg/BXm7HPEuHQ', '_blank')}
            >
              Join Our Discord
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => window.open('https://www.instagram.com/bridgeclubucla/', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us
            </Button>
          </div>

          {/* Card suits decoration */}
          <div className="flex justify-center gap-6 text-4xl text-primary-foreground/60">
            <span className="hover:text-primary-foreground transition-colors">♠</span>
            <span className="hover:text-secondary transition-colors">♥</span>
            <span className="hover:text-primary-foreground transition-colors">♦</span>
            <span className="hover:text-primary-foreground transition-colors">♣</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
