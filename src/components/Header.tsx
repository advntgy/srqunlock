'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top bar - VERY thin, navy background */}
      <div className="bg-[#1a3a52] py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left - Social Icons */}
          <div className="flex items-center space-x-2">
            <a href="https://facebook.com/unlocksrq" target="_blank" rel="noopener noreferrer" 
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a href="https://instagram.com/unlocksrq" target="_blank" rel="noopener noreferrer"
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.yellowpages.com/north-port-fl/mip/unlock-srq-llc-569083053" target="_blank" rel="noopener noreferrer"
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors font-bold text-[10px]">
              YP
            </a>
            <a href="https://youtube.com/@unlocksrq" target="_blank" rel="noopener noreferrer"
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@unlocksrq" target="_blank" rel="noopener noreferrer"
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a href="mailto:info@srqunlock.com"
               className="w-7 h-7 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-white text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Phone: (941) 587-5050</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Email: info@srqunlock.com</span>
            </div>
            <div className="flex items-center space-x-2 text-[#7dd3e8] font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>*Emergency: 24/7/365*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White, normal height */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo - Normal size */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Unlock SRQ LLC - Professional Locksmith Services"
              width={250}
              height={85}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold transition-colors text-sm">
              HOME
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center text-[#1a3a52] hover:text-[#7dd3e8] font-semibold transition-colors text-sm">
                SERVICES
                <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link href="/automotive-services" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Automotive Services</Link>
                  <Link href="/residential-services" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Residential Services</Link>
                  <Link href="/commercial-services" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Commercial Services</Link>
                </div>
              )}
            </div>

            <Link href="/automotive-products" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold transition-colors text-sm">
              PRODUCTS
            </Link>

            {/* Locations Dropdown */}
            <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
              <button className="flex items-center text-[#1a3a52] hover:text-[#7dd3e8] font-semibold transition-colors text-sm">
                LOCATIONS
                <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link href="/locksmith-north-port" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith North Port</Link>
                  <Link href="/locksmith-port-charlotte" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Port Charlotte</Link>
                  <Link href="/locksmith-sarasota" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Sarasota</Link>
                  <Link href="/locksmith-punta-gorda" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Punta Gorda</Link>
                  <Link href="/locksmith-venice-fl" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Venice FL</Link>
                  <Link href="/locksmith-englewood" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Englewood</Link>
                  <Link href="/locksmith-bradenton" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Locksmith Bradenton</Link>
                  <Link href="/emergency-locksmith-charlotte-county" className="block px-4 py-2 text-[#1a3a52] text-sm hover:bg-[#7dd3e8]/10 hover:text-[#7dd3e8]">Emergency Charlotte County</Link>
                </div>
              )}
            </div>

            <Link href="/about-us" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold transition-colors text-sm">
              ABOUT US
            </Link>
          </nav>

          {/* Call Button */}
          <a href="tel:+19415875050" className="hidden lg:flex items-center bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold px-5 py-2.5 rounded-lg transition-colors text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            (941) 587-5050
          </a>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#1a3a52]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-sm" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              
              <div className="space-y-2">
                <span className="text-[#1a3a52] font-semibold text-sm">SERVICES</span>
                <div className="pl-4 space-y-2">
                  <Link href="/automotive-services" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Automotive</Link>
                  <Link href="/residential-services" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Residential</Link>
                  <Link href="/commercial-services" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Commercial</Link>
                </div>
              </div>

              <Link href="/automotive-products" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-sm" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
              
              <div className="space-y-2">
                <span className="text-[#1a3a52] font-semibold text-sm">LOCATIONS</span>
                <div className="pl-4 space-y-2">
                  <Link href="/locksmith-north-port" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>North Port</Link>
                  <Link href="/locksmith-port-charlotte" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Port Charlotte</Link>
                  <Link href="/locksmith-sarasota" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Sarasota</Link>
                  <Link href="/locksmith-punta-gorda" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Punta Gorda</Link>
                  <Link href="/locksmith-venice-fl" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Venice</Link>
                  <Link href="/locksmith-englewood" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Englewood</Link>
                  <Link href="/locksmith-bradenton" className="block text-[#1a3a52]/80 text-sm hover:text-[#7dd3e8]" onClick={() => setIsMenuOpen(false)}>Bradenton</Link>
                </div>
              </div>

              <Link href="/about-us" className="text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-sm" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
              
              <div className="pt-3 border-t border-gray-100">
                <a href="tel:+19415875050" className="flex items-center justify-center bg-[#7dd3e8] text-[#1a3a52] font-bold px-6 py-3 rounded-lg text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  (941) 587-5050
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
