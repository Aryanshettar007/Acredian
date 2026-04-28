import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

const DOMAINS = [
  {
    title: 'Product & Innovation Hub',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16h6m-5 4h4m-4.5-9A4.5 4.5 0 1115 9.5c0 1.6-1.5 2.5-1.5 4.5h-3c0-2-1.5-2.9-1.5-4.5z" />
      </svg>
    )
  },
  {
    title: 'Gen-AI Mastery',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18a4 4 0 0 1-1.967-.516" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    )
  },
  {
    title: 'Leadership Elevation',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Tech & Data Insights',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Operations Excellence',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Digital Enterprise',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Fintech Innovation Lab',
    icon: (
      <svg className="w-[42px] h-[42px] text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="12" x="2" y="6" rx="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M18 12h.01" />
      </svg>
    )
  }
];

export const DomainExpertise = () => {
  return (
    <SectionWrapper background="white" id="domain-expertise" className="py-20 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          Our <span className="text-brand-blue">Domain Expertise</span>
        </h2>
        <p className="text-gray-600 text-lg">
          <span className="text-brand-blue">Specialized Programs</span> Designed to Fuel Innovation
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[18px] max-w-[1100px] mx-auto px-4">
        {DOMAINS.map((domain, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center p-6 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-12px)] max-w-[340px] h-[140px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer group"
          >
            <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
              {domain.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-[15px] text-center tracking-tight">{domain.title}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
