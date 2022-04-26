//1. Solicita al usuario tres números enteros e indícale cuál es el menor.
//Además debe volver el mayor de esos numeros si la suma de los tres numeros solicitados es menor que 15.

var primero = prompt("Dime el primer número")
var segundo = prompt("Dime el segundo número")
var tercero = prompt("Dime el tercer número")

primero = parseInt(primero);
segundo = parseInt(segundo);
tercero = parseInt(tercero);

if (primero < segundo && primero < tercero){
    alert("El número " + primero + " es menor")
} else if (segundo < primero && segundo < tercero) {
    alert("El número " + segundo + " es menor")
} else if (tercero < primero && tercero < segundo) {
    alert("El número " + tercero + " es menor")
} else {
    alert("Algo raro pasa")
}

if (primero + segundo + tercero < 15) {
    alert(Math.max(primero, segundo, tercero));
}