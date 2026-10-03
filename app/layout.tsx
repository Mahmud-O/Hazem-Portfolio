import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Inter, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'حازم | مونتير فيديو وموشن جرافيك',
  description:
    'مونتير فيديو وموشن جرافيك يساعد البراندات والشركات وصناع المحتوى في الخليج على تحويل أفكارهم إلى فيديوهات تحقق مشاهدة وتفاعل ونتائج.',
  openGraph: {
    title: 'حازم | مونتير فيديو وموشن جرافيك',
    description:
      'مونتير فيديو وموشن جرافيك يساعد البراندات والشركات وصناع المحتوى في الخليج على تحويل أفكارهم إلى فيديوهات تحقق مشاهدة وتفاعل ونتائج.',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexSansArabic.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
