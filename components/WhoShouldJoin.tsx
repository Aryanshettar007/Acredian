import React from 'react';
import Image from 'next/image';

export const WhoShouldJoin = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1875F0] rounded-xl overflow-hidden flex flex-col lg:flex-row relative shadow-[0_10px_30px_rgba(24,117,240,0.2)]">
          
          {/* Left side: Text and Image */}
          <div className="w-full lg:w-[45%] pt-12 lg:pt-16 px-8 lg:px-12 relative flex flex-col min-h-[400px] lg:min-h-[500px]">
            <div className="relative z-10 mb-8 lg:mb-0">
              <p className="text-white/90 text-lg lg:text-xl font-medium mb-2">Who Should Join?</p>
              <h2 className="text-white text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight">
                Strategic Skill Enhancement
              </h2>
            </div>
            
            {/* The human image positioned at the bottom */}
            <div className="mt-auto lg:absolute lg:bottom-0 lg:left-8 lg:right-8 flex justify-center lg:justify-start pointer-events-none">
              <div className="relative w-[350px] h-[300px] lg:w-[450px] lg:h-[350px]">
                <Image 
                  src="/imagehuman.png" 
                  alt="Professionals" 
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
          
          {/* Right side: Grid of features */}
          <div className="w-full lg:w-[55%] p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative z-10 bg-[#1875F0]">
             
             {/* 1. Tech Professionals */}
             <div>
               <svg className="w-[42px] h-[42px] text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l2 2 4-4" />
               </svg>
               <h3 className="text-white text-[22px] font-bold mb-2 tracking-tight">Tech Professionals</h3>
               <p className="text-blue-100 text-[15px] leading-relaxed">
                 Enhance expertise, embrace tech, drive innovation.
               </p>
             </div>
             
             {/* 2. Non-Tech Professionals */}
             <div>
               <svg className="w-[42px] h-[42px] text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8l4 4m0-4l-4 4" />
               </svg>
               <h3 className="text-white text-[22px] font-bold mb-2 tracking-tight">Non-Tech Professionals</h3>
               <p className="text-blue-100 text-[15px] leading-relaxed">
                 Adapt digitally, collaborate in tech environments.
               </p>
             </div>
             
             {/* 3. Emerging Professionals */}
             <div>
               <svg className="w-[42px] h-[42px] text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
               </svg>
               <h3 className="text-white text-[22px] font-bold mb-2 tracking-tight">Emerging Professionals</h3>
               <p className="text-blue-100 text-[15px] leading-relaxed">
                 Develop powerful skills for rapid career growth.
               </p>
             </div>
             
             {/* 4. Senior Professionals */}
             <div>
               <svg className="w-[42px] h-[42px] text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth={2} />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v12M3 13h18" />
               </svg>
               <h3 className="text-white text-[22px] font-bold mb-2 tracking-tight">Senior Professionals</h3>
               <p className="text-blue-100 text-[15px] leading-relaxed">
                 Strengthen leadership, enhance strategic decisions.
               </p>
             </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};
