'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, BookOpen, Users, Calendar, ExternalLink, Clock } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// FAQ Data
const faqs = [
  {
    id: 1,
    question: "¿Qué son los agentes de IA y cómo pueden ayudar a mi empresa?",
    answer: "Los agentes de IA son sistemas inteligentes que pueden automatizar tareas complejas, tomar decisiones basadas en datos y interactuar con clientes de manera natural. Pueden ayudar a reducir costos operativos, mejorar la eficiencia y brindar servicio 24/7."
  },
  {
    id: 2,
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Soluciones básicas pueden estar listas en 2-4 semanas, mientras que sistemas más complejos pueden tomar 2-3 meses. Siempre comenzamos con un piloto para validar la solución."
  },
  {
    id: 3,
    question: "¿Es seguro usar agentes de IA para datos sensibles?",
    answer: "Absolutamente. Implementamos las más altas medidas de seguridad, incluyendo encriptación end-to-end, cumplimiento con GDPR y SOC 2, y controles de acceso granulares. Tus datos están protegidos en todo momento."
  },
  {
    id: 4,
    question: "¿Qué tipos de integraciones soportan?",
    answer: "Nuestros agentes se integran con más de 200+ herramientas empresariales incluyendo CRM (Salesforce, HubSpot), ERP (SAP, Microsoft), herramientas de comunicación (Slack, Teams) y bases de datos (SQL, NoSQL)."
  },
  {
    id: 5,
    question: "¿Ofrecen soporte técnico post-implementación?",
    answer: "Sí, ofrecemos soporte técnico 24/7, monitoreo proactivo, actualizaciones automáticas y un equipo dedicado de success managers para garantizar el éxito continuo de tu implementación."
  },
  {
    id: 6,
    question: "¿Cómo se calcula el ROI de una solución de IA?",
    answer: "Medimos el ROI a través de métricas clave como reducción de tiempo en tareas repetitivas, aumento en conversiones, mejora en satisfacción del cliente y disminución de errores operativos. Típicamente, nuestros clientes ven ROI positivo en 3-6 meses."
  }
]



export default function CentroDeAyuda() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Centro de Ayuda
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Encuentra respuestas, explora casos de éxito y mantente actualizado con nuestros recursos
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-400 text-lg">
              Respuestas a las preguntas más comunes sobre nuestros servicios de IA
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openFaq === faq.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Links Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recursos Adicionales
            </h2>
            <p className="text-gray-400 text-lg">
              Explora nuestros recursos para profundizar tu conocimiento sobre IA empresarial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Study Cases Card */}
            <motion.a
              href="/casos-de-estudio"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-8 hover:border-cyan-500/30 transition-all duration-300 group block"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Casos de Estudio
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Descubre cómo empresas reales han transformado sus operaciones con nuestras soluciones de IA. 
                Casos detallados con métricas, procesos y resultados medibles.
              </p>
              
              <div className="flex items-center gap-2 text-cyan-400 font-medium">
                <span>Ver casos completos</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Webinars Card */}
            <motion.a
              href="/webinars"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-8 hover:border-cyan-500/30 transition-all duration-300 group block"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Webinars y Eventos
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Únete a nuestros eventos educativos exclusivos. Aprende de expertos, participa en Q&A en vivo 
                y mantente al día con las últimas tendencias en IA empresarial.
              </p>
              
              <div className="flex items-center gap-2 text-cyan-400 font-medium">
                <Clock className="h-4 w-4" />
                <span>Ver próximos eventos</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Nuestro equipo está aquí para ayudarte con cualquier pregunta específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Contactar Soporte
              </motion.a>
              <motion.a
                href="mailto:asap.ai.official@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Enviar Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 