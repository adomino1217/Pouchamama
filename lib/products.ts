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
    name: "Guiso de Quinoa",
    description: "Andean quinoa slow-cooked with yellow pepper, pumpkin, corn, and carrot. A hearty one-pot staple from the highlands.",
    price: 11.99,
    pricePEN: 40,
    image: "/guisa-de-quinoa.jpg",
    category: "vegan",
    calories: 531,
    protein: 28,
    carbs: 89,
    fat: 8,
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
    pricePEN: 40,
    image: "/lomo-saltado.jpg",
    category: "high-protein",
    calories: 601,
    protein: 50,
    carbs: 51,
    fat: 23,
    allergens: ["soy", "milk"],
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
    pricePEN: 40,
    image: "/aji-de-gallina.jpg",
    category: "high-protein",
    calories: 510,
    protein: 33,
    carbs: 68,
    fat: 11,
    allergens: ["milk", "egg", "wheat", "nuts"],
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
    pricePEN: 40,
    image: "/pachamanca-peruvian-traditional-dish-with-lamb-and.jpg",
    category: "high-protein",
    calories: 549,
    protein: 36,
    carbs: 82,
    fat: 11,
    allergens: ["soy"],
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
    pricePEN: 22,
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
      { weight: "20g", calories: 82, protein: 0.5, carbs: 18, fat: 0, price: 5.99, pricePEN: 10 },
      { weight: "45g", calories: 185, protein: 1, carbs: 41, fat: 0, price: 8.99, pricePEN: 22 },
    ],
  },
  {
    id: "9",
    name: "Chaufa de Quinoa",
    description: "A high-altitude twist on Peruvian fried rice — quinoa stir-fried with eggs, lupini beans, broccoli, asparagus, and ginger. Plant-powered and packed with protein.",
    price: 11.99,
    pricePEN: 40,
    image: "/chaufa-de-quinoa.jpg",
    category: "vegetarian",
    calories: 575,
    protein: 33,
    carbs: 75,
    fat: 17,
    allergens: ["egg", "soy"],
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
    pricePEN: 22,
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
      { weight: "20g", calories: 75, protein: 0, carbs: 18, fat: 0, price: 5.99, pricePEN: 10 },
      { weight: "45g", calories: 169, protein: 1, carbs: 40, fat: 0.5, price: 8.99, pricePEN: 22 },
    ],
  },
  {
    id: "11",
    name: "Carapulcra",
    description: "One of Peru's oldest and most revered dishes — dried potato slow-cooked with pork, peanuts, ají panca, and warm spices. Rich, earthy, and deeply nourishing.",
    price: 11.99,
    pricePEN: 40,
    image: "/carapulcra.jpg",
    category: "high-protein",
    calories: 555,
    protein: 46,
    carbs: 61,
    fat: 13,
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
    pricePEN: 40,
    image: "/escabeche-de-pollo.jpg",
    category: "high-protein",
    calories: 524,
    protein: 37,
    carbs: 73,
    fat: 10,
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
    pricePEN: 22,
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
      { weight: "20g", calories: 83, protein: 0, carbs: 18, fat: 0, price: 5.99, pricePEN: 10 },
      { weight: "45g", calories: 186, protein: 1, carbs: 41, fat: 0, price: 8.99, pricePEN: 22 },
    ],
  },
  {
    id: "15",
    name: "Trucha con Chimichurri",
    description: "Andean rainbow trout paired with vibrant herb chimichurri. Fresh, bold, and built for high-altitude recovery.",
    price: 11.99,
    pricePEN: 40,
    image: "/trout.jpg",
    category: "high-protein",
    calories: 608,
    protein: 50,
    carbs: 83,
    fat: 18,
    allergens: ["fish"],
    ingredients: [
      { name: "Rainbow Trout", region: "Ancash", x: 32, y: 44 },
      { name: "Garlic", region: "Arequipa", x: 45, y: 82 },
      { name: "Cilantro", region: "Lima", x: 28, y: 52 },
      { name: "Red Wine Vinegar", region: "Ica", x: 32, y: 65 },
      { name: "Rocoto Pepper", region: "Arequipa", x: 45, y: 85 },
    ],
  },
  {
    id: "16",
    name: "Locro",
    description: "A thick, warming Andean stew of squash, potatoes, and white beans. One of the oldest recipes in the mountains — pure highland soul food.",
    price: 11.99,
    pricePEN: 40,
    image: "/locro.jpg",
    category: "vegan",
    calories: 531,
    protein: 31,
    carbs: 74,
    fat: 14,
    allergens: ["dairy"],
    ingredients: [
      { name: "Zapallo Squash", region: "Ancash", x: 30, y: 42 },
      { name: "Yellow Potato", region: "Huánuco", x: 40, y: 45 },
      { name: "White Beans", region: "Cusco", x: 50, y: 60 },
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
    ],
  },
  {
    id: "17",
    name: "Pancakes",
    description: "Fluffy Andean pancakes made with quinoa flour and highland grains. Light, nourishing, and ready in minutes — the perfect trail breakfast.",
    price: 11.99,
    pricePEN: 40,
    image: "/pancakes.jpg",
    category: "vegetarian",
    calories: 381,
    protein: 18,
    carbs: 59,
    fat: 9,
    allergens: ["egg"],
    ingredients: [
      { name: "Quinoa Flour", region: "Cusco", x: 50, y: 60 },
      { name: "Eggs", region: "Arequipa", x: 45, y: 85 },
      { name: "Andean Honey", region: "Huánuco", x: 40, y: 45 },
    ],
  },
  {
    id: "18",
    name: "Huevos Rancheros",
    description: "Eggs nestled in a rich tomato-pepper sauce with Andean herbs. A bold, protein-packed breakfast that fuels long mountain days.",
    price: 11.99,
    pricePEN: 40,
    image: "/huevos-rancheros.jpg",
    category: "vegetarian",
    calories: 311,
    protein: 19,
    carbs: 20,
    fat: 15,
    allergens: ["egg"],
    ingredients: [
      { name: "Eggs", region: "Arequipa", x: 45, y: 85 },
      { name: "Tomato", region: "Lima", x: 28, y: 52 },
      { name: "Red Onion", region: "Arequipa", x: 48, y: 82 },
      { name: "Cilantro", region: "Lima", x: 28, y: 52 },
    ],
  },
  {
    id: "19",
    name: "Huevos Rancheros con Ají",
    description: "Our classic huevos rancheros with a fiery kick of Andean ají amarillo. The same satisfying breakfast — dialed up for spice lovers.",
    price: 11.99,
    pricePEN: 40,
    image: "/huevos-rancheros-aji.jpg",
    category: "vegetarian",
    calories: 315,
    protein: 19,
    carbs: 21,
    fat: 15,
    allergens: ["egg"],
    ingredients: [
      { name: "Eggs", region: "Arequipa", x: 45, y: 85 },
      { name: "Tomato", region: "Lima", x: 28, y: 52 },
      { name: "Ají Amarillo", region: "Huaraz", x: 32, y: 42 },
      { name: "Red Onion", region: "Arequipa", x: 48, y: 82 },
      { name: "Cilantro", region: "Lima", x: 28, y: 52 },
    ],
  },
]