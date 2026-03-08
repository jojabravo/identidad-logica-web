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
      className="absolute z-[999] cursor-pointer group" 
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      {/* Círculo Rojo Brillante para pruebas */}
      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-100 scale-150"></div>
      
      <div className="relative w-12 h-12 bg-red-600 rounded-full border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.5)]">
        <span className="text-white font-black text-xl">{numero}</span>
      </div>

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-100">
        {label}
      </div>
    </div>
  );
};

export default MapaMarker;
