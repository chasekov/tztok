<p align="center">
  <img width="200" src="https://oldschool.runescape.wiki/images/thumb/8/82/TzTok-Jad.png/280px-TzTok-Jad.png?87507" alt="TzTok-Jad">
</p>

# TzTok
Javascript Wrapper for Oldschool Runescape Unofficial API... With some extra goodies

## Personal Hiscores
```Javascript
const TzTok = require("tztok");

async function main() {
  return TzTok.getPlayer("Hey Jase");
}
main().then(console.log).catch(console.error);
```
```Javascript
{
  username: 'Hey Jase',
  gameMode: 'hiscore_oldschool',
  skills: Map(24) {
    'Overall' => { rank: 2, level: 2277, experience: 4600000000 },
    'Attack' => { rank: 21, level: 99, experience: 200000000 },
    'Defence' => { rank: 60, level: 99, experience: 200000000 },
    'Strength' => { rank: 68, level: 99, experience: 200000000 },
    ...
  },
  bountyHunter: Map(2) {
    'BountyHunterHunter' => { rank: -1, score: -1 },
    'BountyHunterRogue' => { rank: -1, score: -1 }
  },
  clueScrolls: Map(7) {
    'ClueScrollsAll' => { rank: 14, score: 26887 },
    'ClueScrollsBeginner' => { rank: 202, score: 684 },
    ...
  },
  bosses: Map(44) {
    'AbyssalSire' => { rank: 7859, score: 1041 },
    'AlchemicalHydra' => { rank: 4458, score: 2756 },
    'BarrowsChests' => { rank: -1, score: -1 },
    'Bryophyta' => { rank: -1, score: -1 },
    ...
  },
  minigames: Map(2) {
    'LastManStanding' => { rank: -1, score: -1 },
    'Soulwars' => { rank: 1798, score: 4547 }
  }
}
```

## Skill Leaderboards
```Javascript
const TzTok = require("tztok");

async function main() {
  return TzTok.getSkillLeaderboard(TzTok.SkillType.Overall)
}
main().then(console.log).catch(console.error);
```
```Javascript
[
  {
    rank: 1,
    username: 'Lynx Titan',
    level: 2277,
    experience: 4600000000
  },
  {
    rank: 2,
    username: 'Hey Jase',
    level: 2277,
    experience: 4600000000
  },
  {
    rank: 3,
    username: 'ShawnBay',
    level: 2277,
    experience: 4600000000
  },
  ...
]
```

## Minigame Leaderboards
```Javascript
const TzTok = require("tztok");

async function main() {
  return TzTok.getMinigameLeaderboard(TzTok.Boss.GeneralGraador)
}
main().then(console.log).catch(console.error);
```
```Javascript
[
  { rank: 1, username: 'ProfUtonium', score: 43757 }, 
  { rank: 2, username: 'zerkerseven', score: 43506 }, 
  { rank: 3, username: 'MengLucifer', score: 32122 }, 
  ...
]
```

## Online Player Count
```Javascript
const TzTok = require("tztok");

async function main() {
  return TzTok.getPlayerCount();
}
main().then(console.log).catch(console.error);
```
```Javascript
92032
```