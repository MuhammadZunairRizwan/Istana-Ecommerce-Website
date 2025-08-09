'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Change navbar background when scrolled
      setIsScrolled(currentScrollY > 50)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Hide when scrolling down
      } else {
        setIsVisible(true) // Show when scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'Collections', href: '#collections' },
    { name: 'Brands', href: '#brands' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className={`font-serif text-2xl md:text-3xl font-light transition-all duration-300 ${
              isScrolled ? 'text-stone-800' : 'text-white'
            } group-hover:text-orange-500`}>
              Istana
              <span className="block text-xs tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                JEWELLERS
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-orange-500 ${
                  isScrolled ? 'text-stone-700' : 'text-white/90'
                } animate-fade-in-down`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
            <button className={`px-6 py-2 text-sm font-medium border-2 transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-800'
            }`}>
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? 'text-stone-700' : 'text-white/90'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className={`w-full text-left px-6 py-2 text-sm font-medium border-2 transition-all duration-300 ${
              isScrolled 
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-800'
            }`}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
