'use client'

import Link from 'next/link'

export default function JobApplicationSection() {
  return (
    <section className="bg-[#F2F5FF] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#083b66] mb-4">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We're looking for compassionate Certified Nursing Assistants (CNAs) to provide quality in-home care. If you're dedicated, kind, and want to make a difference, apply now!
        </p>

        <Link href="/jobs/certified-nursing-assistant">
          <button className="bg-[#229CDD] hover:bg-[#003380] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
            Apply as a Caregiver
          </button>
        </Link>
      </div>
    </section>
  )
}
