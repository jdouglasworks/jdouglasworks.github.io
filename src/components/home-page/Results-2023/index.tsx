import React from 'react'
import ResultCard from '@/components/ui/ResultCard'

const index = () => {
  return (
    <div id="highlights">
      <div className="w-[90%] mx-auto py-[52px] lg:px-[20px]">
        <h1
          className="mt-[2px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center mb-[40px]"
          id="faustina-font"
        >
          Career Highlights
        </h1>
        <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          <ResultCard
            title="20"
            description="Years of DoD programming and cybersecurity experience"
          />
          <ResultCard title="13" description="Professional certifications" />
          <ResultCard title="2" description="Master's degrees" />
          <ResultCard
            title="10"
            description="Years of experience in data warehousing and project management"
          />
        </div>
      </div>
    </div>
  )
}

export default index
