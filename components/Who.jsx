'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-[#E2E2FF] text-gray-800 font-sans px-4 md:px-12 py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12"
        style={{ fontFamily: 'var(--font-sf-pro)' }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#083b66] mb-6 leading-tight">
            Who We Are
          </h1>
          <p className="text-lg text-gray-600">
            At Peaceful At Home LLC, we are dedicated to delivering compassionate, professional, and personalized in-home care. Our team is committed to enhancing the lives of our clients by fostering independence, dignity, and emotional well-being.
          </p>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/who.jpeg"
            alt="Our compassionate caregiving team"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="max-w-5xl mx-auto mt-24 text-center"
        style={{ fontFamily: 'var(--font-sf-pro)' }}>
        <h2 className="text-3xl font-bold text-[#083b66] mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-10">
          To provide high-quality, compassionate care that empowers individuals to live with comfort and confidence in their own homes.
        </p>
        <h2 className="text-3xl font-bold text-[#083b66] mb-4">Our Vision</h2>
        <p className="text-gray-600">
          To be the most trusted and respected provider of in-home care services, known for integrity, empathy, and excellence.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto mt-24"
        style={{ fontFamily: 'var(--font-sf-pro)' }}>
        <h2 className="text-3xl font-bold text-center text-[#083b66] mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Compassion', desc: 'We treat every individual with genuine empathy and kindness.' },
            { title: 'Integrity', desc: 'We uphold honesty and transparency in everything we do.' },
            { title: 'Respect', desc: 'We value the dignity and preferences of each person we serve.' },
            { title: 'Excellence', desc: 'We strive for the highest standards in care and professionalism.' },
            { title: 'Trust', desc: 'We build meaningful relationships grounded in reliability.' },
            { title: 'Dedication', desc: 'Our caregivers are committed to going above and beyond every day.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#083b66] mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        {/* Call to Action */}
              <div className="max-w-4xl mx-auto mt-16 bg-[#f5f5ff] p-8 rounded-xl text-center shadow px-4">
                <h3 className="text-2xl font-bold text-[#083b66] mb-4">
                  Ready to get started?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact us today to schedule a consultation and learn how we can help your family feel safe and supported.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#229CDD] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
                >
                  Contact Us
                </Link>
              </div>
      </section>
    </main>
  )
}
