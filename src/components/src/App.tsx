// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MapaInteractiva from './components/MapaInteractiva';
import Footer from './components/Footer';
import { Estudiante } from './types';

function App() {
  // Estado simulado del estudiante (esto vendrá de Supabase luego)
  const [estudiante, setEstudiante] = useState<Estudiante>({
    nombre: "JORGE JARAMILLO",
    puntos: 150,
    progreso: 20, // 20% porque ganó el nivel 0
    capitulo_actual: 1
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. Barra de Identidad y Progreso */}
      <Navbar 
        nombreEstudiante={estudiante.nombre} 
        progreso={estudiante.progreso} 
        monedas={estudiante.puntos}
      />

      {/* 2. Contenedor Principal (Mapa + Panel) */}
      <main className="flex-grow p-4 md:p-8 flex items-center justify-center">
        <MapaInteractiva />
      </main>

      {/* 3. Créditos Académicos Actualizados */}
      <Footer />
    </div>
  );
}

export default App;
