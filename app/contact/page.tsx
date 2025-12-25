"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days within the continental US. Expedited options are available at checkout. International shipping typically takes 10-14 business days depending on destination.",
  },
  {
    question: "How should I store my meals?",
    answer:
      "Store unopened pouches in a cool, dry place away from direct sunlight. Our freeze-dried meals have a shelf life of 2 years when properly stored. Once opened, consume within 24 hours or reseal tightly and refrigerate for up to 3 days.",
  },
  {
    question: "How do I prepare the meals on the trail?",
    answer:
      "Simply add hot water directly to the pouch, stir, seal, and wait 8-12 minutes. That's it! Each pouch includes detailed instructions and the exact water amount needed. No cooking required — just boiling water.",
  },
  {
    question: "Are your meals suitable for dietary restrictions?",
    answer:
      "We clearly label all allergens and dietary categories (vegan, vegetarian, high-protein) on each product. Use our shop filters to find meals that fit your needs. If you have specific questions, reach out — we're happy to help.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes! We work with outdoor retailers, guide services, and organizations. For wholesale inquiries, please use the contact form below or email us directly at wholesale@pouchamama.com.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question about our meals, your order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-leaf-green/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full font-display border-line-green text-line-green bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="font-display font-medium text-sm text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border bg-card"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-display font-medium text-sm text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border bg-card"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-display font-medium text-sm text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border bg-card resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full font-display bg-primary hover:bg-forest-green"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Frequently Asked Questions</h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <Collapsible
                  key={idx}
                  open={openFaq === idx}
                  onOpenChange={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between bg-card rounded-xl p-4 text-left hover:bg-muted/50 transition-colors">
                      <span className="font-display font-medium text-foreground pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 pb-4 pt-2 text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 bg-warm-beige/30 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-3">Other Ways to Reach Us</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong> hello@pouchamama.com
                </p>
                <p>
                  <strong className="text-foreground">Response time:</strong> Within 24-48 hours
                </p>
                <p>
                  <strong className="text-foreground">Social:</strong> @pouchamama on Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
