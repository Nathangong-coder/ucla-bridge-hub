import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import studentsImage from "@/assets/students-playing.jpg";
import tournamentImage from "@/assets/tournament.jpg";

const MeetingsEvents = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Us at Our Events
          </h2>
          <p className="text-xl text-muted-foreground">
            Regular meetings, lessons, and tournaments throughout the year
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
      </div>
    </section>
  );
};

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

export default MeetingsEvents;
