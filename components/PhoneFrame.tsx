import React from 'react';

interface PhoneFrameProps {
  label: string;
  children: React.ReactNode;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col items-center">
      {label && <h3 className="text-lg font-bold mb-4 text-cyan-400">{label}</h3>}
      <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] h-[400px] sm:h-[450px] md:h-[500px] bg-gray-800 rounded-[40px] border-4 border-gray-700 shadow-lg p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-gray-700 rounded-b-xl z-10"></div>
        {/* Side buttons for realism */}
        <div className="absolute -left-1 top-16 w-1 h-6 bg-gray-600 rounded-l-sm"></div>
        <div className="absolute -left-1 top-24 w-1 h-4 bg-gray-600 rounded-l-sm"></div>
        <div className="absolute -right-1 top-20 w-1 h-8 bg-gray-600 rounded-r-sm"></div>
        
        <div className="w-full h-full bg-gray-900 rounded-[28px] overflow-hidden relative">
          {/* Screen glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[28px]"></div>
          {children}
        </div>
      </div>
    </div>
  );
};
