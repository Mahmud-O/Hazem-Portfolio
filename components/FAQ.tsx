'use client'

import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {
  const { language, content } = useLanguage()

  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <FadeIn>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.18em] text-accent">FAQ</span>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {language === 'ar' ? 'أسئلة قبل أن نبدأ' : 'Before we get started'}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion className="border-t border-border">
            {content.plannedSections.faq.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-start text-base hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}