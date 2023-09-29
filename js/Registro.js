
function submitForm() {
    // Captura los datos del formulario
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const country = document.getElementById("country").value;
    const province = document.getElementById("province").value;
    const locality = document.getElementById("locality").value;
    const description = document.getElementById("description").value;

    // Construye un objeto con los datos capturados
    const userData = {
        username,
        email,
        password,
        age,
        dob,
        sex,
        country,
        province,
        locality,
        description
    };

    // Muestra los datos en la página
    // Muestra los datos en la página
    const userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = `
    <h2>Datos de Registro</h2>
    <p><strong>Nombre de usuario:</strong> ${userData.username}</p>
    <p><strong>Email:</strong> ${userData.email}</p>
    <p><strong>Edad:</strong> ${userData.age}</p>
    <p><strong>Fecha de nacimiento:</strong> ${userData.dob}</p>
    <p><strong>Género:</strong> ${userData.sex}</p>
    <p><strong>País:</strong> ${userData.country}</p>
    <p><strong>Provincia:</strong> ${userData.province}</p>
    <p><strong>Localidad:</strong> ${userData.locality}</p>
    <p><strong>Descripción:</strong> ${userData.description}</p>
    `;

    // Muestra los datos en la consola
    console.log(userData);
}

// Obtenemos el botón de hamburguesa y el menú
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

// Agregamos un evento clic al botón de hamburguesa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle (agregar/quitar) la clase "active" al menú
});