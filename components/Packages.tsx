'use client'

import { Check } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'

export default function Packages() {
  const { language, content } = useLanguage()
  const packages = content.plannedSections.packages

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {language === 'ar' ? 'الباقات' : 'Packages'}
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            {language === 'ar' ? 'اختار نقطة البداية المناسبة' : 'Choose the right starting point'}
          </h2>
          <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
            {language === 'ar'
              ? 'الباقات قابلة للتخصيص حسب حجم المشروع والهدف. أضف الأسعار والمحتوى الحقيقي قبل النشر.'
              : 'Packages can be tailored to the project size and goal. Add real pricing and inclusions before publishing.'}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {packages.map((item, index) => (
            <FadeIn key={`${item.name}-${index}`} delay={index * 0.08}>
              <article className={`h-full bg-card p-8 md:p-10 ${index === 1 ? 'bg-accent text-accent' : ''}`}>
                <p className="mb-8 text-xs uppercase tracking-[0.18em] opacity-70">0{index + 1}</p>
                <h3 className="mb-3 font-display text-2xl font-bold">{item.name}</h3>
                <p className="mb-8 text-sm leading-relaxed opacity-75">{item.fit}</p>
                <div className="mb-10 flex items-center gap-3 border-y border-current/20 py-5">
                  <span className="text-2xl font-bold">{item.price}</span>
                </div>
                <p className="mb-5 text-xs font-medium uppercase tracking-wide opacity-70">
                  {language === 'ar' ? 'يتضمن' : 'Includes'}
                </p>
                <p className="flex gap-3 leading-relaxed opacity-80">
                  <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  {item.includes}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}