// src/components/VerticalOrdering.tsx
import React, { useState } from 'react';
import { Reto } from '../types';

interface Props {
  reto: Reto;
  onGanar: () => void;
}

const VerticalOrdering: React.FC<Props> = ({ reto, onGanar }) => {
  const [paso, setPaso] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Las imágenes que ya tienes listas en assets/
  const objetos = [
    { id: 'portatil', img: 'assets/portatil.png', nombre: 'Portátil' },
    { id: 'reloj', img: 'assets/reloj.png', nombre: 'Reloj' },
    { id: 'pelicula', img: 'assets/pelicula.png', nombre: 'Película' },
    { id: 'tablet', img: 'assets/tablet.png', nombre: 'Tablet' },
    { id: 'control', img: 'assets/control.png', nombre: 'Control' }
  ];

  const verificarLogica = (respuesta: string) => {
    // El orden de tu guion: Portátil (5), Reloj (4), Película (3), Tablet (2), Control (1)
    const ordenCorrecto = ["portatil", "reloj", "pelicula", "tablet", "control"];
    
    // Aquí evaluamos con el andamiaje pedagógico de Sacha y Mateo
    if (respuesta.toLowerCase().includes("portátil") && respuesta.toLowerCase().startsWith("portátil")) {
      setFeedback("¡Excelente comienzo! El portátil está seguro en lo más alto.");
      onGanar(); // Activa recompensas
    } else {
      setFeedback(`Pista de Mateo: ${reto.pista_andamiaje}`);
    }
  };

  return (
    <div className="bg-[#fdfcf0] p-6 rounded-[40px] border-4 border-[#e0f2f1] shadow-inner">
      <div className="flex flex-col items-center gap-4">
        
        {/* Representación Visual de los 5 Niveles */}
        <div className="grid grid-rows-5 gap-2 w-full max-w-[200px] bg-white/50 p-4 rounded-2xl border-2 border-dashed border-purple-200">
          {[5, 4, 3, 2, 1].map((nivel) => (
            <div key={nivel} className="h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-300">
              NIVEL {nivel}
            </div>
          ))}
        </div>

        {/* Galería de Objetos (Tus imágenes) */}
        <div className="flex flex-wrap justify-center gap-3 py-4">
          {objetos.map(obj => (
            <div key={obj.id} className="group relative">
              <img src={obj.img} alt={obj.nombre} className="w-14 h-14 object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[8px] bg-purple-600 text-white px-2 rounded-full opacity-0 group-hover:opacity-100">{obj.nombre}</span>
            </div>
          ))}
        </div>

        {/* Feedback de Sacha y Mateo */}
        {feedback && (
          <div className="bg-mint-50 text-mint-700 p-3 rounded-xl text-xs font-medium italic animate-pulse">
            "{feedback}"
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalOrdering;
