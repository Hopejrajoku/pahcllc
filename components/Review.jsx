'use client'

import { useState } from 'react'

const reviews = [
  {
    name: "Sarah Thompson",
    review: "Absolutely amazing care. Peaceful At Home has changed my mom's life.",
    location: "Atlanta, Georgia, USA",
  },
  {
    name: "James Carter",
    review: "Professional, compassionate, and always on time. Highly recommend.",
    location: "Savannah, Georgia, USA",
  },
  {
    name: "Emily Johnson",
    review: "We felt peace of mind knowing our dad was in good hands.",
    location: "Augusta, Georgia, USA",
  },
  {
    name: "Michael Lee",
    review: "Exceptional support and personal attention to every detail.",
    location: "Columbus, Georgia, USA",
  },
  {
    name: "Linda Evans",
    review: "They go above and beyond to ensure comfort and safety.",
    location: "Macon, Georgia, USA",
  },
  {
    name: "Daniel Moore",
    review: "Reliable and kind caregivers—what else can you ask for?",
    location: "Roswell, Georgia, USA",
  },
  {
    name: "Jessica Adams",
    review: "Great communication and truly dedicated staff.",
    location: "Alpharetta, Georgia, USA",
  },
  {
    name: "Robert Green",
    review: "From day one, they treated my mother like family.",
    location: "Marietta, Georgia, USA",
  },
  {
    name: "Angela White",
    review: "Couldn't be more satisfied with their services!",
    location: "Athens, Georgia, USA",
  },
  {
    name: "Jason Hill",
    review: "Peaceful At Home lives up to its name. Calm and caring.",
    location: "Sandy Springs, Georgia, USA",
  },
  {
    name: "Monica Bailey",
    review: "They work with compassion and professionalism.",
    location: "Peachtree City, Georgia, USA",
  },
  {
    name: "Kevin Scott",
    review: "Made our caregiving journey so much easier.",
    location: "Johns Creek, Georgia, USA",
  },
]


export default function ReviewPage() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const current = reviews[index]

  return (
    <main className="bg-[#f9fafb] text-gray-800 py-16 px-4 md:px-8 font-sans"
      style={{ fontFamily: 'var(--font-sf-pro)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#083b66] mb-8">
          What Our Clients Say
        </h1>
        <p className="text-gray-600 mb-12">
          Take a moment to explore the genuine stories and heartfelt testimonials shared by our valued clients, each reflecting the care, dedication, and life-changing support they've experienced with Peaceful At Home.
        </p>

        {current && (
          <div className="relative">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center gap-4">
              <p className="text-lg italic text-gray-700">"{current.review}"</p>
              <p className="text-[#083b66] font-semibold">
                – {current.name}, <span className="text-gray-500">{current.location}</span>
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                aria-label="Previous Review"
                className="bg-[#229CDD] text-white px-4 py-2 rounded"
              >
                ← Prev
              </button>
              <button
                onClick={next}
                aria-label="Next Review"
                className="bg-[#229CDD] text-white px-4 py-2 rounded"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
