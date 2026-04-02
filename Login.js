function login() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    var storedUser = localStorage.getItem("user");
    if (!storedUser) {
        message.style.color = "red";
        message.textContent = "No hay usuarios registrados";
        return;
    }

    var user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
        message.style.color = "green";
        message.textContent = "Inicio exitoso!";

        // Guardar solo el nombre en localStorage para index.html
        localStorage.setItem("usuario", user.name);

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos";
    }
}