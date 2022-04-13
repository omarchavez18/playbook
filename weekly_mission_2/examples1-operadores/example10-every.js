// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ["Explorer 1", "Explorer 2", "Explorer 3", "Explorer 4"];
const areAllStr = names10.every((name) => typeof name === "string"); // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr);

//EJEMPLO PERSONAL-EVERY

const numeros8 = [2, 5, 7, 45, 18];
const allNumbers = numeros8.every((num) => {
  typeof num == "numbers";
});
console.log(`todos los valores de array son numeros: ` + allNumbers);
