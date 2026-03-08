// Base de datos de los retos lógicos
const niveles = [
    { 
        id: 0, 
        titulo: "CAPÍTULO 0: EL HOGAR", 
        mensaje: "¡Hola! Soy Amani. Para empezar, organiza los 5 objetos de tu habitación de arriba hacia abajo. Recuerda: el portátil es lo más alto y el control lo más bajo.",
        imagen: "calle-barrio.jpg" 
    },
    { 
        id: 1, 
        titulo: "CAPÍTULO 1: SUPERMERCADO", 
        mensaje: "¡Bienvenidos al Súper! Soy Mateo. Debemos organizar los productos de izquierda a derecha. ¡Y no olvides atrapar las gotas de agua!",
        imagen: "supermercado.png" 
    },
    { 
        id: 2, 
        titulo: "CAPÍTULO 2: EL EDIFICIO", 
        mensaje: "Soy Sacha. Ayúdanos a ubicar a los 5 vecinos en sus pisos correspondientes. Dora vive en el piso más alto.",
        imagen: "edificio.png" 
    },
    { 
        id: 3, 
        titulo: "CAPÍTULO 3: LA PANADERÍA", 
        mensaje: "¡Uyyy, qué susto! Soy Elena. Antes de organizar la mesa redonda, confirma que ya espantaste a los 10 ratones.",
        imagen: "panaderia.png" 
    },
    { 
        id: 4, 
        titulo: "CAPÍTULO 4: TIENDA DE MODA", 
        mensaje: "Soy Thiago. Este es el reto final de lógica matricial. Usa la tabla para asignar la prenda correcta a cada cliente.",
        imagen: "image_bbb4d6.png" 
    }
];

// Variables de estado del estudiante
let monedas = 0;
let nivelesCompletados = 0;

// Función de Inicio de Sesión
function login() {
    const nombre = document.getElementById('user-name').value;
    if (nombre.trim() !== "") {
        document.getElementById('display-name').innerText = nombre.toUpperCase();
        document.getElementById('pantalla-login').style.display = 'none';
        document.getElementById('interfaz-juego').style.display = 'block';
        console.log("Sesión iniciada: " + nombre);
    } else {
        alert("Por favor, ingresa tu nombre completo para el Laboratorio.");
    }
}

// Función para abrir los retos desde el mapa
function abrirNivel(id) {
    const nivel = niveles[id];
    console.log("Cargando: " + nivel.titulo);
    
    // Por ahora usamos un alert, pero ya está listo para conectar con tu ventana modal
    alert(nivel.titulo + "\n" + nivel.mensaje);
    
    // Ejemplo de cómo ganarías puntos al resolverlo (Simulación)
    // actualizarMarcadores(50); 
}

// Función para actualizar monedas y barra de progreso
function actualizarMarcadores(puntos) {
    monedas += puntos;
    nivelesCompletados += 1;
    
    // Actualizar texto de monedas
    document.getElementById('puntos-actuales').innerText = monedas;
    
    // Actualizar barra de progreso (dividido entre 5 niveles totales)
    const porcentaje = (nivelesCompletados / 5) * 100;
    const barra = document.getElementById('progreso-visual');
    if (barra) {
        barra.style.width = porcentaje + "%";
    }
}
