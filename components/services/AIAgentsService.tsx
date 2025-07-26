'use client'

import { useState, useEffect } from 'react'
import { Bot, MessageSquare, Users, Zap, CheckCircle } from 'lucide-react'

export default function AIAgentsService() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const chatMessages = [
    {
      user: "¿Pueden ayudarme con mi pedido #12345?",
      agent: "¡Por supuesto! He encontrado tu pedido. Está en camino y llegará mañana. ¿Te gustaría que te envíe el número de seguimiento?",
      sentiment: "positive"
    },
    {
      user: "Necesito cancelar mi suscripción",
      agent: "Entiendo tu situación. Antes de procesarlo, ¿hay algo específico que podamos mejorar? Tengo varias opciones que podrían interesarte.",
      sentiment: "neutral"
    },
    {
      user: "¡El servicio es increíble! ¿Cómo puedo actualizar mi plan?",
      agent: "¡Me alegra saber que estás satisfecho! Te muestro las opciones de actualización que mejor se adapten a tus necesidades específicas.",
      sentiment: "positive"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
        setIsTyping(false)
      }, 1500)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="ai-agents" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                01 AGENTES IA
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Agentes IA que
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Comprenden
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Nuestros agentes IA no solo responden preguntas. Comprenden contexto, 
              emociones y intenciones para crear experiencias conversacionales 
              verdaderamente humanas que deleitan a tus clientes.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Bot className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Comprensión Contextual</h4>
                  <p className="text-gray-400 text-sm">Mantiene el contexto durante toda la conversación</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <MessageSquare className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Análisis Emocional</h4>
                  <p className="text-gray-400 text-sm">Detecta y responde apropiadamente a emociones</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Personalización</h4>
                  <p className="text-gray-400 text-sm">Adapta respuestas al perfil del usuario</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Respuesta Instantánea</h4>
                  <p className="text-gray-400 text-sm">Procesamiento en tiempo real 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chat Demo */}
          <div className="relative">
            {/* Chat Interface */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Asistente ASAP.ai</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-cyan-100 text-sm">En línea • Respuesta promedio: 0.3s</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-none max-w-xs">
                    {chatMessages[currentMessage].user}
                  </div>
                </div>

                {/* Agent Response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    {isTyping ? (
                      <div className="bg-gray-700 text-gray-300 px-4 py-3 rounded-2xl rounded-tl-none">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="bg-gray-700 text-gray-100 px-4 py-3 rounded-2xl rounded-tl-none max-w-sm">
                          {chatMessages[currentMessage].agent}
                        </div>
                        {/* Sentiment Analysis */}
                        <div className="flex items-center gap-2 ml-4">
                          <div className={`w-2 h-2 rounded-full ${
                            chatMessages[currentMessage].sentiment === 'positive' ? 'bg-green-400' :
                            chatMessages[currentMessage].sentiment === 'negative' ? 'bg-red-400' : 'bg-yellow-400'
                          }`} />
                          <span className="text-xs text-gray-400">
                            Sentimiento: {chatMessages[currentMessage].sentiment === 'positive' ? 'Positivo' :
                            chatMessages[currentMessage].sentiment === 'negative' ? 'Negativo' : 'Neutral'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-gray-900/50 p-4 border-t border-gray-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-cyan-400 font-bold text-lg">99.9%</div>
                    <div className="text-gray-400 text-xs">Precisión</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-lg">0.3s</div>
                    <div className="text-gray-400 text-xs">Respuesta</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-lg">24/7</div>
                    <div className="text-gray-400 text-xs">Disponible</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              LIVE DEMO
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              IA EN TIEMPO REAL
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 