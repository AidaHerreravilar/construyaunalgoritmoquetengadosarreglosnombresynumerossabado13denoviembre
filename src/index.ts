//CONSTRUYA UN ALGORITMO QUE TENGA DOS ARREGLOS, UNO QUE ALAMACENE DOS NOMBRES Y OTRO QUE
//ALMACENE TRES NÙMEROS, AMBOS INGRESADOS POR EL USUARIO.
//AL FINAL DEBE IMPRIMIR LOS VALORES POR CONSOLA.

let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);
let indice: number;
for (indice = 0; indice < 2; indice++) {
  arregloNombres[indice] = prompt(
    `Ingrese el nombre de la posición ${indice}: `
  );
}
for (indice = 0; indice < 3; indice++) {
  arregloNumeros[indice] = Number(
    prompt(`Ingrese el número de la posición ${indice}: `)
  );
}
for (indice = 0; indice < 2; indice++) {
  console.log(
    `El nombre en la posición ${indice} es: ${arregloNombres[indice]}`
  );
}
for (indice = 0; indice < 3; indice++) {
  console.log(
    `El número en la posición ${indice} es: ${arregloNumeros[indice]}`
  );
}
