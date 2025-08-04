'use client'

import { useEffect, useRef } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function ContactMarquee() {
  const marqueeRef = useRef(null)
  const x = useRef(0)
  const speed = 0.5 // pixels per frame

  useEffect(() => {
    const marquee = marqueeRef.current
    let frameId

    const scroll = () => {
      x.current -= speed
      if (marquee) {
        marquee.style.transform = `translateX(${x.current}px)`
        if (Math.abs(x.current) >= marquee.scrollWidth / 2) {
          x.current = 0
        }
      }
      frameId = requestAnimationFrame(scroll)
    }

    frameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(frameId)
  }, [])

  const repeatedContent = (
    <>
      <span className="flex items-center gap-2 mx-8">
        <Phone size={18} /> +1 (706) 691-3959
      </span>
      <span className="flex items-center gap-2 mx-8">
        <Mail size={18} /> peacefulathomellc@gmail.com
      </span>
    </>
  )

  return (
    <div
      className="w-full overflow-hidden bg-[#229CDD] text-white py-5 fixed top-0 z-50"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      <div className="relative w-full h-full">
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap absolute top-1/2 -translate-y-1/2 will-change-transform"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              {repeatedContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
