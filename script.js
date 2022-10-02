console.log("Bienvenido a La Fortinental");

let nombre = prompt("Bienvenido a La Fortinental! ingresá tu nombre por favor");
console.log("el nombre del cliente es " + nombre);

let hambre = prompt("Hola " + nombre + " que tenes ganas de comer hoy, pizza o empanadas??");

let precioPizza = 100
let precioEmpanada = 10

let cantidadPedidoPizza = 0;
let cantidadPedidoEmpanada = 0;


function RealizarPedido() {
    if (hambre.toLowerCase() == "pizza") {
        alert("Buena elección, tenemos las mejores pizzas del Oeste.");
        alert("El precio decada pizza es $ " + precioPizza);
        console.log("quiero comer " + hambre);
        cantidadPedidoPizza = parseInt(prompt("Cuantas pizzas querés?"));
        let totalPrecioPizza = (cantidadPedidoPizza * precioPizza) * 1.21;


        alert(`El precio total de tu pedido de pizza es de $${totalPrecioPizza}. Gracias por elegirnos`)
    } else if (hambre.toLowerCase() == "empanadas") {
        alert("Genial, nuestras " + hambre + " son las mejores de Bs As.");
        alert("El precio decada empanada es $ " + precioEmpanada);
        console.log("quiero comer " + hambre);
        cantidadPedidoEmpanada = parseInt(prompt("Cuantas empanada querés?"));
        let totalPrecioEmpanada = (cantidadPedidoEmpanada * precioEmpanada) * 1.21; 
        alert("El precio total de tu pedido de empanadas es de $" + totalPrecioEmpanada +". Gracias por elegirnos")
    } else {
        alert("Epaaaa! esa no es una opción, tenés que elegir (pizza / empanadas)");
    }
    return cantidadPedidoPizza 
}

RealizarPedido();

for (cantidadPedidoPizza; cantidadPedidoPizza > 0; cantidadPedidoPizza--) {
    let sabor = prompt("Ingresa el gusto de pizza que queres, las opciones son: Muzza, napo, fugga")
    if (sabor.toLowerCase() == "muzza" || sabor.toLowerCase() == "napo" || sabor.toLowerCase() == "fugga") {
        console.log(sabor);
    } else {
        while (sabor != "muzza" && sabor != "napo" && sabor != "fuga")
            sabor = prompt("Ese sabor no lo tenemos en stock o no existe.Ingresa el gusto de pizza que queres, las opciones son: Muzza, napo, fugga")
        console.log(sabor);
    }
}

for (cantidadPedidoEmpanada; cantidadPedidoEmpanada > 0; cantidadPedidoEmpanada--) {
    let sabor = prompt("Ingresa el gusto de empanadas que queres, las opciones son: carne, pollo, jamon y queso")
    if (sabor.toLowerCase() == "carne" || sabor.toLowerCase() == "pollo" || sabor.toLowerCase() == "jamon y queso") {
        console.log(sabor);
    } else {
        while (sabor != "carne" && sabor != "pollo" && sabor != "jamon y queso")
            sabor = prompt("Ese sabor no lo tenemos en stock o no existe.Ingresa el gusto de pizza que queres, las opciones son: carne, pollo, jamon y queso")
        console.log(sabor);
    }
}

console.log(`Tu pedido de ${cantidadPedidoPizza} pizzas ha sido enviado`);

