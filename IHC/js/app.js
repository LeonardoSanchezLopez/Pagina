const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnCriollos = document.querySelector('.criollo');
const btnMariscos = document.querySelector('.marisco');
const btnAmazonicos = document.querySelector('.amazonico');
const btnChifas = document.querySelector('.chifa');
const btnCaldos = document.querySelector('.caldo');
const btnParrillas = document.querySelector('.parrilla');
const btnBebidas = document.querySelector('.bebida');
const btnPostres = document.querySelector('.postre');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const criollos = platillosArreglo.filter(criollo=> criollo.getAttribute('data-platillo') === 'criollo');
    const mariscos = platillosArreglo.filter(marisco => marisco.getAttribute('data-platillo') === 'marisco');
    const amazonicos = platillosArreglo.filter(amazonico => amazonico.getAttribute('data-platillo') === 'amazonico');
    const chifas = platillosArreglo.filter(chifa=> chifa.getAttribute('data-platillo') === 'chifa');
    const caldos = platillosArreglo.filter(caldo=> caldo.getAttribute('data-platillo') === 'caldo');
    const parrillas = platillosArreglo.filter(parrilla=> parrilla.getAttribute('data-platillo') === 'parrilla');
    const bebidas = platillosArreglo.filter(bebida=> bebida.getAttribute('data-platillo') === 'bebida');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(criollos, mariscos, amazonicos, chifas, caldos, parrillas, bebidas, postres, platillosArreglo);

}

const mostrarPlatillos = (criollos, mariscos, amazonicos, chifas, caldos, parrillas, bebidas, postres, todos) =>{
    btnCriollos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        criollos.forEach(criollo=> contenedorPlatillos.appendChild(criollo));
    });

    btnMariscos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        mariscos.forEach(marisco=> contenedorPlatillos.appendChild(marisco));
    });

    btnAmazonicos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        amazonicos.forEach(amazonico=> contenedorPlatillos.appendChild(amazonico));
    });
    btnChifas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        chifas.forEach(chifa=> contenedorPlatillos.appendChild(chifa));
    });
    btnCaldos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        caldos.forEach(caldo=> contenedorPlatillos.appendChild(caldo));
    });
    btnParrillas.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        parrillas.forEach(parrilla=> contenedorPlatillos.appendChild(parrilla));
    });
    btnBebidas.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        bebidas.forEach(bebida=> contenedorPlatillos.appendChild(bebida));
    });
    btnPostres.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}