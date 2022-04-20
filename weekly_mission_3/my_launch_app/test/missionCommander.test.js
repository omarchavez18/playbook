const MissionCommander = require("./../app/missionCommander");

describe("Unit Tests for Mission Commander Class", () => {
  test("1) Create a mission commander 'woopa'", () => {
    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Woopa");
  });
});
