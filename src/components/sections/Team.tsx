
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";

export const Team = () => {
  const team = [
    {
      name: "Humano 1",
      role: "Fundador & CEO",
      bio: "Apasionado por crear tecnología que libere el potencial humano.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:humano1@example.com"
      }
    },
    {
      name: "Humano 2",
      role: "CTO",
      bio: "Especialista en diseñar soluciones tecnológicas centradas en el usuario.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:humano2@example.com"
      }
    },
    {
      name: "Humano 3",
      role: "COO",
      bio: "Comprometido con la excelencia operativa y la gestión eficiente.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:humano3@example.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 relative">
      <div className="absolute top-0 left-1/4 h-64 w-64 bg-brand-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-brand-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <AnimatedText text="Quiénes somos" className="inline-block" />
          </h2>
          <p className="text-xl text-gray-600">
            <AnimatedText
              text="Un equipo apasionado por crear tecnología que libere el potencial humano."
              className="inline-block"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-brand-blue transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-brand-blue transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.social.email} className="text-white hover:text-brand-blue transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-brand-blue mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
