import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import MeetingsEvents from "@/components/MeetingsEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyJoin />
      <MeetingsEvents />
      <Footer />
    </div>
  );
};

export default Index;
