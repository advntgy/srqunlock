import { Metadata } from 'next'
import { SITE_CONFIG, LOCATIONS, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import LocationPageContent from '@/components/LocationPageContent'

const LOCATION = LOCATIONS['bradenton']

export const metadata: Metadata = {
  title: `Locksmith ${LOCATION.name} FL | 24/7 Emergency`,
  description: `24/7 locksmith in ${LOCATION.name}, FL. Car lockouts, key programming, home & business. NASTF Certified. ${LOCATION.responseTime} response. Call (941) 587-5050!`,
  keywords: [
    `locksmith ${LOCATION.name}`,
    `locksmith ${LOCATION.name} FL`,
    `${LOCATION.name} locksmith`,
    `car locksmith ${LOCATION.name}`,
    `24 hour locksmith ${LOCATION.name}`,
    `emergency locksmith ${LOCATION.name}`,
    `locksmith near me ${LOCATION.name}`,
    `automotive locksmith ${LOCATION.name}`,
    `key programming ${LOCATION.name}`,
    `house lockout ${LOCATION.name}`,
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
  },
  openGraph: {
    title: `Locksmith ${LOCATION.name} FL | Unlock SRQ LLC`,
    description: `Professional locksmith services in ${LOCATION.name}, FL. ${LOCATION.responseTime} response, fair prices. NASTF Certified. Call now!`,
    url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/`,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: `Locksmith Services in ${LOCATION.name}, Florida`,
      },
    ],
  },
}

// Generate schemas
const localBusinessSchema = generateLocalBusinessSchema('bradenton')
const faqSchema = generateFAQSchema(LOCATION.name, LOCATION.nearbyAreas)
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: SITE_CONFIG.siteUrl },
  { name: `Locksmith ${LOCATION.name}`, url: `${SITE_CONFIG.siteUrl}/${LOCATION.slug}/` },
])

export default function LocksmithBradentonPage() {
  return (
    <LocationPageContent
      location={LOCATION}
      localBusinessSchema={localBusinessSchema}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}
