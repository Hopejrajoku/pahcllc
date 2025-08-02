'use client';

import Image from "next/image";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [showPopper, setShowPopper] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setShowPopper(true);
        setTimeout(() => setShowPopper(false), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="relative" style={{ fontFamily: 'var(--font-sf-pro)' }}>
      {/* Full-width BG Image Banner */}
      <div className="relative w-full h-72 md:h-[400px] mt-28">
        <Image
          src="/contact.webp"
          alt="Contact Us"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Have a question, need assistance, or want to share feedback? Please fill out the form below, and our team will get back to you promptly.
          </p>
        </div>
      </div>

      {/* Confetti Popper (🎉) */}
      {showPopper && (
        <div className="fixed top-10 right-10 text-5xl animate-bounce">🎉</div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-[#083b66]">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b66] transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-[#083b66]">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b66] transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-[#083b66]">Your Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#083b66] transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#4C4CDB] text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
            >
              Send Message
            </button>
            {status && (
              <p className={`font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-blue-600'}`}>
                {status}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-[#083b66] mb-1">Call Us</h2>
              <p className="text-gray-700 ml-6">+1 (706) 691-3959</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#083b66] mb-1">Email</h2>
              <p className="text-gray-700 ml-6">peacefulathomellc@gmail.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#083b66] mb-1">Hours</h2>
              <p className="text-gray-700 ml-6">Mon–Fri: 9:00 AM – 5:00 PM</p>
              <p className="text-gray-700 ml-6">Sat–Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
