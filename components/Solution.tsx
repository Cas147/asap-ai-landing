'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Sparkles, Zap, Target, Brain, ArrowRight } from 'lucide-react'

export default function Solution() {
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

  const solutions = [
    {
      icon: Brain,
      title: "Agentes IA Inteligentes",
      description: "Despliega agentes inteligentes que aprenden, se adaptan y manejan tareas complejas con inteligencia humana pero eficiencia sobrehumana.",
      benefit: "10x más rápido procesamiento"
    },
    {
      icon: Zap,
      title: "Automatización Integral",
      description: "Conecta sin problemas todos tus procesos empresariales. Desde generación de leads hasta éxito del cliente, todo funciona automáticamente.",
      benefit: "95% automatización de procesos"
    },
    {
      icon: Target,
      title: "Precisión y Consistencia",
      description: "Elimina errores humanos con IA que entrega resultados perfectos cada vez. Calidad consistente en todas las operaciones.",
      benefit: "99.9% tasa de precisión"
    },
    {
      icon: Sparkles,
      title: "Aprendizaje Continuo",
      description: "Nuestros agentes IA se vuelven más inteligentes cada día, aprendiendo de tus datos y mejorando el rendimiento automáticamente.",
      benefit: "Sistema auto-mejorable"
    }
  ]

  return (
    <section id="solutions" ref={ref} className="section-padding bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
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
            Conoce tu Nueva
            <span className="text-cyan-400 text-glow"> Fuerza Laboral IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforma las operaciones de tu negocio con agentes IA que piensan, aprenden y ejecutan como tus mejores empleados, pero sin limitaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Solutions */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg shadow-lg">
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-cyan-400 font-semibold text-sm">
                        RESULTADO: {solution.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-3xl font-bold mb-6 text-white">
                La Ventaja de ASAP.ai
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Despliega en 24 horas, no meses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Integra con sistemas existentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Escala automáticamente con demanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Monitoreo y soporte 24/7</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 text-glow">ROI</div>
                  <div className="text-2xl font-bold text-white">340%</div>
                  <div className="text-sm text-gray-400">Retorno promedio primer año</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 bg-cyan-500 p-3 rounded-full shadow-lg glow-cyan"
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-lg glow-blue"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-xl mb-6 text-gray-300">
              Únete a los líderes de la industria que ya han revolucionado sus operaciones con automatización IA.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto glow-cyan hover:glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inicia tu Transformación
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
