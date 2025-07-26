'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { Users, Linkedin, Github, Mail, Award, Code, Brain, Briefcase } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ana García",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6b9b1af?w=400&h=400&fit=crop&crop=face",
      bio: "Visionaria en IA empresarial con 15+ años liderando transformaciones digitales en Fortune 500.",
      expertise: ["Strategy", "Leadership", "AI Vision"],
      social: {
        linkedin: "#",
        email: "ana@asap.ai"
      }
    },
    {
      name: "Carlos Mendoza",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Arquitecto de sistemas IA escalables, ex-Google. Experto en MLOps y automatización empresarial.",
      expertise: ["AI Architecture", "MLOps", "Scalability"],
      social: {
        linkedin: "#",
        github: "#",
        email: "carlos@asap.ai"
      }
    },
    {
      name: "María Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "PhD en Machine Learning, investigadora pionera en agentes conversacionales y NLP avanzado.",
      expertise: ["Machine Learning", "NLP", "Research"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Diego Herrera",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer especializado en React, Node.js y arquitecturas de microservicios IA.",
      expertise: ["Full-Stack", "React", "Node.js"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sofia Castillo",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Estratega de producto con experiencia en UX/UI y metodologías ágiles para productos IA.",
      expertise: ["Product Strategy", "UX/UI", "Agile"],
      social: {
        linkedin: "#",
        email: "sofia@asap.ai"
      }
    },
    {
      name: "Andrés Vega",
      role: "Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Especialista en crecimiento empresarial y partnerships estratégicos en el ecosistema IA.",
      expertise: ["Business Growth", "Partnerships", "Sales"],
      social: {
        linkedin: "#",
        email: "andres@asap.ai"
      }
    }
  ]

  const departments = [
    {
      icon: Brain,
      name: "AI Research",
      description: "Investigación y desarrollo de nuevos algoritmos y modelos de IA"
    },
    {
      icon: Code,
      name: "Engineering",
      description: "Desarrollo y arquitectura de plataformas escalables y robustas"
    },
    {
      icon: Briefcase,
      name: "Business",
      description: "Estrategia comercial y desarrollo de partnerships empresariales"
    },
    {
      icon: Award,
      name: "Product",
      description: "Diseño de experiencias y gestión del ciclo de vida del producto"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Nuestro <span className="text-cyan-400">Equipo</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Conoce a los visionarios, ingenieros y estrategas que están 
            construyendo el futuro de la automatización empresarial.
          </motion.p>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestros Departamentos
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Equipos especializados trabajando en sinergia para crear soluciones de IA excepcionales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <dept.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conoce al Equipo
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profesionales apasionados con experiencia global en las mejores empresas tecnológicas del mundo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-700 group-hover:ring-cyan-400/50 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-300 text-xs rounded-full border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-700">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Únete a Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              ¿Te apasiona la inteligencia artificial y quieres ser parte de la revolución 
              empresarial? Estamos siempre buscando talento excepcional.
            </p>
            <motion.a
              href="mailto:careers@asap.ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Envía tu CV
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 