// src/components/MapaMarker.tsx
import React from 'react';

interface MapaMarkerProps {
  numero: number;
  label: string;
  top: string;
  left: string;
  onClick: () => void;
}

const MapaMarker: React.FC<MapaMarkerProps> = ({ numero, label, top, left, onClick }) => {
  return (
    <div 
      className="absolute z-10 cursor-pointer group"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      {/* 1. Efecto de Pulso (La "Vida" del icono) */}
      <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75 scale-125"></div>
      
      {/* 2. Círculo Principal con el Número */}
      <div className="relative w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 active:scale-95">
        <span className="text-white font-bold text-lg leading-none">{numero}</span>
      </div>
      
      {/* 3. Etiqueta flotante con el nombre del lugar */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-purple-100">
        <span className="text-[9px] font-bold text-purple-700 whitespace-nowrap uppercase tracking-tighter">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MapaMarker;
