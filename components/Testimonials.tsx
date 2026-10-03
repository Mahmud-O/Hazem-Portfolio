'use client'

import { Quote } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'

export default function Testimonials() {
  const { language, content } = useLanguage()

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {language === 'ar' ? 'آراء العملاء' : 'Client voices'}
          </span>
          <h2 className="mb-16 max-w-2xl font-display text-4xl font-bold md:text-5xl">
            {language === 'ar' ? 'خلّ النتائج الحقيقية تتكلم' : 'Let real results do the talking'}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {content.plannedSections.testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08} className="bg-card p-8 md:p-12">
              <Quote className="mb-10 h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mb-10 text-xl leading-relaxed">{testimonial.quote}</blockquote>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
