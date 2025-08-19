/*Ejercicio 1

let edad = prompt("Ingrese su edad")

if (edad >= 18 && edad<= 80 && !NaN) {
    document.write("Ya puedes conducir")
} else{
    document.write("El numero ingresado no es valido")
}
    

Ejercicio 2

let entrada = prompt("Escribe una nota");

let nota = parseInt(entrada);


if (isNaN(nota)) {
  alert("Introduce un número válido");
} else {
  switch (nota) {
    case 0:
    case 1:
    case 2:
      alert("Muy deficiente");
      break;

    case 3:
    case 4:
      alert("Insuficiente");
      break;

    case 5:
    case 6:
      alert("Suficiente");
      break;

    case 7:
      alert("Bien");
      break;

    case 8:
    case 9:
      alert("Notable");
      break;

    case 10:
      alert("Sobresaliente");
      break;

    default:
      alert("Número erróneo"); 
  }
}
    

Ejercicio 3

let resultado = "";
let primera = true;

while (true) {
  let texto = prompt("Escribe una cadena de texto (Cancelar para salir):");

  if (texto === null) { 

    break;
  }

  if (primera) {
    resultado = texto;
    primera = false;
  } else {
   
    resultado += "-" + texto;
  }
}
if (resultado.length > 0) {
  alert(resultado);
} else {
  alert("No ingresaste ninguna cadena");
}


Ejercicios 4

let suma = 0;

while (true) {
  let entrada = prompt("Escribe un número (Cancelar para salir):");

  if (entrada === null) { 
    break;
  }

  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Eso no es un número. Intenta de nuevo.");
  } else {
    suma += numero;
  }
}
alert("La suma total de los números introducidos es: " + suma);


Ejercicio 5

 const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", 
                    "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", 
                    "C", "K", "E"];

    while (true) {
      let entrada = prompt("Introduce tu número de DNI (Cancelar para salir):");

      if (entrada === null) {
        break;
      }

      let dni = parseInt(entrada);

      if (isNaN(dni)) {
        alert("Eso no es un número. Intenta de nuevo.");
        continue;
      }
      if (dni < 0 || dni > 99999999) {
        alert("Número fuera de rango (0 a 99999999). Intenta de nuevo.");
        continue;
      }
      let resto = dni % 23;
      let letra = letras[resto];

      alert("La letra del DNI " + dni + " es: " + letra);
    }
 
 
    Ejercicio 6
    
   for (let i = 1; i <= 30; i++) {
  let fila = "";

  for (let j = 1; j <= i; j++) {
    fila += i;
  }

  console.log(fila);
}


Ejercicio 7

let numero = parseInt(prompt("Introduce un número"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  alert("Número inválido. Debe ser un entero entre 1 y 50.");
} else {
  for (let i = numero; i >= 1; i--) {
    let fila = String(i).repeat(i);
    console.log(fila);
  }
}
  

Ejercicio 8

let numero = parseInt(prompt("Introduce un número"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  alert("Número inválido. Debe ser un entero entre 1 y 50.");
} else {
  for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += j;
    }
    console.log(fila);
  }
}


Ejercicio 9

for (let i = 1; i <= 500; i++) {
  let linea = i; 

  if (i % 4 === 0 && i % 9 === 0) {
    linea += " (Múltiplo de 4 y 9)";
  } else if (i % 4 === 0) {
    linea += " (Múltiplo de 4)";
  } else if (i % 9 === 0) {
    linea += " (Múltiplo de 9)";
  }

  console.log(linea);

  if (i % 5 === 0) {
    console.log("————————————————————-");
  }
}
  

Ejercicio 10

let filas = parseInt(prompt("Introduce el número de filas:"));
    let columnas = parseInt(prompt("Introduce el número de columnas:"));

    if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
      alert("Número inválido.");
    } else {
      let total = filas * columnas;
      let contador = total;

      document.write("<table>");

      for (let i = 0; i < filas; i++) {
        document.write("<tr>");
        for (let j = 0; j < columnas; j++) {
          document.write("<td>" + contador + "</td>");
          contador--;
        }
        document.write("</tr>");
      }

      document.write("</table>");
    }


    Ejercicio 11
  
let nombre1 = prompt("Introduce el primer nombre:");
let nombre2 = prompt("Introduce el segundo nombre:");
let nombre3 = prompt("Introduce el tercer nombre:");

let edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ":"));
let edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ":"));
let edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ":"));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
  alert("introducir números válidos .");
} else {
  
  let mayorEdad = Math.max(edad1, edad2, edad3);
  let nombreMayor;

  if (mayorEdad === edad1) {
    nombreMayor = nombre1;
  } else if (mayorEdad === edad2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }

  alert("El mayor es " + nombreMayor + " con " + mayorEdad + " años.");
}
   
Ejercicio 12


let numeroAleatorio = Math.floor(Math.random() * 99) + 1;

alert("Número aleatorio generado: " + numeroAleatorio);


Ejercicio 13

let texto = prompt("Introduce un texto:");
if (texto !== null) {
  alert(texto.toUpperCase());
}



Ejercicio 14

let texto = prompt("Introduce una cadena:");
if (texto !== null) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado += texto[i];
    if (i < texto.length - 1) {
      resultado += "-";
    }
  }
  alert(resultado);
}


Ejercicio15

let texto = prompt("Introduce un texto:");
if (texto !== null) {
  let contador = 0;
  let vocales = "aeiouAEIOU";

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  alert("Número de vocales: " + contador);
}


Ejercicio 16

let texto = prompt("Introduce una cadena:");
if (texto !== null) {
  let textoReves = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoReves += texto[i];
  }
  alert(textoReves);
}


Ejercicio 17

let texto = prompt("Introduce un texto:");

if (texto !== null) {
  let vocales = "aeiouAEIOU";
  let posicion = -1;
  let vocalEncontrada = "";

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      posicion = i;
      vocalEncontrada = texto[i];
      break; 
    }
  }

  if (posicion !== -1) {
    alert("La vocal '" + vocalEncontrada + "' está en la posición " + posicion);
  } else {
    alert("No se encontró ninguna vocal en el texto.");
  }
}

*/




