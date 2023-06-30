let ataqueJugador
let ataqueEnemigo
let mensajeCombate = ''
const ataques = ['Fuego','Agua','Tierra']
const mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
let mokepon =[]
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3
let parrafo
let botonFuego
let botonAgua
let botonTierra
let btnMascota
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

/* mokepons */
let radiobtnHipodoge
let radiobtnCapipepo
let radiobtnRatigueya
let radiobtnLangostelvis
let radiobtnPydos

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const mensajeResultado = document.getElementById('resultado')
const mensajeAtaqueJugador = document.getElementById('ataques-del-jugador')
const mensajeAtaqueEnemigo = document.getElementById('ataques-del-enemigo')

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge', 'assets/Hipodoge.png', 3)
let Capipepo = new Mokepon('Capipepo', 'assets/Capipepo.png', 3)
let Ratigueya = new Mokepon('Ratigueya', 'assets/Ratigueya.png', 3)
let Langostelvis = new Mokepon('Langostelvis', 'assets/Langostelvis.png', 3)
let Pydos = new Mokepon('Pydos', 'assets/Pydos.png', 3)

Hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

Capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'}
)

Ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

Langostelvis.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

Pydos.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mokepon.push(Hipodoge, Capipepo, Ratigueya, Langostelvis, Pydos)

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

    mokepon.forEach((mokepon)=>{
    opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}"/>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    sectionReiniciar.style.display = 'none'

    radiobtnHipodoge = document.getElementById('Hipodoge')
    radiobtnCapipepo = document.getElementById('Capipepo')
    radiobtnRatigueya = document.getElementById('Ratigueya')
    radiobtnLangostelvis = document.getElementById('Langostelvis')
    radiobtnPydos = document.getElementById('Pydos')

    botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}
window.addEventListener('load', iniciarJuego)