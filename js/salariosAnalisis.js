//Helpers
function esPar(numero) {
	return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
	const sumaLista = lista.reduce(
		(valorAcumulado = 0, elemento) => {
			return valorAcumulado + elemento;
		}
	);
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

//Calcular la mediana
function medianaSalarios(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const personaMitad1 = lista[mitad - 1];
		const personaMitad2 = lista[mitad];

		const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
		return mediana;

	} else {
		const personaMitad = lista[mitad];
		return personaMitad;
	}
}

//Mediana General
const salariosVzl = venezuela.map(
	(persona) => {
		return persona.salary;
	}
)

const salariosVzlSorted = salariosVzl.sort(
	(salario1, salario2) => {
		return salario1 - salario2
	}
);

const medianaGeneralVzl = medianaSalarios(salariosVzlSorted);

//Mediana del top 10%
const spliceStart = (salariosVzlSorted.length * 90) / 100;
const spliceCount = salariosVzlSorted.length - spliceStart;

const salariosVzlTop10 = salariosVzlSorted.splice(spliceStart, spliceCount);

const medianaTop10Vzl = medianaSalarios(salariosVzlTop10);

console.log(medianaGeneralVzl, medianaTop10Vzl);