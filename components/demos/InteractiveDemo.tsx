"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Database,
  BarChart3,
  Users,
  Calendar,
  ShoppingCart,
  FileText,
} from "lucide-react";
import BusinessChatDemo from "./BusinessChatDemo";
import DataAnalyticsDemo from "./DataAnalyticsDemo";
import CalendarDemo from "./CalendarDemo";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("business-chat");

  const tabs = [
    {
      id: "business-chat",
      name: "Asistente de Negocio",
      icon: MessageSquare,
      description: "Configura tu negocio y prueba el chat con IA",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "data-analytics",
      name: "Análisis de Datos",
      icon: BarChart3,
      description: "Analiza datos y genera gráficos con IA",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "calendar-ai",
      name: "Calendario IA",
      icon: Calendar,
      description: "Programación automática de citas",
      color: "from-green-500 to-teal-500",
    },
    /*     {
      id: "document-ai",
      name: "Documentos IA",
      icon: FileText,
      description: "Próximamente - Análisis de documentos",
      color: "from-indigo-500 to-blue-500",
      comingSoon: true,
    },
    {
      id: "crm-ai",
      name: "Gestión de Clientes",
      icon: Users,
      description: "Próximamente - CRM inteligente",
      color: "from-purple-500 to-pink-500",
      comingSoon: true,
    },
    {
      id: "ecommerce-ai",
      name: "E-commerce IA",
      icon: ShoppingCart,
      description: "Próximamente - Ventas automatizadas",
      color: "from-orange-500 to-red-500",
      comingSoon: true,
    }, */
  ];

  const renderActiveDemo = () => {
    switch (activeTab) {
      case "business-chat":
        return <BusinessChatDemo />;
      case "data-analytics":
        return <DataAnalyticsDemo />;
      case "calendar-ai":
        return <CalendarDemo />;
      default:
        return (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Próximamente!
              </h3>
              <p className="text-gray-300 text-lg">
                Esta experiencia estará disponible muy pronto. Mantente atento a
                nuestras actualizaciones.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="demo" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Demo
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Interactivo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Configura tu negocio y prueba cómo nuestros agentes IA pueden ayudarte a mejorar tu negocio.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => !(tab as any).comingSoon && setActiveTab(tab.id)}
                disabled={(tab as any).comingSoon}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                } ${
                  (tab as any).comingSoon
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                style={
                  activeTab === tab.id
                    ? {
                        backgroundImage: `linear-gradient(to right, ${
                          tab.color.split(" ")[0]
                        } ${tab.color.split(" ")[1]}, ${
                          tab.color.split(" ")[2]
                        } ${tab.color.split(" ")[3]})`,
                      }
                    : {}
                }
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === tab.id
                      ? "bg-white/20"
                      : `bg-gradient-to-r ${tab.color}`
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{tab.name}</div>
                  <div className="text-xs opacity-80">{tab.description}</div>
                </div>
                {(tab as any).comingSoon && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                    Próximamente
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Demo Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {renderActiveDemo()}
        </motion.div>
      </div>
    </section>
  );
}
