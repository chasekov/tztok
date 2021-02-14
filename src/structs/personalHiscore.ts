import { Boss, BountyHunter, ClueScroll, GameMode, TraditionalGame, SkillType } from "../enums";

import { RankedEntry } from "./rankedEntry";
import { SkillEntry } from "./skillEntry";

export interface PersonalHiscore {
  username: string;
  gameMode: GameMode;

  skills: Map<SkillType, SkillEntry>;
  bountyHunter: Map<BountyHunter, RankedEntry>;
  clueScrolls: Map<ClueScroll, RankedEntry>;
  bosses: Map<Boss, RankedEntry>;
  minigames: Map<TraditionalGame, RankedEntry>;
}
