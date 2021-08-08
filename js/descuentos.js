function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
	return precioConDescuento;
}

function botonCalcularPrecioConDescuento() {
	const inputPrecio = document.querySelector('#inputPrecio').value;
	const inputDescuento = document.querySelector('#inputDescuento').value;

	if (inputDescuento.length <= 0 || inputPrecio.length <= 0) {
		alert("Rellena los campos para realizar la operacion");
	} else {
		alert(`Este es el precio: ${calcularPrecioConDescuento(inputPrecio, inputDescuento)}`);
	}
}