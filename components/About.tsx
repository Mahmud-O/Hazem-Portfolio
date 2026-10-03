'use client'

import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { language, content } = useLanguage()
  const about = content.plannedSections.about

  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src="/person.jpeg"
                alt={language === 'ar' ? 'الصورة المرجعية لحازم' : 'Reference portrait of Hazem'}
                className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4 block">
              {language === 'ar' ? 'عنّي' : 'About'}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'أحوّل الفكرة إلى قصة تُشاهَد وتُتذكّر' : 'Turning ideas into stories people remember'}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {about.story}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-t border-border pt-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {language === 'ar' ? 'الأدوات' : 'Tools'}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {about.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
