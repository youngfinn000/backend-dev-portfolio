import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import PixelatedStars from './components/PixelatedStars'

export default function Home() {
  return (
    <main className="relative">
      <PixelatedStars />
      <div className="container mx-auto px-4 py-8">
        <Hero />
         <Projects/>
        <Footer />
      </div>
    </main>
  )
}

