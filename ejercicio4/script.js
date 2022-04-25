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