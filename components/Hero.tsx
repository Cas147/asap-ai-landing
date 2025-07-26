"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Zap,
  Target,
  Code,
  Cpu,
  Network,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const companyLogos = [
    { name: "TechCorp", width: "w-20" },
    { name: "InnovateAI", width: "w-24" },
    { name: "FutureScale", width: "w-22" },
    { name: "DataFlow", width: "w-20" },
    { name: "AutomateX", width: "w-24" },
  ];

  const achievements = [
    { icon: Star, text: "#1 en Rendimiento IA", color: "text-yellow-400" },
    { icon: TrendingUp, text: "#1 en ROI Comprobado", color: "text-green-400" },
    { icon: CheckCircle, text: "#1 en Satisfacción", color: "text-cyan-400" },
  ];

  const scrollToDemo = () => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background image from assets */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Professional overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Subtle blue gradient overlay to match page theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/5 to-transparent"></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Achievement badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon size={16} className={achievement.color} />
                <span className="text-sm font-medium text-white">
                  {achievement.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Los Agente IA</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              #1 del Mundo
            </span>
            <br />
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Despliega agentes IA que superan a equipos humanos en velocidad,
            precisión y disponibilidad. Automatización inteligente que
            transforma empresas globales en 48 horas.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agenda una llamada Gratuita
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              onClick={scrollToDemo}
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Demo
            </motion.button>
          </motion.div>

          {/* Performance stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-sm text-gray-300">
                Más Rápido que Humanos
              </div>
            </div>
            <div className="text-center p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Precisión Garantizada</div>
            </div>
            <div className="text-center p-6 bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Disponibilidad Total</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
