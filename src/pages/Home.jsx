import Hero from '@/components/sections/Hero'
import IntroSection from '@/components/sections/IntroSection'
import QuickStats from '@/components/sections/QuickStats'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <QuickStats />
      <FeaturedProjects />
    </>
  )
}

