// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) =>  lado * 4;
console.log(perimetroCuadrado(6))

const areaCuadrado = (lado) => lado * lado;
console.log(areaCuadrado(6))

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Reto 1
function calcularAlturaTrianguloIsoceles() {
  const inputLado1 = document.querySelector('#inputTrianguloLado1').value;
  const inputLado2 = document.querySelector('#inputTrianguloLado2').value;
  const inputBase = document.querySelector('#inputTrianguloBase').value;

  if (inputLado1.length <= 0 || inputLado2.length <= 0 || inputBase.length <= 0) {
    alert("Rellena los espacios");
  } else {

    if(!(inputLado1 === inputLado2 && inputLado1 != inputBase)) {
      console.log("Nope");
    } else {
      console.log("Isosceles");
      const lados = 4*(parseInt(inputLado1)**2);
      const base = parseInt(inputBase)**2;
      const areaIsosceles = Math.sqrt(lados - base)/2;
      alert(`El área del triangulo isosceles es: ${areaIsosceles}`);
    }
  }
}