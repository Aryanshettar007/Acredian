'use client';
import React, { useState } from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

const FAQS = [
  {
    question: "What is the format of the training programs?",
    answer: "Our programs are delivered through a blend of live online sessions, interactive workshops, and comprehensive self-paced modules designed to fit busy professional schedules."
  },
  {
    question: "Can courses be customized for our organization?",
    answer: "Yes, our team works closely with your stakeholders to tailor the curriculum, case studies, and practical exercises to address your specific business challenges and goals."
  },
  {
    question: "Do you offer post-training support?",
    answer: "Absolutely. We provide continuous support, access to premium resources, and follow-up assessments to ensure long-term skill retention and practical application."
  },
  {
    question: "How do you measure the success of the training?",
    answer: "We use robust analytics, pre- and post-assessments, and performance tracking frameworks to guarantee measurable ROI and skill development for your organization."
  },
  {
    question: "Who are the instructors for these programs?",
    answer: "Our trainers are carefully vetted industry veterans, domain experts, and academic leaders with years of practical experience and proven teaching methodologies."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper background="gray" id="faqs" className="py-20 md:py-24 bg-[#fafafa]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          Frequently Asked <span className="text-brand-blue">Questions</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to know about <span className="text-brand-blue">Our Programs</span>
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-blue/30 shadow-[0_8px_30px_rgba(24,117,240,0.08)]' : 'border-gray-200 shadow-sm hover:border-blue-100 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-[17px] font-semibold pr-8 ${isOpen ? 'text-brand-blue' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                  }`}
                >
                  <div className="h-px w-full bg-gray-100 mb-4"></div>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
