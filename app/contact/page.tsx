"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
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
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">{t.contact.title}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.contact.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">{t.contact.sendMessage}</h2>

            {submitted ? (
              <div className="bg-leaf-green/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{t.contact.messageSent}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.contact.thankYou}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full font-display border-line-green text-line-green bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  {t.contact.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="font-display font-medium text-sm text-foreground mb-2 block">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border bg-card"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-display font-medium text-sm text-foreground mb-2 block">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border bg-card"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-display font-medium text-sm text-foreground mb-2 block">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border bg-card resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full font-display bg-primary hover:bg-forest-green"
                >
                  {isSubmitting ? t.contact.sending : t.contact.sendBtn}
                </Button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">{t.contact.faqTitle}</h2>

            <div className="space-y-3">
              {(t.contact.faqs as readonly { question: string; answer: string }[]).map((faq, idx) => (
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
              <h3 className="font-display font-semibold text-foreground mb-3">{t.contact.otherWays}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t.contact.email}:</strong> hello@pouchamama.com
                </p>
                <p>
                  <strong className="text-foreground">{t.contact.responseTime}:</strong> {t.contact.responseTimeValue}
                </p>
                <p>
                  <strong className="text-foreground">{t.contact.social}:</strong> @pouchamama on Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
