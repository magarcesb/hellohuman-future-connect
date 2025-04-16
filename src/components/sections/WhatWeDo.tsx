
import { BookOpen, Monitor, MessageCircle, Shield } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute right-0 top-1/4 h-72 w-72 bg-brand-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              <AnimatedText text="Qué hacemos" className="inline-block" />
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              <AnimatedText 
                text="Con nuestro equipo desarrollamos soluciones tecnológicas al servicio
                      del ser humano, liberando tiempo y potencial para lo que realmente importa."
                className="inline-block"
              />
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full flex-shrink-0">
                  <BookOpen className="text-brand-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Automatización de procesos</h3>
                  <p className="text-gray-600">
                    Identificamos y automatizamos procesos repetitivos que consumen tiempo valioso de las personas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-purple/10 p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="text-brand-purple" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Desarrollo a medida</h3>
                  <p className="text-gray-600">
                    Creamos software personalizado que resuelve necesidades específicas de nuestros clientes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-coral/10 p-3 rounded-full flex-shrink-0">
                  <Monitor className="text-brand-coral" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Inteligencia artificial aplicada</h3>
                  <p className="text-gray-600">
                    Implementamos soluciones de IA que potencian las capacidades humanas en lugar de reemplazarlas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="text-gray-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Consultoría tecnológica</h3>
                  <p className="text-gray-600">
                    Asesoramos a organizaciones sobre cómo implementar tecnología que realmente libere el potencial humano.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Tecnología al servicio del humano" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-brand-blue"></div>
                <div className="h-3 w-3 rounded-full bg-brand-coral"></div>
                <div className="h-3 w-3 rounded-full bg-brand-purple"></div>
              </div>
              <p className="text-sm font-medium">
                "La tecnología más potente es la que libera nuestro tiempo para ser más humanos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
