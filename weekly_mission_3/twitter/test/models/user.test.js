const User = require("./../../app/models/user");

describe("Unit test for User class", () => {
  test("Create an User object", () => {
    const user = new User(18, "omarcgdv", "Omar", "bio");
    expect(user.id).toBe(18);
    expect(user.username).toBe("omarcgdv");
    expect(user.name).toBe("Omar");
    expect(user.bio).toBe("bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
});
