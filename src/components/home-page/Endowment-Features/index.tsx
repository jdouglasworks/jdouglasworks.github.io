import React from 'react'
import { ShieldCheck, ClipboardList, Code2, Server } from 'lucide-react'
import { SustainableFundingCard } from '@/components/ui/SustainableFundingCard'

const Home: React.FC = () => {
  return (
    <div id="skills" className="pb-[30px]">
      <div className="w-[90%] mx-auto lg:px-[20px] max-w-[1280px]">
        <div>
          <h1
            className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[30px]"
            id="faustina-font"
          >
            Core Competencies
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <SustainableFundingCard
              icon={<ShieldCheck size={48} strokeWidth={1.5} />}
              title="Cybersecurity Operations & Governance"
              text="Vulnerability analysis, incident response support, compliance alignment, and enterprise security posture improvement."
            />
            <SustainableFundingCard
              icon={<ClipboardList size={48} strokeWidth={1.5} />}
              title="Project & Program Management"
              text="Planning, execution, stakeholder coordination, and delivery of complex technical and cybersecurity initiatives."
            />
            <SustainableFundingCard
              icon={<Code2 size={48} strokeWidth={1.5} />}
              title="Programming & Automation"
              text="Secure coding, workflow automation, data processing, and efficiency improvements across enterprise systems."
            />
            <SustainableFundingCard
              icon={<Server size={48} strokeWidth={1.5} />}
              title="Systems Engineering & Modernization"
              text="Optimizing performance, improving data workflows, and supporting large‑scale modernization efforts across federal environments."
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Home
