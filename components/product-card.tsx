"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { toPEN } from "@/lib/products"
import { useLanguage } from "@/lib/language-context"
import { ingredientNames } from "@/lib/i18n"

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
  heroSize?: boolean
}

// Products that have real photos — graphic card for everything else
const PHOTO_PRODUCTS = new Set(["1", "2", "3", "7", "8", "9", "10", "11"])

// Graphic card color themes for products without photos
const cardThemes: Record<string, { bg: string; text: string; accent: string; sub: string; shape: string }> = {
  "2": { bg: "#8B1A0A", text: "#FFE8D6", accent: "#F5C200", sub: "rgba(255,232,214,0.55)", shape: "rgba(245,194,0,0.1)" },
  "3": { bg: "#C4890A", text: "#1C2B12", accent: "#1C2B12", sub: "rgba(28,43,18,0.55)",   shape: "rgba(28,43,18,0.07)" },
  "4": { bg: "#3D1C0A", text: "#FFE4CC", accent: "#F5C200", sub: "rgba(255,228,204,0.55)", shape: "rgba(245,194,0,0.08)" },
  "11": { bg: "#5C2E00", text: "#FDECC8", accent: "#F5C200", sub: "rgba(253,236,200,0.55)", shape: "rgba(245,194,0,0.09)" },
  "12": { bg: "#8B1A0A", text: "#FFE8D6", accent: "#F5C200", sub: "rgba(255,232,214,0.55)", shape: "rgba(245,194,0,0.1)" },
  "13": { bg: "#6B1060", text: "#FFE8F8", accent: "#F5C200", sub: "rgba(255,232,248,0.55)", shape: "rgba(245,194,0,0.1)" },
}

const fallbackTheme = { bg: "#0d3320", text: "#F7F2E4", accent: "#F5C200", sub: "rgba(247,242,228,0.55)", shape: "rgba(245,194,0,0.08)" }

const blobs = [
  <svg key="b1" viewBox="0 0 400 400" fill="currentColor" className="absolute -top-16 -right-16 w-64 h-64 opacity-100"><circle cx="200" cy="200" r="200" /></svg>,
  <svg key="b2" viewBox="0 0 300 500" fill="currentColor" className="absolute -bottom-20 -left-10 w-40 h-64 opacity-100"><ellipse cx="150" cy="250" rx="150" ry="250" /></svg>,
  <svg key="b3" viewBox="0 0 400 400" fill="currentColor" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-100"><circle cx="200" cy="200" r="200" /></svg>,
  <svg key="b4" viewBox="0 0 300 300" fill="currentColor" className="absolute -top-10 -left-10 w-56 h-56 opacity-100"><circle cx="0" cy="0" r="300" /></svg>,
  <svg key="b5" viewBox="0 0 300 300" fill="currentColor" className="absolute -bottom-10 -right-10 w-56 h-56 opacity-100"><circle cx="300" cy="300" r="300" /></svg>,
]

export function ProductCard({ product, onViewDetails, heroSize = false }: ProductCardProps) {
  const { t, language } = useLanguage()
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(1) // default to 45g
  const hasPhoto = PHOTO_PRODUCTS.has(product.id)
  const hasSizes = product.sizes && product.sizes.length > 0
  const activeSize = hasSizes ? product.sizes![selectedSizeIdx] : null

  const displayPrice = activeSize ? activeSize.price : product.price
  const displayPEN = activeSize ? activeSize.pricePEN : product.pricePEN
  const displayCalories = activeSize ? activeSize.calories : product.calories

  const ingNames = product.ingredients?.map(i => (ingredientNames[language] as Record<string, string>)[i.name] ?? i.name).slice(0, 3) || []
  const categoryLabel = product.category === "vegan" ? t.product.categoryVegan : product.category === "vegetarian" ? t.product.categoryVegetarian : t.product.categoryHighProtein
  const aspectRatio = heroSize ? "3/4" : "4/5"

  const SizePicker = ({ textColor, activeTextColor, activeBg }: { textColor: string; activeTextColor: string; activeBg: string }) => (
    <div className="flex gap-1 mb-2" onClick={e => e.stopPropagation()}>
      {product.sizes!.map((s, i) => (
        <button
          key={s.weight}
          onClick={() => setSelectedSizeIdx(i)}
          className="font-display font-bold text-xs px-2 py-0.5 transition-all"
          style={{
            borderRadius: "2px",
            border: `1px solid ${selectedSizeIdx === i ? activeBg : textColor}`,
            backgroundColor: selectedSizeIdx === i ? activeBg : "transparent",
            color: selectedSizeIdx === i ? activeTextColor : textColor,
            opacity: selectedSizeIdx === i ? 1 : 0.6,
          }}
        >
          {s.weight}
        </button>
      ))}
    </div>
  )

  // ── PHOTO CARD ──────────────────────────────────────────────────────────
  if (hasPhoto) {
    return (
      <div
        className="group cursor-pointer overflow-hidden w-full relative"
        style={{ borderRadius: "6px", aspectRatio }}
        onClick={() => onViewDetails(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={heroSize ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 30vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,6,0.88) 0%, rgba(10,10,6,0.35) 45%, transparent 75%)" }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-display font-bold text-xs tracking-widest px-3 py-1" style={{ backgroundColor: "#f5c200", color: "#1c2b12", borderRadius: "2px" }}>
            {categoryLabel}
          </span>
        </div>

        {/* Calories */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-display font-bold text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
            {displayCalories} kcal
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
          <h3 className="font-display font-bold leading-tight mb-1" style={{ fontSize: heroSize ? "clamp(1.5rem, 3vw, 2.2rem)" : "1.2rem", color: "#ffffff", letterSpacing: "-0.01em" }}>
            {product.name}
          </h3>
          {ingNames.length > 0 && (
            <p className="font-display text-xs mb-2 tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>
              {ingNames.join(" · ")}
            </p>
          )}
          {hasSizes && (
            <SizePicker textColor="rgba(255,255,255,0.7)" activeTextColor="#1c2b12" activeBg="#f5c200" />
          )}
          <div className="flex items-center justify-between mt-1">
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold" style={{ fontSize: heroSize ? "1.8rem" : "1.4rem", color: "#f5c200" }}>
                ${displayPrice.toFixed(2)}
              </span>
              <span className="font-display font-semibold" style={{ fontSize: heroSize ? "0.9rem" : "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                {toPEN(displayPEN)}
              </span>
            </div>
            <span
              className="font-display font-bold text-xs tracking-widest px-4 py-2 opacity-70 group-hover:opacity-100 transition-opacity"
              style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff", borderRadius: "2px" }}
            >
              {t.product.view}
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ── GRAPHIC CARD (no photo) ──────────────────────────────────────────────
  const theme = cardThemes[product.id] || fallbackTheme
  const blobIdx = (parseInt(product.id) - 1) % blobs.length

  return (
    <div
      className="group cursor-pointer overflow-hidden w-full relative flex flex-col"
      style={{ backgroundColor: theme.bg, borderRadius: "6px", aspectRatio }}
      onClick={() => onViewDetails(product)}
    >
      <div style={{ color: theme.shape, position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {blobs[blobIdx]}
      </div>

      <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
        <div className="flex items-start justify-between mb-auto">
          <span className="font-display font-bold text-xs tracking-widest px-2 py-1" style={{ backgroundColor: theme.accent, color: "#1c2b12", borderRadius: "2px", opacity: 0.95 }}>
            {categoryLabel}
          </span>
          <span className="font-display font-bold text-xs" style={{ color: theme.sub }}>
            {displayCalories} kcal
          </span>
        </div>

        <div className="flex-1" />

        <h3 className="font-display font-bold leading-[0.9] mb-3 group-hover:opacity-90 transition-opacity" style={{ fontSize: heroSize ? "clamp(2rem, 4vw, 3.2rem)" : "clamp(1.4rem, 2.5vw, 2rem)", color: theme.text, letterSpacing: "-0.02em" }}>
          {product.name}
        </h3>

        {ingNames.length > 0 && (
          <p className="font-display text-xs mb-3 tracking-wide" style={{ color: theme.sub }}>
            {ingNames.join(" · ")}
          </p>
        )}

        {hasSizes && (
          <SizePicker textColor={theme.text} activeTextColor="#1c2b12" activeBg={theme.accent} />
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold" style={{ fontSize: heroSize ? "2rem" : "1.5rem", color: theme.accent === theme.text ? theme.text : theme.accent }}>
              ${displayPrice.toFixed(2)}
            </span>
            <span className="font-display font-semibold" style={{ fontSize: heroSize ? "0.9rem" : "0.75rem", color: theme.sub }}>
              {toPEN(displayPEN)}
            </span>
          </div>
          <span
            className="font-display font-bold text-xs tracking-widest px-4 py-2 transition-all group-hover:opacity-100 opacity-60"
            style={{ border: `1px solid ${theme.text}`, color: theme.text, borderRadius: "2px" }}
          >
            {t.product.view}
          </span>
        </div>
      </div>
    </div>
  )
}
