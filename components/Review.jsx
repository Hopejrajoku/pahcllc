'use client'

import { useState } from 'react'
import Image from 'next/image'

const reviews = [
  {
    name: "Sarah Thompson",
    photo: "/reviews/sarah.jpg",
    review: "Absolutely amazing care. Peaceful At Home has changed my mom's life.",
    location: "Atlanta, GA",
  },
  {
    name: "James Carter",
    photo: "/reviews/james.jpg",
    review: "Professional, compassionate, and always on time. Highly recommend.",
    location: "Houston, TX",
  },
  {
    name: "Emily Johnson",
    photo: "/reviews/emily.jpg",
    review: "We felt peace of mind knowing our dad was in good hands.",
    location: "Newark, NJ",
  },
  {
    name: "Michael Lee",
    photo: "/reviews/michael.jpg",
    review: "Exceptional support and personal attention to every detail.",
    location: "Phoenix, AZ",
  },
  {
    name: "Linda Evans",
    photo: "/reviews/linda.jpg",
    review: "They go above and beyond to ensure comfort and safety.",
    location: "Sacramento, CA",
  },
  {
    name: "Daniel Moore",
    photo: "/reviews/daniel.jpg",
    review: "Reliable and kind caregivers—what else can you ask for?",
    location: "Dallas, TX",
  },
  {
    name: "Jessica Adams",
    photo: "/reviews/jessica.jpg",
    review: "Great communication and truly dedicated staff.",
    location: "Tampa, FL",
  },
  {
    name: "Robert Green",
    photo: "/reviews/robert.jpg",
    review: "From day one, they treated my mother like family.",
    location: "Charlotte, NC",
  },
  {
    name: "Angela White",
    photo: "/reviews/angela.jpg",
    review: "Couldn't be more satisfied with their services!",
    location: "Portland, OR",
  },
  {
    name: "Jason Hill",
    photo: "/reviews/jason.jpg",
    review: "Peaceful At Home lives up to its name. Calm and caring.",
    location: "Cleveland, OH",
  },
  {
    name: "Monica Bailey",
    photo: "/reviews/monica.jpg",
    review: "They work with compassion and professionalism.",
    location: "Denver, CO",
  },
  {
    name: "Kevin Scott",
    photo: "/reviews/kevin.jpg",
    review: "Made our caregiving journey so much easier.",
    location: "Chicago, IL",
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
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#083b66]">
                <Image
                  src={current.photo}
                  alt={`Photo of ${current.name}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-lg italic text-gray-700">"{current.review}"</p>
              <p className="text-[#083b66] font-semibold">
                – {current.name}, <span className="text-gray-500">{current.location}</span>
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                aria-label="Previous Review"
                className="bg-[#4C4CDB] text-white px-4 py-2 rounded"
              >
                ← Prev
              </button>
              <button
                onClick={next}
                aria-label="Next Review"
                className="bg-[#4C4CDB] text-white px-4 py-2 rounded"
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
