'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Brain, Globe, TrendingUp, FileText, Eye } from 'lucide-react'

export default function ProcessingService() {
  const [currentText, setCurrentText] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const textSamples = [
    {
      text: "¡Excelente servicio! El equipo de soporte resolvió mi problema en minutos. Definitivamente recomendaré esta empresa.",
      language: "Español",
      sentiment: { score: 0.89, label: "Muy Positivo", color: "text-green-400" },
      keywords: ["excelente", "servicio", "soporte", "recomendaré"],
      entities: [{ text: "empresa", type: "Organización" }],
      confidence: 94
    },
    {
      text: "The AI system processed our documents faster than expected. Integration was seamless and the results exceeded our expectations.",
      language: "Inglés",
      sentiment: { score: 0.76, label: "Positivo", color: "text-blue-400" },
      keywords: ["AI system", "faster", "seamless", "exceeded expectations"],
      entities: [{ text: "AI system", type: "Tecnología" }],
      confidence: 91
    },
    {
      text: "Je suis très impressionné par la qualité du service client. L'équipe a été réactive et professionnelle.",
      language: "Francés",
      sentiment: { score: 0.82, label: "Muy Positivo", color: "text-green-400" },
      keywords: ["impressionné", "qualité", "réactive", "professionnelle"],
      entities: [{ text: "service client", type: "Servicio" }],
      confidence: 88
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnalyzing(true)
      setAnalysisComplete(false)
      
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % textSamples.length)
        setIsAnalyzing(false)
        setAnalysisComplete(true)
      }, 2000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const currentSample = textSamples[currentText]

  return (
    <div id="nlp" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-900/20 via-gray-900 to-teal-900/20">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                03 PROCESAMIENTO
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Procesamiento que
              <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Comprende
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Nuestra IA no solo lee texto. Comprende significado, extrae insights, 
              detecta emociones y procesa información en más de 100 idiomas con 
              precisión humana superior.
            </p>

            {/* Processing Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Brain className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Análisis Semántico</h4>
                  <p className="text-gray-400 text-sm">Comprende el significado real detrás de las palabras</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <TrendingUp className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Sentimientos</h4>
                  <p className="text-gray-400 text-sm">Detecta emociones y tonos con precisión avanzada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Globe className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Multiidioma</h4>
                  <p className="text-gray-400 text-sm">Procesa texto en más de 100 idiomas diferentes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Eye className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Extracción de Entidades</h4>
                  <p className="text-gray-400 text-sm">Identifica personas, lugares, organizaciones automáticamente</p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl border border-green-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">100+</div>
                <div className="text-gray-300 text-sm">Idiomas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-1">95%</div>
                <div className="text-gray-300 text-sm">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">0.2s</div>
                <div className="text-gray-300 text-sm">Procesamiento</div>
              </div>
            </div>
          </div>

          {/* Text Analysis Demo */}
          <div className="relative">
            {/* Analysis Interface */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Análisis de Texto en Tiempo Real
                </h4>
                <div className="text-green-100 text-sm">Procesando • Multiidioma • IA Avanzada</div>
              </div>

              {/* Text Input Area */}
              <div className="p-6">
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">Texto de muestra:</span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {currentSample.text}
                  </p>
                </div>

                {/* Analysis Results */}
                <div className="space-y-4">
                  {/* Language Detection */}
                  <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">Idioma detectado:</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{currentSample.language}</span>
                  </div>

                  {/* Sentiment Analysis */}
                  <div className="p-3 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">Análisis de sentimiento:</span>
                      </div>
                      <span className={`font-semibold ${currentSample.sentiment.color}`}>
                        {currentSample.sentiment.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${currentSample.sentiment.score * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Confianza: {currentSample.confidence}%
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="p-3 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Palabras clave:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentSample.keywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Entities */}
                  <div className="p-3 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-teal-400" />
                      <span className="text-sm text-gray-300">Entidades detectadas:</span>
                    </div>
                    <div className="space-y-1">
                      {currentSample.entities.map((entity, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-teal-300 text-sm">"{entity.text}"</span>
                          <span className="text-xs text-gray-400 bg-gray-600/50 px-2 py-1 rounded">
                            {entity.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Processing Status */}
                {isAnalyzing && (
                  <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                      <span className="text-yellow-300 text-sm">Analizando texto...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Status Indicators */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              IA PROCESANDO
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              MULTIIDIOMA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 