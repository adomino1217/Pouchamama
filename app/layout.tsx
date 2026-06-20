import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { SplashOverlay } from "@/components/splash-overlay"
import { CartProvider } from "@/lib/cart-context"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${inter.className} ${syne.variable} antialiased`}>
        <LanguageProvider>
          <CartProvider>
            <SplashOverlay />
            <Navbar />
            <main>{children}</main>
          </CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
