import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import ProblemSolution from '@/components/ProblemSolution'
import Work from '@/components/Work'
import Process from '@/components/Process'
import About from '@/components/About'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Clients />
      <ProblemSolution />
      <Work />
      <Process />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
