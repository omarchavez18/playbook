//Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`.
// Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
//Modifica la prueba de unidad creada anteriormente. Para ello modifica el código, ya no envíes los valores de dateCreated y lastUpdated al instancias la clase, y verifica en la prueba que a pesar de ya no enviarlos, no recibas un valor undefined
class User {
  constructor(id, username, name, bio, dateCreated, lastUpdated) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    // estos 2 abajo nos devuelven las fechas
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }

  // se agregaron GETTERS

  get getUsername() {
    return this.username;
  }
  get getBio() {
    return this.bio;
  }
  get getDateCreated() {
    return this.dateCreated;
  }
  get getLastUpdated() {
    return this.lastUpdated;
  }
  set setUsername(newUsername) {
    this.username = newUsername;
  }
  set setBio(newBio) {
    this.bio = newBio;
  }
}

module.exports = User;
