// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ["Explorer 1", "Explorer 2", "Explorer 3"];
const result = names13.findIndex((name) => name.length > 7);
console.log(
  "Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición " +
    result
);

// EJERCICIO PERSONAL/ nos entrega la ubicacion del array
const paises = ["australia", "nueva zelanda", "japon", "korea del sur"];
const paisesOriente = paises.findIndex((pais) => {
  return pais.length < 6;
});
console.log(paisesOriente);
