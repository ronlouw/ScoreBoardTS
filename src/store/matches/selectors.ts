import { TAppState } from "../../entities/Store";

// selector: 1 parameter: state
export function selectMatchIds(state: TAppState): number[] {
  return state.matches.map((match) => match.id);
}
