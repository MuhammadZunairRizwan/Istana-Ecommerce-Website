'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const brands = [
  {
    id: 1,
    name: 'METTIA CIELO',
    logo: 'https://istanauae.com/wp-content/uploads/mattia-cielo.png',
    description: 'The perfect mix of modern industrial design and ergonomically moving masterpieces, the Mattia Cielo collection creates a revolutionary style.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 2,
    name: 'adler',
    logo: 'https://istanauae.com/wp-content/uploads/adler.png',
    description: 'A legacy of Viennese craftsmanship perfected over a period of 130 years',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 3,
    name: 'Chantecler',
    logo: 'https://istanauae.com/wp-content/uploads/chantecler.png',
    description: 'Chantecler jewels are unique pieces made in limited series, and each evokes the memory of ancient goldsmith’s techniques reinvented through contemporary elegance',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 4,
    name: 'FORMS',
    logo: 'https://istanauae.com/wp-content/uploads/forms.png',
    description: 'Offering myriad shades of elegance and unique aesthetics, Forms focuses of the quality and integrity of each piece',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 5,
    name: 'ADOLFO COURRIER',
    logo: 'https://istanauae.com/wp-content/uploads/logo.svg',
    description: 'Adolfo Courrier combines the distinctive elements of its know-how by reinventing a modern and progressive approach to jewelry with style authoritativeness and innovation',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 6,
    name: 'VERDI',
    logo: 'https://istanauae.com/wp-content/uploads/verdi-logo.svg',
    description: 'Verdi Gioielli is an illustrious Italian luxury jewellery brand celebrated for its sophisticated designs, impeccable craftsmanship, and use of the finest gemstones.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  }
]

export default function BrandsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('brands-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
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
    <section id="brands-section" className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} ${
              Math.random() > 0.5 ? 'rounded-full' : 'rotate-45'
            } bg-gradient-to-r ${brands[Math.floor(Math.random() * brands.length)].color}`} />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6">
              Our Luxury
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 animate-shimmer bg-size-200">
                Partners
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full animate-expand" />
          </div>
          <p className={`text-lg text-stone-600 max-w-3xl mx-auto mt-8 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ animationDelay: '500ms' }}>
            We collaborate with the world's most prestigious jewelry brands to bring you exceptional quality and craftsmanship that defines luxury
          </p>
        </div>

        {/* Creative Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`group relative transition-all duration-700 transform hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150 + 800}ms`
              }}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              {/* Main Card */}
              <div className={`relative overflow-hidden rounded-2xl ${brand.bgColor} p-8 h-80 cursor-pointer transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                       style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Logo Section */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                      <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} logo`}
                          width={140}
                          height={70}
                          className={`object-contain filter group-hover:brightness-110 transition-all duration-500 ${
                            hoveredBrand === brand.id ? 'opacity-0 scale-90' : 'opacity-100'
                          }`}
                        />

                      {/* Logo Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Brand Info */}
                  <div className="text-center space-y-3">
                    <h3 className="font-serif text-xl text-stone-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 transition-all duration-500">
                      {brand.name}
                    </h3>
                    
                    {/* Animated Stats */}
                    <div className="flex justify-center space-x-6 text-sm text-stone-600">
                      <div className="text-center">
                        <div className="text-xs opacity-70">Est.</div>
                      </div>
                      <div className="w-px bg-stone-300" />
                      <div className="text-center">
                        <div className="text-xs opacity-70">Specialty</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Description Overlay */}
                <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 transition-all duration-500 ${
                  hoveredBrand === brand.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <div className="text-center">
                    <h4 className="font-serif text-lg text-stone-800 mb-3">{brand.name}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">{brand.description}</p>
                    <button className={`px-6 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${brand.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Explore Collection
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${brand.color} animate-pulse`} />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${brand.color} animate-pulse`} style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Floating Shadow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500 -z-10 transform translate-y-4`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '1500ms' }}>
          <div className="relative inline-block">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white font-medium rounded-full overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <span className="relative z-10">Explore All Partnerships</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </button>
            
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
