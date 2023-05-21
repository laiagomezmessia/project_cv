// Función modo dark con addEventListener

function DarkLight() {
  const cuerpo = document.body;
  cuerpo.classList.toggle('light-theme');
  cuerpo.classList.toggle('dark-theme');
  let hamb = document.getElementById("navicon");

  const className = cuerpo.className;
  const oscuroBtn = document.getElementById('oscuro');

  if (className == "light-theme") {
    oscuroBtn.textContent = "Dark";
    hamb.classList.add('navicon');
  } else {
    oscuroBtn.textContent = "Light";
    hamb.classList.remove('navicon');
  }
}


// Función DarkSegunHora

function DarkSegunHora() {
  const cuerpo = document.body;
  const horaActual = new Date().getHours();
  const esDeNoche = horaActual >= 21 || horaActual < 6;

  if (esDeNoche) {
    cuerpo.classList.remove('light-theme');
    cuerpo.classList.add('dark-theme');
  } else {
    cuerpo.classList.remove('dark-theme');
    cuerpo.classList.add('light-theme');
  }

  const oscuroBtn = document.getElementById('oscuro');
  if (cuerpo.classList.contains('dark-theme')) {
    oscuroBtn.textContent = 'Light';
  } else {
    oscuroBtn.textContent = 'Dark';
  }
}
// llama la función para cambiar el tema cuando la página esté cargada
document.addEventListener('DOMContentLoaded', DarkSegunHora);
// llama la función DarkLight al hacer click en el botón
document.getElementById('oscuro').addEventListener('click', DarkLight);


// Función de fecha de hoy en jquery situada en el footer

$(document).ready(function () {
  const hoy = new Date();
  const dia = hoy.getDate();

  const weekday = [" Domingo", " Lunes", " Martes", " Miércoles", " Jueves", " Viernes", " Sábado"];
  const sem = weekday[hoy.getDay()];

  const month = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  const mes = month[hoy.getMonth()]

  const ano = hoy.getFullYear();

  $('#fecha').text("  |  " + sem + ", " + dia + " de " + mes + " de " + ano);
});


// Función para que cuando haga click en un elemento del menú hamburguesa, éste se cierre solo

// Obtener la referencia al elemento del menú hamburguesa
var navMenu = document.getElementById('nav');
// Obtener todas las opciones del menú
var menuItems = navMenu.getElementsByClassName('nav-link');
// Agregar un evento de clic a cada elemento del menú
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function () {
    // Cerrar el menú
    var toggleButton = navMenu.getElementsByClassName('navbar-toggler')[0];
    if (toggleButton.getAttribute('aria-expanded') === 'true') {
      toggleButton.click();
    }
  });
}

// Función para que cuando haga click en un elemento del menú hamburguesa y se cierre, se desplace a la posición que toca

// Obtener la referencia al elemento del menú hamburguesa
var navMenu = document.getElementById('nav');
// Obtener todas las opciones del menú
var menuItems = navMenu.getElementsByClassName('nav-link');
// Agregar un evento de clic a cada elemento del menú
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    var targetId = this.getAttribute('href'); // Obtener el ID del elemento de destino
    var targetElement = document.querySelector(targetId); // Obtener el elemento de destino
    // Ajustar la posición del menú para que se sitúe por encima del elemento de destino
    var menuHeight = navMenu.offsetHeight;
    var targetOffsetTop = targetElement.offsetTop;
    var newPosition = targetOffsetTop - menuHeight;

    window.scrollTo({
      top: newPosition,
      behavior: 'smooth' // Desplazamiento suave
    });
  });
}


// Función para extraer datos del json (apartado experiencia profesional)

fetch("exp.json")
  .then(response => response.json())
  .then(respuesta => {

    let experienciaHTML = "";
    for (let i = 0; i < respuesta.experiencia.length; i++) {
      let experiencia = respuesta.experiencia[i];
      let descripcionHTML = experiencia.descripcion.map(element => "<li>" + element + "</li>").join(""); // Generar el HTML de los elementos de la lista
      let itemHTML = "<li class='list-style'><strong>" + experiencia.puesto + "</strong> - " + experiencia.empresa + " (" + experiencia.fecha + ")<br>" +
        "<ul>" + descripcionHTML + "</ul>"
        + "</li>";
      experienciaHTML += itemHTML;
    }
    document.getElementById("experiencia").innerHTML = experienciaHTML;
    let dynamicLists = document.getElementById("experiencia").querySelectorAll("ul");
    dynamicLists.forEach(list => {
      list.style.listStyleType = "square";
    });
  })


  .catch(error => {
    console.error("Error al cargar el archivo: ", error);
  });


// Funciones para animar elementos

// Rotar elemento

function rotar(elemento) {
  elemento.addEventListener('mouseover', function () {
    elemento.classList.toggle('rotate-center');
    console.log("hola")
  });
}

var menuhamb = document.getElementById("btnnavicon");
rotar(menuhamb);

var botonoscuro = document.getElementById("oscuro");
rotar(botonoscuro);



