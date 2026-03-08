// src/types.ts

// 1. Definición del Estudiante
export interface Estudiante {
  id_supabase?: string;
  nombre: string;
  puntos: number;
  progreso: number; // Porcentaje de 0 a 100
  capitulo_actual: number;
}

// 2. Definición de la Estructura de un Reto
export interface Reto {
  id: number;
  titulo: string;
  escenario: string; // Ejemplo: "El Hogar", "La Panadería"
  personajes: string[]; // Ejemplo: ["Amani", "Izel"]
  mision: string; // Instrucción pedagógica
  tipo_ordenamiento: 'vertical' | 'horizontal' | 'circular' | 'matriz';
  orden_correcto: string[];
  pista_andamiaje: string;
  imagen_url: string; // Ruta en assets/
}

// 3. Estado Global del Juego
export interface GameState {
  estudiante: Estudiante | null;
  retoActivo: Reto | null;
  isModalOpen: boolean;
}
