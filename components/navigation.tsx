"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "BOOK NOW", href: "#booking" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-sassy-pink/50 via-sassy-lavender/50 to-sassy-mint/50 backdrop-blur-md shadow-lg animate-holographic bg-[length:400%_400%]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Character + Logo Text */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 chibi-hover">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sass-ccfILkBwcZMv5rR63BIDSsG6aSTLTx.png"
              alt="The Sassy Aesthetician mascot"
              width={50}
              height={65}
              className="w-10 md:w-12 animate-gentle-bounce"
              style={{ height: "auto" }}
              priority
            />
            <Image
              src="/assets/sass-text-one-line.png"
              alt="The Sassy Aesthetician"
              width={280}
              height={100}
              className="hidden sm:block w-56 md:w-72"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-sassy-charcoal transition-all duration-300 hover:bg-gradient-to-r hover:from-sassy-pink/60 hover:to-sassy-lavender/60 hover:text-sassy-charcoal hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/30 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-sassy-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-sassy-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-sassy-pink/60 via-sassy-lavender/60 to-sassy-mint/60 backdrop-blur-md shadow-lg border-t border-white/30 animate-holographic bg-[length:400%_400%]">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-sm font-semibold text-sassy-charcoal text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-sassy-pink/60 hover:to-sassy-lavender/60 hover:text-sassy-charcoal hover:shadow-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
