'use client'

import { useState, useEffect } from 'react'
import { Brain, Workflow, Clock, Target, CheckCircle, AlertCircle, Play } from 'lucide-react'

export default function AutomationService() {
  const [activeStep, setActiveStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const workflowSteps = [
    {
      id: 1,
      title: "Recepción",
      description: "Documento recibido",
      icon: CheckCircle,
      status: "completed",
      data: "Factura #F-2024-001",
      time: "0.1s"
    },
    {
      id: 2,
      title: "Análisis IA",
      description: "Procesando contenido",
      icon: Brain,
      status: "processing",
      data: "Extrayendo datos...",
      time: "0.8s"
    },
    {
      id: 3,
      title: "Validación",
      description: "Verificando información",
      icon: Target,
      status: "pending",
      data: "Esperando proceso...",
      time: "0.5s"
    },
    {
      id: 4,
      title: "Aprobación",
      description: "Decisión automática",
      icon: CheckCircle,
      status: "pending",
      data: "Pendiente validación",
      time: "0.2s"
    },
    {
      id: 5,
      title: "Integración",
      description: "Enviando a ERP",
      icon: Workflow,
      status: "pending",
      data: "Sistema contable",
      time: "1.2s"
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isRunning) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            setIsRunning(false)
            return 0
          }
          return prev + 1
        })
      }, 1500)
    }

    return () => clearInterval(interval)
  }, [isRunning, workflowSteps.length])

  const startDemo = () => {
    setActiveStep(0)
    setIsRunning(true)
  }

  return (
    <div id="automation" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Workflow Visualization */}
          <div className="relative order-2 lg:order-1">
            {/* Control Panel */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-purple-400" />
                  Flujo de Automatización
                </h4>
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                >
                  <Play className="w-4 h-4" />
                  {isRunning ? 'Ejecutando...' : 'Iniciar Demo'}
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-400">
                  <span className="text-white font-medium">Tiempo total:</span> 2.8s
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400 font-medium">Ahorro:</span> 95% vs manual
                </div>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4">
              {workflowSteps.map((step, index) => {
                const StepIcon = step.icon
                const isActive = index === activeStep && isRunning
                const isCompleted = index < activeStep || (!isRunning && index === 0)
                
                return (
                  <div
                    key={step.id}
                    className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                      isActive 
                        ? 'bg-purple-900/30 border-purple-500/50 shadow-lg shadow-purple-500/20'
                        : isCompleted
                        ? 'bg-green-900/20 border-green-500/30'
                        : 'bg-gray-800/30 border-gray-700/50'
                    }`}
                  >
                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse'
                        : isCompleted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : 'bg-gray-700'
                    }`}>
                      <StepIcon className="w-6 h-6 text-white" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className={`font-semibold ${
                          isActive ? 'text-purple-300' : isCompleted ? 'text-green-300' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h5>
                        <span className={`text-xs font-mono px-2 py-1 rounded ${
                          isActive ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                      <p className={`text-xs font-mono ${
                        isActive ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {step.data}
                      </p>
                    </div>

                    {/* Processing Animation */}
                    {isActive && (
                      <div className="absolute right-4 top-4">
                        <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Connection Line */}
                    {index < workflowSteps.length - 1 && (
                      <div className={`absolute left-10 top-16 w-0.5 h-8 transition-colors duration-500 ${
                        index < activeStep || (!isRunning && index === 0) ? 'bg-green-500' : 'bg-gray-600'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Results Panel */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-green-500/30 p-4 mt-6">
              <h5 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Resultado de Automatización
              </h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Documentos procesados:</span>
                  <div className="text-white font-bold">12,847 / día</div>
                </div>
                <div>
                  <span className="text-gray-400">Precisión:</span>
                  <div className="text-green-400 font-bold">99.8%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                02 AUTOMATIZACIÓN
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Automatización que
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Piensa
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Más que simples reglas. Nuestros sistemas de automatización cognitiva 
              aprenden, razonan y toman decisiones complejas como lo haría tu mejor empleado, 
              pero a escala ilimitada.
            </p>

            {/* Automation Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Brain className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Decisiones Inteligentes</h4>
                  <p className="text-gray-400 text-sm">Procesa información compleja y toma decisiones contextuales como un experto</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Clock className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Proceso Continuo</h4>
                  <p className="text-gray-400 text-sm">Trabaja 24/7 sin descansos, procesando miles de tareas simultáneamente</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Target className="w-8 h-8 text-pink-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Precisión Constante</h4>
                  <p className="text-gray-400 text-sm">Elimina errores humanos manteniendo consistencia del 99.8%</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">85%</div>
                <div className="text-gray-300 text-sm">Reducción de costos operativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">2.8s</div>
                <div className="text-gray-300 text-sm">Tiempo promedio de proceso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 