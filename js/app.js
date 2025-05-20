function asignarTiempo(e) {
    e.preventDefault(); //evitar que recargue la pagina
    // blanquer input
    tiempoCargado.reset();

    //seleccionar el texto que escribio en el formulario
    horas = document.querySelector('#horasInput').value
    minutos = document.querySelector('#minutosInput').value
    segundos = document.querySelector('#segundosInput').value

    //pasar todo a segundos
    const horaAseg = horas * 3600
    const minAseg = minutos * 60
    intervalo = horaAseg + minAseg + segundos
}

function iniciarTemporizador() {
    // trae el h1 que muestra el Temporizador
    const Temporizador = document.querySelector('h1')

    if (segundos > 0 && segundos < 60) {
        segundos = segundos - 1
    } else {
        segundos = 0
        if (minutos > 0 && minutos < 60) {
            minutos = minutos - 1
        } else {
            minutos = 0
            if (horas < 24)
                horas = horas - 1
            else {
                horas = 0
            }
        }
    }

    // mostrar Temporizador como texto
    let seg = segundos < 10 ? '0' + segundos : segundos;
    let min = minutos < 10 ? '0' + minutos : minutos;
    let hor = horas < 10 ? '0' + horas : horas;

    Temporizador.textContent = `${hor}:${min}:${seg}`;
}


//-------------LOGICA----------------
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

// Carga tiempo Temporizador
const tiempoCargado = document.querySelector('#tiempoInicialForm')
tiempoCargado.addEventListener('submit', asignarTiempo)

const iniciar = document.querySelector('#btnIniciar')
iniciar.addEventListener('click', () => {
    if(!intervalo) {
        intervalo = setInterval(iniciarTemporizador, 1000);
        document.querySelector('#btnIniciar').disabled = true;
        document.querySelector('#btnReiniciar').disabled = false;
        document.querySelector('#btnPausar').disabled = false;
    }else{
        document.querySelector('#btnIniciar').disabled = false;
    }
})

const pausar = document.querySelector('#btnPausar')
pausar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    document.querySelector('#btnIniciar').disabled = false;
    document.querySelector('#btnPausar').disabled = true;
});

document.querySelector('#btnReiniciar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.querySelector('h1').textContent = '00:00:00';
    document.querySelector('#btnIniciar').disabled = false;
    document.querySelector('#btnReiniciar').disabled = true;
    document.querySelector('#btnPausar').disabled = true;
})