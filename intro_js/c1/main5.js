var nomUsuario = prompt("Ingrese su nombre")
console.log(nomUsuario)

var edadUsuario = prompt("Ingrese su edad")
console.log(edadUsuario)

console.log(nomUsuario.toUpperCase)

var conversion1= (edadUsuario*2/edadUsuario) //quitar los 2 primeros años a cualquier edad
console.log(conversion1)

var conversion2= (conversion1*10.5) // sacar el valor de los 2 primeros años perro
console.log(conversion2)

var conversion3= edadUsuario-conversion1 //sacar los 2 primeros años perro de la edad que eso se multiplican por 10
console.log(conversion3)

var conversion4= conversion3*4 //sacar el resto de edad para el resto de años
console.log(conversion4)

var conversion5= conversion2+conversion4 //edad total en años doggo
console.log(conversion5)

alert("Tu nombre de usuario es:" + " " + nomUsuario + " " + "y tu edad en años perros es: " + " " + conversion5 )

