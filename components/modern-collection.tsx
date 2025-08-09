'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Crown Pearl Earrings',
    price: '$4,210.00',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Glow Diamond Earrings',
    price: '$4,609.00',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Plain Band Ring',
    price: '$18,108.20',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Layered Chain Set',
    price: '$13,992.70',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
  }
]

const categories = ['Earrings', 'Bracelets', 'Gemstone']

export default function ModernCollection() {
  const [activeCategory, setActiveCategory] = useState('Earrings')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('modern-collection')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="modern-collection" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className={`font-serif text-4xl md:text-5xl text-stone-800 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Modern Jewelry <span className="text-orange-500 border-b-2 border-orange-500 animate-underline-expand">Collection</span>
        </h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative text-lg font-medium transition-all duration-500 transform hover:scale-110 ${
                activeCategory === category
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-stone-600 hover:text-orange-500'
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {category}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group cursor-pointer transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{
              animationDelay: `${index * 200 + 500}ms`
            }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-square shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white text-stone-800 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Details
                </button>
              </div>
            </div>
            <h3 className="font-medium text-stone-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">{product.name}</h3>
            <p className="text-stone-600 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
