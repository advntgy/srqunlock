export const SITE_CONFIG = {
  siteName: 'Unlock SRQ LLC',
  siteUrl: 'https://srqunlock.com',
  defaultTitle: 'Locksmith Near Me | 24/7 Emergency Locksmith North Port FL | Unlock SRQ',
  titleTemplate: '%s | Unlock SRQ LLC - Locksmith Near Me',
  defaultDescription: 'Looking for a locksmith near me? Unlock SRQ offers 24/7 emergency locksmith services in North Port, Port Charlotte, Venice, Sarasota FL. Fast response. NASTF Certified. Call (941) 587-5050',
  
  // Near Me & City-Specific Keywords for SEO
  nearMeKeywords: [
    'locksmith near me',
    'emergency locksmith near me',
    '24 hour locksmith near me',
    'car locksmith near me',
    'auto locksmith near me',
    'mobile locksmith near me',
    'locksmith near me open now',
    'cheap locksmith near me',
    'locked out of car near me',
    'key replacement near me',
  ],
  cityKeywords: {
    'North Port': ['locksmith North Port', 'emergency locksmith North Port', 'car locksmith North Port FL', '24 hour locksmith North Port'],
    'Port Charlotte': ['locksmith Port Charlotte', 'emergency locksmith Port Charlotte', 'car locksmith Port Charlotte FL'],
    'Venice': ['locksmith Venice FL', 'emergency locksmith Venice', 'car locksmith Venice Florida'],
    'Sarasota': ['locksmith Sarasota', 'emergency locksmith Sarasota', 'car locksmith Sarasota FL'],
    'Punta Gorda': ['locksmith Punta Gorda', 'emergency locksmith Punta Gorda', 'car locksmith Punta Gorda FL'],
    'Englewood': ['locksmith Englewood FL', 'emergency locksmith Englewood', 'car locksmith Englewood'],
    'Bradenton': ['locksmith Bradenton', 'emergency locksmith Bradenton', 'car locksmith Bradenton FL'],
  },
  
  // Business Info for Schema
  business: {
    name: 'Unlock SRQ LLC',
    legalName: 'Unlock SRQ LLC',
    phone: '+1-941-587-5050',
    phoneDisplay: '(941) 587-5050',
    email: 'info@srqunlock.com',
    address: {
      streetAddress: '2456 Yancy Street',
      addressLocality: 'North Port',
      addressRegion: 'FL',
      postalCode: '34291',
      addressCountry: 'US',
    },
    geo: {
      latitude: 27.0442,
      longitude: -82.2359,
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59', // 24/7
    owner: 'Maksim Yepikhin',
    ownerTitle: 'Owner & Master Locksmith',
    certifications: [
      'Vehicle Security Professional License',
      'NASTF Certified',
      'VSP Verified',
      'AUTOAUTH Authorized',
      'Licensed & Insured',
    ],
    serviceArea: [
      'Sarasota, FL',
      'North Port, FL',
      'Venice, FL',
      'Port Charlotte, FL',
      'Punta Gorda, FL',
      'Englewood, FL',
      'Bradenton, FL',
      'Charlotte County, FL',
      'Sarasota County, FL',
      'Nokomis, FL',
      'South Sarasota, FL',
      'Rotonda West, FL',
    ],
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/unlocksrq',
    instagram: 'https://instagram.com/unlocksrq',
    youtube: 'https://youtube.com/@unlocksrq',
    google: 'https://g.page/unlockSRQ', // Google Business Profile
    googleBusiness: 'https://maps.app.goo.gl/EUtjNXpDLsLgBmxJ6',
    googleMaps: 'https://www.google.com/maps/place/Unlock+SRQ+LLC/@27.0798928,-82.2106635,17z',
  },
  
  // Real Google Reviews from Google Business Profile
  reviews: [
    {
      author: 'Pavel Rubets',
      rating: 5,
      date: '2024-11-27',
      text: 'Unlock SRQ LLC did an outstanding job helping me with my Kenworth truck after I lost the key. Their service was fast, professional, and extremely reliable. They showed up quickly, knew exactly what they were doing, and had me back on the road in no time. I really appreciate their expertise and customer-focused attitude. If you need a locksmith you can trust—especially for commercial vehicles—I highly recommend Unlock SRQ LLC!',
      isLocalGuide: false,
    },
    {
      author: 'CIndee LaPorte',
      rating: 5,
      date: '2024-11-27',
      text: 'I just want to say thank you to Max. He\'s wonderful. He helped me replace my key to my Hyundai Santa Cruz 2023 which we all know Hyundai is going to charge you $600. He gave me an excellent price. He was kind he was professional and again gave me a great deal. I would highly recommend him and if I ever have that problem again I definitely will call him back thanks again, Max.',
      isLocalGuide: true,
    },
    {
      author: 'Scimitar Ridge Ranch',
      rating: 5,
      date: '2024-11-20',
      text: 'This locksmith service in North Port, FL is led by someone who consistently delivers dependable, high-quality work. The owner has a strong reputation for honesty, attention to detail, and the kind of problem-solving ability you want when dealing with locks, security, and emergencies. His work ethic and integrity really set the standard. For anyone in North Port looking for a trustworthy locksmith, this company is an excellent choice.',
      isLocalGuide: false,
    },
  ],
  
  // Default OG Image (using hero-bg.webp)
  defaultOgImage: '/images/hero-bg.webp',
  
  // Twitter Image (using hero-bg.webp)
  twitterImage: '/images/hero-bg.webp',
  
  // Google Analytics
  googleAnalyticsId: 'G-45QVRK0P0H',

  // Google Tag Manager (container: srqunlock.com / account: Unlock SRQ LLC)
  googleTagManagerId: 'GTM-KGZXTW5X',
};

// Location data for SEO
export const LOCATIONS = {
  'north-port': {
    name: 'North Port',
    state: 'FL',
    slug: 'locksmith-north-port',
    description: 'Professional locksmith services in North Port, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Fast response times throughout North Port and Sarasota County.',
    geo: { latitude: 27.0442, longitude: -82.2359 },
    zip: '34286',
    responseTime: 'Fast',
    nearbyAreas: ['Port Charlotte', 'Venice', 'Englewood', 'Sarasota', 'Wellen Park'],
    neighborhoods: [
      'Warm Mineral Springs', 'North Port Estates', 'Bobcat Trail', 'Heron Creek',
      'Cocoplum', 'Wellen Park', 'Gran Paradiso', 'Toledo Blade'
    ],
  },
  'sarasota': {
    name: 'Sarasota',
    state: 'FL',
    slug: 'locksmith-sarasota',
    description: 'Professional locksmith services in Sarasota, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Serving all of Sarasota County.',
    geo: { latitude: 27.3364, longitude: -82.5307 },
    zip: '34236',
    responseTime: 'Fast',
    nearbyAreas: ['North Port', 'Venice', 'Bradenton', 'Siesta Key', 'Longboat Key'],
    neighborhoods: [
      'Downtown Sarasota', 'Siesta Key', 'Longboat Key', 'Lido Key', 'Gulf Gate',
      'Southgate', 'Bee Ridge', 'Palmer Ranch', 'Lakewood Ranch', 'University Park'
    ],
  },
  'venice': {
    name: 'Venice',
    state: 'FL',
    slug: 'locksmith-venice-fl',
    description: 'Professional locksmith services in Venice, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Fast response times in Venice and surrounding areas.',
    geo: { latitude: 27.0998, longitude: -82.4543 },
    zip: '34285',
    responseTime: 'Fast',
    nearbyAreas: ['North Port', 'Sarasota', 'Englewood', 'Nokomis'],
    neighborhoods: [
      'Venice Island', 'South Venice', 'Venice East', 'Venetia', 'The Meadows',
      'Jacaranda', 'Laurel', 'Nokomis'
    ],
  },
  'port-charlotte': {
    name: 'Port Charlotte',
    state: 'FL',
    slug: 'locksmith-port-charlotte',
    description: 'Professional locksmith services in Port Charlotte, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Serving Charlotte County.',
    geo: { latitude: 26.9767, longitude: -82.0907 },
    zip: '33948',
    responseTime: 'Fast',
    nearbyAreas: ['North Port', 'Punta Gorda', 'Englewood', 'Rotonda West'],
    neighborhoods: [
      'Murdock', 'Town Center', 'Mid County', 'Deep Creek', 'Harbor Heights',
      'Charlotte Harbor', 'Edgewater', 'Charlotte Park'
    ],
  },
  'punta-gorda': {
    name: 'Punta Gorda',
    state: 'FL',
    slug: 'locksmith-punta-gorda',
    description: 'Professional locksmith services in Punta Gorda, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Serving Charlotte County.',
    geo: { latitude: 26.9298, longitude: -82.0454 },
    zip: '33950',
    responseTime: '20-25 minutes',
    nearbyAreas: ['Port Charlotte', 'North Port', 'Englewood', 'Cape Coral'],
    neighborhoods: [
      'Downtown Punta Gorda', 'Burnt Store', 'Punta Gorda Isles', 'Charlotte Harbor',
      'Seminole Lakes', 'Riverside'
    ],
  },
  'englewood': {
    name: 'Englewood',
    state: 'FL',
    slug: 'locksmith-englewood',
    description: 'Professional locksmith services in Englewood, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Serving both Sarasota and Charlotte Counties.',
    geo: { latitude: 26.9620, longitude: -82.3526 },
    zip: '34223',
    responseTime: 'Fast',
    nearbyAreas: ['North Port', 'Venice', 'Port Charlotte', 'Rotonda West'],
    neighborhoods: [
      'Englewood Beach', 'Grove City', 'Rotonda', 'Manasota Key', 'Lemon Bay'
    ],
  },
  'bradenton': {
    name: 'Bradenton',
    state: 'FL',
    slug: 'locksmith-bradenton',
    description: 'Professional locksmith services in Bradenton, Florida. 24/7 emergency lockout service, car key replacement, residential and commercial locksmith. Serving Manatee County.',
    geo: { latitude: 27.4989, longitude: -82.5748 },
    zip: '34205',
    responseTime: 'Fast',
    nearbyAreas: ['Sarasota', 'Palmetto', 'Anna Maria Island', 'Lakewood Ranch'],
    neighborhoods: [
      'Downtown Bradenton', 'Cortez', 'Palma Sola', 'West Bradenton', 'East Bradenton',
      'Bayshore Gardens', 'Oneco', 'Whitfield'
    ],
  },
  'charlotte-county': {
    name: 'Charlotte County',
    state: 'FL',
    slug: 'emergency-locksmith-charlotte-county',
    description: '24/7 Emergency locksmith services throughout Charlotte County, Florida. Fast response for car lockouts, home lockouts, and commercial security needs. Port Charlotte, Punta Gorda, Englewood, and more.',
    geo: { latitude: 26.9767, longitude: -82.0907 },
    zip: '33948',
    responseTime: 'Fast',
    nearbyAreas: ['Port Charlotte', 'Punta Gorda', 'Englewood', 'Rotonda West', 'North Port'],
    neighborhoods: [
      'Port Charlotte', 'Punta Gorda', 'Englewood', 'Rotonda West', 'Deep Creek',
      'Murdock', 'Charlotte Harbor', 'Harbour Heights'
    ],
  },
};

// Service categories for schema
export const SERVICES = {
  automotive: {
    name: 'Automotive Locksmith Services',
    items: [
      { name: 'Emergency Car Lockout', description: 'Fast, damage-free vehicle entry' },
      { name: 'Transponder Key Programming', description: 'On-site key programming for all makes' },
      { name: 'Smart Key / Push-to-Start', description: 'Proximity key replacement and programming' },
      { name: 'Key Fob Programming', description: 'Remote and keyless entry programming' },
      { name: 'Ignition Repair & Replacement', description: 'Ignition cylinder service' },
      { name: 'Broken Key Extraction', description: 'Safe key removal from locks' },
      { name: 'Car Key Duplication', description: 'Spare keys for all vehicles' },
    ],
  },
  residential: {
    name: 'Residential Locksmith Services',
    items: [
      { name: 'House Lockout Service', description: 'Emergency home entry' },
      { name: 'Lock Rekeying', description: 'Change locks to new keys' },
      { name: 'Lock Installation', description: 'New lock fitting' },
      { name: 'Deadbolt Installation', description: 'High-security deadbolts' },
      { name: 'Master Key Systems', description: 'One key for multiple locks' },
      { name: 'Smart Lock Installation', description: 'Digital and WiFi locks' },
      { name: 'Lock Repair', description: 'Fix damaged locks' },
    ],
  },
  commercial: {
    name: 'Commercial Locksmith Services',
    items: [
      { name: 'Business Lockout', description: 'Emergency commercial entry' },
      { name: 'Master Key Systems', description: 'Business key hierarchy' },
      { name: 'Access Control', description: 'Electronic entry systems' },
      { name: 'Panic Bar Installation', description: 'Emergency exit hardware' },
      { name: 'High-Security Locks', description: 'Commercial-grade security' },
      { name: 'Lock Replacement', description: 'Commercial lock upgrades' },
    ],
  },
};

// FAQ data for schema
export const FAQ_DATA = [
  {
    question: 'What areas do you service?',
    answer: 'We service all of Sarasota and Charlotte Counties including North Port, Port Charlotte, Punta Gorda, Venice, Englewood, Rotonda West, South Sarasota, Bradenton, and Nokomis.',
  },
  {
    question: 'Are you available 24/7?',
    answer: "Yes! We offer 24/7 emergency locksmith services, 365 days a year. Whether you're locked out at 2 AM or need an emergency lock change on a holiday, we're here to help.",
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Unlock SRQ is a fully licensed and insured Florida locksmith company. We hold a Vehicle Security Professional License and are NASTF Certified.',
  },
  {
    question: 'What is your response time?',
    answer: 'We pride ourselves on fast response times throughout North Port, Port Charlotte, Venice, and Punta Gorda.',
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes, we provide a 90-day warranty on all our work. We stand behind our services and want to ensure your complete satisfaction.',
  },
  {
    question: 'Can you make car keys without the original?',
    answer: "Yes, we can create new car keys even if you've lost all your keys. We have the equipment to cut and program transponder keys, key fobs, and smart keys for most vehicle makes and models.",
  },
  {
    question: 'How much does a locksmith cost?',
    answer: 'Our service call fee is competitive and transparent. Exact pricing depends on the service needed. Car lockouts start from $29. We provide upfront quotes with no hidden fees.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and cash. Payment is collected after the service is completed to your satisfaction.',
  },
];

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate local business schema for location pages
export function generateLocalBusinessSchema(locationKey: keyof typeof LOCATIONS) {
  const location = LOCATIONS[locationKey];
  const pageUrl = `${SITE_CONFIG.siteUrl}/${location.slug}/`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${pageUrl}#locksmith`,
    name: `Unlock SRQ LLC - ${location.name} Locksmith`,
    description: location.description,
    url: pageUrl,
    telephone: SITE_CONFIG.business.phone,
    email: SITE_CONFIG.business.email,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
    logo: `${SITE_CONFIG.siteUrl}/images/logo.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'FL',
      postalCode: location.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: SERVICES.automotive.name,
          itemListElement: SERVICES.automotive.items.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
            },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: SERVICES.residential.name,
          itemListElement: SERVICES.residential.items.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
            },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: SERVICES.commercial.name,
          itemListElement: SERVICES.commercial.items.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
            },
          })),
        },
      ],
    },
    sameAs: Object.values(SITE_CONFIG.social),
  };
}

// Generate FAQ schema for location pages
export function generateFAQSchema(locationName: string, nearbyAreas: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How fast can a locksmith get to me in ${locationName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our mobile locksmith can typically arrive in ${locationName} within 15-30 minutes of your call. We serve all of ${locationName} and nearby areas including ${nearbyAreas.join(', ')}.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does a locksmith cost in ${locationName}, FL?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service call fee is competitive and transparent. Car lockouts start from $29. Exact pricing depends on the service needed. We provide upfront quotes with no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer 24/7 emergency locksmith service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Unlock SRQ LLC provides 24/7 emergency locksmith services throughout ${locationName} and Sarasota County. We're available nights, weekends, and holidays.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can you make car keys without the original?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we can create new car keys even if you've lost all your keys. We have the equipment to cut and program transponder keys, key fobs, and smart keys for most vehicle makes and models.",
        },
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Unlock SRQ is a fully licensed and insured Florida locksmith company. We hold a Vehicle Security Professional License and are NASTF Certified.',
        },
      },
    ],
  };
}

// Generate service schema
export function generateServiceSchema(serviceType: 'automotive' | 'residential' | 'commercial') {
  const service = SERVICES[serviceType];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Locksmith',
    name: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.business.name,
      telephone: SITE_CONFIG.business.phone,
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: SITE_CONFIG.business.serviceArea.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.items.map(item => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
        },
      })),
    },
  };
}
