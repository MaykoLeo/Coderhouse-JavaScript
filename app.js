let nombreHabitacion
let precio = 0

let cantPersonas = parseInt(prompt('Cantidad de Personas: '))
let noches = parseInt(prompt('Cantidad de Noches: '))


const habitaciones = [
    {
        nombreHabitacion: 'King Room - $5500 p/noche',
        precio: 5500,
        balcon: 'Si',
    },
    {
        nombreHabitacion: 'Doble Queen Room - $4800 p/noche',
        precio: 4800,
        balcon: 'No',
    },
    {
        nombreHabitacion: 'King Room Premium - $9100 p/noche',
        precio: 9100,
        balcon: 'Si',
    },
    {
        nombreHabitacion: 'Simple Suite - $12800 p/noche',
        precio: 12800,
        balcon: 'Si',
    },
]


let acum = 0
let descripcionHabitaciones = 0
for (const habit of habitaciones) {
    acum = acum + 1
    //El if es para evitar que "descripcionHabitaciones" devuelva un 0 al inicio
    if (acum == 1) {
        descripcionHabitaciones = acum + ' - ' + habit.nombreHabitacion
    } else {
        descripcionHabitaciones = descripcionHabitaciones + '\n' + acum + ' - ' + habit.nombreHabitacion
    }

}



// Funcion para calcular el precio total en funcion de la cantidad de noches ingresadas
let total = 0
function calculo(array) {
    total = array.precio * noches;

}


const calculoPrecioPorNoche = (opcion) => {
    while (opcion < 1 || opcion > 4) {
        opcion = parseInt(prompt('Habitaciones\n' + descripcionHabitaciones))

        if (opcion >= 1 && opcion <= 4) {
            calculo(habitaciones[opcion - 1]);

        } else {
            alert('Valor incorrecto')
        }
    }
}






let nroCuota
let recargo
let precioCuota = 0


const infoPrecioCuotas = (opcion) => {
    while (opcion != 1 && opcion != 3 && opcion != 6 && opcion != 12) {
        opcion = parseInt(prompt('Ingrese la cantidad de cuotas\nPueden ser 1, 3, 6 o 12 Cuotas'))

        switch (opcion) {
            case 1:
                nroCuota = '1'
                recargo = 0
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
}

const calculoPrecioCuotas = (precioTotal, recargoCuota, cantidadCuotas) => {
    precioCuota = (((precioTotal * recargoCuota) / 100) + precioTotal) / cantidadCuotas
    return precioCuota
}


calculoPrecioPorNoche(0)
infoPrecioCuotas(0)
calculoPrecioCuotas(total, recargo, nroCuota)

alert('RESERVA REALIZADA\nRESUMEN: \n' + nombreHabitacion + '\nCant de personas: ' + cantPersonas + '\nCant de noches: ' + noches + '\nPrecio total: $' + total + '\nEn ' + nroCuota + ' cuota/s de: $' + precioCuota)


