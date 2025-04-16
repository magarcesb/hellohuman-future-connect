
import { Heart, Lightbulb, Users } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-64 w-64 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute right-0 bottom-0 h-64 w-64 bg-brand-coral/10 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Conectamos la tecnología con los requerimientos humanos" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-600">
            <AnimatedText 
              text="Creemos en un futuro donde la tecnología trabaje para nosotros, 
                    liberándonos para enfocarnos en lo verdaderamente importante."
              className="inline-block"
            />
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="text-brand-blue" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Tecnología Humana</h3>
            <p className="text-gray-600">
              Diseñamos soluciones tecnológicas que comprenden y responden a las necesidades humanas reales.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-purple/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-brand-purple" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Automatización Inteligente</h3>
            <p className="text-gray-600">
              Desarrollamos procesos automatizados que liberan a las personas del trabajo repetitivo y sin valor.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-coral/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="text-brand-coral" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Innovación Práctica</h3>
            <p className="text-gray-600">
              Creamos soluciones innovadoras pero prácticas que realmente transforman la manera en que trabajamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
