// Local Imports
import web from "../web";
import { OLDSCHOOL_URL, PLAYER_COUNT_REGEX } from "../constants";

const getPlayerCount = async (): Promise<number> => {
  try {
    const result = await web.get(OLDSCHOOL_URL);
    const { data } = result;
    const groups = data.match(PLAYER_COUNT_REGEX).groups;

    if (!groups || !groups.playerCount) {
      throw new Error(
        `Unable to find player count in html at ${OLDSCHOOL_URL}`
      );
    }

    const playerCount = parseInt(groups.playerCount.replace(/,/g, ""), 10);
    return playerCount;
  } catch (error) {
    throw error;
  }
};

export { getPlayerCount };
