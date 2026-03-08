// src/components/MapaInteractiva.tsx
import React, { useState } from 'react';
import MapaMarker from './MapaMarker';
import CommunicationPanel from './CommunicationPanel';
import { bancoRetos } from '../data/bancoRetos';
import { Reto } from '../types';

const MapaInteractiva: React.FC = () => {
  const [retoActivo, setRetoActivo] = useState<Reto | null>(null);

  const abrirReto = (idReto: number) => {
    const retoEncontrado = bancoRetos.find(r => r.id === idReto);
    if (retoEncontrado) setRetoActivo(retoEncontrado);
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
      
      {/* Tu imagen base de assets */}
      <img 
        src="assets/Escenario0.jpg" 
        alt="Mapa Interactivo" 
        className="w-full h-auto block"
      />

      {/* ICONOS ANIMADOS (Coordenadas ajustadas a tu imagen) */}
      <MapaMarker numero={0} label="HOGAR" top="7%" left="17%" onClick={() => abrirReto(0)} />
      <MapaMarker numero={1} label="SUPER" top="36%" left="44%" onClick={() => abrirReto(1)} />
      <MapaMarker numero={2} label="EDIFICIO" top="61%" left="93%" onClick={() => abrirReto(2)} />
      <MapaMarker numero={3} label="PAN" top="73%" left="14%" onClick={() => abrirReto(3)} />
      <MapaMarker numero={4} label="TIENDA" top="61%" left="60%" onClick={() => abrirReto(4)} />

      {/* Modal que muestra el reto al hacer clic */}
      {retoActivo && (
        <CommunicationPanel 
          reto={retoActivo} 
          onCerrar={() => setRetoActivo(null)} 
        />
      )}
    </div>
  );
};

export default MapaInteractiva;
