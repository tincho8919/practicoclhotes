
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí puedes verificar las credenciales. Por ejemplo, si las credenciales son correctas:
        if (username === "Juan@gmail.com" && password === "12345") {
            // Redireccionar al usuario a la página de inicio
            window.location.href = "../index.html";
        } else {
            // Mostrar un mensaje de error si las credenciales son incorrectas
            errorMessage.textContent = "Credenciales incorrectas. Inténtelo nuevamente.";
            window.location.href = "../pages/Registro.html";
        }
    });
});
// Obtenemos el botón de hamburguesa y el menú
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

// Agregamos un evento clic al botón de hamburguesa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle (agregar/quitar) la clase "active" al menú
});