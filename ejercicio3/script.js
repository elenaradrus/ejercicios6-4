//3. Suma o resta (según elija el usuario) dos números reales
//SI fueran iguales los numeros, pedirle al usuario el nombre y devolverle la cantidad de 
//letras que tiene su nombre.


var primero = prompt("Dime el primer número");
primero = parseInt(primero)
var segundo = prompt("Dime el segundo número");
segundo = parseInt(segundo)

var operacion = prompt("¿Quieres sumar o restar?");

var sumar = primero + segundo
var restar = primero - segundo

if (operacion === "sumar") {
    alert("El resultado es " + sumar);
  } else if (operacion === "restar") {
    alert("El resultado es " + restar);
  } else {
    alert("No me trolees");
}

if (primero === segundo) {
  const nombre = prompt("Escribe tu nombre");
  alert(nombre.length);
}