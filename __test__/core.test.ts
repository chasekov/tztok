import * as TzTok from "../src/index";

test("get Player Count should work and return greater than 0 count", async () => {
  const playerCount = await TzTok.getPlayerCount();
  expect(playerCount).toBeGreaterThan(0);
});


