const miFormulario = document.getElementById('loginForm');
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = document.getElementById('nombreUsuario').value;
    let password = document.getElementById('contrasenia').value;

    if(!validarFormulario(userName, password)) {
        return false;
    }
    
    const unUsuario = getUser(usuarios, userName);
    if(!unUsuario) {
        alert('el usuario o contrasenia ingresados no existe');
        return false;
    }

    if (!unUsuario.isPassword(password)) {
        alert('el usuario o contrasenia ingresados no existe');
        return false;
    }

    unUsuario.isLogged = true;
    registrarLogin(unUsuario);
    window.location = '/index.html'
});

const validarFormulario = (userName, password) => {
    
    if (userName.length == 0) {
        alert('debes completar todos los campos');
        return false;
      }
    
      if (password.length == 0) {
        alert('debes completar todos los campos');
        return false;
      }
    
    return true;
}


