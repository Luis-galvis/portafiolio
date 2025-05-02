// Ejemplo de efecto de paralaje (necesita ajustes para funcionar correctamente con la imagen de fondo)
/*
window.addEventListener('scroll', function() {
    let inicio = document.getElementById('inicio');
    let offset = window.pageYOffset;
    inicio.style.backgroundPositionY = offset * 0.7 + 'px';
});
*/

// Ejemplo de animación al hacer scroll (necesita una biblioteca como AOS para un uso más completo)
/*
window.addEventListener('scroll', function() {
    let sobreMi = document.getElementById('sobre-mi');
    if (window.pageYOffset > sobreMi.offsetTop - window.innerHeight / 2) {
        sobreMi.classList.add('active'); // Necesitas definir la clase 'active' en CSS para la animación
    }
});
*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var form = this;
    var sendButton = form.querySelector("button[type='submit']");

    // Desactivar el botón y cambiar el texto
    sendButton.disabled = true;
    sendButton.innerText = "Enviando...";

    var formData = new FormData(form);

    fetch("enviar.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("successMessage").style.display = "block";
        form.reset();

        // Habilitar el botón después de 5 segundos
        setTimeout(() => {
            sendButton.disabled = false;
            sendButton.innerText = "Enviar";
        }, 5000);
    })
    .catch(error => {
        console.error("Error:", error);
        sendButton.disabled = false;  // En caso de error, habilitar el botón
        sendButton.innerText = "Enviar";
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
let sendButton = document.getElementById("sendButton");
sendButton.disabled = true;  // Desactiva el botón
sendButton.innerText = "Enviando..."; // Cambia el texto para que el usuario vea el estado

// Habilita el botón después de 5 segundos (puedes ajustar el tiempo)
setTimeout(() => {
sendButton.disabled = false;
sendButton.innerText = "Enviar";
}, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    }

    revealSections(); // Para aplicar el efecto de inmediato si hay elementos visibles
    window.addEventListener("scroll", revealSections);
});

// Add your JavaScript code here
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Ejemplo de interacción con botones de navegación (Bootstrap ya maneja el scroll suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Inicializar el carrusel de Bootstrap
var cursosSlider = new bootstrap.Carousel(document.getElementById('cursos-slider'), {
    interval: 5000,
    wrap: true
});
document.addEventListener("DOMContentLoaded", function () {
    var proyectosSlider = new bootstrap.Carousel(document.getElementById('proyectos-slider'), {
        interval: 5000,  // Ajusta el tiempo de transición si es necesario
        wrap: true
    });

    var bdtechSlider = new bootstrap.Carousel(document.getElementById('carousel-bdtech'), {
        interval: 3000, // Ajusta el tiempo según lo que necesites
        wrap: true
    });
});



