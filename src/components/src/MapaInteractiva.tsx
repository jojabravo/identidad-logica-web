// src/components/MapaInteractiva.tsx
import React, { useState } from 'react';
import MapaMarker from './MapaMarker';
import { bancoRetos } from '../data/bancoRetos';

const MapaInteractiva: React.FC = () => {
  return (
    <div className="relative inline-block w-full max-w-[600px] border-4 border-yellow-400"> 
      {/* El borde amarillo te ayudará a ver dónde termina el mapa */}
      
      <img 
        src="assets/Escenario0.jpg" 
        alt="Mapa" 
        className="w-full h-auto block"
      />

      {/* Prueba con un solo punto en el puro centro (50%, 50%) */}
      <MapaMarker 
        numero={0} 
        label="PRUEBA" 
        top="50%" 
        left="50%" 
        onClick={() => alert("¡Punto detectado!")} 
      />
    </div>
  );
};

export default MapaInteractiva;
