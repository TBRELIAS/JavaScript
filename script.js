let monto;
let interesAnual;
let cantidadAnios;
let montoTotal;
let nombreIngresado;
let apellidoIngresado;
let emailIngresado;
let edadIngresada;

alert ("Bienvenidos a InverOne")

nombreIngresado = prompt ("Ingrese su Nombre");

alert ("¡ Bienvenido al Centro de Inversiones InverOne" + " " + nombreIngresado + "!")
console.log ("Su Nombre es:" + " " +nombreIngresado)

apellidoIngresado = prompt ("Ingrese su Apellido")
console.log ("Su Apellido es:" + " " +apellidoIngresado)


emailIngresado = prompt ("Ingrese su Email")
console.log ("Su Email es:" + " " +emailIngresado)

edadIngresada = parseInt(prompt("Ingrese su edad"))
console.log (edadIngresada >18)

if (edadIngresada >=18) {
    alert ("Usted es mayor de edad y responsable de cualquier accion a la que se comprometa")
} else {
    alert ("Usted es menor de Edad, por lo cual no podremos llegar a un acuerdo")
}


monto = parseInt(prompt("Ingrese monto de la inversion"))

interesAnual = parseInt(prompt("Ingrese interes Anual de la Inversión"))

cantidadAnios = parseInt(prompt("Ingrese cantidad de años a invertir"))
montoTotal = monto


for (let i = 0; i < cantidadAnios; i++) {
    montoTotal = monto + montoTotal + interesAnual / 100
    console.log("Total: ", montoTotal)
}

alert ("Te esperamos en nuestras Sucursales para concretar ... Saludos")