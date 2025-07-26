"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, Settings, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Calendar,
      title: "Llamada de Descubrimiento",
      description:
        "Analizamos tus procesos actuales e identificamos oportunidades de automatización personalizadas.",
      duration: "30 minutos",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Settings,
      title: "Configuración Personalizada",
      description:
        "Nuestros expertos configuran agentes IA adaptados a las necesidades específicas de tu negocio.",
      duration: "24-48 horas",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Rocket,
      title: "Lanzamiento",
      description:
        "Lanza tus agentes IA con monitoreo completo y soporte de nuestro equipo especializado.",
      duration: "Inmediato",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Optimizar y Escalar",
      description:
        "Mejora continua y escalamiento basado en datos de rendimiento y feedback del usuario.",
      duration: "Continuo",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="section-padding bg-black relative pt-40"
    >
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
            De Configuración a Éxito en
            <span className="text-cyan-400 text-glow"> 48 Horas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestro proceso probado de 4 pasos garantiza que tengas funcionando
            la automatización IA rápida y eficientemente.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-lg glow-cyan">
                  {index + 1}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 pt-8 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-2 backdrop-blur-sm">
                    <div className="text-cyan-400 font-semibold text-sm">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
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
        </motion.div>
      </div>
    </section>
  );
}
