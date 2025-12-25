"use client"

import Image from "next/image"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 mb-4">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-display font-bold text-lg text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="font-display font-bold text-xl text-primary">${product.price.toFixed(2)}</span>
            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
              {product.calories} cal
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full rounded-full font-display border-line-green text-line-green hover:bg-leaf-green/20 bg-transparent"
            onClick={() => onViewDetails(product)}
          >
            View ingredients & macros
          </Button>
        </div>
      </div>
    </div>
  )
}
