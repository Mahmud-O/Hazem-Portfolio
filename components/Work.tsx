'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Play } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from './LanguageProvider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Work() {
  const { language, content } = useLanguage()
  const caseStudies = content.plannedSections.caseStudies
  const wideCaseStudies = caseStudies.filter((study) => study.format !== '9:16')
  const verticalCaseStudies = caseStudies.filter((study) => study.format === '9:16')

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4 block">
            {language === 'ar' ? 'أعمال مختارة' : 'Selected work'}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {language === 'ar' ? 'كل مشروع يبدأ بهدف واضح' : 'Every project starts with a clear goal'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {language === 'ar'
              ? 'مختارات من أعمال الفيديو مع أرقام المشاهدة والمنصة والصيغة، عشان تشوف أثر كل فيديو بسرعة.'
              : 'A selection of edits with the views, platform, and format for each project, so you can see the work at a glance.'}
          </p>
        </FadeIn>

        <FadeIn>
          <Tabs defaultValue="wide" className="w-full min-w-0 gap-8">
            <TabsList variant="line" className="w-full justify-start gap-6 rounded-none border-b border-border p-0">
              <TabsTrigger value="vertical" className="flex-none px-0 py-4">
                9:16 <span className="text-xs text-muted-foreground">Reels</span>
              </TabsTrigger>
              <TabsTrigger value="wide" className="flex-none px-0 py-4">
                16:9 <span className="text-xs text-muted-foreground">YouTube / Ads</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vertical" className="w-full min-w-0">
              <div className="space-y-8">
                {verticalCaseStudies.length > 0 ? verticalCaseStudies.map((study) => (
                  <CaseStudy key={`${study.title}-${study.media.src}`} study={study} vertical language={language} />
                )) : (
                  <div className="border-y border-border py-12 text-center text-muted-foreground">
                    {language === 'ar' ? 'أضف هنا روابط نسخ Reels وTikTok بصيغة 9:16.' : 'Add 9:16 Reels and TikTok versions here.'}
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="wide" className="w-full min-w-0">
              <div className="space-y-8">
                {wideCaseStudies.map((study) => (
                  <CaseStudy key={`${study.title}-${study.media.src}`} study={study} language={language} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  )
}

type CaseStudyData = {
  title: string
  client: string
  series: string
  format: string
  stats: {
    label: string
    value: string
  }[] | readonly {
    label: string
    value: string
  }[]
  media: {
    type: 'local' | 'iframe' | 'none'
    src: string
    poster?: string
  }
}

function CaseStudy({ study, vertical = false, language }: { study: CaseStudyData; vertical?: boolean; language: 'ar' | 'en' }) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-8 border-y border-border py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-12">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`relative flex min-w-0 items-center justify-center overflow-hidden border border-accent/50 bg-[#101313] ${vertical ? 'aspect-[0.5625] max-w-sm' : 'aspect-video'} w-full`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(52,211,153,0.18),transparent_45%)]" aria-hidden="true" />
        <MediaPlayer media={study.media} language={language} />
      </motion.div>

      <div className="flex flex-col justify-center">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">{study.format}</p>
            <h3 className="font-display text-3xl font-bold md:text-4xl">{study.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{study.client} · {study.series}</p>
          </div>
          <ArrowLeft className="h-6 w-6 text-accent" aria-hidden="true" />
        </div>
        <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
          {study.stats.map((stat) => (
            <CaseStudyStat key={`${study.title}-${stat.label}`} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MediaPlayer({ media, language }: { media: CaseStudyData['media']; language: 'ar' | 'en' }) {
  if (media.type === 'local' && media.src) {
    return (
      <video
        className="relative z-10 h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={media.poster}
      >
        <source src={media.src} type="video/mp4" />
        {language === 'ar' ? 'المتصفح لا يدعم تشغيل الفيديو.' : 'Your browser does not support video playback.'}
      </video>
    )
  }

  if (media.type === 'iframe' && media.src) {
    return (
      <iframe
        className="relative z-10 block h-full min-h-0 w-full border-0 bg-black"
        src={media.src}
        title={language === 'ar' ? 'فيديو من أعمال حازم' : 'Hazem portfolio video'}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }

  return (
    <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center text-muted-foreground">
      <Play className="h-8 w-8 text-accent" aria-hidden="true" />
      <span className="text-sm">
        {language === 'ar'
          ? 'أضف مسار الفيديو داخل content.ts أو ارفع الملف إلى public/videos.'
          : 'Add the video source in content.ts or upload the file to public/videos.'}
      </span>
    </div>
  )
}

function CaseStudyStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm bg-secondary/60 px-4 py-3">
      <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">{label}</p>
      <p className="font-display text-lg font-semibold tabular-nums">{value}</p>
    </div>
  )
}
