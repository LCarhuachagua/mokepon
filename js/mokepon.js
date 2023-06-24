function seleccionarMascotaJugador(){
    let radiobtnHipodoge = document.getElementById('Hipodoge').checked
    let radiobtnCapipepo = document.getElementById('Capipepo').checked
    let radiobtnRatigueya = document.getElementById('Ratigueya').checked
    let radiobtnLangostelvis = document.getElementById('Langostelvis').checked
    let radiobtnPydos = document.getElementById('Pydos').checked
    let mokeponSeleccionado = ""
    if (radiobtnHipodoge){
        mokeponSeleccionado = "Hipodoge"
    }else if (radiobtnCapipepo){
        mokeponSeleccionado = "Capipepo"
    }else if (radiobtnRatigueya){
        mokeponSeleccionado = "Ratigueya"
    }else if (radiobtnLangostelvis){
        mokeponSeleccionado = "Langostelvis"
    }else if (radiobtnPydos){
        mokeponSeleccionado = "Pydos"
    }
    alert('Seleccionaste tu mascota: '+ mokeponSeleccionado)
}
function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',seleccionarMascotaJugador)
}
window.addEventListener('load', iniciarJuego)