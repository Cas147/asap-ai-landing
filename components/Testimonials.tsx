'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Quote, Star, TrendingUp } from 'lucide-react'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "ASAP.ai transformó completamente nuestro servicio al cliente. Nuestros tiempos de respuesta pasaron de horas a segundos, y la satisfacción del cliente aumentó un 340%. El ROI fue inmediato.",
      result: "340% aumento en satisfacción del cliente"
    },
    {
      name: "Michael Rodriguez",
      role: "Director de Operaciones",
      company: "Global Commerce Inc",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Automatizamos el 80% de nuestros procesos manuales en solo 3 semanas. Los agentes IA manejan todo desde procesamiento de órdenes hasta consultas de clientes sin fallas.",
      result: "80% automatización de procesos en 3 semanas"
    },
    {
      name: "Emily Johnson",
      role: "VP de Marketing",
      company: "InnovateCorp",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "La automatización de calificación y nutrición de leads ha revolucionado nuestro pipeline de ventas. Estamos cerrando 3x más deals con el mismo tamaño de equipo.",
      result: "3x aumento en deals cerrados"
    },
    {
      name: "David Kim",
      role: "Fundador",
      company: "StartupX",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Como startup en crecimiento, necesitábamos automatización de nivel empresarial sin el presupuesto empresarial. ASAP.ai nos entregó exactamente eso.",
      result: "Automatización empresarial a costo de startup"
    },
    {
      name: "Lisa Thompson",
      role: "COO",
      company: "ServicePro",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Los agentes IA trabajan 24/7 sin descansos, errores o quejas. Nuestra eficiencia operacional nunca ha sido más alta.",
      result: "Eficiencia operacional 24/7"
    },
    {
      name: "Robert Wilson",
      role: "CTO",
      company: "DataDriven Ltd",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "La integración fue perfecta, y la curva de aprendizaje fue mínima. Nuestro equipo adoptó los agentes IA en días, no meses.",
      result: "Integración perfecta en días"
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-900 relative overflow-hidden">
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
            Confiado por Líderes de
            <span className="text-cyan-400 text-glow"> la Industria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mira cómo empresas de diferentes industrias están logrando resultados extraordinarios con la automatización IA de ASAP.ai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3 mb-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">
                    {testimonial.result}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-cyan-400 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6">
              Únete a 500+ Empresas que Ya Están Ganando con IA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 text-glow mb-2">98%</div>
                <div className="text-gray-300">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 text-glow mb-2">$2.8M</div>
                <div className="text-gray-300">Ahorro Anual Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 text-glow mb-2">340%</div>
                <div className="text-gray-300">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 text-glow mb-2">24hrs</div>
                <div className="text-gray-300">Tiempo Promedio de Configuración</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              No solo tomes nuestra palabra. Mira el impacto medible que nuestra automatización IA entrega a negocios como el tuyo.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 glow-cyan hover:glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Leer Más Historias de Éxito
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
