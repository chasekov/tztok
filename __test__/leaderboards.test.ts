import * as TzTok from "../src/index";

test("Skills Leaderboard should return top 25", async () => {
  const entries = await TzTok.getSkillLeaderboard(TzTok.SkillType.Overall);

  // A page should always have 25 items
  expect(entries).toHaveLength(25);

  // Lynx Titan first to achieve 200 million exp in all skills, will forever be the top ranked player!
  // Congratulations Lynx Titan :)
  expect(entries[0].username).toEqual("Lynx Titan");
  expect(entries[0].level).toEqual(2277);
  expect(entries[0].experience).toEqual(4600000000);

  // Hey Jase second to achieve 200 million exp in all skills, will forever be the second ranked player!
  // Congratulations Hey Jase :)
  expect(entries[1].username).toEqual("Hey Jase");
  expect(entries[1].level).toEqual(2277);
  expect(entries[1].experience).toEqual(4600000000);
});

test("Skills Leaderboard should work for other skills", async () => {
  const entries = await TzTok.getSkillLeaderboard(TzTok.SkillType.Prayer);

  // A page should always have 25 items
  expect(entries).toHaveLength(25);

  expect(entries[0].username).toEqual("S T E N");
  expect(entries[0].level).toEqual(99);
  expect(entries[0].experience).toEqual(200000000);

  expect(entries[1].username).toEqual("Black Lodge");
  expect(entries[1].level).toEqual(99);
  expect(entries[1].experience).toEqual(200000000);
});

test("Skills Leaderboard should work for other game modes", async () => {
  const entries = await TzTok.getSkillLeaderboard(
    TzTok.SkillType.Overall,
    0,
    TzTok.GameMode.DeadmanMode
  );

  // A page should always have 25 items
  expect(entries).toHaveLength(25);
});

test("Minigame Leaderboard should return top 25 for bosses", async () => {
  const entries = await TzTok.getMinigameLeaderboard(TzTok.Boss.TzTokJad);

  // A page should always have 25 items
  expect(entries).toHaveLength(25);
});

test("Minigame Leaderboard should return top 25 for clues", async () => {
  const entries = await TzTok.getMinigameLeaderboard(
    TzTok.ClueScroll.ClueScrollsAll
  );

  // A page should always have 25 items
  expect(entries).toHaveLength(25);
});
