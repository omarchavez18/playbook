// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());

console.log(
  "Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas"
);
console.log(namesToUpperCase);

// EJERCICIO PROPIO-Uso de Map para convertir todos los nombres de una lista a minúsculas.

const apellidos = ["Chavez", "Gutierrez De Velasco", "Torres", "Hernandez"];
const apellidosNuevo = apellidos.map((apellido) => {
  return apellido.toLowerCase();
});
console.log(apellidosNuevo);
