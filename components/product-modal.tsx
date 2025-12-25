"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { PeruMap } from "@/components/peru-map"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setCurrentPage(0)
      if (e.key === "ArrowRight") setCurrentPage(1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    onClose()
  }

  // Daily recommended values (for mountain activity)
  const dailyNeeds = { calories: 3000, protein: 120, carbs: 400, fat: 100 }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted/30 shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-1">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {currentPage === 0 ? (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-primary">Ingredient Origins</h3>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Peru Map */}
                <div className="flex-1">
                  <PeruMap ingredients={product.ingredients} />
                </div>

                {/* Legend */}
                <div className="md:w-48">
                  <h4 className="font-display font-semibold text-sm text-foreground mb-3">Sourced From</h4>
                  <ul className="space-y-2">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span
                          className="w-3 h-3 rounded-full shrink-0 mt-1"
                          style={{
                            backgroundColor: ["#4E6627", "#6C8B37", "#A7C26F", "#F7C646"][idx % 4],
                          }}
                        />
                        <div>
                          <span className="font-medium text-foreground">{ing.name}</span>
                          <span className="text-muted-foreground"> — {ing.region}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-primary">Nutrition & Macros</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Calories",
                    value: product.calories,
                    daily: dailyNeeds.calories,
                    unit: "cal",
                    color: "#4E6627",
                  },
                  { label: "Protein", value: product.protein, daily: dailyNeeds.protein, unit: "g", color: "#6C8B37" },
                  { label: "Carbs", value: product.carbs, daily: dailyNeeds.carbs, unit: "g", color: "#A7C26F" },
                  { label: "Fat", value: product.fat, daily: dailyNeeds.fat, unit: "g", color: "#F7C646" },
                ].map((macro) => {
                  const percentage = Math.round((macro.value / macro.daily) * 100)
                  return (
                    <div key={macro.label} className="bg-muted/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-semibold text-foreground">{macro.label}</span>
                        <span className="font-bold text-lg" style={{ color: macro.color }}>
                          {macro.value}
                          {macro.unit}
                        </span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${Math.min(percentage, 100)}%`,
                            backgroundColor: macro.color,
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">{percentage}% of daily needs</span>
                    </div>
                  )
                })}
              </div>

              <p className="text-xs text-muted-foreground italic bg-warm-beige/30 p-3 rounded-xl">
                Daily needs vary by activity level; built for mountain days with higher caloric demands.
              </p>

              {product.allergens.length > 0 && (
                <div className="pt-2">
                  <span className="text-sm font-medium text-foreground">Allergens: </span>
                  <span className="text-sm text-muted-foreground">{product.allergens.join(", ")}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-border bg-muted/20">
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage(0)}
                disabled={currentPage === 0}
                className="p-2 rounded-full bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-display text-sm text-muted-foreground">{currentPage + 1} / 2</span>
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="rounded-full font-display bg-primary hover:bg-forest-green px-6"
            >
              Add to Cart — ${product.price.toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
