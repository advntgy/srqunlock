import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#344c5a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Unlock SRQ LLC"
                width={48}
                height={48}
                className="h-12 w-auto rounded-lg"
              />
              <span className="text-xl font-bold text-white">Unlock <span className="text-[#7dd3e8]">SRQ</span> LLC</span>
            </Link>
            <p className="text-white/80 mb-4 text-sm">
              Professional locksmith services available 24/7 for all your security needs.
            </p>
            <p className="text-white/60 text-sm">Owner: Maksim Yepikhin</p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="tel:+19415875050" 
                className="flex items-center space-x-2 text-white hover:text-[#7dd3e8] transition-colors"
              >
                <svg className="w-4 h-4 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">(941) 587-5050</span>
              </a>
              <a 
                href="mailto:info@srqunlock.com" 
                className="flex items-center space-x-2 text-white/80 hover:text-[#7dd3e8] transition-colors"
              >
                <svg className="w-4 h-4 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@srqunlock.com</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-4 h-4 text-[#7dd3e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>North Port, FL 34291</span>
              </div>
              <div className="flex items-center space-x-2 text-[#7dd3e8] font-medium mt-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Mobile Service - We Come to You!</span>
              </div>
            </div>
          </div>

          {/* Column 3: Emergency 24/7 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Emergency Service</h4>
            <p className="text-white/80 text-sm mb-3">
              Available 24 hours a day, 7 days a week, 365 days a year
            </p>
            <p className="text-[#7dd3e8] text-4xl font-bold mb-4">24/7/365</p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2 mt-4">
              <a href="https://facebook.com/unlocksrq" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="https://instagram.com/unlocksrq" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.yellowpages.com/north-port-fl/mip/unlock-srq-llc-569083053" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors font-bold text-xs">
                YP
              </a>
              <a href="https://youtube.com/@unlocksrq" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@unlocksrq" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="mailto:info@srqunlock.com"
                 className="w-8 h-8 bg-[#7dd3e8] rounded-lg flex items-center justify-center text-[#1a3a52] hover:bg-[#6bc3d8] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <p className="text-[#7dd3e8] text-sm font-medium mb-2">Sarasota County:</p>
            <ul className="text-white/80 text-sm space-y-1 mb-4">
              <li><Link href="/locksmith-north-port" className="hover:text-[#7dd3e8] transition-colors">• North Port</Link></li>
              <li><Link href="/locksmith-venice-fl" className="hover:text-[#7dd3e8] transition-colors">• Venice</Link></li>
              <li><Link href="/locksmith-sarasota" className="hover:text-[#7dd3e8] transition-colors">• South Sarasota</Link></li>
              <li>• Nokomis</li>
            </ul>
            <p className="text-[#7dd3e8] text-sm font-medium mb-2">Charlotte County:</p>
            <ul className="text-white/80 text-sm space-y-1">
              <li><Link href="/locksmith-port-charlotte" className="hover:text-[#7dd3e8] transition-colors">• Port Charlotte</Link></li>
              <li><Link href="/locksmith-punta-gorda" className="hover:text-[#7dd3e8] transition-colors">• Punta Gorda</Link></li>
              <li><Link href="/locksmith-englewood" className="hover:text-[#7dd3e8] transition-colors">• Englewood</Link></li>
              <li><Link href="/emergency-locksmith-charlotte-county" className="hover:text-[#7dd3e8] transition-colors">• 24/7 Emergency</Link></li>
              <li>• Rotonda West</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link href="/privacy-policy" className="text-white/80 hover:text-[#7dd3e8] text-sm transition-colors">Privacy Policy</Link>
              <span className="text-white/40">|</span>
              <Link href="/terms-of-service" className="text-white/80 hover:text-[#7dd3e8] text-sm transition-colors">Terms of Service</Link>
            </div>
            <p className="text-white/80 text-sm text-center">
              © {new Date().getFullYear()} Unlock SRQ LLC. All rights reserved.
            </p>
          </div>
          
          {/* Certifications */}
          <div className="text-center mt-6">
            <p className="text-[#7dd3e8] text-sm font-medium">
              Vehicle Security Professional License • NASTF Certified • VSP Verified • AUTOAUTH
            </p>
            <p className="text-white/60 text-xs mt-2">
              Licensed & Insured • Serving Sarasota & Charlotte Counties • 15-Min Response
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
