// src/data/bancoRetos.ts
import { Reto } from '../types';

export const bancoRetos: Reto[] = [
  {
    id: 0,
    titulo: "Escenario 0: El Hogar",
    escenario: "JuegoCasa",
    personajes: ["Amani", "Izel"],
    mision: "¡Hola! 'Lo que se vive, se enseña'. Organiza tu estante personal de ARRIBA hacia ABAJO con tus herramientas: Portátil, Reloj, Película, Tablet y Control.",
    tipo_ordenamiento: 'vertical',
    orden_correcto: ["Portátil", "Reloj", "Película", "Tablet", "Control"],
    pista_andamiaje: "El portátil es tu herramienta más alta para organizar tu futuro.",
    imagen_url: "assets/Escenario0.jpg",
    ambiente: "Cálido, colores pasteles (amarillo y menta)"
  },
  {
    id: 1,
    titulo: "Capítulo 1: Sector Comercial",
    escenario: "Supermercado",
    personajes: ["Sacha", "Mateo"],
    mision: "Organiza la estantería de forma horizontal: Café, Pan, Leche y Huevos.",
    tipo_ordenamiento: 'horizontal',
    orden_correcto: ["Café", "Pan", "Leche", "Huevos"],
    pista_andamiaje: "Empieza por el café a la izquierda y termina con los huevos a la derecha.",
    imagen_url: "assets/Escenario1.png",
    ambiente: "Dinámico, naranjas y azules saturados"
  },
  {
    id: 2,
    titulo: "Escenario 2: El Edificio",
    escenario: "JuegoEdificio",
    personajes: ["Sacha", "Mateo"],
    mision: "¡Rápido! Atrapa las gotas de agua para que el suelo no se moje. Mientras tanto, lleva a los inquilinos a sus pisos según las pistas.",
    tipo_ordenamiento: 'vertical',
    orden_correcto: ["Hugo", "Paco", "Luis"],
    pista_andamiaje: "Hugo vive arriba de Paco. ¡No dejes que caigan las gotas!",
    imagen_url: "assets/Escenario2.3.png",
    ambiente: "Urbano profesional, grises metálicos y azules profundos"
  },
  {
    id: 3,
    titulo: "Capítulo 3: La Panadería",
    escenario: "La Panadería",
    personajes: ["Elena", "Kenji"],
    mision: "Espanta a los ratones por higiene. Ahora, ubica a los amigos en la mesa redonda: Juan frente a Rosa y Luis a la derecha de Juan.",
    tipo_ordenamiento: 'circular',
    orden_correcto: ["Juan", "Rosa", "Luis", "Ana"],
    pista_andamiaje: "Si Juan está en un extremo, Rosa debe estar justo al lado opuesto.",
    imagen_url: "assets/Escenario3.png",
    ambiente: "Acogedor, tonos cafés, cremas y amarillos"
  },
  {
    id: 4,
    titulo: "Escenario 4: La Tienda",
    escenario: "JuegoTienda",
    personajes: ["Lucía", "Thiago"],
    mision: "Nivel de Abstracción Máxima: Cruza en el Tablero de Despachos los nombres de los clientes con sus prendas solicitadas.",
    tipo_ordenamiento: 'matriz',
    orden_correcto: ["Carla-Blusa", "Daniela-Camisa", "Eliana-Jean"],
    pista_andamiaje: "Usa la deducción por eliminación para llenar la cuadrícula.",
    imagen_url: "assets/Escenario4.png",
    ambiente: "Sofisticado, magenta, violeta y blanco"
  }
];
