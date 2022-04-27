// Acceder a etiquetas html

var titulo = document.getElementById("titulo")
var parrafo = document.getElementById("parrafo")
var input = document.getElementById("input")
var respuesta = document.getElementById("respuesta")
var body = document.getElementById("body")

console.log(parrafo)
console.log(titulo)

// innerHTML --> Permite modificar el contenido de una etiqueta tipo texto


titulo.innerHTML = "Hola Mundo desd JS"
parrafo.innerHTML = "Hola chavos"


console.log(input.value)

function cambiar () {
    // titulo.innerHTML = "Hola Mundo desd JS"
    // parrafo.innerHTML = "Hola chavos"
// acceder al valor que da el usuario
    respuesta.innerHTML = input.value
}

boton.addEventListener("click", cambiar)

var nuevoParrafo = document.createElement("p")
nuevoParrafo.innerHTML = "Cree esta etiqueta"
body.append(nuevoParrafo)

console.log(respuesta.classList)

respuesta.classList.add(red)


//EJERCICIO 1


