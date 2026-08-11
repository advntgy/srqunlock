import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { SITE_CONFIG, LOCATIONS, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

const LOCATION = LOCATIONS['charlotte-county']

export const metadata: Metadata = {
  title: 'Emergency Locksmith Charlotte County FL | 24/7 Service',
  description: `24/7 emergency locksmith services in Charlotte County, Florida. Car lockouts, home emergencies, commercial break-ins. Fast ${LOCATION.responseTime} response. NASTF Certified. Call (941) 587-5050 now!`,
  keywords: [
    'emergency locksmith charlotte county',
    '24 hour locksmith charlotte county',
    'locksmith charlotte county fl',
    'car lockout charlotte county',
    'emergency lockout service',
    'locksmith port charlotte',
    'locksmith punta gorda',
    '24/7 locksmith florida',
    'after hours locksmith',
    'emergency car key replacement',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
  },
  openGraph: {
    title: 'Emergency Locksmith Charlotte County FL | Unlock SRQ LLC',
    description: `24/7 Emergency locksmith services throughout Charlotte County. Fast ${LOCATION.responseTime} response. Call now!`,
    url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: 'Emergency Locksmith Services in Charlotte County, Florida',
      },
    ],
  },
}

// Generate schemas
const localBusinessSchema = generateLocalBusinessSchema('charlotte-county')
const faqSchema = generateFAQSchema('Charlotte County', LOCATION.nearbyAreas)
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Emergency Locksmith Charlotte County', url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/` },
])

export default function EmergencyLocksmithCharlotteCountyPage() {
  const emergencyServices = [
    {
      title: 'Car Lockout Emergency',
      description: 'Locked out of your car? We arrive fast to get you back on the road.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Home Lockout Emergency',
      description: 'Locked out of your house at night or on a weekend? We&apos;re available 24/7.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Business Lockout',
      description: 'Can&apos;t get into your office or store? We provide fast commercial lockout service.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Broken Key Emergency',
      description: 'Key snapped in the lock? We extract broken keys and make replacements on the spot.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Break-In Repair',
      description: 'Home or business broken into? We repair and replace damaged locks immediately.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Lost Keys Emergency',
      description: 'Lost all your keys? We rekey or replace locks to secure your property fast.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const areas = [
    'Port Charlotte',
    'Punta Gorda',
    'Englewood',
    'Rotonda West',
    'Charlotte Harbor',
    'Deep Creek',
    'Murdock',
    'Grove City',
    'Placida',
    'Cape Haze',
  ]

  return (
    <main>
      {/* Schema.org Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-red-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-red-400 font-medium animate-pulse">24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Emergency Locksmith <span className="text-[#7dd3e8]">Charlotte County</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Locked out? Lost your keys? Need immediate help? 
              We provide 24/7 emergency locksmith services throughout Charlotte County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+19415875050" 
                className="inline-flex items-center justify-center space-x-2 bg-red-500 text-white px-8 py-5 rounded-lg font-bold text-xl hover:bg-red-600 transition-colors animate-pulse"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>CALL NOW: (941) 587-5050</span>
              </a>
            </div>
            <p className="text-[#7dd3e8] mt-4 font-semibold">Fast Average Response Time</p>
          </div>
        </div>
      </section>

      {/* Emergency Stats */}
      <section className="bg-[#1a3a52] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#2c4a5f] rounded-xl p-4 border border-[#7dd3e8]/20">
              <div className="text-3xl font-bold text-[#7dd3e8]">Fast</div>
              <div className="text-gray-300 text-sm">Response</div>
            </div>
            <div className="bg-[#2c4a5f] rounded-xl p-4 border border-[#7dd3e8]/20">
              <div className="text-3xl font-bold text-[#7dd3e8]">24/7</div>
              <div className="text-gray-300 text-sm">Always Available</div>
            </div>
            <div className="bg-[#2c4a5f] rounded-xl p-4 border border-[#7dd3e8]/20">
              <div className="text-3xl font-bold text-[#7dd3e8]">365</div>
              <div className="text-gray-300 text-sm">Days a Year</div>
            </div>
            <div className="bg-[#2c4a5f] rounded-xl p-4 border border-[#7dd3e8]/20">
              <div className="text-3xl font-bold text-[#7dd3e8]">100%</div>
              <div className="text-gray-300 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Emergency <span className="text-[#7dd3e8]">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              No matter the time or situation, we&apos;re here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-red-500 transition-colors">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-4 text-[#1a3a52]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Charlotte County <span className="text-[#7dd3e8]">Coverage</span>
            </h2>
            <p className="text-gray-300">We respond to emergencies throughout Charlotte County</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <span key={index} className="bg-[#2c4a5f] text-gray-200 px-5 py-3 rounded-full border border-[#7dd3e8]/20 text-sm font-medium">
                {area}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locksmith-port-charlotte" className="text-[#7dd3e8] hover:text-[#6bc3d8] underline mr-4">
              Port Charlotte Services →
            </Link>
            <Link href="/locksmith-punta-gorda" className="text-[#7dd3e8] hover:text-[#6bc3d8] underline">
              Punta Gorda Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don&apos;t Wait — Call Now!
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            We&apos;re ready to help with any locksmith emergency in Charlotte County.
          </p>
          <a 
            href="tel:+19415875050" 
            className="inline-flex items-center space-x-3 bg-[#7dd3e8] text-[#1a3a52] px-8 py-5 rounded-xl font-bold text-2xl hover:bg-[#6bc3d8] transition-colors shadow-lg"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(941) 587-5050</span>
          </a>
        </div>
      </section>
    </main>
  )
}
