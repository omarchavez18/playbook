import Pokemon from "./pokemon";

test("1) Create a new object pokemon pikachu", () => {
  const myPokemon = new Pokemon("Pikachu", "electric", 15);
  expect(myPokemon.name).toBe("Pikachu");
  expect(myPokemon.type).toBe("electric");
  expect(myPokemon.age).toBe(15);
});

test("2) create a new object pokemon", () => {
  const anotherPokemon = new Pokemon("bulbasaur", "grass");
  expect(anotherPokemon.name).toBe("bulbasaur");
  expect(anotherPokemon.type).toBe("grassa");
});
