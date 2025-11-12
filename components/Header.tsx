import React from 'react';
import { PildhoraImageLogo } from './icons/PildhoraImageLogo';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2">
              <PildhoraImageLogo className="w-8 h-8" />
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