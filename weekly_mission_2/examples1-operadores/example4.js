// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5];
const numbersSquare = numbers4.map(function (num) {
  return num * num;
});
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado");
console.log(numbersSquare);

//EJERCICIO PROPIO
const numeros1 = [2, 4, 6, 8, 10];
//para usar "map" debes crear otra variable donde se almacenara el array nuevo
const numeros2 = numeros1.map((digitos) => {
  return digitos + 10;
});
console.log(numeros2);
