import type React from "react"
import type { Metadata } from "next"
import { Inter, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({ subsets: ["latin"] })
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "POUCHAMAMA | Freeze-Dried Peruvian Mountain Meals",
  description:
    "Farm-direct Peruvian ingredients, freeze-dried for mountain adventures. Real food, zero preservatives, designed for hikers and trekkers.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${quicksand.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
