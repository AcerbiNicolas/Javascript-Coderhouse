class Usuarios{
    constructor(nombre, contrasenia){
        this.nombre = nombre.toLowerCase();
        this.contrasenia = contrasenia.toLowerCase();
    }
};
let enviaInfo = document.getElementById("enviarInfo");
enviaInfo ? enviaInfo.addEventListener("click",cargaDatos):{}

const usuario = [];
function cargaDatos(){
    let userNameV = document.getElementById("userName").value;
    let contraV = document.getElementById("contra").value;
    let validaContraV = document.getElementById("validaContra").value;
    let msjError = document.getElementById("errorValida");

    if (userNameV == "") {
        msjError.innerHTML = "Ingrese usuario";
    }else if (contraV == "") {
        msjError.innerHTML = "Ingrese su contraseña";
    }else if (validaContraV == "") {
        msjError.innerHTML = "Ingrese la confirmacion de su contraseña";
        console.log("Ingrese la validacion de su contraseña")
    }else if (contraV != validaContraV) {
        msjError.innerHTML = "Las contraseñas no coinciden";
    }else{
        msjError.innerHTML = "Registrado correctamente";
        usuario.push(new Usuarios(userNameV,contraV));
        localStorage.setItem(userNameV,contraV)
    }
}
let botonLogueo = document.getElementById("btnlogueo");
botonLogueo ? botonLogueo.addEventListener("click", revisaDB):{};

function revisaDB() {
    let userLogueo = document.getElementById("usuarioLogueo").value;
    let contraLogueo = document.getElementById("contraLogueo").value;
    let msj = document.getElementById("userLogueoDiv");

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        let valor = localStorage.getItem(clave);

        if (userLogueo == "") {
            msj.innerHTML = "Ingrese un usuario"
        }else if (userLogueo != clave) {
        }else if(contraLogueo != valor){
            msj.innerHTML = "Ingrese bien su contraseña";
        }else{
            ingresaAPlataforma();
            break;
        }
    } 
}
function ingresaAPlataforma() {
    location.href = "http://127.0.0.1:5500/ProyectoFinal/pages/plataforma.html";
}
//eliminaLocalStore(true)
function eliminaLocalStore(espacio) {
    espacio? localStorage.clear() : sessionStorage.clear();
}