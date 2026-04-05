"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Ci Mat",
    text: "Sas is an exceptional aesthetician! I'm in love with her work. I'll never stop going to see her and appreciate that she offers mobile services now! Her personality matched with her professionalism makes my visits well worthwhile.",
    rating: 5,
  },
  {
    name: "Lillian T.",
    text: "Sass is such an amazing Aesthetician! She is so thorough, informative, professional and kind. Intimate services like laser and facials usually make me nervous, but I was at such ease with her. Her services are worth every penny and more!",
    rating: 5,
  },
  {
    name: "GP",
    text: "I went to the Sassy Aesthetician in mid July and my skin is still so happy with the \"ultimate\" facial I got. The aesthetician was really knowledgeable and walked me through the benefits of each product and the treatment.",
    rating: 5,
  },
  {
    name: "Milandeep B.",
    text: "She's so knowledgeable and good at what she does. I haven't even been seeing her 6 months and my skin is so smooth from laser and the ingrowns are nearly gone! I would recommend her to anyone.",
    rating: 5,
  },
  {
    name: "Bri",
    text: "I was nervous to get laser but the sassy aesthetician is so knowledgeable, thorough and transparent. The space is cute and I felt comfortable from the moment she greeted me. Can't wait for my next session!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="reviews" className="relative z-0 py-36 md:py-48 bg-gradient-to-b from-sassy-pink/10 to-sassy-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-sassy-heading mb-4" style={{ fontSize: 'var(--text-section)', lineHeight: 1.15 }}>
            The Hype Is Real
          </h2>
          <p className="font-body font-medium text-sassy-charcoal/85 max-w-[55ch] mx-auto leading-relaxed" style={{ fontSize: 'var(--text-body-lg)' }}>
            Do not just take my word for it — hear it from the girlies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-sassy-charcoal hover:bg-white transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-sassy-charcoal hover:bg-white transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 soft-shadow snap-center"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Heart
                      key={i}
                      className="w-5 h-5 fill-sassy-pink text-sassy-pink"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body font-medium text-sassy-charcoal/90 leading-relaxed mb-4" style={{ fontSize: 'var(--text-body)' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Name */}
                <p className="font-display font-semibold text-sassy-charcoal" style={{ fontSize: 'var(--text-body)' }}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/HgubqyFtrVTHAcbf9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold tracking-wide uppercase text-sassy-charcoal transition-all duration-300 hover:scale-105 glow-pink shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
