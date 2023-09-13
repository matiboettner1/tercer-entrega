const RESPUESTA_POSITIVA = 'si';
const RESPUESTA_NEGATIVA = 'no';

function preguntarUsuarioSiCompra() {
    let usuarioQuiereComprar = prompt('Bienvenido a hechoencasa.cb. ¿Desea comprar en nuestra página? (Ingrese si o no)').toLowerCase().trim();

    while (usuarioQuiereComprar !== RESPUESTA_POSITIVA && usuarioQuiereComprar !== RESPUESTA_NEGATIVA) {
        alert('No entiendo tu respuesta. Por favor, ingrese "si" o "no".');
        usuarioQuiereComprar = prompt('¿Desea comprar en nuestra página? (Ingrese si o no)').toLowerCase().trim();
    }

    if (usuarioQuiereComprar === RESPUESTA_POSITIVA) {
        agregarProductos();
    } else {
        alert('Muchas gracias.');
    }
}

function agregarProductos() {
    const LIMITE_PRODUCTOS = 10;
    const CRITERIO_CORTE = 'listo';
    let compraBudines;
    let tiposDeBudines = {
        'budin de zanahoria': 1500,
        'budin de frutos rojos': 2000,
        'budin de banana': 1400,
        'budin de durazno': 1500,
        'budin de vainilla': 1000,
        'budin de frutos secos': 1800
    };

    console.table(tiposDeBudines);

    let total = 0;

    for (let i = 1; i <= LIMITE_PRODUCTOS; i++) {
        compraBudines = prompt('Ingrese el o los budines que desea comprar uno por uno (con el formato de "Budin de -tipo de budin-"). Los tipos se pueden ver en la consola. Cuando haya terminado, ingrese la palabra "Listo".').toLowerCase();

        if (compraBudines.toLowerCase().trim() == CRITERIO_CORTE) {
            break;
        }

        if (tiposDeBudines[compraBudines]) {
            total += tiposDeBudines[compraBudines];
        }
    }

    alert('Usted tendría que pagar un total de $' + total);

    let usuarioQuiereUsarCupon = prompt('Desea aplicar cupon de 20% de descuento? (Ingrese si o no)')


    while (usuarioQuiereUsarCupon !== RESPUESTA_POSITIVA && usuarioQuiereUsarCupon !== RESPUESTA_NEGATIVA) {
        alert('No entiendo tu respuesta. Por favor, ingrese "si" o "no".');
        usuarioQuiereUsarCupon = prompt('Desea aplicar cupon de 20% de descuento? (Ingrese si o no)').toLowerCase().trim();
    }

    if (usuarioQuiereUsarCupon.trim().toLowerCase() === RESPUESTA_POSITIVA) {
        let porcentajeDescuento = 20;
        aplicarDescuento(total, porcentajeDescuento);
    } else{
        alert('Usted tendría que pagar un total de $' + total);
    }

}

function aplicarDescuento (valorOriginal, porcentajeDescuento) {
    let descuento = (valorOriginal * porcentajeDescuento) / 100;
    let valorConDescuento = valorOriginal - descuento;
    return valorConDescuento;
}



preguntarUsuarioSiCompra();