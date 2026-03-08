// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 px-6 mt-10 border-t border-gray-100 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Nombre del Autor */}
        <h2 className="text-2xl font-bold text-purple-700">
          Jorge Armando Jaramillo Bravo
        </h2>

        {/* Títulos Académicos con Iconos */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600">
          <span className="flex items-center gap-2">
            <span className="text-purple-500">⚛️</span> 
            Licenciado en matemáticas y física (UdeA)
          </span>
          <span className="flex items-center gap-2">
            <span className="text-purple-500">♉</span> 
            Magister en enseñanza (UNAL)
          </span>
          <span className="flex items-center gap-2">
            <span className="text-purple-500">🎓</span> 
            Doctorante en Educación (UTEL)
          </span>
        </div>

        {/* Colaboradores */}
        <p className="text-gray-500 text-sm italic">
          Colaboradores: Didier Garcia - Didier Durango
        </p>

        {/* Marca Institucional */}
        <div className="pt-4 border-t border-gray-50 max-w-xs mx-auto">
          <p className="text-green-500 font-bold text-xs tracking-widest uppercase">
            © 2026 - LABORATORIO INTERACTIVO JOSEFA CAMPOS
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
