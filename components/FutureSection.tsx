"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function FutureSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ pointerEvents: "none" }}
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 3D Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Main Icon Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-60 animate-pulse" />

              {/* Icon Background */}
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

                {/* Icon */}
                <div className="flex items-center justify-center w-full h-full">
                  <Zap className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Floating Sparkles */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-cyan-400 animate-bounce" />
              <Sparkles className="absolute -bottom-2 -left-4 w-6 h-6 text-purple-400 animate-bounce delay-300" />
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Da el paso hacia el
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              futuro de la IA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Únete a miles de empresas que ya están usando{" "}
            <span className="text-cyan-400 font-semibold">ASAP.ai</span> para
            transformar ideas en automatización inteligente de alto rendimiento,
            <span className="text-white font-medium"> rápidamente</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
{/*           <Link href="/contact">
            <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Conversemos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link> */}

          <Link href="/contact">
            <button className="group border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
              <span className="flex items-center gap-2">
                Conversemos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Sin configuración compleja</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
              <span>Resultados en minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
