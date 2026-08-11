const testimonials = [
  {
    name: 'Michael R.',
    location: 'North Port',
    rating: 5,
    text: 'Got locked out of my car at 2 AM. Called Unlock SRQ and they were there in 15 minutes. Professional, fast, and fair pricing. Highly recommend!',
    service: 'Car Lockout'
  },
  {
    name: 'Sarah T.',
    location: 'Port Charlotte',
    rating: 5,
    text: 'Amazing service! They came out on a Sunday to rekey all my locks after I moved into my new home. Very thorough and explained everything.',
    service: 'Residential Rekeying'
  },
  {
    name: 'David K.',
    location: 'Venice',
    rating: 5,
    text: 'Our office needed a new access control system. Unlock SRQ installed everything perfectly and trained our staff. Great commercial locksmith service!',
    service: 'Commercial Security'
  },
  {
    name: 'Jennifer M.',
    location: 'Punta Gorda',
    rating: 5,
    text: 'Lost my only car key while on vacation. They made a new transponder key on the spot and programmed it. Saved my trip! Thank you so much.',
    service: 'Key Programming'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#7dd3e8]">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-lg">5.0</span>
          <span className="text-gray-300">Based on 100+ reviews</span>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#2c4a5f] rounded-2xl p-6 border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.location}</div>
                </div>
                <div className="text-sm text-[#7dd3e8] bg-[#7dd3e8]/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Join our satisfied customers today!</p>
          <a 
            href="tel:+19415875050" 
            className="inline-flex items-center space-x-2 bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now: (941) 587-5050</span>
          </a>
        </div>
      </div>
    </section>
  )
}
