
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
                text="Exploramos la intersección entre lo humano y la tecnología
                      a través de contenido, comunidades y experiencias diseñadas
                      para un futuro más empático."
                className="inline-block"
              />
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full flex-shrink-0">
                  <BookOpen className="text-brand-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Contenido con propósito</h3>
                  <p className="text-gray-600">
                    Artículos, podcasts y recursos sobre la relación entre tecnología, bienestar y humanidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-purple/10 p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="text-brand-purple" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Comunidad consciente</h3>
                  <p className="text-gray-600">
                    Un espacio seguro para compartir experiencias, ideas y preguntas sobre el papel de la tecnología en nuestras vidas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-coral/10 p-3 rounded-full flex-shrink-0">
                  <Monitor className="text-brand-coral" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Experiencias digitales</h3>
                  <p className="text-gray-600">
                    Talleres, eventos y experiencias interactivas que exploran el futuro de la interacción humano-tecnología.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="text-gray-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Ética tecnológica</h3>
                  <p className="text-gray-600">
                    Promovemos prácticas y principios para un desarrollo tecnológico centrado en lo humano.
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
                alt="Personas conectadas con tecnología" 
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
                "La tecnología más poderosa es aquella que nos hace más humanos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
