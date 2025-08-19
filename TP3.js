/* Ejercicio 1
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


document.write("<h3>Lista de meses:</h3>");
document.write("<ul>");
for (let i = 0; i < meses.length; i++) {
  document.write("<li>" + meses[i] + "</li>");
}
document.write("</ul>");


Ejercicio 2

    let ciudades = [
      'Nueva York, Estados Unidos',
      'Barcelona, España',
      'Tokio, Japón',
      'Londres, Reino Unido',
      'Roma, Italia',
      'Pekín, China',
      'Río de Janeiro, Brasil',
      'Ámsterdam, Países Bajos',
      'Sídney, Australia',
      'El Cairo, Egipto'
    ];

    document.write("<p>El arreglo de ciudades tiene " + ciudades.length + " elementos</p>");

    document.write("<ul>");
    document.write("<li>Elemento 1er posición: " + ciudades[0] + "</li>");
    document.write("<li>Elemento 3er posición: " + ciudades[2] + "</li>");
    document.write("<li>Elemento última posición: " + ciudades[ciudades.length - 1] + "</li>");
    document.write("</ul>");

    ciudades.push("Paris");

    document.write("<p>Elemento en la segunda posición: " + ciudades[1] + "</p>");

    ciudades[1] = "Barcelona";

    document.write("<h2>Arreglo de ciudades</h2>");
    document.write("<ul>");
    for (let i = 0; i < ciudades.length; i++) {
      document.write("<li>Elemento: " + ciudades[i] + "</li>");
    }
    document.write("</ul>");



    Ejercicio 3
     
let apariciones = Array(13).fill(0); 

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}


for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  apariciones[suma]++;
}

console.log("Suma | Apariciones");
for (let suma = 2; suma <= 12; suma++) {
  console.log(`${suma.toString().padEnd(4)} | ${apariciones[suma]}`);
}
    

Ejercicio 4

function esParOImpar(numero) {
  return numero % 2 === 0 ? "El número es par" : "El número es impar";
}

let resultado = esParOImpar(7);
console.log(resultado); // "El número es impar"


Ejercicio 5

function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada solo por MAYÚSCULAS");
  } else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada solo por minúsculas");
  } else {
    console.log("La cadena contiene una mezcla de mayúsculas y minúsculas");
  }
}


Ejercicio 6

function calcularPerimetro(a, b) {
  return 2 * (a + b);
}

let ladoA = parseInt(prompt("Ingrese el valor del lado A:"));
let ladoB = parseInt(prompt("Ingrese el valor del lado B:"));

let perimetro = calcularPerimetro(ladoA, ladoB);
console.log("El perímetro del rectángulo es: " + perimetro);


Ejercicio 7

function mostrarTablaMultiplicar(numero) {
  console.log(`Tabla del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
  
let num = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
mostrarTablaMultiplicar(num);
*/