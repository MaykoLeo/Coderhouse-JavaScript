
let cantPersonas = parseInt(prompt('Cantidad de Personas: '))
let noches = parseInt(prompt('Cantidad de Noches: '))

let precio = 0
let opcion = 0

while (opcion < 1 || opcion > 4) {
    opcion = parseInt(prompt('Seleccione habitacion: '))

    switch (opcion) {
        case 1:
            console.log('opcion 1')
            precio = noches * 2000
            break;
        case 2:
            console.log('opcion 2')
            precio = noches * 5000
            break;
        case 3:
            console.log('opcion 3')
            precio = noches * 6000
            break;
        case 4:
            console.log('opcion 4')
            precio = noches * 10000
            break;
        default:
            alert('Valor incorrecto')
            break;

    }

}


console.log('Cant de personas: ' + cantPersonas)
console.log('Cant de noches: ' + noches)
console.log('Precio total: ' + precio)

