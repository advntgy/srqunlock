import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://srqunlock.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about-us',
    '/booking',
    '/payment',
  ]

  // Service pages
  const servicePages = [
    '/automotive-services',
    '/automotive-products',
    '/residential-services',
    '/commercial-services',
  ]

  // Location pages
  const locationPages = [
    '/locksmith-north-port',
    '/locksmith-port-charlotte',
    '/locksmith-sarasota',
    '/locksmith-punta-gorda',
    '/locksmith-venice-fl',
    '/locksmith-englewood',
    '/locksmith-bradenton',
    '/emergency-locksmith-charlotte-county',
  ]

  // Legal pages
  const legalPages = [
    '/privacy-policy',
    '/terms-of-service',
  ]

  const allPages = [...mainPages, ...servicePages, ...locationPages, ...legalPages]

  return allPages.map((path) => ({
    // Add trailing slash to match trailingSlash: true in next.config.js
    url: path === '' ? `${baseUrl}/` : `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.startsWith('/locksmith') ? 0.9 : 0.8,
  }))
}
