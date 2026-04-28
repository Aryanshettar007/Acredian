import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';
import { Button } from './Reusable/Button';

export const HeroSection = () => {
  return (
    <SectionWrapper background="white" id="home" className="pt-8 pb-16">
      <div className="bg-[#f0f6ff] rounded-[2rem] overflow-hidden relative shadow-sm border border-blue-50/50">
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Left Content */}
          <div className="flex-1 p-10 md:p-16 lg:p-20 space-y-8 z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.1]">
              Next-Gen <span className="text-brand-blue">Expertise</span><br />
              For Your <span className="text-brand-blue">Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-[400px] leading-snug">
              Cultivate high-performance teams through expert learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-semibold text-gray-800 pt-2">
              <div className="flex items-center gap-2">
                <div className="text-white bg-green-500 rounded-full flex items-center justify-center w-5 h-5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Tailored Solutions
              </div>
              <div className="flex items-center gap-2">
                <div className="text-white bg-green-500 rounded-full flex items-center justify-center w-5 h-5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Industry Insights
              </div>
              <div className="flex items-center gap-2">
                <div className="text-white bg-green-500 rounded-full flex items-center justify-center w-5 h-5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Expert Guidance
              </div>
            </div>
            
            <div className="pt-6">
              <Button size="lg" className="px-8 py-3.5 text-lg font-semibold rounded-lg shadow-lg shadow-brand-blue/20">
                Enquire Now
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 relative w-full min-h-[400px] md:min-h-full flex items-end justify-center md:justify-end bg-[#f0f6ff]">
            <img 
              src="/corporate-big-hero-v4.jpeg" 
              alt="Corporate Professionals" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
};
