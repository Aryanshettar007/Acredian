import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

const TESTIMONIALS = [
  {
    logo: (
      <div className="text-[#D3273E] font-black italic text-[32px] tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>
        ADP
      </div>
    ),
    quote: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`
  },
  {
    logo: (
      <div className="relative w-[48px] h-[48px] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#00A3E0" strokeWidth="8" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#84BD00" strokeWidth="2" />
          <text x="50" y="54" textAnchor="middle" fill="#333" fontSize="13" fontWeight="bold" fontFamily="Arial">BAYER</text>
          <text x="50" y="54" textAnchor="middle" fill="#333" fontSize="13" fontWeight="bold" fontFamily="Arial" transform="rotate(-90 50 50)">BAYER</text>
        </svg>
      </div>
    ),
    quote: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`
  }
];

export const Testimonials = () => {
  return (
    <SectionWrapper background="white" id="testimonials" className="py-20 md:py-24 flex flex-col items-center">
      
      {/* Centered CTA Button above testimonials */}
      <button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold py-[14px] px-8 rounded-[6px] transition-colors mb-20 shadow-[0_4px_14px_rgba(24,117,240,0.3)]">
        Enquire Now
      </button>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-[40px] font-bold mb-3 text-gray-900">
          Testimonials from <span className="text-brand-blue">Our Partners</span>
        </h2>
        <p className="text-gray-600 text-[17px]">
          What <span className="text-brand-blue">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="mb-6 h-12 flex items-center">
                {testimonial.logo}
              </div>
              <p className="text-gray-600 text-[15px] leading-[1.8] flex-1">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
        
        {/* Carousel dots */}
        <div className="flex justify-center mt-10 gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};
