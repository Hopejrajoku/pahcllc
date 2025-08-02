'use client'

import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      className="relative w-full text-white"
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
        <div className="absolute inset-0 bg-[#001f5f]/10 backdrop-brightness-70"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-28 md:py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Who We Are
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-md text-lg text-gray-100 space-y-6 leading-relaxed">
          <p>
            At <strong>Peaceful At Home LLC</strong>, we believe that every individual deserves the right to age gracefully and comfortably in the environment they call home. Our mission is to provide compassionate, dependable, and personalized care that enhances the quality of life of our clients and brings peace of mind to their families.
          </p>

          <p>
            Founded on the principles of dignity, respect, and integrity, we are more than just caregivers — we are trusted companions, dedicated listeners, and heartfelt advocates for those in need. From daily living assistance to emotional companionship, we tailor every service to match your lifestyle, preferences, and needs.
          </p>

          <p>
            Our team is comprised of trained professionals who are passionate about making a difference. Every member of our staff is carefully screened, highly trained, and selected for their kindness and empathy as much as for their skill and experience.
          </p>

          <p>
            At Peaceful At Home LLC, we don't just provide care — we build relationships, foster independence, and help our clients thrive in the comfort and security of their homes.
          </p>
        </div>
      </div>
    </section>
  );
}
