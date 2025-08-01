'use client'

import Image from "next/image"
import { MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section
      className="max-w-5xl mx-auto py-30 px-4 md:px-6"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/hero.jpg" // Replace with your actual image in /public/
          alt="Contact Us"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#083b66] mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions, feedback, or need help? We’d love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#4C4CDB] text-white px-6 py-3 rounded hover:bg-[#001f5f] transition"
          >
            Send Message
          </button>
          {status && <p className="text-green-600">{status}</p>}
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <MapPin size={16} className="inline-block mr-2 text-[#083b66]" />
            <h2 className="text-xl font-semibold text-[#083b66]">Our Location</h2>
            <p className="text-gray-600">Peaceful At Home LLC</p>
            <p className="text-gray-600">Georgia, USA</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#083b66]">Call Us</h2>
            <p className="text-gray-600">+1 (706) 691-3959</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#083b66]">Email</h2>
            <p className="text-gray-600">info@peacefulathome.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#083b66]">Hours</h2>
            <p className="text-gray-600">Mon–Fri: 9:00 AM – 5:00 PM</p>
            <p className="text-gray-600">Sat–Sun: Closed </p>
          </div>
        </div>
      </div>
    </section>
  )
}
