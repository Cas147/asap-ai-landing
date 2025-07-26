'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'rag-sistemas',
      title: 'Inside RAG: Haciendo los Modelos de Lenguaje Más Inteligentes con Recuperación de Conocimiento',
      excerpt: 'Descubre cómo los sistemas RAG revolucionan la IA al combinar modelos de lenguaje con bases de conocimiento externas para respuestas más precisas y actualizadas.',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'Tecnología IA',
      slug: 'rag-sistemas'
    },
    {
      id: 'automatizacion-ideas',
      title: '10 Ideas de Automatización para Pequeñas Empresas Usando Agentes IA',
      excerpt: 'Explora estrategias prácticas para implementar agentes IA en tu pequeña empresa y automatizar procesos clave para aumentar la eficiencia y reducir costos.',
      date: '2024-01-10',
      readTime: '12 min',
      category: 'Automatización',
      slug: 'automatizacion-ideas'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ASAP.ai</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tendencias y conocimientos sobre inteligencia artificial, automatización y el futuro de los negocios digitales.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} de lectura</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Leer más
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres estar al día con las últimas tendencias en IA?
            </h3>
            <p className="text-gray-300 mb-6">
              Suscríbete a nuestro newsletter y recibe insights exclusivos directamente en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 