"use client"

import Image from "next/image"
import { FloatingElements } from "./floating-elements"

export function HeroSection() {
  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center overflow-clip">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={(e) => {
            const video = e.currentTarget
            video.currentTime = video.duration
            video.pause()
          }}
        >
          <source src="/hero/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sassy-pink/20" />
      </div>

      {/* Floating Elements */}
      <FloatingElements variant="hero" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col items-center">
          {/* Logo Lockup — text + character stacked like the brand mark */}
          <div className="relative flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            {/* "The Sassy" text — top layer */}
            <div className="relative z-10 w-[85%] animate-float" style={{ animationDelay: "0s" }}>
              <Image
                src="/hero/sass-the-sassy-text.png"
                alt="The Sassy"
                width={400}
                height={120}
                className="w-full drop-shadow-lg"
                style={{ height: "auto" }}
                priority
              />
            </div>

            {/* Chibi Character — center, overlapping both text layers */}
            <div className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 animate-float chibi-hover" style={{ animationDelay: "0.5s" }}>
              <Image
                src="/hero/sass.png"
                alt="Sassy Aesthetician character"
                width={350}
                height={450}
                className="w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-2xl"
                style={{ height: "auto" }}
                priority
              />
            </div>

            {/* "Aesthetician" text — bottom layer, tucked under character */}
            <div className="relative z-10 w-full -mt-14 sm:-mt-20 md:-mt-24 animate-float" style={{ animationDelay: "1s" }}>
              <Image
                src="/hero/sass-aesthetician-text.png"
                alt="Aesthetician"
                width={450}
                height={100}
                className="w-full drop-shadow-lg"
                style={{ height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* Subheadline */}
          <p className="mt-6 lg:mt-8 font-body text-sassy-charcoal/90 max-w-[50ch] text-center text-balance leading-relaxed" style={{ fontSize: 'var(--text-body-lg)' }}>
            Your fave aesthetician with the cutest vibe. I do laser, skin, and glow-ups — boring spa energy need not apply.
          </p>

          {/* CTA Button */}
          <a
            href="#booking"
            className="mt-6 lg:mt-8 inline-flex items-center px-8 py-4 rounded-full font-display font-bold text-sassy-charcoal bg-gradient-to-r from-sassy-pink via-sassy-lavender to-sassy-mint transition-transform duration-300 hover:scale-105 glow-pink shadow-lg uppercase tracking-wide" style={{ fontSize: 'var(--text-body-lg)' }}
          >
            Book Your Glow-Up
          </a>
        </div>
      </div>
    </section>
  )
}
