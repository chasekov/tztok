
import { Leaderboard } from "../src/index";
import { Skill } from "../src/enums/skill";

test("Skills Leaderboard should return top 25", async () => {
  const entries = await Leaderboard.getSkill(
    Skill.Overall
  );

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