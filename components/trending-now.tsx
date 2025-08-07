'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const trendingItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=400&fit=crop',
    rotation: -15,
    delay: 0
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=400&fit=crop',
    rotation: 5,
    delay: 500
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=400&fit=crop',
    rotation: 0,
    delay: 1000
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=400&fit=crop',
    rotation: 10,
    delay: 1500
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300&h=400&fit=crop',
    rotation: -8,
    delay: 2000
  }
]

export default function TrendingNow() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationOffset, setAnimationOffset] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('trending-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.5)
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="trending-section" className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-8">Gold Chains</h2>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Central "Trending Now" text */}
          <div className="absolute z-10 text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Trending Now</h3>
            <button className="text-stone-600 hover:text-stone-800 transition-colors duration-300 flex items-center gap-2 mx-auto">
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Circular arrangement of polaroid images */}
          <div className="relative w-full max-w-4xl aspect-square">
            {trendingItems.map((item, index) => {
              // Half circle arrangement (180 degrees instead of 360)
              const baseAngle = (index * 45) - 90 // 180/4 = 45 degrees between items, start from left
              const angle = baseAngle + animationOffset // Add continuous rotation
              const radius = 250
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius * 0.5 // Flatten the arc

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100' 
                      : 'opacity-0 translate-x-20 translate-y-20'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${item.rotation}deg)`,
                    transitionDelay: isVisible ? `${item.delay}ms` : '0ms'
                  }}
                >
                  <div className="bg-white p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                    <div className="relative w-48 h-56 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`Trending item ${item.id}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
