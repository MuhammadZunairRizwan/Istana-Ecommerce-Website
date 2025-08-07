import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import VideoHero from '@/components/video-hero'
import ModernCollection from '@/components/modern-collection'
import ShopByMetal from '@/components/shop-by-metal'
import LimitedEdition from '@/components/limited-edition'
import TrendingNow from '@/components/trending-now'
import LuxuryCollections from '@/components/luxury-collections'
import BrandsSection from '@/components/brands-section'
import DiscoverSection from '@/components/discover-section'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Istana Jewellers - Exclusive and One-of-a-Kind Jewelry Collection',
  description: 'Discover luxury jewelry collections featuring diamonds, gold chains, bracelets, necklaces, earrings and rings. Exclusive and one-of-a-kind pieces.',
   icons: {
    icon: '/favicon.ico', // or your logo URL
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <Hero />
      <ModernCollection />
      <ShopByMetal />
      <LimitedEdition />
      <TrendingNow />
      <LuxuryCollections />
      <BrandsSection />
      <DiscoverSection />
      <Footer />
    </main>
  )
}
