"use client"

import Image from "next/image"
import { Sparkles, Zap, Target } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Ditch the razor, babe. My laser treatments are gentle, fast, and actually work — silky smooth, zero drama.",
    gradient: "from-sassy-pink/40 to-sassy-lavender/40",
  },
  {
    icon: Sparkles,
    title: "Skin Treatments",
    description: "Facials, peels, and glow treatments I custom-mix for your skin. You will leave looking like you have a filter on IRL.",
    gradient: "from-sassy-lavender/40 to-sassy-cyan/40",
  },
  {
    icon: Target,
    title: "Microneedling",
    description: "Tiny needles, major payoff. I will boost your collagen, smooth your texture, and have your skin looking stupid good.",
    gradient: "from-sassy-cyan/40 to-sassy-mint/40",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative z-0 py-36 md:py-48 bg-gradient-to-b from-sassy-pink/15 to-sassy-lavender/20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-sassy-heading mb-4" style={{ fontSize: 'var(--text-section)', lineHeight: 1.15 }}>
            The Glow-Up Menu
          </h2>
          <p className="font-body font-medium text-sassy-charcoal/85 max-w-[55ch] mx-auto text-balance leading-relaxed" style={{ fontSize: 'var(--text-body-lg)' }}>
            Three ways to level up your skin game. Pick your fighter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/50 soft-shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-sassy-pink" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-sassy-heading mb-3" style={{ fontSize: 'var(--text-card)', lineHeight: 1.2 }}>
                {service.title}
              </h3>
              <p className="font-body font-medium text-sassy-charcoal/85 leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
                {service.description}
              </p>

              {/* Hover shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}

          {/* Chibi Character Peeking */}
          <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 overflow-hidden translate-x-1/2 w-24 chibi-hover">
            <Image
              src="/hero/sass.png"
              alt="Sassy character peeking"
              width={200}
              height={260}
              className="w-40 drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
