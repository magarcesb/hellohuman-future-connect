
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Development } from "@/components/sections/Development";
import { Consulting } from "@/components/sections/Consulting";
import { Team } from "@/components/sections/Team";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Development />
      <Consulting />
      <Team />
      <CallToAction />
    </div>
  );
};

export default Index;
