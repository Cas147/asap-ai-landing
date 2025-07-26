'use client'

import { motion } from 'framer-motion'
import { HelpCircle, TrendingUp, BookOpen, Star, ArrowRight, Users, Clock, Target, CheckCircle, BarChart } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// Study Cases Data (expanded)
const studyCases = [
  {
    id: 1,
    title: "Automatización de Soporte al Cliente",
    company: "TechCorp Internacional",
    industry: "Tecnología",
    size: "10,000+ empleados",
    challenge: "TechCorp enfrentaba el desafío de gestionar más de 10,000 tickets de soporte diarios con un equipo limitado, resultando en tiempos de respuesta lentos y frustración del cliente.",
    solution: "Implementamos un sistema de agentes IA inteligentes que automatiza el triaje de tickets, resuelve consultas comunes instantáneamente y escala solo los casos complejos al equipo humano.",
    implementation: [
      "Análisis de 6 meses de tickets históricos",
      "Entrenamiento de modelos de IA personalizados",
      "Integración con sistemas CRM existentes",
      "Piloto de 2 semanas con 20% del tráfico",
      "Despliegue gradual en 4 semanas"
    ],
    results: [
      "85% reducción en tiempo de respuesta promedio",
      "60% de consultas resueltas automáticamente",
      "40% aumento en satisfacción del cliente (NPS)",
      "$2.3M ahorro anual en costos operativos",
      "Reducción de 70% en tiempo de resolución"
    ],
    metrics: {
      responseTime: { before: "24 horas", after: "3.6 horas" },
      automation: { before: "0%", after: "60%" },
      satisfaction: { before: "6.2/10", after: "8.7/10" },
      savings: "$2.3M anual"
    },
    icon: HelpCircle,
    color: "from-blue-500 to-cyan-500",
    testimonial: {
      quote: "La implementación de agentes IA transformó completamente nuestra operación de soporte. Ahora podemos brindar respuestas instantáneas 24/7 mientras nuestro equipo se enfoca en casos complejos.",
      author: "María González",
      position: "Directora de Soporte al Cliente"
    }
  },
  {
    id: 2,
    title: "Optimización de Ventas B2B",
    company: "SalesMax Solutions",
    industry: "Servicios Financieros",
    size: "500-1000 empleados",
    challenge: "SalesMax tenía una baja tasa de conversión de leads (15%) y procesos de seguimiento manuales ineficientes que causaban pérdida de oportunidades valiosas.",
    solution: "Desarrollamos agentes IA especializados en calificación de leads, scoring predictivo y automatización de seguimientos personalizados basados en el comportamiento del prospecto.",
    implementation: [
      "Integración con CRM y herramientas de marketing",
      "Desarrollo de modelos de scoring predictivo",
      "Automatización de secuencias de seguimiento",
      "Entrenamiento del equipo de ventas",
      "Monitoreo y optimización continua"
    ],
    results: [
      "45% aumento en conversión de leads",
      "70% reducción en tiempo de calificación",
      "300% mejora en productividad del equipo",
      "$5.2M incremento en revenue anual",
      "50% más meetings calificados por mes"
    ],
    metrics: {
      conversion: { before: "15%", after: "21.8%" },
      qualification: { before: "2 horas", after: "36 min" },
      productivity: { before: "100%", after: "300%" },
      revenue: "+$5.2M anual"
    },
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    testimonial: {
      quote: "Los agentes IA nos permitieron identificar y priorizar leads de alta calidad automáticamente. Nuestro equipo ahora se enfoca solo en las oportunidades más prometedoras.",
      author: "Carlos Mendoza",
      position: "VP de Ventas"
    }
  },
  {
    id: 3,
    title: "Análisis Predictivo de Inventario",
    company: "RetailPro Global",
    industry: "Retail",
    size: "5,000+ empleados",
    challenge: "RetailPro sufría pérdidas significativas por stock-out y overstock debido a predicciones de demanda inexactas y gestión manual de inventario en múltiples ubicaciones.",
    solution: "Implementamos un sistema de IA que analiza patrones históricos, tendencias de mercado, eventos estacionales y factores externos para optimizar niveles de inventario automáticamente.",
    implementation: [
      "Recopilación de datos históricos de 3 años",
      "Integración con sistemas POS y ERP",
      "Desarrollo de modelos de forecasting",
      "Automatización de órdenes de compra",
      "Dashboard de monitoreo en tiempo real"
    ],
    results: [
      "30% reducción en costos de inventario",
      "25% mejora en disponibilidad de productos",
      "50% reducción en desperdicios",
      "$3.8M ahorro en costos operativos",
      "95% precisión en predicciones de demanda"
    ],
    metrics: {
      inventoryCosts: { before: "100%", after: "-30%" },
      availability: { before: "78%", after: "97.5%" },
      waste: { before: "100%", after: "-50%" },
      accuracy: "95% predicción"
    },
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    testimonial: {
      quote: "La precisión de las predicciones de IA superó nuestras expectativas. Eliminamos casi completamente los stock-outs mientras reducimos significativamente el exceso de inventario.",
      author: "Ana Rodríguez",
      position: "Directora de Operaciones"
    }
  }
]

export default function CasosDeEstudio() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full w-fit mx-auto mb-6">
              <BarChart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Casos de Estudio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Descubre cómo nuestros clientes han transformado sus negocios con soluciones de IA personalizadas y resultados medibles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Study Cases */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="space-y-20">
            {studyCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl border border-gray-800/50 overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 border-b border-gray-800/50">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className={`bg-gradient-to-r ${study.color} p-4 rounded-lg w-fit`}>
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-cyan-400 font-medium">{study.company}</span>
                        <span className="text-gray-400">{study.industry}</span>
                        <span className="text-gray-400">{study.size}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-red-400" />
                          Desafío
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          Solución
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">{study.solution}</p>
                        
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Proceso de Implementación:</h4>
                        <ul className="space-y-2">
                          {study.implementation.map((step, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-3">
                              <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs text-cyan-400 font-semibold">{i + 1}</span>
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Key Metrics */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-cyan-400" />
                          Métricas Clave
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => {
                            const metricLabels = {
                              responseTime: "Tiempo de Respuesta",
                              automation: "Automatización",
                              satisfaction: "Satisfacción",
                              savings: "Ahorro",
                              conversion: "Conversión",
                              qualification: "Calificación",
                              productivity: "Productividad",
                              revenue: "Revenue",
                              inventoryCosts: "Costos Inventario",
                              availability: "Disponibilidad",
                              waste: "Desperdicios",
                              accuracy: "Precisión"
                            }
                            
                            return (
                              <div key={key} className="bg-gray-800/30 rounded-lg p-4">
                                <div className="text-xs text-gray-400 mb-1">
                                  {metricLabels[key as keyof typeof metricLabels]}
                                </div>
                                {typeof value === 'object' && 'before' in value ? (
                                  <div className="space-y-1">
                                    <div className="text-xs text-red-300">Antes: {value.before}</div>
                                    <div className="text-sm font-semibold text-green-400">Después: {value.after}</div>
                                  </div>
                                ) : (
                                  <div className="text-sm font-semibold text-cyan-400">{value as string}</div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400" />
                          Resultados
                        </h3>
                        <ul className="space-y-3">
                          {study.results.map((result, i) => (
                            <li key={i} className="text-gray-300 flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-12 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg p-6 border border-gray-700/30">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full flex-shrink-0">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="text-white font-semibold">{study.testimonial.author}</div>
                          <div className="text-cyan-400 text-sm">{study.testimonial.position}</div>
                          <div className="text-gray-400 text-sm">{study.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Estos son solo algunos ejemplos de lo que podemos lograr juntos. Cada empresa es única, y diseñamos soluciones personalizadas para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Solicitar Consulta Gratuita
              </motion.a>
              <motion.a
                href="/#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Ver Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 