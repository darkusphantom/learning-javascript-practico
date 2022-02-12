const listado = [];


//Media Geometrica
const mediaGeometrica = document.querySelector('#btnMediaGeometrica');
mediaGeometrica.addEventListener('click', (event) => {
	event.preventDefault();

	const input = document.querySelector('#inputMediaGeometrica');

	if (inputVacio(input)) {
		input.classList.add('input--error');
		input.placeholder = "Error. Ingrese un valor";
	} else {
		if (input.classList.contains('input--error'))  {
			input.classList.remove('input--error');
			input.placeholder = "Ingrese un valor";
		}
		const resultadoPosition = document.querySelector('#resultadoMediaGeometrica');
		mostrarMediaGeometrica(input.value, resultadoPosition);
	}
})

const inputVacio = (input) => {
	if (input.value.length <= 0) {
		return true;
	}
	return false;
}

const calcularMediaGeometrica = (lista) => {
	const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
		return valorAcumulado + elemento;
	})
	const mediaGeometrica = Math.sqrt(sumaLista);
	return mediaGeometrica;
}

const mostrarMediaGeometrica = (valorInput, resultadoPosition) => {
	const valor = parseInt(valorInput);
	listado.push(valor);
	inputMediaGeometrica.value = '';

	resultadoPosition.innerText = `
		Acumulado: ${listado}
		Resultado: ${calcularMediaGeometrica(listado)}
	`;
}

//Media Armonica
const mediaArmonica = document.querySelector('#btnMediaArmonica');
mediaArmonica.addEventListener('click', () => {
	event.preventDefault();

	const input = document.querySelector('#inputMediaArmonica');

	if (inputVacio(input)) {
		input.classList.add('input--error');
		input.placeholder = "Error. Ingrese un valor";
	} else {
		if (input.classList.contains('input--error'))  {
			input.classList.remove('input--error');
			input.placeholder = "Ingrese un valor";
		}
		const resultadoPosition = document.querySelector('#resultadoMediaArmonica');
		mostrarMediaArmonica(input.value, resultadoPosition);
	}
});

const calcularMediaArmonica = () => {

}