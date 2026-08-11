'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you shortly.')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Contact <span className="text-[#7dd3e8]">Us</span>
            </h2>
            <p className="text-gray-200 mb-8 text-lg">
              Have a question for the best Unlock SRQ? We&apos;re here to help. Send us a message 
              and we&apos;ll get be in touch.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <a 
                href="tel:+19415875050" 
                className="flex items-center space-x-4 p-4 bg-[#2c4a5f] rounded-xl border border-[#7dd3e8]/20 hover:border-[#7dd3e8] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#7dd3e8]/20 rounded-lg flex items-center justify-center group-hover:bg-[#7dd3e8] transition-colors">
                  <svg className="w-6 h-6 text-[#7dd3e8] group-hover:text-[#1a3a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Call Us 24/7</div>
                  <div className="text-xl font-bold text-white">(941) 587-5050</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-[#2c4a5f] rounded-xl border border-[#7dd3e8]/20">
                <div className="w-12 h-12 bg-[#7dd3e8]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70">Location</div>
                  <div className="text-lg font-semibold text-white">North Port, FL 34291</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#2c4a5f] rounded-xl border border-[#7dd3e8]/20">
                <div className="w-12 h-12 bg-[#7dd3e8]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70">Hours</div>
                  <div className="text-lg font-semibold text-white">24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2c4a5f] rounded-2xl p-8 border border-[#7dd3e8]/20">
            <h3 className="text-xl font-bold text-white mb-6">Request Service</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a3a52] border border-[#7dd3e8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#7dd3e8] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a3a52] border border-[#7dd3e8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#7dd3e8] transition-colors"
                  placeholder="(941) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a3a52] border border-[#7dd3e8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#7dd3e8] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a3a52] border border-[#7dd3e8]/20 rounded-lg text-white focus:outline-none focus:border-[#7dd3e8] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="car-lockout">Car Lockout</option>
                  <option value="home-lockout">Home Lockout</option>
                  <option value="business-lockout">Business Lockout</option>
                  <option value="key-replacement">Key Replacement</option>
                  <option value="lock-change">Lock Change/Rekey</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a3a52] border border-[#7dd3e8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#7dd3e8] transition-colors resize-none"
                  placeholder="Tell us more about your situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
