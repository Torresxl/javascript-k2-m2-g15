//inputs
var nombre = document.getElementById("nombre")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var desicion = document.getElementById("desicion")

// Boton

var order = document.getElementById("order")

// Respuesta
var respuestaNombre = document.getElementById("respuestaNombre")
var respuestaDireccion = document.getElementById("respuestaDireccion")
var respuestaTelefono = document.getElementById("respuestaTelefono")

// img
var respuestaPiña   = document.getElementById("respuestaPiña")
var respuestaPeperoni = document.getElementById("respuestaPeperoni")



function ordenLista() {

    respuestaNombre.innerHTML = nombre.value
    respuestaDireccion.innerHTML = direccion.value
    respuestaTelefono.innerHTML = telefono.value

    // toUpperCase -> cambia todo el texto a mayusculas
    // toLowerCase -> cambia todo el texto a minisculas
    var formatPizza = desicion.value.toLowercase()

    if(formatPizza === "si") {

        respuestaPiña.classList.remove("none")
        respuestaPeperoni.classList.add("none")

    } else if (formatPizza === "no") {

        respuestaPeperoni.classList.remove("none")
        respuestaPiña.classList.add("none")

    } else {
        respuestaPiña.classList.add("none")
        respuestaPeperoni.classList.add("none")
    }

}

order.addEventlistener("click", ordenLista)










