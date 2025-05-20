function asignarTiempo(e) {
    e.preventDefault(); //evitar que recargue la pagina

    //seleccionar el texto que escribio en el formulario
    horas = Number(document.querySelector('#horasInput').value)
    minutos = Number(document.querySelector('#minutosInput').value)
    segundos = Number(document.querySelector('#segundosInput').value)

    //pasar hora y minutos a segundos, y luego todo a milisegundos
    intervalo = ((horas * 3600) + (minutos * 60) + segundos) * 1000
 
    // trae el h1 que muestra el Temporizador Inicial
    const temporizador = document.querySelector('h1')

    let seg = segundos < 10 ? '0' + segundos : segundos;
    let min = minutos < 10 ? '0' + minutos : minutos;
    let hor = horas < 10 ? '0' + horas : horas;

    temporizador.textContent = `${hor}:${min}:${seg}`;

    
}

function iniciarTemporizador(){
    // comenzar cuenta regresiva
    console.log('en funcion iniciar')
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
     // mostrar temporizador como texto
    let seg = segundos < 10 ? '0' + segundos : segundos;
    let min = minutos < 10 ? '0' + minutos : minutos;
    let hor = horas < 10 ? '0' + horas : horas;

    temporizador.textContent = `${hor}:${min}:${seg}`;
}


//-------------LOGICA----------------
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

// Carga tiempo Temporizador
const tiempoCargado = document.querySelector('#tiempoInicialForm')
tiempoCargado.addEventListener('submit', asignarTiempo)

console.log('tiempo cargado:' + intervalo)
