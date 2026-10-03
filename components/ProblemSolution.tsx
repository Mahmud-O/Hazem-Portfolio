'use client'

import { ArrowLeft, CircleAlert, Sparkles } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'

export default function ProblemSolution() {
  const { language, content } = useLanguage()
  const section = content.plannedSections.problemSolution

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FadeIn>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {section.eyebrow}
          </span>
          <h2 className="max-w-xl font-display text-4xl font-bold leading-tight md:text-5xl">
            {language === 'ar'
              ? 'الفيديو الجيد لا يكتفي بالظهور، بل يحرّك العميل.'
              : 'Good video does more than appear. It moves the customer.'}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          <FadeIn className="bg-card p-8 md:p-10">
            <CircleAlert className="mb-8 h-8 w-8 text-muted-foreground" aria-hidden="true" />
            <h3 className="mb-4 font-display text-2xl font-bold">
              {language === 'ar' ? 'التحدي' : 'The challenge'}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{section.problem}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="bg-accent p-8 text-accent-foreground md:p-10">
            <Sparkles className="mb-8 h-8 w-8" aria-hidden="true" />
            <h3 className="mb-4 font-display text-2xl font-bold">
              {language === 'ar' ? 'الفرصة' : 'The opportunity'}
            </h3>
            <p className="leading-relaxed">{section.solution}</p>
            <ArrowLeft className="mt-8 h-5 w-5" aria-hidden="true" />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
