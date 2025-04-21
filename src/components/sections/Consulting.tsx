
import { Lightbulb } from "lucide-react";
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
              text="Potenciamos tu negocio con estrategias digitales para maximizar tu eficiencia y productividad."
              className="inline-block"
            />
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
                Analizamos tu flujo de trabajo actual e identificamos oportunidades para implementar herramientas digitales que automatizan procesos repetitivos y mejoran la productividad de tu equipo. Nuestro enfoque integral te ayuda a transformar digitalmente tu negocio para lograr mayor eficiencia y resultados.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-700 font-medium">Análisis de procesos actuales</span>
                    <p className="text-gray-600 text-sm mt-1">Evaluamos detalladamente tus procesos para identificar cuellos de botella y oportunidades de mejora.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-700 font-medium">Recomendación de herramientas digitales</span>
                    <p className="text-gray-600 text-sm mt-1">Seleccionamos las mejores soluciones tecnológicas adaptadas a tus necesidades específicas.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-700 font-medium">Implementación y capacitación</span>
                    <p className="text-gray-600 text-sm mt-1">Te acompañamos en todo el proceso de adopción tecnológica con capacitación personalizada para tu equipo.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="h-2 w-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-700 font-medium">Seguimiento y optimización continua</span>
                    <p className="text-gray-600 text-sm mt-1">Monitoreamos los resultados y ajustamos la estrategia para garantizar una mejora constante.</p>
                  </div>
                </li>
              </ul>

              {/* Nueva subsección para Asesorías remote work */}
              <div className="mt-12 border-t pt-8">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    <Lightbulb className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">Asesorías remote work</h3>
                </div>
                <p className="text-gray-600">
                  Te asesoramos para que tu empresa ocupe las mejores herramientas digitales para poder trabajar remoto, pasar a formas de trabajo semi presencial, pero siempre conectado, nunca perder los objetivos y con todos tus documentos respaldados.
                </p>
              </div>
              {/* Fin nueva subsección */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
