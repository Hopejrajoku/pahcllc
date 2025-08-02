'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react'

export default function CaregiverPage() {
  return (
    <main
      className="font-sans py-10"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Background Image Section */}
      <div className="relative h-[550px] w-full">
        <Image
          src="/care.jpeg"
          alt="Caregiver Services"
          fill
          className="object-cover brightness-55 saturation-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compassionate Caregivers
          </h1>
          <p className="max-w-5xl text-lg text-white/90">
            Our dedicated team of professional caregivers is committed to delivering dependable, compassionate, and personalized in-home care tailored to meet the unique needs of each individual. With a deep understanding of the importance of dignity, comfort, and emotional well-being, we strive to create a nurturing environment that allows your loved ones to age gracefully and independently in the comfort of their own home. Whether you require daily assistance, companionship, or specialized support, we are here to provide peace of mind and help your family thrive—every step of the way.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <HeartHandshake size={40} className="mx-auto text-[#4C4CDB]" />
            <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Companionship</h2>
            <p className="text-gray-600 mt-2">
              Social support and meaningful interaction to prevent isolation.
            </p>
          </div>
          <div>
            <ShieldCheck size={40} className="mx-auto text-[#4C4CDB]" />
            <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Certified Care</h2>
            <p className="text-gray-600 mt-2">
              Fully vetted, trained professionals providing trustworthy care.
            </p>
          </div>
          <div>
            <Users size={40} className="mx-auto text-[#4C4CDB]" />
            <h2 className="text-xl font-semibold mt-4 text-[#083b66]">Family Support</h2>
            <p className="text-gray-600 mt-2">
              Collaborative care plans made with your family's needs in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 bg-[#f5f5ff] p-8 rounded-xl text-center shadow px-4">
        <h3 className="text-2xl font-bold text-[#083b66] mb-4">
          Ready to Find the Right Caregiver?
        </h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how we can help your family feel safe and supported.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#4C4CDB] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
