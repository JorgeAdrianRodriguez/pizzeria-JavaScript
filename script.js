console.log("Bienvenido a La Fortinental");

let nombre = prompt("Bienvenido a La Fortinental! ingresá tu nombre por favor");
console.log("el nombre del cliente es " + nombre);

// establezco una variable para solicitar la eleccion del cliente "pizza o empanadas".
let hambre = prompt("Hola " + nombre + " qué tenes ganas de comer hoy, pizza o empanadas??");

// establezco las variables para determinar el valor de los productos.
let precioPizza =  1000.00;
let precioEmpanada = 100.00;

// establezco las variables para calcular la cantidad de productos que va a solicitar el cliente y poder realizar los calculos de valores.
let cantidadPedidoPizza = 0;
let cantidadPedidoEmpanada = 0;


// ejecuto  la funcion para solicitar al cliente cuántas unidades quiere y poder calcularlas por el precio + iva.
// calculo costo para un pedido de pizza.
function RealizarPedido() {
    if (hambre.toLowerCase() == "pizza") {
        alert("Buena elección, tenemos las mejores pizzas del Oeste!!!.\nEl precio de cada pizza es $ " +precioPizza);        
        console.log("quiero comer " + hambre);
        cantidadPedidoPizza = parseInt(prompt("Cuantas pizzas querés?"));
        let totalPrecioPizza = (cantidadPedidoPizza * precioPizza) * 1.21;
        alert("El precio total de tu pedido de pizza es de $ " + totalPrecioPizza +".");
        console.log("el pedido fue ingresado con exito el costo total es de $ " +totalPrecioPizza);

// calculo costo para un pedido de empanadas.
    } else if (hambre.toLowerCase() == "empanadas") {
        alert("Genial, tenemos las mejores empanadas del Oeste!!!.\n El precio de cada empanada es $ "+ precioEmpanada);
        console.log("quiero comer " + hambre);
        cantidadPedidoEmpanada = parseInt(prompt("Cuantas empanada querés?"));
        let totalPrecioEmpanada = (cantidadPedidoEmpanada * precioEmpanada) * 1.21; 
        alert("El precio total de tu pedido de empanadas es de $ " + totalPrecioEmpanada +".");
        console.log("el pedido fue ingresado con exito el costo total es de $ " +totalPrecioEmpanada);
    } else {
        alert("Epaaaa! esa no es una opción, tenés que elegir (pizza / empanadas)");
    }
    return cantidadPedidoPizza 
}

RealizarPedido();

// creo el ciclo para que el cliente elija sus gustos de pizzas y empanadas.
for (cantidadPedidoPizza; cantidadPedidoPizza > 0; cantidadPedidoPizza--) {
    let sabor = prompt("Ingresa el gusto de pizza que queres, las opciones son: Muzza, Napo, Fugga.");
    if (sabor.toLowerCase() == "muzza" || sabor.toLowerCase() == "napo" || sabor.toLowerCase() == "fugga") {
        console.log(sabor);
    } else {
        while (sabor != "muzza" && sabor != "napo" && sabor != "fuga");
            sabor = prompt("Ese sabor no lo tenemos en stock o no existe. Ingresa el gusto de pizza que queres, las opciones son: Muzza, napo, fugga");
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

let domicilio = prompt ("Ingresa tu domicilio por Favor");
console.log(domicilio);
alert ( "Tu pedido fue realizado con éxito, y lo enviaremos a " +domicilio+ " esperemos lo disfrutes!");

