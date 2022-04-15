// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, subjects) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"]);
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(carloStudent);

//EJEMPLO PROPIO
class escuderia {
  constructor(team, driver, place, teamMate) {
    this.equipo = team;
    this.piloto = driver;
    this.lugarDeCarrera = place;
    this.compañero = teamMate;
  }
}

const escuderiaRedBull = new escuderia(
  "redbull",
  "checo perez",
  "melbourne",
  "max verstappen"
);
console.log(escuderiaRedBull);
