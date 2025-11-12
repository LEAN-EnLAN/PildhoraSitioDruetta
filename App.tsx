import React, { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { InfoCard } from './components/InfoCard';
import { LawIcon } from './components/icons/LawIcon';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { HeartIcon } from './components/icons/HeartIcon';
import { BellIcon } from './components/icons/BellIcon';
import { ChartIcon } from './components/icons/ChartIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { DemoModal } from './components/DemoModal';

// A small component for feature highlights to keep the main component clean
const Feature: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start text-left space-x-4">
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 text-cyan-400">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-1 text-gray-400">{children}</p>
    </div>
  </div>
);

const howItWorksSteps = [
    {
        num: 1,
        title: "Configurá",
        description: "Programa tus tomas desde nuestra app intuitiva. Es fácil y rápido."
    },
    {
        num: 2,
        title: "Recibí Alertas",
        description: "Pildhora te notifica con luz y sonido cuando es hora de tu medicación."
    },
    {
        num: 3,
        title: "Tomá tu Dosis",
        description: "El compartimento correcto se ilumina, eliminando cualquier confusión."
    },
    {
        num: 4,
        title: "Mantené la Calma",
        description: "La app confirma la toma y notifica a tus seres queridos si así lo deseas."
    }
];


const App: React.FC = () => {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-200 antialiased">
      <Header />
      <main>
        {/* Screen 1: Hero */}
        <Section id="inicio" className="text-center bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-in-down">
              Pildhora: Tu tratamiento, a tiempo. <span className="text-cyan-400">Siempre.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 animate-fade-in-up">
              El pastillero inteligente diseñado en <span className="font-semibold text-white">Rosario</span> para simplificar tu salud y la de tu familia.
            </p>
            <a href="#producto" className="mt-10 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105">
              Conocé más
            </a>
          </div>
        </Section>

        {/* Screen 2: Producto */}
        <Section id="producto" className="bg-gray-800">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                La tranquilidad de estar organizado
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Pildhora es más que un pastillero. Es un asistente personal que te asegura tomar la medicación correcta, en el momento preciso.
              </p>
              <div className="space-y-6">
                 <Feature icon={<BellIcon />} title="Alertas Inteligentes">
                    Notificaciones con luz y sonido que no podrás ignorar. La app te mantiene al tanto estés donde estés.
                 </Feature>
                 <Feature icon={<ChartIcon />} title="Monitoreo en Tiempo Real">
                    Lleva un registro de cada toma, generando reportes de adherencia que puedes compartir con tu médico.
                 </Feature>
                 <Feature icon={<UsersIcon />} title="Conexión Familiar">
                    Permite que un familiar o cuidador reciba notificaciones, brindando tranquilidad a todos.
                 </Feature>
              </div>
               <div className="mt-10">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105"
                >
                  Ver Demo Interactiva
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center p-8 bg-gray-900 rounded-3xl aspect-square">
               {/* Placeholder for product image */}
               <div className="w-full h-full border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
                 <p className="text-gray-500">Imagen del producto Pildhora</p>
               </div>
            </div>
          </div>
        </Section>
        
        {/* Screen 3: Como Funciona */}
        <Section id="como-funciona" className="bg-gray-900">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
                    Simple en 4 pasos
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {howItWorksSteps.map((step, index) => (
                         <div key={index} className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-gray-800">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 font-bold text-2xl border-2 border-gray-600 text-gray-400 rounded-full transition-colors duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* Screen 4: Marco Legal */}
        <Section id="leyes" className="bg-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Tecnología y Salud: Tu Derecho Protegido
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
                Pildhora opera en total conformidad con la legislación argentina, garantizando la seguridad y privacidad de tu información.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <InfoCard 
                    icon={<HeartIcon />}
                    title="Ley de Derechos del Paciente"
                    description="Respetamos tu autonomía y confidencialidad en cada interacción, como lo establece la Ley 26.529."
                />
                <InfoCard 
                    icon={<ShieldIcon />}
                    title="Protección de Datos Personales"
                    description="Tus datos de salud son sensibles. Los protegemos bajo los más altos estándares de la Ley 25.326."
                />
                <InfoCard 
                    icon={<LawIcon />}
                    title="Consentimiento Informado"
                    description="El uso de la app y el compartir datos con tu familia o médicos siempre requerirá tu autorización explícita."
                />
            </div>
        </Section>

        {/* Screen 5: Footer/Contacto */}
        <footer id="contacto" className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <a href="#inicio" className="flex items-center justify-center gap-2 mb-4">
                     <svg className="w-8 h-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 12a4 4 0 118 0 4 4 0 01-8 0z" />
                    </svg>
                    <span className="text-xl font-bold text-white">Pildhora</span>
                </a>
                <p>Un proyecto de Rosario para toda Argentina.</p>
                <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Pildhora. Todos los derechos reservados.</p>
            </div>
        </footer>
      </main>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
};

export default App;
