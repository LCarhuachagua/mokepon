function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaJugador(){
    let radiobtnHipodoge = document.getElementById('Hipodoge').checked
    let radiobtnCapipepo = document.getElementById('Capipepo').checked
    let radiobtnRatigueya = document.getElementById('Ratigueya').checked
    let radiobtnLangostelvis = document.getElementById('Langostelvis').checked
    let radiobtnPydos = document.getElementById('Pydos').checked
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let mokeponSeleccionado = ""
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

function seleccionarMascotaEnemigo(){
    let mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
    let indice = aleatorio(1,5)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    spanMascotaEnemigo.innerHTML = mascotas[indice-1]
}

function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',seleccionarMascotaJugador)

}
window.addEventListener('load', iniciarJuego)