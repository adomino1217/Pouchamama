export interface IngredientOrigin {
  name: string
  region: string
  x: number
  y: number
}

export interface NutritionFacts {
  calories: number
  totalFat: number
  saturatedFat: number
  transFat: number
  cholesterol: number
  sodium: number
  totalCarbs: number
  dietaryFiber: number
  totalSugars: number
  addedSugars: number
  protein: number
  vitaminD: number
  calcium: number
  iron: number
  potassium: number
  vitaminC?: number
  manganese?: number
}

export interface ProductSize {
  size: string
  weightG: number
  price: number
  pricePEN: number
  nutrition: NutritionFacts
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
  isSnack?: boolean
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
  {
    id: "8",
    name: "Peruvian Mango",
    description: "Freeze-dried mango from the sun-drenched valleys of Ancash. Eat it straight from the bag — no prep, no rehydration needed. The freeze-drying process locks in all the juice and concentrates that tangy, tropical flavor into a light, crispy snack.",
    price: 6.99,
    pricePEN: 24,
    image: "/peruvian-mango.jpg",
    category: "vegan",
    calories: 82,
    protein: 0.5,
    carbs: 18,
    fat: 0,
    allergens: [],
    isSnack: true,
    ingredients: [
      { name: "Mango", region: "Ancash", x: 35, y: 30 },
    ],
    sizes: [
      {
        size: "20g",
        weightG: 20,
        price: 6.99,
        pricePEN: 24,
        nutrition: {
          calories: 82, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 3, totalCarbs: 18, dietaryFiber: 1.5,
          totalSugars: 12, addedSugars: 0, protein: 0.5,
          vitaminD: 0, calcium: 10, iron: 0.25, potassium: 210, vitaminC: 33,
        },
      },
      {
        size: "45g",
        weightG: 45,
        price: 11.99,
        pricePEN: 40,
        nutrition: {
          calories: 185, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 6, totalCarbs: 41, dietaryFiber: 3,
          totalSugars: 27, addedSugars: 0, protein: 1,
          vitaminD: 0, calcium: 23, iron: 0.6, potassium: 473, vitaminC: 75,
        },
      },
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
    calories: 75,
    protein: 0,
    carbs: 18,
    fat: 0,
    allergens: [],
    isSnack: true,
    ingredients: [
      { name: "Pineapple", region: "Junín", x: 42, y: 52 },
    ],
    sizes: [
      {
        size: "20g",
        weightG: 20,
        price: 6.99,
        pricePEN: 24,
        nutrition: {
          calories: 75, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 0, totalCarbs: 18, dietaryFiber: 1,
          totalSugars: 14, addedSugars: 0, protein: 0,
          vitaminD: 0, calcium: 15, iron: 0.1, potassium: 171, vitaminC: 55, manganese: 1.1,
        },
      },
      {
        size: "45g",
        weightG: 45,
        price: 11.99,
        pricePEN: 40,
        nutrition: {
          calories: 169, totalFat: 0.5, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 0, totalCarbs: 40, dietaryFiber: 3,
          totalSugars: 32, addedSugars: 0, protein: 1,
          vitaminD: 0, calcium: 34, iron: 0.2, potassium: 385, vitaminC: 124, manganese: 2.4,
        },
      },
    ],
  },
  {
    id: "12",
    name: "Spicy Mango",
    description: "Freeze-dried Peruvian mango with a kick of chili. Sweet heat in every bite — the perfect trail snack for those who like it spicy.",
    price: 6.99,
    pricePEN: 24,
    image: "/peruvian-mango.jpg",
    category: "vegan",
    calories: 83,
    protein: 0,
    carbs: 18,
    fat: 0,
    allergens: [],
    isSnack: true,
    ingredients: [
      { name: "Mango", region: "Ancash", x: 35, y: 30 },
    ],
    sizes: [
      {
        size: "20g",
        weightG: 20,
        price: 6.99,
        pricePEN: 24,
        nutrition: {
          calories: 83, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 120, totalCarbs: 18, dietaryFiber: 1,
          totalSugars: 12, addedSugars: 0, protein: 0,
          vitaminD: 0, calcium: 10, iron: 0.3, potassium: 210, vitaminC: 33,
        },
      },
      {
        size: "45g",
        weightG: 45,
        price: 11.99,
        pricePEN: 40,
        nutrition: {
          calories: 186, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 268, totalCarbs: 41, dietaryFiber: 3,
          totalSugars: 27, addedSugars: 0, protein: 1,
          vitaminD: 0, calcium: 23, iron: 0.6, potassium: 473, vitaminC: 75,
        },
      },
    ],
  },
  {
    id: "13",
    name: "Dragon Fruit",
    description: "Freeze-dried Peruvian dragon fruit — vibrant, exotic, and packed with fiber. A striking snack straight from the bag with a subtly sweet flavor and satisfying crunch.",
    price: 6.99,
    pricePEN: 24,
    image: "/peruvian-pineapple.jpg",
    category: "vegan",
    calories: 92,
    protein: 2,
    carbs: 20,
    fat: 0,
    allergens: [],
    isSnack: true,
    ingredients: [
      { name: "Dragon Fruit", region: "La Libertad", x: 25, y: 38 },
    ],
    sizes: [
      {
        size: "20g",
        weightG: 20,
        price: 6.99,
        pricePEN: 24,
        nutrition: {
          calories: 92, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 60, totalCarbs: 20, dietaryFiber: 5,
          totalSugars: 12, addedSugars: 0, protein: 2,
          vitaminD: 0, calcium: 12, iron: 1.1, potassium: 293, vitaminC: 5,
        },
      },
      {
        size: "45g",
        weightG: 45,
        price: 11.99,
        pricePEN: 40,
        nutrition: {
          calories: 208, totalFat: 0, saturatedFat: 0, transFat: 0,
          cholesterol: 0, sodium: 135, totalCarbs: 45, dietaryFiber: 11,
          totalSugars: 28, addedSugars: 0, protein: 4,
          vitaminD: 0, calcium: 28, iron: 2.4, potassium: 659, vitaminC: 10,
        },
      },
    ],
  },
]
