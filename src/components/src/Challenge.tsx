// src/components/Challenge.tsx
import { Reto } from '../types';

interface ChallengeProps {
    datos: Reto;
    onClose: () => void;
}

export const Challenge = ({ datos, onClose }: ChallengeProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
                <h2 className="text-xl font-bold">{datos.titulo}</h2>
                <button onClick={onClose} className="bg-red-400 px-3 py-1 rounded-lg">X</button>
            </div>
            <div className="p-8">
                <div className="bg-purple-50 p-6 rounded-3xl border-l-8 border-purple-600 mb-6">
                    <strong className="text-purple-700 block mb-2">TUTORES: {datos.personajes.join(' e ')}</strong>
                    <p className="text-gray-700 italic">"{datos.mision}"</p>
                </div>
                <input 
                    type="text" 
                    placeholder="Escribe tu respuesta aquí..." 
                    className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-purple-300 outline-none"
                />
                <button className="w-full mt-6 bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all">
                    ENVIAR SOLUCIÓN →
                </button>
            </div>
        </div>
    </div>
  );
};
