'use client'

import Image from "next/image"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Peaceful At Home LLC provide?",
      answer:
        "We offer a wide range of personalized in-home care services tailored to each client’s needs. These include companionship to alleviate loneliness, personal care such as bathing and grooming, medication reminders to maintain proper routines, nutritious meal preparation, light housekeeping to keep your home safe and clean, and support with mobility and physical activities. We also provide respite care for family caregivers needing a break, and post-hospitalization support to aid in recovery.",
    },
    {
      question: "Are your caregivers certified?",
      answer:
        "Yes, all our caregivers are thoroughly vetted, professionally trained, and certified in accordance with state regulations. They undergo comprehensive background checks, reference verifications, and are continuously trained in best practices for elder care, first aid, dementia care, and emergency protocols. We prioritize empathy, patience, and professionalism in every member of our caregiving team.",
    },
    {
      question: "Is in-home care available 24/7?",
      answer:
        "Absolutely. We understand that care needs vary across individuals and situations. That’s why we offer fully flexible care plans — whether you need just a few hours of assistance during the day, overnight support, or 24/7 live-in care, we’re here to help. Our team works with you to design a schedule that aligns with your lifestyle and comfort.",
    },
    {
      question: "How do I get started with your service?",
      answer:
        "Getting started is simple. You can call our office or fill out the quick contact form on our website. From there, one of our care coordinators will schedule a no-obligation, in-home consultation at your convenience. During this visit, we’ll discuss your specific needs, goals, and preferences, and begin creating a care plan tailored just for you or your loved one.",
    },
    {
      question: "Can I choose my caregiver?",
      answer:
        "Yes, we believe that the caregiver-client relationship is personal and meaningful. We consider personality compatibility, language, care needs, and other preferences during our matching process. After proposing a caregiver, we offer you the opportunity to meet them and confirm if they’re the right fit before care begins. We also provide the flexibility to request a change at any time.",
    },
  ]

  return (
    <section className="relative w-full py-30" style={{ fontFamily: 'var(--font-sf-pro)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/faq.jpeg"
          alt="FAQ Background"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* FAQ Content */}
      <div className="text-white py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Find detailed answers to your most pressing questions about our services, process, and care philosophy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 text-gray-900 border border-gray-200 rounded-xl shadow-md p-6 backdrop-blur-md"
            >
              <h2 className="text-xl font-semibold text-[#083b66] mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-800 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-10 bg-[#001f5f] text-white py-24 px-4 md:px-6 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Peaceful At Home LLC?</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            We are more than caregivers — we are trusted partners in your journey to a safer, more comfortable life at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">Compassionate Team</h3>
            <p>
              Our staff members are handpicked not only for their qualifications but for their kindness, empathy, and dedication to making a real difference.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">Tailored Care Plans</h3>
            <p>
              Every client receives a personalized plan built around their specific needs, preferences, and medical requirements — reviewed regularly for adjustments.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">Transparent Communication</h3>
            <p>
              We maintain open lines of communication with clients and their families to ensure peace of mind and consistent updates on care delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
