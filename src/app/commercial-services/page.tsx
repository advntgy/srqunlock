import { Metadata } from 'next'
import Script from 'next/script'
import { SITE_CONFIG, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Commercial Locksmith Services | Business Security | Unlock SRQ',
  description: '24/7 commercial locksmith services in North Port & Sarasota FL. Access control, master key systems, panic bars, office lockouts. Licensed & insured. Call (941) 587-5050.',
  keywords: [
    'commercial locksmith',
    'business locksmith',
    'access control systems',
    'master key system',
    'panic bar installation',
    'office lockout',
    'commercial locksmith north port fl',
    'business security sarasota',
    'storefront locks',
    'high security commercial locks',
    'keypad lock installation',
    'file cabinet locks',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/commercial-services/`,
  },
  openGraph: {
    title: 'Commercial Locksmith Services | Unlock SRQ LLC',
    description: '24/7 commercial locksmith services. Access control, master key systems, panic bars, office lockouts. Licensed & insured.',
    url: `${SITE_CONFIG.siteUrl}/commercial-services/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: 'Professional commercial locksmith service in Florida',
      },
    ],
  },
}

// Generate schemas
const localBusinessSchema = generateLocalBusinessSchema('north-port')
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Commercial Locksmith Services', url: `${SITE_CONFIG.siteUrl}/commercial-services/` },
])
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Locksmith Services',
  provider: {
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.business.name,
  },
  serviceType: 'Commercial Locksmith',
  areaServed: {
    '@type': 'State',
    name: 'Florida',
  },
  description: '24/7 commercial locksmith services including access control systems, master key systems, panic bar installation, and office lockouts.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
    },
  },
}

export default function CommercialServicesPage() {
  const services = [
    {
      title: 'Office Lockout Service',
      description: 'Locked out of your business? We provide fast, discreet entry with minimal disruption.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Access Control Systems',
      description: 'Electronic access control with key cards, fobs, or biometric entry.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Master Key Systems',
      description: 'Hierarchical key systems giving different access levels to employees.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Panic Bar Installation',
      description: 'Emergency exit hardware that meets fire code requirements.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      ),
    },
    {
      title: 'High-Security Locks',
      description: 'Grade 1 commercial locks with patented key control.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Lock Rekeying',
      description: 'Employee turnover? Rekey all locks quickly and affordably.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'File Cabinet & Desk Locks',
      description: 'Secure sensitive documents with quality cabinet locks.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: 'Storefront Door Locks',
      description: 'Commercial-grade locks for retail and storefront entries.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ]

  const industries = [
    'Retail Stores',
    'Restaurants',
    'Medical Offices',
    'Law Firms',
    'Real Estate',
    'Property Management',
    'Schools',
    'Churches',
    'Warehouses',
    'Manufacturing',
    'Hotels',
    'Banks',
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
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-[#7dd3e8]/20 border border-[#7dd3e8]/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-[#7dd3e8] font-medium">Licensed & Insured</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Commercial <span className="text-[#7dd3e8]">Locksmith Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Protect your business with professional commercial locksmith services. 
              From access control to master key systems, we secure businesses of all sizes.
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
              <a 
                href="/booking" 
                className="inline-flex items-center justify-center space-x-2 bg-[#2c4a5f] border-2 border-[#7dd3e8]/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#344c5a] transition-colors"
              >
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Commercial <span className="text-[#7dd3e8]">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive business security solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-4 text-[#1a3a52]">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries <span className="text-[#7dd3e8]">We Serve</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span key={index} className="bg-[#2c4a5f] text-gray-200 px-5 py-3 rounded-full border border-[#7dd3e8]/20 text-sm font-medium hover:border-[#7dd3e8] transition-colors">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Master Key Systems */}
      <section className="py-20 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a52] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Master Key <span className="text-[#7dd3e8]">Systems</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  A master key system allows you to control who has access to which areas of your business. 
                  Perfect for offices, apartment complexes, and multi-tenant buildings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>One master key opens all doors</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sub-masters for department heads</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Individual keys for employees</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Easy to expand as you grow</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#7dd3e8]/20 to-[#2c4a5f]/50 rounded-2xl p-8 border border-[#7dd3e8]/30 text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Free Security Assessment</h3>
                <p className="text-gray-300 mb-6">
                  Not sure what you need? We&apos;ll evaluate your business and recommend the best solution.
                </p>
                <a 
                  href="tel:+19415875050" 
                  className="inline-flex items-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-6 py-3 rounded-lg font-bold hover:bg-[#6bc3d8] transition-colors"
                >
                  <span>Schedule Assessment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Call now for professional commercial locksmith service.
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
