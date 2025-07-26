'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { Zap, Target, Users, Rocket, Brain, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Innovación IA",
      description: "Desarrollamos soluciones de inteligencia artificial de vanguardia que transforman la manera de hacer negocios."
    },
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Nos concentramos en generar ROI medible y impacto real en la eficiencia operacional de nuestros clientes."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos mano a mano con nuestros clientes para entender sus necesidades y crear soluciones personalizadas."
    },
    {
      icon: Rocket,
      title: "Escalabilidad",
      description: "Construimos sistemas que crecen con tu negocio, desde startups hasta empresas multinacionales."
    }
  ]

  const stats = [
    { number: "500+", label: "Empresas Transformadas" },
    { number: "95%", label: "Reducción en Tiempos" },
    { number: "24/7", label: "Operación Continua" },
    { number: "50+", label: "Países Atendidos" }
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
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              ASAP<span className="text-cyan-400">.ai</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Transformamos empresas a través de la automatización inteligente y 
            agentes de IA que trabajan 24/7 para optimizar tus operaciones.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Democratizar el acceso a la inteligencia artificial empresarial, 
              permitiendo que cualquier organización pueda aprovechar el poder de 
              la automatización para crecer, innovar y competir en la era digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada línea de código que escribimos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl w-fit mb-6">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl w-fit mx-auto mb-8">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Ser la plataforma de automatización IA más confiable de América Latina, 
              impulsando la transformación digital de miles de empresas y creando 
              un futuro donde la tecnología trabaja al servicio del crecimiento humano.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
              <p className="text-cyan-300 text-lg font-medium">
                "El futuro pertenece a las organizaciones que abrazan la automatización inteligente hoy."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 