# tztok
javascript wrapper for runescape and oldschool runescape api with some extra goodies

## Hiscores
```Javascript
const TzTok = require("tztok");

async function main() {
  return TzTok.Hiscore.getPlayer("Hey Jase");
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
    'Hitpoints' => { rank: 11, level: 99, experience: 200000000 },  
    'Ranged' => { rank: 11, level: 99, experience: 200000000 },     
    'Prayer' => { rank: 16, level: 99, experience: 200000000 },     
    'Magic' => { rank: 43, level: 99, experience: 200000000 },      
    'Cooking' => { rank: 35, level: 99, experience: 200000000 },    
    'Woodcutting' => { rank: 40, level: 99, experience: 200000000 },
    'Fletching' => { rank: 8, level: 99, experience: 200000000 },   
    'Fishing' => { rank: 67, level: 99, experience: 200000000 },    
    'Firemaking' => { rank: 95, level: 99, experience: 200000000 }, 
    'Crafting' => { rank: 3, level: 99, experience: 200000000 },    
    'Smithing' => { rank: 4, level: 99, experience: 200000000 },    
    'Mining' => { rank: 39, level: 99, experience: 200000000 },     
    'Herblore' => { rank: 6, level: 99, experience: 200000000 },
    'Agility' => { rank: 34, level: 99, experience: 200000000 },
    'Thieving' => { rank: 9, level: 99, experience: 200000000 },
    'Slayer' => { rank: 5, level: 99, experience: 200000000 },
    'Farming' => { rank: 21, level: 99, experience: 200000000 },
    'Runecraft' => { rank: 21, level: 99, experience: 200000000 },
    'Hunter' => { rank: 36, level: 99, experience: 200000000 },
    'Construction' => { rank: 10, level: 99, experience: 200000000 }       
  },
  bountyHunter: Map(2) {
    'BountyHunterHunter' => { rank: -1, score: -1 },
    'BountyHunterRogue' => { rank: -1, score: -1 }
  },
  clueScrolls: Map(7) {
    'ClueScrollsAll' => { rank: 14, score: 26886 },
    'ClueScrollsBeginner' => { rank: 202, score: 684 },
    'ClueScrollsEasy' => { rank: 13, score: 7667 },
    'ClueScrollsMedium' => { rank: 395, score: 2800 },
    'ClueScrollsHard' => { rank: 1, score: 13960 },
    'ClueScrollsElite' => { rank: 6780, score: 128 },
    'ClueScrollsMaster' => { rank: 8, score: 1647 }
  },
  bosses: Map(44) {
    'AbyssalSire' => { rank: 7856, score: 1041 },
    'AlchemicalHydra' => { rank: 4447, score: 2756 },
    'BarrowsChests' => { rank: -1, score: -1 },
    'Bryophyta' => { rank: -1, score: -1 },
    'Callisto' => { rank: -1, score: -1 },
    'Cerberus' => { rank: 499, score: 6433 },
    'ChambersOfXeric' => { rank: 102973, score: 55 },
    'ChambersOfXericChallengeMode' => { rank: 10640, score: 24 },
    'ChaosElemental' => { rank: -1, score: -1 },
    'ChaosFanatic' => { rank: -1, score: -1 },
    'CommanderZilyana' => { rank: 3664, score: 1313 },
    'CorporealBeast' => { rank: 329, score: 3327 },
    'CrazyArchaeologist' => { rank: -1, score: -1 },
    'DagannothPrime' => { rank: 3892, score: 1934 },
    'DagannothRex' => { rank: 5020, score: 1952 },
    'DagannothSupreme' => { rank: 3906, score: 1960 },
    'DerangedArchaeologist' => { rank: -1, score: -1 },
    'GeneralGraador' => { rank: -1, score: -1 },
    'GiantMole' => { rank: 10022, score: 1211 },
    'GrotesqueGuardians' => { rank: 1882, score: 1339 },
    'Hespori' => { rank: 77378, score: 43 },
    'KalphiteQueen' => { rank: 3670, score: 1002 },
    'KingBlackDragon' => { rank: 44191, score: 420 },
    'Kraken' => { rank: 36963, score: 2512 },
    'KreeArra' => { rank: 382, score: 4108 },
    'KrilTsutsaroth' => { rank: 1483, score: 1245 },
    'Mimic' => { rank: 3, score: 123 },
    'Nightmare' => { rank: 700, score: 2241 },
    'Obor' => { rank: -1, score: -1 },
    'Sarachnis' => { rank: 276, score: 3143 },
    'Scorpia' => { rank: -1, score: -1 },
    'Skotizo' => { rank: 41367, score: 39 },
    'TheGauntlet' => { rank: -1, score: -1 },
    'TheCorruptedGauntlet' => { rank: -1, score: -1 },
    'TheatreOfBlood' => { rank: 6228, score: 548 },
    'ThermonuclearSmokeDevil' => { rank: 2269, score: 3425 },
    'TzKalZuk' => { rank: 1129, score: 10 },
    'TzTokJad' => { rank: 70, score: 174 },
    'Venenatis' => { rank: -1, score: -1 },
    'Vetion' => { rank: 7510, score: 161 },
    'Vorkath' => { rank: 6512, score: 3240 },
    'Wintertodt' => { rank: 82494, score: 538 },
    'Zalcano' => { rank: 36829, score: 130 },
    'Zulrah' => { rank: 1793, score: 9227 }
  },
  minigames: Map(2) {
    'LastManStanding' => { rank: -1, score: -1 },
    'Soulwars' => { rank: 1753, score: 4547 }
  }
}
```

## Leaderboards
```Javascript
const TzTok = require("tztok");
const { Skill } = require("tztok/dist/enums");

async function main() {
  return TzTok.Leaderboard.getSkill(Skill.Overall)
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
  { rank: 4, username: 'senZe', level: 2277, experience: 4600000000 },
  {
    rank: 5,
    username: 'Tomdabom',
    level: 2277,
    experience: 4600000000
  },
  { rank: 6, username: 'Karma', level: 2277, experience: 4600000000 },
  { rank: 7, username: 'Harmony', level: 2277, experience: 4600000000 },
  {
    rank: 8,
    username: 'DedWilson',
    level: 2277,
    experience: 4600000000
  },
  {
    rank: 9,
    username: 'GodTormentor',
    level: 2277,
    experience: 4600000000
  },
  { rank: 10, username: 'Vinny', level: 2277, experience: 4600000000 },
  { rank: 11, username: 'borsi', level: 2277, experience: 4600000000 },
  {
    rank: 12,
    username: 'Brundeen',
    level: 2277,
    experience: 4580241528
  },
  { rank: 13, username: 'Eeli', level: 2277, experience: 4564498027 },
  { rank: 14, username: 'Oslo', level: 2277, experience: 4481728210 },
  { rank: 15, username: 'Oskar', level: 2277, experience: 4478223921 },
  {
    rank: 16,
    username: 'dumbfounded',
    level: 2277,
    experience: 4429177996
  },
  { rank: 17, username: 'Aziz', level: 2277, experience: 4395403640 },
  {
    rank: 18,
    username: 'he box jonge',
    level: 2277,
    experience: 4377729752
  },
  {
    rank: 19,
    username: 'baile y',
    level: 2277,
    experience: 4324766808
  },
  { rank: 20, username: 'Joonas', level: 2277, experience: 4315371098 },
  {
    rank: 21,
    username: 'Randalicious',
    level: 2277,
    experience: 4305084181
  },
  {
    rank: 22,
    username: 'blind idiot',
    level: 2277,
    experience: 4289805704
  },
  {
    rank: 23,
    username: 'Capt King',
    level: 2277,
    experience: 4234576987
  },
  {
    rank: 24,
    username: 'Dan Gleesac',
    level: 2277,
    experience: 4225379390
  },
  { rank: 25, username: 'Gustav', level: 2277, experience: 4163867985 }
]
```