
import { Code, Database, Laptop, GitBranch, Workflow } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Development = () => {
  const services = [
    {
      icon: <Laptop className="text-brand-blue" size={24} />,
      title: "Diseño de tu aplicación",
      description: "Interfaces intuitivas y atractivas que mejoran la experiencia de usuario y conectan con tu audiencia."
    },
    {
      icon: <Database className="text-brand-purple" size={24} />,
      title: "Gestión base de datos",
      description: "Estructuras de datos eficientes que garantizan la seguridad y el rendimiento óptimo de tu aplicación."
    },
    {
      icon: <Code className="text-brand-coral" size={24} />,
      title: "Desarrollo app y web",
      description: "Soluciones tecnológicas completas que incluyen tanto el frontend como el backend de tu aplicación."
    },
    {
      icon: <Workflow className="text-gray-700" size={24} />,
      title: "CI/CD",
      description: "Integración y despliegue continuos que aseguran la calidad y eficiencia en el desarrollo de tu producto."
    },
    {
      icon: <GitBranch className="text-black" size={24} />,
      title: "GitHub",
      description: "Gestión de código fuente y colaboración eficiente que agiliza el desarrollo y mantiene la calidad."
    }
  ];

  return (
    <section id="development" className="py-20 bg-gray-50 relative">
      <div className="absolute left-0 top-0 h-64 w-64 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute right-0 bottom-0 h-64 w-64 bg-brand-coral/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Desarrollo APP y WEB" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-600">
            <AnimatedText
              text="Soluciones tecnológicas integrales que automatizan procesos y liberan tiempo para lo que realmente importa."
              className="inline-block"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
