function preguntarUsuarioSiCompra() {
    const RESPUESTA_POSITIVA = 'si';
    const RESPUESTA_NEGATIVA = 'no';
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
    let budin;
    let tiposDeBudines = {
        'budin de zanahoria': 1500,
        'budin de frutos rojos': 2000,
        'budin de banana': 1400,
        'budin de durazno': 1500,
        'budin de vainilla': 1000,
        'budin de frutos secos': 1800
    };

    console.log(tiposDeBudines);

    let total = 0;

    for (let i = 1; i <= LIMITE_PRODUCTOS; i++) {
        budin = prompt('Ingrese el o los budines que desea comprar uno por uno (con el formato de "Budin de -tipo de budin-"). Los tipos se pueden ver en la consola. Cuando haya terminado, ingrese la palabra "Listo".').toLowerCase();

        if (budin.toLowerCase().trim() == CRITERIO_CORTE) {
            break;
        }

        if (tiposDeBudines[budin]) {
            total += tiposDeBudines[budin];
        }
    }

    alert('Usted tendría que pagar un total de $' + total);
}

preguntarUsuarioSiCompra();