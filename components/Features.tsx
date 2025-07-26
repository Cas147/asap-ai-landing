'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Clock, 
  Globe, 
  Cpu,
  Database,
  Settings,
  Users
} from 'lucide-react'

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: MessageSquare,
      title: "Soporte al Cliente Inteligente",
      description: "Agentes IA que entienden el contexto, manejan consultas complejas y proporcionan respuestas personalizadas 24/7.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Insights en tiempo real y análisis predictivos que te ayudan a tomar decisiones basadas en datos más rápido.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Encriptación de grado militar y cumplimiento con SOC 2, GDPR y estándares de la industria.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Operaciones 24/7",
      description: "Nunca pierdas una oportunidad. Nuestros agentes IA trabajan las 24 horas sin descansos o tiempo de inactividad.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Soporte Multi-idioma",
      description: "Sirve a clientes globales con agentes IA fluidos en más de 50 idiomas con conciencia cultural.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Cpu,
      title: "Modelos IA Avanzados",
      description: "Potenciado por los últimos modelos GPT-4 y entrenamientos personalizados para las necesidades específicas de tu industria.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Database,
      title: "Integración Perfecta",
      description: "Conecta con tus CRM, ERP y herramientas empresariales existentes sin requerir programación.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Personalización Sin Código",
      description: "Interfaz fácil de usar que te permite personalizar el comportamiento de la IA sin experiencia técnica.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Colaboración en Equipo",
      description: "Herramientas de colaboración integradas que mantienen a tu equipo alineado y productivo.",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  return (
    <section id="features" ref={ref} className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Características Poderosas que
            <span className="text-cyan-400 text-glow"> Generan Resultados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada característica está diseñada para resolver problemas empresariales reales y entregar impacto medible desde el primer día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6">
              Todo lo que Necesitas en Una Plataforma
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 text-glow mb-2">50+</div>
                <div className="text-gray-300">Plantillas Pre-construidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 text-glow mb-2">99.9%</div>
                <div className="text-gray-300">SLA de Tiempo de Actividad</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 text-glow mb-2">24/7</div>
                <div className="text-gray-300">Soporte Experto</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              No más malabares con múltiples herramientas. ASAP.ai proporciona todo lo que necesitas para automatizar las operaciones de tu negocio en una plataforma integral.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 glow-cyan hover:glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Todas las Características
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
