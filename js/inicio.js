// Obtenemos el botón de hamburguesa y el menú
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

// Agregamos un evento clic al botón de hamburguesa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle (agregar/quitar) la clase "active" al menú
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const translateValue = -currentSlide * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

prevButton.addEventListener('click', () => {
    changeSlide(-1);
});

nextButton.addEventListener('click', () => {
    changeSlide(1);
});

//Auto-avance opcional
setInterval(() => {
    changeSlide(1);
}, 3000);

function buyProduct(productName) {
    const message = document.getElementById(`message${productName.charAt(productName.length - 1)}`);
    message.textContent = `YOU HAVE PURCHASED ${productName}.`;
}

// Limpiar los mensajes cuando se recarga la página
window.addEventListener('load', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach(message => {
        message.textContent = '';
    });
});