'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const services = {
  'companion-care': {
    title: 'Companion Care',
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-center text-left text-gray-200">
        {/* Image Left */}
        <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/compar.jpg"
            alt="Companion Care"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Comprehensive, Compassionate In-Home Care</h2>
          <p className="mb-4">
            Peaceful At Home LLC offers exceptional in-home and senior care services throughout Georgia, USA.
            Our focus extends beyond basic care—we bring comfort and peace of mind to families and their loved ones.
            If you or someone you care for needs home assistance, our team delivers compassionate, professional support tailored to your unique needs.
          </p>
          <p className="mb-4">
            At Peaceful At Home LLC, we listen with intent and build lasting relationships with every client and family we serve.
          </p>

          <h3 className="text-xl font-semibold mb-2">Helping Maintain Your Independence</h3>
          <p className="mb-4">
            Needing a bit of support shouldn’t mean giving up your independence.
            Our companion care services are designed to preserve freedom while enhancing quality of life.
            From sharing conversations and preparing meals to light housekeeping and errands, we meet our clients where they are—with care and respect.
          </p>

          <h3 className="text-xl font-semibold mb-2">Our Companion Care Services Include:</h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Regular Visits, Conversation & Company:</strong> We’re here to brighten your day through conversation, shared meals, and emotional connection.</li>
            <li><strong>Medication Reminders:</strong> While we don’t administer medication, we can offer timely reminders and monitor for any issues.</li>
            <li><strong>Meal Preparation:</strong> Healthy, comforting meals prepared and cleaned up by our caregivers help maintain good nutrition and spirits.</li>
            <li><strong>Light Housekeeping:</strong> From vacuuming and dusting to trash removal, we help maintain a clean, cozy space.</li>
            <li><strong>Transportation & Errands:</strong> Whether shopping for favorite items or getting to appointments, we help you stay active and engaged.</li>
            <li><strong>Recreational Activities:</strong> From painting classes to playing cards or attending community events, we make life more enjoyable.</li>
          </ul>

          <p>
            Peaceful At Home LLC is proud to offer trusted companion care services to those in the Augusta area and across the CSRA.
            Contact us today to discover how we can support your loved one while helping them stay confident in their own home.
          </p>
        </div>
      </div>
    ),
  },

  'personal-care': {
    title: 'Personal Care',
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-center text-left text-gray-200">
        {/* Image Left */}
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/personal.jpg"
            alt="Personal Care"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Use Our Personal Care Service</h2>
          <p className="mb-4">
            At Savannah River ProHome Care, we pride ourselves on providing our patients with the best in-home care and senior care in the Augusta area.
            If you or someone you love could benefit from personalized care in the comfort of their own home, give us a call.
          </p>

          <h3 className="text-xl font-semibold mb-2">Maintain your Dignity with our personal care services</h3>
          <p className="mb-4">
            Our team of specially trained professionals offer peace of mind as well as assistance with personal care.
            Savannah River ProHome Care allows patients to maintain their dignity and independence while providing peace of mind and comfort.
          </p>

          <h3 className="text-xl font-semibold mb-2">Personal Care Services:</h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Bathing and Grooming:</strong> Maintaining good hygiene is essential for health and self-confidence. Our caregivers assist respectfully with daily hygiene routines.</li>
            <li><strong>Incontinence:</strong> We handle incontinence care with sensitivity, compassion, and professionalism to help patients feel comfortable and safe.</li>
            <li><strong>Special Diets and Meals:</strong> We assist with meal planning and prep based on dietary needs—diabetic, low-sodium, or favorite home dishes.</li>
            <li><strong>Walking and Mobility:</strong> Our caregivers provide gentle movement support to encourage physical activity and independence.</li>
            <li><strong>Eating Assistance:</strong> For those needing help during meals, our team ensures safe, comfortable eating to maintain nutrition and dignity.</li>
          </ul>

          <p>
            If you or someone you love is in need of personal in-home care, contact the professional caregivers at Savannah River ProHome Care to learn more about how we can help provide peace of mind for you and your family.
          </p>
        </div>
      </div>
    ),
  },

  'dementia-care': {
    title: 'Dementia Care',
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-center text-left text-gray-200">
        {/* Image Left */}
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden">
          <Image
            src="/demen.jpg"
            alt="Dementia Care"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Personalized, In-Home Dementia Care</h2>
          <p className="mb-4">
            For patients living with dementia or Alzheimer’s, staying at home in a familiar setting provides comfort and stability.
            Savannah River ProHome Care offers a compassionate, engaging approach to dementia care focused on safety, routine, and emotional support.
          </p>

          <p className="mb-4">
            We believe consistency is key. Our caregivers form meaningful bonds with patients and establish familiar routines to help reduce confusion and provide structure.
            Each plan is tailored to individual needs, ensuring peace of mind for both patients and their families.
          </p>

          <h3 className="text-xl font-semibold mb-2">What Makes Our Dementia Care Unique</h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Customized Care Plans:</strong> Built around each patient’s cognitive abilities, habits, and comfort levels.</li>
            <li><strong>Consistent Caregivers:</strong> Minimize confusion and build trust by having familiar faces every day.</li>
            <li><strong>Emotional & Cognitive Support:</strong> Activities like puzzles and sensory play to stimulate the mind and lift spirits.</li>
            <li><strong>Family-Focused Approach:</strong> We help families navigate the journey together with communication and compassion.</li>
          </ul>

          <p>
            Caring for a loved one with dementia can be emotionally draining. Let us be your support system. Contact Peaceful At Home LLC today to learn more about our specialized dementia and Alzheimer’s care services across Augusta and the CSRA.
          </p>
        </div>
      </div>
    ),
  },
};

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <section
      className="relative w-full text-white py-40 min-h-screen"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services.jpeg"
          alt="Service Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#001f5f]/60 backdrop-brightness-50" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          {service.title}
        </h1>
        <div className="text-lg">{service.content}</div>

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
