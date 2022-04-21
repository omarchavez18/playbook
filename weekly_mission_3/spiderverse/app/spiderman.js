class spiderMan {
  constructor(name, age, actor, moviesNumber, studio) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.moviesNumber = moviesNumber;
    this.studio = studio;
  }
  getInfo() {
    return `Hey Im ${this.actor} from ${this.studio}`;
  }
}

module.exports = spiderMan;
