// src/components/CommunicationPanel.tsx
import React, { useState, useEffect } from 'react';
import { Reto } from '../types';

interface Props {
  reto: Reto;
  onCerrar: () => void;
  onGanar: () => void;
}

const CommunicationPanel: React.FC<Props> = ({ reto, onCerrar, onGanar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensajeFeedback, setMensajeFeedback] = useState("");
  // Estado para guardar los iconos en orden aleatorio
  const [iconosMezclados, setIconosMezclados] = useState<string[]>([]);

  // Función para desordenar los objetos (Fisher-Yates Shuffle)
  useEffect(() => {
    if (reto.orden_correcto) {
      const mezclados = [...reto.orden_correcto].sort(() => Math.random() - 0.5);
      setIconosMezclados(mezclados);
    }
  }, [reto]);

  const validarLógica = () => {
    const respUsuario = respuesta.trim().toLowerCase();
    
    // Verificamos si la respuesta contiene las palabras clave en cualquier parte
    const esCorrecto = reto.orden_correcto.every(item => 
      respUsuario.includes(item.toLowerCase())
    );

    if (esCorrecto) {
      setMensajeFeedback("¡Excelente razonamiento! Has ganado 50 monedas 💰");
      setTimeout(() => {
        onGanar();
      }, 2000);
    } else {
      setMensajeFeedback(`Pista de ${reto.personajes[0]}: ${reto.pista_andamiaje}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1001] p-4">
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl border-4 border-purple-100 overflow-hidden overflow-y-auto max-height-[90vh]">
        
        <div className="bg-purple-600 p-5 text-white flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-lg uppercase tracking-tight">{reto.titulo}</h3>
          <button onClick={onCerrar} className="bg-purple-400 hover:bg-purple-800 p-2 rounded-full transition">✕</button>
        </div>

        <div className="p-6 space-y-5">
          {/* Visualización de Objetos Mezclados Horizontalmente */}
          <div className="bg-purple-50 p-4 rounded-2xl flex justify-center gap-2 overflow-x-auto">
             {iconosMezclados.map((nombre, index) => (
               <div key={index} className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm border border-purple-100 min-w-[60px]">
                 <span className="text-[10px] font-bold text-purple-600">{nombre}</span>
               </div>
             ))}
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl border-l-8 border-purple-500 shadow-inner text-left">
            <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest block mb-1">
              {reto.personajes.join(' e ')} dicen:
            </span>
            <p className="text-gray-700 text-sm italic leading-relaxed font-medium">
              "{reto.mision}"
            </p>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest">Tu solución:</label>
            <textarea 
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe el orden correcto aquí..." 
              className="w-full p-4 h-24 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-purple-300 focus:bg-white transition-all outline-none text-gray-700 font-medium resize-none"
            />
          </div>

          {mensajeFeedback && (
            <div className={`p-3 rounded-xl text-xs font-bold text-center animate-bounce ${
              mensajeFeedback.includes('Excelente') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {mensajeFeedback}
            </div>
          )}

          <button 
            onClick={validarLógica}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-100 transition-all active:scale-95 transform"
          >
            ENVIAR AL MOTOR LÓGICO →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;
