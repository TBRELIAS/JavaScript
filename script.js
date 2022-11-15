let productos = [
    {
        id: 001,
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Blue Label",
        region: "Escocia",
        precio: 58500  
    },

    {
        id: 002,
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Gold Label",
        region: "Escocia",
        precio: 14000  
    },

    {
        id: 003,
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Black Label",
        region: "Escocia",
        precio: 10000  
    },

    {
        id: 004,
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Red Label",
        region: "Escocia",
        precio: 5000 
    },

    {
        id: 005,
        marca: "Jack Daniel´s",
        nombre: "Whisky Jack Daniel´s Old",
        region: "Estados Unidos",
        precio: 12000  
    },

    {
        id: 006,
        marca: "Jack Daniel´s",
        nombre: "Whisky Jack Daniel´s Tennessee Honey",
        region: "Estados Unidos",
        precio: 12000   
    },
]

alert ("Bienvenidos a FullBeb")
alert ("En nuestra plataforma podras informarte de nuestros productos y precios, para efectuar la compra deberas acercarte a nuestras sucursales")

productos.forEach((producto) => {
    console.log(producto.marca, producto.nombre, producto.precio)
})

buscadorPrincipal = prompt ("Buscar productos, marcas y ofertas...");
console.log(buscadorPrincipal)

let productoBuscado = productos.find(producto => producto.nombre === buscadorPrincipal)
if (productoBuscado) {
    console.log("El Precio de su producto seleccionado es:" + " " + productoBuscado.precio)
}else {
    alert ("Ingrese un producto correcto")
}

alert ("Te esperamos en nuestras Sucursales para concretar la compra... Saludos")