//1. Solicita al usuario tres números enteros e indícale cuál es el menor.

/*var primero = prompt("Dime el primer número")
var segundo = prompt("Dime el segundo número")
var tercero = prompt("Dime el tercer número")

if (primero > segundo && primero > tercero){
    alert("El número " + primero + " es mayor")
} else if (segundo > primero && segundo > tercero) {
    alert("El número " + segundo + " es mayor")
} else if (tercero > primero && tercero > segundo) {
    alert("El número " + tercero + " es mayor")
} else {
    alert("Algo raro pasa")
} */

//2. Solicita al usuario una frase y una letra y muestra la cantidad de veces 
//que aparece la letra en la frase.

/*var frase = prompt ("Escribe una frase");
var letra = prompt ("Dime una letra");

var separacion = frase.split('');

for(let i = 0; i <= separacion.length; i++) {
    if(letra === separacion) {
        var count = i++
    }
    console.log(count) 
} 

//------------------
/*2
var primero = prompt("Dime una frase")
var segundo = prompt("Dime una letra")
primero.split
console.log(primero)

if(segundo === primero){
    primero.indexOf(segundo)
    console.log(primero.indexOf(segundo))
    alert(segundo)
}
*/
//------------------

//3. Suma o resta (según elija el usuario) dos números reales
/*
var primero = prompt("elige el primer numero")
var segundo = prompt("elige el segundo numero")
var operacion = prompt("suma o resta")

var suma = primero + segundo 
console.log(suma)

var resta= primero - segundo
console.log(resta)
*/
/*var primero = prompt("Dime el primer número");
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
  } */

//4. Almacena en dos variables datos de validación (usuario y contraseña) 
//correctos y permite que el usuario valide (dispone de 3 intentos)

const usuario = "usuario1";
const contraseña = "abcd";

const preguntaUsuario = prompt("Dime tu usuario")
const preguntaContraseña = prompt("Dime tu contraseña")

while (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
    alert("Bienvenido"); {break;}
}


/*var usuario = "usuario1";
var contraseña = "abcd";

var preguntaUsuario = prompt("Dime tu usuario")
var preguntaContraseña = prompt("Dime tu contraseña")

var comprobar = 0*/

/*while (comprobar <= 3) {
    if( preguntaUsuario === usuario && preguntaContraseña === contraseña) {
        alert('Bienvenido')
    } else {
        comprobar++
    }
    }

    do {
        if(comprobar <= 3){
            var preguntaUsuario = prompt("Dime tu usuario")
            var preguntaContraseña = prompt("Dime tu contraseña")
            comprobar++
        } else {
            alert('hack')
            break
        }
    } while (preguntaUsuario === usuario && preguntaContraseña === contraseña);  */


//5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, 
//si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
/*var letra = prompt("Dime una letra por favor")

if(letra === 'a'){
    alert("7")
} else if (letra === 'b') {
    alert("9")
} else if (letra === 'c') {
    alert('101')
} else {
    alert("ahaha")
}*/


//6. Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja

/*const palabras = ["Tigre", "Anaconda", "León", "Boa", "Mariposa", "Delfín", "Ballena"];

const orden = palabras.sort();
console.log(orden); */