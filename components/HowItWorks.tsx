import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

const STEPS = [
  {
    number: 1,
    title: 'Skill Gap Analysis',
    desc: 'Assess team skill gaps and developmental needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined">
        <path d="M12 16v5"></path><path d="M16 14v7"></path><path d="M20 10v11"></path><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path><path d="M4 18v3"></path><path d="M8 14v7"></path>
      </svg>
    )
  },
  {
    number: 2,
    title: 'Customized Training Plan',
    desc: 'Create a tailored roadmap addressing organizational goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-presentation">
        <path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path>
      </svg>
    )
  },
  {
    number: 3,
    title: 'Flexible Program Delivery',
    desc: 'Deliver adaptable programs aligned with industry and organizational needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-play">
        <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path><path d="M12 17v4"></path><path d="M8 21h8"></path><rect x="2" y="3" width="20" height="14" rx="2"></rect>
      </svg>
    )
  }
];

export const HowItWorks = () => {
  return (
    <SectionWrapper background="white" id="how-it-works" className="py-20 md:py-24">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          How We <span className="text-brand-blue">Deliver Results</span> That Matter?
        </h2>
        <p className="text-gray-600 text-lg">
          A Structured Three-Step Approach to <span className="text-brand-blue">Skill Development</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-[1200px] mx-auto px-4 sm:px-8">
        {STEPS.map((step) => (
          <div key={step.number} className="relative flex-1 group mt-4 md:mt-0">
            {/* The blue edge indicators sticking out */}
            <div className="absolute top-[25%] bottom-[25%] -left-2 w-2 bg-brand-blue rounded-l-sm transition-all duration-300 group-hover:top-[20%] group-hover:bottom-[20%]"></div>
            <div className="absolute top-[25%] bottom-[25%] -right-2 w-2 bg-brand-blue rounded-r-sm transition-all duration-300 group-hover:top-[20%] group-hover:bottom-[20%]"></div>
            
            {/* Main Card */}
            <div className="bg-[#f6f9fe] border border-blue-100 rounded-2xl p-10 h-full flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative z-10">
              
              {/* Step Number Badge */}
              <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-brand-blue bg-white flex items-center justify-center text-brand-blue text-[13px] font-bold">
                {step.number}
              </div>
              
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-brand-blue text-white flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(24,117,240,0.3)]">
                {step.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-gray-900 font-bold text-[19px] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed max-w-[260px]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
