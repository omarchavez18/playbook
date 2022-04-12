class Pokemon {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`mi pokemon ${this.name} te saluda!!!`);
  }

  sayMessage(msg) {
    console.log(`Mi pokemon ${this.name} dice: ${msg}`);
  }
}
module.exports = Pokemon;
