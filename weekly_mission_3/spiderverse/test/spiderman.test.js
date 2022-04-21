const spiderMan = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
  test("create an spiderman object", () => {
    const peterParker = new spiderMan(
      "original spiderman",
      38,
      "Tobey Maguire",
      3,
      "sony studio"
    );
    expect(peterParker.name).toBe("original spiderman");
    expect(peterParker.age).toBe(38);
    expect(peterParker.actor).toBe("Tobey Maguire");
    expect(peterParker.moviesNumber).toBe(3);
    expect(peterParker.studio).toBe("sony studio");
  });
});
