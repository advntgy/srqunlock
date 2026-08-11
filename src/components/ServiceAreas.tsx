const serviceAreas = [
  {
    name: 'North Port',
    county: 'Sarasota County',
    response: '10-15 min',
    isHQ: true
  },
  {
    name: 'Port Charlotte',
    county: 'Charlotte County',
    response: '15-20 min',
    isHQ: false
  },
  {
    name: 'Punta Gorda',
    county: 'Charlotte County',
    response: '20-25 min',
    isHQ: false
  },
  {
    name: 'Venice',
    county: 'Sarasota County',
    response: '15-20 min',
    isHQ: false
  },
  {
    name: 'Englewood',
    county: 'Sarasota & Charlotte',
    response: '20-30 min',
    isHQ: false
  },
  {
    name: 'Rotonda West',
    county: 'Charlotte County',
    response: '25-30 min',
    isHQ: false
  }
]

const additionalAreas = {
  sarasota: ['North Port', 'Venice', 'South Sarasota', 'Nokomis'],
  charlotte: ['Port Charlotte', 'Punta Gorda', 'Englewood', 'Rotonda West']
}

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-[#2c4a5f] to-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We Serve All of <span className="text-[#7dd3e8]">North Port & Charlotte County</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our mobile technicians are stationed throughout the area for fastest response times. 
            We come to you wherever you are in Sarasota and Charlotte Counties.
          </p>
        </div>

        {/* Service areas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <div 
              key={index}
              className={`bg-[#2c4a5f] rounded-2xl p-6 border ${area.isHQ ? 'border-[#7dd3e8]' : 'border-[#7dd3e8]/20'} hover:border-[#7dd3e8] transition-colors`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{area.name}</h3>
                  <p className="text-white/70 text-sm">{area.county}</p>
                </div>
                {area.isHQ && (
                  <span className="bg-[#7dd3e8]/20 text-[#7dd3e8] text-xs font-semibold px-2 py-1 rounded-full">
                    Headquarters
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-[#7dd3e8]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{area.response} response</span>
              </div>
            </div>
          ))}
        </div>

        {/* Counties breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 text-[#7dd3e8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Sarasota County
            </h4>
            <ul className="space-y-2">
              {additionalAreas.sarasota.map((area, idx) => (
                <li key={idx} className="flex items-center text-gray-200">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 text-[#7dd3e8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Charlotte County
            </h4>
            <ul className="space-y-2">
              {additionalAreas.charlotte.map((area, idx) => (
                <li key={idx} className="flex items-center text-gray-200">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">Need immediate locksmith service? We&apos;re ready to help 24/7!</p>
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
  )
}
