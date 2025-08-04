'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#229CDD] text-white pt-16 pb-10 px-6 md:px-12"
      style={{ fontFamily: 'var(--font-sf-pro)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logonav.png" alt="Peaceful At Home LLC" width={40} height={40} className='bg-gray-100 rounded-full'
            />
          </div>
          <p className="text-gray-300">
            Providing compassionate care and a sense of security to every home we serve.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (706) 691-3959
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> peacefulathomellc@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Georgia, USA
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-300 text-xs">
        &copy; {new Date().getFullYear()} Peaceful At Home LLC. All rights reserved.
      </div>
    </footer>
  )
}
