'use client'

import Image from 'next/image'

export default function DiscoverSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop"
          alt="Discover Your Perfect Chain"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-5xl md:text-7xl font-light mb-8 animate-fade-in-up">
          Discover Your Perfect Chain
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          Explore our curated collection of luxury chains crafted for the modern connoisseur
        </p>
        <button className="bg-white text-stone-800 px-12 py-4 text-lg font-medium hover:bg-stone-100 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          Explore Collection
        </button>
      </div>
    </section>
  )
}
