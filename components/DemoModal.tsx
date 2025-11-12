import React, { useState, useEffect } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { CheckIcon } from './icons/CheckIcon';
import { CloseIcon } from './icons/CloseIcon';
import '../styles/animations.css';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [medicationTaken, setMedicationTaken] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle keyboard navigation (ESC key to close)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset state when modal is closed/reopened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setMedicationTaken(false);
        setShowConfirmation(false);
        setIsAnimating(false);
      }, 300); // Reset after fade-out
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Stagger the confirmation animation
  useEffect(() => {
    if (medicationTaken) {
      const timer = setTimeout(() => {
        setShowConfirmation(true);
      }, 500); // 0.5s delay
      return () => clearTimeout(timer);
    }
  }, [medicationTaken]);

  if (!isOpen) return null;

  const handleTakeMedication = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMedicationTaken(true);
      setIsAnimating(false);
    }, 300);
  };

  // Add ripple effect on click
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'absolute rounded-full bg-white/30 animate-ripple';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-gray-900/90 border border-gray-600 rounded-2xl sm:rounded-3xl w-full max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center shadow-2xl animate-slide-in-up custom-scrollbar"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        style={{
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-all duration-200 z-10 p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Cerrar modal"
        >
          <CloseIcon />
        </button>

        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Simulación en Tiempo Real
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">Observá cómo Pildhora conecta a pacientes y cuidadores al instante.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Paciente Phone */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400">Paciente</h3>
            </div>
            <PhoneFrame label="">
              <div className="flex flex-col items-center justify-center h-full p-3 sm:p-4 space-y-4 sm:space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-gray-400 text-sm">Próxima toma</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">Ibuprofeno 600mg</p>
                  <p className="text-base sm:text-lg text-cyan-400 font-medium">Ahora - 08:00 AM</p>
                </div>

                <div className="relative">
                  <button
                    onClick={(e) => {
                      createRipple(e);
                      handleTakeMedication();
                    }}
                    disabled={medicationTaken || isAnimating}
                    className={`w-full min-w-[160px] sm:min-w-[200px] py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 overflow-hidden relative ${medicationTaken
                      ? 'bg-green-500 cursor-not-allowed scale-105 shadow-lg'
                      : isAnimating
                        ? 'bg-cyan-600 scale-95 animate-pulse'
                        : 'bg-cyan-500 hover:bg-cyan-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/25'
                      }`}
                  >
                    {medicationTaken ? (
                      <>
                        <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                        <span>¡Tomada!</span>
                      </>
                    ) : (
                      <span>Tomar medicación</span>
                    )}
                  </button>

                  {isAnimating && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                  )}
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* Cuidador Phone */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400">Cuidador</h3>
            </div>
            <PhoneFrame label="">
              <div className="flex flex-col items-start justify-start h-full p-3 sm:p-4 space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold w-full text-center mb-2 text-gray-200">Registro de Actividad</h3>

                <div className="w-full text-left p-3 rounded-lg bg-gray-700 border border-gray-600 transition-all duration-200 hover:border-gray-500">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="font-semibold text-gray-200 text-sm sm:text-base">Recordatorio enviado</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 ml-4">Ibuprofeno 600mg - 08:00 AM</p>
                </div>

                <div className="w-full text-left p-3 rounded-lg bg-gray-700/50 border border-gray-600 opacity-75">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <p className="font-semibold text-gray-400 text-sm sm:text-base">Esperando confirmación...</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 ml-4">Notificación pendiente</p>
                </div>

                {showConfirmation && (
                  <div className="w-full text-left p-3 rounded-lg bg-green-800/50 border border-green-500 animate-fade-in transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 animate-bounce" />
                      <p className="font-semibold text-green-300 text-sm sm:text-base">✓ Toma Confirmada</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 ml-6">Paciente ha tomado Ibuprofeno 600mg - 08:01 AM</p>
                  </div>
                )}

                {!showConfirmation && medicationTaken && (
                  <div className="w-full text-center p-2">
                    <div className="inline-flex items-center space-x-2 text-yellow-400 animate-pulse">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                      <span className="text-sm font-medium">Confirmando...</span>
                    </div>
                  </div>
                )}
              </div>
            </PhoneFrame>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Presioná <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 border border-gray-300 rounded-lg">ESC</kbd> para cerrar
          </p>
        </div>
      </div>
    </div>
  );
};
