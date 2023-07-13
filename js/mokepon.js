let ataqueEnemigo = []
let mensajeCombate = ''
let ataques1
const ataques = ['Fuego','Agua','Tierra']
const mascotas = ['Hipodoge','Capipepo','Ratigueya','Langostelvis','Pydos']
let mokepons =[]
let opcionDeMokepones
let botonesDePokemones
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let parrafo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataquePorJugador=[]
let btnMascota
let mascotaJugador
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesMokeponEnemigo
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

const MokeponType = {
    FUEGO: 'Fuego',
    AGUA: 'Agua',
    TIERRA: 'Tierra'
}

class Mokepon{
    constructor(nombre, foto, vida, tipo){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge', 'assets/Hipodoge.png', 3, MokeponType.FUEGO)
let Capipepo = new Mokepon('Capipepo', 'assets/Capipepo.png', 3, MokeponType.AGUA)
let Ratigueya = new Mokepon('Ratigueya', 'assets/Ratigueya.png', 3, MokeponType.TIERRA)
let Langostelvis = new Mokepon('Langostelvis', 'assets/Langostelvis.png', 3, MokeponType.AGUA)
let Pydos = new Mokepon('Pydos', 'assets/Pydos.png', 3, MokeponType.FUEGO)

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
    let indice = aleatorio(0,mokepons.length -1)
    spanMascotaEnemigo.innerHTML = mokepons[indice].nombre
    ataquesMokeponEnemigo = mokepons[indice].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo.push('TIERRA')
    }
    iniciarPelea()
}

function iniciarPelea(){
    if(ataquePorJugador.length == 5){
        combate(ataquePorJugador, ataqueEnemigo)
    }
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
            console.log(mokepons[i].nombre)
            console.log("es de tipo:")
            console.log(mokepons[i].tipo)
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
            <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        botonesAtaques.innerHTML += botonesDePokemones
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥'){
                ataquePorJugador.push('FUEGO')
                boton.style.backgroundColor = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataquePorJugador.push('AGUA')
                boton.style.backgroundColor = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '🌱'){
                ataquePorJugador.push('TIERRA')
                boton.style.backgroundColor = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function crearMensajeUnico(mensajeCombate){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensajeResultado.innerHTML = mensajeCombate
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    mensajeAtaqueJugador.appendChild(nuevoAtaqueDelJugador)
    mensajeAtaqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataquePorJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(ataquePorJugador, ataqueEnemigo){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    for(let index=0; index < ataquePorJugador.length;index++){
        if(ataquePorJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensajeUnico("Empate")
        }else if(ataquePorJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensajeUnico("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if(ataquePorJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensajeUnico("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if(ataquePorJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensajeUnico("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes(index, index)
            crearMensajeUnico("Perdiste")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()
}

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate")
    }else if(vidasEnemigo > vidasJugador){
        crearMensajeFinal("Perdiste")
    }else if(vidasJugador > vidasEnemigo){
        crearMensajeFinal("Ganaste")
    }
}

function crearMensajeFinal(resultadoFinal){
    mensajeResultado.innerHTML = resultadoFinal
    deshabilitarBotones()
    sectionReiniciar.style.display = 'block'
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