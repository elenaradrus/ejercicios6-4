//4. Almacena en dos variables datos de validación (usuario y contraseña) 
//correctos y permite que el usuario valide (dispone de 3 intentos)

//En caso de error en el usuario O en el password devolver mensaje de error: "Datos incorrectos".
//En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte".

const usuario = "usuario1";
const contraseña = "abcd";
const comprobar = 1;

const preguntaUsuario = prompt("Dime tu usuario")
const preguntaContraseña = prompt("Dime tu contraseña")

/*while (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
    alert("Bienvenido"); {break;}
}*/

do {
  if (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
    alert("Bienvenido");
    comprobar = 3;
    break;
  } else {
    alert('Datos incorrectos');
    const preguntaUsuario = prompt("Dime tu usuario");
    const preguntaContraseña = prompt("Dime tu contraseña");
    comprobar++
  }
} while (comprobar < 3) {
    alert('En 15 minutos podrás volver a loguearte');
};