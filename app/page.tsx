'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import InteractiveDemo from '../components/demos/InteractiveDemo'
import Solution from '../components/Solution'
import Process from '../components/Process'
import CTA from '../components/CTA'
import FutureSection from '../components/FutureSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black no-scroll-x">
      <Navigation />
      <div className="pt-16 md:pt-0">
        <Hero />
      <InteractiveDemo />
      <Services />
{/*       <Solution /> */}
      <Process />
{/*       <CTA />
 */}      <FutureSection />
      <Footer />
      </div>
    </main>
  )
}
