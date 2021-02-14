// Local instances
import axios from 'axios';

import { BASE_URL } from '../constants';
import { GameMode, SkillType, BountyHunter, ClueScroll, Boss, TraditionalGame} from '../enums';
import { SkillEntry, RankedEntry, PersonalHiscore } from '../structs';

const _skillsFromCsv = (lines: string[]): Map<SkillType, SkillEntry> => {
  const entries: Map<SkillType, SkillEntry> = new Map();
  
  lines.forEach((line, index: number) => { 
    const attribute = line.split(',');

    entries.set(Object.values(SkillType)[index] as SkillType, {
      rank: parseFloat(attribute[0]),
      level: parseFloat(attribute[1]),
      experience: parseFloat(attribute[2])
    });
  });

  return entries;
}

const _bountyHunterFromCsv = (lines: string[]): Map<BountyHunter, RankedEntry> => {
  const entries: Map<BountyHunter, RankedEntry> = new Map();
  
  lines.forEach((line, index: number) => { 
    const attribute = line.split(',');

    entries.set(Object.values(BountyHunter)[index] as BountyHunter, {
      rank: parseFloat(attribute[0]),
      score: parseFloat(attribute[1])
    });
  });

  return entries;
}

const _cluesFromCsv = (lines: string[]): Map<ClueScroll, RankedEntry> => {
  const entries: Map<ClueScroll, RankedEntry> = new Map();
  
  lines.forEach((line, index: number) => { 
    const attribute = line.split(',');

    entries.set(Object.values(ClueScroll)[index] as ClueScroll, {
      rank: parseFloat(attribute[0]),
      score: parseFloat(attribute[1])
    });
  });

  return entries;
}

const _bossesFromCsv = (lines: string[]): Map<Boss, RankedEntry> => {
  const entries: Map<Boss, RankedEntry> = new Map();
  
  lines.forEach((line, index: number) => { 
    const attribute = line.split(',');

    entries.set(Object.values(Boss)[index] as Boss, {
      rank: parseFloat(attribute[0]),
      score: parseFloat(attribute[1])
    });
  });

  return entries;
}

const _minigamesFromCsv = (lines: string[]): Map<TraditionalGame, RankedEntry> => {
  const entries: Map<TraditionalGame, RankedEntry> = new Map();
  
  lines.forEach((line, index: number) => { 
    const attribute = line.split(',');

    entries.set(Object.values(TraditionalGame)[index] as TraditionalGame, {
      rank: parseFloat(attribute[0]),
      score: parseFloat(attribute[1])
    });
  });

  return entries;
}

/**
 * Get a player's personal hiscore including skills, clue scrolls, bosses, minigames
 * @param username Players username e.g. B0aty, Hey Jase, Lynx Titan
 * @param gameMode Target Game mode e.g. Normal, Ironman, Ultimate Ironman
 * @returns Promise of a PersonalHiscore entry
 */
const getPlayer = async (username: string, gameMode: GameMode = GameMode.Normal): Promise<PersonalHiscore> => {
  const url = `${BASE_URL}/m=${gameMode}/index_lite.ws?player=${username}`;

  const { data } = await axios.get(url);
  const lines: string[] = data.split('\n');

  return {
    username,
    gameMode,
    skills: _skillsFromCsv(lines.slice(0, 24)),
    bountyHunter: _bountyHunterFromCsv(lines.slice(24, 26)),
    clueScrolls: _cluesFromCsv(lines.slice(27, 34)),
    bosses: _bossesFromCsv(lines.slice(36, 80)),
    minigames: _minigamesFromCsv([lines[26], lines[35]])
  };
}

export {
  getPlayer
}