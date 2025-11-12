import React from 'react';

export const LawIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3.192-1.85 5.94-4.546 7.014-2.986-2.014-2.986-5-2.986-7 .5 1 2 2 2.5 2.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.343 17.657h.01" />
  </svg>
);
