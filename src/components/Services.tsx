import Link from 'next/link'

const mainServices = [
  {
    title: 'Residential Services',
    href: '/residential-services',
    variant: 'dark', // bg-[#2c4a5f]
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      'House Lockout Service (24/7)',
      'Lock Rekey & Master Key Systems',
      'High-Security Lock Installation',
      'Smart Lock Installation & Programming',
      'Broken Key Extraction',
      'Door Security Upgrades'
    ]
  },
  {
    title: 'Commercial Solutions',
    href: '/commercial-services',
    variant: 'cyan', // bg-[#7dd3e8]
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      'Office Lockout Emergency Service',
      'Access Control Systems',
      'Master Key System Design',
      'File Cabinet & Desk Locks',
      'Panic Bar Installation & Repair',
      'ADA Compliant Solutions'
    ]
  },
  {
    title: 'Automotive Services',
    href: '/automotive-services',
    variant: 'dark', // bg-[#2c4a5f]
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    features: [
      'Emergency Car Lockout',
      'Transponder Key Programming',
      'Smart Key & Push-to-Start Keys',
      'Ignition Repair & Replacement',
      'All Makes & Models',
      'Motorcycle & RV Keys'
    ]
  },
  {
    title: 'Emergency 24/7',
    href: '/emergency-locksmith-charlotte-county',
    variant: 'cyan', // bg-[#7dd3e8]
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      '24/7 Immediate Response',
      'Break-in Damage Repair',
      'Lost Key Replacement',
      'Storm Damage Lock Repair',
      'Eviction Locksmith Service',
      'Safe Opening'
    ]
  }
]

const pricingServices = [
  {
    title: 'Key Programming',
    icon: (
      <svg className="w-12 h-12 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    items: ['Transponder Keys', 'Smart Keys'],
    price: 'Call for FREE Quote',
    note: 'Prices vary by service type and time'
  },
  {
    title: 'Lockout Services',
    icon: (
      <svg className="w-12 h-12 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    items: ['Car Lockout', 'Residential Door Lockout'],
    price: '',
    note: ''
  },
  {
    title: 'Battery Services',
    icon: (
      <svg className="w-12 h-12 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Standard Battery', 'European Vehicles with Programming'],
    price: 'Call for FREE Quote',
    note: 'Prices vary by service type and time'
  },
  {
    title: 'Diagnostics',
    icon: (
      <svg className="w-12 h-12 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: ['On-site diagnostics for vehicles that won\'t start'],
    price: 'Call for FREE Quote',
    note: 'Prices vary by service type and time'
  }
]

export default function Services() {
  return (
    <>
      {/* Main Service Cards - Below Hero, not overlapping */}
      <div className="relative py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => {
              const isDark = service.variant === 'dark'
              return (
                <div 
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1 ${
                    isDark ? 'bg-[#2c4a5f]' : 'bg-[#7dd3e8]'
                  }`}
                >
                  {/* Icon */}
                  <div className={`pt-8 flex items-center justify-center ${isDark ? 'text-[#7dd3e8]' : 'text-[#1a3a52]'}`}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl ${
                      isDark ? 'bg-[#7dd3e8]' : 'bg-[#2c4a5f]'
                    }`}>
                      <div className={isDark ? 'text-[#1a3a52]' : 'text-[#7dd3e8]'}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8 pt-6">
                    <h3 className={`text-xl font-bold mb-4 text-center tracking-tight ${
                      isDark ? 'text-white' : 'text-[#1a3a52]'
                    }`}>
                      {service.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start text-sm leading-snug ${
                          isDark ? 'text-white/90' : 'text-[#1a3a52]/90'
                        }`}>
                          <svg className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            isDark ? 'text-[#7dd3e8]' : 'text-[#1a3a52]'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link 
                        href={service.href}
                        className={`inline-flex items-center font-semibold text-sm group ${
                          isDark ? 'text-[#7dd3e8] hover:text-[#6bc3d8]' : 'text-[#1a3a52] hover:text-[#1a3a52]/80'
                        }`}
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Additional <span className="text-[#7dd3e8]">Services & Pricing</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

        {/* Pricing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingServices.map((service, index) => (
            <div 
              key={index}
              className="bg-[#2c4a5f] rounded-2xl overflow-hidden border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors"
            >
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <ul className="space-y-1 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-white/80 text-sm">{item}</li>
                  ))}
                </ul>
                <p className="text-[#7dd3e8] font-bold text-lg mb-2">{service.price}</p>
                <p className="text-white/60 text-xs">{service.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Residential & Commercial Locksmithing</h3>
                <ul className="text-white/80 text-sm mt-2 flex flex-wrap gap-x-4">
                  <li>• Door Unlocking</li>
                  <li>• Lock Repair</li>
                  <li>• Replacement</li>
                  <li>• Key Duplication</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mobile Computer Diagnostics</h3>
                <ul className="text-white/80 text-sm mt-2 flex flex-wrap gap-x-4">
                  <li>• OBD-II Scanning</li>
                  <li>• Error Code Analysis</li>
                  <li>• Engine Performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="tel:+19415875050" 
            className="inline-flex items-center space-x-2 bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call (941) 587-5050</span>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
