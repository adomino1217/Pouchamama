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
  pricePEN: number
  image: string
  category: "vegan" | "vegetarian" | "high-protein"
  calories: number
  protein: number
  carbs: number
  fat: number
  allergens: string[]
  ingredients: IngredientOrigin[]
}

/** Format a PEN price string, e.g. "S/ 35" */
export function toPEN(pen: number): string {
  return `S/ ${pen}`
}

export const products: Product[] = [
  {
    id: "1",
    name: "Guisa de Quinoa",
    description: "Andean quinoa slow-cooked with yellow pepper, pumpkin, corn, and carrot. A hearty one-pot staple from the highlands.",
    price: 10.99,
    pricePEN: 32,
    image: "/guisa-de-quinoa.jpg",
    category: "vegan",
    calories: 562,
    protein: 31,
    carbs: 97,
    fat: 6,
    allergens: [],
    ingredients: [
      { name: "Quinoa", region: "Puno", x: 55, y: 75 },
      { name: "Yellow Pepper", region: "Lima", x: 30, y: 52 },
      { name: "Pumpkin", region: "Cusco", x: 50, y: 60 },
      { name: "Corn", region: "Cusco", x: 50, y: 58 },
      { name: "Carrot", region: "Junín", x: 45, y: 55 },
    ],
  },
  {
    id: "2",
    name: "Lomo Saltado",
    description: "Inspired by Peru's beloved stir-fry, with freeze-dried beef, peppers, and potato.",
    price: 11.99,
    pricePEN: 35,
    image: "/lomo-saltado.jpg",
    category: "high-protein",
    calories: 860,
    protein: 57,
    carbs: 84,
    fat: 30,
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
    price: 11.99,
    pricePEN: 34,
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
    price: 11.99,
    pricePEN: 34,
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
    pricePEN: 33,
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
    pricePEN: 31,
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
  {
    id: "10",
    name: "Peruvian Pineapple",
    description: "Freeze-dried pineapple from the valleys of Peru. Chewy, crunchy goodness — no additives, just pure fruit. The freeze-drying process locks in over 200% of your daily Vitamin C in every bag.",
    price: 6.99,
    pricePEN: 24,
    image: "/peruvian-pineapple.jpg",
    category: "vegan",
    calories: 188,
    protein: 1,
    carbs: 44,
    fat: 0,
    allergens: [],
    ingredients: [
      { name: "Pineapple", region: "Junín", x: 42, y: 52 },
    ],
  },
  {
    id: "8",
    name: "Peruvian Mango",
    description: "Freeze-dried mango from the sun-drenched valleys of Ancash. Eat it straight from the bag — no prep, no rehydration needed. The freeze-drying process locks in all the juice and concentrates that tangy, tropical flavor into a light, crispy snack.",
    price: 6.99,
    pricePEN: 24,
    image: "/peruvian-mango.jpg",
    category: "vegan",
    calories: 164,
    protein: 1,
    carbs: 35,
    fat: 1,
    allergens: [],
    ingredients: [
      { name: "Mango", region: "Ancash", x: 35, y: 30 },
    ],
  },
  {
    id: "9",
    name: "Chaufa de Quinoa",
    description: "A high-altitude twist on Peruvian fried rice — quinoa stir-fried with eggs, lupini beans, broccoli, asparagus, and ginger. Plant-powered and packed with protein.",
    price: 10.99,
    pricePEN: 32,
    image: "/chaufa-de-quinoa.jpg",
    category: "vegetarian",
    calories: 548,
    protein: 31,
    carbs: 49,
    fat: 23,
    allergens: ["egg"],
    ingredients: [
      { name: "Quinoa", region: "Puno", x: 55, y: 75 },
      { name: "Eggs", region: "Arequipa", x: 45, y: 85 },
      { name: "Lupini Beans", region: "Junín", x: 45, y: 55 },
      { name: "Broccoli", region: "Lima", x: 30, y: 52 },
      { name: "Asparagus", region: "Ica", x: 32, y: 65 },
      { name: "Ginger", region: "San Martín", x: 40, y: 35 },
    ],
  },
  {
    id: "11",
    name: "Carapulcra",
    description: "One of Peru's oldest and most revered dishes — dried potato slow-cooked with pork, peanuts, ají panca, and warm spices. Rich, earthy, and deeply nourishing.",
    price: 11.99,
    pricePEN: 34,
    image: "/carapulcra.jpg",
    category: "high-protein",
    calories: 889,
    protein: 48,
    carbs: 60,
    fat: 50,
    allergens: ["nuts"],
    ingredients: [
      { name: "Papa Seca", region: "Junín", x: 45, y: 55 },
      { name: "Pork Ribs", region: "Arequipa", x: 45, y: 85 },
      { name: "Peanuts", region: "La Libertad", x: 25, y: 38 },
      { name: "Ají Panca", region: "Arequipa", x: 47, y: 83 },
      { name: "Ají Amarillo", region: "Lima", x: 30, y: 52 },
    ],
  },
  {
    id: "7",
    name: "Escabeche de Pollo",
    description: "Classic Peruvian pickled chicken with sweet potato, rice, yellow pepper, and egg. Bold, tangy, and deeply satisfying.",
    price: 10.99,
    pricePEN: 32,
    image: "/escabeche-de-pollo.jpg",
    category: "high-protein",
    calories: 515,
    protein: 41,
    carbs: 69,
    fat: 9,
    allergens: ["egg"],
    ingredients: [
      { name: "Chicken", region: "La Libertad", x: 25, y: 35 },
      { name: "Sweet Potato", region: "Lima", x: 28, y: 55 },
      { name: "Rice", region: "San Martín", x: 40, y: 35 },
      { name: "Yellow Pepper", region: "Lima", x: 30, y: 52 },
      { name: "Egg", region: "Arequipa", x: 45, y: 85 },
    ],
  },
]
