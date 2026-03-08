// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  nombreEstudiante: string;
  progreso: number;
  monedas: number;
}

const Navbar: React.FC<NavbarProps> = ({ nombreEstudiante, progreso, monedas }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="bg-purple-50 p-2 rounded-xl text-lg">🏠</div>
        <div className="flex flex-col">
          <span className="font-bold text-purple-700 text-lg leading-tight">Lógica 6º/7º</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">Estudiante: {nombreEstudiante}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 my-3 md:my-0">
        <span className="text-xs font-bold text-gray-500">PROGRESO:</span>
        <div className="w-32 h-3 bg-gray-100 rounded-full border border-gray-200 overflow-hidden">
          <div 
            className="h-full bg-purple-600 transition-all duration-1000 ease-out" 
            style={{ width: `${progreso}%` }}
          />
        </div>
        <div className="bg-yellow-50 px-4 py-1 rounded-full text-yellow-700 font-bold border border-yellow-200 text-sm flex items-center gap-2">
          💰 {monedas}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs uppercase hover:bg-indigo-100 transition">✉ Buzón</button>
        <button className="px-4 py-2 rounded-lg bg-red-50 text-red-500 font-bold text-xs uppercase hover:bg-red-100 transition">Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;
