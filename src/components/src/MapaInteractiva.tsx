// src/components/MapaInteractiva.tsx
import React from 'react';
import MapaMarker from './MapaMarker';

interface MapaProps {
  alSeleccionarNivel: (id: number) => void;
}

const MapaInteractiva: React.FC<MapaProps> = ({ alSeleccionarNivel }) => {
  return (
    <div className="relative inline-block w-full max-w-[900px] border-4 border-white shadow-2xl rounded-[32px] overflow-hidden"> 
      
      {/* Imagen base del mapa del barrio */}
      <img 
        src="assets/Escenario0.jpg" 
        alt="Mapa del Barrio Lógico" 
        className="w-full h-auto block"
      />

      {/* Escenario 0: El Hogar */}
      <MapaMarker 
        numero={0} 
        label="Hogar" 
        top="7%" 
        left="16%" 
        onClick={() => alSeleccionarNivel(0)} 
      />

      {/* Escenario 1: Supermercado */}
      <MapaMarker 
        numero={1} 
        label="Súper" 
        top="38%" 
        left="45%" 
        onClick={() => alSeleccionarNivel(1)} 
      />

      {/* Escenario 2: El Edificio */}
      <MapaMarker 
        numero={2} 
        label="Edificio" 
        top="48%" 
        left="89%" 
        onClick={() => alSeleccionarNivel(2)} 
      />

      {/* Escenario 3: La Panadería */}
      <MapaMarker 
        numero={3} 
        label="Pan" 
        top="82%" 
        left="12%" 
        onClick={() => alSeleccionarNivel(3)} 
      />

      {/* Escenario 4: La Tienda de Moda */}
      <MapaMarker 
        numero={4} 
        label="Tienda" 
        top="54%" 
        left="63%" 
        onClick={() => alSeleccionarNivel(4)} 
      />
    </div>
  );
};

export default MapaInteractiva;
