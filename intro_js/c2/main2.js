/*
//Ejercicio 1
1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, 
responder: “No te creo”. 
// demos poder procesar la respuesta del usuario, sin importar si la escribe 
con mayúsculas o minúsculas

2 .Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2”

3.- solicitar al usuario una calificación (entre 1 y 10)
luego se debe comprobar que el número efectivamente está en ese rango,
si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado"
si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien", si es
9, y por último, "excelente" si es 10 

*/

//Ejercicio 1 

var preguntaUsuario= prompt("¿Eres bellisim@?")

if (preguntaUsuario === "si" || preguntaUsuario ==="SI") {
    console.log("Ciertamente")
} else if (preguntaUsuario === "no" || preguntaUsuario === "NO") {
    console.log("No te creo")
} else {
    console.log("No pregunté eso")
}

// Ejercicio 2

var solNumero= prompt("Ingrese un número")

var division= solNumero % 2

if (division === 0) {
    console.log("El número ingresado es divisible entre 2")
} else if (division === 1) {
    console.log("El número no es exactamente divisible entre 2")
} else {
    console.log("khe")
}

//Ejercicio 3

var numSol = prompt("Ingrese un número, entre 1 y 10")

if (numSol >=1 || numSol <=10) {
    console.log("Error")
}

