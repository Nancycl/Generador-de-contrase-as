// Obtener referencias a los elementos del DOM
var cantidad = document.getElementById('cantidad');
var botton = document.getElementById('generar');
var botton1 = document.getElementById('limpiar');
var contrasena = document.getElementById('contrasena');
var seguridadElement = document.getElementById('seguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.+-[]*~_#:?;@'

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor que 6");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    calcularSeguridad(password);
}

function calcularSeguridad(password) {
    let puntuacion = 0;
    
    // Longitud
    puntuacion += password.length * 4;

    // Caracteres especiales
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) puntuacion += 5;
    
    // Números
    if (/\d/.test(password)) puntuacion += 5;
    
    // Mayúsculas y minúsculas
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) puntuacion += 10;

    let nivelSeguridad;
    if (puntuacion < 30) nivelSeguridad = "Débil";
    else if (puntuacion < 60) nivelSeguridad = "Moderada";
    else if (puntuacion < 80) nivelSeguridad = "Fuerte";
    else nivelSeguridad = "Muy Fuerte";

    seguridadElement.value = nivelSeguridad;
    
    // Cambiar el color del texto según el nivel de seguridad
    if (nivelSeguridad === 'Débil') seguridadElement.style.color = 'red';
    else if (nivelSeguridad === 'Moderada') seguridadElement.style.color = 'yellow';
    else if (nivelSeguridad === 'Fuerte') seguridadElement.style.color = 'green';
    else if (nivelSeguridad === 'Muy Fuerte') seguridadElement.style.color = 'blue';
}

function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
    seguridadElement.value = '';
    seguridadElement.style.color = ''; // Restablecer el color
}

// Agregar event listeners a los botones
botton.addEventListener('click', generar);
botton1.addEventListener('click', limpiar);






