
import { AnimatedText } from "../ui/AnimatedText";

export const Consulting = () => {
  return (
    <section id="consulting" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-10">
            <AnimatedText text="Transforma tu forma de trabajar" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Te asesoramos para que tu empresa implemente las mejores herramientas digitales y pueda operar de manera remota o semipresencial, sin perder conexión, eficiencia ni enfoque.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            Optimizamos tus flujos de trabajo, centralizamos la información y garantizamos que todos tus documentos estén siempre respaldados y disponibles.
          </p>
          <p className="text-2xl text-brand-blue font-semibold mt-10">
            Trabaja desde donde estés, con el control de siempre.
          </p>
        </div>
      </div>
    </section>
  );
};
