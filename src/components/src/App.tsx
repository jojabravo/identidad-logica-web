// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MapaInteractiva from './components/MapaInteractiva';
import Footer from './components/Footer';
import CommunicationPanel from './components/CommunicationPanel'; // Tu panel de retos
import { bancoRetos } from './data/bancoRetos';
import { Estudiante, Reto } from './types';

function App() {
  const [estudiante, setEstudiante] = useState<Estudiante>({
    nombre: "JORGE JARAMILLO",
    puntos: 0,
    progreso: 0,
    capitulo_actual: 0
  });

  const [retoActivo, setRetoActivo] = useState<Reto | null>(null);

  // Función para abrir el reto desde el mapa
  const manejarAbrirReto = (id: number) => {
    const reto = bancoRetos.find(r => r.id === id);
    if (reto) setRetoActivo(reto);
  };

  // Función para cuando el estudiante gana (reemplaza ganarPuntos)
  const manejarAcierto = () => {
    setEstudiante(prev => ({
      ...prev,
      puntos: prev.puntos + 50,
      progreso: Math.min(prev.progreso + 20, 100)
    }));
    setRetoActivo(null); // Cierra el panel al ganar
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar 
        nombreEstudiante={estudiante.nombre} 
        progreso={estudiante.progreso} 
        monedas={estudiante.puntos}
      />

      <main className="flex-grow p-4 md:p-8 flex items-center justify-center relative">
        {/* Pasamos la función al mapa para que los pines funcionen */}
        <MapaInteractiva alSeleccionarNivel={manejarAbrirReto} />
        
        {/* Si hay un reto activo, mostramos el Panel de Comunicación */}
        {retoActivo && (
          <CommunicationPanel 
            reto={retoActivo} 
            onCerrar={() => setRetoActivo(null)} 
            onGanar={manejarAcierto}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
