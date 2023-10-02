const usuariosRegistrados = [
  {
    usuario: 'matias',
    contrasenia: 'boettner',
  },
  {
    usuario: 'coderhouse',
    contrasenia: '1234',
  },
  {
    usuario: 'admin',
    contrasenia: 'admin',
  },
  {
    usuario: 'juana',
    contrasenia: '2013',
  }
];

function iniciarSimulacion() {
  alert("Bienvenido a hechoencasa.cb");

  while (true) {
    const opcion = prompt("Por favor, elija una opcion:\n1. Iniciar sesión\n2. Registrarse\n3. Salir\n(Ingrese el numero correspondiente)");

    if (opcion === '1') {
      iniciarSesion();
    } else if (opcion === '2') {
      registrarse();
    } else if (opcion === '3') {
      alert("Muchas gracias.");
      break;
    } else {
      alert("Opcion no válida. Por favor, elija 1, 2 o 3.");
    }
  }
}

function iniciarSesion() {
  const usuario = prompt("Ingrese su nombre de usuario:");
  const contrasenia = prompt("Ingrese su contraseña:");

  const usuarioEncontrado = usuariosRegistrados.find((u) => u.usuario === usuario);

  if (usuarioEncontrado && usuarioEncontrado.contrasenia === contrasenia) {
    alert('Inicio de sesión exitoso.');
    preguntarUsuarioSiCompra();
  } else {
    alert("Nombre de usuario o contraseña incorrectos. Inténtelo nuevamente.");
  }
}

function registrarse() {
  while (true) {
    const nuevoUsuario = prompt("Ingrese un nuevo nombre de usuario:");
    const nuevaContrasenia = prompt("Ingrese una contraseña para su nuevo usuario:");

    const usuarioExistente = usuariosRegistrados.find((u) => u.usuario === nuevoUsuario);

    if (usuarioExistente) {
      alert("El nombre de usuario ya está en uso. Por favor, elija otro.");
    } else {
      usuariosRegistrados.push({
        usuario: nuevoUsuario,
        contrasenia: nuevaContrasenia,
      });
      alert("Registro exitoso. Ahora puede iniciar sesión con su nuevo usuario.");
      console.table(usuariosRegistrados)
      iniciarSesion();
      break;
    }
  }
}

const RESPUESTA_POSITIVA = 'si';
const RESPUESTA_NEGATIVA = 'no';

function preguntarUsuarioSiCompra() {
    let usuarioQuiereComprar = prompt('¿Desea comprar en nuestra página? (Ingrese si o no)').toLowerCase().trim();

    while (usuarioQuiereComprar !== RESPUESTA_POSITIVA && usuarioQuiereComprar !== RESPUESTA_NEGATIVA) {
        alert('No entiendo tu respuesta. Por favor, ingrese "si" o "no".');
        usuarioQuiereComprar = prompt('¿Desea comprar en nuestra página? (Ingrese si o no)').toLowerCase().trim();
    }

    if (usuarioQuiereComprar === RESPUESTA_POSITIVA) {
        agregarProductos();
    } else {
        alert('Muchas gracias.');
        return false;
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

    let usuarioQuiereUsarCupon = prompt('Desea aplicar cupon de descuento random? (Ingrese si o no)')


    while (usuarioQuiereUsarCupon !== RESPUESTA_POSITIVA && usuarioQuiereUsarCupon !== RESPUESTA_NEGATIVA) {
        alert('No entiendo tu respuesta. Por favor, ingrese "si" o "no".');
        usuarioQuiereUsarCupon = prompt('Usted de sea aplicar un descuento random que puede ir de 10% a 90%? (Ingrese si o no)').toLowerCase().trim();
    }

    if (usuarioQuiereUsarCupon.trim().toLowerCase() === RESPUESTA_POSITIVA) {
        const porcentajeDescuento = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        const porcentajeAleatorio = Math.floor(Math.random() * porcentajeDescuento.length);
        const descuentoRandom = porcentajeDescuento [porcentajeAleatorio];

        alert(`Su cupon obtenido fue del ${descuentoRandom}% de descuento. Usted tendria que pagar un total de $` + aplicarDescuento(total, descuentoRandom));
    } else{
        alert(`Usted tiene que pagar un total de ${total}`);
    }

}

function aplicarDescuento (valorOriginal, porcentajeDescuento) {
    valorOriginal = parseFloat(valorOriginal);
    let descuento = (valorOriginal * porcentajeDescuento) / 100;
    let valorConDescuento = valorOriginal - descuento;
    return valorConDescuento;
}

const botonIniciar = document.getElementById('iniciar-simulacion');

botonIniciar.onclick = () => {
    iniciarSimulacion();
};
