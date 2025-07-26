'use client'

import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Target, Zap, Activity, PieChart } from 'lucide-react'

export default function AnalyticsService() {
  const [activeChart, setActiveChart] = useState(0)
  const [dataPoints, setDataPoints] = useState([65, 78, 82, 91, 95])
  const [isUpdating, setIsUpdating] = useState(false)

  const chartTypes = [
    { name: "Ventas", color: "from-orange-500 to-red-500", icon: TrendingUp, growth: "+23%" },
    { name: "Conversiones", color: "from-blue-500 to-purple-500", icon: Target, growth: "+18%" },
    { name: "Engagement", color: "from-green-500 to-teal-500", icon: Activity, growth: "+31%" }
  ]

  const metrics = [
    { label: "Precisión Predictiva", value: "94.2%", trend: "+2.1%", color: "text-green-400" },
    { label: "Tiempo de Análisis", value: "0.8s", trend: "-45%", color: "text-blue-400" },
    { label: "Patrones Detectados", value: "1,247", trend: "+67%", color: "text-purple-400" },
    { label: "ROI Generado", value: "$2.4M", trend: "+89%", color: "text-orange-400" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true)
      setTimeout(() => {
        setDataPoints(prev => prev.map(point => 
          Math.max(20, Math.min(100, point + (Math.random() - 0.5) * 10))
        ))
        setActiveChart((prev) => (prev + 1) % chartTypes.length)
        setIsUpdating(false)
      }, 1000)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="analytics" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-orange-900/20 via-gray-900 to-red-900/20">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Analytics Dashboard */}
          <div className="relative order-2 lg:order-1">
            {/* Dashboard Header */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                  Dashboard Analítico IA
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">En vivo</span>
                </div>
              </div>
              
              {/* Chart Selector */}
              <div className="flex gap-2 mb-4">
                {chartTypes.map((chart, index) => {
                  const ChartIcon = chart.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveChart(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                        activeChart === index
                          ? 'bg-gradient-to-r ' + chart.color + ' text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <ChartIcon className="w-4 h-4" />
                      {chart.name}
                      <span className="text-xs bg-black/20 px-1 rounded">
                        {chart.growth}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Main Chart */}
              <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                <h6 className="text-white font-medium mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-orange-400" />
                  {chartTypes[activeChart].name} - Últimos 5 meses
                </h6>
                <div className="flex items-end gap-3 h-40 bg-gray-800/30 p-4 rounded-lg">
                  {dataPoints.map((point, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="relative w-full h-32 flex items-end">
                        <div 
                          className={`w-full bg-gradient-to-t ${chartTypes[activeChart].color} rounded-t-lg transition-all duration-1000 shadow-lg ${
                            isUpdating ? 'opacity-50' : 'opacity-100'
                          }`}
                          style={{ height: `${point}%`, minHeight: '8px' }}
                        />
                      </div>
                      <span className="text-xs text-gray-300 font-medium">
                        {['Ene', 'Feb', 'Mar', 'Abr', 'May'][index]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${chartTypes[activeChart].color} bg-clip-text text-transparent`}>
                      {Math.round(dataPoints.reduce((a, b) => a + b) / dataPoints.length)}%
                    </div>
                    <div className="text-gray-400 text-sm">Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {chartTypes[activeChart].growth}
                    </div>
                    <div className="text-gray-400 text-sm">Crecimiento</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Insights */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4">
              <h5 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Predicciones IA - Próximos 30 días
              </h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Incremento esperado en ventas:</span>
                  <span className="text-green-400 font-semibold">+28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Mejor día para campaña:</span>
                  <span className="text-blue-400 font-semibold">Viernes 15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">ROI proyectado:</span>
                  <span className="text-purple-400 font-semibold">342%</span>
                </div>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/50">
                  <div className="text-gray-400 text-xs mb-1">{metric.label}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{metric.value}</span>
                    <span className={`text-xs font-medium ${metric.color}`}>
                      {metric.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
                04 ANALÍTICA
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Analítica que
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Predice
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              No solo analizamos datos históricos. Nuestra IA predice tendencias futuras, 
              identifica oportunidades ocultas y optimiza automáticamente tus estrategias 
              para maximizar resultados.
            </p>

            {/* Analytics Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <TrendingUp className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Predicciones Avanzadas</h4>
                  <p className="text-gray-400 text-sm">Anticipa tendencias y comportamientos con 94% de precisión</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <PieChart className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Segmentación Inteligente</h4>
                  <p className="text-gray-400 text-sm">Identifica automáticamente patrones y segmentos de alto valor</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Optimización Automática</h4>
                  <p className="text-gray-400 text-sm">Ajusta estrategias en tiempo real basado en resultados</p>
                </div>
              </div>
            </div>

            {/* ROI Impact */}
{/*             <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-500/20">
              <h4 className="text-white font-semibold mb-4">Impacto en tu Negocio</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">342%</div>
                  <div className="text-gray-300 text-sm">ROI promedio generado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-1">$2.4M</div>
                  <div className="text-gray-300 text-sm">Ingresos adicionales anuales</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
} 