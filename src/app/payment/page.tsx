import { Metadata } from 'next'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Pay Online | Unlock SRQ - Secure Payment',
  description: 'Secure online payment for locksmith services. All major credit cards accepted. North Port, Sarasota FL.',
  keywords: 'locksmith payment, pay locksmith online, unlock srq payment, locksmith north port payment',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/payment/`,
  },
  openGraph: {
    title: 'Secure Payment | Unlock SRQ',
    description: 'Pay for your locksmith services online securely.',
    url: `${SITE_CONFIG.siteUrl}/payment/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Pay Online', url: `${SITE_CONFIG.siteUrl}/payment/` },
])

// WebPage schema
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Secure Online Payment',
  description: 'Secure online payment for locksmith services.',
  url: `${SITE_CONFIG.siteUrl}/payment/`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.siteUrl}/#business`,
  },
}

export default function PaymentPage() {
  const paymentMethods = [
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ), 
      name: 'Credit Cards', 
      description: 'Visa, Mastercard, American Express, Discover' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      name: 'Debit Cards', 
      description: 'All major bank debit cards accepted' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      name: 'Cash', 
      description: 'Cash payments accepted on-site' 
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
              Pay <span className="text-[#7dd3e8]">Online</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Secure and convenient online payment for your locksmith services.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Content */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Form Placeholder */}
            <div className="bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
              <h2 className="text-2xl font-bold text-white mb-6">Make a Payment</h2>
              
              <div className="bg-[#1a3a52] rounded-xl p-6 border border-[#7dd3e8]/20 text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#7dd3e8] mb-2">Secure Payment Portal</h3>
                <p className="text-gray-300 mb-4">
                  Our online payment system is coming soon. For now, please contact us to arrange payment.
                </p>
                <a 
                  href="tel:+19415875050" 
                  className="inline-flex items-center space-x-2 bg-[#7dd3e8] text-[#1a3a52] px-6 py-3 rounded-lg font-bold hover:bg-[#6bc3d8] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call (941) 587-5050</span>
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
              <h2 className="text-2xl font-bold text-white mb-6">We Accept</h2>
              
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-[#1a3a52] rounded-xl p-4 border border-[#7dd3e8]/20">
                    <div className="w-12 h-12 bg-[#7dd3e8] rounded-xl flex items-center justify-center flex-shrink-0 text-[#1a3a52]">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{method.name}</h3>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#7dd3e8]/10 rounded-xl border border-[#7dd3e8]/30">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-[#7dd3e8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="text-[#7dd3e8] font-semibold">Secure Transactions</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  All payments are processed securely. Your financial information is never stored on our servers.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="mt-12 bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Transparent Pricing</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#7dd3e8] text-3xl font-bold mb-2">No Hidden Fees</div>
                <p className="text-gray-300 text-sm">The price we quote is the price you pay</p>
              </div>
              <div className="text-center">
                <div className="text-[#7dd3e8] text-3xl font-bold mb-2">Free Estimates</div>
                <p className="text-gray-300 text-sm">Get a quote before we start any work</p>
              </div>
              <div className="text-center">
                <div className="text-[#7dd3e8] text-3xl font-bold mb-2">Fair Rates</div>
                <p className="text-gray-300 text-sm">Competitive pricing for quality service</p>
              </div>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Have questions about payment or pricing?
            </p>
            <a 
              href="mailto:info@srqunlock.com" 
              className="text-[#7dd3e8] hover:text-[#6bc3d8] font-semibold"
            >
              info@srqunlock.com
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
