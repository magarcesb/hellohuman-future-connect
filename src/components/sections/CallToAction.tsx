
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { useToast } from "@/hooks/use-toast";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu correo electrónico",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Gracias por contactarnos!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-coral/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-medium mb-4">
                <AnimatedText text="Conversemos" className="inline-block" />
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <AnimatedText 
                  text="¿Quieres liberar el potencial humano con tecnología? Únete a nuestra comunidad."
                  className="inline-block" 
                />
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Únete a la comunidad tecnológica</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
              
              <p className="mt-4 text-sm text-gray-500">
                Al unirte, aceptas recibir correos sobre nuestras soluciones tecnológicas y novedades. Puedes darte de baja en cualquier momento.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-brand-blue to-brand-purple hidden md:block relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm p-6 mb-4">
                    <ArrowRight className="text-white" size={32} />
                  </div>
                  <p className="text-xl font-medium">
                    Tecnología que trabaja para ti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} HelloHuman. Tecnología al servicio del humano.
          </p>
        </div>
      </div>
    </section>
  );
};
