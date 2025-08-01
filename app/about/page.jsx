'use client'

import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      className="max-w-5xl mx-auto py-30 px-4 md:px-6"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Image section */}
      <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/hero.jpg" // Replace with your about page image
          alt="Who We Are"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#083b66]">
        Who We Are
      </h1>

      {/* About Text */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
    </section>
  );
}
