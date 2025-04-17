
import { ArrowDown } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-brand-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 h-64 w-64 bg-brand-coral/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
              <span>Tecnología al servicio del humano</span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            <div className="flex items-center justify-center mb-2 animate-slide-up">
              <span>Hola, humano</span>
              <span className="ml-2 inline-block animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
            </div>
            <div className="animate-slide-up animate-delay-200 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-coral bg-clip-text text-transparent">
              Hacemos fácil, lo difícil
            </div>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up animate-delay-400">
            Desarrollamos soluciones tecnológicas innovadoras que automatizan 
            tareas repetitivas, liberando tu tiempo para lo que realmente importa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up animate-delay-600">
            <a
              href="#join"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg w-full sm:w-auto"
            >
              Conversemos
            </a>
            <a
              href="#what-we-do"
              className="px-8 py-3 bg-white text-black border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-lg flex items-center justify-center w-full sm:w-auto"
            >
              Descubre más
              <ArrowDown size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
