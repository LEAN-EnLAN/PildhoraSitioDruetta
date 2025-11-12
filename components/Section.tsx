import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center py-20 md:py-24 ${className}`}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
};