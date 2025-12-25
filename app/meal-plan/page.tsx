"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

type Goal = "high-protein" | "balanced" | "lightweight"

const goals: { value: Goal; label: string; description: string }[] = [
  { value: "high-protein", label: "High Protein", description: "Maximize protein for muscle recovery" },
  { value: "balanced", label: "Balanced", description: "Well-rounded nutrition for all-day energy" },
  { value: "lightweight", label: "Lightweight", description: "Lower calories, lighter pack weight" },
]

interface DayPlan {
  [productId: string]: number
}

export default function MealPlanPage() {
  const { addItem } = useCart()
  const [tripLength, setTripLength] = useState(3)
  const [goal, setGoal] = useState<Goal>("balanced")
  const [currentDay, setCurrentDay] = useState(1)
  const [mealPlans, setMealPlans] = useState<{ [day: number]: DayPlan }>({})

  // Filter products based on goal
  const recommendedProducts = useMemo(() => {
    switch (goal) {
      case "high-protein":
        return products.filter((p) => p.protein >= 25 || p.category === "high-protein")
      case "lightweight":
        return products.filter((p) => p.calories <= 420)
      default:
        return products
    }
  }, [goal])

  const currentDayPlan = mealPlans[currentDay] || {}

  const addToDay = (productId: string) => {
    setMealPlans((prev) => ({
      ...prev,
      [currentDay]: {
        ...prev[currentDay],
        [productId]: (prev[currentDay]?.[productId] || 0) + 1,
      },
    }))
  }

  const removeFromDay = (productId: string) => {
    setMealPlans((prev) => {
      const dayPlan = { ...prev[currentDay] }
      if (dayPlan[productId] > 1) {
        dayPlan[productId]--
      } else {
        delete dayPlan[productId]
      }
      return { ...prev, [currentDay]: dayPlan }
    })
  }

  const clearDay = () => {
    setMealPlans((prev) => {
      const updated = { ...prev }
      delete updated[currentDay]
      return updated
    })
  }

  // Calculate day totals
  const dayTotals = useMemo(() => {
    const plan = currentDayPlan
    let calories = 0,
      protein = 0,
      carbs = 0,
      fat = 0,
      items = 0

    for (const [productId, qty] of Object.entries(plan)) {
      const product = products.find((p) => p.id === productId)
      if (product) {
        calories += product.calories * qty
        protein += product.protein * qty
        carbs += product.carbs * qty
        fat += product.fat * qty
        items += qty
      }
    }

    return { calories, protein, carbs, fat, items }
  }, [currentDayPlan])

  // Calculate trip totals
  const tripTotals = useMemo(() => {
    let calories = 0,
      protein = 0,
      carbs = 0,
      fat = 0,
      items = 0

    for (let day = 1; day <= tripLength; day++) {
      const plan = mealPlans[day] || {}
      for (const [productId, qty] of Object.entries(plan)) {
        const product = products.find((p) => p.id === productId)
        if (product) {
          calories += product.calories * qty
          protein += product.protein * qty
          carbs += product.carbs * qty
          fat += product.fat * qty
          items += qty
        }
      }
    }

    return { calories, protein, carbs, fat, items }
  }, [mealPlans, tripLength])

  const handleAddAllToCart = () => {
    for (let day = 1; day <= tripLength; day++) {
      const plan = mealPlans[day] || {}
      for (const [productId, qty] of Object.entries(plan)) {
        const product = products.find((p) => p.id === productId)
        if (product) {
          for (let i = 0; i < qty; i++) {
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Design Your Meal Plan</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Plan your adventure meals day by day. We'll help you build the perfect trail nutrition.
          </p>
        </div>

        {/* Settings Bar */}
        <div className="bg-card rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            {/* Trip Length */}
            <div className="flex-1">
              <label className="font-display font-semibold text-sm text-foreground mb-3 block">Trip Length</label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5, 6, 7].map((days) => (
                  <button
                    key={days}
                    onClick={() => {
                      setTripLength(days)
                      if (currentDay > days) setCurrentDay(days)
                    }}
                    className={`w-10 h-10 rounded-full font-display font-medium transition-all ${
                      tripLength === days
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {days}
                  </button>
                ))}
                <span className="text-sm text-muted-foreground ml-2">days</span>
              </div>
            </div>

            {/* Goal */}
            <div className="flex-1">
              <label className="font-display font-semibold text-sm text-foreground mb-3 block">Goal</label>
              <div className="flex flex-wrap gap-2">
                {goals.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    className={`px-4 py-2 rounded-full font-display text-sm transition-all ${
                      goal === g.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Day Navigator */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
                disabled={currentDay === 1}
                className="p-2 rounded-full bg-card hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: tripLength }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    onClick={() => setCurrentDay(day)}
                    className={`w-10 h-10 rounded-full font-display font-medium transition-all ${
                      currentDay === day
                        ? "bg-sun-yellow text-foreground"
                        : Object.keys(mealPlans[day] || {}).length > 0
                          ? "bg-leaf-green/30 text-line-green"
                          : "bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentDay(Math.min(tripLength, currentDay + 1))}
                disabled={currentDay === tripLength}
                className="p-2 rounded-full bg-card hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Day Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-xl text-foreground">Day {currentDay}</h2>
              {Object.keys(currentDayPlan).length > 0 && (
                <button onClick={clearDay} className="text-sm text-muted-foreground hover:text-destructive">
                  Clear day
                </button>
              )}
            </div>

            {/* Current Day Selections */}
            {Object.keys(currentDayPlan).length > 0 && (
              <div className="bg-card rounded-2xl p-4 mb-6 shadow-sm">
                <h3 className="font-display font-semibold text-sm text-muted-foreground mb-3">
                  Selected for Day {currentDay}
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentDayPlan).map(([productId, qty]) => {
                    const product = products.find((p) => p.id === productId)
                    if (!product) return null
                    return (
                      <div key={productId} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/30 shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-medium text-sm text-foreground truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.calories} cal</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromDay(productId)}
                            className="p-1 rounded-full bg-muted hover:bg-muted/80"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-display font-medium w-6 text-center">{qty}</span>
                          <button
                            onClick={() => addToDay(productId)}
                            className="p-1 rounded-full bg-muted hover:bg-muted/80"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Available Products */}
            <h3 className="font-display font-semibold text-sm text-muted-foreground mb-4">
              Add meals to Day {currentDay}
              {goal !== "balanced" && (
                <span className="ml-2 text-line-green">
                  (showing {goal === "high-protein" ? "high protein" : "lightweight"} options)
                </span>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/30 shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.calories} cal · {product.protein}g protein
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary hover:bg-forest-green shrink-0"
                    onClick={() => addToDay(product.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-card rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Plan Summary</h3>

              {/* Day Totals */}
              <div className="mb-6">
                <h4 className="font-display font-semibold text-sm text-muted-foreground mb-3">Day {currentDay}</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <p className="font-bold text-lg text-primary">{dayTotals.calories}</p>
                    <p className="text-xs text-muted-foreground">calories</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <p className="font-bold text-lg text-line-green">{dayTotals.protein}g</p>
                    <p className="text-xs text-muted-foreground">protein</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <p className="font-bold text-lg text-leaf-green">{dayTotals.carbs}g</p>
                    <p className="text-xs text-muted-foreground">carbs</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <p className="font-bold text-lg text-sun-yellow">{dayTotals.fat}g</p>
                    <p className="text-xs text-muted-foreground">fat</p>
                  </div>
                </div>
              </div>

              {/* Trip Totals */}
              <div className="border-t border-border pt-6 mb-6">
                <h4 className="font-display font-semibold text-sm text-muted-foreground mb-3">
                  Full Trip ({tripLength} days)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total items</span>
                    <span className="font-medium text-foreground">{tripTotals.items} meals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total calories</span>
                    <span className="font-medium text-foreground">{tripTotals.calories.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total protein</span>
                    <span className="font-medium text-foreground">{tripTotals.protein}g</span>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                className="w-full rounded-full font-display bg-primary hover:bg-forest-green"
                disabled={tripTotals.items === 0}
                onClick={handleAddAllToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add All to Cart
              </Button>

              {tripTotals.items === 0 && (
                <p className="text-xs text-muted-foreground text-center mt-3">Select meals for your trip to continue</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
