"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const testimonials = [
  {
    name: "Jessica M.",
    text: "Literally the best decision I ever made! My skin has never looked better and the whole experience was so fun and welcoming.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "Finally found someone who gets it! Professional service with personality. The laser sessions were quick and actually enjoyable.",
    rating: 5,
  },
  {
    name: "Ashley T.",
    text: "The vibe here is immaculate. I always leave feeling like a whole new person. 10/10 recommend to everyone!",
    rating: 5,
  },
  {
    name: "Morgan R.",
    text: "I was nervous about microneedling but she made me feel so comfortable. Amazing results and zero awkwardness!",
    rating: 5,
  },
  {
    name: "Taylor B.",
    text: "This place is everything. Great energy, amazing results, and I actually look forward to my appointments now!",
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
    <section id="reviews" className="relative py-20 md:py-32 bg-gradient-to-b from-sassy-pink/10 to-sassy-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sassy-charcoal mb-4">
            The Hype Is Real
          </h2>
          <p className="font-body text-lg text-sassy-charcoal/70 max-w-2xl mx-auto">
            Don&apos;t just take my word for it — hear it from the girlies.
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
                <p className="font-body text-sassy-charcoal/80 leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Name */}
                <p className="font-display font-semibold text-sassy-charcoal">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
