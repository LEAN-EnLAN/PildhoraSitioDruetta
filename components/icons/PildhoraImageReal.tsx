import React from 'react';

interface PildhoraImageRealProps {
  className?: string;
  showText?: boolean;
  imageSrc?: string;
  altText?: string;
}

export const PildhoraImageReal: React.FC<PildhoraImageRealProps> = ({
  className = "w-12 h-12",
  showText = false,
  imageSrc = "/dist/assets/Pastillero Pildhora .png",
  altText = "Pastillero Pildhora Real - Dispositivo inteligente para medicación"
}) => {
  // Determine object-fit based on className
  const objectFit = className.includes('object-cover') ? 'object-cover' : 'object-contain';
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={imageSrc}
        alt={altText}
        className={`w-full h-full ${objectFit}`}
        onError={(e) => {
          // Fallback to text if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'block';
        }}
      />
      <div className="hidden text-teal-500 font-bold text-center" style={{ display: 'none' }}>
        <div className="w-full h-full flex items-center justify-center bg-teal-500 text-white rounded-full">
          P
        </div>
      </div>
      
      {/* PILDHORA text */}
      {showText && (
        <span className="text-teal-500 font-bold text-lg mt-2 tracking-wider">
          PILDHORA
        </span>
      )}
    </div>
  );
};