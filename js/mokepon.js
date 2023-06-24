function seleccionarMascotaJugador(){
    alert('Seleccionaste tu mascota')
}
function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',seleccionarMascotaJugador)
}
window.addEventListener('load', iniciarJuego)