import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import { assetPath } from '@/lib/assetPath'

const index = () => {
  return (
    <div id="team" className="py-[50px]">
      <h1
        className="font-[400] text-[40px] lg:text-[48px] tracking-[0] text-center mx-auto mb-[50px]"
        id="faustina-font"
      >
        About Me
      </h1>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="flex items-center justify-center">
          <TeamMemberCard
            imageUrl={assetPath('/Images/member1.webp')}
            name="J. Douglas Works"
            title="Cybersecurity Professional"
            linkedinUrl="https://www.linkedin.com/in/dworks/"
          />
        </div>
      </div>
    </div>
  )
}

export default index
