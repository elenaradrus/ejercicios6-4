//2. Solicita al usuario una frase y una letra y muestra la cantidad de veces 
//que aparece la letra en la frase.

const frase = prompt("Escribe una frase");
const letra = prompt("Escribe una letra");

const separar = frase.split('');
const encontrar = separar.filter(caracter => {
    return caracter == letra
});

alert(encontrar.length);
