
import { Database, Layout } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { Card, CardContent } from "../ui/card";

export const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Qué ofrecemos" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-600">
            <AnimatedText
              text="Soluciones tecnológicas que transforman tu negocio y liberan tu potencial humano."
              className="inline-block"
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <CardContent className="p-8">
              <div className="bg-brand-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Layout className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Diseño de tu aplicación</h3>
              <p className="text-gray-600">
                Creamos experiencias de usuario intuitivas y atractivas que conectan con tu audiencia y mejoran la interacción con tu marca.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <CardContent className="p-8">
              <div className="bg-brand-purple/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Database className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Gestión base de datos</h3>
              <p className="text-gray-600">
                Diseñamos e implementamos estructuras de datos eficientes que garantizan la seguridad y el rendimiento óptimo de tu aplicación.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
