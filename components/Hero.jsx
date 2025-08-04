'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="bg-white text-gray-800 py-30 px-4 md:px-8 mt-12"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-8 mt-8">
        
        {/* Image Box with top margin */}
        <div className="relative w-full md:w-[60%] h-[400px] md:h-[500px]">
          <Image
            src="/hero.jpeg"
            alt="Caregiver helping elderly woman"
            fill
            className="object-cover grayscale brightness-100"
            priority
          />
        </div>

        {/* Content Overlapping Right Side */}
        <div className="w-full md:w-[45%] -mt-14 md:mt-0 md:-ml-32 bg-[#F2F5FF] p-8 shadow-lg z-10 relative right-0 top-6 md:top-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[#083b66] mb-6 leading-tight">
            Peaceful At Home <br /> LLC
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Listening with intention, so you feel understood.
          </p>
          <ul className="space-y-2 text-gray-700 text-base mb-6">
            <li>• Your Home</li>
            <li>• Your Confidence</li>
            <li>• Your Relationship</li>
            <li>• Your Voice</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-[#4C4CDB] hover:bg-[#003380] text-white font-semibold px-6 py-3 transition duration-200 rounded-lg shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
