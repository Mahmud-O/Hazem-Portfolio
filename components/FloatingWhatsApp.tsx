'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function FloatingWhatsApp() {
  const { language, content } = useLanguage()
  const whatsapp = content.plannedSections.contact.whatsapp

  return (
    <a
      href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 inset-e-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_8px_30px_rgba(52,211,153,0.25)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={language === 'ar' ? 'التواصل عبر واتساب' : 'Contact via WhatsApp'}
      title={language === 'ar' ? 'واتساب' : 'WhatsApp'}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}