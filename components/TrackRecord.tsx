import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

export const TrackRecord = () => {
  return (
    <SectionWrapper background="white" id="stats" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Our <span className="text-brand-blue">Track Record</span>
        </h2>
        <p className="text-gray-600 text-lg">
          The Numbers Behind <span className="text-brand-blue">Our Success</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 max-w-5xl mx-auto">
        
        <div className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10 flex-1">
          <div className="bg-[#e8f0fe] text-brand-blue font-bold text-2xl py-2.5 px-8 rounded-full mb-6 inline-block">
            10K+
          </div>
          <p className="text-[15px] font-medium text-gray-800 leading-relaxed max-w-[220px]">
            Professionals Trained For Exceptional Career Success
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10 flex-1">
          <div className="bg-[#e8f0fe] text-brand-blue font-bold text-2xl py-2.5 px-8 rounded-full mb-6 inline-block">
            200+
          </div>
          <p className="text-[15px] font-medium text-gray-800 leading-relaxed max-w-[220px]">
            Sessions Delivered With Unmatched Learning Excellence
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10 flex-1">
          <div className="bg-[#e8f0fe] text-brand-blue font-bold text-2xl py-2.5 px-8 rounded-full mb-6 inline-block">
            5K+
          </div>
          <p className="text-[15px] font-medium text-gray-800 leading-relaxed max-w-[220px]">
            Active Learners Engaged In Dynamic Courses
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};
