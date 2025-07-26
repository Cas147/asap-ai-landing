'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Play, Globe, Video, BookOpen } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'



export default function WebinarsPage() {
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
              <Video className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Webinars y Eventos
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Únete a nuestros eventos educativos exclusivos y mantente al día con las últimas tendencias en IA empresarial
            </p>
            
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-8">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Coming Soon - Muy Pronto</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-12">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full w-fit mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Próximamente
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Estamos preparando una serie de webinars exclusivos sobre implementación de IA, 
                casos de uso empresariales y tendencias futuras. Mantente atento para más información.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-6">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Coming Soon</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Users className="h-5 w-5" />
                Notificarme cuando estén disponibles
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Sé el Primero en Saber
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Regístrate para recibir notificaciones cuando lancemos nuestros webinars exclusivos
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="tu.email@empresa.com"
                  className="flex-1 bg-gray-800/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 py-3 whitespace-nowrap"
                >
                  Notificarme
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Te notificaremos solo sobre webinars. Sin spam, promesa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por Qué Asistir a Nuestros Webinars?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expertos de la Industria",
                description: "Aprende directamente de líderes en IA y automatización empresarial"
              },
              {
                icon: Play,
                title: "Casos Reales",
                description: "Ejemplos prácticos y demostraciones en vivo de implementaciones exitosas"
              },
              {
                icon: BookOpen,
                title: "Contenido Exclusivo",
                description: "Acceso a insights y estrategias que no encontrarás en ningún otro lugar"
              },
              {
                icon: Globe,
                title: "Networking",
                description: "Conecta con otros líderes empresariales y profesionales de IA"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg w-fit mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 