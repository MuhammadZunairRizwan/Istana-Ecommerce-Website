'use client'

import Image from 'next/image'

const collections = [
  {
    id: 1,
    name: 'DIAMOND',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop',
    color: 'border-red-300'
  },
  {
    id: 2,
    name: 'BRACELET',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&h=200&fit=crop',
    color: 'border-green-300'
  },
  {
    id: 3,
    name: 'NECKLACE',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop',
    color: 'border-blue-300'
  },
  {
    id: 4,
    name: 'EARINGS',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop',
    color: 'border-purple-300'
  },
  {
    id: 5,
    name: 'RINGS',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=200&h=200&fit=crop',
    color: 'border-yellow-300'
  },
  {
    id: 6,
    name: 'GOLD',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=200&h=200&fit=crop',
    color: 'border-orange-300'
  }
]

export default function LuxuryCollections() {
  return (
    <section className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">
          <span className="text-orange-500 border-b-2 border-orange-500">Luxury</span> Collections
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`relative w-32 h-32 mx-auto mb-4 rounded-full border-4 ${collection.color} overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-lg text-stone-800 group-hover:text-orange-500 transition-colors duration-300">
                {collection.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
