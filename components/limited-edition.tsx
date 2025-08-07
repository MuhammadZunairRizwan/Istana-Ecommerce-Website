'use client'

import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Pearl Drop Silver Anklet',
    price: 'From $5,362.00',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Urban Link Finger Chain',
    price: 'From $4,526.00',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Drape Layered Waist Chain',
    price: 'From $5,682.00',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Modern Luxe Bar Choker',
    price: 'From $5,693.00',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop'
  }
]

export default function LimitedEdition() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800">Limited Edition</h2>
        <button className="text-stone-600 hover:text-stone-800 transition-colors duration-300 flex items-center gap-2">
          View all
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group cursor-pointer animate-fade-in-up"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-medium text-stone-800 mb-2">{product.name}</h3>
            <p className="text-stone-600 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
