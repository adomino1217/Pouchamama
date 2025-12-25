"use client"

import { useState, useMemo } from "react"
import { Filter, X } from "lucide-react"
import { products, type Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

type DietFilter = "vegan" | "vegetarian" | "high-protein"
type AllergenFilter = "dairy" | "nuts" | "soy" | "coconut"

const dietOptions: { value: DietFilter; label: string }[] = [
  { value: "vegan", label: "Vegan" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "high-protein", label: "High Protein" },
]

const allergenOptions: { value: AllergenFilter; label: string }[] = [
  { value: "dairy", label: "Dairy-free" },
  { value: "nuts", label: "Nut-free" },
  { value: "soy", label: "Soy-free" },
  { value: "coconut", label: "Coconut-free" },
]

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Filters
  const [dietFilters, setDietFilters] = useState<DietFilter[]>([])
  const [excludeAllergens, setExcludeAllergens] = useState<AllergenFilter[]>([])
  const [calorieRange, setCalorieRange] = useState([200, 600])

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const toggleDiet = (diet: DietFilter) => {
    setDietFilters((prev) => (prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]))
  }

  const toggleAllergen = (allergen: AllergenFilter) => {
    setExcludeAllergens((prev) => (prev.includes(allergen) ? prev.filter((a) => a !== allergen) : [...prev, allergen]))
  }

  const clearFilters = () => {
    setDietFilters([])
    setExcludeAllergens([])
    setCalorieRange([200, 600])
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Diet filter
      if (dietFilters.length > 0 && !dietFilters.includes(product.category)) {
        return false
      }

      // Calorie range
      if (product.calories < calorieRange[0] || product.calories > calorieRange[1]) {
        return false
      }

      // Allergen exclusion
      for (const allergen of excludeAllergens) {
        if (product.allergens.includes(allergen)) {
          return false
        }
      }

      return true
    })
  }, [dietFilters, excludeAllergens, calorieRange])

  const hasActiveFilters =
    dietFilters.length > 0 || excludeAllergens.length > 0 || calorieRange[0] > 200 || calorieRange[1] < 600

  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Shop All Meals</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our full range of freeze-dried Peruvian meals — crafted for flavor, optimized for the trail.
          </p>
        </div>

        {/* Filter Toggle (Mobile) */}
        <div className="md:hidden mb-6">
          <Button
            variant="outline"
            className="w-full rounded-full font-display border-line-green text-line-green bg-transparent"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
            {hasActiveFilters && (
              <span className="ml-2 w-5 h-5 bg-sun-yellow text-foreground text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`md:w-64 shrink-0 ${showFilters ? "block" : "hidden md:block"}`}>
            <div className="bg-card rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-lg text-foreground">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-line-green hover:text-primary transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Diet Type */}
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm text-foreground mb-3">Diet Type</h3>
                <div className="space-y-3">
                  {dietOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox
                        checked={dietFilters.includes(option.value)}
                        onCheckedChange={() => toggleDiet(option.value)}
                        className="border-line-green data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calorie Range */}
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm text-foreground mb-3">
                  Calories: {calorieRange[0]} - {calorieRange[1]}
                </h3>
                <Slider
                  value={calorieRange}
                  onValueChange={setCalorieRange}
                  min={200}
                  max={600}
                  step={20}
                  className="mt-4"
                />
              </div>

              {/* Allergen Exclusions */}
              <div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-3">Exclude Allergens</h3>
                <div className="space-y-3">
                  {allergenOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox
                        checked={excludeAllergens.includes(option.value)}
                        onCheckedChange={() => toggleAllergen(option.value)}
                        className="border-line-green data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {dietFilters.map((diet) => (
                  <span
                    key={diet}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-leaf-green/20 text-line-green rounded-full text-sm font-display"
                  >
                    {dietOptions.find((d) => d.value === diet)?.label}
                    <button onClick={() => toggleDiet(diet)} className="hover:text-primary">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {excludeAllergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-warm-beige/50 text-foreground rounded-full text-sm font-display"
                  >
                    No {allergen}
                    <button onClick={() => toggleAllergen(allergen)} className="hover:text-primary">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "meal" : "meals"}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl">
                <p className="font-display text-lg text-muted-foreground mb-4">No meals match your filters.</p>
                <Button
                  variant="outline"
                  className="rounded-full font-display border-line-green text-line-green bg-transparent"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
