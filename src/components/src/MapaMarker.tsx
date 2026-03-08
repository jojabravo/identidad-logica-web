// src/components/MapaMarker.tsx
import React from 'react';

interface Props {
  numero: number;
  label: string;
  top: string;
  left: string;
  onClick: () => void;
}

const MapaMarker: React.FC<Props> = ({ numero, label, top, left, onClick }) => {
  return (
    <div 
      className="absolute z-[99] cursor-pointer group" 
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      {/* Efecto de Pulso Púrpura (Identidad) */}
      <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-40 scale-150 group-hover:bg-purple-600 transition-colors"></div>
      
      {/* El Círculo del Nivel */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-300">
        <span className="text-white font-black text-lg md:text-xl select-none">{numero}</span>
      </div>

      {/* Etiqueta del Escenario (Solo aparece al pasar el mouse o tocar) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
        {label.toUpperCase()}
      </div>
    </div>
  );
};

export default MapaMarker;
