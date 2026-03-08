// src/components/CommunicationPanel.tsx
import React, { useState, useMemo } from 'react';
import { Reto } from '../types';

interface Props {
  reto: Reto;
  onCerrar: () => void;
  onGanar: () => void;
}

const CommunicationPanel: React.FC<Props> = ({ reto, onCerrar, onGanar }) => {
  const [respuesta, setRespuesta] = useState("");
  const [mensajeFeedback, setMensajeFeedback] = useState("");

  // --- LÓGICA DE MEZCLADO AGRESIVO (Fisher-Yates) ---
  const objetosMezclados = useMemo(() => {
    if (!reto.orden_correcto) return [];
    
    // Mapeamos a un objeto con ID para forzar el re-renderizado
    let array = reto.orden_correcto.map((nombre, id) => ({ id, nombre }));
    
    // Algoritmo Fisher-Yates (Mezclado real)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    // Si por pura casualidad queda igual, lo invertimos
    if (array.map(o => o.nombre).join(',') === reto.orden_correcto.join(',')) {
        return [...array].reverse(); 
    }
    
    return array;
  }, [reto.id, reto.mision]); // Se re-mezcla si cambia el reto o la misión

  // --- LÓGICA DE VALIDACIÓN ---
  const validarLógica = () => {
    const respUsuario = respuesta.trim().toLowerCase();
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1001] p-2 md:p-4">
      {/* Tarjeta principal adaptada a celular */}
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl border-4 border-purple-100 overflow-y-auto max-h-[95vh] flex flex-col">
        
        {/* Cabecera Fija */}
        <div className="bg-purple-600 p-4 text-white flex justify-between items-center sticky top-0 z-20 shrink-0">
          <h3 className="font-bold text-base md:text-lg uppercase tracking-tight">{reto.titulo}</h3>
          <button onClick={onCerrar} className="bg-purple-400 hover:bg-purple-800 p-2 rounded-full transition">✕</button>
        </div>

        <div className="p-4 md:p-6 space-y-4 md:space-y-5 flex-grow">
          
          {/* Fila de Iconos GRANDES y DESORDENADOS */}
          {/* El 'key' con random() fuerza el re-renderizado total para asegurar el desorden */}
          <div key={Math.random()} className="bg-purple-50 p-3 rounded-2xl flex justify-center gap-2 overflow-x-auto border-2 border-dashed border-purple-200 shrink-0">
             {objetosMezclados.map((obj) => (
               <div key={obj.id} className="flex flex-col items-center p-2 md:p-3 bg-white rounded-xl shadow-md border border-purple-100 min-w-[65px] flex-1">
                 {/* Aquí pones la imagen real del objeto */}
                 <span className="text-[9px] md:text-[10px] font-black text-purple-700 uppercase text-center break-words">{obj.nombre}</span>
               </div>
             ))}
          </div>

          {/* Burbuja de Diálogo Pedagógico */}
          <div className="bg-purple-50 p-4 md:p-5 rounded-2xl border-l-8 border-purple-500 shadow-inner text-left">
            <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest block mb-1">
              {reto.personajes.join(' e ')} dicen:
            </span>
            <p className="text-gray-700 text-sm italic leading-relaxed font-medium">
              "{reto.mision}"
            </p>
          </div>

          {/* Área de Respuesta */}
          <div className="space-y-1 text-left flex-grow">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest">Tu solución:</label>
            <textarea 
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe el orden (ej: Portátil, Reloj...)" 
              className="w-full p-3 md:p-4 h-20 md:h-24 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-purple-300 focus:bg-white transition-all outline-none text-gray-700 font-medium resize-none text-sm"
            />
          </div>

          {/* Feedback */}
          {mensajeFeedback && (
            <div className={`p-2 rounded-xl text-xs font-bold text-center animate-bounce ${
              mensajeFeedback.includes('Excelente') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {mensajeFeedback}
            </div>
          )}

          {/* Botón de Validar siempre visible */}
          <button 
            onClick={validarLógica}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-3 md:py-4 rounded-2xl shadow-xl shadow-purple-100 transition-all active:scale-95 transform shrink-0 text-sm md:text-base"
          >
            VALIDAR ORDEN LÓGICO →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;
