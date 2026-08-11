import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | Unlock SRQ',
  description: 'Privacy Policy for Unlock SRQ locksmith services. How we collect, use, and protect your information.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/privacy-policy/`,
  },
  openGraph: {
    title: 'Privacy Policy | Unlock SRQ',
    description: 'How we protect your personal information.',
    url: `${SITE_CONFIG.siteUrl}/privacy-policy/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'Privacy Policy', url: `${SITE_CONFIG.siteUrl}/privacy-policy/` },
])

// WebPage schema
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Privacy Policy for Unlock SRQ locksmith services.',
  url: `${SITE_CONFIG.siteUrl}/privacy-policy/`,
}

export default function PrivacyPolicyPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Privacy <span className="text-[#7dd3e8]">Policy</span>
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
                Introduction
              </h2>
              <p className="text-gray-300 mb-4">
                Unlock SRQ LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website srqunlock.com or use our locksmith services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">2</span>
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Personal Information:</strong> Name, phone number, email address, and physical address when you contact us or request services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Vehicle Information:</strong> Make, model, year, and VIN when providing automotive locksmith services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Payment Information:</strong> Credit card or other payment details when you pay for services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">3</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provide and deliver locksmith services you request</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Process payments and send invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Communicate with you about appointments and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Send promotional materials (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve our website and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">4</span>
                Information Sharing
              </h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information with:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Service Providers:</strong> Third parties who assist in operating our business (payment processors, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">5</span>
                Data Security
              </h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">6</span>
                Your Rights
              </h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-none pl-0 text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Request deletion of your information (subject to legal requirements)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7dd3e8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Opt out of marketing communications</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">7</span>
                Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                You can set your browser to refuse cookies, but some features may not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">8</span>
                Third-Party Links
              </h2>
              <p className="text-gray-300 mb-4">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices of these sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">9</span>
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-300 mb-4">
                Our services are not directed to individuals under 18 years of age. We do not 
                knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">10</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] text-sm font-bold">11</span>
                Contact Us
              </h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy, please contact us:
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

          <div className="mt-8 pt-8 border-t border-[#2c4a5f]">
            <Link 
              href="/"
              className="inline-flex items-center text-[#7dd3e8] hover:text-white transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
