import { Metadata } from 'next'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Book Appointment | Unlock SRQ Locksmith',
  description: 'Schedule locksmith service online with Unlock SRQ. North Port, Sarasota FL. 24/7 emergency available. Call (941) 587-5050.',
  keywords: 'book locksmith appointment, schedule locksmith, locksmith north port booking, locksmith appointment florida',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/booking/`,
  },
  openGraph: {
    title: 'Book Locksmith Appointment | Unlock SRQ',
    description: 'Schedule your locksmith service online. 24/7 available.',
    url: `${SITE_CONFIG.siteUrl}/booking/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Book Appointment', url: `${SITE_CONFIG.siteUrl}/booking/` },
])

// WebPage schema
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Book Locksmith Appointment',
  description: 'Schedule locksmith service online with Unlock SRQ.',
  url: `${SITE_CONFIG.siteUrl}/booking/`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.siteUrl}/#business`,
  },
}

export default function BookingPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Book Your <span className="text-[#7dd3e8]">Appointment</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Schedule your locksmith service at a time that works for you. 
              For emergencies, call us directly for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Booking Options */}
            <div className="bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Service</h2>
              
              <div className="space-y-6">
                <div className="bg-[#1a3a52] rounded-xl p-6 border border-[#7dd3e8]/20">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#7dd3e8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-[#7dd3e8]">Online Booking</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Coming soon! Our online booking calendar will be available shortly.
                  </p>
                  <p className="text-gray-400 text-sm">
                    In the meantime, please call us to schedule your appointment.
                  </p>
                </div>

                <div className="bg-[#7dd3e8]/10 rounded-xl p-6 border border-[#7dd3e8]/30">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#7dd3e8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-[#7dd3e8]">Call to Book</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    The fastest way to schedule your service is to call us directly.
                  </p>
                  <a 
                    href="tel:+19415875050" 
                    className="inline-flex items-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-6 py-3 rounded-lg font-bold hover:bg-[#6bc3d8] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(941) 587-5050</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Service Types */}
            <div className="bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
              <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Automotive</h3>
                    <p className="text-gray-400 text-sm">Car lockouts, key programming, ignition repair</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Residential</h3>
                    <p className="text-gray-400 text-sm">Home lockouts, rekeying, lock installation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Commercial</h3>
                    <p className="text-gray-400 text-sm">Business security, access control, master keys</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Emergency 24/7</h3>
                    <p className="text-gray-400 text-sm">Immediate response, any time of day or night</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#1a3a52] rounded-xl border border-[#7dd3e8]/20">
                <p className="text-gray-300 text-sm">
                  <strong className="text-[#7dd3e8]">⏱️ Average Response Time:</strong> 15 minutes
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  <strong className="text-[#7dd3e8]">📍 Service Area:</strong> North Port, Port Charlotte, Venice, Sarasota, Punta Gorda & more
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              <svg className="w-8 h-8 inline-block mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Emergency Lockout?
            </h2>
            <p className="text-gray-200 mb-6">
              Don&apos;t wait — call us now for immediate assistance. We&apos;re available 24/7, 365 days a year.
            </p>
            <a 
              href="tel:+19415875050" 
              className="inline-flex items-center space-x-3 bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-600 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: (941) 587-5050</span>
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
