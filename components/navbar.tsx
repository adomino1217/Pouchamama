"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { totalItems } = useCart()
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/shop", label: t.nav.shop },
    { href: "/meal-plan", label: t.nav.mealPlan },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: "rgba(193,59,10,0.97)", borderColor: "rgba(245,194,0,0.3)" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 relative flex-shrink-0">
              <Image src="/logo.png" alt="Pouchamama logo" fill sizes="56px" className="object-contain" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-wide" style={{ color: "#f5c200" }}>POUCHAMAMA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-medium transition-opacity text-sm opacity-75 hover:opacity-100"
                style={{ color: "#F7F2E4" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/shop" className="relative">
              <Button variant="ghost" size="icon" className="rounded-full" style={{ color: "#F7F2E4" }}>
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#f5c200", color: "#1c2b12" }}>
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <button
              className="md:hidden p-2"
              style={{ color: "#F7F2E4" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: "rgba(245,194,0,0.3)" }}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display font-medium transition-opacity py-2 opacity-75 hover:opacity-100"
                  style={{ color: "#F7F2E4" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
