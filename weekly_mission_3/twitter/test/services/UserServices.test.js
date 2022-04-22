const UserService = require("./../../app/services/UserService");

describe("1) Test for UserService", () => {
  test("Create as new user using the UserService", () => {
    const user = UserService.create(1, "eduardocgdv", "eduardo");
    expect(user.username).toBe("eduardocgdv");
    expect(user.name).toBe("eduardo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "eduardocgdv", "eduardo");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("eduardocgdv");
    expect(userInfoInList[2]).toBe("eduardo");
    expect(userInfoInList[3]).toBe("Sin bio");
  });

  test("3) Update username", () => {
    const user = UserService.create(1, "omarcgdv", "omar");
    UserService.updateUserUsername(user, "omarChavez");
    expect(user.username).toBe("omarChavez");
  });

  test("4) Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "omarchavez1", "Omar");
    const user2 = UserService.create(1, "omarchavez2", "Omar");
    const user3 = UserService.create(1, "omarchavez3", "Omar");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("omarchavez1");
    expect(usernames).toContain("omarchavez2");
    expect(usernames).toContain("omarchavez3");
  });
});
