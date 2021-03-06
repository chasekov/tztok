import { Boss } from "./boss";
import { BountyHunter } from "./bountyHunter";
import { ClueScroll } from "./clueScroll";
import { GameMode } from "./gameMode";
import { TraditionalGame } from "./traditionalGame";
import { SkillType } from "./skillType";

type MinigameType = Boss | BountyHunter | ClueScroll | TraditionalGame;

export {
  Boss,
  BountyHunter,
  ClueScroll,
  GameMode,
  TraditionalGame,
  SkillType,
  MinigameType,
};
