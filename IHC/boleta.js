// Recuperar datos del cliente y del carrito desde localStorage
window.onload = function() {
    // Recuperamos el nombre y correo del cliente
    var cliente = JSON.parse(localStorage.getItem('cliente'));
    if (cliente) {
        document.getElementById('cliente-nombre').innerText = 'Nombre: ' + cliente.nombre + ' ' + cliente.apellido;
        document.getElementById('cliente-DNI').innerText = 'DNI: ' + cliente.DNI;
        document.getElementById('cliente-email').innerText = 'Email: ' + cliente.email;
        document.getElementById('cliente-telefono').innerText = 'Teléfono: ' + cliente.telefono;
        document.getElementById('cliente-direccion').innerText = 'Dirección: ' + cliente.direccion;
    }

    // Recuperar el carrito
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length > 0) {
        var total = 0;
        var detallePedido = document.getElementById('detalle-pedido');
        carrito.forEach(item => {
            var listItem = document.createElement('li');
            var precio = parseFloat(item.precio.replace('S/', '').replace('.'));
            var cantidad = parseInt(item.cantidad);
            var subtotal = precio * cantidad;
            total += subtotal;

            listItem.innerHTML = `${item.titulo} - ${cantidad} x S/${precio.toFixed(2)} = S/${subtotal.toFixed(2)}`;
            detallePedido.appendChild(listItem);
        });

        // Mostrar el total
        document.getElementById('total').innerText = 'TOTAL: S/' + total.toFixed(2);
    } else {
        // Si no hay productos en el carrito, mostrar un mensaje
        document.getElementById('detalle-pedido').innerHTML = "<li>No hay productos en el carrito.</li>";
        document.getElementById('total').innerText = 'Total: S/0.00';
    }
}
