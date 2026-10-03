'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'
import { Check, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const { language, content } = useLanguage()
  const contact = content.plannedSections.contact
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = language === 'ar' ? `طلب مشروع جديد من ${name}` : `New project inquiry from ${name}`
    const body = language === 'ar'
      ? `الاسم: ${name}\nالبريد: ${email}\n\nتفاصيل المشروع:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    const encodedBody = encodeURIComponent(body)
    const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4 block">
            {language === 'ar' ? 'تواصل' : 'Contact'}
          </span>
          <h2 className="mb-6 max-w-3xl font-display text-4xl font-bold md:text-6xl">{contact.title}</h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            {language === 'ar' ? 'أرسل تفاصيل مشروعك، وسنرتّب الخطوة التالية.' : 'Share a few details about your project and we will plan the next step.'}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FadeIn delay={0.1}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{language === 'ar' ? 'الاسم' : 'Name'}</Label>
                  <Input id="name" name="name" required placeholder={language === 'ar' ? 'اكتب اسمك' : 'Your name'} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{language === 'ar' ? 'تفاصيل المشروع' : 'Project details'}</Label>
                <Textarea id="message" name="message" required rows={5} placeholder={language === 'ar' ? 'ما الذي تريد تنفيذه؟' : 'Tell me about your project'} className="resize-none" />
              </div>
              <Button type="submit" size="lg" className="gap-2">
                {sent ? <Check size={18} /> : <MessageCircle size={18} />}
                {sent
                  ? (language === 'ar' ? 'تم تجهيز الرسالة' : 'Message prepared')
                  : (language === 'ar' ? 'أرسل التفاصيل' : 'Send details')}
              </Button>
              {sent && (
                <p className="text-sm text-accent">
                  {language === 'ar'
                    ? 'تم فتح واتساب والبريد برسالتك. اضغط إرسال داخل التطبيق لإتمام الإرسال.'
                    : 'WhatsApp and email were opened with your message. Press send in each app to finish.'}
                </p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.2} className="border-s border-border ps-0 lg:ps-12">
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              {language === 'ar' ? 'قنوات التواصل الحالية:' : 'Current contact channels:'}
            </p>
            <div className="space-y-5 text-sm">
              <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-accent"><MessageCircle className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" /><span>{contact.whatsapp}</span></a>
              <a href={`mailto:${contact.email}`} className="flex items-start gap-3 transition-colors hover:text-accent"><Mail className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" /><span>{contact.email}</span></a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
