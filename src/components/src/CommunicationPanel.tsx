// src/components/CommunicationPanel.tsx
import React from 'react';
import { Reto } from '../types';

interface Props {
  reto: Reto;
  onCerrar: () => void;
}

const CommunicationPanel: React.FC<Props> = ({ reto, onCerrar }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl border border-purple-100 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Cabecera con el color del escenario */}
        <div className="bg-purple-600 p-5 text-white flex justify-between items-center">
          <h3 className="font-bold text-lg">{reto.titulo}</h3>
          <button onClick={onCerrar} className="hover:bg-purple-700 p-2 rounded-full transition">✕</button>
        </div>

        <div className="p-6 space-y-6">
          {/* Burbuja de diálogo de los personajes */}
          <div className="bg-purple-50 p-5 rounded-2xl border-l-4 border-purple-500">
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">
              Tutores: {reto.personajes.join(' e ')}
            </span>
            <p className="text-gray-700 text-sm mt-2 italic leading-relaxed">
              "{reto.mision}"
            </p>
          </div>

          {/* Campo de entrada de respuesta */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Tu respuesta lógica:</label>
            <input 
              type="text" 
              placeholder="Ej: Portátil, Reloj..." 
              className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-purple-300 focus:bg-white transition-all outline-none text-gray-600"
            />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95">
            ENVIAR AL MOTOR LÓGICO →
          </button>
        </div>
        
        <div className="bg-gray-50 p-3 text-center">
           <span className="text-[9px] text-gray-400 font-medium">Ambiente: {reto.ambiente}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;
