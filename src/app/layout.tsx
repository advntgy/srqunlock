import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'
import { SITE_CONFIG } from '@/lib/seo-config'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a3a52',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://srqunlock.com'),
  title: {
    default: '24/7 Emergency Locksmith North Port FL | Unlock SRQ',
    template: '%s | Unlock SRQ'
  },
  description: '24/7 emergency locksmith in North Port & Sarasota FL. Car lockouts, key programming, home & business. NASTF Certified. 15-min response. Call (941) 587-5050!',
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  keywords: [
    // Near Me Keywords (High Priority)
    'locksmith near me',
    'emergency locksmith near me',
    '24 hour locksmith near me',
    'car locksmith near me',
    'auto locksmith near me',
    'mobile locksmith near me',
    'locked out of car near me',
    // City-Specific Keywords
    'locksmith North Port',
    'emergency locksmith North Port',
    'locksmith Port Charlotte',
    'emergency locksmith Port Charlotte',
    'locksmith Venice FL',
    'locksmith Sarasota',
    'locksmith Punta Gorda',
    'locksmith Englewood FL',
    'locksmith Bradenton',
    // Service Keywords
    'car lockout service',
    '24/7 locksmith Florida',
    'automotive locksmith',
    'key programming',
    'transponder key replacement',
    'NASTF certified locksmith',
    'licensed locksmith Florida'
  ],
  authors: [{ name: 'Maksim Yepikhin', url: 'https://srqunlock.com' }],
  creator: 'Unlock SRQ LLC',
  publisher: 'Unlock SRQ LLC',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: '24/7 Emergency Locksmith North Port FL | Unlock SRQ',
    description: 'Professional 24/7 locksmith. Car lockouts, key programming, home & business. NASTF Certified.',
    url: 'https://srqunlock.com/',
    siteName: 'Unlock SRQ',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Unlock SRQ - Professional Locksmith Services North Port FL',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Locksmith North Port FL',
    description: 'Professional locksmith in North Port & Port Charlotte FL. Call (941) 587-5050',
    images: ['/images/hero-bg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE',
  // },
  alternates: {
    canonical: 'https://srqunlock.com/',
  },
  category: 'Locksmith Services',
}

// Schema.org structured data for AI algorithms and Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://srqunlock.com/#business',
      name: 'Unlock SRQ LLC',
      alternateName: 'Unlock SRQ',
      description: 'Professional 24/7 emergency locksmith services in North Port, Port Charlotte, and Sarasota County Florida. NASTF Certified automotive locksmith specializing in car lockouts, key programming, transponder keys, smart keys, residential and commercial locksmith services.',
      url: 'https://srqunlock.com',
      telephone: '+1-941-587-5050',
      email: 'info@srqunlock.com',
      image: 'https://srqunlock.com/images/maxim-yepichin-locksmith-with-customer-sarasota-fl.webp',
      logo: 'https://srqunlock.com/images/logo.png',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2456 Yancy Street',
        addressLocality: 'North Port',
        addressRegion: 'FL',
        postalCode: '34291',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.0442,
        longitude: -82.2359
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'North Port',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'City',
          name: 'Port Charlotte',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'City',
          name: 'Venice',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'City',
          name: 'Punta Gorda',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'City',
          name: 'Englewood',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'City',
          name: 'Rotonda West',
          containedInPlace: { '@type': 'State', name: 'Florida' }
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Sarasota County'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Charlotte County'
        }
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Locksmith Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Automotive Locksmith Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Car Lockout' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transponder Key Programming' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Key Programming' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Push-to-Start Key Replacement' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ignition Repair & Replacement' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Duplication' } }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'Residential Locksmith Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Lockout Service' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Rekey' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Master Key Systems' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Security Lock Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Lock Installation' } }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'Commercial Locksmith Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Lockout' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Control Systems' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Panic Bar Installation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Lock Change' } }
            ]
          }
        ]
      },
      sameAs: [
        'https://facebook.com/unlocksrq',
        'https://instagram.com/unlocksrq',
        'https://youtube.com/@unlocksrq',
        'https://g.page/unlockSRQ',
        'https://maps.app.goo.gl/EUtjNXpDLsLgBmxJ6'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Pavel Rubets' },
          datePublished: '2024-11-27',
          reviewBody: 'Unlock SRQ LLC did an outstanding job helping me with my Kenworth truck after I lost the key. Their service was fast, professional, and extremely reliable. They showed up quickly, knew exactly what they were doing, and had me back on the road in no time. I really appreciate their expertise and customer-focused attitude. If you need a locksmith you can trust—especially for commercial vehicles—I highly recommend Unlock SRQ LLC!',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'CIndee LaPorte' },
          datePublished: '2024-11-27',
          reviewBody: 'I just want to say thank you to Max. He\'s wonderful. He helped me replace my key to my Hyundai Santa Cruz 2023 which we all know Hyundai is going to charge you $600. He gave me an excellent price. He was kind he was professional and again gave me a great deal. I would highly recommend him and if I ever have that problem again I definitely will call him back thanks again, Max.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Scimitar Ridge Ranch' },
          datePublished: '2024-11-20',
          reviewBody: 'This locksmith service in North Port, FL is led by someone who consistently delivers dependable, high-quality work. The owner has a strong reputation for honesty, attention to detail, and the kind of problem-solving ability you want when dealing with locks, security, and emergencies. His work ethic and integrity really set the standard. For anyone in North Port looking for a trustworthy locksmith, this company is an excellent choice. They\'re known for fast response times, fair pricing, and professional workmanship.',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        }
      ],
      founder: {
        '@type': 'Person',
        name: 'Maksim Yepikhin',
        jobTitle: 'Owner & Master Locksmith'
      },
      slogan: 'Smart solutions for key problems',
      knowsAbout: [
        'Automotive Locksmith',
        'Key Programming',
        'Transponder Keys',
        'Smart Keys',
        'Lock Rekeying',
        'Access Control',
        'Emergency Lockout Services',
        'Vehicle Security'
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional License',
          name: 'Vehicle Security Professional License'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certification',
          name: 'NASTF Certified'
        }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://srqunlock.com/#website',
      url: 'https://srqunlock.com',
      name: 'Unlock SRQ',
      description: '24/7 Emergency Locksmith Services in North Port & Port Charlotte FL',
      publisher: { '@id': 'https://srqunlock.com/#business' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://srqunlock.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
    // FAQPage schema is added per-page to avoid duplicates on location pages
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${SITE_CONFIG.googleTagManagerId}');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Canonical is set via metadata.alternates.canonical on each page */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE_CONFIG.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        
        <Header />
        <main className="pt-[88px]">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
