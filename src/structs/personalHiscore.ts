import { Boss } from "../enums/boss";
import { BountyHunter } from "../enums/bountyHunter";
import { ClueScroll } from "../enums/clueScroll";
import { GameMode } from "../enums/gameMode";
import { Minigame } from "../enums/minigame";
import { Skill } from "../enums/skill";

import { RankedEntry } from "./rankedEntry";
import { SkillEntry } from "./skillEntry";

export interface PersonalHiscore {
  username: string;
  gameMode: GameMode;

  skills: Map<Skill, SkillEntry>;
  bountyHunter: Map<BountyHunter, RankedEntry>;
  clueScrolls: Map<ClueScroll, RankedEntry>;
  bosses: Map<Boss, RankedEntry>;
  minigames: Map<Minigame, RankedEntry>;
}
