// Simulación de base de datos en el almacenamiento local
const users = JSON.parse(localStorage.getItem("users")) || [
    { name: "Juan", email: "zapaterojuan3@gmail.com", password: "juaniz55" }
];

// Función para registrar un nuevo usuario
function registerUser(event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario ya existe
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("El correo ya está registrado. Intenta iniciar sesión.");
    } else {
        // Agregar el usuario al arreglo
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users)); // Guarda en localStorage
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html"; // Redirigir al login
    }
}

// Función para iniciar sesión
function loginUser(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Buscar al usuario en el arreglo
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Bienvenido, ${user.name}`);
        window.location.href = "main.html"; // Redirigir a la página principal
    } else {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

// Vincula los eventos directamente
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", registerUser);
}
if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
}
