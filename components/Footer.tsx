'use client'

import { Zap, Mail, Linkedin, Twitter, Instagram, Youtube, Github } from 'lucide-react'

export default function Footer() {
  const productLinks = [
    { name: 'Agentes IA', href: '/#ai-agents' },
    { name: 'Automatización', href: '/#automation' },
    { name: 'Procesamiento NLP', href: '/#nlp' },
    { name: 'Analítica Predictiva', href: '/#analytics' },
    { name: 'Orquestación', href: '/#workflow' },
    { name: 'Personalización', href: '/#personalization' }
  ]

/*   const solutionLinks = [
    'Soporte al Cliente',
    'Automatización de Ventas',
    'Marketing Inteligente',
    'Operaciones 24/7',
    'Gestión de Datos',
    'Chatbots Empresariales'
  ]
 */
  const resourceLinks = [
    { name: 'Centro de Ayuda', href: '/centro-de-ayuda' },
    { name: 'Casos de Estudio', href: '/casos-de-estudio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/webinars' }
  ]

  const companyLinks = [
    { name: 'Sobre ASAP.ai', href: '/sobre-asap-ai' },
    { name: 'Nuestro Equipo', href: '/nuestro-equipo' },
    { name: 'Contacto', href: '/contact' }
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/asap.ai_/', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
{/*           <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:asap.ai.official@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  asap.ai.official@gmail.com
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                Medellín, CO
              </div>
              <div className="text-gray-400 text-sm">
                Global Operations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left side - Brand and Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1.5 rounded-lg">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-semibold">ASAP.ai</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 ASAP.ai. All rights reserved.
              </div>
            </div>

            {/* Right side - Social Media */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
