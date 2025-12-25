import type { IngredientOrigin } from "@/lib/products"

interface PeruMapProps {
  ingredients: IngredientOrigin[]
}

export function PeruMap({ ingredients }: PeruMapProps) {
  const colors = ["#4E6627", "#6C8B37", "#A7C26F", "#F7C646"]

  return (
    <div className="relative">
      <svg
        viewBox="0 0 100 120"
        className="w-full max-w-[250px] mx-auto"
        role="img"
        aria-label="Map of Peru showing ingredient origins"
      >
        {/* Simplified Peru outline */}
        <path
          d="M15 10 
             L30 5 L45 8 L55 5 L65 10 L70 8 
             L75 15 L72 25 L78 35 L75 45 
             L80 55 L75 65 L78 75 L70 85 
             L65 95 L55 100 L50 105 L45 100 
             L35 95 L25 85 L20 75 L15 65 
             L18 55 L12 45 L15 35 L10 25 Z"
          fill="#A7C26F"
          fillOpacity="0.3"
          stroke="#6C8B37"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Andes mountain range suggestion */}
        <path
          d="M35 20 L40 35 L38 50 L42 65 L38 80 L45 95"
          fill="none"
          stroke="#6C8B37"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          opacity="0.5"
        />

        {/* Ingredient markers */}
        {ingredients.map((ing, idx) => (
          <g key={idx}>
            <circle cx={ing.x} cy={ing.y} r="4" fill={colors[idx % colors.length]} stroke="#FDF9F0" strokeWidth="1.5" />
            <circle cx={ing.x} cy={ing.y} r="6" fill={colors[idx % colors.length]} fillOpacity="0.3" />
          </g>
        ))}

        {/* Lima marker (capital) */}
        <circle cx="28" cy="52" r="2" fill="#3A3A3A" opacity="0.4" />
        <text x="28" y="48" fontSize="4" fill="#3A3A3A" textAnchor="middle" opacity="0.6">
          Lima
        </text>
      </svg>
    </div>
  )
}
