function buyProduct(productName) {
    const message = document.getElementById("message");
    message.textContent = `YOU HAVE PURCHASED ${productName}.`;
    
    const alertContainer = document.querySelector(".alert");
    alertContainer.style.visibility = "visible";

    setTimeout(() => {
        alertContainer.style.visibility = "hidden";
    }, 2000); // Oculta el alerta después de 2 segundos (puedes ajustar este valor)
}

// Cerrar el alerta haciendo clic en cualquier parte de la pantalla
const alertContainer = document.querySelector(".alert");
alertContainer.addEventListener("click", () => {
    alertContainer.style.visibility = "hidden";
});

// Obtenemos el botón de hamburguesa y el menú
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

// Agregamos un evento clic al botón de hamburguesa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle (agregar/quitar) la clase "active" al menú
});
