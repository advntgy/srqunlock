import { Metadata } from 'next'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Automotive Products | Keys & Remotes | Unlock SRQ',
  description: 'Quality car keys, transponder keys, smart keys, key fobs for all vehicles. North Port, Sarasota FL. Call (941) 587-5050.',
  keywords: 'car keys, transponder keys, smart keys, key fobs, remote keys, automotive locksmith products, north port fl',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/automotive-products/`,
  },
  openGraph: {
    title: 'Automotive Keys & Products | Unlock SRQ',
    description: 'Car keys, fobs, and remotes for all vehicle makes.',
    url: `${SITE_CONFIG.siteUrl}/automotive-products/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Automotive Products', url: `${SITE_CONFIG.siteUrl}/automotive-products/` },
])

// Product schema
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Automotive Locksmith Products',
  description: 'Car keys, transponder keys, smart keys, and key fobs.',
  url: `${SITE_CONFIG.siteUrl}/automotive-products/`,
  itemListElement: [
    { '@type': 'Product', name: 'Transponder Keys', position: 1 },
    { '@type': 'Product', name: 'Smart Keys / Proximity Keys', position: 2 },
    { '@type': 'Product', name: 'Key Fobs & Remotes', position: 3 },
    { '@type': 'Product', name: 'Flip Keys', position: 4 },
  ],
}

export default function AutomotiveProductsPage() {
  const products = [
    {
      title: 'Transponder Keys',
      description: 'Chip keys that communicate with your vehicle\'s immobilizer system for added security.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      features: ['Cut and programmed on-site', 'All major brands', 'OEM quality chips'],
    },
    {
      title: 'Smart Keys / Proximity Keys',
      description: 'Advanced keyless entry and push-to-start keys for modern vehicles.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      features: ['Push-to-start compatible', 'Proximity sensing', 'Programming included'],
    },
    {
      title: 'Key Fobs & Remotes',
      description: 'Remote key fobs for keyless entry and vehicle security.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['Lock/unlock buttons', 'Panic button', 'Trunk release'],
    },
    {
      title: 'Flip Keys',
      description: 'Compact folding keys that combine key blade and remote in one unit.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      features: ['Space-saving design', 'Built-in remote', 'Durable construction'],
    },
    {
      title: 'Emergency Key Blades',
      description: 'Backup physical keys for smart key systems when battery dies.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      features: ['Door lock access', 'Compact size', 'Hidden in fob'],
    },
    {
      title: 'Key Shells & Cases',
      description: 'Replacement housings for worn or damaged key fobs.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['OEM-style fit', 'Button replacements', 'Battery door included'],
    },
  ]

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Automotive <span className="text-[#7dd3e8]">Products</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Quality keys, fobs, and remotes for all vehicle makes and models. 
                Cut and programmed on-site by our certified technicians.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-[#1a3a52]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-[#7dd3e8]">Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-4 text-[#1a3a52]">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 text-[#7dd3e8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#7dd3e8]/10 rounded-2xl p-8 border border-[#7dd3e8]/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Pricing Varies by Vehicle</h2>
            <p className="text-gray-300 mb-6">
              Key prices depend on your vehicle&apos;s make, model, and year. 
              Call us for a free quote — we&apos;ll give you an accurate price before any work begins.
            </p>
            <a 
              href="tel:+19415875050" 
              className="inline-flex items-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6bc3d8] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Get Free Quote: (941) 587-5050</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Buy From <span className="text-[#7dd3e8]">Unlock SRQ</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a3a52] rounded-2xl p-6 border border-[#7dd3e8]/20 text-center">
              <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Save vs Dealership</h3>
              <p className="text-gray-400 text-sm">Typically 50-70% less than dealer prices</p>
            </div>
            <div className="bg-[#1a3a52] rounded-2xl p-6 border border-[#7dd3e8]/20 text-center">
              <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Same-Day Service</h3>
              <p className="text-gray-400 text-sm">No waiting for parts to arrive</p>
            </div>
            <div className="bg-[#1a3a52] rounded-2xl p-6 border border-[#7dd3e8]/20 text-center">
              <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Mobile Service</h3>
              <p className="text-gray-400 text-sm">We come to your location</p>
            </div>
            <div className="bg-[#1a3a52] rounded-2xl p-6 border border-[#7dd3e8]/20 text-center">
              <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-gray-400 text-sm">All products guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a New Key or Remote?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Call now for a free quote and same-day service.
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
