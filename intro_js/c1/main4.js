var valorInicial= prompt("Ingrese la temperatura en Grados Kelvin")
console.log(valorInicial) //Grados Kelvin

var conversion1 = (valorInicial-273)
console.log(conversion1) //Grados Centigrados

var conversion2 = ((1.8*conversion1)+32)
console.log(conversion2) //Grados farenheit

alert("La temperatura" + " " + valorInicial + " " + "es igual a" + " " +conversion2 + " " + "°F")

alert("TEMPKELVIN= "+ " " + valorInicial )

alert("TEMPFARENHEIT=" + " " + conversion2)

