const addFrom = document.getElementById("form-validation");

// Validación del formulario
addFrom.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de inmediato

    if (addFrom.checkValidity() === false) {
        // Si la validación falla, se previene el envío
        e.stopPropagation();
        addFrom.classList.add('was-validated');
    } else {
        // Si el formulario es válido, guardamos los datos y redirigimos
        guardarDatosCliente();
    }
});

// Función para guardar los datos del cliente
function guardarDatosCliente() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const DNI = document.getElementById('DNI').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    // Crear un objeto con los datos del cliente
    const cliente = {
        nombre,
        apellido,
        DNI,
        email,
        telefono,
        direccion
    };

    // Guardamos los datos en localStorage
    localStorage.setItem('cliente', JSON.stringify(cliente));

    // Redirigir a la página de la boleta
    window.location.href = 'boleta.html';
}
