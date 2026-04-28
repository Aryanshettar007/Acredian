import React from 'react';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  image?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, icon, image, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col ${className}`}>
      {image && (
        <div className="h-48 w-full relative overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6 flex flex-col items-center text-center flex-grow">
        {icon && (
          <div className="text-4xl mb-4 text-brand-blue">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
        {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};
