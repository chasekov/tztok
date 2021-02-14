import * as TzTok from "../src/index";

test("getPlayer should work for normal game mode", async () => {
  const player = await TzTok.getPlayer("B0aty");
});

test("getPlayer should work with a space in name", async () => {
  const player = await TzTok.getPlayer("Lynx Titan");
});

test("getPlayer should work with Ironman Game Mode", async () => {
  const player = await TzTok.getPlayer("dids", TzTok.GameMode.Ironman);
});

