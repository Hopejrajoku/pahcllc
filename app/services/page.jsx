'use client'

import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Companionship Care",
      description:
        "Providing emotional support and meaningful interaction to reduce loneliness and improve well-being.",
    },
    {
      title: "Personal Care Assistance",
      description:
        "Helping with bathing, dressing, grooming, and hygiene in a respectful and dignified way.",
    },
    {
      title: "Meal Preparation",
      description:
        "Nutritious and personalized meal planning and cooking tailored to dietary needs and preferences.",
    },
    {
      title: "Medication Reminders",
      description:
        "Ensuring timely reminders for medication, vitamins, and health supplements for improved health.",
    },
    {
      title: "Light Housekeeping",
      description:
        "Assistance with household chores like laundry, vacuuming, dishwashing, and organization.",
    },
    {
      title: "Transportation",
      description:
        "Safe transportation to appointments, errands, grocery shopping, or social outings.",
    },
  ];

  return (
    <section
      className="relative w-full text-white py-12"
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001f5f]/3\20 backdrop-brightness-50"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Our In-Home Care Services
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300">
          We offer a wide range of personalized services designed to support
          your loved ones with dignity, comfort, and compassion in the place
          they feel most at ease—home.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-2 text-white">
                {service.title}
              </h2>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
