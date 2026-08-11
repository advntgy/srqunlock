import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { SITE_CONFIG, LOCATIONS, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

const LOCATION = LOCATIONS['punta-gorda']

export const metadata: Metadata = {
  title: `Locksmith Punta Gorda FL | 24/7 Emergency | Fishermen's Village & Historic Downtown`,
  description: `Punta Gorda's trusted 24/7 locksmith. Car lockouts at Fishermen's Village, Historic Downtown, Punta Gorda Isles. Charlotte County experts. Fast response. Call (941) 587-5050!`,
  keywords: [
    'locksmith Punta Gorda',
    'locksmith Punta Gorda FL',
    'Punta Gorda locksmith',
    'car locksmith Punta Gorda',
    '24 hour locksmith Punta Gorda',
    'emergency locksmith Punta Gorda',
    'locksmith near me Punta Gorda',
    'automotive locksmith Punta Gorda',
    'key programming Punta Gorda',
    'house lockout Punta Gorda',
    'locksmith Charlotte Harbor',
    'locksmith Fishermens Village',
    'car key replacement Punta Gorda',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
  },
  openGraph: {
    title: `Locksmith Punta Gorda FL | 24/7 Emergency | Unlock SRQ LLC`,
    description: `Professional locksmith in Punta Gorda serving Historic Downtown, Fishermen's Village, Punta Gorda Isles & Burnt Store. Fast response. NASTF Certified. Call now!`,
    url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: `Locksmith Services in Punta Gorda, Florida`,
      },
    ],
  },
}

// Generate schemas
const localBusinessSchema = generateLocalBusinessSchema('punta-gorda')
const faqSchema = generateFAQSchema(LOCATION.name, LOCATION.nearbyAreas)
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: `Locksmith ${LOCATION.name}`, url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/` },
])

export default function LocksmithPuntaGordaPage() {
  const services = [
    { 
      name: 'Car Lockout', 
      link: '/automotive-services',
      description: 'Locked out at Fishermen\'s Village or Downtown? We arrive fast.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      name: 'Key Programming', 
      link: '/automotive-services',
      description: 'On-site transponder and smart key programming for all makes and models.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    { 
      name: 'Home Lockout', 
      link: '/residential-services',
      description: 'Fast, damage-free entry for Punta Gorda Isles, Burnt Store & Seminole Lakes.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Lock Rekeying', 
      link: '/residential-services',
      description: 'New to Punta Gorda? We rekey all locks so only your keys work.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      name: 'Commercial Locks', 
      link: '/commercial-services',
      description: 'Serving Punta Gorda businesses from Downtown to US-41 corridor.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      name: 'Smart Locks', 
      link: '/residential-services',
      description: 'Modern keyless entry systems for your Punta Gorda home or business.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const nearbyLocations = [
    { name: 'Port Charlotte', slug: '/locksmith-port-charlotte' },
    { name: 'North Port', slug: '/locksmith-north-port' },
    { name: 'Englewood', slug: '/locksmith-englewood' },
    { name: 'Venice', slug: '/locksmith-venice-fl' },
  ]

  return (
    <>
      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-[#7dd3e8]/20 border border-[#7dd3e8]/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#7dd3e8] font-medium">Serving Punta Gorda & Charlotte County</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Locksmith <span className="text-[#7dd3e8]">Punta Gorda</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Charlotte County&apos;s historic waterfront city deserves trusted locksmith service. 
              From Fishermen&apos;s Village to Punta Gorda Isles, we provide fast response 
              for car lockouts, key programming, and home security. Available 24/7/365.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+19415875050" 
                className="inline-flex items-center justify-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6bc3d8] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call (941) 587-5050</span>
              </a>
              <Link 
                href="/booking" 
                className="inline-flex items-center justify-center space-x-2 bg-[#2c4a5f] border-2 border-[#7dd3e8]/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#344c5a] transition-colors"
              >
                <span>Book Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="bg-[#7dd3e8] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-[#1a3a52]">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold">Fast Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-semibold">NASTF Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="font-semibold">All Cards Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Punta Gorda Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-6 text-center">
              Your Trusted <span className="text-[#7dd3e8]">Punta Gorda</span> Locksmith
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Punta Gorda, Charlotte County&apos;s charming waterfront city, is known for its historic downtown, 
                beautiful Charlotte Harbor views, and the iconic Fishermen&apos;s Village. Unlock SRQ is proud to 
                serve this unique community with professional locksmith services. Whether you&apos;re locked out 
                after a day of shopping at Fishermen&apos;s Village or need emergency service in Punta Gorda Isles, 
                we&apos;re here to help.
              </p>
              <p className="mb-4">
                Our mobile locksmith travels from our North Port headquarters to reach anywhere in Punta Gorda 
                quickly. We serve the Historic District, Burnt Store Road corridor, Seminole Lakes, 
                and the waterfront communities along Charlotte Harbor. After Hurricane Ian, we&apos;ve helped many 
                Punta Gorda residents with lock replacements and security upgrades.
              </p>
              <p>
                As a NASTF Certified automotive locksmith, we handle all modern vehicle keys including transponder 
                keys, proximity fobs, and push-to-start systems. From vintage cars at the antique shops downtown 
                to new luxury vehicles at Fishermen&apos;s Village, we program keys on-site with our mobile workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Locksmith Services in <span className="text-[#7dd3e8]">Punta Gorda</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Complete locksmith solutions for Punta Gorda residents and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.link}
                className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors group"
              >
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-4 text-[#1a3a52]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7dd3e8] transition-colors">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              We Cover All <span className="text-[#7dd3e8]">Punta Gorda</span> Neighborhoods
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From Historic Downtown to the waterfront communities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {LOCATION.neighborhoods.map((area, index) => (
              <span key={index} className="bg-[#2c4a5f] text-gray-200 px-5 py-3 rounded-full border border-[#7dd3e8]/20 text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ZIP Codes Served */}
      <section className="py-12 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Punta Gorda ZIP Codes We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['33950', '33951', '33955', '33982'].map((zip, index) => (
                <span key={index} className="bg-[#1a3a52] text-[#7dd3e8] px-4 py-2 rounded-lg font-mono font-semibold">
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="py-12 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Also Serving Nearby Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {nearbyLocations.map((location, index) => (
                <Link 
                  key={index} 
                  href={location.slug}
                  className="text-[#7dd3e8] hover:text-white font-medium transition-colors"
                >
                  {location.name}{index < nearbyLocations.length - 1 ? ' •' : ''}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a52] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Punta Gorda Chooses <span className="text-[#7dd3e8]">Unlock SRQ</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Charlotte County Experts</h3>
                <p className="text-gray-400 text-sm">We know Punta Gorda&apos;s unique neighborhoods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-400 text-sm">Fast average arrival time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Fair Pricing</h3>
                <p className="text-gray-400 text-sm">Upfront quotes, no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">90-Day Warranty</h3>
                <p className="text-gray-400 text-sm">All work guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">
            Punta Gorda Locksmith FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2">How fast can you get to Punta Gorda?</h3>
              <p className="text-gray-600">Our mobile locksmith can reach anywhere in Punta Gorda quickly. We travel from North Port via US-41 and can quickly access Historic Downtown, Fishermen&apos;s Village, Punta Gorda Isles, and Burnt Store areas.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Do you service the Burnt Store corridor?</h3>
              <p className="text-gray-600">Yes! We cover all of Punta Gorda including Burnt Store Road, Burnt Store Marina, and the growing communities along the corridor. Our mobile workshop comes fully equipped to handle any locksmith need on-site.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Can you help at Fishermen&apos;s Village?</h3>
              <p className="text-gray-600">Absolutely! We frequently assist customers at Fishermen&apos;s Village with car lockouts and key programming. The parking areas can be tricky if you&apos;re locked out, but we know the area well and can reach you quickly.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2">What zip codes do you serve in Punta Gorda?</h3>
              <p className="text-gray-600">We serve all Punta Gorda zip codes: 33950, 33951, 33955, and 33982. Whether you&apos;re in the Historic District or out near I-75, we can help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Locksmith in Punta Gorda?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            We&apos;re always close by. Call now for immediate service in Charlotte County.
          </p>
          <a 
            href="tel:+19415875050" 
            className="inline-flex items-center space-x-3 bg-[#7dd3e8] text-[#1a3a52] px-8 py-4 rounded-xl font-bold text-xl hover:bg-[#6bc3d8] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(941) 587-5050</span>
          </a>
        </div>
      </section>
    </main>
    </>
  )
}
