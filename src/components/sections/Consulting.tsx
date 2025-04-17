
import { Lightbulb, Brain } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Consulting = () => {
  return (
    <section id="consulting" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Asesorías" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-600">
            <AnimatedText
              text="Potenciamos tu negocio con estrategias digitales e inteligencia artificial para maximizar tu eficiencia."
              className="inline-block"
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-blue/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-blue/20 transition-colors" />
            
            <div className="relative">
              <div className="mb-6 flex items-center space-x-4">
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                  <Lightbulb className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-2xl font-medium">Optimización de tu negocio</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Analizamos tu flujo de trabajo actual e identificamos oportunidades para implementar herramientas digitales que automatizan procesos repetitivos y mejoran la productividad de tu equipo.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">Análisis de procesos actuales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">Recomendación de herramientas digitales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">Implementación y capacitación</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-purple/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-purple/20 transition-colors" />
            
            <div className="relative">
              <div className="mb-6 flex items-center space-x-4">
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                  <Brain className="text-brand-purple" size={24} />
                </div>
                <h3 className="text-2xl font-medium">Integración con IA</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Implementamos soluciones de inteligencia artificial a medida que potencian las capacidades de tu equipo y automatizan tareas complejas, liberando tiempo para la creatividad y la innovación.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-purple"></span>
                  <span className="text-gray-700">Automatización de tareas con IA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-purple"></span>
                  <span className="text-gray-700">Análisis predictivo de datos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-brand-purple"></span>
                  <span className="text-gray-700">Asistentes virtuales personalizados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
