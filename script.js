// ==========================================
// BASE DE DATOS DE RETOS
// ==========================================
const niveles = [
    { 
        id: 0, 
        titulo: "CAPÍTULO 0: EL HOGAR", 
        tutores: "Sacha y Mateo",
        mensaje: "¡Hola! Somos Sacha y Mateo. Antes de salir al barrio, necesitamos poner orden en casa. El portátil va en lo más alto y el control en el nivel más bajo. ¿Cuál es el orden de arriba hacia abajo?",
        pista: "Recuerda: El portátil es lo más alto por seguridad.",
        clave: ["portatil", "reloj", "pelicula", "tablet", "control"],
        imagen: "assets/Escenario0.png" 
    },
    { id: 1, titulo: "CAPÍTULO 1: SUPERMERCADO", tutores: "Sacha y Mateo", mensaje: "¡Bienvenidos al Súper! Ordena de izquierda a derecha...", clave: ["cafe", "pan", "leche", "huevos"], imagen: "assets/Escenario1.png" },
    { id: 2, titulo: "CAPÍTULO 2: EL EDIFICIO", tutores: "Sacha y Mateo", mensaje: "Ubica a los vecinos...", clave: ["dora", "ana", "beto", "elena", "carlos"], imagen: "assets/Escenario2.3.png" }
];

let monedas = 0;
let nivelesCompletados = 0;
let nivelActualId = null;
let seleccionEstudiante = []; // VARIABLE ÚNICA PARA EL ORDEN

// ==========================================
// FUNCIONES DE INTERFAZ
// ==========================================

function login() {
    const nombre = document.getElementById('user-name').value;
    if (nombre.trim() !== "") {
        document.getElementById('display-name').innerText = nombre.toUpperCase();
        document.getElementById('pantalla-login').style.display = 'none';
        document.getElementById('interfaz-juego').style.display = 'block';
    } else {
        alert("Ingresa tu nombre completo.");
    }
}

function abrirNivel(id) {
    nivelActualId = id;
    const nivel = niveles.find(n => n.id === id);
    if (!nivel) return;

    document.getElementById('modal-titulo').innerText = nivel.titulo;
    document.getElementById('modal-personajes').innerText = "TUTORES: " + nivel.tutores;
    document.getElementById('modal-mensaje').innerText = nivel.mensaje;
    document.getElementById('modal-img').src = nivel.imagen;
    
    // Resetear reto y UI
    reiniciarReto();
    
    // Mostrar u ocultar inventario según el nivel
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
// LÓGICA DEL RETO 0 (EL HOGAR)
// ==========================================

function moverAlEstante(nombreObjeto) {
    // Si ya está puesto o ya hay 5, no hacer nada
    if (seleccionEstudiante.includes(nombreObjeto) || seleccionEstudiante.length >= 5) return;

    seleccionEstudiante.push(nombreObjeto);
    
    // Nivel 5 es el primero (arriba), Nivel 1 el último (abajo)
    const nivelVisual = 5 - (seleccionEstudiante.length - 1);
    const slot = document.getElementById(`slot-${nivelVisual}`);
    
    if (slot) {
        slot.innerHTML = `<img src="assets/${nombreObjeto}.png" style="width:100%; height:100%; object-fit:contain;">`;
    }
    
    // Actualizar el input de texto (opcional, para ver el progreso)
    document.getElementById('user-respuesta').value = seleccionEstudiante.join(", ");
}

function reiniciarReto() {
    seleccionEstudiante = [];
    document.getElementById('user-respuesta').value = "";
    // Limpiar los slots del 1 al 5
    for(let i=1; i<=5; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if(slot) slot.innerHTML = "";
    }
}

function validarRespuesta() {
    const nivel = niveles.find(n => n.id === nivelActualId);
    
    if (seleccionEstudiante.length < nivel.clave.length) {
        alert("¡Amani dice: Aún faltan objetos por organizar!");
        return;
    }

    // Comparar orden exacto
    const esCorrecto = nivel.clave.every((val, index) => val === seleccionEstudiante[index]);

    if (esCorrecto) {
        alert("¡Increíble! ¡Todo está en su lugar! Lo que se vive, se enseña.");
        actualizarMarcadores(50);
        cerrarReto();
    } else {
        alert("Mmm, algo no cuadra. Pista: " + nivel.pista);
        reiniciarReto(); // Feedback formativo: reintentar
    }
}

function actualizarMarcadores(puntos) {
    monedas += puntos;
    nivelesCompletados += 1;
    document.getElementById('puntos-actuales').innerText = monedas;
    const porcentaje = (nivelesCompletados / 5) * 100;
    document.getElementById('progreso-visual').style.width = porcentaje + "%";
}
