/*Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados. */

const User = require("./../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    return Object.values(user);
  }
  static updateUserUsername(user, username) {
    user.username = username;
  }

  static getAllUsernames(users) {
    const usersUsernames = users.map((user) => user.username);
    return usersUsernames;
  }
}
module.exports = UserService;
