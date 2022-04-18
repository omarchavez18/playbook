//
/*1) como crear una clase
2) como instanciar un objeto de una clase
3) instanciar varios objetos de una misma clase
4) como agregar el contructor para guardar atributos
5) crear metodos  */

//objeto de JS

// se creo objeto
const woopa_obj = {
  name: "woopa",
  mission: "nodeJS",
  age: "12",
  color: "pink",
};

//CREAR UNA  CLASE

class ajolonauta {
  //agregar constructor para agregar atributos
  constructor(name, mission, age, color) {
    this.name = name;
    this.mission = mission;
    this.age = age;
    this.color = color;
  }
}

console.log(ajolonauta);

//Instanciar es crear un objeto a partir de una clase
// instanciar varios objetos de uan misma clase

const woopa = new ajolonauta("woopa", "java", 17, "white");
const woopy = new ajolonauta("woopy", "nodejs", 18, "blue");
const wooper = new ajolonauta("wooper", "phyton", 21, "red");

console.log(woopa);
console.log(woopy);
console.log(wooper);

const woopa_obj_js = {
  name: "robert",
  degree: "software developer",
  companyTarget: "EPAM",
  school: "microsoft",
};

class student {
  constructor(name, degree, companyTarget, school) {
    this.name = name;
    this.degree = degree;
    this.companyTarget = companyTarget;
    this.school = school;
  }
  //crear metodos
  sayHello() {
    return `Hey! Hello! ${this.name}`;
  }
}

const mexicanStudent = new student(
  "Omar",
  "software engineer",
  "epam",
  "wizeline"
);

console.log(mexicanStudent.degree);
console.log(mexicanStudent.sayHello());

console.log(woopa_obj_js);
