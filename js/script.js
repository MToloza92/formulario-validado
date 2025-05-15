document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let esValido = true;

    //  Validar Nombre
    const nombre = document.getElementById("nombre");
    const nombreFeedback = document.getElementById("nombreFeedback");
    if (nombre.value.trim() === "" || nombre.value.trim().split(" ").length < 2) {
        setFeedback(nombre, nombreFeedback, "Ingrese su nombre completo ❌", false);
        esValido = false;
    } else {
        setFeedback(nombre, nombreFeedback, "Nombre válido ✔️", true);
    }

    // Validar RUT (formato: 8 números + dígito o K)
    const rut = document.getElementById("rut");
    const rutFeedback = document.getElementById("rutFeedback");
    const rutPattern = /^\d{8}[0-9kK]$/;
    if (!rutPattern.test(rut.value.trim())) {
        setFeedback(rut, rutFeedback, "Formato inválido ❌", false);
        esValido = false;
    } else {
        setFeedback(rut, rutFeedback, "Formato válido ✔️", true);
    }

    // Validar Contraseña
    const pass = document.getElementById("contrasena");
    const passFeedback = document.getElementById("contrasenaFeedback");
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passPattern.test(pass.value)) {
        setFeedback(pass, passFeedback, "Debe tener mayúsculas, minúsculas y números ❌", false);
        esValido = false;
    } else {
        setFeedback(pass, passFeedback, "Contraseña segura ✔️", true);
    }

    // Repetir contraseña
    const repeat = document.getElementById("repetirContrasena");
    const repeatFeedback = document.getElementById("repetirContrasenaFeedback");
    if (repeat.value !== pass.value || repeat.value === "") {
        setFeedback(repeat, repeatFeedback, "Las contraseñas no coinciden ❌", false);
        esValido = false;
    } else {
        setFeedback(repeat, repeatFeedback, "Coinciden ✔️", true);
    }

    // Envío final
    if (esValido) {
        alert("Formulario enviado correctamente.");
        this.reset();
        limpiarFeedback();
    }
});

// Función para aplicar mensajes de error o éxito
function setFeedback(input, span, mensaje, valido) {
    input.classList.remove("valid", "invalid");
    span.classList.remove("success", "error");

    if (valido) {
        input.classList.add("valid");
        span.classList.add("success");
    } else {
        input.classList.add("invalid");
        span.classList.add("error");
    }

    span.textContent = mensaje;
}

// Limpia los mensajes al resetear el formulario
function limpiarFeedback() {
    const spans = document.querySelectorAll(".feedback");
    const inputs = document.querySelectorAll("input");
    spans.forEach(span => span.textContent = "");
    inputs.forEach(i => i.classList.remove("valid", "invalid"));
}
