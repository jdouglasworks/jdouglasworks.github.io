import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="How can I contact you?">
            <p>dougworks@freeforcharity.org</p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What's your background?">
            <p>
              Over 20 years of DoD programming, project management, and cybersecurity experience.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What types of engagements are you available for?">
            <p className="text-gray-400 italic">Coming soon.</p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What certifications do you hold?">
            <p className="text-gray-400 italic">Coming soon.</p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What environments have you supported?">
            <p className="text-gray-400 italic">Coming soon.</p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
