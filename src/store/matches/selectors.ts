import { TAppState } from "../../entities/Store";
import { TPlayer } from "../../entities/Player";

// selector: 1 parameter: state
export function selectMatchIds(state: TAppState): number[] {
  return state.matches.map((match) => match.id);
}

export function selectPlayersByMatchId(matchId: number) {
  return function (state: TAppState): TPlayer[] {
    const match = state.matches.find((match) => match.id === matchId);

    if (match === undefined) {
      return [];
    }

    return match.players;
  };
}
