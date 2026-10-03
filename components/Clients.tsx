'use client'

import { useLanguage } from './LanguageProvider'

export default function Clients() {
  const { content } = useLanguage()
  const trust = content.plannedSections.trust

  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
          {trust.eyebrow}
        </p>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <a
              href={trust.partnerUrl}
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl font-bold text-foreground transition-colors hover:text-accent md:text-3xl"
            >
              {trust.partner}
            </a>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{trust.partnerDescription}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {trust.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 border-t border-border px-6 pt-5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/60">
        {trust.platforms.map((platform) => (
          <a key={platform.name} href={platform.url.startsWith('http') ? platform.url : '#contact'} target={platform.url.startsWith('http') ? '_blank' : undefined} rel={platform.url.startsWith('http') ? 'noreferrer' : undefined} className="transition-colors hover:text-accent">
            {platform.name}
          </a>
        ))}
      </div>
    </section>
  )
}
