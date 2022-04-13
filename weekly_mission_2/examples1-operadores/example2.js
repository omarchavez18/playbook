// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => (sum += num));
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista");
console.log(sum);

//EJERCICIO PROPIO-calcular la suma de todos los elementos de una lista

let sumatoria = 0;
const numeros = [1, 2, 5, 5, 7];

numeros.forEach((cifras) => {
  return (sumatoria += cifras);
});
console.log(sumatoria);
