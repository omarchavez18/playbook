// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesFirstThreeLetters = countries6.map(
  (country) => country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
);
console.log(
  "Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas"
);
console.log(countriesFirstThreeLetters);

//EJERCICIO PROPIO. USAR map PARA CONVERTIR EL ARRAY A MAYUSCULAS.

const paises = ["Mexico", "EUA", "canada", "brasil", "argentina"];
const paises2 = paises.map((country) => {
  return country.toUpperCase().slice(0, 3);
});
console.log(paises2);
