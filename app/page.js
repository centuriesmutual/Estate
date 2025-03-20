import Hero from '../components/Hero'
import Services from '../components/Services'
import Legacy from '../components/Legacy'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Legacy />
      <CTA />
      <Footer />
    </main>
  )
} 