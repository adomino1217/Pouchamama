"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { toPEN } from "@/lib/products"

const WHATSAPP_NUMBER = "12035367236"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, totalPricePEN } = useCart()
  const { language } = useLanguage()
  const showPEN = language === "es"

  const handleWhatsAppCheckout = () => {
    const lines = items.map(
      (item) => `• ${item.name} x${item.quantity} — ${showPEN ? toPEN(item.pricePEN * item.quantity) : `$${(item.price * item.quantity).toFixed(2)}`}`
    )
    const total = showPEN ? toPEN(totalPricePEN) : `$${totalPrice.toFixed(2)}`
    const message = [
      "Hi! I'd like to place an order for pickup in Huaraz:",
      "",
      ...lines,
      "",
      `Total: ${total}`,
    ].join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: "#f5f0e8" }}>
        <ShoppingBag className="w-16 h-16 mb-6 opacity-30" style={{ color: "#0d3320" }} />
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-3" style={{ color: "#0d3320" }}>
          Your cart is empty
        </h1>
        <p className="text-muted-foreground mb-8">Add some meals or snacks from the shop.</p>
        <Button asChild size="lg" className="font-display font-bold px-10 rounded-full"
          style={{ backgroundColor: "#0d3320", color: "#F7F2E4" }}>
          <Link href="/shop">Browse the Shop</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/shop" className="opacity-50 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-5 h-5" style={{ color: "#0d3320" }} />
          </Link>
          <h1 className="font-display font-bold text-2xl md:text-3xl" style={{ color: "#0d3320" }}>
            Your Cart
            <span className="ml-3 text-base font-semibold opacity-50">({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          </h1>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-2xl p-4"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(13,51,32,0.1)" }}
            >
              {/* Photo */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Name + price */}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-base leading-tight truncate" style={{ color: "#0d3320" }}>
                  {item.name}
                </p>
                <p className="font-display text-sm mt-1 opacity-60" style={{ color: "#0d3320" }}>
                  {showPEN ? toPEN(item.pricePEN) : `$${item.price.toFixed(2)}`} each
                </p>
              </div>

              {/* Quantity stepper */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ backgroundColor: "rgba(13,51,32,0.1)" }}
                >
                  <Minus className="w-3 h-3" style={{ color: "#0d3320" }} />
                </button>
                <span className="font-display font-bold w-6 text-center" style={{ color: "#0d3320" }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ backgroundColor: "rgba(13,51,32,0.1)" }}
                >
                  <Plus className="w-3 h-3" style={{ color: "#0d3320" }} />
                </button>
              </div>

              {/* Line total */}
              <div className="text-right flex-shrink-0 w-20">
                <p className="font-display font-bold" style={{ color: "#0d3320" }}>
                  {showPEN
                    ? toPEN(item.pricePEN * item.quantity)
                    : `$${(item.price * item.quantity).toFixed(2)}`}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="ml-1 opacity-30 hover:opacity-70 transition-opacity flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" style={{ color: "#C13B0A" }} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: "#0d3320" }}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-display text-sm opacity-60" style={{ color: "#F7F2E4" }}>Subtotal</span>
            <span className="font-display font-bold text-lg" style={{ color: "#F7F2E4" }}>
              {showPEN ? toPEN(totalPricePEN) : `$${totalPrice.toFixed(2)}`}
            </span>
          </div>
          <p className="text-xs mb-6 opacity-40 font-display" style={{ color: "#F7F2E4" }}>
            Pickup in Huaraz — we'll confirm via WhatsApp
          </p>

          <Button
            size="lg"
            className="w-full font-display font-bold text-base rounded-full"
            style={{ backgroundColor: "#f5c200", color: "#0d3320" }}
            onClick={handleWhatsAppCheckout}
          >
            Order via WhatsApp
          </Button>

          <button
            onClick={clearCart}
            className="w-full mt-4 text-center text-xs font-display opacity-40 hover:opacity-70 transition-opacity"
            style={{ color: "#F7F2E4" }}
          >
            Clear cart
          </button>
        </div>

      </div>
    </div>
  )
}
