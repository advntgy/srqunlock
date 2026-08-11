import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundImage: 'url(/images/hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52]/95 via-[#1a3a52]/90 to-[#2c4a5f]/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 Emergency Locksmith{' '}
              <span className="text-[#7dd3e8]">North Port & Port Charlotte FL</span>
            </h1>

            {/* Badge */}
            <div className="bg-[#7dd3e8]/20 border-l-4 border-[#7dd3e8] px-4 py-3 mb-6">
              <p className="text-white font-semibold">
                Vehicle Security Professional License • NASTF Certified
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/90 mb-4 font-medium">
              Licensed & Insured • Serving Sarasota & Charlotte Counties • Fast Response
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 mb-8">
              Unlock SRQ - Smart solutions for key problems and emergency automotive services. 
              We use advanced technology and an AI-powered approach for rapid key programming, 
              vehicle diagnostics, and locksmith services. Mobile service - we come to you!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/booking" 
                className="inline-flex items-center justify-center space-x-3 bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Appointment</span>
              </Link>
              <Link 
                href="/payment" 
                className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Pay Online</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Licensed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">24/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Mobile Service</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/professional-locksmith-mobile-workshop-sarasota-fl.webp"
                alt="24/7 mobile locksmith van with advanced key programming equipment serving North Port, Port Charlotte, and Charlotte County Florida"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/95 to-transparent"></div>
              
              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Master Locksmith Maksim</p>
                    <p className="text-[#7dd3e8] text-sm">Professional Mobile Locksmith Service</p>
                  </div>
                </div>
                
                {/* Mini badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#7dd3e8] text-[#1a3a52] px-3 py-1 rounded-full text-xs font-semibold">Licensed</span>
                  <span className="bg-[#7dd3e8] text-[#1a3a52] px-3 py-1 rounded-full text-xs font-semibold">Insured</span>
                  <span className="bg-[#7dd3e8] text-[#1a3a52] px-3 py-1 rounded-full text-xs font-semibold">24/7</span>
                  <span className="bg-[#7dd3e8] text-[#1a3a52] px-3 py-1 rounded-full text-xs font-semibold">Mobile Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
