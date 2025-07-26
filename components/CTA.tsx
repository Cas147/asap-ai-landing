'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calendar, MessageCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
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

  const benefits = [
    "Consulta gratuita de 30 minutos",
    "Estrategia de automatización IA personalizada",
    "Proyección de ROI para tu negocio",
    "Sin compromiso requerido"
  ]

  const ctaOptions = [
    {
      icon: Calendar,
      title: "Programar Llamada de Descubrimiento",
      description: "Reserva una consulta gratuita de 30 minutos para discutir tus necesidades de automatización",
      buttonText: "Reservar Llamada Gratuita",
      primary: true,
      action: 'contact'
    },
    {
      icon: MessageCircle,
      title: "Demo en Vivo",
      description: "Ve nuestros agentes IA en acción con una demostración personalizada",
      buttonText: "Ver Demo",
      primary: false,
      action: 'demo'
    }
  ]

  const scrollToDemo = () => {
    const demoElement = document.getElementById('demo')
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-black relative">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No dejes que pase otro día viendo cómo los competidores obtienen la ventaja de la IA. Inicia tu transformación hoy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Lo que Obtienes en tu Consulta Gratuita:
            </h3>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg text-gray-300">{benefit}</span>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6 mt-8 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold text-cyan-400 mb-2">
                Oferta por Tiempo Limitado
              </h4>
              <p className="text-gray-300">
                Reserva tu consulta esta semana y recibe una evaluación gratuita.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - CTA Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={`rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg backdrop-blur-sm ${
                  option.primary
                    ? 'border-cyan-500/50 bg-cyan-900/20 hover:border-cyan-400/70'
                    : 'border-gray-700/50 bg-gray-800/50 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    option.primary 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                      : 'bg-gray-700/50 text-gray-300'
                  }`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {option.description}
                    </p>
                    {option.action === 'contact' ? (
                      <Link href="/contact">
                        <motion.button
                          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                            option.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white glow-cyan hover:glow-blue'
                              : 'bg-gray-700 text-white hover:bg-gray-600'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {option.buttonText}
                          <ArrowRight className="h-5 w-5" />
                        </motion.button>
                      </Link>
                    ) : (
                      <motion.button
                        onClick={scrollToDemo}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          option.primary
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white glow-cyan hover:glow-blue'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option.buttonText}
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

{/*         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">
              No Dejes que tus Competidores Ganen la Carrera de la IA
            </h3>
            <p className="text-xl mb-6 text-gray-300">
              Cada día que esperas es un día que tus competidores se adelantan más. La revolución de la IA está sucediendo ahora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0 glow-cyan hover:glow-blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inicia tu Transformación IA
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              ✓ Sin costos de configuración ✓ Garantía de devolución de dinero de 30 días ✓ Soporte 24/7
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
