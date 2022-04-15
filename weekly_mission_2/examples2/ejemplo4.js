// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.stars = stars;
  }

  getInfo() {
    // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars`;
  }
}
console.log("Ejemplo 4: Métodos en los objetos");
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100);
console.log(myRepo.getInfo());

// EJEMPLO PROPIO.

class f1 {
  constructor(escuderia, piloto1, piloto2, sede, jefe) {
    this.escuderia = escuderia;
    this.piloto1 = piloto1;
    this.piloto2 = piloto2;
    this.sede = sede;
    this.jefe = jefe;
  }
  information() {
    return `the best team is ${this.escuderia} the chief is ${this.jefe} and the headquarters is ${this.sede}. `;
  }
}

const ferrari = new f1(
  "Ferrari",
  "Charles Leclerc",
  "Carlos Sainz",
  "Monza",
  "Mario Binotto"
);
console.log(ferrari.information());
