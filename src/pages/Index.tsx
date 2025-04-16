
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Values } from "@/components/sections/Values";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <WhatWeDo />
      <Values />
      <CallToAction />
    </div>
  );
};

export default Index;
