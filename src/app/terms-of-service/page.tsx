import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Terms of Service | Unlock SRQ',
  description: 'Terms of Service for Unlock SRQ locksmith services. Read our terms before using our services.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/terms-of-service/`,
  },
  openGraph: {
    title: 'Terms of Service | Unlock SRQ',
    description: 'Terms and conditions for locksmith services.',
    url: `${SITE_CONFIG.siteUrl}/terms-of-service/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Terms of Service', url: `${SITE_CONFIG.siteUrl}/terms-of-service/` },
])

// WebPage schema
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Terms of Service for Unlock SRQ locksmith services.',
  url: `${SITE_CONFIG.siteUrl}/terms-of-service/`,
}

export default function TermsOfServicePage() {
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
      <main className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a3a52] rounded-2xl p-8 md:p-12 shadow-xl">
          {/* Header with Icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#7dd3e8] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Terms of <span className="text-[#7dd3e8]">Service</span>
            </h1>
          </div>
          
          <p className="text-gray-300 mb-8">
            <strong className="text-white">Effective Date:</strong> November 26, 2025<br />
            <strong className="text-white">Last Updated:</strong> November 26, 2025
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 mb-4">
                By using the services of Unlock SRQ LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">2</span>
                Services
              </h2>
              <p className="text-gray-300 mb-4">
                Unlock SRQ LLC provides professional locksmith services including but not limited to:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automotive locksmith services (car lockouts, key programming, ignition repair)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Residential locksmith services (home lockouts, rekeying, lock installation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commercial locksmith services (access control, master key systems)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Emergency locksmith services (24/7 availability)</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">3</span>
                Proof of Ownership
              </h2>
              <p className="text-gray-300 mb-4">
                For your protection and ours, we require proof of ownership or authorization before 
                providing locksmith services. This may include:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span>Valid government-issued photo ID</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span>Vehicle registration (for automotive services)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span>Proof of residence (for residential services)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span>Business authorization letter (for commercial services)</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                We reserve the right to refuse service if adequate proof cannot be provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">4</span>
                Pricing and Payment
              </h2>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>All prices quoted are estimates and may vary based on actual work required</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Final pricing will be confirmed before work begins</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We accept cash, credit cards, and debit cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Payment is due upon completion of services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Emergency and after-hours services may incur additional fees</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">5</span>
                Warranty
              </h2>
              <p className="text-gray-300 mb-4">
                We stand behind our work with the following warranty:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span><strong className="text-white">90-day warranty</strong> on labor and workmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span><strong className="text-white">Manufacturer warranty</strong> on parts and products (varies by product)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Warranty does not cover damage caused by misuse, accidents, or third-party modifications</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">6</span>
                Liability Limitations
              </h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Our liability is limited to the cost of services provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We are not liable for pre-existing damage to locks, doors, or vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We are not responsible for consequential or indirect damages</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We maintain appropriate insurance coverage for our services</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">7</span>
                Cancellation Policy
              </h2>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>You may cancel a scheduled appointment at any time before our technician arrives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Once work has begun, cancellation may result in charges for work completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>A service call fee may apply if our technician arrives and you cancel</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">8</span>
                Service Area
              </h2>
              <p className="text-gray-300 mb-4">
                We provide services throughout Sarasota and Charlotte Counties, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#2c4a5f] p-4 rounded-lg">
                  <h4 className="text-[#7dd3e8] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Sarasota County
                  </h4>
                  <p className="text-gray-300 text-sm">North Port, Venice, Sarasota, Bradenton</p>
                </div>
                <div className="bg-[#2c4a5f] p-4 rounded-lg">
                  <h4 className="text-[#7dd3e8] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Charlotte County
                  </h4>
                  <p className="text-gray-300 text-sm">Port Charlotte, Punta Gorda, Englewood</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">9</span>
                Intellectual Property
              </h2>
              <p className="text-gray-300 mb-4">
                All content on our website, including text, images, logos, and design, is the 
                property of Unlock SRQ LLC and is protected by copyright laws. You may not 
                reproduce, distribute, or use our content without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">10</span>
                Governing Law
              </h2>
              <p className="text-gray-300 mb-4">
                These Terms of Service are governed by the laws of the State of Florida. 
                Any disputes arising from these terms shall be resolved in the courts of 
                Sarasota County, Florida.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">11</span>
                Changes to Terms
              </h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes 
                will be effective immediately upon posting to our website. Your continued 
                use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">12</span>
                Contact Information
              </h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[#2c4a5f] rounded-xl p-6">
                <p className="text-white font-semibold text-lg">Unlock SRQ LLC</p>
                <p className="text-gray-300">2456 Yancy Street</p>
                <p className="text-gray-300">North Port, FL 34291</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-300 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+19415875050" className="text-[#7dd3e8] hover:underline font-semibold">(941) 587-5050</a>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@srqunlock.com" className="text-[#7dd3e8] hover:underline font-semibold">info@srqunlock.com</a>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-[#2c4a5f] flex flex-wrap gap-4">
            <Link 
              href="/"
              className="inline-flex items-center text-[#7dd3e8] hover:text-white transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <Link 
              href="/privacy-policy"
              className="inline-flex items-center text-[#7dd3e8] hover:text-white transition-colors font-medium"
            >
              Privacy Policy
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
