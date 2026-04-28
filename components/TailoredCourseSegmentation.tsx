import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';
import Image from 'next/image';

const SEGMENTS = [
  {
    title: 'Program Specific',
    desc: 'Certificate, Executive, Post Graduate Certificate',
    image: '/project-management-v2.jpeg'
  },
  {
    title: 'Industry Specific',
    desc: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
    image: '/digital-transformation-v2.jpeg'
  },
  {
    title: 'Topic Specific',
    desc: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
    image: '/data-science-v2.jpeg'
  },
  {
    title: 'Level Specific',
    desc: 'Senior Leadership, Mid-Career Professionals, Freshers',
    image: '/senior-management-v2.jpeg'
  }
];

export const TailoredCourseSegmentation = () => {
  return (
    <SectionWrapper background="white" className="py-20 bg-[#fafafa]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          Tailored <span className="text-brand-blue">Course Segmentation</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Explore <span className="text-brand-blue">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[24px] max-w-7xl mx-auto px-4">
        {SEGMENTS.map((segment, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.06)] flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
          >
            <div className="relative w-full h-[200px] border-b border-gray-100">
              <Image 
                src={segment.image} 
                alt={segment.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col items-center justify-center">
              <h3 className="text-[22px] font-bold text-brand-blue mb-2 tracking-tight">{segment.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed font-medium px-1">{segment.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
