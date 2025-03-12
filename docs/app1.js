document.addEventListener('DOMContentLoaded', () => {
    platillos();  // Ejecutamos la función platillos cuando el DOM está listo
});

const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');  // Seleccionamos los platillos

    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);

    // Filtrar los platillos según el tipo
    const criollos = platillosArreglo.filter(criollo => criollo.getAttribute('data-platillo') === 'criollo');
    const mariscos = platillosArreglo.filter(marisco => marisco.getAttribute('data-platillo') === 'marisco');
    const amazonicos = platillosArreglo.filter(amazonico => amazonico.getAttribute('data-platillo') === 'amazonico');
    const chifas = platillosArreglo.filter(chifa => chifa.getAttribute('data-platillo') === 'chifa');
    const caldos = platillosArreglo.filter(caldo => caldo.getAttribute('data-platillo') === 'caldo');
    const parrillas = platillosArreglo.filter(parrilla => parrilla.getAttribute('data-platillo') === 'parrilla');
    const bebidas = platillosArreglo.filter(bebida => bebida.getAttribute('data-platillo') === 'bebida');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(criollos, mariscos, amazonicos, chifas, caldos, parrillas, bebidas, postres, platillosArreglo);
}

const mostrarPlatillos = (criollos, mariscos, amazonicos, chifas, caldos, parrillas, bebidas, postres, todos) => {
    const contenedorPlatillos = document.querySelector('.platillos');  // Contenedor de los platillos

    // Seleccionar los botones
    const btnCriollos = document.querySelector('.criollo');
    const btnMariscos = document.querySelector('.marisco');
    const btnAmazonicos = document.querySelector('.amazonico');
    const btnChifas = document.querySelector('.chifa');
    const btnCaldos = document.querySelector('.caldo');
    const btnParrillas = document.querySelector('.parrilla');
    const btnPostres = document.querySelector('.postre');
    const btnBebidas = document.querySelector('.bebida');
    const btnTodos = document.querySelector('.todos');

    // Solo agregamos los eventListeners si los botones existen
    if (btnCriollos) {
        btnCriollos.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            criollos.forEach(criollo => contenedorPlatillos.appendChild(criollo));
        });
    }

    if (btnMariscos) {
        btnMariscos.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            mariscos.forEach(marisco => contenedorPlatillos.appendChild(marisco));
        });
    }

    if (btnAmazonicos) {
        btnAmazonicos.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            amazonicos.forEach(amazonico => contenedorPlatillos.appendChild(amazonico));
        });
    }

    if (btnChifas) {
        btnChifas.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            chifas.forEach(chifa => contenedorPlatillos.appendChild(chifa));
        });
    }

    if (btnCaldos) {
        btnCaldos.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            caldos.forEach(caldo => contenedorPlatillos.appendChild(caldo));
        });
    }

    if (btnParrillas) {
        btnParrillas.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            parrillas.forEach(parrilla => contenedorPlatillos.appendChild(parrilla));
        });
    }

    if (btnBebidas) {
        btnBebidas.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            bebidas.forEach(bebida => contenedorPlatillos.appendChild(bebida));
        });
    }

    if (btnPostres) {
        btnPostres.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            postres.forEach(postre => contenedorPlatillos.appendChild(postre));
        });
    }

    if (btnTodos) {
        btnTodos.addEventListener('click', () => {
            limpiarHtml(contenedorPlatillos);
            todos.forEach(todo => contenedorPlatillos.appendChild(todo));
        });
    }
}

const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}
