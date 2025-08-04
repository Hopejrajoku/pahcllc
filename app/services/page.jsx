'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  HeartHandshake,
  UserCircle2,
  Home,
  ArrowRightCircle,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';

const icons = {
  "Companion Care": <HeartHandshake size={32} className="text-white mb-4" />,
  "Personal Care": <UserCircle2 size={32} className="text-white mb-4" />,
  "Dementia Care": <Home size={32} className="text-white mb-4" />,
};

const featuredServices = [
  {
    title: "Companion Care",
    slug: "companion-care",
    content:
      "Our companion care service goes beyond simply spending time with your loved one. We focus on building genuine connections that reduce feelings of isolation and promote emotional well-being. Whether it’s playing games, chatting over tea, accompanying clients on walks, or helping with daily routines, our caregivers provide uplifting presence and dependable friendship—because every heart needs company.",
  },
  {
    title: "Personal Care",
    slug: "personal-care",
    content:
      "Our respectful and compassionate personal care services support daily activities such as bathing, grooming, dressing, and mobility. We maintain our clients’ dignity and independence by tailoring assistance to individual preferences and comfort levels. Whether temporary recovery or ongoing care is needed, we help our clients look and feel their best while staying safe at home.",
  },
  {
    title: "Dementia Care",
    slug: "dementia-care",
    content:
      "Dementia care requires patience, understanding, and skill. Our team is trained to support individuals with memory loss, confusion, and cognitive changes. We provide structured routines, gentle communication, and a calm environment to reduce stress and improve quality of life. From reminders to light housekeeping and meal preparation, we create a secure and familiar home for those navigating Alzheimer’s or related conditions.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      className="relative w-full text-white py-50"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services.jpeg"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#001f5f]/40 backdrop-brightness-50" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Our In-Home Care Services
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300">
          Whether your loved one needs a few hours a week or full-time assistance, our team is here to provide consistent, personalized support. At Peaceful At Home LLC, we tailor care plans to each individual’s health, habits, and values.
        </p>

        {/* Featured Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setSelectedService(service)}
              className="group relative w-full text-left flex flex-col items-start bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer"
            >
              {icons[service.title]}
              <h2 className="text-[22px] font-bold text-white group-hover:underline">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-gray-200 line-clamp-4">
                {service.content}
              </p>
              <div className="absolute bottom-6 right-2 flex items-center gap-1">
                <ArrowRightCircle className="text-white w-8 h-8" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </div>
            </Link>
          ))}
        </div>

        {/* Selected Service Content */}
        {selectedService && (
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur border border-white/20 text-white max-w-3xl mx-auto text-center transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-lg text-gray-200">{selectedService.content}</p>
          </div>
        )}

        {/* Why Families Trust Us */}
        <div className="mt-32 max-w-5xl mx-auto px-4 py-16 bg-white/5 backdrop-blur-sm rounded-xl text-center border border-white/10">
          <div className="flex flex-col items-center justify-center mb-6">
            <ThumbsUp className="w-12 h-12 text-yellow-300 mb-2" />
            <h3 className="text-3xl font-bold mb-4">Why Families Choose Us</h3>
          </div>
          <p className="text-gray-200 text-lg mb-4">
            At Peaceful At Home LLC, we understand that inviting a caregiver into your home is an act of trust. That’s why we uphold the highest standards of professionalism, empathy, and accountability. Our clients value our transparency, timely communication, and unwavering commitment to comfort and security.
          </p>
          <p className="text-gray-300 text-md">
            Every plan is crafted with your input, preferences, and goals in mind—because we believe great care begins with listening.
          </p>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-24 bg-[#f5f5ff] p-8 rounded-xl text-center shadow px-4">
          <h3 className="text-2xl font-bold text-[#083b66] mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-700 mb-6">
            Reach out today for a free consultation and discover how our care team can improve your loved one’s quality of life—right from home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#229CDD] hover:bg-[#001f5f] text-white px-6 py-3 rounded transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
