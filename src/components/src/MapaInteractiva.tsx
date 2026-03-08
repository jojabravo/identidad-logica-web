// src/components/MapaInteractiva.tsx
import React, { useState } from 'react';
import MapaMarker from './MapaMarker';
import CommunicationPanel from './CommunicationPanel';
import { bancoRetos } from '../data/bancoRetos';
import { Reto } from '../types';

const MapaInteractiva: React.FC = () => {
  // Estado para controlar qué reto está abierto
  const [retoActivo, setRetoActivo] = useState<Reto | null>(null);

  // Función para abrir un reto específico
  const abrirReto = (idReto: number) => {
    const retoEncontrado = bancoRetos.find(r => r.id === idReto);
    if (retoEncontrado) {
      setRetoActivo(retoEncontrado);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border-4 border-gray-100">
      
      {/* Imagen Base del Mapa (calle-barrio.jpg) */}
      <img 
        src="assets/calle-barrio.jpg" 
        alt="Mapa del Barrio de Identidad Lógica" 
        className="w-full h-auto object-cover"
      />

      {/* --- UBICACIÓN DE LOS PUNTOS INTERACTIVOS (ANIMADOS) --- */}
      {/* He estimado las posiciones basándome en tu imagen. 
        Ajusta los valores 'top' y 'left' si es necesario.
      */}
      
      {/* Punto 0: JuegoCasa */}
      <MapaMarker 
        numero={0} 
        label="HOME" 
        top="10%" // Ajusta según la casa en tu imagen
        left="15%"
        onClick={() => abrirReto(0)}
      />

      {/* Punto 1: Supermercado */}
      <MapaMarker 
        numero={1} 
        label="SHOP" 
        top="42%" 
        left="43%"
        onClick={() => abrirReto(1)}
      />

      {/* Punto 2: El Edificio */}
      <MapaMarker 
        numero={2} 
        label="BUILDING" 
        top="58%" 
        left="88%"
        onClick={() => abrirReto(2)}
      />

      {/* Punto 3: La Panadería */}
      <MapaMarker 
        numero={3} 
        label="BAKERY" 
        top="88%" 
        left="12%"
        onClick={() => abrirReto(3)}
      />

      {/* Punto 4: La Tienda (Boutique) */}
      <MapaMarker 
        numero={4} 
        label="BOUTIQUE" 
        top="75%" 
        left="61%"
        onClick={() => abrirReto(4)}
      />

      {/* --- PANEL DE COMUNICACIÓN (MODAL) --- */}
      {/* Se abre solo si hay un reto activo en el estado */}
      {retoActivo && (
        <CommunicationPanel 
          reto={retoActivo} 
          onCerrar={() => setRetoActivo(null)} 
        />
      )}
    </div>
  );
};

export default MapaInteractiva;
