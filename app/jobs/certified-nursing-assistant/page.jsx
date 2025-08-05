'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

export default function CertifiedNursingAssistantPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    experience: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Application submitted successfully!')
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            location: '',
            availability: '',
            experience: ''
          })
        },
        () => {
          setStatus('Something went wrong. Please try again later.')
        }
      )
  }

  return (
    <main className="min-h-screen bg-[#F2F5FF] py-60 px-4 md:px-8" style={{ fontFamily: 'var(--font-sf-pro)' }}>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-[#083b66] mb-6 text-center">
          Join Us as a Certified Nursing Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          We're hiring compassionate, dedicated CNAs to provide quality in-home care.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-3 rounded-md border border-gray-300 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 rounded-md border border-gray-300 w-full"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Your Location (City, State)"
            className="p-3 rounded-md border border-gray-300 w-full"
          />
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Availability (e.g., Weekdays, Weekends)"
            className="p-3 rounded-md border border-gray-300 w-full"
          />
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us briefly about your experience"
            rows={4}
            className="p-3 rounded-md border border-gray-300 w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-[#229CDD] hover:bg-[#003380] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
          >
            Submit Application
          </button>

          {status && <p className="text-center mt-4 text-sm text-green-700">{status}</p>}
        </form>
      </div>
      {/* New Section: Start Your Caregiving Journey With Us */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 mt-16 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-[#083b66] mb-10">
          Make a Difference Every Day
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Join our team of compassionate caregivers who are dedicated to improving lives.
          Whether you're just starting or have years of experience, we offer a supportive environment
          to grow your caregiving career.
        </p>
        <div className="flex justify-center">
          <Link
            href="/caregiver"
            className="bg-[#229CDD] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
          >
            See what we offer
          </Link>
        </div>
      </section>

    </main>
  )
}
