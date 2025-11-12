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
import { PildhoraImageLogo } from './components/icons/PildhoraImageLogo';
import { PildhoraImageReal } from './components/icons/PildhoraImageReal';

// Tab component for interactive legal section
const LegalTab: React.FC<{ 
  activeTab: string; 
  setActiveTab: (tab: string) => void; 
  tabId: string; 
  title: string;
  icon: React.ReactNode;
}> = ({ activeTab, setActiveTab, tabId, title, icon }) => (
  <button
    onClick={() => setActiveTab(tabId)}
    className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
      activeTab === tabId
        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
    }`}
  >
    {icon}
    <span>{title}</span>
  </button>
);

// Animated content container
const LegalContent: React.FC<{ isVisible: boolean; children: React.ReactNode }> = ({ isVisible, children }) => (
  <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
    {isVisible && children}
  </div>
);

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
  const [activeLegalTab, setActiveLegalTab] = useState('sanitario');

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
            <div className="relative overflow-hidden bg-gray-900 rounded-3xl aspect-square">
               <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <PildhoraImageReal className="w-96 h-96 object-cover" showText={false} />
               </div>
               {/* Top crop frame - larger to crop more */}
               <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent"></div>
               {/* Bottom crop frame - larger to crop more */}
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
               {/* Side crop for better focus */}
               <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent"></div>
               <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent"></div>
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
                📋 Tu Derecho Protegido: Explorá Nuestro Compromiso Legal
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
                Descubrí cómo Pildhora protege tus derechos en cada interacción. Hacé clic en cada sección para conocer los detalles de nuestra conformidad legal.
            </p>

            {/* Interactive Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <LegalTab 
                    activeTab={activeLegalTab} 
                    setActiveTab={setActiveLegalTab} 
                    tabId="sanitario" 
                    title="Marco Sanitario"
                    icon={<HeartIcon />}
                />
                <LegalTab 
                    activeTab={activeLegalTab} 
                    setActiveTab={setActiveLegalTab} 
                    tabId="tecnologico" 
                    title="Cumplimiento TIC"
                    icon={<ShieldIcon />}
                />
                <LegalTab 
                    activeTab={activeLegalTab} 
                    setActiveTab={setActiveLegalTab} 
                    tabId="consumidor" 
                    title="Tus Derechos"
                    icon={<UsersIcon />}
                />
                <LegalTab 
                    activeTab={activeLegalTab} 
                    setActiveTab={setActiveLegalTab} 
                    tabId="derecho-salud" 
                    title="Derecho a la Salud"
                    icon={<HeartIcon />}
                />
                <LegalTab 
                    activeTab={activeLegalTab} 
                    setActiveTab={setActiveLegalTab} 
                    tabId="seguridad" 
                    title="Certificaciones"
                    icon={<LawIcon />}
                />
            </div>

            {/* Tab Content with Animations */}
            <div className="relative min-h-[600px]">
                {/* Marco Regulatorio Sanitario */}
                <LegalContent isVisible={activeLegalTab === 'sanitario'}>
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">🏥 Marco Regulatorio Sanitario</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Tu salud y privacidad están protegidas por las leyes argentinas más estrictas. Conocé tus derechos como paciente.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                                <div className="text-center mb-4">
                                    <HeartIcon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-white">Ley 26.529</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Tu autonomía para tomar decisiones sobre tu salud está garantizada. Accedé a información clara sobre tu tratamiento con absoluta confidencialidad.
                                </p>
                                <button className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                                    Ver más detalles →
                                </button>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                                <div className="text-center mb-4">
                                    <ShieldIcon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-white">Ley 25.326</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Tus datos de salud son información sensible. Implementamos seguridad de nivel bancario con cifrado end-to-end.
                                </p>
                                <button className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                                    Ver más detalles →
                                </button>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                                <div className="text-center mb-4">
                                    <LawIcon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-white">Consentimiento</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Todo tratamiento requiere tu autorización expresa. Podés revocar tu consentimiento en cualquier momento.
                                </p>
                                <button className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                                    Ver más detalles →
                                </button>
                            </div>
                        </div>
                        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700">
                            <h4 className="text-cyan-400 font-bold mb-3">💡 ¿Sabías que...?</h4>
                            <p className="text-gray-300 text-sm">
                                La Ley de Derechos del Paciente te garantiza acceder a tu información médica completa en cualquier momento. 
                                Con Pildhora, podés descargar un reporte detallado de tu adherencia al tratamiento para compartir con tu médico.
                            </p>
                        </div>
                    </div>
                </LegalContent>

                {/* Cumplimiento Tecnológico */}
                <LegalContent isVisible={activeLegalTab === 'tecnologico'}>
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">🔒 Cumplimiento Tecnológico</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Nuestra tecnología cumple con las normativas más exigentes para garantizar tu seguridad digital.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                <ShieldIcon className="w-10 h-10 text-cyan-400 mb-4" />
                                <h4 className="text-xl font-bold text-white mb-3">ANMAT</h4>
                                <p className="text-gray-300 mb-4">
                                    Nuestro hardware cumple con las normativas de la Administración Nacional de Medicamentos 
                                    para dispositivos de soporte terapéutico.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Certificación de calidad médica
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Aprobación de seguridad eléctrica
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                <LawIcon className="w-10 h-10 text-cyan-400 mb-4" />
                                <h4 className="text-xl font-bold text-white mb-3">Ley 27.078 de TIC</h4>
                                <p className="text-gray-300 mb-4">
                                    Cumplimos con la Ley de Tecnologías de la Información, garantizando 
                                    acceso universal y protección del usuario.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Neutralidad de red
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Protección de datos personales
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-700">
                            <h4 className="text-cyan-400 font-bold mb-3">🔐 Seguridad Garantizada</h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Tu información médica está protegida con los mismos estándares que utilizan los bancos. 
                                Utilizamos cifrado AES-256 y almacenamiento en servidores certificados.
                            </p>
                            <div className="flex gap-4 text-xs text-gray-400">
                                <span className="bg-gray-800 px-3 py-1 rounded">AES-256</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">SSL/TLS</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">ISO 27001</span>
                            </div>
                        </div>
                    </div>
                </LegalContent>

                {/* Derechos del Consumidor */}
                <LegalContent isVisible={activeLegalTab === 'consumidor'}>
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">⚖️ Tus Derechos como Consumidor</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Estás protegido por las leyes de defensa del consumidor. Conocé tus garantías y derechos.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                                <HeartIcon className="w-10 h-10 text-green-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-3">Garantía Total</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• 12 meses de garantía por defectos</li>
                                    <li>• 10 días de retracto sin costo</li>
                                    <li>• Servicio post-venta garantizado</li>
                                    <li>• Repuestos originales asegurados</li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                                <UsersIcon className="w-10 h-10 text-green-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-3">Soporte Continuo</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• App actualizada por 3 años</li>
                                    <li>• Atención al cliente 24/7</li>
                                    <li>• Actualizaciones de software gratis</li>
                                    <li>• Capacitación incluida</li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                                <ChartIcon className="w-10 h-10 text-green-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-3">Transparencia</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Precios sin suscripciones ocultas</li>
                                    <li>• Facturación clara y detallada</li>
                                    <li>• Términos y condiciones visibles</li>
                                    <li>• Política de privacidad completa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700">
                            <h4 className="text-green-400 font-bold mb-3">🛡️ Protección Completa</h4>
                            <p className="text-gray-300 text-sm">
                                Como consumidor argentino, tenés derecho a información veraz, garantía de funcionamiento, 
                                y servicio post-venta. No hay letra chica ni cláusulas abusivas en nuestros contratos.
                            </p>
                        </div>
                    </div>
                </LegalContent>

                {/* Derecho a la Salud - Comprehensive Section */}
                <LegalContent isVisible={activeLegalTab === 'derecho-salud'}>
                    <div className="space-y-8">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-white mb-6">🏥 El Derecho a la Salud y Pildhora</h3>
                            <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
                                El derecho a la salud es un derecho humano fundamental que garantiza el acceso a servicios médicos, 
                                medicamentos esenciales y tecnologías que promuevan el bienestar. Pildhora nace como una herramienta 
                                que materializa este derecho, convirtiendo el acceso a la medicación adecuada en una realidad tangible 
                                para cada persona.
                            </p>
                        </div>

                        {/* Definición del Derecho a la Salud */}
                        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-700">
                            <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                                <span className="text-3xl">⚖️</span>
                                ¿Qué es el Derecho a la Salud?
                            </h4>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed">
                                        El derecho a la salud está consagrado en el artículo 12 del Pacto Internacional de Derechos 
                                        Económicos, Sociales y Culturales (PIDESC) y en la Constitución Nacional Argentina. 
                                        Este derecho abarca:
                                    </p>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>Acceso oportuno a servicios de salud sin discriminación</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>Disponibilidad de medicamentos esenciales y tecnologías médicas</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>Acceso a información médica clara y comprensible</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>Participación en decisiones sobre el propio tratamiento</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                    <h5 className="text-lg font-semibold text-cyan-400 mb-4">Marco Legal Argentino</h5>
                                    <div className="space-y-3 text-sm text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                            <span>Art. 42 Constitución: Protección al consumidor de salud</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                            <span>Ley 26.529: Derechos de los pacientes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                            <span>Ley 24.754: Medicamentos esenciales</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                            <span>Art. 75 inc. 22: Tratados internacionales</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pildhora como Herramienta de Derechos */}
                        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700">
                            <h4 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="text-3xl">💊</span>
                                Pildhora: Materializando el Derecho a la Salud
                            </h4>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Pildhora no es simplemente un dispositivo tecnológico; es una herramienta que transforma el derecho 
                                a la salud en una experiencia cotidiana accesible, digna y efectiva. Cada función de nuestro 
                                pastillero inteligente está diseñada para garantizar que tu derecho a la salud se cumpla plenamente.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">🎯</span>
                                            <h5 className="text-lg font-semibold text-white">Acceso Efectivo</h5>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            El derecho a la salud incluye el acceso efectivo a medicamentos. Pildhora elimina 
                                            las barreras de adherencia mediante recordatorios inteligentes, asegurando que 
                                            recibas tu medicación en el momento preciso, sin olvidos ni retrasos.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">📊</span>
                                            <h5 className="text-lg font-semibold text-white">Información y Transparencia</h5>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Tu derecho a la información médica se respalda con reportes detallados de adherencia, 
                                            historial de tomas y alertas de seguridad. Conocé exactamente cómo está funcionando 
                                            tu tratamiento con datos claros y accesibles.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">🤝</span>
                                            <h5 className="text-lg font-semibold text-white">Autonomía y Participación</h5>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            El derecho a participar en decisiones sobre tu salud se fortalece con información 
                                            precisa sobre tu adherencia. Podés compartir datos con tu médico para tomar 
                                            decisiones informadas sobre tu tratamiento.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">🛡️</span>
                                            <h5 className="text-lg font-semibold text-white">Protección y Dignidad</h5>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Tu dignidad como paciente se respeta mediante un sistema discreto, confiable y 
                                            diseñado para integrarse respetuosamente en tu vida diaria, sin estigmatización 
                                            ni complicaciones innecesarias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Relación Dinámica */}
                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700">
                            <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                                <span className="text-3xl">⚡</span>
                                La Relación Dinámica: Derecho a la Salud + Tecnología Inteligente
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="bg-purple-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">📱</span>
                                    </div>
                                    <h5 className="text-lg font-semibold text-white mb-2">Tecnología Accesible</h5>
                                    <p className="text-gray-300 text-sm">
                                        Diseñado para ser intuitivo y accesible para personas de todas las edades y capacidades
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-purple-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">⏰</span>
                                    </div>
                                    <h5 className="text-lg font-semibold text-white mb-2">Oportunidad Garantizada</h5>
                                    <p className="text-gray-300 text-sm">
                                        Recordatorios precisos que garantizan que ninguna dosis importante se pierda por falta de recordatorio
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-purple-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">🔗</span>
                                    </div>
                                    <h5 className="text-lg font-semibold text-white mb-2">Conexión Familiar</h5>
                                    <p className="text-gray-300 text-sm">
                                        Incluye a tu familia en el cuidado de tu salud, fortaleciendo tu red de apoyo
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                <p className="text-gray-300 leading-relaxed text-center">
                                    <strong className="text-purple-400">La sinergia perfecta:</strong> El derecho a la salud 
                                    establece el <em>por qué</em> y el <em>qué</em> debemos garantizar, mientras que Pildhora 
                                    proporciona el <em>cómo</em>. Juntos, transforman un derecho abstracto en una realidad 
                                    tangible que mejora tu calidad de vida día tras día.
                                </p>
                            </div>
                        </div>

                        {/* Impacto Social y Personal */}
                        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-700">
                            <h4 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                                <span className="text-3xl">📈</span>
                                Impacto en tu Vida: Más que un Dispositivo, un Compañero de Derechos
                            </h4>
                            <div className="space-y-6">
                                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                    <h5 className="text-lg font-semibold text-orange-400 mb-4">Reducción de Barreras</h5>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                                        <div>
                                            <strong className="text-white">Antes:</strong> Olvidos frecuentes, confusión con horarios, 
                                            dificultad para recordar múltiples medicamentos, ansiedad por la responsabilidad.
                                        </div>
                                        <div>
                                            <strong className="text-white">Con Pildhora:</strong> Recordatorios precisos, organización 
                                            automática, tranquilidad mental, confianza en el tratamiento.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                    <h5 className="text-lg font-semibold text-orange-400 mb-4">Empoderamiento Personal</h5>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Al garantizar que tu tratamiento se cumpla correctamente, Pildhora te empodera para:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Tomar control activo de tu salud
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Reducir estrés y ansiedad relacionada con la medicación
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Mejorar tu calidad de vida diaria
                                            </li>
                                        </ul>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Participar activamente en tu tratamiento
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Mantener independencia y autonomía
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span>
                                                Construir hábitos saludables sostenibles
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conclusión Inspiradora */}
                        <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-2xl p-8 border border-teal-700 text-center">
                            <h4 className="text-2xl font-bold text-teal-400 mb-6 flex items-center justify-center gap-3">
                                <span className="text-3xl">🌟</span>
                                Tu Derecho, Tu Herramienta, Tu Vida Mejor
                            </h4>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                                Pildhora representa más que tecnología: es la materialización de tu derecho fundamental a la salud. 
                                Cada recordatorio, cada notificación, cada función está diseñada para garantizar que puedas 
                                ejercer plenamente este derecho sin complicaciones, sin olvidos, sin barreras.
                            </p>
                            <div className="bg-teal-900/30 rounded-xl p-6 border border-teal-600">
                                <p className="text-teal-300 font-semibold text-center">
                                    "El derecho a la salud no es solo el acceso a servicios médicos, sino el acceso 
                                    efectivo a una vida saludable. Con Pildhora, ese acceso está en tus manos, 
                                    funcionando silenciosamente para garantizar que cada día puedas vivir 
                                    plenamente, con salud, dignidad y tranquilidad."
                                </p>
                            </div>
                        </div>
                    </div>
                </LegalContent>

                {/* Certificaciones y Seguridad */}
                <LegalContent isVisible={activeLegalTab === 'seguridad'}>
                    <div className="space-y-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">🏆 Certificaciones y Seguridad</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Nuestros estándares de calidad y seguridad están certificados por organismos internacionales.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                <h4 className="text-cyan-400 font-bold mb-4">Certificaciones de Seguridad</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">ISO 27001 - Gestión de seguridad de la información</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Normas IRAM para dispositivos electrónicos</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Compatibilidad electromagnética (CEM)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Seguridad eléctrica IRAM-IEC 60950</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                                <h4 className="text-cyan-400 font-bold mb-4">Auditorías y Compliance</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Auditorías anuales por terceros independientes</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Evaluaciones de impacto en protección de datos</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Estándares de calidad de software médico</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                                        <span className="text-gray-300 text-sm">Registro ENACOM - Ente Nacional de Comunicaciones</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-cyan-900/20 px-4 py-2 rounded-lg border border-cyan-700">
                                <ShieldIcon className="w-5 h-5 text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-semibold">Actualizado: Noviembre 2023 - Ley 27.699 de Protección de Datos</span>
                            </div>
                        </div>
                    </div>
                </LegalContent>
            </div>
            
            {/* Contact Section */}
            <div className="mt-16 text-center">
                <h3 className="text-xl font-bold text-white mb-4">¿Tenés dudas sobre tu privacidad o derechos?</h3>
                <p className="text-gray-400 mb-6">
                    Estamos comprometidos con la transparencia total. Contactanos para consultas sobre aspectos legales.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a href="mailto:legal@pildhora.com" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        📧 Contactar al Equipo Legal
                    </a>
                    <a href="#contacto" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        💬 Soporte al Cliente
                    </a>
                </div>
            </div>
        </Section>

        {/* Screen 5: Footer/Contacto */}
        <footer id="contacto" className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <a href="#inicio" className="flex items-center justify-center gap-2 mb-4">
                    <PildhoraImageLogo className="w-8 h-8" />
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
