let ataqueJugador
let ataqueEnemigo
let mensajeCombate = ''
const ataques = ['Fuego','Agua','Tierra']
const mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
let vidasJugador = 3
let vidasEnemigo = 3
let parrafo
let botonFuego
let botonAgua
let botonTierra
let btnMascota
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const radiobtnHipodoge = document.getElementById('Hipodoge')
const radiobtnCapipepo = document.getElementById('Capipepo')
const radiobtnRatigueya = document.getElementById('Ratigueya')
const radiobtnLangostelvis = document.getElementById('Langostelvis')
const radiobtnPydos = document.getElementById('Pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const mensajeResultado = document.getElementById('resultado')
const mensajeAtaqueJugador = document.getElementById('ataques-del-jugador')
const mensajeAtaqueEnemigo = document.getElementById('ataques-del-enemigo')

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo(){
    let indice = aleatorio(1,5)
    spanMascotaEnemigo.innerHTML = mascotas[indice-1]
}

function ataqueAleatorioEnemigo(){
    let indice = aleatorio(1,3)
    ataqueEnemigo = ataques[indice-1]
    crearMensaje()
}

function buttonChecked(radiobutton, index){
    if (radiobutton.checked){
        spanMascotaJugador.innerHTML = mascotas[index]
    }
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (radiobtnHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if (radiobtnCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if (radiobtnRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else if (radiobtnLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
    }else if (radiobtnPydos.checked){
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



function crearMensaje(){
    mensajeCombate = combate(ataqueJugador, ataqueEnemigo)

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
    
    sectionSeleccionarAtaque.style.display = 'none'   
    sectionReiniciar.style.display = 'none'

    botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}
window.addEventListener('load', iniciarJuego)