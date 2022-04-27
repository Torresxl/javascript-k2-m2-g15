/*
// si hay pan

var hayPan = true

hayPan = false

console.log("Valor de mi variable" + " " + hayPan)

if(hayPan) {
    console.log("Desayuno Pan")
} else {
    console.log("Desayuna otra cosa")
}

*/

// Comparadores
/*
 <
 >
 <=
 >=
 == igual
 === triple igual
 != diferente de
 !== diferente con dos iguales
*/

/*

if (6 == "6") {
    console.log("Si son iguales")
}

if (6 === "6") {
    console.log("Si son iguales")
} else{
    console.log("=== No son iguales")
}

*/

/*

var calificación = 6;

// cuando el valor de mi condición es true, deja de evaluar todos los demás condicionales
// se evalua por bloques, prestar atención a las llaves
{
if (calificación <= 5) {
    console.log("Reprobaste :C")
} else if (calificación === 6) {
    console.log("Estudia más")   
} else {
    console.log("Excelente :D")
} }

{
if (calificación <= 5) {
    console.log("Reprobaste :C")
} 
if (calificación === 6) {
    console.log("Estudia más")   
} 

if (calificación > 6) {
    console.log("Excelente :D")
}}

var calificación1 = 10

{

if (calificación1 <=5) {
    console.log("Reprobaste")
} else if (calificación1 >=6) {
    console.log("Estudia más")
} else if (calificación1 >=9) {
    console.log("Excelente")
}}

// Operador lógico
// && "y"
// || "o"

*/

/*
// No usar  "==" "!="
// Si usar "===" "!=="

var calificación2 = 10

if (calificación2 >= 0 && calificación2 <= 5) {
    console.log("Reprobaste")
} else if (calificación2 >=6 && calificación2 <=8) {
    console.log("Estudia más")
} else if (calificación2 >=9 && calificación2 <=10) {
    console.log("Excelente")
}

var diaSemana = "lunes"
var ganasDesalir = true
var quincena = true

if(diaSemana === "martes" && ganasDesalir) {
    console.log("Sal poquito")
} else if (diaSemana === "viernes" && ganasDesalir) {
    console.log("Alócate")
} else if(quincena && (diaSemana === "viernes" || diaSemana === "sábado" && ganasDesalir)) {
    console.log("Sal con tus amigos")   
}
*/

/*    
} else if (diaSemana === "sábado" || quincena || ganasDesalir) {
    console.log("ve con tus amigos")
}
*/

/*
var hayPan = true


console.log("Valor de mi variable" + " " + hayPan)
// hayPan === false ("!")
if(!hayPan) { // quiero que dentro del paréntesis se falso
    console.log("Compra Pan")
} else {
    console.log("Desayuna otra cosa")
}

var clima = "nublado"
var ropaLimpia = "playera"

if (!(clima === "soleado" && ropaLimpia === "short")) {
    console.log("Sal a la calle")
} else {
    console.log("Se cumple else")
}

// es diferente
if (clima !== "soleado" && ropaLimpia !== "short"){
    console.log("Esta es la segunda condición")
}

*/

/*
//Ejercicio 1
1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, 
responder: “No te creo”. 
// demos poder procesar la respuesta del usuario, sin importar si la escribe 
con mayúsculas o minúsculas

2 .Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

3.- solicitar al usuario una calificación (entre 1 y 10)
luego se debe comprobar que el número efectivamente está en ese rango,
si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado"
si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien", si es
9, y por último, "excelente" si es 10 


*/



// valores TRUHTY O FALSY
// tipos d datos
// bolean

// no están definidos
// string vacio '', ""
// undefined
// 0
// false
// null
// NaN

// miNombres no es boleano





var miNombre 

if (miNombre){ 
    console.log("Mi nombre es: " + miNombre)
} else {
    console.log("No tengo nombre")
    console.log(typeof miNombre)
}


// OPERADOR TERNARIO
var tengoHambre = true;
if (tengoHambre) {
    console.log("Como miel")
} else {
    console.log ("Me duermo")
}

tengoHambre ? 
    (console.log("como miel"), console.log(3*5)) 
    : console.log("Me duermo")

