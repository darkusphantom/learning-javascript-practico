const lista = [100, 200, 300, 500];

function calcularMediaAritmetica(lista){
	/*let sumaLista = 0;

	for (let i = 0; i < lista.length; i++) {
		sumaLista = lista[i] + sumaLista;
	}*/

	const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
		return valorAcumulado + elemento;
	});

	const promedioLista = sumaLista / lista.length

	return promedioLista;
}

//console.log(calcularMediaAritmetica(lista));