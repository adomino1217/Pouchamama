"use client"

import Image from "next/image"
import Link from "next/link"
import { Leaf, Mountain, Heart, Recycle, Award, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const valueIcons = [Leaf, Mountain, Heart, Recycle, Award, Utensils]

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#0d3320" }}>
        <div className="absolute top-20 right-10 w-64 h-64 bg-leaf-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-sun-yellow/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="font-display font-bold text-3xl md:text-5xl mb-6" style={{ color: "#F7F2E4" }}>
            {t.about.heroTitle1}
            <br />
            <span style={{ color: "#f5c200" }}>{t.about.heroTitle2}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(247,242,228,0.7)" }}>
            {t.about.heroSub}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/huayhuash-mountains.jpg"
                alt="Cordillera Huayhuash mountains with turquoise glacial lakes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t.about.storyTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#0d3320" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-12" style={{ color: "#F7F2E4" }}>
            {t.about.valuesTitle}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.values.map((value, idx) => {
              const Icon = valueIcons[idx]
              return (
                <div key={idx} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(245,194,0,0.2)" }}>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(245,194,0,0.15)" }}>
                    <Icon className="w-7 h-7" style={{ color: "#f5c200" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold mb-2" style={{ color: "#F7F2E4" }}>{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(247,242,228,0.65)" }}>{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 bg-warm-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
                {t.about.locallyTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.locallyP1}</p>
                <p>
                  <strong className="text-foreground">{t.about.noMiddlemenLabel}</strong>{" "}{t.about.noMiddlemenDesc}
                </p>
                <p>
                  <strong className="text-foreground">{t.about.compostableLabel}</strong>{" "}{t.about.compostableDesc}
                </p>
                <p>
                  <strong className="text-foreground">{t.about.tradLabel}</strong>{" "}{t.about.tradDesc}
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/huayhuash-hikers.jpg"
                alt="Two hikers looking out over a glacial lake in the Cordillera Huayhuash"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            {t.about.ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t.about.ctaDesc}
          </p>
          <Button asChild size="lg" className="rounded-full font-display px-8 bg-primary hover:bg-forest-green">
            <Link href="/shop">{t.about.ctaBtn}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
