'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Clock, TrendingDown, Users, AlertCircle } from 'lucide-react'

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      icon: Clock,
      title: "Legacy Systems Drain Resources",
      description: "Your team spends 60% of their time on repetitive tasks while competitors deploy AI agents that work 24/7 without breaks.",
      stat: "60% of work time wasted",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      title: "Exponential Scaling Challenges",
      description: "Manual processes create bottlenecks that compound exponentially. Every new customer multiplies operational complexity.",
      stat: "400% cost increase at scale",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Human Limitations & Errors",
      description: "Human cognitive limits create inconsistencies. AI agents process information with perfect accuracy and unlimited capacity.",
      stat: "23% error rate in manual tasks",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: AlertCircle,
      title: "Competitive Disadvantage",
      description: "While you're stuck in operational tasks, AI-first companies are capturing market share with superior efficiency.",
      stat: "45% market share loss risk",
      color: "from-red-600 to-red-700"
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Hidden Cost of 
            <span className="text-red-400 text-glow"> Legacy Operations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every second your business operates without AI automation, you're losing ground to competitors who've already embraced the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className={`bg-gradient-to-r ${problem.color} p-3 rounded-lg shadow-lg`}>
                  <problem.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-red-400 font-semibold text-sm">
                      IMPACT: {problem.stat}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">
              The AI Revolution Waits for No One
            </h3>
            <p className="text-xl mb-6 text-gray-300">
              Companies that resist AI automation lose an average of $2.3M annually while their competitors accelerate ahead.
            </p>
            <div className="flex justify-center items-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-400 text-glow">$2.3M</div>
                <div className="text-sm text-gray-400">Annual Loss</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 text-glow">78%</div>
                <div className="text-sm text-gray-400">Efficiency Drop</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 text-glow">3x</div>
                <div className="text-sm text-gray-400">Slower Growth</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
