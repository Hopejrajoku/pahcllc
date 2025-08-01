import Image from "next/image";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Peaceful At Home LLC provide?",
      answer: "We offer personalized in-home care including companionship, personal care, medication reminders, meal preparation, and light housekeeping.",
    },
    {
      question: "Are your caregivers certified?",
      answer: "Yes, all our caregivers are professionally trained, certified, and undergo background checks.",
    },
    {
      question: "Is in-home care available 24/7?",
      answer: "Yes, we offer flexible care plans ranging from a few hours a day to 24/7 live-in care.",
    },
    {
      question: "How do I get started with your service?",
      answer: "You can contact us via phone or fill out the contact form on our website. We’ll schedule a free consultation to understand your needs.",
    },
    {
      question: "Can I choose my caregiver?",
      answer: "Absolutely. We match caregivers based on your preferences and allow you to approve the selected caregiver.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-30 px-4 md:px-6"
      style={{ fontFamily: 'var(--font-sf-pro)' }}>
      {/* Image section */}
      <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/hero.jpg" // ⬅️ Replace this with your actual image in `/public/`
          alt="Frequently Asked Questions"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#083b66]">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
