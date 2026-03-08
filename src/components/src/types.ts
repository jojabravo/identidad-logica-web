// src/types.ts
export interface Reto {
    id: number;
    titulo: string;
    escenario: string;
    personajes: string[];
    mision: string;
    ordenCorrecto: string[];
    pista: string;
}

export interface Estudiante {
    nombre: string;
    puntos: number;
    progreso: number;
}
