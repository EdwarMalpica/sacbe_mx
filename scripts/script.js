const navigationMainMenu = document.querySelector(".mainMenu");
const hamburguerElement = document.querySelector(".hamburguer");
const button = document.getElementById("downloadMobile");
const userAgent = navigator.userAgent;

hamburguerElement.addEventListener("click", () => {
    navigationMainMenu.classList.toggle("mainMenu--open");
    hamburguerElement.classList.toggle("hamburguer--open");
});

navigationMainMenu.addEventListener("click", () => {
    navigationMainMenu.classList.remove("mainMenu--open");
    hamburguerElement.classList.remove("hamburguer--open");
})

/*Section */
function cambiaVisibilidad() {
  var div1 = document.getElementsByClassName("opc_es");
  var div2 = document.getElementsByClassName("opc_en");
  if ((div2.style.display = "block")) {
    div2.style.display = "none";
    div1.style.display = "block";
  } else {
    div2.style.display = "block";
    div1.style.display = "none";
  }
}

/* Abrir Modal */
var imagenes = document.getElementsByClassName("openModal");
var modal = document.getElementById("modalVideo");

if (screen.width >= 699) {
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function() {
      modal.style.display = "block";
    }
  }
} else {
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function() {
      modal.style.display = "flex";
    }
  }
}

var cerrar = document.getElementsByClassName("cerrar")[0];
cerrar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Obtener todos los botones con la clase "dropbtn"
var dropdownButtons = document.querySelectorAll('.dropbtn');

// Añadir un listener de evento a cada botón
dropdownButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Obtener el menú asociado al botón
    var dropdownMenu = button.nextElementSibling;
    
    // Mostrar u ocultar el menú
    dropdownMenu.classList.toggle('show');
  });
});

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
