
import { Heart, Zap, Users, Eye } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Values = () => {
  return (
    <section id="values" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 bg-brand-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-brand-coral/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Nuestros valores" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-300">
            <AnimatedText 
              text="Estos principios guían todo lo que hacemos y cómo lo hacemos."
              className="inline-block" 
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-brand-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="text-brand-blue" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Humanidad</h3>
            <p className="text-gray-300">
              Ponemos a las personas primero. La tecnología debe servir a la humanidad, no al revés.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-brand-coral/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="text-brand-coral" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Tecnología consciente</h3>
            <p className="text-gray-300">
              Diseñamos y promovemos tecnología que amplifica nuestras capacidades de manera ética.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-brand-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-brand-purple" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Conexión</h3>
            <p className="text-gray-300">
              Creemos en el poder de las conexiones genuinas, tanto entre humanos como con la tecnología.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Transparencia</h3>
            <p className="text-gray-300">
              Fomentamos la claridad y la honestidad en todo lo que hacemos y en las tecnologías que respaldamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
