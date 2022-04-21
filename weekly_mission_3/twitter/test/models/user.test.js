const User = require("./../../app/models/user");

describe("Unit test for User class", () => {
  test("1) Create an User object", () => {
    const user = new User(18, "omarcgdv", "Omar", "bio");
    expect(user.id).toBe(18);
    expect(user.username).toBe("omarcgdv");
    expect(user.name).toBe("Omar");
    expect(user.bio).toBe("bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  // Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
  //Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.

  test("2) Add getters", () => {
    const user = new User(1, "danielcgdv", "Daniel", "Bio");
    expect(user.getUsername).toBe("danielcgdv");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
});
