"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { LANGUAGES } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="font-display font-bold text-sm tracking-wide px-2 py-1 rounded flex items-center gap-1 transition-opacity opacity-75 hover:opacity-100"
        style={{ color: "#f5c200" }}
        aria-label="Select language"
      >
        {language.toUpperCase()}
        <svg
          width="10" height="6" viewBox="0 0 10 6" fill="none"
          style={{ color: "#f5c200", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden shadow-lg z-50"
          style={{ backgroundColor: "#7a2506", border: "1px solid rgba(245,194,0,0.3)", minWidth: "100px" }}
        >
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => { setLanguage(code); setOpen(false) }}
              className="w-full text-left px-4 py-2 font-display font-medium text-sm transition-colors"
              style={{
                color: code === language ? "#f5c200" : "#F7F2E4",
                backgroundColor: code === language ? "rgba(245,194,0,0.12)" : "transparent",
              }}
              onMouseEnter={e => { if (code !== language) (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)" }}
              onMouseLeave={e => { if (code !== language) (e.target as HTMLElement).style.backgroundColor = "transparent" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
