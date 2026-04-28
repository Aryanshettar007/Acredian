import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'brand';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-brand-light',
    dark: 'bg-gray-900 text-white',
    brand: 'bg-brand-blue text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
