
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Define el esquema de validación del formulario
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido",
  }),
  phone: z.string().min(6, {
    message: "Por favor ingresa un número de teléfono válido",
  }),
  description: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos para continuar",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const CallToAction = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Inicializar el formulario con React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      terms: false,
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulamos el envío de correo
      console.log("Enviando datos del formulario:", values);
      
      // En un entorno real, aquí conectarías con un servicio de email o una API
      // Por ejemplo, Email.js, Formspree, o un endpoint personalizado
      
      // Simulación de envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  text="¿Tienes un proyecto en mente? Cuéntanos qué necesitas y cómo podemos ayudarte."
                  className="inline-block" 
                />
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tucorreo@ejemplo.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+34 612 345 678" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción de lo que buscas</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos sobre tu proyecto o necesidad" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600">
                            Acepto que mi información será utilizada para contactarme
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </Form>
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
