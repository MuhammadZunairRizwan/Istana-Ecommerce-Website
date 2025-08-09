'use client'

import { useEffect, useState } from 'react'

export default function VideoHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
   {/* Background Image */}
<div className="absolute inset-0 w-full h-full overflow-hidden">
  <img
    src="/Hero.png" // Replace with your actual image path
    alt="Background"
    className="w-full h-full object-cover scale-105 animate-slow-zoom"
  />
  {/* Optional gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-stone-100 opacity-50"></div>
</div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white transition-all duration-3000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-4 animate-text-shimmer bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent bg-size-200 animate-shimmer">
            Istana Jewellers
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto animate-expand"></div>
        </div>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up opacity-90" style={{ animationDelay: '1s' }}>
          Exclusive and one-of-a-kind jewelry collection
        </p>
        
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <button className="group bg-white text-stone-800 px-8 py-3 text-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative">
              Explore Collection
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></span>
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-70 animate-pulse">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
