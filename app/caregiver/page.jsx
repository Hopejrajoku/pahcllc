'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react'

export default function CaregiverPage() {
  return (
    <main
      className="max-w-6xl mx-auto px-4 md:px-6 py-28"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-[400px] mb-10 rounded-xl overflow-hidden shadow">
        <Image
          src="/caregiver.jpeg"
          alt="Caregiver Services"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-[#083b66] text-center mb-4">
        Compassionate Caregivers
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Our professional caregivers are here to provide dependable, loving, and personalized in-home care for your loved ones. Whether you need daily assistance or part-time support, we're committed to helping your family thrive at home.
      </p>

      {/* Features Section */}
      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div>
          <HeartHandshake size={40} className="mx-auto text-[#4C4CDB]" />
          <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Companionship</h2>
          <p className="text-gray-600 mt-2">We offer social support, meaningful conversation, and emotional care to prevent isolation.</p>
        </div>
        <div>
          <ShieldCheck size={40} className="mx-auto text-[#4C4CDB]" />
          <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Certified Care</h2>
          <p className="text-gray-600 mt-2">Our trained professionals are certified and background-checked for your peace of mind.</p>
        </div>
        <div>
          <Users size={40} className="mx-auto text-[#4C4CDB]" />
          <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Family Support</h2>
          <p className="text-gray-600 mt-2">We collaborate with families to create care plans tailored to your loved one’s needs and routines.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-[#f5f5ff] p-8 rounded-xl text-center shadow">
        <h3 className="text-2xl font-bold text-[#083b66] mb-4">Ready to Find the Right Caregiver?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how we can help your family feel safe and supported.
        </p>
        <Link href="/contact" className="inline-block bg-[#4C4CDB] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition">
          Contact Us
        </Link>
      </div>
    </main>
  )
}
