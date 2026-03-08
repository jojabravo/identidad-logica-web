// ==========================================
// BASE DE DATOS DE RETOS (Sincronizada con Guion)
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
    { 
        id: 1, 
        titulo: "CAPÍTULO 1: SUPERMERCADO", 
        tutores: "Sacha y Mateo",
        mensaje: "¡Bienvenidos al Súper! Debemos organizar los productos de izquierda a derecha: el Café está a la izquierda del Pan y la Leche a la derecha del Pan. ¡Atrapa las gotas!",
        pista: "El Café es el primero de la izquierda.",
        clave: ["cafe", "pan", "leche", "huevos"],
        imagen: "assets/Escenario1.png" 
    },
    { 
        id: 2, 
        titulo: "CAPÍTULO 2: EL EDIFICIO", 
        tutores: "Sacha y Mateo",
        mensaje: "Ayúdanos a ubicar a los vecinos: Dora vive en el piso más alto (5) y Beto dos pisos más abajo. ¿Cuál es el orden?",
        pista: "Dora está en el 5, cuenta dos hacia abajo para Beto.",
        clave: ["dora", "ana", "beto", "elena", "carlos"],
        imagen: "assets/Escenario2.3.png" 
    },
    { 
        id: 3, 
        titulo: "CAPÍTULO 3: LA PANADERÍA", 
        tutores: "Elena y Kenji",
        mensaje: "¡Uyyy, qué susto! Primero espanta los 10 ratones. Luego sienta a Juan frente a Rosa y a Luis a la derecha de Juan.",
        pista: "Piensa en círculo y usa la rotación mental.",
        clave: ["juan", "sofia", "pedro", "rosa", "andres", "luis"],
        imagen: "assets/Escenario3.png" 
    },
    { 
        id: 4, 
        titulo: "CAPÍTULO 4: TIENDA DE MODA", 
        tutores: "Lucía y Thiago",
        mensaje: "Reto final de lógica matricial. Daniela no pidió el Jean y Carla pidió la Blusa. ¡Usa la tabla!",
        pista: "Si Carla tiene la blusa, Daniela debe tener la camisa.",
        clave: ["carla", "daniela", "eliana"],
        imagen: "assets/Escenario4.png" 
    }
];

// ==========================================
// VARIABLES DE ESTADO
// ==========================================
let monedas = 0;
let nivelesCompletados = 0;
let nivelActualId = null;

// ==========================================
// FUNCIONES DE NAVEGACIÓN E INTERFAZ
// ==========================================

// Iniciar Sesión
function login() {
    const nombre = document.getElementById('user-name').value;
    if (nombre.trim() !== "") {
        document.getElementById('display-name').innerText = nombre.toUpperCase();
        document.getElementById('pantalla-login').style.display = 'none';
        document.getElementById('interfaz-juego').style.display = 'block';
        console.log("Sesión iniciada para: " + nombre);
    } else {
        alert("Por favor, ingresa tu nombre completo para el Laboratorio.");
    }
}

// Abrir el Reto (Solucionando el error de "undefined")
function abrirNivel(id) {
    nivelActualId = id;
    const nivel = niveles.find(n => n.id === id);
    
    if (nivel) {
        document.getElementById('modal-titulo').innerText = nivel.titulo;
        document.getElementById('modal-personajes').innerText = "TUTORES: " + nivel.tutores;
        document.getElementById('modal-mensaje').innerText = nivel.mensaje;
        document.getElementById('modal-img').src = nivel.imagen;
        
        // Limpiar el campo de respuesta previo
        document.getElementById('user-respuesta').value = "";
        
        // Mostrar Modal
        document.getElementById('modal-oscurecer').style.display = 'block';
        document.getElementById('ventana-reto').style.display = 'block';
    }
}

function cerrarReto() {
    document.getElementById('modal-oscurecer').style.display = 'none';
    document.getElementById('ventana-reto').style.display = 'none';
}

// ==========================================
// MOTOR LÓGICO Y EVALUACIÓN
// ==========================================

function validarRespuesta() {
    const respuestaUsuario = document.getElementById('user-respuesta').value.toLowerCase();
    const nivel = niveles.find(n => n.id === nivelActualId);

    if (respuestaUsuario.trim() === "") {
        alert("¡No dejes el espacio vacío! Tus tutores esperan tu lógica.");
        return;
    }

    // Validación básica: comprobamos si las palabras clave están en la respuesta
    const esCorrecto = nivel.clave.every(palabra => respuestaUsuario.includes(palabra));

    if (esCorrecto) {
        alert("¡Increíble! ¡Todo está en su lugar! Lo que se vive, se enseña.");
        actualizarMarcadores(50); // Premio de 50 monedas por reto
        cerrarReto();
    } else {
        // Andamiaje Pedagógico (Feedback formativo)
        alert("Mmm, algo no cuadra... Pista de los tutores: " + nivel.pista);
    }
}

function actualizarMarcadores(puntosAdicionales) {
    monedas += puntosAdicionales;
    nivelesCompletados += 1;
    
    // Actualizar UI de monedas
    document.getElementById('puntos-actuales').innerText = monedas;
    
    // Actualizar Barra de Progreso
    const porcentaje = (nivelesCompletados / 5) * 100;
    const barra = document.getElementById('progreso-visual');
    if (barra) {
        barra.style.width = porcentaje + "%";
    }
}

// Este código genera la fila de objetos interactivos para el Escenario 0
const htmlInventario = `
<div id="inventario-objetos" style="
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    margin-top: 25px; 
    padding: 15px; 
    background: #f8f9fa; 
    border-radius: 25px; 
    border: 2px dashed #d1d5db;">
    
    <div class="obj-item" onclick="seleccionarObjeto('portatil')" style="cursor:pointer; text-align:center;">
        <img src="assets/portatil.png" style="width: 55px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));" alt="Portátil">
        <p style="font-size: 9px; font-weight: bold; margin-top: 5px;">PORTÁTIL</p>
    </div>

    <div class="obj-item" onclick="seleccionarObjeto('reloj')" style="cursor:pointer; text-align:center;">
        <img src="assets/reloj.png" style="width: 55px;" alt="Reloj">
        <p style="font-size: 9px; font-weight: bold; margin-top: 5px;">RELOJ</p>
    </div>

    <div class="obj-item" onclick="seleccionarObjeto('pelicula')" style="cursor:pointer; text-align:center;">
        <img src="assets/pelicula.png" style="width: 55px;" alt="Película">
        <p style="font-size: 9px; font-weight: bold; margin-top: 5px;">PELÍCULA</p>
    </div>

    <div class="obj-item" onclick="seleccionarObjeto('tablet')" style="cursor:pointer; text-align:center;">
        <img src="assets/tablet.png" style="width: 55px;" alt="Tablet">
        <p style="font-size: 9px; font-weight: bold; margin-top: 5px;">TABLET</p>
    </div>

    <div class="obj-item" onclick="seleccionarObjeto('control')" style="cursor:pointer; text-align:center;">
        <img src="assets/control.png" style="width: 55px;" alt="Control">
        <p style="font-size: 9px; font-weight: bold; margin-top: 5px;">CONTROL</p>
    </div>
</div>
`;

// Insertamos el inventario justo antes del área de texto
document.querySelector('.burbuja-tutor').insertAdjacentHTML('afterend', htmlInventario);

// Array para guardar el orden en que el estudiante toca los objetos
let seleccionEstudiante = [];

function seleccionarObjeto(nombreObjeto) {
    if (seleccionEstudiante.length < 5 && !seleccionEstudiante.includes(nombreObjeto)) {
        seleccionEstudiante.push(nombreObjeto);
        
        // Buscamos el nivel visual (del 5 al 1)
        const nivelVisual = 5 - (seleccionEstudiante.length - 1);
        
        // Actualizamos el estante visualmente (necesitas IDs en tus estantes)
        const estanteNivel = document.getElementById(`nivel-${nivelVisual}`);
        if (estanteNivel) {
            estanteNivel.innerHTML = `<img src="assets/${nombreObjeto}.png" style="height: 40px; animate: bounce;">`;
        }
        
        console.log("Orden actual: " + seleccionEstudiante.join(", "));
    }
}

// Función para limpiar si se equivocan
function reiniciarEstante() {
    seleccionEstudiante = [];
    for(let i=1; i<=5; i++) {
        document.getElementById(`nivel-${i}`).innerHTML = "";
    }
}

let ordenActual = [];

function moverAlEstante(nombre) {
    if (ordenActual.length < 5 && !ordenActual.includes(nombre)) {
        ordenActual.push(nombre);
        
        // El primero que toca va al nivel 5 (arriba), el segundo al 4...
        let nivel = 5 - (ordenActual.length - 1);
        let slot = document.getElementById(`slot-${nivel}`);
        
        if (slot) {
            slot.innerHTML = `<img src="assets/${nombre}.png" style="width:100%; height:100%; object-fit:contain; animation: aparecer 0.3s ease;">`;
            slot.style.pointerEvents = "auto";
        }
        
        // Escribir automáticamente en el input para que Gemini lo vea
        document.getElementById('user-respuesta').value = ordenActual.join(", ");
    }
}

function reiniciarReto0() {
    ordenActual = [];
    document.getElementById('user-respuesta').value = "";
    for(let i=1; i<=5; i++) {
        document.getElementById(`slot-${i}`).innerHTML = "";
    }
}

// Modifica tu abrirNivel para mostrar la galería solo en el nivel 0
function abrirNivel(id) {
    const nivel = niveles[id];
    nivelActualId = id;
    
    document.getElementById('modal-titulo').innerText = nivel.titulo;
    document.getElementById('modal-mensaje').innerText = nivel.mensaje;
    document.getElementById('modal-img').src = nivel.imagen;
    
    // Si es el hogar, mostrar los objetos
    const galeria = document.getElementById('galeria-objetos');
    if(id === 0) {
        galeria.style.display = 'flex';
        reiniciarReto0();
    } else {
        galeria.style.display = 'none';
    }


let ordenEstante = []; // Aquí guardaremos el orden lógico

function moverAlEstante(nombre) {
    // Evitamos que pongan el mismo objeto dos veces
    if (ordenEstante.includes(nombre) || ordenEstante.length >= 5) return;

    ordenEstante.push(nombre);
    
    // Calculamos el nivel visual: el 1ro va al 5 (arriba), el 2do al 4...
    let nivelVisual = 5 - (ordenEstante.length - 1);
    let slot = document.getElementById(`slot-${nivelVisual}`);

    if (slot) {
        // Colocamos la imagen físicamente en el estante
        slot.innerHTML = `<img src="assets/${nombre}.png" alt="${nombre}">`;
        
        // Actualizamos el campo de texto invisible para la validación final
        document.getElementById('user-respuesta').value = ordenEstante.join(", ");
    }
}

// Función vital para que el niño pueda corregir sin frustración
function reiniciarEstante() {
    ordenEstante = [];
    document.getElementById('user-respuesta').value = "";
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`slot-${i}`).innerHTML = "";
    }
}
    document.getElementById('modal-oscurecer').style.display = 'block';
    document.getElementById('ventana-reto').style.display = 'block';
}
