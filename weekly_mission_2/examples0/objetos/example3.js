// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Tulio",
  age: 2,
  nicknames: ["Tulipan", "Tulancingo", "Tulish"],
  address: {
    zip_code: "10000",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "CDMX",
  },
};
console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]);

//EJERCICIO PROPIO

let deportes = {
  deportePasto: "rugby",
  deporteAlberca: "natación",
  deporteMar: "surf",
  buceoEquipo: ["tanque de aire", "BCD", "visor", "regulador", "aletas"],
  f1: {
    ferrari: "charles leclerc",
    redbull: "Checo Pérez",
    mercedez: "lewis hamilton",
    mcClaren: "lando norris",
  },
};
console.log(deportes);
console.log(deportes.deporteMar);
console.log(deportes.buceoEquipo[0]);
console.log(deportes.f1.redbull);
