"use client"

import Image from "next/image"
import { FloatingElements } from "./floating-elements"

export function AboutSection() {
  return (
    <section id="about" className="relative z-0 py-36 md:py-48 bg-gradient-to-b from-sassy-lavender/20 via-sassy-mint/10 to-sassy-pink/10 overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Holographic border frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sassy-pink via-sassy-lavender to-sassy-mint p-1 animate-holographic bg-[length:400%_400%]">
                <div className="w-full h-full rounded-3xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8090.PNG-oO7EKX9CVhzfjs2NJlQklA0eCPX51o.jpeg"
                    alt="The Sassy Aesthetician logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <svg viewBox="0 0 24 24" fill="#E8B4F8" className="w-full h-full animate-sparkle">
                  <path d="M12 2L13.09 8.26L19 7L14.74 11.26L21 14L14.74 12.91L19 19L12.74 14.74L12 22L11.26 14.74L5 19L9.26 12.91L3 14L9.26 11.26L5 7L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-display font-bold text-sassy-heading mb-6" style={{ fontSize: 'var(--text-section)', lineHeight: 1.15 }}>
              Meet The Aesthetician
            </h2>

            <div className="space-y-4 font-body font-medium text-sassy-charcoal/90 leading-relaxed max-w-[60ch]" style={{ fontSize: 'var(--text-body-lg)' }}>
              <p>
                Hey, I am Sass. I do skincare that is actually fun — no sterile spa silence, no judgment, no boring small talk about the weather.
              </p>
              <p>
                I have spent years perfecting my craft so you do not have to guess what works. I will tell you straight up what your skin needs, get you glowing, and keep the energy good the whole time.
              </p>
              <p>
                Whether you are done with shaving forever, need a skin reset, or just want to feel like that girl — I got you.
              </p>
            </div>

            {/* Fun stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: "5+", label: "Years Experience" },
                // { number: "100+", label: "Happy Clients" },
                { number: "100%", label: "Sass Guaranteed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm">
                  <div className="font-display font-bold bg-gradient-to-r from-sassy-pink to-sassy-lavender bg-clip-text text-transparent" style={{ fontSize: 'var(--text-card)', lineHeight: 1.2 }}>
                    {stat.number}
                  </div>
                  <div className="font-body text-sassy-charcoal/75 mt-1" style={{ fontSize: 'var(--text-sm)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
