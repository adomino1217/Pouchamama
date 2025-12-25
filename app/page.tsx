"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Mountain, Sparkles, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { products, type Product } from "@/lib/products"

const features = [
  {
    icon: Leaf,
    title: "Farm-Direct Ingredients",
    description: "Sourced from Peruvian farmers.",
  },
  {
    icon: Sparkles,
    title: "Freeze-Dried for Real Flavor",
    description: "Whole food, zero preservatives.",
  },
  {
    icon: Mountain,
    title: "Designed for Adventure",
    description: "Built for hikers and trekkers.",
  },
  {
    icon: Recycle,
    title: "Sustainably Packaged",
    description: "Give back to Earth with biodegradable packaging.",
  },
]

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const featuredProducts = products.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-leaf-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sun-yellow/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-primary flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 40 40" className="w-14 h-14 md:w-20 md:h-20 text-primary-foreground">
                <path
                  fill="currentColor"
                  d="M20 5 L35 15 L35 30 L20 35 L5 30 L5 15 Z M20 10 L12 15 L12 25 L20 30 L28 25 L28 15 Z"
                />
                <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-primary tracking-wider mb-6">
            FOOD FROM THE MOUNTAINS,
            <br />
            FOR THE MOUNTAINS.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Farm-direct Peruvian ingredients, freeze-dried to lock in flavor and nutrition. Real food for real
            adventures — no preservatives, just nature.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full font-display text-lg px-8 bg-primary hover:bg-forest-green"
            >
              <Link href="/shop">Shop Meals</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-display text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/meal-plan">Design Your Meal Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center p-4 md:p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-leaf-green/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-line-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-4">Featured Meals</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Handcrafted recipes inspired by Peruvian tradition, optimized for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-display border-2 border-line-green text-line-green hover:bg-leaf-green/20 bg-transparent"
            >
              <Link href="/shop">View All Meals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="py-16 px-4 bg-warm-beige/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-xl md:text-2xl text-foreground italic mb-6">
            "Playful, nutritious, and bizarrely compelling."
          </blockquote>
          <p className="text-muted-foreground font-display">— Trail Magazine</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-primary-foreground">
                  <path
                    fill="currentColor"
                    d="M20 5 L35 15 L35 30 L20 35 L5 30 L5 15 Z M20 10 L12 15 L12 25 L20 30 L28 25 L28 15 Z"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-primary">POUCHAMAMA</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="/meal-plan" className="text-muted-foreground hover:text-primary transition-colors">
                Meal Plan
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <p className="text-xs text-muted-foreground">© 2025 Pouchamama. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
