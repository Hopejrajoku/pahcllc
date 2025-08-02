'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  HeartHandshake,
  UserCircle2,
  Home,
  ArrowRightCircle,
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
      "Our caregivers provide companionship, conversation, and emotional support, helping reduce isolation and loneliness.",
  },
  {
    title: "Personal Care",
    slug: "personal-care",
    content:
      "We assist with personal hygiene, grooming, bathing, dressing, and mobility, promoting dignity and independence.",
  },
  {
    title: "Dementia Care",
    slug: "dementia-care",
    content:
      "Our team supports light housekeeping, laundry, meal preparation, and more to keep your home comfortable and clean.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      className="relative w-full text-white py-50"
      style={{ fontFamily: "var(--font-sf-pro)" }}
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
          We provide a comprehensive range of personalized services to support your loved ones with comfort, compassion, and dignity—right in the comfort of home.
        </p>

        {/* Featured Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative w-full text-left flex flex-col items-start bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer"
            >
              {icons[service.title]}

              <h2 className="text-[25px] font-bold text-white group-hover:underline">
                {service.title}
              </h2>

              <div className="absolute bottom-6 right-2 flex items-center gap-1">
                <ArrowRightCircle className="text-white w-8 h-8"
                 />
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

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-40 bg-[#f5f5ff] p-8 rounded-xl text-center shadow px-4">
          <h3 className="text-2xl font-bold text-[#083b66] mb-4">
            Ready to get started?
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
      </div>
    </section>
  );
}
