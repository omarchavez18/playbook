// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo;
    this.title = title;
    this.lines_changed = lines_changed;
    this.status = "OPEN";
    this.dateCreated = new Date(); // esto guardará la fecha actual en que se instancia el objeto
  }

  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
  }
}

console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100);
console.log(myPR1.getInfo());

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99);
console.log(myPR2.getInfo());

// EJEMPLO PERSONAL

class motoGP {
  constructor(equipo1, equipo2, equipo4) {
    this.equipo1 = equipo1;
    this.equipo2 = equipo2;
    this.equipo3 = "honda";
    this.equipo4 = equipo4;
    this.piloto = "Marc Marquez";
  }
  motocicleta() {
    return `los equipos mas importantes son ${this.equipo1}, ${this.equipo2}, ${this.equipo3}, y el mejor piloto es ${this.piloto}.`;
  }
}

const equipos = new motoGP("suzuki", "redbull", "suzuki");
console.log(equipos.motocicleta());

//EJEMPLO PERSONAL 2
class job {
  constructor(company, position, salary, name) {
    this.name = name;
    this.company = company;
    this.position = position;
    this.salary = salary;
    this.location = "remote";
  }
  employee() {
    return `my name is ${this.name} Im a ${this.position} and all the team work ${this.location}.`;
  }
}

const myFirstJob = new job("EPAM", "JR software developer", 35000, "Omar");
console.log(myFirstJob.employee());
