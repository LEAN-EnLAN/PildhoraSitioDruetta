import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 12a4 4 0 118 0 4 4 0 01-8 0z" />
              </svg>
              <span className="text-xl font-bold text-white">Pildhora</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#producto" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Producto</a>
            <a href="#como-funciona" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">¿Cómo funciona?</a>
            <a href="#leyes" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Marco Legal</a>
            <a href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
};