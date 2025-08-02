'use client'

import Image from "next/image"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Peaceful At Home LLC provide?",
      answer:
        "We offer personalized in-home care including companionship, personal care, medication reminders, meal preparation, and light housekeeping.",
    },
    {
      question: "Are your caregivers certified?",
      answer:
        "Yes, all our caregivers are professionally trained, certified, and undergo background checks.",
    },
    {
      question: "Is in-home care available 24/7?",
      answer:
        "Yes, we offer flexible care plans ranging from a few hours a day to 24/7 live-in care.",
    },
    {
      question: "How do I get started with your service?",
      answer:
        "You can contact us via phone or fill out the contact form on our website. We’ll schedule a free consultation to understand your needs.",
    },
    {
      question: "Can I choose my caregiver?",
      answer:
        "Absolutely. We match caregivers based on your preferences and allow you to approve the selected caregiver.",
    },
  ]

  return (
    <section className="relative w-full py-30" style={{ fontFamily: 'var(--font-sf-pro)' }}>
      {/* Full Page Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/faq.jpeg"
          alt="FAQ Background"
          fill
          className="object-cover saturation-50 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Page Content */}
      <div className="text-white py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Get answers to common questions about our in-home care services.
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
    </section>
  )
}
