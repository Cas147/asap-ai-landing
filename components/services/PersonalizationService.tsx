'use client'

import { useState } from 'react'
import { Settings, Palette, Layout, User, CheckCircle, Monitor, Smartphone } from 'lucide-react'

export default function PersonalizationService() {
  const [selectedColor, setSelectedColor] = useState('#3B82F6')
  const [activeLayout, setActiveLayout] = useState(0)

  const layouts = [
    { name: 'Dashboard', icon: Monitor, description: 'Vista ejecutiva completa' },
    { name: 'Mobile', icon: Smartphone, description: 'Optimizado para móvil' },
    { name: 'Minimal', icon: Layout, description: 'Interfaz simplificada' },
    { name: 'Custom', icon: Settings, description: 'Completamente personalizable' }
  ]

  const personalizationFeatures = [
    { feature: 'Temas Personalizados', status: 'active', users: '2,847' },
    { feature: 'Layouts Adaptativos', status: 'customizing', users: '1,963' },
    { feature: 'Flujos Configurables', status: 'active', users: '4,521' },
    { feature: 'Branding Corporativo', status: 'pending', users: '892' }
  ]

  const customizationStats = [
    { label: "Configuraciones Únicas", value: "15,000+", description: "Por cliente promedio" },
    { label: "Tiempo de Setup", value: "< 5min", description: "Sin código requerido" },
    { label: "Templates Disponibles", value: "200+", description: "Para diferentes industrias" }
  ]



  return (
    <div id="personalization" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20">
      <div className="w-full lg:max-w-7xl lg:mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                06 PERSONALIZACIÓN
              </span>
            </div>
            
            <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Cada Cliente
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Único
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Configuración sin código que se adapta a tu marca, procesos 
              y necesidades específicas. Cada implementación es tan única 
              como tu empresa.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Settings className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Sin Código</h4>
                  <p className="text-gray-400 text-sm">Configura todo desde la interfaz visual</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Palette className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Branding Total</h4>
                  <p className="text-gray-400 text-sm">Colores, logos y estilos de tu marca</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <Layout className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Layouts Adaptativos</h4>
                  <p className="text-gray-400 text-sm">Interfaces que se ajustan a tus flujos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <User className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Perfiles Únicos</h4>
                  <p className="text-gray-400 text-sm">Experiencias por rol y preferencias</p>
                </div>
              </div>
            </div>

            {/* Customization Stats */}
{/*             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
              {customizationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">{stat.value}</div>
                  <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Personalization Demo */}
          <div className="relative">
            {/* Customization Interface */}
            <div 
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
              style={{ 
                borderColor: selectedColor,
                border: `2px solid ${selectedColor}60`
              }}
            >
              {/* Header */}
              <div 
                className="bg-gray-900/50 px-6 py-4 border-b transition-all duration-500"
                style={{ 
                  borderColor: selectedColor + '40'
                }}
              >
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Settings 
                    className="w-5 h-5" 
                    style={{ color: selectedColor }}
                  />
                  Configurador Visual
                </h4>
              </div>

              {/* Theme Selector */}
              <div className="p-6 space-y-6 bg-gray-800/30">
                <div>
                  <h5 
                    className="font-medium mb-3 transition-all duration-500"
                    style={{ color: selectedColor }}
                  >
                    Selector de Color
                  </h5>
                  <div className="space-y-4">
                    {/* Color Picker */}
                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-600">
                      <label htmlFor="colorPicker" className="text-white text-sm font-medium">
                        Color Principal:
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          id="colorPicker"
                          type="color"
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="w-12 h-8 rounded-lg border-2 cursor-pointer"
                          style={{ borderColor: selectedColor }}
                        />
                        <div className="text-gray-300 text-sm font-mono">
                          {selectedColor.toUpperCase()}
                        </div>
                      </div>
                    </div>

                    {/* Quick Color Presets */}
                    <div>
                      <div className="text-gray-400 text-xs mb-2">Colores Populares:</div>
                      <div className="flex gap-2">
                        {['#3B82F6', '#8B5CF6', '#059669', '#DC2626', '#F59E0B', '#EF4444', '#10B981', '#6366F1'].map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className="w-8 h-8 rounded-full border-2 hover:scale-110 transition-all duration-200"
                            style={{ 
                              backgroundColor: color,
                              borderColor: selectedColor === color ? '#fff' : 'transparent'
                            }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layout Options */}
                <div>
                  <h5 
                    className="font-medium mb-3 transition-all duration-500"
                    style={{ color: selectedColor }}
                  >
                    Layouts
                  </h5>
                  <div className="space-y-2">
                    {layouts.map((layout, index) => {
                      const IconComponent = layout.icon
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveLayout(index)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: activeLayout === index 
                              ? selectedColor + '20' 
                              : 'rgba(55, 65, 81, 0.3)',
                            border: activeLayout === index 
                              ? `1px solid ${selectedColor}60`
                              : '1px solid transparent'
                          }}
                        >
                          <IconComponent 
                            className="w-5 h-5" 
                            style={{ color: selectedColor }}
                          />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{layout.name}</div>
                            <div className="text-gray-400 text-xs">{layout.description}</div>
                          </div>
                          {activeLayout === index && (
                            <CheckCircle 
                              className="w-4 h-4" 
                              style={{ color: selectedColor }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Usage Stats */}
{/*             <div className="mt-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
              <h5 className="text-white font-medium mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Personalización en Tiempo Real
              </h5>
              <div className="space-y-2">
                {personalizationFeatures.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{item.feature}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">{item.users} usuarios</span>
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'active' ? 'bg-green-400' :
                        item.status === 'customizing' ? 'bg-yellow-400 animate-pulse' :
                        'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
} 