// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function (yourPet) {
    console.log(`${this.name} say's hello to ${yourPet}`);
  },
};

console.log("Ejemplo 5: Objeto con método que recibe parámetros");
myPet.sayHelloToMyPet("Tulio");

// EJERCICIO PROPIO

const formulaUno = {
  driver: "Daniel Riccardo",
  race: function (otherDriver) {
    console.log(
      `McClaren's driver ${this.driver} surpassed ${otherDriver} in the race.`
    );
  },
};
formulaUno.race("Alex Albon");
