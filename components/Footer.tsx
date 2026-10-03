'use client'

import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { language, content } = useLanguage()

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© 2026 {content.brand}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href={content.plannedSections.trust.partnerUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="YouTube">YouTube</a>
          <a href={`https://wa.me/${content.plannedSections.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="WhatsApp">WhatsApp</a>
          <a href={`mailto:${content.plannedSections.contact.email}`} className="transition-colors hover:text-accent" aria-label="Email">Email</a>
        </div>
      </div>
    </footer>
  )
}
