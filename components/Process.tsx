'use client'

import { ArrowLeft } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'

export default function Process() {
  const { language, content } = useLanguage()
  const process = content.plannedSections.process

  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {language === 'ar' ? 'طريقة العمل' : 'The process'}
          </span>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-bold md:text-5xl">
              {language === 'ar' ? 'خطوات واضحة من أول brief إلى التسليم' : 'A clear path from brief to delivery'}
            </h2>
            <p className="max-w-xs text-muted-foreground">
              {language === 'ar' ? 'مدة التسليم: ' : 'Delivery timeline: '}
              <span className="text-foreground">{process.delivery}</span>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 border-s border-border md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <FadeIn key={step} delay={index * 0.08} className="border-b border-e border-border p-6 last:border-b-0 md:min-h-52 lg:border-b-0">
              <div className="mb-12 flex items-center justify-between text-accent">
                <span className="font-display text-3xl font-bold">0{index + 1}</span>
                {index < process.steps.length - 1 && <ArrowLeft className="hidden h-5 w-5 lg:block" aria-hidden="true" />}
              </div>
              <p className="text-lg font-medium leading-relaxed">{step}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}