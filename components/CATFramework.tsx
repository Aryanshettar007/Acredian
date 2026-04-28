import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';
import Image from 'next/image';

export const CATFramework = () => {
  return (
    <SectionWrapper background="white" id="cat-framework" className="py-20 md:py-24 bg-[#fcfdff]">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          The <span className="text-brand-blue">CAT Framework</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Our Proven Approach to <span className="text-[#3b82f6]">Learning Excellence</span>
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full flex justify-center">
        <Image 
          src="/catV2.svg" 
          alt="The CAT Framework - Concept, Application, Tools"
          width={1200}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </SectionWrapper>
  );
};
