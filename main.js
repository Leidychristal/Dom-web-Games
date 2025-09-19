const root = document.getElementById("root")

// Fase #1: Bienvenida
const h1bienvenida = document.createElement("h1")
h1bienvenida.textContent = "Bienvenido/a al juego"
root.appendChild(h1bienvenida)

// Fase #2: Selección de armas
let puntosplayer = 0
let seleccionplayer = ""

const lblplayer = document.createElement("label")
lblplayer.textContent = "USUARIO:"
root.appendChild(lblplayer)

const txtplayer = document.createElement("input")
txtplayer.placeholder = "Introduce tu selección"
root.appendChild(txtplayer)

const btnJugar = document.createElement("button")
btnJugar.textContent = "Jugar"
root.appendChild(btnJugar)

// Evento del botón
btnJugar.addEventListener("click", () => {
    seleccionplayer = txtplayer.value.trim()
    
    if (seleccionplayer === "") {
        alert("⚠️ Debes elegir un arma")
    } else {
        alert("Tu selección fue: " + seleccionplayer)
    }
})
// Fase #3: Selección de la máquina
const lblmaquina = document.createElement("label")