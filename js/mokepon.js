let ataqueJugador
let ataqueEnemigo
let mensajeCombate = ''
let ataques = ['Fuego','Agua','Tierra']
let vidasJugador = 3
let vidasEnemigo = 3
let parrafo
let botonFuego
let botonAgua
let botonTierra
let btnMascota

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
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

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
    mensajeCombate = combate(ataqueJugador, ataqueEnemigo)

    let sectionReiniciar = document.getElementById('reiniciar')

    let mensajeResultado = document.getElementById('resultado')
    let mensajeAtaqueJugador = document.getElementById('ataques-del-jugador')
    let mensajeAtaqueEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensajeResultado.innerHTML = mensajeCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    mensajeAtaqueJugador.appendChild(nuevoAtaqueDelJugador)
    mensajeAtaqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    if(vidasJugador == 0){
        mensajeResultado.innerHTML = "Fin del juego, Has perdido 😭😭😭"
        sectionReiniciar.style.display = 'block'
        deshabilitarBotones()
    }else if (vidasEnemigo == 0){
        mensajeResultado.innerHTML = "Fin del juego, Has ganado 😁🥳🤩"
        sectionReiniciar.style.display = 'block'
        deshabilitarBotones()
    }
}

function combate(ataqueJugador, ataqueEnemigo){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    while((vidasJugador > 0)&&(vidasEnemigo > 0)){
        if (ataqueJugador == ataqueEnemigo){
            return "Empate"
        }else if ((ataqueJugador == ataques[0] && ataqueEnemigo == ataques[2])||(ataqueJugador == ataques[1] && ataqueEnemigo == ataques[0])||(ataqueJugador == ataques[2] && ataqueEnemigo == ataques[1])){
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
            return "Ganaste"
        }else if ((ataqueJugador == ataques[0] && ataqueEnemigo == ataques[1])||(ataqueJugador == ataques[1] && ataqueEnemigo == ataques[2])||(ataqueJugador == ataques[2] && ataqueEnemigo == ataques[0])){
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            return "Perdiste"
        }   
    }

}

function deshabilitarBotones(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function iniciarJuego(){
    btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',seleccionarMascotaJugador)
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
window.addEventListener('load', iniciarJuego)