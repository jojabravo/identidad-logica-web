let monedas = 0;
let progreso = 0;

function login() {
    const nombre = document.getElementById('user-name').value;
    if (nombre.trim() !== "") {
        document.getElementById('display-name').innerText = nombre.toUpperCase();
        document.getElementById('pantalla-login').style.display = 'none';
        document.getElementById('interfaz-juego').style.display = 'block';
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

function abrirNivel(id) {
    console.log("Cargando nivel: " + id);
    // Aquí es donde llamaremos a la ventana del reto próximamente
    alert("Próximamente: Reto del nivel " + id + " con el Tutor Amani.");
}

function actualizarProgreso(niveles) {
    progreso = (niveles / 5) * 100;
    document.getElementById('progreso-visual').style.width = progreso + "%";
}
