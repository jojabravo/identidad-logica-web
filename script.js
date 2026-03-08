// ==========================================
// BASE DE DATOS DE RETOS (Fiel al Guion)
// ==========================================
const niveles = [
    { 
        id: 0, 
        titulo: "CAPÍTULO 0: EL HOGAR", 
        tutores: "Sacha y Mateo",
        mensaje: "Antes de salir, el joven debe organizar su estante personal de 5 niveles. Pistas del Jefe de Hogar:\n\n" +
                 "• El Portátil debe ir en el nivel más alto por seguridad.\n" +
                 "• El Reloj debe estar justo debajo del portátil para verlo rápido.\n" +
                 "• El Control de videojuego va en el primer nivel (el más bajo).\n" +
                 "• La Tablet va un nivel arriba del control.\n" +
                 "• La Película queda en el espacio vacío (Nivel 3).",
        pista: "Recuerda: El portátil es el nivel 5 y el control el nivel 1.",
        clave: ["portatil", "reloj", "pelicula", "tablet", "control"], // Orden de arriba (5) a abajo (1)
        imagen: "assets/Escenario0.png" 
    },
    { 
        id: 1, 
        titulo: "CAPÍTULO 1: SUPERMERCADO", 
        tutores: "Sacha y Mateo", 
        mensaje: "¡Bienvenidos al Súper! Organiza de izquierda a derecha: el Café está a la izquierda del Pan y la Leche a la derecha del Pan. ¡Atrapa las gotas!", 
        pista: "El Café es el primero a la izquierda.",
        clave: ["cafe", "pan", "leche", "huevos"], 
        imagen: "assets/Escenario1.png" 
    },
    { 
        id: 2, 
        titulo: "CAPÍTULO 2: EL EDIFICIO", 
        tutores: "Sacha y Mateo", 
        mensaje: "Dora vive en el piso más alto (5) y Beto dos pisos más abajo. ¿Cuál es el orden?", 
        pista: "Dora es el 5, cuenta dos hacia abajo para Beto.",
        clave: ["dora", "ana", "beto", "elena", "carlos"], 
        imagen: "assets/Escenario2.3.png" 
    }
];

// ==========================================
// VARIABLES DE ESTADO
// ==========================================
let monedas = 0;
let nivelesCompletados = 0;
let nivelActualId = null;
let seleccionEstudiante = []; // Almacena el orden de los clics

// ==========================================
// FUNCIONES DE INTERFAZ Y ACCESO
// ==========================================

function login() {
    const nombre = document.getElementById('user-name').value;
    if (nombre.trim() !== "") {
        document.getElementById('display-name').innerText = nombre.toUpperCase();
        document.getElementById('pantalla-login').style.display = 'none';
        document.getElementById('interfaz-juego').style.display = 'block';
    } else {
        alert("Por favor, ingresa tu nombre completo.");
    }
}

function abrirNivel(id) {
    nivelActualId = id;
    const nivel = niveles.find(n => n.id === id);
    if (!nivel) return;

    // Llenar datos básicos
    document.getElementById('modal-titulo').innerText = nivel.titulo;
    document.getElementById('modal-personajes').innerText = "TUTORES: " + nivel.tutores;
    document.getElementById('modal-mensaje').innerText = nivel.mensaje;
    document.getElementById('modal-img').src = nivel.imagen;
    
    // Resetear el estado del reto
    reiniciarReto();
    
    // Mostrar galería de objetos solo si es el Escenario 0
    const galeria = document.getElementById('galeria-objetos');
    if(id === 0) {
        galeria.style.display = 'flex';
    } else {
        galeria.style.display = 'none';
    }

    document.getElementById('modal-oscurecer').style.display = 'block';
    document.getElementById('ventana-reto').style.display = 'block';
}

function cerrarReto() {
    document.getElementById('modal-oscurecer').style.display = 'none';
    document.getElementById('ventana-reto').style.display = 'none';
}

// ==========================================
// LÓGICA DE MOVIMIENTO E INTERACCIÓN
// ==========================================

function moverAlEstante(nombreObjeto) {
    // Evitar duplicados o exceder los 5 niveles
    if (seleccionEstudiante.includes(nombreObjeto) || seleccionEstudiante.length >= 5) return;

    seleccionEstudiante.push(nombreObjeto);
    
    // Nivel 5 es el primer clic (arriba), Nivel 1 el último (abajo)
    const nivelVisual = 5 - (seleccionEstudiante.length - 1);
    const slot = document.getElementById(`slot-${nivelVisual}`);
    
    if (slot) {
        slot.innerHTML = `<img src="assets/${nombreObjeto}.png" style="width:100%; height:100%; object-fit:contain; animation: zoomIn 0.3s ease;">`;
    }
    
    // Reflejar en el input de texto para visualización
    document.getElementById('user-respuesta').value = seleccionEstudiante.join(", ").toUpperCase();
}

function reiniciarReto() {
    seleccionEstudiante = [];
    const input = document.getElementById('user-respuesta');
    if(input) input.value = "";
    
    // Limpiar slots del estante (1 al 5)
    for(let i=1; i<=5; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if(slot) slot.innerHTML = "";
    }
}

// ==========================================
// EVALUACIÓN Y RECOMPENSAS
// ==========================================

function validarRespuesta() {
    const nivel = niveles.find(n => n.id === nivelActualId);
    
    // Validar que el estante esté lleno
    if (seleccionEstudiante.length < nivel.clave.length) {
        alert("¡Mmm! Aún faltan objetos por organizar en el estante.");
        return;
    }

    // Comparar el orden del estudiante con la clave oficial
    const esCorrecto = nivel.clave.every((val, index) => val === seleccionEstudiante[index]);

    if (esCorrecto) {
        alert("¡Increíble! ¡Todo está en su lugar! Lo que se vive, se enseña.");
        actualizarMarcadores(50); // Premio de 50 monedas
        cerrarReto();
    } else {
        // Andamiaje pedagógico: Feedback basado en el guion
        alert("Algo no cuadra... Pista de Mateo: " + nivel.pista);
        reiniciarReto(); 
    }
}

function actualizarMarcadores(puntos) {
    monedas += puntos;
    nivelesCompletados += 1;
    
    document.getElementById('puntos-actuales').innerText = monedas;
    
    // Progreso escalado (20% por nivel de 5 totales)
    const porcentaje = (nivelesCompletados / 5) * 100;
    const barra = document.getElementById('progreso-visual');
    if (barra) {
        barra.style.width = porcentaje + "%";
    }
}
