import Image from "next/image"
import Link from "next/link"
import { Leaf, Mountain, Heart, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-leaf-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-sun-yellow/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            Rooted in Peru,
            <br />
            <span className="text-primary">Built for Mountains Worldwide</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Pouchamama was born from a simple belief: the best trail food should come from the best farms, prepared with
            care, and travel light without sacrificing flavor.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/peruvian-andean-mountain-farm-landscape-quinoa-fie.jpg"
                alt="Peruvian Andean farm landscape"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It started on a trek through the Cordillera Blanca. After days of bland, over-processed trail meals,
                  we stumbled upon a family farm where we were served quinoa harvested that morning, prepared with
                  ancestral techniques passed down through generations.
                </p>
                <p>
                  That meal changed everything. We realized that adventure food didn't have to be a compromise — it
                  could be a celebration of real ingredients from real places.
                </p>
                <p>
                  Today, we partner directly with small-scale Peruvian farmers across the Andes, sourcing heirloom
                  grains, native potatoes, and heritage produce that's been cultivated for centuries. We freeze-dry
                  everything ourselves, locking in nutrients and flavor without preservatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Small-Farmer Sourcing",
                description:
                  "We work directly with family farms across Peru, ensuring fair prices and preserving traditional agricultural practices.",
              },
              {
                icon: Mountain,
                title: "Adventure-First Design",
                description:
                  "Every meal is engineered for the trail — lightweight, calorie-dense, and ready in minutes with just hot water.",
              },
              {
                icon: Heart,
                title: "Real Food Promise",
                description:
                  "No preservatives, no artificial flavors, no mystery ingredients. Just whole foods, freeze-dried at peak freshness.",
              },
              {
                icon: Recycle,
                title: "Earth-Friendly Packaging",
                description:
                  "Our pouches are made from plant-based materials that break down naturally. Pack it out, and it'll return to the earth.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-leaf-green/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-line-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 bg-warm-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
                Sustainability at Every Step
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe the outdoors we love is worth protecting. That's why sustainability isn't an afterthought —
                  it's woven into everything we do.
                </p>
                <p>
                  <strong className="text-foreground">Carbon-neutral shipping:</strong> Every order's footprint is
                  offset through verified reforestation projects in the Peruvian Amazon.
                </p>
                <p>
                  <strong className="text-foreground">1% for Trails:</strong> We donate 1% of all revenue to trail
                  maintenance organizations across the Americas.
                </p>
                <p>
                  <strong className="text-foreground">Compostable packaging:</strong> Our meal pouches are certified
                  home-compostable, breaking down within 180 days.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/sustainable-biodegradable-packaging-nature-hiking-.jpg"
                alt="Sustainable packaging in nature"
                fill
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
            Ready to Taste the Difference?
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our collection of Peruvian-inspired trail meals and fuel your next adventure with real food.
          </p>
          <Button asChild size="lg" className="rounded-full font-display px-8 bg-primary hover:bg-forest-green">
            <Link href="/shop">Shop All Meals</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
