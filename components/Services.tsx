'use client'

import { Clapperboard, Film, PlaySquare, ShoppingBag, Sparkles } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

const icons = [PlaySquare, Film, Clapperboard, Sparkles, ShoppingBag]

export default function Services() {
  const { language, content } = useLanguage()
  const services = content.plannedSections.services

  return (
    <section id="services" className="bg-card py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {language === 'ar' ? 'خدمات تخدم هدفك' : 'Services built around your goal'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {language === 'ar'
              ? 'من الفكرة إلى النسخة الجاهزة للنشر، أرتّب الإيقاع والصورة والحركة حول النتيجة التي تريدها.'
              : 'From first cut to final delivery, every edit is shaped around the result you want.'}
          </p>
        </FadeIn>

        <BentoGrid className="grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <FadeIn key={service.title} delay={i * 0.08} className={i === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'}>
                <BentoCard
                  name={service.title}
                  Icon={Icon}
                  description={service.benefit}
                  href="#contact"
                  cta={language === 'ar' ? 'ابدأ محادثة' : 'Start a conversation'}
                  background={<div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.16),transparent_40%)]" />}
                  className="h-full min-h-64 rounded-none border-0 bg-background shadow-none dark:border-0"
                />
              </FadeIn>
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}
