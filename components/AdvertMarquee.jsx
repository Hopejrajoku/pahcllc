'use client'

import { useEffect, useRef } from 'react'
import { Megaphone } from 'lucide-react'

export default function AdvertMarquee() {
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
    <span className="flex items-center gap-2 mx-8 text-black text-[28px] md:text-[35px] font-bold">
      <Megaphone size={20} className="text-yellow-500" />
      Now Hiring: Certified Nursing Assistants – Apply Today!
    </span>
  )

  return (
    <div
      className="w-full overflow-hidden bg-white py-4"
      style={{ fontFamily: 'var(--font-sf-pro)' }}
    >
      <div className="relative w-full h-full">
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center">
              {repeatedContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
