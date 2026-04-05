"use client"

import Image from "next/image"
import { FloatingElements } from "./floating-elements"
import { Calendar, Instagram, MessageCircle } from "lucide-react"

export function BookingSection() {
  return (
    <section id="booking" className="relative z-0 py-36 md:py-48 overflow-clip">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sassy-pink via-sassy-lavender to-sassy-mint animate-holographic bg-[length:400%_400%]" />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Floating Elements */}
      <FloatingElements variant="cta" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="font-display font-bold mb-6 text-balance bg-gradient-to-r from-sassy-heading via-sassy-pink to-sassy-heading bg-clip-text text-transparent" style={{ fontSize: 'var(--text-hero)', lineHeight: 1.1 }}>
          OK But When Are You Booking?
        </h2>
        <p className="font-body font-medium text-sassy-charcoal/90 max-w-[55ch] mx-auto mb-10 text-balance leading-relaxed" style={{ fontSize: 'var(--text-body-lg)' }}>
          Your skin is literally begging. Book directly in my calendar or slide into my DMs — either way, I am making you look unreal.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Primary CTA */}
          <a
            href="mailto:hi@thesassyaesthetician.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-sassy-charcoal bg-gradient-to-r from-sassy-pink via-sassy-lavender to-sassy-mint transition-all duration-300 hover:scale-105 glow-pink shadow-lg uppercase tracking-wide" style={{ fontSize: 'var(--text-body-lg)' }}
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </a>

          {/* Secondary CTA */}
          <a
            href="https://www.instagram.com/sassyaesthetician"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-secondary inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-sassy-charcoal transition-all duration-300 hover:scale-105 glow-pink shadow-lg uppercase tracking-wide" style={{ fontSize: 'var(--text-body-lg)' }}
          >
            <Instagram className="w-5 h-5" />
            DM on Instagram
          </a>
        </div>

        {/* Quick Contact */}
        <div className="flex items-center justify-center gap-2 text-sassy-charcoal/85">
          <MessageCircle className="w-5 h-5" />
          <span className="font-body" style={{ fontSize: 'var(--text-body)' }}>Not sure what you need? Just ask me — no question is too extra.</span>
        </div>

        {/* Chibi Character */}
        <div className="relative mt-12 chibi-hover">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sass-ccfILkBwcZMv5rR63BIDSsG6aSTLTx.png"
            alt="Sassy character inviting you to book"
            width={280}
            height={360}
            className="mx-auto w-48 md:w-56 drop-shadow-2xl animate-gentle-bounce"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  )
}
