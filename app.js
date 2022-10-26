let nombreHabitacion
let precio = 0
let opcion = 0

let cantPersonas = parseInt(prompt('Cantidad de Personas: '))
let noches = parseInt(prompt('Cantidad de Noches: '))


while (opcion < 1 || opcion > 4) {
    opcion = parseInt(prompt('Habitaciones \n1 - King Room - $5500 p/noche \n2 - Doble Queen Room - $4800 p/noche \n3 - King Room Premium - $9100 p/noche \n4 - Simple Suite - $12800 p/noche  \nSeleccione numéricamente la opción: '))

    switch (opcion) {
        case 1:
            nombreHabitacion = 'King Room - $5500 p/noche'
            precio = noches * 5500
            break;
        case 2:
            nombreHabitacion = 'Doble Queen Room - $4800 p/noche'
            precio = noches * 4800
            break;
        case 3:
            nombreHabitacion = 'King Room Premium - $9100 p/noche'
            precio = noches * 9100
            break;
        case 4:
            nombreHabitacion = 'Simple Suite - $12800 p/noche'
            precio = noches * 12800
            break;
        default:
            alert('Valor incorrecto')
            break;

    }

}




opcion = 0
let nroCuota
let recargo
let precioCuota = 0

const calculoPrecioCuotas = (precioTotal, recargoCuota, cantidadCuotas) => {
    precioCuota = (((precioTotal * recargoCuota) / 100) + precioTotal) / cantidadCuotas
    return precioCuota
}

while (opcion != 1 && opcion != 3 && opcion != 6 && opcion != 12) {
    opcion = parseInt(prompt('Ingrese la cantidad de cuotas\nPueden ser 1, 3, 6 o 12 Cuotas'))

    switch (opcion) {
        case 1:
            nroCuota = '1'
            recargo = 1
            break;
        case 3:
            nroCuota = '3'
            recargo = 10.10
            break;
        case 6:
            nroCuota = '6'
            recargo = 20.78
            break;
        case 12:
            nroCuota = '12'
            recargo = 45.06
            break;

        default:
            alert('Valor de cuota incorrecto')
            break;

    }

}

calculoPrecioCuotas(precio, recargo, nroCuota)



alert('RESERVA REALIZADA\nRESUMEN: \n' + nombreHabitacion + '\nCant de personas: ' + cantPersonas + '\nCant de noches: ' + noches + '\nPrecio total: $' + precio + '\nEn ' + nroCuota + ' cuotas de: $' + precioCuota)


