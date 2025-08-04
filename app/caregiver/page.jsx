'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartHandshake, ShieldCheck, Users, ThumbsUp, Clock, Smile } from 'lucide-react'

export default function CaregiverPage() {
  return (
    <main className="font-sans py-28" style={{ fontFamily: 'var(--font-sf-pro)' }}>
      {/* Hero Section */}
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
          <p className="max-w-4xl text-lg text-white/90">
            Our caregivers are not just professionals—they're compassionate companions dedicated to preserving dignity and promoting well-being. From daily tasks to emotional support, we tailor every aspect of care to your loved one's preferences and routines.
          </p>
        </div>
      </div>

      {/* Core Services Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#083b66]">Our Caregiving Services</h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <HeartHandshake size={42} className="mx-auto text-[#4C4CDB]" />
            <h3 className="text-xl font-semibold mt-4 text-[#083b66]">Companionship</h3>
            <p className="text-gray-600 mt-2">
              Building meaningful relationships that uplift and reduce loneliness—whether it's through shared hobbies, conversation, or simply being present.
            </p>
          </div>
          <div>
            <ShieldCheck size={42} className="mx-auto text-[#4C4CDB]" />
            <h3 className="text-xl font-semibold mt-4 text-[#083b66]">Certified Care</h3>
            <p className="text-gray-600 mt-2">
              Our caregivers are thoroughly trained and certified, ensuring every task—from hygiene support to mobility assistance—is handled with professionalism and care.
            </p>
          </div>
          <div>
            <Users size={42} className="mx-auto text-[#4C4CDB]" />
            <h3 className="text-xl font-semibold mt-4 text-[#083b66]">Family Support</h3>
            <p className="text-gray-600 mt-2">
              We work closely with families to develop flexible care plans, provide updates, and ensure peace of mind throughout the caregiving journey.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: What Makes Our Caregivers Special */}
      <section className="bg-[#f8f9ff] py-14 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#083b66] mb-6">What Makes Our Caregivers Special</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
            Every member of our team is selected for more than just experience—they're chosen for empathy, patience, and a genuine desire to make a difference. Our caregivers treat your family like their own, offering steady hands and open hearts.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <ThumbsUp size={38} className="mx-auto text-[#4C4CDB]" />
              <h4 className="text-lg font-semibold text-[#083b66] mt-4">Reliable & Punctual</h4>
              <p className="text-gray-600 mt-2">You can count on our team to be there when needed—on time, every time.</p>
            </div>
            <div>
              <Clock size={38} className="mx-auto text-[#4C4CDB]" />
              <h4 className="text-lg font-semibold text-[#083b66] mt-4">Flexible Scheduling</h4>
              <p className="text-gray-600 mt-2">From short check-ins to 24/7 live-in care, our caregivers work around your needs.</p>
            </div>
            <div>
              <Smile size={38} className="mx-auto text-[#4C4CDB]" />
              <h4 className="text-lg font-semibold text-[#083b66] mt-4">Emotional Intelligence</h4>
              <p className="text-gray-600 mt-2">We bring warmth and patience to every visit, fostering trust and emotional security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Tailored Services for Every Situation */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#083b66] mb-10">
          Tailored Services for Every Situation
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We recognize that every family is different. That’s why we offer a range of services—from post-hospital recovery to memory care—to ensure your loved one receives exactly the care they need, when they need it.
        </p>
        <div className="flex justify-center">
          <Link
            href="/services"
            className="bg-[#229CDD] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 bg-[#f5f5ff] p-8 rounded-xl text-center shadow px-4">
        <h3 className="text-2xl font-bold text-[#083b66] mb-4">
          Ready to Find the Right Caregiver?
        </h3>
        <p className="text-gray-700 mb-6">
          Let us help you build a safe and nurturing environment for your loved ones. Reach out today for a no-obligation consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#229CDD] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
