// External Imports
import * as cheerio from "cheerio";

// Local Imports
import {
  BASE_URL,
  NEWLINE_REGEX,
  COMMA_REGEX,
  SPACE_REGEX,
} from "../constants";

import { SkillType, MinigameType, GameMode } from "../enums";
import { LeaderboardSkill, LeaderboardMinigame } from "../structs";

// Local instances
import web from "../web";

/**
 *
 * @param skillType - The skill type refer to SkillType (Overall, Attack, Defense, Etc.)
 * @param page - The target page, default page 0
 * @param gameMode - The target game mode refer to GameMode (Normal, Ironman, Ultimate Ironman), default GameMode is Normal
 * @returns Promised array of Leaderboard Skill Entries
 */
const getSkill = async (
  skillType: SkillType,
  page: number = 0,
  gameMode: GameMode = GameMode.Normal
): Promise<LeaderboardSkill[]> => {
  const fullUrl = `${BASE_URL}/m=${gameMode}/overall?table=${skillType}&page=${page}`;
  const { data } = await web.get(fullUrl);

  const $ = cheerio.load(data);
  const hiscoreEntries: LeaderboardSkill[] = new Array(25);

  $(".personal-hiscores__row").each(
    (index: number, hiscoreEntry: cheerio.Element) => {
      const rawEntries = $(hiscoreEntry).find("td").toArray();

      const cleanEntries = rawEntries.map((rawEntry: cheerio.Element) =>
        $(rawEntry).text().replace(NEWLINE_REGEX, "")
      );

      const rank: number = parseFloat(cleanEntries[0].replace(COMMA_REGEX, ""));
      const username: string = cleanEntries[1].replace(SPACE_REGEX, " ");
      const level: number = parseFloat(
        cleanEntries[2].replace(COMMA_REGEX, "")
      );
      const experience: number = parseFloat(
        cleanEntries[3].replace(COMMA_REGEX, "")
      );

      hiscoreEntries[index] = {
        rank,
        username,
        level,
        experience,
      };
    }
  );

  return hiscoreEntries;
};

/**
 *
 * @param minigameType - The minigame type refer to MinigameType (Soul wars, Zulrah, Tztok-Jad, etc.)
 * @param page - The target page, default page 0
 * @param gameMode - The target game mode refer to GameMode (Normal, Ironman, Ultimate Ironman), default GameMode is Normal
 * @returns Promised array of Leaderboard Minigame Entries
 */
const getMinigame = async (
  minigameType: MinigameType,
  page: number = 0,
  gameMode: GameMode = GameMode.Normal
): Promise<LeaderboardMinigame[]> => {
  const fullUrl = `${BASE_URL}/m=${gameMode}/overall?category_type=1&table=${minigameType}&page=${page}`;
  const { data } = await web.get(fullUrl);

  const $ = cheerio.load(data);
  const hiscoreEntries: LeaderboardMinigame[] = new Array(25);

  $(".personal-hiscores__row").each(
    (index: number, hiscoreEntry: cheerio.Element) => {
      const rawEntries = $(hiscoreEntry).find("td").toArray();

      const cleanEntries = rawEntries.map((rawEntry: cheerio.Element) => {
        return $(rawEntry).text().replace(NEWLINE_REGEX, "");
      });

      const rank: number = parseFloat(cleanEntries[0].replace(COMMA_REGEX, ""));
      const username: string = cleanEntries[1].replace(SPACE_REGEX, "");
      const score: number = parseFloat(
        cleanEntries[2].replace(COMMA_REGEX, "")
      );

      hiscoreEntries[index] = {
        rank,
        username,
        score,
      };
    }
  );

  return hiscoreEntries;
};

export {
  getSkill as getSkillLeaderboard,
  getMinigame as getMinigameLeaderboard,
};
