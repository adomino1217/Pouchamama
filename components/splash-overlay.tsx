"use client"

import { useEffect, useState } from "react"

export function SplashOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("splash_seen")
    if (!seen) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem("splash_seen", "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(10,10,6,0.75)", backdropFilter: "blur(6px)" }}
      onClick={dismiss}
    >
      <div
        className="relative flex flex-col items-center text-center max-w-sm w-full px-10 py-12 rounded-2xl shadow-2xl"
        style={{ backgroundColor: "#0d3320" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo wordmark */}
        <p
          className="font-display font-extrabold tracking-tight mb-8"
          style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", color: "#F7F2E4", letterSpacing: "-0.02em" }}
        >
          POUCHAMAMA
        </p>

        {/* Divider */}
        <div className="w-12 h-px mb-8" style={{ backgroundColor: "#f5c200" }} />

        {/* Main message */}
        <h2
          className="font-display font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(1.4rem, 4vw, 1.9rem)", color: "#F7F2E4", letterSpacing: "-0.02em" }}
        >
          Orders available
        </h2>
        <p
          className="font-display font-semibold mb-10"
          style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#f5c200" }}
        >
          for pickup in Huaraz
        </p>

        {/* Dismiss button */}
        <button
          onClick={dismiss}
          className="font-display font-bold text-sm tracking-widest px-8 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#f5c200", color: "#0d3320" }}
        >
          EXPLORE →
        </button>
      </div>
    </div>
  )
}
