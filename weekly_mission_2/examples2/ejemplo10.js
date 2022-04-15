// Ejemplo 10: Overrinding methods

class Explorer {
  constructor(name, username, mission) {
    this.name = name;
    this.username = username;
    this.mission = mission;
  }

  getNameAndUsername() {
    return `Explorer ${this.name}, username: ${this.username}`;
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle) {
    super(name, username, mission); // SUPER nos ayudará a llamar el constructor padre
    this.cycle = cycle; // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo() {
    let nameAndUsername = this.getNameAndUsername(); // llamamos el método de la clase padre
    // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`;
  }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022");
console.log("Ejemplo 10: Overrinding methods");
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); // Método de la clase padre
console.log(viajero1.getGeneralInfo()); // Método de la clase hija

// EJEMPLO PROPIO

class persona {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.color = "white";
  }
}

class persona1 extends persona {
  constructor(name, age, weight, height) {
    super(name, age, weight);
    this.height = height;
  }
  introduce() {
    return `my name is ${this.name} my skin color is ${this.color}, and my height is ${this.height}.`;
  }
}
const omar = new persona1("Omar", 27, "77 kg", " 1.74 mts");
console.log(omar.introduce());
