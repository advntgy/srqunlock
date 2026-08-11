import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'About Us | Unlock SRQ - Licensed Locksmith FL',
  description: 'Meet Maksim Yepikhin, owner of Unlock SRQ. NASTF Certified locksmith serving North Port & Sarasota FL 24/7. Call (941) 587-5050.',
  keywords: 'about unlock srq, locksmith north port, maksim yepikhin, nastf certified locksmith, vehicle security professional florida',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/about-us/`,
  },
  openGraph: {
    title: 'About Unlock SRQ - Licensed Locksmith FL',
    description: 'NASTF Certified locksmith serving North Port & Sarasota FL 24/7.',
    url: `${SITE_CONFIG.siteUrl}/about-us/`,
  },
}

// Breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: 'About Us', url: `${SITE_CONFIG.siteUrl}/about-us/` },
])

// AboutPage schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Unlock SRQ LLC',
  description: 'Learn about Unlock SRQ LLC, a professional locksmith company serving North Port and Sarasota County, Florida.',
  url: `${SITE_CONFIG.siteUrl}/about-us/`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.siteUrl}/#business`,
    name: 'Unlock SRQ LLC',
  },
}

export default function AboutUsPage() {
  const certifications = [
    { name: 'NASTF Certified', description: 'National Automotive Service Task Force' },
    { name: 'Vehicle Security Professional', description: 'Licensed VSP in Florida' },
    { name: 'AUTOAUTH Certified', description: 'Automotive Authority Certification' },
  ]

  const values = [
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      title: 'Trust & Integrity', 
      text: 'We treat every customer with honesty and respect' 
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      title: '24/7 Availability', 
      text: 'Emergency service around the clock, 365 days a year' 
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ), 
      title: 'Professionalism', 
      text: 'Licensed, insured, and background-checked technicians' 
    },
    { 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: 'Fair Pricing', 
      text: 'Transparent quotes with no hidden fees' 
    },
  ]

  return (
    <>
      {/* Schema.org structured data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-[#7dd3e8]">Unlock SRQ LLC</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted local locksmith serving Sarasota and Charlotte Counties with 
              professional, reliable, and affordable locksmith services.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/maxim-yepichin-locksmith-with-customer-sarasota-fl.webp"
                  alt="Maksim Yepikhin - Owner and Master Locksmith at Unlock SRQ LLC"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Meet <span className="text-[#7dd3e8]">Maksim Yepikhin</span>
              </h2>
              <p className="text-gray-200 mb-4 text-lg">
                As the owner and master locksmith of Unlock SRQ LLC, I bring years of experience 
                and dedication to every job. Based in North Port, Florida, I founded this company 
                with a simple mission: to provide fast, reliable, and honest locksmith services 
                to our community.
              </p>
              <p className="text-gray-300 mb-6">
                I understand that being locked out of your car, home, or business is stressful. 
                That&apos;s why I&apos;m committed to responding quickly
                and solving your problem with professionalism and care.
              </p>
              
              {/* Certifications */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white mb-4">Certifications & Licenses</h3>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-[#2c4a5f] rounded-lg p-3 border border-[#7dd3e8]/20">
                    <svg className="w-6 h-6 text-[#7dd3e8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-white font-medium">{cert.name}</span>
                      <span className="text-gray-400 text-sm ml-2">— {cert.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-[#7dd3e8]">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1a3a52]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#2c4a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a52] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why Choose <span className="text-[#7dd3e8]">Unlock SRQ</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#7dd3e8] mb-4">Local & Reliable</h3>
                <p className="text-gray-300 mb-4">
                  We&apos;re not a national call center. When you call (941) 587-5050, you&apos;re reaching 
                  a local business owner who cares about your community. We live and work here, 
                  serving our neighbors in North Port, Port Charlotte, Venice, Punta Gorda, and beyond.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#7dd3e8] mb-4">Advanced Technology</h3>
                <p className="text-gray-300 mb-4">
                  We invest in the latest locksmith technology and tools. From transponder key 
                  programming to smart lock installation, we have the equipment and expertise 
                  to handle modern security systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#7dd3e8] mb-4">90-Day Warranty</h3>
                <p className="text-gray-300 mb-4">
                  We stand behind our work. Every service comes with a 90-day warranty, 
                  giving you peace of mind that the job was done right.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#7dd3e8] mb-4">Transparent Pricing</h3>
                <p className="text-gray-300 mb-4">
                  No surprises, no hidden fees. We provide upfront quotes before starting any work, 
                  so you know exactly what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Unlock SRQ Difference?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            Call us now for fast, professional locksmith service.
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
