const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];
//Sobre esta lista, realiza lo siguiente:

//1)Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorersName) => {
  console.log(explorersName.name);
});

//2)Imprime el stack de cada explorer, usa FOR EACH
const qwert = explorers.forEach((explorersStack) => {
  console.log(`el ${explorersStack.stack}`);
});

//3)Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const nuevaLista = explorers.map((stacks) => {
  return stacks.stack;
});
console.log(nuevaLista);

/*4)Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
(para validar un elemento en un lista se usa el método includes)*/

const explorers18 = explorers.filter((js) => {
  return js.stack.includes("js");
});
console.log(explorers18);

//5)Busca el primer explorer que sea de la CDMX, usa FIND

const CDMX = explorers.find((mexico) => {});

//6)Obtén la suma de todos los exercises_completed, usa REDUCE

//7)Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

const finished = explorers.some((lista) => {
  return lista.exercisesFinished === true;
});
console.log(finished);

//8)Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY/