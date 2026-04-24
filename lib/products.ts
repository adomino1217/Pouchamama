export interface IngredientOrigin {
  name: string
  region: string
  x: number
  y: number
}

export interface ProductSize {
  weight: string
  calories: number
  protein: number
  carbs: number
  fat: number
  price: number
  pricePEN: number
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
  sizes?: ProductSize[]
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
      { name: "Quinoa", region: "Cusco", x: 50, y: 60 },
      { name: "Choclo", region: "Yungay", x: 30, y: 40 },
      { name: "Chocho", region: "Cusco", x: 50, y: 61 },
      { name: "Cushuro", region: "Lagunas de Catac", x: 32, y: 44 },
      { name: "Zapallita", region: "Cayabone", x: 30, y: 42 },
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
      { name: "Carrot", region: "Casma", x: 25, y: 42 },
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
      { name: "Beef Sirloin", region: "Arequipa", x: 45, y: 85 },
      { name: "Quinoa", region: "Cusco", x: 50, y: 60 },
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
      { name: "Scallion", region: "Huaraz", x: 32, y: 42 },
      { name: "Tomato", region: "Lima", x: 28, y: 52 },
      { name: "Red Onion", region: "Arequipa", x: 48, y: 82 },
    ],
  },
  {
    id: "3",
    name: "Aji de Gallina",
    description: "Creamy chicken in a mild yellow pepper sauce with pecans and olives.",
    price: 11.99,
    pricePEN: 34,
    image: "/aji-de-gallina.jpg",
    category: "high-protein",
    calories: 480,
    protein: 28,
    carbs: 38,
    fat: 22,
    allergens: ["nuts", "dairy"],
    ingredients: [
      { name: "Chicken", region: "La Libertad", x: 25, y: 35 },
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
      { name: "Yellow Potato", region: "Huánuco", x: 40, y: 45 },
      { name: "Papa Blanca (Yata)", region: "Huaraz", x: 32, y: 43 },
      { name: "Pecans", region: "Ica", x: 32, y: 65 },
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
    id: "8",
    name: "Peruvian Mango",
    description: "Freeze-dried mango from the sun-drenched valleys of Ancash. Eat it straight from the bag — no prep, no rehydration needed. The freeze-drying process locks in all the juice and concentrates that tangy, tropical flavor into a light, crispy snack.",
    price: 8.99,
    pricePEN: 20,
    image: "/peruvian-mango.jpg",
    category: "vegan",
    calories: 185,
    protein: 1,
    carbs: 41,
    fat: 0,
    allergens: [],
    ingredients: [
      { name: "Mango", region: "Casma", x: 25, y: 42 },
    ],
    sizes: [
      { weight: "20g", calories: 82, protein: 0.5, carbs: 18, fat: 0, price: 5.99, pricePEN: 12 },
      { weight: "45g", calories: 185, protein: 1, carbs: 41, fat: 0, price: 8.99, pricePEN: 20 },
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
      { name: "Quinoa", region: "Cusco", x: 50, y: 60 },
      { name: "Eggs", region: "Arequipa", x: 45, y: 85 },
      { name: "Chocho (Lupini)", region: "Cusco", x: 50, y: 61 },
      { name: "Broccoli", region: "Casma", x: 25, y: 42 },
      { name: "Scallion", region: "Huaraz", x: 32, y: 42 },
      { name: "Ginger", region: "Huánuco", x: 40, y: 45 },
    ],
  },
  {
    id: "10",
    name: "Peruvian Pineapple",
    description: "Freeze-dried pineapple from the valleys of Peru. Chewy, crunchy goodness — no additives, just pure fruit. The freeze-drying process locks in over 200% of your daily Vitamin C in every bag.",
    price: 8.99,
    pricePEN: 20,
    image: "/peruvian-pineapple.jpg",
    category: "vegan",
    calories: 169,
    protein: 1,
    carbs: 40,
    fat: 0.5,
    allergens: [],
    ingredients: [
      { name: "Pineapple", region: "Junín", x: 42, y: 52 },
    ],
    sizes: [
      { weight: "20g", calories: 75, protein: 0, carbs: 18, fat: 0, price: 5.99, pricePEN: 12 },
      { weight: "45g", calories: 169, protein: 1, carbs: 40, fat: 0.5, price: 8.99, pricePEN: 20 },
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
      { name: "Papa Seca", region: "Huaraz", x: 32, y: 42 },
      { name: "Pork Loin", region: "Lima", x: 28, y: 52 },
      { name: "Peanuts", region: "La Libertad", x: 25, y: 38 },
      { name: "Ají Panca", region: "Piura", x: 20, y: 25 },
      { name: "Ají Mirasol", region: "Piura", x: 21, y: 26 },
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
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
      { name: "Egg", region: "Arequipa", x: 45, y: 85 },
    ],
  },
  {
    id: "12",
    name: "Spicy Mango",
    description: "Freeze-dried mango with a kick of Peruvian chili and sea salt. All the tropical sweetness of Ancash mango with a slow-building heat that hikers love.",
    price: 8.99,
    pricePEN: 20,
    image: "/spicy-mango.jpg",
    category: "vegan",
    calories: 186,
    protein: 1,
    carbs: 41,
    fat: 0,
    allergens: [],
    ingredients: [
      { name: "Mango", region: "Casma", x: 25, y: 42 },
      { name: "Rocoto Pepper", region: "Arequipa", x: 45, y: 85 },
    ],
    sizes: [
      { weight: "20g", calories: 83, protein: 0, carbs: 18, fat: 0, price: 5.99, pricePEN: 12 },
      { weight: "45g", calories: 186, protein: 1, carbs: 41, fat: 0, price: 8.99, pricePEN: 20 },
    ],
  },
  {
    id: "13",
    name: "Dragon Fruit",
    description: "Freeze-dried dragon fruit from the tropical valleys of Peru. Strikingly vibrant, subtly sweet, and packed with fiber and antioxidants. A trail snack unlike anything else.",
    price: 8.99,
    pricePEN: 20,
    image: "/dragon-fruit.jpg",
    category: "vegan",
    calories: 208,
    protein: 4,
    carbs: 45,
    fat: 0,
    allergens: [],
    ingredients: [
      { name: "Dragon Fruit", region: "La Libertad", x: 25, y: 38 },
    ],
    sizes: [
      { weight: "20g", calories: 92, protein: 2, carbs: 20, fat: 0, price: 5.99, pricePEN: 12 },
      { weight: "45g", calories: 208, protein: 4, carbs: 45, fat: 0, price: 8.99, pricePEN: 20 },
    ],
  },
]
