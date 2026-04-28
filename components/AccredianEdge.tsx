import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';
import Image from 'next/image';

export const AccredianEdge = () => {
  return (
    <SectionWrapper background="white" id="accredian-edge" className="py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          The <span className="text-brand-blue">Accredian Edge</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Key Aspects of <span className="text-brand-blue">Our Strategic Training</span>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full flex justify-center">
        <Image 
          src="/accredian-edge-usp-v3.svg" 
          alt="The Accredian Edge - Key Aspects of Our Strategic Training"
          width={1200}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </SectionWrapper>
  );
};
