"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      className="relative w-full text-white py-30"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.jpeg" // Replace with your actual image
          alt="Who We Are"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#001f5f]/30 backdrop-brightness-70"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-28 md:py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Who We Are
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-md text-lg text-gray-100 space-y-6 leading-relaxed">
          <p>
            At <strong>Peaceful At Home LLC</strong>, we believe every individual deserves the opportunity to age with dignity, surrounded by the comforts of their own home and the warmth of compassionate caregivers. We are committed to offering comprehensive, personalized home care solutions that adapt to the evolving needs of our clients while maintaining the highest standards of professionalism and empathy.
          </p>

          <p>
            Our journey began with a simple yet powerful vision: to redefine what it means to receive care at home by creating a nurturing environment where clients feel valued, respected, and supported at every stage of their lives. Today, that vision drives everything we do, inspiring our caregivers to go above and beyond in delivering services that truly make a difference.
          </p>

          <p>
            From helping with daily routines and mobility support to providing emotional companionship and specialized care plans, we approach each client’s situation uniquely, recognizing that no two people — or their stories — are the same. We build deep, trusting relationships with our clients and their families, working together to ensure peace of mind and the best possible outcomes.
          </p>

          <p>
            Our caregivers aren’t just employees — they are an extension of your family, offering unwavering dedication and heartfelt compassion. Every team member is rigorously vetted, thoroughly trained, and chosen for their passion for caring as well as their expertise, ensuring the highest level of safety and comfort for our clients.
          </p>

          <p>
            At Peaceful At Home LLC, we go beyond traditional care. We empower our clients to live fulfilling lives, maintain independence, and continue enjoying their favorite activities in the familiar setting of home.
          </p>
        </div>

        {/* Additional Section: Our Values */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-md text-lg text-gray-100 space-y-6 leading-relaxed mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Values
          </h2>

          <p>
            <strong>Compassion:</strong> We treat every client with the kindness and respect they deserve, recognizing the unique circumstances of each individual we serve.
          </p>

          <p>
            <strong>Integrity:</strong> Honesty, transparency, and ethical practices are the foundation of every interaction with our clients and their families.
          </p>

          <p>
            <strong>Excellence:</strong> We strive for continuous improvement and excellence in all aspects of our care, ensuring our clients receive the best possible support.
          </p>

          <p>
            <strong>Respect:</strong> We honor the preferences, cultures, and traditions of our clients, embracing diversity and promoting inclusivity in our care plans.
          </p>

          <p>
            These values guide our team every day, helping us fulfill our mission of making a meaningful difference in the lives of those we care for.
          </p>
        </div>
      </div>
    </section>
  );
}
