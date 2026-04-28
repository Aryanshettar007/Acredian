'use client';
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the corresponding nav link name by ID
            const activeLink = NAV_LINKS.find(link => link.href.replace('#', '') === entry.target.id);
            if (activeLink) {
              setActiveSection(activeLink.name);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Triggers when section is halfway through viewport
        threshold: 0
      }
    );

    // Observe all sections linked in the navbar
    NAV_LINKS.forEach((link) => {
      const id = link.href.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex items-center">
            <div className="text-brand-blue font-bold text-[28px] lowercase tracking-tight leading-none flex flex-col">
              accredian
              <span className="text-[9px] text-gray-500 font-normal tracking-widest uppercase mt-0.5">credentials that matter</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors relative py-6 ${
                    isActive 
                      ? 'text-brand-blue' 
                      : 'text-gray-900 hover:text-brand-blue'
                  }`}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-blue rounded-t-sm" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-900 hover:text-brand-blue focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
