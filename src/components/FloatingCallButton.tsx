'use client'

import { useState, useEffect } from 'react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [isPulsing, setIsPulsing] = useState(true)

  // Add pulse animation every few seconds to grab attention
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000)
    }, 5000)

    return () => clearInterval(pulseInterval)
  }, [])

  return (
    <>
      {/* Mobile Floating Call Button - Bottom Center for easy thumb access */}
      <a 
        href="tel:+19415875050" 
        className={`
          lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
          bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] 
          px-6 py-4 rounded-full shadow-2xl 
          flex items-center justify-center gap-3
          transition-all duration-300
          ${isPulsing ? 'animate-pulse scale-105' : ''}
        `}
        style={{
          boxShadow: '0 4px 20px rgba(125, 211, 232, 0.5), 0 0 40px rgba(125, 211, 232, 0.3)'
        }}
      >
        {/* Phone Icon with ring animation */}
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {/* Animated ring indicator */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        <span className="font-bold text-base whitespace-nowrap">Call Now</span>
      </a>

      {/* Desktop Floating Call Button - Right side, more prominent */}
      <a 
        href="tel:+19415875050" 
        className={`
          hidden lg:flex fixed bottom-8 right-8 z-50 
          bg-gradient-to-r from-[#7dd3e8] to-[#6bc3d8] hover:from-[#6bc3d8] hover:to-[#5ab3c8]
          text-[#1a3a52] 
          px-6 py-4 rounded-2xl shadow-2xl 
          items-center gap-4
          transition-all duration-300 hover:scale-105
          group
          ${isPulsing ? 'animate-pulse' : ''}
        `}
        style={{
          boxShadow: '0 4px 25px rgba(125, 211, 232, 0.5), 0 0 50px rgba(125, 211, 232, 0.25)'
        }}
      >
        {/* Phone Icon Container */}
        <div className="relative bg-[#1a3a52] p-3 rounded-xl group-hover:bg-[#2c4a5f] transition-colors">
          <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {/* Animated indicator */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-xs font-medium opacity-80">24/7 Emergency</span>
          <span className="font-bold text-lg">(941) 587-5050</span>
        </div>

        {/* Arrow indicator */}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Subtle backdrop glow effect */}
      <div className="hidden lg:block fixed bottom-6 right-6 w-32 h-32 bg-[#7dd3e8]/20 rounded-full blur-3xl pointer-events-none z-40"></div>
    </>
  )
}
