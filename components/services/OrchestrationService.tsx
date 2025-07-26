'use client'

import { useState, useEffect } from 'react'
import { Workflow, Database, Cloud, Zap, GitBranch, Settings, CheckCircle } from 'lucide-react'

export default function OrchestrationService() {
  const [activeConnection, setActiveConnection] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const systemNodes = [
    { id: 'crm', name: 'CRM', icon: Database, x: 20, y: 30, color: 'bg-blue-500', connected: true },
    { id: 'erp', name: 'ERP', icon: Settings, x: 80, y: 30, color: 'bg-green-500', connected: true },
    { id: 'api', name: 'API Gateway', icon: Cloud, x: 50, y: 10, color: 'bg-purple-500', connected: true },
    { id: 'ai', name: 'ASAP.ai', icon: Zap, x: 50, y: 50, color: 'bg-cyan-500', connected: true },
    { id: 'analytics', name: 'Analytics', icon: GitBranch, x: 20, y: 70, color: 'bg-orange-500', connected: false },
    { id: 'warehouse', name: 'Data Warehouse', icon: Database, x: 80, y: 70, color: 'bg-pink-500', connected: false }
  ]

  const connections = [
    { from: 'crm', to: 'ai', status: 'active', data: 'Customer Data' },
    { from: 'ai', to: 'erp', status: 'processing', data: 'Orders Processing' },
    { from: 'api', to: 'ai', status: 'active', data: 'Real-time Events' },
    { from: 'ai', to: 'analytics', status: 'pending', data: 'Insights' }
  ]

  const orchestrationMetrics = [
    { label: 'Sistemas Integrados', value: '12', trend: '+3', color: 'text-blue-400' },
    { label: 'Procesos Activos', value: '847', trend: '+23%', color: 'text-green-400' },
    { label: 'Latencia Promedio', value: '0.3s', trend: '-45%', color: 'text-purple-400' },
    { label: 'Uptime', value: '99.9%', trend: '100%', color: 'text-cyan-400' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true)
      setTimeout(() => {
        setActiveConnection((prev) => (prev + 1) % connections.length)
        setIsProcessing(false)
      }, 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="workflow" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-900/20 via-gray-900 to-indigo-900/20">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                05 ORQUESTACIÓN
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Orquestación que
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Conecta
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              No más silos de datos. Nuestra plataforma orquesta todos tus sistemas, 
              APIs y procesos en una sinfonía perfecta de automatización inteligente 
              que funciona 24/7.
            </p>

            {/* Orchestration Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Workflow className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Flujos Complejos</h4>
                  <p className="text-gray-400 text-sm">Orquesta procesos multi-sistema con lógica condicional avanzada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Database className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Integración Universal</h4>
                  <p className="text-gray-400 text-sm">Conecta cualquier sistema, API o base de datos sin código</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Cloud className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Escalabilidad Automática</h4>
                  <p className="text-gray-400 text-sm">Se adapta automáticamente a picos de carga y demanda</p>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/20">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime garantizado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-1">0.3s</div>
                <div className="text-gray-300 text-sm">Latencia promedio</div>
              </div>
            </div>
          </div>

          {/* System Architecture Visualization */}
          <div className="relative">
            {/* Architecture Diagram */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 h-96 relative overflow-hidden">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-400" />
                Arquitectura de Integración
              </h4>

              {/* System Nodes */}
              <div className="relative h-full">
                {systemNodes.map((node) => {
                  const NodeIcon = node.icon
                  return (
                    <div
                      key={node.id}
                      className={`absolute w-16 h-16 ${node.color} rounded-xl flex items-center justify-center shadow-lg border-2 ${
                        node.connected ? 'border-green-400' : 'border-gray-600'
                      } transition-all duration-300 hover:scale-110`}
                      style={{ 
                        left: `${node.x}%`, 
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <NodeIcon className="w-8 h-8 text-white" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                        {node.name}
                      </div>
                      {node.connected && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {connections.map((connection, index) => {
                    const fromNode = systemNodes.find(n => n.id === connection.from)
                    const toNode = systemNodes.find(n => n.id === connection.to)
                    
                    if (!fromNode || !toNode) return null

                    const isActive = index === activeConnection
                    
                    return (
                      <g key={index}>
                        <line
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke={
                            connection.status === 'active' ? '#06b6d4' :
                            connection.status === 'processing' ? '#f59e0b' : '#6b7280'
                          }
                          strokeWidth={isActive ? "3" : "2"}
                          strokeDasharray={connection.status === 'processing' ? "5,5" : "none"}
                          className={isActive ? 'animate-pulse' : ''}
                        />
                        {/* Data flow indicator */}
                        {isActive && (
                          <circle
                            r="3"
                            fill="#06b6d4"
                            className="animate-ping"
                          >
                            <animateMotion
                              dur="2s"
                              repeatCount="indefinite"
                              path={`M${fromNode.x * 3.84},${fromNode.y * 1.44} L${toNode.x * 3.84},${toNode.y * 1.44}`}
                            />
                          </circle>
                        )}
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>

            {/* Data Flow Panel */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 mt-6">
              <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Flujo de Datos en Tiempo Real
              </h5>
              <div className="space-y-2">
                {connections.map((connection, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                      index === activeConnection 
                        ? 'bg-cyan-900/30 border border-cyan-500/50' 
                        : 'bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        connection.status === 'active' ? 'bg-green-400 animate-pulse' :
                        connection.status === 'processing' ? 'bg-yellow-400 animate-bounce' : 
                        'bg-gray-400'
                      }`} />
                      <span className="text-sm text-gray-300">
                        {systemNodes.find(n => n.id === connection.from)?.name} → {systemNodes.find(n => n.id === connection.to)?.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{connection.data}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {orchestrationMetrics.map((metric, index) => (
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

            {/* Status Indicators */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              SISTEMA ACTIVO
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              12 INTEGRACIONES
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 