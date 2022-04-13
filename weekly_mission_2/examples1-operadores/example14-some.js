// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, , true];
// Uso de Some para ver si al menos uno de los elementos es false

const areSomeTrue = bools.some((b) => b === false);
console.log(
  "Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue
); //true

//EJEMPLO PERSONAL
/*Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada,
 regresará true, de lo contrario será false. */
const perros = ["beagle", "golden retriever", "beagle", "boxer"];
//usa some para ver si al menos uno de los elementos es "beagle"
const algunBeagle = perros.some((canino) => {
  return canino === "beagle";
});
console.log(
  `alguno de los elementos del array perros es "beagle": ${algunBeagle}`
);
