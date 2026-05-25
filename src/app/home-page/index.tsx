import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import Results2023 from '@/components/home-page/Results-2023'
import EndowmentFeatures from '@/components/home-page/Endowment-Features'
import OurPrograms from '@/components/home-page/Our-Programs'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import TheFreeForCharityTeam from '@/components/home-page/TheFreeForCharityTeam'
// Testimonials deferred — uncomment when real quotes are available
// import Testimonials from '@/components/home-page/Testimonials'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Results2023 />
      <EndowmentFeatures />
      <OurPrograms />
      <FrequentlyAskedQuestions />
      <TheFreeForCharityTeam />
      {/* <Testimonials /> */}
    </div>
  )
}

export default index
