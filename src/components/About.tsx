import Image from 'next/image'

export default function About() {
  const features = [
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      text: 'Licensed & Insured Florida Locksmith' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      text: '24/7 Emergency Service - 365 Days' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      text: 'Fast Average Response Time' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      text: 'Transparent Pricing - No Hidden Fees' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      text: '90-Day Warranty on All Work' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ), 
      text: 'Background-Checked Technicians' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ), 
      text: 'Locally Owned & Operated' 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ), 
      text: 'Mobile Service - We Come to You!' 
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#7dd3e8]">Unlock SRQ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-[#2c4a5f] rounded-xl p-4 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <span className="text-gray-200 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/maxim-yepichin-locksmith-with-customer-sarasota-fl.webp"
                alt="Maksim Yepikhin, licensed master locksmith and owner of Unlock SRQ, providing professional locksmith service to satisfied customer in North Port, Charlotte County, and Sarasota County Florida"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-gray-300 text-sm text-center mt-4 italic">
              Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC, delivering professional locksmith services with excellent customer care in Sarasota, Florida
            </p>
          </div>
        </div>

        {/* About Text Section */}
        <div className="mt-16 bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            We Are a Premiere North Port, FL Locksmith Company
          </h3>
          <h4 className="text-lg text-[#7dd3e8] mb-4">We Provide the Best Services Possible</h4>
          <p className="text-gray-200 mb-4">
            For years we&apos;ve proudly served the residents of North Port, FL and surrounding areas. 
            From residential homes to automobiles and businesses, we handle it all.
          </p>
          <p className="text-gray-300">
            We know dealing with a &quot;lockout&quot;, breaking or another security problem is likely an unexpected 
            and unwelcome interruption to your daily routine. Our locksmiths are prompt, courteous and empathetic. 
            We know you need to get back to your life as quickly as possible.
          </p>
        </div>
      </div>
    </section>
  )
}
