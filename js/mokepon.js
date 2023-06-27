let ataqueJugador
let ataqueEnemigo
let ataques = ['Fuego','Agua','Tierra']

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo(){
    let mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
    let indice = aleatorio(1,5)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    spanMascotaEnemigo.innerHTML = mascotas[indice-1]
}

function seleccionarMascotaJugador(){
    let radiobtnHipodoge = document.getElementById('Hipodoge').checked
    let radiobtnCapipepo = document.getElementById('Capipepo').checked
    let radiobtnRatigueya = document.getElementById('Ratigueya').checked
    let radiobtnLangostelvis = document.getElementById('Langostelvis').checked
    let radiobtnPydos = document.getElementById('Pydos').checked
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if (radiobtnHipodoge){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if (radiobtnCapipepo){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if (radiobtnRatigueya){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else if (radiobtnLangostelvis){
        spanMascotaJugador.innerHTML = "Langostelvis"
    }else if (radiobtnPydos){
        spanMascotaJugador.innerHTML = "Pydos"
    }else{
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}

function ataqueFuego(){
    ataqueJugador = ataques[0]
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){ 
    ataqueJugador = ataques[1]
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = ataques[2]
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let indice = aleatorio(1,3)
    ataqueEnemigo = ataques[indice-1]
    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador + ' El enemigo atacó con '+ ataqueEnemigo + ' Pendiente'

    sectionMensajes.appendChild(parrafo)
}





function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}
window.addEventListener('load', iniciarJuego)