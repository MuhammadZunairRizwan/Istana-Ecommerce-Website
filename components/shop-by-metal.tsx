'use client'

import Image from 'next/image'

export default function ShopByMetal() {
  return (
    <section className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-stone-800 mb-16">
          Shop by Metal Type
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop"
              alt="Classic Gold Chain"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop"
                alt="Classic Gold Chain Product"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Classic Gold Chain</h3>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="text-2xl font-bold text-stone-800">$14,815.80</span>
                <span className="text-lg text-stone-500 line-through">$16,815.80</span>
                <span className="text-sm text-red-500 font-medium">12% OFF</span>
              </div>
              <button className="bg-black text-white px-8 py-3 rounded-none hover:bg-stone-800 transition-colors duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
