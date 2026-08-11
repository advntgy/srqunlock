import { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import { SITE_CONFIG, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Automotive Locksmith Services | Car Key Programming | Unlock SRQ',
  description: '24/7 automotive locksmith services in North Port & Sarasota FL. Car lockouts, transponder key programming, smart keys, ignition repair. NASTF Certified. Call (941) 587-5050.',
  keywords: [
    'automotive locksmith',
    'car lockout',
    'transponder key programming',
    'smart key programming',
    'ignition repair',
    'car key replacement',
    'car locksmith north port fl',
    'auto locksmith sarasota',
    'emergency car lockout',
    'key fob programming',
    'push to start key replacement',
    'NASTF certified locksmith',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/automotive-services/`,
  },
  openGraph: {
    title: 'Automotive Locksmith Services | Unlock SRQ LLC',
    description: '24/7 automotive locksmith services. Car lockouts, transponder key programming, smart keys, ignition repair. NASTF Certified. Fast response!',
    url: `${SITE_CONFIG.siteUrl}/automotive-services/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}/images/emergency-lockout-service-action-sarasota-florida.webp`,
        width: 1200,
        height: 630,
        alt: 'Professional automotive locksmith service in Sarasota Florida',
      },
    ],
  },
}

// Generate schemas
const localBusinessSchema = generateLocalBusinessSchema('north-port')
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Automotive Locksmith Services', url: `${SITE_CONFIG.siteUrl}/automotive-services/` },
])
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automotive Locksmith Services',
  provider: {
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.business.name,
  },
  serviceType: 'Automotive Locksmith',
  areaServed: {
    '@type': 'State',
    name: 'Florida',
  },
  description: '24/7 automotive locksmith services including car lockouts, transponder key programming, smart keys, and ignition repair.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
    },
  },
}

export default function AutomotiveServicesPage() {
  const services = [
    {
      title: 'Emergency Car Lockout',
      description: 'Locked out of your vehicle? We provide fast, damage-free entry to get you back on the road.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Transponder Key Programming',
      description: 'Lost or need a spare transponder key? We program keys for all makes and models on-site.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Smart Key / Push-to-Start',
      description: 'Modern vehicles with push-button start and proximity keys — we handle them all.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
    {
      title: 'Ignition Repair & Replacement',
      description: 'Key stuck or ignition not turning? We repair and replace ignition cylinders.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Key Fob Programming',
      description: 'Remote key fob not working? We program and replace key fobs for most vehicles.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Broken Key Extraction',
      description: 'Key broken off in the lock or ignition? We safely extract it without damage.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const brands = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'BMW',
    'Mercedes-Benz', 'Audi', 'Volkswagen', 'Jeep', 'Dodge', 'Ram', 'GMC', 'Buick',
    'Cadillac', 'Lexus', 'Acura', 'Infiniti', 'Mazda', 'Subaru', 'Mitsubishi', 'Volvo'
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
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#7dd3e8]/20 border border-[#7dd3e8]/30 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[#7dd3e8] font-medium">NASTF Certified</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Automotive <span className="text-[#7dd3e8]">Locksmith Services</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Professional car locksmith services for all makes and models. 
                From emergency lockouts to key programming, we&apos;ve got you covered 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+19415875050" 
                  className="inline-flex items-center justify-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6bc3d8] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call (941) 587-5050</span>
                </a>
                <a 
                  href="/booking" 
                  className="inline-flex items-center justify-center space-x-2 bg-[#2c4a5f] border-2 border-[#7dd3e8]/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#344c5a] transition-colors"
                >
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/emergency-lockout-service-action-sarasota-florida.webp"
                  alt="Professional automotive locksmith service in Sarasota Florida"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Automotive <span className="text-[#7dd3e8]">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive car locksmith solutions for any situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-4 text-[#1a3a52]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Makes & <span className="text-[#7dd3e8]">Models</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We service vehicles from all major manufacturers
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, index) => (
              <span key={index} className="bg-[#2c4a5f] text-gray-200 px-4 py-2 rounded-full border border-[#7dd3e8]/20 text-sm hover:border-[#7dd3e8] transition-colors">
                {brand}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              Don&apos;t see your vehicle? Call us — we likely service it!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a52] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Our <span className="text-[#7dd3e8]">Automotive Services</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-400 text-sm">Fast arrival to your location</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">NASTF Certified</h3>
                <p className="text-gray-400 text-sm">Industry-recognized certification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Mobile Service</h3>
                <p className="text-gray-400 text-sm">We come to you anywhere</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">90-Day Warranty</h3>
                <p className="text-gray-400 text-sm">Guaranteed workmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Locked Out? Need a New Key?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Call now for fast, professional automotive locksmith service.
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
  )
}
