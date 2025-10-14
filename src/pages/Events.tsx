import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Trophy, Users, GraduationCap } from "lucide-react";
import studentsImage from "@/assets/students-playing.jpg";
import tournamentImage from "@/assets/tournament.jpg";

const Events = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Events & Meetings
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join us for weekly games, lessons, and exciting tournaments
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Weekly Meetings */}
            <Card className="bg-gradient-card border-border shadow-elegant hover:shadow-glow transition-all">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={studentsImage} 
                  alt="Students playing bridge" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Weekly Meetings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Every Week</p>
                    <p className="text-muted-foreground">Check Discord for schedule updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Flexible Times</p>
                    <p className="text-muted-foreground">Sessions for all skill levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">UCLA Campus</p>
                    <p className="text-muted-foreground">Location announced on Discord</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tournaments */}
            <Card className="bg-gradient-card border-border shadow-elegant hover:shadow-glow transition-all">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={tournamentImage} 
                  alt="Bridge tournament" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Tournaments & Competitions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Regular Tournaments</p>
                    <p className="text-muted-foreground">Test your skills in friendly competition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Inter-College Events</p>
                    <p className="text-muted-foreground">Compete with other universities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Lessons & Workshops</p>
                    <p className="text-muted-foreground">Learn from experienced players</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-card border border-primary/20 rounded-lg p-8 shadow-elegant text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our Discord community to receive notifications about upcoming events, 
              schedule changes, and special announcements. We post all event details and updates there!
            </p>
            <div className="flex gap-4 justify-center text-3xl">
              <span className="text-primary">♠</span>
              <span className="text-destructive">♥</span>
              <span className="text-destructive">♦</span>
              <span className="text-primary">♣</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
