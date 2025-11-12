import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="min-w-[300px] bg-gray-800/50 p-6 rounded-xl border border-[#e0e0e0] hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-[0.2rem_0.2rem_0.5rem_rgba(0,0,0,0.1)] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 text-cyan-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 text-center" style={{fontSize: '1.25rem'}}>{title}</h3>
      <p className="text-gray-400 text-center" style={{fontSize: '1rem'}}>{description}</p>
    </div>
  );
};