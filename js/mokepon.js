let ataqueJugador
let ataqueEnemigo
let mensajeCombate = ''
let ataques1
const ataques = ['Fuego','Agua','Tierra']
const mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
let mokepons =[]
let opcionDeMokepones
let botonesDePokemones
let vidasJugador = 3
let vidasEnemigo = 3
let parrafo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let btnMascota
let mascotaJugador
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const botonesAtaques= document.getElementById('botones-ataques')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const mensajeResultado = document.getElementById('resultado')
const mensajeAtaqueJugador = document.getElementById('ataques-del-jugador')
const mensajeAtaqueEnemigo = document.getElementById('ataques-del-enemigo')

/* mokepons */
let radiobtnHipodoge
let radiobtnCapipepo
let radiobtnRatigueya
let radiobtnLangostelvis
let radiobtnPydos

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

mokepons.push(Hipodoge, Capipepo, Ratigueya, Langostelvis, Pydos)

/**
 * 
 * @param {number} min
 * @param {number} max 
 * @returns number
 */
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo(){
    let indice = aleatorio(1,mokepons.length)
    spanMascotaEnemigo.innerHTML = mokepons[indice-1].nombre
}

function ataqueAleatorioEnemigo(){
    let indice = aleatorio(1,3)
    ataqueEnemigo = ataques[indice-1]
    crearMensaje()
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (radiobtnHipodoge.checked){
        spanMascotaJugador.innerHTML = radiobtnHipodoge.id
        mascotaJugador = radiobtnHipodoge.id
    }else if (radiobtnCapipepo.checked){
        spanMascotaJugador.innerHTML = radiobtnCapipepo.id
        mascotaJugador = radiobtnCapipepo.id
    }else if (radiobtnRatigueya.checked){
        spanMascotaJugador.innerHTML = radiobtnRatigueya.id
        mascotaJugador = radiobtnRatigueya.id
    }else if (radiobtnLangostelvis.checked){
        spanMascotaJugador.innerHTML = radiobtnLangostelvis.id
        mascotaJugador = radiobtnLangostelvis.id
    }else if (radiobtnPydos.checked){
        spanMascotaJugador.innerHTML = radiobtnPydos.id
        mascotaJugador = radiobtnPydos.id
    }else{
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()

}

function extraerAtaques(mascota){
    for (let i = 0; i < mokepons.length; i++) {
        if (mascota === mokepons[i].nombre){
            ataques1 = mokepons[i].ataques
        }
    }
    mostrarAtaques(ataques1)
}

/**
 * 
 * @param {Array<Object>} ataques 
 */
function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        botonesDePokemones = `
            <button id="${ataque.id}" class="boton-de-ataque BAtaque">
                ${ataque.nombre}
            </button>
        `
        botonesAtaques.innerHTML += botonesDePokemones
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}

function secuenciaAtaque(){
    
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

    mokepons.forEach((mokepon)=>{
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

    botonReiniciar.addEventListener('click', reiniciarJuego)
}
window.addEventListener('load', iniciarJuego)