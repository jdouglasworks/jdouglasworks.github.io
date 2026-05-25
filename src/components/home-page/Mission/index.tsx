import React from 'react'

const index = () => {
  return (
    <div id="about" className="py-[52px]">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px]"
          id="faustina-font"
        >
          About Me
        </h1>
        <p
          className="font-[500] text-[25px] leading-[150%] tracking-[0] text-center max-w-[906px] mx-auto"
          id="lato-font"
        >
          I specialize in cybersecurity program management, risk and vulnerability analysis, and
          security operations, with experience supporting federal‑level environments. I focus on
          building defensible architectures, improving detection workflows, and aligning practices
          with NIST and industry standards. Through nonprofit work, I help organizations adopt
          secure processes that protect their people and data.
        </p>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default index
