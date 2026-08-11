import type { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import ServiceAreas from '@/components/ServiceAreas'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import { SITE_CONFIG, generateBreadcrumbSchema, FAQ_DATA } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Locksmith Near Me | 24/7 Emergency North Port FL',
  description: '24/7 emergency locksmith in North Port, Sarasota FL. Car lockouts, key programming, home & business. NASTF Certified. Fast Response. Call (941) 587-5050!',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/`,
  },
  openGraph: {
    title: 'Locksmith Near Me | Unlock SRQ - 24/7 FL',
    description: 'Fast 24/7 locksmith in North Port, Sarasota FL. Car lockouts, keys, home security. NASTF Certified.',
    url: `${SITE_CONFIG.siteUrl}/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: 'Locksmith Near Me - Unlock SRQ Professional Locksmith Services in North Port FL',
      }
    ],
  },
}

// Breadcrumb schema for homepage
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
])

// WebPage schema
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_CONFIG.siteUrl}/#webpage`,
  url: SITE_CONFIG.siteUrl,
  name: 'Locksmith Near Me | Emergency Locksmith North Port FL | Unlock SRQ',
  description: 'Looking for a locksmith near me? 24/7 emergency locksmith services in North Port, Port Charlotte, Venice, Sarasota FL. Car lockouts, key programming, residential & commercial.',
  isPartOf: {
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
  },
  about: {
    '@id': `${SITE_CONFIG.siteUrl}/#business`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-description', '.cta-phone']
  },
}

// FAQ schema for homepage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_CONFIG.siteUrl}/#faq`,
  mainEntity: FAQ_DATA.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Home() {
  return (
    <>
      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <ServiceAreas />
        <FAQ />
        <Testimonials />
        <Contact />
      </div>
    </>
  )
}
