let usuarioValido = "nicolas";
let contraValida = "coderhouse";

let usuario = prompt("Ingrese su usuario");
validaUsuario(usuario, usuarioValido);

function validaUsuario(usuarioIngresado, usuarioAValidar){
    if (usuarioIngresado != usuarioAValidar) {
        alert("Usuario Incorrecto");
    }else{
        let contra = prompt("Ingrese su contraseña");
        validaContra(contra, contraValida);
    }
}
function validaContra(contraIngresada, contraAValidar){
    if(contraIngresada == contraAValidar){
        alert("Bienvenido al sitio");
    }else{
        alert("Contraseña invalida");
    }
};