/*
// boolean (true, false)
// number (numero, integer, flat, doubles, etc)
// string (hola, char)
// 

var miVariable = "hola";

// undefined, null (no se le asigna ningun valor, tiene un valor vacio)

var miVariable2;

console.log(typeof miVariable2) //consultamos de que tipo es

var miVariable3=null;

console.log("Tipo de dato: " + typeof miVariable3)

var miVarable4 = "Hola";

console.log("Tipo de dato: " + typeof miVarable4)

//objeto: instancia de una clase

console.log("Hola" + " " + "soy un string")

console.log(3+5)

console.log("Hola" + 3 + 4)

var suma = 3 + 4;

console.log("Hola" + " " + suma)

console.log("Hola" + 3 * 4)

//js usa también jerarquia de operaciones
var operaciones = (4*6/2*5)-1;

console.log(operaciones)

//otros tipos de operadores
// ++ sumar 1 a una variable

var sumando = 5;

// Son lo mismo estas sentencias al declarar una suma
sumando = sumando +1; 
sumando ++;

// operacione contraria
sumando --;

var variableOperaciones = 10;

variableOperaciones= variableOperaciones * 3;

variableOperaciones*=3;

// division, suma, resta

variableOperaciones += 5;
variableOperaciones -= 4;
variableOperaciones /= 3;

//módulo (residuo) %
variableOperaciones = 10;
var residuo = variableOperaciones % 4; // 10/4 aquí interesa el residuo
console.log(residuo);

// ¿Cómo puedo saber si un número es par?

var valor = 40 % 2; //0
// si valor es 0, es par

// si yo quiero saber si un número es dividisible entre 7

var valor = 5456544536 % 7;
// si valor 2 es 0, entonces es divisible entre 7
// 14/7 -2, residuo 0

var entradaUsuario = prompt("Dame un valor")
console.log(entradaUsuario)
// si no tiene paréntesis me regresa características (typeof)
console.log( typeof entradaUsuario)
// si tiene parentesis hace una operación (parseInt())
//console.log(parseInt(entradaUsuario))

var valorConvertido = parseInt(entradaUsuario)  //convertir string a entero
console.log(valorConvertido) //despliega la variable valorConvertido
console.log(typeof valorConvertido)

var resMultiplicacion = valorConvertido *4
console.log(resMultiplicacion)

//resMultiplicacion = entradaUsuario *100
//console.log(resMultiplicacion)

alert("El número es :" + " " + resMultiplicacion)

// Ejercicio 1
// investigar que método se usa para convertir un string a número
//parseInt()

///Ejercicio 2
// pedir la temperatura en kelvin al usuario (273)
// guardar en una variable
// convertir la temperatura en °c (kelvin-273)
// convertir la temperatura en °F ()
// mostrar en un alert: "La temperatura TEMPKELVIN K es igual a TEMPFAHRENEIT °F"
//   TEMKELVIN = temperatura en Kelvin
//   TEMPFAHRENHEIT = temperatura en Fahrenheit

// el punto (".") es muy importante para acceder a clases, objetos, arreglos, etc
// console.log()
*/

//Strings
var miNombre = "Victor"
// como es un string, tiene método inherentes
console.log(miNombre.length)

var numero = 20
console.log(numero)

//métodos de la clase string
var nombreMayus= miNombre.toUpperCase()
console.log(nombreMayus)

console.log(miNombre.toLowerCase())

//Métodos a revisar 
// startWith()
// trim
// charAt()
// indexof()
// replace()
// slice()
// splice ()

/*
    Ejercicio 3
    un prompt pedir el nombre del usuario
    otro prompt pedir la edad del usuario
    luego convertir el nombre a mayusculas
    después van a convertir la edad del usuario en años perro
        (cada uno de los dos primeros años valen por 10.5 años)
        (cada año después del segundo vale a 4años)
    Mostrar un alart que diga:
    "Tu nombre es NOMBREUSUARIO y tu EDAD en años perro son EDADPERRO"
*/
 











