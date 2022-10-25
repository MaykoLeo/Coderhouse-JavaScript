
let cantPersonas = parseInt(prompt('Cantidad de Personas: '))
let noches = parseInt(prompt('Cantidad de Noches: '))

let nombreHabitacion
let precio = 0
let opcion = 0

while (opcion < 1 || opcion > 4) {
    opcion = parseInt(prompt('1 - King Room - $5500 p/noche \n2 - Doble Queen Room - $4800 p/noche \n3 - King Room Premium - $9100 p/noche \n4 - Simple Suite - $12800 p/noche  \nSeleccione numéricamente la opción: '))

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


alert('RESERVA REALIZADA\nRESUMEN: \n' + nombreHabitacion + '\nCant de personas: ' + cantPersonas + '\nCant de noches: ' + noches + '\nPrecio total: ' + precio)


