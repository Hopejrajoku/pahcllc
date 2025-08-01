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
      className="max-w-6xl mx-auto py-30 px-4 md:px-6"
      style={{ fontFamily: "var(--font-sf-pro)" }}
    >
      {/* Header image */}
      <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/hero.jpg" // ⬅️ Place your image in /public and use actual path
          alt="Our Services"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#083b66]">
        Our Services
      </h1>

      {/* Services grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
