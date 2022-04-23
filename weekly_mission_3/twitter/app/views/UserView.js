const { getAllUsernames } = require("./../../app/services/UserService");

const UserService = require("./../../app/services/UserService");
/*Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`. */
class UserView {
  static createUser(payload) {
    if (payload === null) {
      console.log("error its null");
      return { error: "payload no existe" };
    } else if (
      typeof payload.username === "string" &&
      typeof payload.name === "string" &&
      typeof payload.id === "number"
    ) {
      return UserService.create(payload.id, payload.username, payload.name);
    } else {
      return {
        error:
          "Error, las propiedades del payload necesitan tener un valor válido",
      };
    }
  }
}

module.exports = UserView;
