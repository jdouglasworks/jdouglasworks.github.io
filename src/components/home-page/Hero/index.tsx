import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const CharityHeroBackground = () => {
  return (
    <div id="hero" className="relative w-full pb-[100px] overflow-hidden bg-white">
      <div className="hero-container flex flex-col lg:flex-row gap-[40px] lg:gap-[0px] items-center justify-between relative z-10 pt-[130px] w-[90%] mx-auto max-w-[1280px] lg:px-[20px]">
        <div className="w-full lg:w-[565px]">
          <h1
            className="text-[50px] lg:text-[60px] font-[500] text-[#113563] leading-[120%] mb-[20px]"
            id="faustina-font"
          >
            J. Douglas Works
          </h1>
          <p
            className="text-[24px] font-[400] leading-[120%] text-[#4a5568] mb-[20px]"
            id="lato-font"
          >
            Cybersecurity Professional
          </p>
          <a
            href="#experience"
            className="top-[378px] w-[300px] lg:w-[351px] h-[54px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#113563] text-white text-[20px] font-[400] leading-[100%] mb-[10px] whitespace-nowrap"
            id="lato-font"
          >
            View My Work
          </a>
          <div className="flex gap-[5px]">
            <a
              href="#team"
              className="top-[442px] w-[173px] h-[54px] opacity-100 rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] border border-[#113563] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
              id="lato-font"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Fixed right side image section */}
        <div className="relative w-full max-w-[445px] aspect-square bg-white rounded-full p-12 flex items-center justify-center shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={assetPath('/Images/figma-hero-img.webp')}
              alt="J. Douglas Works"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 445px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityHeroBackground
