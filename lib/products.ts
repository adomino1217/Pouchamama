export interface IngredientOrigin {
  name: string
  region: string
  x: number
  y: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "vegan" | "vegetarian" | "high-protein"
  calories: number
  protein: number
  carbs: number
  fat: number
  allergens: string[]
  ingredients: IngredientOrigin[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Quinoa Sunrise Bowl",
    description: "A vibrant breakfast bowl with Andean quinoa, dried mango, and toasted coconut.",
    price: 12.99,
    image: "/quinoa-breakfast-bowl-with-colorful-toppings.jpg",
    category: "vegan",
    calories: 420,
    protein: 14,
    carbs: 68,
    fat: 12,
    allergens: ["coconut"],
    ingredients: [
      { name: "Red Quinoa", region: "Puno", x: 55, y: 75 },
      { name: "Dried Mango", region: "Piura", x: 20, y: 25 },
      { name: "Coconut Flakes", region: "San Martín", x: 40, y: 35 },
      { name: "Cacao Nibs", region: "Cusco", x: 50, y: 60 },
    ],
  },
  {
    id: "2",
    name: "Lomo Saltado Trail Mix",
    description: "Inspired by Peru's beloved stir-fry, with freeze-dried beef, peppers, and potato.",
    price: 14.99,
    image: "/lomo-saltado-freeze-dried-meal-with-beef-and-peppe.jpg",
    category: "high-protein",
    calories: 520,
    protein: 32,
    carbs: 45,
    fat: 18,
    allergens: ["soy"],
    ingredients: [
      { name: "Grass-fed Beef", region: "Arequipa", x: 45, y: 85 },
      { name: "Yellow Peppers", region: "Lima", x: 30, y: 55 },
      { name: "Native Potatoes", region: "Junín", x: 45, y: 55 },
      { name: "Red Onion", region: "Arequipa", x: 48, y: 82 },
    ],
  },
  {
    id: "3",
    name: "Aji de Gallina Comfort",
    description: "Creamy chicken in a mild yellow pepper sauce with walnuts and olives.",
    price: 13.99,
    image: "/creamy-aji-de-gallina-peruvian-chicken-dish.jpg",
    category: "high-protein",
    calories: 480,
    protein: 28,
    carbs: 38,
    fat: 22,
    allergens: ["nuts", "dairy"],
    ingredients: [
      { name: "Free-range Chicken", region: "La Libertad", x: 25, y: 35 },
      { name: "Aji Amarillo", region: "Lima", x: 30, y: 52 },
      { name: "Walnuts", region: "Ica", x: 32, y: 65 },
      { name: "Black Olives", region: "Tacna", x: 55, y: 95 },
    ],
  },
  {
    id: "4",
    name: "Pachamanca Power",
    description: "Traditional earth-oven flavors with lamb, sweet potato, and fava beans.",
    price: 15.99,
    image: "/pachamanca-peruvian-traditional-dish-with-lamb-and.jpg",
    category: "high-protein",
    calories: 560,
    protein: 35,
    carbs: 52,
    fat: 20,
    allergens: [],
    ingredients: [
      { name: "Lamb", region: "Huancavelica", x: 40, y: 60 },
      { name: "Sweet Potato", region: "Lima", x: 28, y: 55 },
      { name: "Fava Beans", region: "Cusco", x: 52, y: 62 },
      { name: "Huacatay Herb", region: "Ayacucho", x: 38, y: 65 },
    ],
  },
  {
    id: "5",
    name: "Causa Vegana Stack",
    description: "Layers of purple potato, avocado, and chickpea filling with lime.",
    price: 11.99,
    image: "/causa-peruvian-layered-potato-dish-vegan-colorful.jpg",
    category: "vegan",
    calories: 380,
    protein: 12,
    carbs: 58,
    fat: 14,
    allergens: [],
    ingredients: [
      { name: "Purple Potato", region: "Puno", x: 55, y: 78 },
      { name: "Avocado", region: "La Libertad", x: 25, y: 38 },
      { name: "Chickpeas", region: "Lambayeque", x: 22, y: 30 },
      { name: "Lime", region: "Piura", x: 18, y: 25 },
    ],
  },
  {
    id: "6",
    name: "Choclo & Cheese Harvest",
    description: "Giant Andean corn with queso fresco and fresh herbs.",
    price: 10.99,
    image: "/choclo-peruvian-corn-with-cheese-traditional.jpg",
    category: "vegetarian",
    calories: 340,
    protein: 15,
    carbs: 48,
    fat: 10,
    allergens: ["dairy"],
    ingredients: [
      { name: "Choclo Corn", region: "Cusco", x: 50, y: 58 },
      { name: "Queso Fresco", region: "Cajamarca", x: 28, y: 32 },
      { name: "Huacatay", region: "Ayacucho", x: 38, y: 68 },
      { name: "Rocoto Pepper", region: "Arequipa", x: 45, y: 85 },
    ],
  },
]
