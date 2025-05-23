

// Función para formatear el tiempo en HH:MM:SS
function formatearTiempo(tiempo) {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    //padStart toma 2 caracteres del string, y rellena con '0' cuando es <10
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Función para actualizar el display
function actualizarDisplay() {
    display.textContent = formatearTiempo(tiempoRestante);
    if (tiempoRestante === 0 && temporizadorActivo) {
        detenerTemporizador();
        alert('¡Tiempo terminado!');
    }
}

// Función para iniciar el temporizador
function iniciarTemporizador() {
    if (!temporizadorActivo) {
        // Si no hay tiempo establecido, tomar valores de los inputs
        if (tiempoRestante === 0) {
            const horas = parseInt(horasInput.value) || 0;
            const minutos = parseInt(minutosInput.value) || 0;
            const segundos = parseInt(segundosInput.value) || 0;

            tiempoRestante = horas * 3600 + minutos * 60 + segundos;

            if (tiempoRestante === 0) {
                alert('Por favor, ingresa un tiempo válido');
                return;
            }
        }

        temporizadorActivo = true;
        iniciarBtn.disabled = true;
        pausarBtn.disabled = false;

        intervalo = setInterval(() => {
            tiempoRestante--;
            actualizarDisplay();
            if (tiempoRestante === 0) {
                detenerTemporizador();
            }
        }, 1000);
    }
}

// Función para pausar el temporizador
function pausarTemporizador() {
    clearInterval(intervalo);
    temporizadorActivo = false;
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
}

// Función para detener el temporizador
function detenerTemporizador() {
    clearInterval(intervalo);
    temporizadorActivo = false;
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
}

// Función para reiniciar el temporizador
function reiniciarTemporizador() {
    detenerTemporizador();
    tiempoRestante = 0;
    horasInput.value = '';
    minutosInput.value = '';
    segundosInput.value = '';
    actualizarDisplay();
}

// Validación de inputs
function validarInput(input) {
    let valor = parseInt(input.value);
    const max = parseInt(input.getAttribute('max'));

    if (isNaN(valor)) {
        input.value = '';
    } else if (valor > max) {
        input.value = max;
    } else if (valor < 0) {
        input.value = '0';
    }
}


// Elementos del DOM
const display = document.getElementById('display');
const iniciarBtn = document.getElementById('btnIniciar');
const pausarBtn = document.getElementById('btnPausar');
const reiniciarBtn = document.getElementById('btnReiniciar');
const horasInput = document.getElementById('horas');
const minutosInput = document.getElementById('minutos');
const segundosInput = document.getElementById('segundos');

let tiempoRestante = 0;
let intervalo = null;
let temporizadorActivo = false;

// Event Listeners
iniciarBtn.addEventListener('click', iniciarTemporizador);
pausarBtn.addEventListener('click', pausarTemporizador);
reiniciarBtn.addEventListener('click', reiniciarTemporizador);


horasInput.addEventListener('change', () => validarInput(horasInput));
minutosInput.addEventListener('change', () => validarInput(minutosInput));
segundosInput.addEventListener('change', () => validarInput(segundosInput)); 