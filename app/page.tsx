import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CloudDivider } from "@/components/cloud-divider"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Wavy Divider: Lavender to Mint */}
      <CloudDivider fromColor="#C4B5FD" toColor="#A7F3D0" />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Wavy Divider: Mint to Pink */}
      <CloudDivider fromColor="#A7F3D0" toColor="#F9A8D4" />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Booking / CTA Section */}
      <BookingSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
