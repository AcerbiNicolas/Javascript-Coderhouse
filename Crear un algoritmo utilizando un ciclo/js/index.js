let resultado = 0;
let numPedido = parseInt(prompt("Ingrese un numero mayor a 0"));

console.log(numPedido + " " + typeof(numPedido))

//hasta que no se ingresa un numero entero no se inicia el programa
while (numPedido < 1) {
    numPedido = parseInt(prompt("ERROR, ingrese un numero mayor a 0"));
}

// Muestra los 10 numeros siguientes al numero ingresado
for(let i = 1; i <= 10; i++) {
    resultado = numPedido + i;
    console.log(resultado);
}