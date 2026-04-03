"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Mountain, Sparkles, Recycle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { products, type Product } from "@/lib/products"
import { useLanguage } from "@/lib/language-context"

const featureIcons = [Leaf, Sparkles, Mountain, Recycle, Heart]

export default function HomePage() {
  const { t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const featuredProducts = [
    products.find(p => p.id === "1")!,
    products.find(p => p.id === "8")!,
    products.find(p => p.id === "2")!,
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#C13B0A" }}>

      {/* ─── HERO ─── Full viewport, burnt orange throughout */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
        style={{ backgroundColor: "#C13B0A" }}
      >
        {/* Logo — white outline filter traces the mountain + spiral against the orange */}
        <div
          className="mb-2"
          style={{
            width: "min(420px, 67.5vw)",
            aspectRatio: "569/400",
            position: "relative",
            filter:
              "drop-shadow(1px 0 0 rgba(255,255,255,0.75)) " +
              "drop-shadow(-1px 0 0 rgba(255,255,255,0.75)) " +
              "drop-shadow(0 1px 0 rgba(255,255,255,0.75)) " +
              "drop-shadow(0 -1px 0 rgba(255,255,255,0.75)) " +
              "drop-shadow(0 0 2px rgba(255,255,255,0.3))",
          }}
        >
          <Image src="/logo.png" alt="Pouchamama" fill sizes="420px" className="object-contain" />
        </div>

        <p className="font-display font-bold tracking-[0.35em] text-xs md:text-sm mb-8" style={{ color: "#f5c200" }}>
          POUCHAMAMA
        </p>

        <h1
          className="font-display font-bold leading-[0.92] mb-8"
          style={{
            fontSize: "clamp(2.25rem, 6.75vw, 5.25rem)",
            color: "#F7F2E4",
            letterSpacing: "-0.02em",
            maxWidth: "900px",
          }}
        >
          {t.home.heroLine1}<br />
          {t.home.heroLine2}<br />
          <span style={{ color: "#f5c200" }}>{t.home.heroLine3}</span>
        </h1>

        <p
          className="mb-10 leading-relaxed max-w-md"
          style={{ color: "rgba(247,242,228,0.75)", fontSize: "1.05rem" }}
        >
          {t.home.heroSub}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="font-display font-bold px-10 text-base"
            style={{ backgroundColor: "#f5c200", color: "#1c2b12", borderRadius: "3px" }}>
            <Link href="/shop">{t.home.shopBtn}</Link>
          </Button>
          <Link
            href="/meal-plan"
            className="font-display font-bold px-10 text-base inline-flex items-center justify-center h-11"
            style={{ border: "2px solid rgba(247,242,228,0.5)", color: "#F7F2E4", borderRadius: "3px", textDecoration: "none", outline: "none", background: "transparent", boxShadow: "none" }}
          >
            {t.home.mealPlanBtn}
          </Link>
        </div>

      </section>

      {/* Gold rule */}
      <div className="h-[3px]" style={{ backgroundColor: "#f5c200" }} />

      {/* ─── FEATURES STRIP ─── */}
      <section className="py-12 px-6" style={{ backgroundColor: "#9e2f08" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {t.home.features.map((f, i) => {
            const Icon = featureIcons[i]
            return (
              <div key={i} className="text-center">
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: "#f5c200" }} strokeWidth={1.5} />
                <h3 className="font-display font-bold text-sm" style={{ color: "#F7F2E4" }}>{f.title}</h3>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "rgba(247,242,228,0.6)" }}>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Gold rule */}
      <div className="h-[3px]" style={{ backgroundColor: "#f5c200" }} />

      {/* ─── FEATURED MEALS ─── Terracotta + editorial layout */}
      <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#C13B0A" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header — editorial, left-aligned, big */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-display font-bold text-xs tracking-[0.35em] mb-4" style={{ color: "#f5c200" }}>
                {t.home.featuredLabel}
              </p>
              <h2
                className="font-display font-bold leading-[0.88]"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: "#F7F2E4", letterSpacing: "-0.02em" }}
              >
                {t.home.featuredLine1}<br />
                <span style={{ color: "#f5c200" }}>{t.home.featuredLine2}</span>
              </h2>
            </div>
            <Button asChild size="lg" className="font-display font-bold px-10 self-start md:self-auto flex-shrink-0"
              style={{ backgroundColor: "#f5c200", color: "#1c2b12", borderRadius: "3px" }}>
              <Link href="/shop">{t.home.viewAll}</Link>
            </Button>
          </div>

          {/* Cards — first card is hero-sized, next two are stacked */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
            {/* Hero card — spans 3 cols */}
            <div className="md:col-span-3">
              <ProductCard product={featuredProducts[0]} onViewDetails={handleViewDetails} heroSize />
            </div>
            {/* Two smaller cards — span 2 cols, stacked */}
            <div className="md:col-span-2 grid grid-cols-1 gap-4 md:gap-5">
              <ProductCard product={featuredProducts[1]} onViewDetails={handleViewDetails} />
              <ProductCard product={featuredProducts[2]} onViewDetails={handleViewDetails} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-14 px-6" style={{ backgroundColor: "#120f0a" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0" style={{ width: "80px", aspectRatio: "569/400" }}>
              <Image src="/logo.png" alt="Pouchamama" fill sizes="80px" className="object-contain" />
            </div>
            <span className="font-display font-bold tracking-[0.25em] text-sm" style={{ color: "#f5c200" }}>
              POUCHAMAMA
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop" },
              { href: "/meal-plan", label: "Meal Plan" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="font-display text-sm transition-opacity hover:opacity-100 opacity-50"
                style={{ color: "#F7F2E4" }}>
                {label}
              </Link>
            ))}
          </nav>

          <p className="font-display text-xs opacity-30" style={{ color: "#F7F2E4" }}>
            © 2025 Pouchamama
          </p>
        </div>
      </footer>

      <ProductModal product={selectedProduct} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
