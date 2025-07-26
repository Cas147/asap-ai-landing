'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Lightbulb, Users, MessageSquare, ShoppingCart, Clock3, Mail, BarChart, Shield, FileText, Headphones } from 'lucide-react'

export default function AutomationIdeasBlogPost() {
  const automationIdeas = [
    {
      icon: MessageSquare,
      title: "Chatbot de Atención al Cliente 24/7",
      description: "Implementa un chatbot inteligente que pueda resolver consultas básicas, tomar pedidos y dirigir casos complejos al equipo humano apropiado.",
      benefits: ["Reducción del 60% en tiempo de respuesta", "Disponibilidad 24/7", "Liberación de personal para tareas estratégicas"],
      difficulty: "Medio"
    },
    {
      icon: Mail,
      title: "Automatización de Email Marketing",
      description: "Crea secuencias automáticas de emails basadas en el comportamiento del cliente: bienvenida, abandono de carrito, seguimiento post-compra.",
      benefits: ["Aumento del 25% en conversiones", "Personalización a escala", "Nurturing automático de leads"],
      difficulty: "Fácil"
    },
    {
      icon: FileText,
      title: "Generación Automática de Facturas y Reportes",
      description: "Automatiza la creación de facturas, reportes de ventas y documentos contables basados en transacciones y datos de CRM.",
      benefits: ["Eliminación de errores manuales", "Ahorro de 10+ horas semanales", "Cumplimiento automático"],
      difficulty: "Medio"
    },
    {
      icon: Users,
      title: "Calificación Automática de Leads",
      description: "Implementa un sistema que evalúe y clasifique leads automáticamente basado en criterios predefinidos y comportamiento online.",
      benefits: ["Priorización inteligente de prospectos", "Aumento del 40% en tasa de cierre", "Optimización del tiempo de ventas"],
      difficulty: "Medio"
    },
    {
      icon: Clock3,
      title: "Programación Inteligente de Citas",
      description: "Sistema que gestiona automáticamente calendarios, envía recordatorios y reprograma citas basándose en disponibilidad y preferencias.",
      benefits: ["Reducción del 80% en no-shows", "Optimización de horarios", "Experiencia de cliente mejorada"],
      difficulty: "Fácil"
    },
    {
      icon: BarChart,
      title: "Dashboard de Métricas en Tiempo Real",
      description: "Crea dashboards automáticos que consoliden KPIs de diferentes fuentes: ventas, marketing, operaciones y finanzas.",
      benefits: ["Visibilidad completa del negocio", "Toma de decisiones basada en datos", "Alertas automáticas"],
      difficulty: "Difícil"
    },
    {
      icon: ShoppingCart,
      title: "Gestión Automática de Inventario",
      description: "Sistema que monitorea stock, genera órdenes de compra automáticas y actualiza catálogos online en tiempo real.",
      benefits: ["Prevención de stockouts", "Optimización de capital de trabajo", "Sincronización multicanal"],
      difficulty: "Difícil"
    },
    {
      icon: Shield,
      title: "Detección Automática de Fraudes",
      description: "Implementa IA para detectar patrones sospechosos en transacciones, accesos y comportamientos de usuarios.",
      benefits: ["Protección proactiva", "Reducción de pérdidas", "Cumplimiento normativo automático"],
      difficulty: "Difícil"
    },
    {
      icon: Headphones,
      title: "Análisis Automático de Sentimientos",
      description: "Analiza automáticamente comentarios, reseñas y interacciones para identificar tendencias de satisfacción del cliente.",
      benefits: ["Detección temprana de problemas", "Mejora continua del servicio", "Insights de mercado"],
      difficulty: "Medio"
    },
    {
      icon: FileText,
      title: "Automatización de Recursos Humanos",
      description: "Automatiza procesos de RRHH como screening de CVs, programación de entrevistas y onboarding de empleados.",
      benefits: ["Reducción del tiempo de contratación", "Proceso más justo y consistente", "Mejor experiencia del candidato"],
      difficulty: "Medio"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'text-green-400 bg-green-500/20'
      case 'Medio': return 'text-yellow-400 bg-yellow-500/20'
      case 'Difícil': return 'text-red-400 bg-red-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Blog
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
              Automatización
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            10 Ideas de Automatización para Pequeñas Empresas Usando 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Agentes IA</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>10 de enero, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min de lectura</span>
            </div>
            <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Compartir</span>
            </button>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Las pequeñas empresas pueden competir con gigantes corporativos implementando agentes de IA inteligentes. 
            Descubre 10 ideas prácticas de automatización que pueden transformar tu negocio, aumentar la eficiencia 
            y reducir costos operativos significativamente.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-cyan-400" />
              ¿Por qué Automatizar tu Pequeña Empresa?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En un mercado cada vez más competitivo, las pequeñas empresas necesitan herramientas que les permitan 
              operar con la eficiencia de organizaciones mucho más grandes. Los agentes de IA no son solo para 
              corporaciones multinacionales; son especialmente valiosos para pequeños negocios que necesitan hacer 
              más con menos recursos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              La automatización inteligente puede liberar a tus empleados de tareas repetitivas, mejorar la experiencia 
              del cliente y proporcionar insights valiosos para la toma de decisiones. Mejor aún, muchas de estas 
              soluciones son más accesibles que nunca.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reducción de Costos</h3>
              <p className="text-gray-300 text-sm">Hasta 40% de ahorro en costos operativos</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mayor Eficiencia</h3>
              <p className="text-gray-300 text-sm">Automatización de tareas repetitivas</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mejor Experiencia</h3>
              <p className="text-gray-300 text-sm">Clientes más satisfechos y leales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Ideas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            10 Ideas de Automatización con IA
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {automationIdeas.map((idea, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <idea.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{idea.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(idea.difficulty)}`}>
                        {idea.difficulty}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">#{index + 1}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {idea.description}
                </p>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Beneficios Clave:</h4>
                  <ul className="space-y-2">
                    {idea.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Cómo Empezar: Tu Hoja de Ruta</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-xl font-semibold text-white">Identifica Procesos Manuales</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Mapea todos los procesos repetitivos en tu empresa. Identifica tareas que toman tiempo significativo 
                  y que siguen patrones predecibles.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-xl font-semibold text-white">Prioriza por Impacto</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Evalúa cada proceso por frecuencia, tiempo invertido y potencial de mejora. Comienza con 
                  automatizaciones de "fruto bajo": alto impacto, baja complejidad.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="text-xl font-semibold text-white">Implementa Gradualmente</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Comienza con una automatización piloto. Mide resultados, ajusta el proceso y luego expande 
                  a otras áreas del negocio.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <h3 className="text-xl font-semibold text-white">Capacita a tu Equipo</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Asegúrate de que tu equipo comprenda cómo trabajar con los nuevos sistemas automatizados. 
                  La adopción exitosa requiere training y acompañamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">ROI Esperado de la Automatización</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-white font-medium mb-2">Reducción en Tiempo</div>
                <div className="text-gray-300 text-sm">Tareas administrativas automatizadas</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-white font-medium mb-2">Aumento en Ventas</div>
                <div className="text-gray-300 text-sm">Mejor lead nurturing y seguimiento</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">3-6</div>
                <div className="text-white font-medium mb-2">Meses de Payback</div>
                <div className="text-gray-300 text-sm">Retorno típico de la inversión</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Errores Comunes a Evitar</h2>
          
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">❌ Automatizar Procesos Mal Diseñados</h3>
              <p className="text-gray-300">Optimiza y mejora tus procesos ANTES de automatizarlos. Automatizar un proceso ineficiente solo acelera el problema.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">❌ Intentar Automatizar Todo de una Vez</h3>
              <p className="text-gray-300">Implementa cambios gradualmente. Permite que tu equipo se adapte y ajusta los sistemas basándote en feedback real.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">❌ Ignorar la Experiencia del Usuario</h3>
              <p className="text-gray-300">La automatización debe mejorar, no complicar, la experiencia tanto de empleados como de clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para Automatizar tu Pequeña Empresa?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestros expertos en ASAP.ai pueden ayudarte a identificar las mejores oportunidades de automatización 
              para tu negocio específico y crear un plan de implementación personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Consulta Gratuita
              </Link>
              <Link 
                href="/casos-de-estudio"
                className="inline-block px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 