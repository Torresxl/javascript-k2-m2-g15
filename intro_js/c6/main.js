// Arreglos:
/*
var animales = ["león", "tortuga", "tiburon"] //Es buena práctica que los arreglos sean de un solo tipo
console.log(animales)

console.log(animales[1])
console.log(animales[2])

// Agregar un elemento a la lista
animales[3] = "perrito"
console.log(animales)

// Método push
animales.push("pinguino")
animales.push("hipo")
animales.push("cocodrilo")
animales.push("pinguino")
console.log(animales)
// se puede agregar varios elementos separador por coma
animales.push("ola", "xd")
console.log(animales)

// pop() -> elimina el último elemento de mi arreglo
animales.pop()
animales.pop()
console.log(animales)

// splice -> desplazar uno o varios elementos
// 1 valor es para saber en que posición va a modificar
// 2 valor es para saber cuantos elementos usaré
// 3 valor es el que quiero sumar
// NOTA: si el segundo valor es 0, sólo desplaza los elementos 
animales.splice(3, 4, "xd") 
console.log(animales)


var colores = ["azul", "rojo", "verde"]
colores.splice(1, 0, "morado")
console.log(colores)

console.log(colores.length)

// Recorrer un arreglo
for(var i=0; i < colores.length; i++) {
    console.log(colores[i])
}



// Arreglo dentro de un arreglo

var musica = [["bad bunny", "Farruko"], ["neo pistea", "kid keo"], ["GNR", "Nirvana"]]
console.log(musica[2][1])

*/

// Objetos === Diccionario

var persona = {
//  key    : value
    nombre : "Antonio",
    edad :  22,
    cel : "4491370038",
    musica: {
        regeton: ["bad bunny", "Baby rasta y gringo", "plan b", "alex y fido"],
        trap: {
            mexico: ["aleman", "Hombrejugo"],
            usa: ["drake", "xxxtentacion"],
            argentino: ["duki", "neo pistea", "ecko"]


        }
    }
}

console.log(persona.edad)
console.log(persona.cel, persona.nombre)

console.log(persona.musica.trap.argentino[0])

// jason

{
    "nombre": "Antonio",
    "edad": 23,
    "cel": "929849493849",
    "soltero": true

}




