import React, { useState } from 'react';
import { Reto } from '../types';

interface Props {
  reto: Reto;
  onGanar: () => void;
}

const VerticalOrdering: React.FC<Props> = ({ reto, onGanar }) => {
  // Estado para saber qué objeto está en cada nivel (5 al 1)
  const [estante, setEstante] = useState<Record<number, string | null>>({
    5: null, 4: null, 3: null, 2: null, 1: null
  });
  const [feedback, setFeedback] = useState("");

  const objetos = [
    { id: 'portatil', img: 'assets/portatil.png', nombre: 'Portátil' },
    { id: 'reloj', img: 'assets/reloj.png', nombre: 'Reloj' },
    { id: 'pelicula', img: 'assets/pelicula.png', nombre: 'Película' },
    { id: 'tablet', img: 'assets/tablet.png', nombre: 'Tablet' },
    { id: 'control', img: 'assets/control.png', nombre: 'Control' }
  ];

  // Simulación de colocación (mientras instalas dnd-kit, esto permite probar)
  const colocarObjeto = (nivel: number, id: string) => {
    setEstante(prev => ({ ...prev, [nivel]: id }));
    setFeedback(""); 
  };

  const verificarLogica = () => {
    // Orden de arriba hacia abajo según el Guion: Portátil, Reloj, Película, Tablet, Control
    const esCorrecto = 
      estante[5] === 'portatil' && 
      estante[4] === 'reloj' && 
      estante[3] === 'pelicula' && 
      estante[2] === 'tablet' && 
      estante[1] === 'control';

    if (esCorrecto) {
      setFeedback("¡Increíble! ¡Todo está en su lugar! +50 monedas 💰");
      setTimeout(() => onGanar(), 2000);
    } else {
      // Andamiaje pedagógico: Pista personalizada de Mateo
      setFeedback(`Mmm... algo no cuadra. Mateo dice: "${reto.pista_andamiaje}"`);
    }
  };

  return (
    <div className="bg-[#fdfcf0] p-6 rounded-[40px] border-4 border-[#e0f2f1] flex flex-col items-center gap-6 shadow-xl">
      
      {/* Estante de 5 niveles (Drop Zones) */}
      <div className="flex flex-col gap-2 w-full max-w-[280px]">
        {[5, 4, 3, 2, 1].map((nivel) => (
          <div 
            key={nivel} 
            className={`h-20 border-2 border-dashed rounded-2xl flex items-center justify-center transition-all ${
              estante[nivel] ? 'border-purple-500 bg-white' : 'border-purple-200 bg-white/30'
            }`}
          >
            <span className="absolute left-10 text-[9px] font-black text-purple-200 uppercase">Nivel {nivel}</span>
            {estante[nivel] && (
              <img 
                src={`assets/${estante[nivel]}.png`} 
                className="h-16 w-16 object-contain animate-in zoom-in duration-300" 
                alt="Objeto colocado"
              />
            )}
          </div>
        ))}
      </div>

      {/* Galería de Objetos (Draggables) */}
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white rounded-3xl shadow-inner border border-gray-100">
        {objetos.map(obj => (
          <button 
            key={obj.id}
            onClick={() => {
              // Lógica temporal de "clic para ubicar" antes de habilitar el arrastre total
              const nivelVacio = [5,4,3,2,1].find(n => !estante[n]);
              if(nivelVacio) colocarObjeto(nivelVacio, obj.id);
            }}
            className="group flex flex-col items-center gap-1 active:scale-90 transition-transform"
          >
            <img src={obj.img} className="w-14 h-14 object-contain" alt={obj.nombre} />
            <span className="text-[10px] font-bold text-gray-400 uppercase">{obj.nombre}</span>
          </button>
        ))}
      </div>

      {/* Feedback y Botón de Validación */}
      <div className="w-full space-y-4 text-center">
        {feedback && (
          <p className={`text-xs font-bold italic p-3 rounded-xl ${feedback.includes('Increíble') ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
            {feedback}
          </p>
        )}
        <button 
          onClick={verificarLogica}
          className="w-full py-4 bg-purple-600 text-white font-black rounded-2xl shadow-lg hover:bg-purple-700 active:scale-95 transition-all uppercase tracking-widest"
        >
          ¡Listo, Sacha y Mateo! →
        </button>
      </div>
    </div>
  );
};

export default VerticalOrdering;
