"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Settings,
  Send,
  Bot,
  User,
  Plus,
  X,
  Edit3,
  Smartphone,
  AlertCircle,
} from "lucide-react";
import { useRateLimit } from "../../hooks/useRateLimit";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function BusinessChatDemo() {
  const { remainingUses, isLimitReached, canMakeRequest, incrementUsage, dailyLimit } = useRateLimit('business_chat')
  
  const [businessSchedule, setBusinessSchedule] = useState({
    lunes: "9:00 AM - 6:00 PM",
    martes: "9:00 AM - 6:00 PM",
    miércoles: "9:00 AM - 6:00 PM",
    jueves: "9:00 AM - 6:00 PM",
    viernes: "9:00 AM - 6:00 PM",
    sábado: "10:00 AM - 4:00 PM",
    domingo: "Cerrado",
  });

  const [services, setServices] = useState([
    "Desarrollo Web",
    "Integración de IA",
    "Desarrollo de Apps Móviles",
    "Marketing Digital",
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy tu asistente de IA. Puedes hacerme preguntas sobre servicios y horarios. Tienes 5 consultas IA gratuitas por día en este chat.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<string | null>(null);
  const [newService, setNewService] = useState("");
  const [companyName, setCompanyName] = useState("Demo Company");

  useEffect(() => {
    setMessages([
      {
        id: "1",
        text: `¡Hola! Soy tu asistente de IA para ${companyName}. ¡Pregúntame sobre nuestros servicios o horarios de atención!`,
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  }, [companyName]);

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Check rate limit before making request
    if (!canMakeRequest()) {
      const limitMessage: Message = {
        id: Date.now().toString(),
        text: `Has alcanzado el límite diario de ${dailyLimit} consultas IA. Vuelve mañana para más conversaciones, o puedes seguir configurando tu negocio.`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, limitMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
          companyName,
          businessSchedule: Object.entries(businessSchedule)
            .map(([day, hours]) => `${day}: ${hours}`)
            .join("\n"),
          services: services.join(", "),
        }),
      });

      const data = await response.json();

      // Increment usage count after successful API call
      incrementUsage();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Lo siento, no pude procesar esa solicitud.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, hubo un error al procesar tu solicitud.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSchedule = (day: string, hours: string) => {
    setBusinessSchedule((prev) => ({ ...prev, [day]: hours }));
    setEditingSchedule(null);
  };

  const addService = () => {
    if (newService.trim() && services.length < 6) {
      setServices((prev) => [...prev, newService.trim()]);
      setNewService("");
    }
  };

  const removeService = (index: number) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      {/* Company Name Input */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-12"
      >
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-300 mb-2 text-center">
            Nombre de tu empresa
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-center text-lg font-medium"
            placeholder="Ingresa el nombre de tu empresa"
          />
        </div>
      </motion.div>

      {/* Demo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {/* Business Schedule Node */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Horario de Negocio</h3>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto">
            {Object.entries(businessSchedule).map(([day, hours]) => (
              <div
                key={day}
                className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
              >
                <span className="text-gray-300 capitalize font-medium">
                  {day}
                </span>
                {editingSchedule === day ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={hours}
                      onChange={(e) =>
                        setBusinessSchedule((prev) => ({
                          ...prev,
                          [day]: e.target.value,
                        }))
                      }
                      className="bg-gray-600 text-white px-2 py-1 rounded text-sm w-32"
                      onBlur={() => setEditingSchedule(null)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setEditingSchedule(null)
                      }
                      autoFocus
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-sm">{hours}</span>
                    <button
                      onClick={() => setEditingSchedule(day)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative">
              <Smartphone className="w-6 h-6 text-white" />
              <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center ${
                isLimitReached ? 'bg-red-500' : 'bg-green-500'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">
                Chat con IA - {companyName}
              </h3>
              <div className="flex items-center gap-2 text-xs">
                {isLimitReached ? (
                  <div className="flex items-center gap-1 text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    <span>Límite diario alcanzado</span>
                  </div>
                ) : (
                  <div className="text-green-400">
                    {remainingUses}/{dailyLimit} consultas IA restantes hoy
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 bg-gray-700/30 rounded-lg p-4 mb-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isUser
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-600 text-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.isUser ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.isUser ? "Tú" : "ASAP ai"}
                      </span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-600 text-gray-100 max-w-xs p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs opacity-70">IA</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder={isLimitReached ? "Límite diario alcanzado" : "Escribe tu mensaje..."}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
              disabled={isLoading || isLimitReached}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !currentMessage.trim() || isLimitReached}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {isLimitReached && (
            <div className="mt-2 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Has usado todas tus consultas IA por hoy. Vuelve mañana para más conversaciones.</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Services Node */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Servicios</h3>
          </div>

          <div className="space-y-3 mb-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
              >
                <span className="text-gray-300">{service}</span>
                <button
                  onClick={() => removeService(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {services.length}/6 servicios
              </span>
              {services.length >= 6 && (
                <span className="text-xs text-amber-400">Límite alcanzado</span>
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addService()}
                placeholder={
                  services.length >= 6
                    ? "Límite de 6 servicios alcanzado"
                    : "Agregar servicio..."
                }
                className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={services.length >= 6}
              />
              <button
                onClick={addService}
                disabled={services.length >= 6 || !newService.trim()}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connection Lines - Behind panels */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Line from company name to phone */}
          <motion.line
            x1="50"
            y1="25"
            x2="50"
            y2="45"
            stroke="rgb(6, 182, 212)"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          {/* Line from schedule to phone */}
          <motion.line
            x1="25"
            y1="50"
            x2="50"
            y2="50"
            stroke="rgb(6, 182, 212)"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          {/* Line from phone to services */}
          <motion.line
            x1="50"
            y1="50"
            x2="75"
            y2="50"
            stroke="rgb(6, 182, 212)"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <h4 className="text-2xl font-bold text-white mb-4">
            ¿Cómo funciona?
          </h4>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            1. Ingresa el nombre de tu empresa en el campo superior
            <br />
            2. Modifica el horario de tu negocio y servicios en los paneles
            laterales
            <br />
            3. Haz preguntas en el chat central como "¿Cuáles son sus horarios?"
            o "¿Qué servicios ofrecen?"
            <br />
            4. Ve cómo la IA responde automáticamente usando la información que
            configuraste
          </p>
        </div>
      </motion.div>
    </div>
  );
}
