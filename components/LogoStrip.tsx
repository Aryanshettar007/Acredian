import React from 'react';
import { SectionWrapper } from './Reusable/SectionWrapper';

export const LogoStrip = () => {
  return (
    <SectionWrapper background="white" id="clients" className="py-16 md:py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Our Proven <span className="text-brand-blue">Partnerships</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Successful Collaborations With the <span className="text-brand-blue">Industry's Best</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto px-4">
        {/* CSS Mockups of the Logos */}
        <div className="flex flex-col items-center group cursor-pointer">
            <span className="text-[28px] font-serif font-bold text-[#b48d3d] leading-none group-hover:scale-105 transition-transform">Reliance</span>
            <span className="text-[10px] text-gray-600 mt-1">Industries Limited</span>
        </div>
        
        <div className="text-[#0060A9] font-black text-[40px] italic tracking-tighter group cursor-pointer hover:scale-105 transition-transform">
            HCL
        </div>
        
        <div className="text-[#0530AD] font-black text-[42px] tracking-widest cursor-pointer hover:scale-105 transition-transform relative">
            <span className="absolute inset-0 bg-white/40 h-full w-full block" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, white 3px, white 5px)'}}></span>
            IBM
        </div>
        
        <div className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform">
            <span className="text-[#005A9C] font-black text-[34px] italic leading-none">CRIF</span>
            <span className="text-[9px] text-[#005A9C] italic font-semibold mt-0.5">Together to the next level</span>
        </div>
        
        <div className="text-[#D0271D] font-black text-[45px] tracking-tighter group cursor-pointer hover:scale-105 transition-transform">
            ADP
        </div>
        
        <div className="border-[4px] border-[#009900] rounded-full w-[70px] h-[70px] flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform relative overflow-hidden">
            <span className="text-[#002B7F] font-bold text-[14px] tracking-widest absolute" style={{ transform: 'rotate(-45deg)'}}>BAYER</span>
            <span className="text-[#002B7F] font-bold text-[14px] tracking-widest absolute" style={{ transform: 'rotate(45deg)'}}>BAYER</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
