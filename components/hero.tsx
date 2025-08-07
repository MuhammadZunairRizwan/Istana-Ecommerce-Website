'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('hero-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-100 to-amber-50 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-stone-400 rounded-full animate-spin-very-slow"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 border border-stone-400 rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-20 w-32 h-32 border border-stone-400 rounded-full animate-float"></div>
        </div>
      </div>

      <div className={`text-center transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="mb-8">
          <h2 className="font-serif text-5xl md:text-7xl font-light text-stone-800 mb-6 animate-fade-in-up">
            Crafted with
            <span className="block text-orange-500 animate-text-glow">Precision</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto animate-expand" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          Each piece tells a story of elegance, luxury, and timeless beauty crafted by master artisans
        </p>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-rose-300 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-emerald-400 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
    </section>
  )
}
