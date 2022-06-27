class Libro{
    constructor(nombre, categoria, precio){
        this.nombre = nombre.toLowerCase();
        this.categoria = categoria.toLowerCase();
        this.precio = parseFloat(precio);
    }
    getTotalImpuestos() {
        this.precio = this.precio * 2.2;
    }
};

/*

Jorge, el resultado de todo esta en la consola

*/

const libreria = [];


libreria.push(new Libro("Padre rico padre pobre", "Educacion financiera",122.50));
libreria.push(new Libro("padre rico padre pobre", "Educacion financiera",122.50));
libreria.push(new Libro("El arte de la gUerra", "Desarrollo personal",102.30));
libreria.push(new Libro("padre Rico padre pobre", "Educacion financiera",122.50));
libreria.push(new Libro("El arte de la gUerra", "Desarrollo personal",122.50));
libreria.push(new Libro("Harry potter", "fantasia",220.70));

//muestra 
//calclulaImpuestos(libreria);

let boton = document.getElementById("buscar");
boton.addEventListener("click", clickea);

// busca dependiendo de la entrada de datos
function clickea() {
    let libroIngresado = document.getElementById("libroIngresado").value;
    if (!libroIngresado) {
        alert("Cargue su libro")
    }else{
        buscaStock(libreria, libroIngresado);
    }
    
}





//busca la cantidad de libros que hay en con el mismo nombre
function buscaStock(libreria, nombre){
    let contador = 0;
    for (let i=0; i<libreria.length; i++){
        if (nombre == libreria[i].nombre) {
            contador += 1;
        }
    }
    if(contador == 1){
        document.body.append(" Tenemos un solo libro llamado " + nombre + ". ")
        console.log("Tenemos un solo libro llamado " + nombre);
    }else if (contador > 1) {
        document.body.append(" Tenemos " + contador + " libros llamados " + nombre + ". ")
        console.log("Tenemos " + contador + " libros llamados " + nombre);
    }else{
        document.body.append(" No tenemos stock del libro " + nombre + ". ")

        console.log("No tenemos stock del libro " + nombre);
    }
};

//calcula y muestra
function calclulaImpuestos(stock){
    for(let i=0; i<stock.length; i++){
        stock[i].getTotalImpuestos();
        console.log("El libro " + stock[i].nombre.toUpperCase() + " cuesta $"+ stock[i].precio+ " pesos.");
    }
};