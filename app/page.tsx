import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WavyDivider } from "@/components/wavy-divider"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Wavy Divider: Pink to Lavender */}
      <WavyDivider fromColor="#F9A8D4" toColor="#C4B5FD" />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Wavy Divider: Lavender to Mint */}
      <WavyDivider fromColor="#C4B5FD" toColor="#A7F3D0" />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Wavy Divider: Mint to Pink */}
      <WavyDivider fromColor="#A7F3D0" toColor="#F9A8D4" />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Wavy Divider: Pink to Lavender */}
      <WavyDivider fromColor="#F9A8D4" toColor="#C4B5FD" />
      
      {/* Booking / CTA Section */}
      <BookingSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
