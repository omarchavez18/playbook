// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Tulio",
  // Esta es una función que se guarda como propiedad
  sayHello: function () {
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`);
  },
};

console.log("Ejemplo 4: Objeto con métodos");
pet.sayHello();

//EJERCICIO PROPIO-OBJETO

const f1 = {
  escuderia: "Red Bull",
  piloto: "Max Verstappen",
  race: function () {
    console.log(
      `el piloto de ${this.escuderia} ${this.piloto} ganara el gran premio de mexico `
    );
  },
};
f1.race();
