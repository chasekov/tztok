import { Hiscore } from "../src/index";
import { GameMode } from "../src/enums/gameMode";

test("getPlayer should work for normal game mode", async () => {
  const player = await Hiscore.getPlayer("B0aty");
});

test("getPlayer should work with a space in name", async () => {
  const player = await Hiscore.getPlayer("Lynx Titan");
});

test("getPlayer should work with Ironman Game Mode", async () => {
  const player = await Hiscore.getPlayer("dids", GameMode.Ironman);
});

