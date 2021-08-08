function calcularMediaAritmetica(lista){
	const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
		return valorAcumulado + elemento;
	});
	const promedioLista = sumaLista / lista.length
	return promedioLista;
}

const lista = [100, 200, 300, 500, 10000000];

const mitadLista = parseInt(lista1.length / 2);

function esPar(numero1) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

let mediana;

if (esPar(lista1.length)) {
	const elemento1 = lista1[mitadLista1 - 1];
	const elemento2 = lista1[mitadLista1];

	const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
	mediana = promedioElemento1y2
} else {
	mediana = lista1[mitadLista1];
}
