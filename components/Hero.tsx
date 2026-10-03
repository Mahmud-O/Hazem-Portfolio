'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { language, content } = useLanguage()
  const hero = content.plannedSections.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.12),transparent_35%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs font-medium tracking-[0.2em] text-accent uppercase mb-6"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="#contact" className="gap-2">
                  <MessageCircle size={18} />
                  {hero.whatsapp}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work" className="gap-2">
                  {content.navigation[0].label}
                  <ArrowLeft size={18} />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden border border-accent/50 bg-card/70">
              <img
                src="/Cinematic%20Video%20Editor%20in%20Teal%20Studio.png"
                alt={language === 'ar' ? 'حازم داخل استوديو مونتاج فيديو' : 'Hazem in a video editing studio'}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-accent/10" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-5 -start-5 h-24 w-24 border-s border-b border-accent/50" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
