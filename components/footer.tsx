"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/sassyaesthetician", label: "Instagram" },
  { icon: MapPin, href: "https://maps.app.goo.gl/HgubqyFtrVTHAcbf9", label: "Google Maps" },
  { icon: Mail, href: "mailto:hi@thesassyaesthetician.com", label: "Email" },
]

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book Now", href: "#booking" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sassy-pink/40 via-sassy-lavender/30 to-sassy-cyan/40 animate-holographic">
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sassy-mint/20 via-transparent to-sassy-pink/20 pointer-events-none" />
      
      {/* Sparkle dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-sparkle" />
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Chibi Peeking from Bottom */}
      <div className="absolute bottom-0 left-4 sm:left-8 lg:left-16 chibi-hover hidden sm:block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sass-ccfILkBwcZMv5rR63BIDSsG6aSTLTx.png"
          alt="Sassy character waving goodbye"
          width={120}
          height={160}
          className="w-20 md:w-24 opacity-90 translate-y-1/3"
          style={{ height: "auto" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:items-baseline md:gap-3">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-sassy-charcoal" style={{ fontSize: 'var(--text-card)' }}>
                The Sassy Aesthetician
              </span>
            </Link>
            <span className="hidden md:inline text-sassy-charcoal/30">|</span>
            <p className="font-body text-sassy-charcoal/85 text-center" style={{ fontSize: 'var(--text-sm)' }}>
              Cute vibes. Real results. Always sassy.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-col items-center gap-5 md:flex-row md:gap-8">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-sassy-charcoal/90 hover:text-sassy-charcoal transition-colors hover:underline decoration-sassy-pink decoration-2 underline-offset-4" style={{ fontSize: 'var(--text-sm)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-sassy-charcoal/70 hover:bg-gradient-to-r hover:from-sassy-pink hover:to-sassy-lavender hover:text-sassy-charcoal transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sassy-charcoal/10 mt-6 pt-6">
          <p className="font-body text-sassy-charcoal/65 text-center text-balance" style={{ fontSize: 'var(--text-sm)' }}>
            {new Date().getFullYear()} The Sassy Aesthetician. All rights reserved. Stay sassy.
          </p>
        </div>
      </div>
    </footer>
  )
}
