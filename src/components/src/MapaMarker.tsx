// src/components/MapaMarker.tsx
import React from 'react';

interface Props {
  numero: number;
  label: string;
  onClick: () => void;
  top: string; // Posición % desde arriba
  left: string; // Posición % desde la izquierda
}

const MapaMarker: React.FC<Props> = ({ numero, label, onClick, top, left }) => {
  return (
    <div 
      className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
      style={{ top, left }}
      onClick={onClick}
    >
      {/* Círculo Animado Exterior (Efecto "Pulso de Vida") */}
      <div className="absolute inset-0 bg-purple-400 rounded-full scale-110 opacity-60 animate-ping group-hover:scale-150 transition-all duration-300"></div>

      {/* Círculo Principal con Degradado y Número */}
      <div className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-xl bg-gradient-to-b from-purple-600 to-indigo-700 hover:scale-110 transition-transform active:scale-95">
        <span className="text-2xl font-bold text-white font-mono leading-none">{numero}</span>
        
        {/* Etiqueta flotante (Ej: "HOME") */}
        <span className="absolute -bottom-6 text-[9px] font-bold text-purple-700 bg-white/90 px-3 py-1 rounded-full border border-purple-100 uppercase shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </div>
      </div>
    </div>
  );
};

export default MapaMarker;
