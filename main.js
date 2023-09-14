let miImage = document.querySelector('img');
miImage.onclick = function () {
   let miSrc = miImage.getAttribute('src');
   if (miSrc === 'images/gente.png') {
     miImage.setAttribute('src','images/mensaje.png');
   } else {
     miImage.setAttribute('src', 'images/gente.png');
   }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h3');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Comprometido con el Medio Ambiente, ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Comprometido con el Medio Ambiente,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}           