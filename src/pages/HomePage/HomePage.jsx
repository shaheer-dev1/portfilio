import Hero from '@/sections/Hero'
import Stats from '@/sections/Stats'
import About from '@/sections/About'
import TechStack from '@/sections/TechStack'
import FeaturedProjects from '@/sections/FeaturedProjects'
import Services from '@/sections/Services'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

/**
 * Homepage — complete single-page portfolio experience.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
