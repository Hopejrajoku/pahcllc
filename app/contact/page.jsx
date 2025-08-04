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
      {/* Banner Image */}
      <div className="relative w-full h-72 md:h-[400px] mt-28">
        <Image
          src="/contact.webp"
          alt="Contact Us"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Reach Out to Us</h1>
          <p className="max-w-2xl text-lg text-gray-100">
            We're here to listen, assist, and provide clarity. Whether you're looking for care options, partnership opportunities, or general inquiries — we’re just a message away.
          </p>
        </div>
      </div>

      {/* Confetti 🎉 */}
      {showPopper && (
        <div className="fixed top-10 right-10 text-5xl animate-bounce">🎉</div>
      )}

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          {/* Form */}
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

          {/* Info Section */}
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
              <h2 className="text-xl font-semibold text-[#083b66] mb-1">Working Hours</h2>
              <p className="text-gray-700 ml-6">Mon–Fri: 9:00 AM – 5:00 PM</p>
              <p className="text-gray-700 ml-6">Sat–Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Additional Section: Why Contact Us */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#083b66] mb-4">Why Contact Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re considering our in-home care services, looking to explore partnership opportunities, or simply have a question, our team is always available to provide the information you need. We value transparency, compassion, and responsive support — and you can expect nothing less from us.
          </p>
        </div>

        {/* Additional Section: Our Promise */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#083b66] mb-4">Our Promise to You</h2>
          <p className="text-gray-700 leading-relaxed">
            When you reach out, you're not just sending a message — you’re starting a conversation with a team that genuinely cares. We promise timely responses, attentive listening, and a commitment to addressing your needs with the utmost care and professionalism. Let’s build a better tomorrow together.
          </p>
        </div>
      </div>
    </section>
  );
}
