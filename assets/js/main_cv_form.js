// Funciones de validación del formulario

// // Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateName() {
    var name = document.contactForm.name.value;
    var nameErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Por favor, ingresa tu nombre");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        // Añadir todas las vocales con acentos después de la s
        if (regex.test(name) === false) {
            printError("nameErr", "Por favor, ingresa un nombre válido");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate() {
    var email = document.contactForm.email.value;
}


// // Defining a function to validate form 

function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;

    var nameErr = emailErr = mobileErr = messageErr = true;


    // Defining error variables with a default value
    var nameErr = emailErr = email2Err = mobileErr = countryErr = genderErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Por favor, ingresa tu nombre");
    } else {
        var regex = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ\s\p{P}-]).{2,}$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Por favor, ingresa un nombre válido");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Por favor, ingresa un correo válido");
    } else {
        // Regular expression for basic email validation
        var regex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Por favor, ingresa un correo válido");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Por favor, ingresa un teléfono válido");
    } else {
         if (regex.test(mobile) === false) {
            printError("mobileErr", "Por favor, ingresa un teléfono válido");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate message
    if (message == "") {
        printError("messageErr", "Por favor, ingresa un mensaje válido");
    } else {
        var regex = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ\s\p{P}-]).{5,}$/;
        if (regex.test(message) === false) {
            printError("messageErr", "Por favor, ingresa un mensaje válido");
        } else {
            printError("messageErr", "");
            messageErr = false;
        }
    }


    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || messageErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var text = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +

            // Display input data in a dialog box before submitting the form
            alert(text);
    }
};






// Funciones de la página

// Función modo dark con addEventListener
function DarkLight() {
    const cuerpo = document.body;
    cuerpo.classList.toggle('light-theme');
    cuerpo.classList.toggle('dark-theme');
  
    const className = cuerpo.className;
    const oscuroBtn = document.getElementById('oscuro');
  
    if (className == "light-theme") {
      oscuroBtn.textContent = "Dark";
    } else {
      oscuroBtn.textContent = "Light";
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
$(document).ready(function() {
    const hoy = new Date();
    const dia = hoy.getDate();

    const weekday = [" Domingo", " Lunes", " Martes", " Miércoles", " Jueves", " Viernes", " Sábado"];
    const sem = weekday[hoy.getDay()];

    const month = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
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
  menuItems[i].addEventListener('click', function() {
    // Cerrar el menú
    var toggleButton = navMenu.getElementsByClassName('navbar-toggler')[0];
    if (toggleButton.getAttribute('aria-expanded') === 'true') {
      toggleButton.click();
    }
  });
}


// Funciones para animar elementos
// Rotar elemento
function rotar(elemento) {
    elemento.addEventListener('mouseover', function() {
      elemento.classList.toggle('rotate-center');
    });
  }

var menuhamb = document.getElementById("btnnavicon");
rotar(menuhamb);

var botonoscuro = document.getElementById("oscuro");
rotar(botonoscuro);

var botonsubmit = document.getElementById("submit");
rotar(botonsubmit);

