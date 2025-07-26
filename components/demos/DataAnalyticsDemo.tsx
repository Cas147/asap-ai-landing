"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  PieChart,
  TrendingUp,
  Plus,
  X,
  Edit3,
  MessageSquare,
  Send,
  Bot,
  User,
  AlertCircle,
} from "lucide-react";
import { useRateLimit } from "../../hooks/useRateLimit";

interface DataRow {
  id: string;
  [key: string]: string | number;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function DataAnalyticsDemo() {
  const { remainingUses, isLimitReached, canMakeRequest, incrementUsage, dailyLimit } = useRateLimit('analytics')
  
  const [tableData, setTableData] = useState<DataRow[]>([
    { id: "1", mes: "Enero", ventas: 15000, clientes: 120 },
    { id: "2", mes: "Febrero", ventas: 18000, clientes: 145 },
    { id: "3", mes: "Marzo", ventas: 22000, clientes: 160 },
    { id: "4", mes: "Abril", ventas: 19000, clientes: 155 },
    { id: "5", mes: "Mayo", ventas: 25000, clientes: 180 },
  ]);

  const [columns] = useState(["mes", "ventas", "clientes"]);
  const [newRow, setNewRow] = useState<{ [key: string]: string | number }>({});
  const [editingRow, setEditingRow] = useState<string | null>(null);

  const [defaultQuestions, setDefaultQuestions] = useState([
    "¿Cuál fue el mes con mayores ventas?",
    "¿Cómo ha sido el crecimiento de clientes?",
    "¿Cuál es el promedio de ventas mensuales?",
    "¿Qué tendencias observas en los datos?",
    "Calcula el crecimiento porcentual mensual",
    "¿Qué mes tuvo el mejor rendimiento?",
    "Proyecta las ventas para el próximo mes",
    "¿Hay correlación entre ventas y clientes?",
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [selectedChart, setSelectedChart] = useState<"bar" | "pie" | "line">("bar");

  const [messages, setMessages] = useState<Message[]>([
          {
        id: "1",
        text: "¡Hola! Soy tu analista de datos ASAP.ai. Puedes hacerme preguntas sobre tus datos y te daré insights profesionales en tiempo real. Tienes 5 consultas IA gratuitas por día en este chat.",
        isUser: false,
        timestamp: new Date(),
      },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addRow = () => {
    if (Object.keys(newRow).length === columns.length) {
      const id = Date.now().toString();
      setTableData(prev => [...prev, { id, ...newRow }]);
      setNewRow({});
    }
  };

  const deleteRow = (id: string) => {
    setTableData(prev => prev.filter(row => row.id !== id));
  };

  const updateRow = (id: string, field: string, value: string | number) => {
    setTableData(prev => 
      prev.map(row => 
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const addQuestion = () => {
    if (newQuestion.trim() && defaultQuestions.length < 8) {
      setDefaultQuestions(prev => [...prev, newQuestion.trim()]);
      setNewQuestion("");
    }
  };

  const removeQuestion = (index: number) => {
    setDefaultQuestions(prev => prev.filter((_, i) => i !== index));
  };

  const askQuestion = async (question: string) => {
    // Check rate limit before making request
    if (!canMakeRequest()) {
      const limitMessage: Message = {
        id: Date.now().toString(),
        text: `Has alcanzado el límite diario de ${dailyLimit} consultas IA. Vuelve mañana para más análisis, o puedes seguir usando las funciones básicas de la demo.`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, limitMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);

    try {
      // Call the OpenAI API with the current table data
      const response = await fetch('/api/analyze-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          data: tableData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze data');
      }

      const result = await response.json();
      
      // Increment usage count after successful API call
      incrementUsage();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: result.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error asking question:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, hubo un error al analizar los datos. Por favor, intenta de nuevo.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;
    askQuestion(currentMessage);
  };

  const getChartVisualization = () => {
    // Calculate the maximum value from the data to prevent overflow
    const maxValue = Math.max(...tableData.map(row => row.ventas as number));
    
    if (selectedChart === "bar") {
      return (
        <div className="space-y-2">
          {tableData.map((row, index) => (
            <div key={row.id} className="flex items-center gap-2">
              <span className="text-sm text-gray-300 w-16">{row.mes}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-6 relative">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-6 rounded-full transition-all duration-1000"
                  style={{
                    width: `${((row.ventas as number) / maxValue) * 100}%`,
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                  ${row.ventas}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (selectedChart === "pie") {
      return (
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
              <PieChart className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-32">
        <svg className="w-full h-full" viewBox="0 0 400 120">
          {tableData.map((row, index) => (
            <circle
              key={row.id}
              cx={80 + index * 60}
              cy={100 - ((row.ventas as number) / maxValue) * 80}
              r="4"
              fill="#06b6d4"
            />
          ))}
          {tableData.map((row, index) => {
            if (index === 0) return null;
            const prevRow = tableData[index - 1];
            return (
              <line
                key={`line-${row.id}`}
                x1={80 + (index - 1) * 60}
                y1={100 - ((prevRow.ventas as number) / maxValue) * 80}
                x2={80 + index * 60}
                y2={100 - ((row.ventas as number) / maxValue) * 80}
                stroke="#06b6d4"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Demo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Datos</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-4 flex-1">
            <div className="h-80 overflow-y-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700/30">
                    {columns.map((column) => (
                      <th key={column} className="text-left p-2 text-gray-300 capitalize">
                        {column}
                      </th>
                    ))}
                    <th className="text-left p-2 text-gray-300">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id} className="border-b border-gray-700/30">
                      {columns.map((column) => (
                        <td key={column} className="p-2">
                          {editingRow === row.id ? (
                            <input
                              type={column === "mes" ? "text" : "number"}
                              value={row[column]}
                              onChange={(e) => updateRow(row.id, column, e.target.value)}
                              className="w-full bg-gray-600 text-white px-2 py-1 rounded text-xs"
                              onBlur={() => setEditingRow(null)}
                              onKeyPress={(e) => e.key === "Enter" && setEditingRow(null)}
                            />
                          ) : (
                            <span className="text-gray-300">{row[column]}</span>
                          )}
                        </td>
                      ))}
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button
                            onClick={() => setEditingRow(row.id)}
                            className="text-cyan-400 hover:text-cyan-300"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => deleteRow(row.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Row */}
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              {columns.map((column) => (
                <input
                  key={column}
                  type={column === "mes" ? "text" : "number"}
                  placeholder={column}
                  value={newRow[column] || ""}
                  onChange={(e) => setNewRow(prev => ({ ...prev, [column]: e.target.value }))}
                  className="bg-gray-600 text-white px-2 py-1 rounded text-xs"
                />
              ))}
            </div>
            <button
              onClick={addRow}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-sm"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Agregar Fila
            </button>
          </div>
        </motion.div>

        {/* Analytics Chat */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative">
              <MessageSquare className="w-6 h-6 text-white" />
              <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center ${
                isLimitReached ? 'bg-red-500' : 'bg-green-500'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">Analista IA</h3>
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
          <div className="flex-1 bg-gray-700/30 rounded-lg p-4 mb-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
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
                        {message.isUser ? "Tú" : "Analista IA"}
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
                      <span className="text-xs opacity-70">Analista IA</span>
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
            </div>
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder={isLimitReached ? "Límite diario alcanzado" : "Pregunta sobre los datos..."}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm disabled:opacity-50"
              disabled={isLoading || isLimitReached}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !currentMessage.trim() || isLimitReached}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          {isLimitReached && (
            <div className="mt-2 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Has usado todas tus consultas IA por hoy. Vuelve mañana para más análisis.</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Charts & Questions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Visualización</h3>
          </div>

          {/* Chart Type Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSelectedChart("bar")}
              className={`flex-1 p-2 rounded-lg text-sm transition-all ${
                selectedChart === "bar"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <BarChart3 className="w-4 h-4 inline mr-1" />
              Barras
            </button>
            <button
              onClick={() => setSelectedChart("pie")}
              className={`flex-1 p-2 rounded-lg text-sm transition-all ${
                selectedChart === "pie"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <PieChart className="w-4 h-4 inline mr-1" />
              Circular
            </button>
            <button
              onClick={() => setSelectedChart("line")}
              className={`flex-1 p-2 rounded-lg text-sm transition-all ${
                selectedChart === "line"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-1" />
              Línea
            </button>
          </div>

          {/* Chart Visualization */}
          <div className="bg-gray-700/30 rounded-lg p-4 mb-4 min-h-[120px]">
            {getChartVisualization()}
          </div>

          {/* Default Questions */}
          <div className="space-y-3 flex-1 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-300">Preguntas Frecuentes</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {defaultQuestions.map((question, index) => (
                <div key={index} className="flex items-center gap-2">
                  <button
                    onClick={() => askQuestion(question)}
                    disabled={isLimitReached}
                    className="flex-1 text-left p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {question}
                  </button>
                  <button
                    onClick={() => removeQuestion(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Add Question */}
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {defaultQuestions.length}/8 preguntas
                </span>
                {defaultQuestions.length >= 8 && (
                  <span className="text-xs text-amber-400">
                    Límite alcanzado
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addQuestion()}
                  placeholder={
                    defaultQuestions.length >= 8 
                      ? "Límite de 8 preguntas alcanzado" 
                      : "Nueva pregunta..."
                  }
                  className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={defaultQuestions.length >= 8}
                />
                <button
                  onClick={addQuestion}
                  disabled={defaultQuestions.length >= 8 || !newQuestion.trim()}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connection Lines */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line from data to analytics */}
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
          {/* Line from analytics to charts */}
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
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
          <h4 className="text-2xl font-bold text-white mb-4">
            ¿Cómo funciona?
          </h4>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            1. Modifica o agrega datos en la tabla de la izquierda
            <br />
            2. Haz preguntas al analista IA sobre tus datos
            <br />
            3. Selecciona el tipo de gráfico que prefieres
            <br />
            4. Ve cómo la IA analiza en tiempo real y genera insights profesionales automáticamente
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-cyan-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Análisis IA en tiempo real</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 