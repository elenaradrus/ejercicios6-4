//6. Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
//Solicita al usuario una palabra, o un numero y los ordena de forma decreciente las letras.

const palabras = ["Tigre", "Anaconda", "León", "Boa", "Mariposa", "Delfín", "Ballena"];

const orden = palabras.sort();
alert(orden);

const word = prompt("Escribe una palabra o un número");
const separate = word.split('');
const order = separate.sort().reverse();
alert(order); 
