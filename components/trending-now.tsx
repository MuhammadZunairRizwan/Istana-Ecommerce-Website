"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const trendingItems = [
  {
    id: 1,
    image: "https://istanauae.com/wp-content/uploads/LJWR084D_P.jpg",
    title: "Rugiada Earrings",
  },
  {
    id: 2,
    image: "https://istanauae.com/wp-content/uploads/LJWR381_P.jpg",
    title: "Rugiada Earrings",
  },
  {
    id: 3,
    image: "https://istanauae.com/wp-content/uploads/LJWR461D_P.jpg",
    title: "Rugiada Earrings",
  },
  {
    id: 4,
    image: "https://istanauae.com/wp-content/uploads/LJWR461D_P.jpg",
    title: "Rugiada Earrings",
  },
  {
    id: 5,
    image: "https://istanauae.com/wp-content/uploads/LJWR494D_W.jpg",
    title: "Rugiada Bracelet",
  },
  {
    id: 6,
    image: "https://istanauae.com/wp-content/uploads/LJWR076D_PM.jpg",
    title: "Mattia Cielo Bracelet",
  },
  {
    id: 7,
    image: "https://istanauae.com/wp-content/uploads/LJWR480E_PM-400x400.jpg",
    title: "Mattia Cielo Bracelet",
  },
]

// U-shape positions
const positions = [
  { x: -280, y: 80, rotation: -15, scale: 0.9, zIndex: 1 }, // Far left
  { x: -180, y: -60, rotation: -8, scale: 0.95, zIndex: 2 }, // Left
  { x: 0, y: -120, rotation: 2, scale: 1, zIndex: 3 }, // Center top (featured)
  { x: 180, y: -60, rotation: 8, scale: 0.95, zIndex: 2 }, // Right
  { x: 280, y: 80, rotation: 15, scale: 0.9, zIndex: 1 }, // Far right
]

export default function TrendingNow() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("trending-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible])

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = 0; i < 5; i++) {
      const itemIndex = (currentIndex + i) % trendingItems.length
      visibleItems.push({
        ...trendingItems[itemIndex],
        positionIndex: i,
      })
    }
    return visibleItems
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingItems.length) % trendingItems.length)
  }

  return (
    <section
      id="trending-section"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-800 mb-4 font-light">Wedding Ring</h2>
        </div>

        {/* Slider container */}
        <div className="relative min-h-[700px] flex items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-gray-800 group-hover:-translate-x-0.5 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Central "Trending Now" text */}
          {/* <div className="absolute z-10 text-center pointer-events-none">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-700 mb-6 font-light">Trending Now</h3>
            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center gap-2 mx-auto group pointer-events-auto">
              <span className="text-sm tracking-wide">View all</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="24 24 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}

          {/* Sliding cards in U-shape */}
          <div className="relative w-full max-w-6xl">
            {getVisibleItems().map((item, index) => {
              const position = positions[item.positionIndex]

              return (
                <div
                  key={`${item.id}-${currentIndex}`}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${position.rotation}deg) scale(${position.scale})`,
                    zIndex: position.zIndex,
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                    <div className="relative w-48 h-60 overflow-hidden bg-gray-100 mb-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Card title */}
                    <div className="text-center">
                      <h4 className="font-serif text-sm text-gray-800 font-medium tracking-wide">{item.title}</h4>
                    </div>
                    {/* Polaroid bottom space */}
                    <div className="h-2 bg-white"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {trendingItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
