'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle URL hash on page load (for direct URLs like /contact#demo)
  useEffect(() => {
    const hash = window.location.hash
    if (hash && pathname === '/contact') {
      // If we're on contact page with a hash, redirect to home with that hash
      window.location.href = '/' + hash
    }
  }, [pathname])

  const navItems = [
    { name: 'Demo', href: '#demo' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proceso', href: '#process' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // If we're on the contact page, go to home first then scroll
      if (pathname === '/contact') {
        window.location.href = '/' + href
      } else {
        // We're on home page, just scroll to section
        const sectionId = href.substring(1)
        if (sectionId === 'home') {
          // Scroll to top for home
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full max-w-full z-50 transition-all duration-300 overflow-hidden ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg glow-cyan">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ASAP.ai</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ) : (
                  <Link href={item.href}>
                    <motion.span
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative cursor-pointer block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 glow-cyan hover:glow-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hablemos
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 w-full max-w-full overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link href={item.href}>
                    <span
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact">
                <button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Hablemos
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
