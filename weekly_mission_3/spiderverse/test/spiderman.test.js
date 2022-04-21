const spiderMan = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
  test("1) create an spiderman object", () => {
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
  test("2) Use the method getInfo()", () => {
    const tobey = new spiderMan("peter", 40, "tobey", 4, "sony");
    expect(tobey.getInfo()).toBe("Hey Im tobey from sony");
  });
});
