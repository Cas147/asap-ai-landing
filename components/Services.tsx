'use client'

import { useEffect, useRef, useState } from 'react'
import AIAgentsService from './services/AIAgentsService'
import AutomationService from './services/AutomationService'
import ProcessingService from './services/ProcessingService'
import AnalyticsService from './services/AnalyticsService'
import OrchestrationService from './services/OrchestrationService'
import PersonalizationService from './services/PersonalizationService'

export default function Services() {
  const [activeSection, setActiveSection] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const services = [
    { id: 'ai-agents', component: AIAgentsService },
    { id: 'automation', component: AutomationService },
    { id: 'nlp', component: ProcessingService },
    { id: 'analytics', component: AnalyticsService },
    { id: 'workflow', component: OrchestrationService },
    { id: 'personalization', component: PersonalizationService }
  ]

  const menuItems = [
    { id: 'ai-agents', number: '01', title: 'AGENTES IA' },
    { id: 'automation', number: '02', title: 'AUTOMATIZACIÓN' },
    { id: 'nlp', number: '03', title: 'PROCESAMIENTO' },
    { id: 'analytics', number: '04', title: 'ANALÍTICA' },
    { id: 'workflow', number: '05', title: 'ORQUESTACIÓN' },
    { id: 'personalization', number: '06', title: 'PERSONALIZACIÓN' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionBottom = sectionRect.bottom
      const navbarHeight = 80
      const windowHeight = window.innerHeight

      // Find the last service element to determine when services actually end
      const lastServiceElement = document.getElementById(services[services.length - 1].id)
      let servicesActuallyEnded = false
      
      if (lastServiceElement) {
        const lastServiceRect = lastServiceElement.getBoundingClientRect()
        // Services have ended when the last service section has scrolled past the middle of the screen
        servicesActuallyEnded = lastServiceRect.bottom < windowHeight / 2
      }

      // Menu should be sticky when:
      // 1. Section top has passed the navbar (sectionTop <= navbarHeight)
      // 2. We haven't scrolled past all the service content (not servicesActuallyEnded)
      // 3. There's still some section visible (sectionBottom > navbarHeight)
      const shouldBeSticky = sectionTop <= navbarHeight && !servicesActuallyEnded && sectionBottom > navbarHeight

      setIsSticky(shouldBeSticky)

             // Find active section based on scroll position
       if (shouldBeSticky) {
         let activeIndex = 0
         for (let i = 0; i < menuItems.length; i++) {
           const element = document.getElementById(menuItems[i].id)
           if (element) {
             const rect = element.getBoundingClientRect()
             if (rect.top <= navbarHeight + 100) {
               activeIndex = i
             }
           }
         }
         setActiveSection(activeIndex)
       }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

     const scrollToService = (index: number) => {
     const element = document.getElementById(menuItems[index].id) as HTMLElement | null
     if (element) {
       const navbarHeight = 80
       const elementTop = element.getBoundingClientRect().top + window.pageYOffset
       window.scrollTo({
         top: elementTop - navbarHeight - 20,
         behavior: 'smooth'
       })
     }
   }

  return (
    <section id="services" ref={sectionRef} className="relative bg-gray-900">
      {/* Sticky Sidebar Menu - Hidden on mobile */}
      <div
        ref={menuRef}
        className={`fixed left-0 z-40 transition-all duration-300 hidden md:block ${
          isSticky ? 'top-20' : 'top-[-400px]'
        }`}
        style={{ transform: isSticky ? 'translateX(0)' : 'translateX(-300px)' }}
      >
                <div className="bg-gray-900/95 backdrop-blur-sm border-r border-gray-700/50 w-64 p-6" style={{ height: 'calc(100vh - 80px)', maxHeight: '500px' }}>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToService(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-1 ${
                  activeSection === index
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-mono ${
                    activeSection === index ? 'text-cyan-400' : 'text-gray-500'
                  }`}>
                    {item.number}
                  </span>
                  <div>
                    <div className={`font-semibold text-sm ${
                      activeSection === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
       </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSticky ? 'md:ml-64 ml-0' : 'ml-0'}`}>
        {/* Header */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Nuestros
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Servicios IA</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Soluciones completas y configurables de inteligencia artificial que transforman 
                tu empresa con automatización avanzada y decisiones inteligentes.
              </p>
            </div>
          </div>
        </div>

                {/* Service Sections */}
        {services.map((service) => {
          const ServiceComponent = service.component
          return <ServiceComponent key={service.id} />
        })}
      </div>
    </section>
  )
}
