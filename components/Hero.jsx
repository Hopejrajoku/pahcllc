'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="bg-white text-gray-800 py-12 px-4 md:px-8"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-8">
        
        {/* Image Box with top margin */}
        <div className="relative w-full md:w-[60%] h-[400px] md:h-[500px] mt-12">
          <Image
            src="/hero.jpg"
            alt="Caregiver helping elderly woman"
            fill
            className="object-cover rounded-xl grayscale"
            priority
          />
        </div>

        {/* Content Overlapping Right Side */}
        <div className="w-full md:w-[45%] -mt-12 md:mt-0 md:-ml-32 bg-[#F2F5FF] p-8 rounded-xl shadow-lg z-10 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight">
            Peaceful <br /> At Home LLC
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We listen, so you are heard.
          </p>
          <ul className="space-y-2 text-gray-700 text-base mb-6">
            <li>• Your Home</li>
            <li>• Your Confidence</li>
            <li>• Your Relationship</li>
            <li>• Your Voice</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-[#001f5f] hover:bg-[#003380] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
