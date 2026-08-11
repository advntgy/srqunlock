'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What areas do you service?',
    answer: 'We service all of Sarasota and Charlotte Counties including North Port, Port Charlotte, Punta Gorda, Venice, Englewood, Rotonda West, South Sarasota, and Nokomis. Our mobile technicians are stationed throughout the area for the fastest response times.'
  },
  {
    question: 'Are you available 24/7?',
    answer: 'Yes! We offer 24/7 emergency locksmith services, 365 days a year. Whether you\'re locked out of your car at 2 AM or need an emergency lock change on a holiday, we\'re here to help.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Unlock SRQ is a fully licensed and insured Florida locksmith company. We hold a Vehicle Security Professional License and are NASTF Certified. All our technicians are background-checked for your safety and peace of mind.'
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes, we provide a 90-day warranty on all our work. We stand behind our services and want to ensure your complete satisfaction with every job we complete.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and cash. We also offer online payment options for your convenience. Payment is due upon completion of service.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-[#2c4a5f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common <span className="text-[#7dd3e8]">Questions</span>
          </h2>
          <p className="text-white/80">
            See some common questions and answers below or call us on{' '}
            <a href="tel:+19415875050" className="text-[#7dd3e8] hover:text-[#6bc3d8] font-semibold">
              (941) 587-5050
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#1a3a52] rounded-xl border border-[#7dd3e8]/20 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#1a3a52]/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-[#7dd3e8] transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
